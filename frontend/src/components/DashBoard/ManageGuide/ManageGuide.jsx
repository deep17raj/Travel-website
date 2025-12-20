import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search, Phone, MapPin, User, Edit2 } from "lucide-react";

// --- Sub-Component: Individual Guide Card ---
const GuideCard = ({ guide, onToggleStatus, onEdit }) => {
    return (
        <div className="bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-gray-100 p-4 md:p-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-lg">
            {/* 1. Profile & Basic Info */}
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-16 h-16 rounded-full bg-[#5937E0] flex items-center justify-center text-white flex-shrink-0">
                    {/* If image exists, show img, else show Icon */}
                    {guide.image ? (
                        <img
                            src={guide.image}
                            alt={guide.name}
                            className="w-full h-full rounded-full object-cover"
                        />
                    ) : (
                        <User size={32} />
                    )}
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{guide.name}</h3>
                    <p className="text-gray-500 text-sm font-medium">
                        ID: {guide.guideId}
                    </p>
                </div>
            </div>

            {/* 2. Contact Info */}
            <div className="flex flex-col sm:flex-row gap-4 md:gap-8 w-full md:w-auto">
                <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center text-white flex-shrink-0">
                        <Phone size={16} />
                    </div>
                    <span className="font-semibold">{guide.phone}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center text-white flex-shrink-0">
                        <MapPin size={16} />
                    </div>
                    <span className="font-medium">{guide.location}</span>
                </div>
            </div>

            {/* 3. Actions (Toggle & Edit) */}
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                {/* Toggle Switch */}
                <div className="flex flex-col items-center gap-1">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={guide.isEngaged}
                            onChange={() => onToggleStatus(guide.id)}
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#5937E0]"></div>
                    </label>
                    <span className="text-xs font-medium text-gray-500">Mark engage</span>
                </div>

                {/* Edit Button */}
                <button
                    onClick={() => onEdit(guide.id)}
                    className="w-10 h-10 rounded-full bg-[#5937E0] flex items-center justify-center text-white hover:bg-[#482ab8] transition-colors shadow-md hover:shadow-lg"
                >
                    <Edit2 size={18} />
                </button>
            </div>
        </div>
    );
};

// --- Main Component ---
const ManageGuide = () => {
    const [guides, setGuides] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [loading, setLoading] = useState(true);

    // --- Fetch Data (Mock) ---
    useEffect(() => {
        // Replace this with your actual API call: axios.get('/api/guides')
        const fetchGuides = async () => {
            try {
                setLoading(true);
                // Simulating backend response
                const mockData = [
                    {
                        id: 1,
                        guideId: "G-101",
                        name: "Sujal das",
                        phone: "88666262323",
                        location: "Dehradun Uttarakhand",
                        isEngaged: true,
                    },
                    {
                        id: 2,
                        guideId: "G-102",
                        name: "Amit Verma",
                        phone: "9876543210",
                        location: "Rishikesh Uttarakhand",
                        isEngaged: false,
                    },
                    {
                        id: 3,
                        guideId: "G-103",
                        name: "Priya Singh",
                        phone: "7766554433",
                        location: "Manali Himachal",
                        isEngaged: false,
                    },
                ];

                setGuides(mockData);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching guides:", error);
                setLoading(false);
            }
        };

        fetchGuides();
    }, []);

    // --- Handlers ---
    const handleSearch = (e) => {
        e.preventDefault();
        console.log("Searching for Guide ID:", searchTerm);
        // You can filter locally or trigger a backend search here
    };

    const handleToggleStatus = (id) => {
        setGuides(
            guides.map((guide) =>
                guide.id === id ? { ...guide, isEngaged: !guide.isEngaged } : guide
            )
        );

        // Optional: Send update to backend
        // axios.patch(`/api/guides/${id}`, { isEngaged: !currentStatus });
    };

    const handleEdit = (id) => {
        console.log("Edit guide:", id);
        // navigation.navigate(`/admin/edit-guide/${id}`);
    };

    // Filter guides based on search term
    const filteredGuides = guides.filter(
        (guide) =>
            guide.guideId.toLowerCase().includes(searchTerm.toLowerCase()) ||
            guide.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 md:p-10 min-h-screen bg-[#FAFAFA] font-sans">
            {/* Header & Search */}
            <div className="max-w-4xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    {/* Search Input */}
                    <div className="relative w-full md:w-[60%]">
                        <input
                            type="text"
                            placeholder="Search By Guide Id"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-[#5937E0] focus:ring-1 focus:ring-[#5937E0] outline-none text-gray-700 bg-white shadow-sm"
                        />
                    </div>

                    {/* Search Button */}
                    <button
                        onClick={handleSearch}
                        className="w-full md:w-auto px-8 py-3 bg-[#5937E0] hover:bg-[#482ab8] text-white font-semibold rounded-xl transition-all shadow-md active:scale-95"
                    >
                        Search
                    </button>
                </div>

                <h2 className="text-center text-3xl font-bold text-black mt-8">
                    All Guides
                </h2>
            </div>

            {/* Guides List */}
            <div className="max-w-5xl mx-auto">
                {loading ? (
                    <div className="text-center py-10">Loading guides...</div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {filteredGuides.length > 0 ? (
                            filteredGuides.map((guide) => (
                                <GuideCard
                                    key={guide.id}
                                    guide={guide}
                                    onToggleStatus={handleToggleStatus}
                                    onEdit={handleEdit}
                                />
                            ))
                        ) : (
                            <div className="text-center text-gray-400 mt-10">
                                No guides found.
                            </div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageGuide;
