import React, { useState, useEffect } from "react";
import axios from "axios";
import { Search, Phone, MapPin, User, Edit2, Briefcase } from "lucide-react";
import { useNavigate } from "react-router-dom";
import.meta.env.VITE_API_URL
// --- Sub-Component: Individual Guide Card ---
const GuideCard = ({ guide, onToggleStatus, onEdit }) => {
    return (
        <div className="bg-white rounded-2xl shadow-[0_2px_15px_rgba(0,0,0,0.05)] border border-gray-100 p-4 md:p-6 mb-6 flex flex-col md:flex-row items-center justify-between gap-6 transition-all hover:shadow-lg">
            
            {/* 1. Profile & Basic Info */}
            <div className="flex items-center gap-4 w-full md:w-auto">
                <div className="w-16 h-16 rounded-full bg-[#5937E0] flex items-center justify-center text-white flex-shrink-0">
                    <User size={32} />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-gray-900">{guide.guideName}</h3>
                    <p className="text-gray-500 text-sm font-medium">ID: {guide.guideId}</p>
                </div>
            </div>

            {/* 2. Contact Info & Experience */}
            <div className="flex flex-col gap-2 w-full md:w-auto">
                <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center text-white flex-shrink-0">
                        <Phone size={16} />
                    </div>
                    <span className="font-semibold">{guide.guidePhoneNo}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center text-white flex-shrink-0">
                        <MapPin size={16} />
                    </div>
                    <span className="font-medium">{guide.guideAddress}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                    <div className="w-8 h-8 rounded-full bg-[#5937E0] flex items-center justify-center text-white flex-shrink-0">
                        <Briefcase size={16} />
                    </div>
                    <span className="font-medium">{guide.guideExperience} Years Exp.</span>
                </div>
            </div>

            {/* 3. Actions (Toggle & Edit) */}
            <div className="flex items-center gap-6 w-full md:w-auto justify-between md:justify-end">
                <div className="flex flex-col items-center gap-1">
                    <label className="relative inline-flex items-center cursor-pointer">
                        <input
                            type="checkbox"
                            className="sr-only peer"
                            checked={guide.engage}
                            // CHANGE 1: Passing guide.guideId instead of _id
                            onChange={() => onToggleStatus(guide.guideId, guide.engage)}
                        />
                        <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none rounded-full peer dark:bg-gray-300 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-[#5937E0]"></div>
                    </label>
                    <span className="text-xs font-medium text-gray-500">
                        {guide.engage ? "Engaged" : "Free"}
                    </span>
                </div>

                <button
                    // CHANGE 2: Passing guide.guideId instead of _id
                    onClick={() => onEdit(guide.guideId)}
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
    const navigate = useNavigate();

    // --- Fetch Data ---
    useEffect(() => {
        const fetchGuides = async () => {
            try {
                setLoading(true);
                const response = await axios.get(`${import.meta.env.VITE_API_URL}/api/v1/get/allGuide`);
                const data = Array.isArray(response.data) ? response.data : response.data.data || [];
                setGuides(data);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching guides:", error);
                setLoading(false);
            }
        };
        fetchGuides();
    }, []);

    // --- Toggle Status Handler ---
    const handleToggleStatus = async (guideId, currentStatus) => {
        const newStatus = !currentStatus;

        // 1. Optimistic Update (Use guideId for finding the item)
        setGuides((prevGuides) =>
            prevGuides.map((guide) =>
                guide.guideId === guideId ? { ...guide, engage: newStatus } : guide
            )
        );

        try {
            // 2. Send API Request using guideId in URL
            await axios.patch(`http://localhost:3000/api/v1/modify/guide/${guideId}`, {
                engage: newStatus
            });
            console.log(`Guide ${guideId} status updated to ${newStatus}`);
        } catch (error) {
            console.error("Failed to update status:", error);
            alert("Failed to update status. Please try again.");
            // 3. Rollback UI
            setGuides((prevGuides) =>
                prevGuides.map((guide) =>
                    guide.guideId === guideId ? { ...guide, engage: currentStatus } : guide
                )
            );
        }
    };

    const handleEdit = (guideId) => {
        // Navigates to e.g., /dashboard/edit-guide/G-101
        navigate(`/dashboard/edit-guide/${guideId}`);
    };

    const handleSearch = (e) => {
        e.preventDefault();
    };

    const filteredGuides = guides.filter(
        (guide) =>
            guide.guideId?.toLowerCase().includes(searchTerm.toLowerCase()) ||
            guide.guideName?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="p-6 md:p-10 min-h-screen bg-[#FAFAFA] font-sans">
            {/* Header & Search */}
            <div className="max-w-4xl mx-auto mb-10">
                <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
                    <div className="relative w-full md:w-[60%]">
                        <input
                            type="text"
                            placeholder="Search By Guide Id or Name"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full px-6 py-3 rounded-xl border border-gray-300 focus:border-[#5937E0] focus:ring-1 focus:ring-[#5937E0] outline-none text-gray-700 bg-white shadow-sm"
                        />
                    </div>
                    <button onClick={handleSearch} className="w-full md:w-auto px-8 py-3 bg-[#5937E0] hover:bg-[#482ab8] text-white font-semibold rounded-xl transition-all shadow-md active:scale-95">
                        Search
                    </button>
                </div>
                <h2 className="text-center text-3xl font-bold text-black mt-8">All Guides</h2>
            </div>

            {/* Guides List */}
            <div className="max-w-5xl mx-auto">
                {loading ? (
                    <div className="text-center py-10 text-gray-500">Loading guides...</div>
                ) : (
                    <div className="flex flex-col gap-4">
                        {filteredGuides.length > 0 ? (
                            filteredGuides.map((guide) => (
                                <GuideCard
                                    key={guide._id} // Keep _id for React key (it's unique)
                                    guide={guide}
                                    onToggleStatus={handleToggleStatus}
                                    onEdit={handleEdit}
                                />
                            ))
                        ) : (
                            <div className="text-center text-gray-400 mt-10">No guides found.</div>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default ManageGuide;