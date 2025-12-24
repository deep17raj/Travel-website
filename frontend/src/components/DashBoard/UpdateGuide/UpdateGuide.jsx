import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import.meta.env.VITE_API_URL
const UpdateGuide = () => {
    const { id } = useParams(); // Get the ID from the URL
    const navigate = useNavigate();

    // State matches the Schema
    const [formData, setFormData] = useState({
        guideName: "",
        guideId: "",
        guideEmail: "",
        guidePhoneNo: "",
        guidePhoneNo2: "",
        guideExperience: "",
        guideAddress: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [statusMessage, setStatusMessage] = useState(null);
    const [isLoadingData, setIsLoadingData] = useState(true);

    // --- FETCH EXISTING DATA ---
    useEffect(() => {
        const fetchGuideData = async () => {
            try {
                // Fetch all guides and find the one matching the ID
                // (Ideally, backend should have a get-by-id route, but this works with your current setup)
                const response = await axios.get("http://localhost:3000/api/v1/get/allGuide");
                
                const guides = response.data.data || response.data;
                const guideToEdit = guides.find((g) => g.guideId === id);

                if (guideToEdit) {
                    setFormData({
                        guideName: guideToEdit.guideName || "",
                        guideId: guideToEdit.guideId || "",
                        guideEmail: guideToEdit.guideEmail || "",
                        guidePhoneNo: guideToEdit.guidePhoneNo || "",
                        guidePhoneNo2: guideToEdit.guidePhoneNo2 || "",
                        guideExperience: guideToEdit.guideExperience || "",
                        guideAddress: guideToEdit.guideAddress || "",
                    });
                } else {
                    setStatusMessage("Guide not found.");
                }
            } catch (error) {
                console.error("Error fetching guide data:", error);
                setStatusMessage("Failed to load guide details.");
            } finally {
                setIsLoadingData(false);
            }
        };

        fetchGuideData();
    }, [id]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (errors[name]) setErrors({ ...errors, [name]: "" });
    };

    const validateForm = () => {
        let newErrors = {};
        const phoneRegex = /^\d{10}$/;
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.guideName.trim()) newErrors.guideName = "Guide Name is required";
        if (!formData.guideId.trim()) newErrors.guideId = "Guide Id is required";
        
        if (!formData.guideEmail.trim()) newErrors.guideEmail = "Email is required";
        else if (!emailRegex.test(formData.guideEmail)) newErrors.guideEmail = "Enter a valid email";

        if (!formData.guidePhoneNo.trim()) newErrors.guidePhoneNo = "Primary phone is required";
        else if (!phoneRegex.test(formData.guidePhoneNo)) newErrors.guidePhoneNo = "Enter 10-digit number";

        if (formData.guidePhoneNo2.trim() && !phoneRegex.test(formData.guidePhoneNo2)) {
            newErrors.guidePhoneNo2 = "Enter 10-digit number";
        }

        if (!formData.guideExperience) newErrors.guideExperience = "Experience is required";
        if (!formData.guideAddress.trim()) newErrors.guideAddress = "Address is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleUpdate = async (e) => {
        e.preventDefault();
        setStatusMessage(null);

        if (validateForm()) {
            setIsSubmitting(true);
            try {
                const payload = { ...formData };
                if (!payload.guidePhoneNo2 || payload.guidePhoneNo2.trim() === "") {
                    delete payload.guidePhoneNo2;
                }

                // --- PATCH REQUEST ---
                await axios.patch(
                    `${import.meta.env.VITE_API_URL}/api/v1/modify/guide/${id}`,
                    payload
                );

                setStatusMessage("Guide updated successfully!");
                
                // Optional: Navigate back after short delay
                setTimeout(() => navigate('/dashboard'), 500);

            } catch (error) {
                console.error("Error updating guide:", error);
                const msg = error.response?.data?.message || "Server Error";
                setStatusMessage(`Failed: ${msg}`);
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const inputClass = (errorMsg) =>
        `w-full px-4 py-3 rounded-xl border ${errorMsg
            ? "border-red-500 bg-red-50"
            : "border-gray-400 focus:border-[#5937E0]"
        } text-gray-800 placeholder-gray-500 outline-none transition-all duration-200`;

    if (isLoadingData) return <div className="text-center mt-20">Loading...</div>;

    return (
        <div className="h-full w-full bg-gray-50 flex items-center justify-center p-4 px-6 font-sans">
            <div className="bg-white w-full max-w-full md:max-w-lg rounded-3xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
                    Update Guide
                </h2>

                {statusMessage && (
                    <div className={`mb-6 text-center p-3 rounded-lg ${statusMessage.includes("success") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>
                        {statusMessage}
                    </div>
                )}

                <form onSubmit={handleUpdate} className="flex flex-col gap-5">
                    {/* Reuse Inputs (Same as NewGuide) */}
                    <div>
                        <input type="text" name="guideName" value={formData.guideName} onChange={handleChange} placeholder="Guide Name" className={inputClass(errors.guideName)} />
                        {errors.guideName && <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideName}</p>}
                    </div>
                    <div>
                        <input type="text" name="guideId" value={formData.guideId} onChange={handleChange} placeholder="Guide Id" className={inputClass(errors.guideId)} disabled />
                        {errors.guideId && <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideId}</p>}
                    </div>
                    <div>
                        <input type="email" name="guideEmail" value={formData.guideEmail} onChange={handleChange} placeholder="Email Address" className={inputClass(errors.guideEmail)} />
                        {errors.guideEmail && <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideEmail}</p>}
                    </div>
                    <div>
                        <input type="tel" name="guidePhoneNo" value={formData.guidePhoneNo} onChange={handleChange} placeholder="Primary phone no" maxLength={10} className={inputClass(errors.guidePhoneNo)} />
                        {errors.guidePhoneNo && <p className="text-red-500 text-sm mt-1 ml-2">{errors.guidePhoneNo}</p>}
                    </div>
                    <div>
                        <input type="tel" name="guidePhoneNo2" value={formData.guidePhoneNo2} onChange={handleChange} placeholder="Secondary phone no (Optional)" maxLength={10} className={inputClass(errors.guidePhoneNo2)} />
                        {errors.guidePhoneNo2 && <p className="text-red-500 text-sm mt-1 ml-2">{errors.guidePhoneNo2}</p>}
                    </div>
                    <div>
                        <input type="number" name="guideExperience" value={formData.guideExperience} onChange={handleChange} placeholder="Years of Experience" min="0" className={inputClass(errors.guideExperience)} />
                        {errors.guideExperience && <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideExperience}</p>}
                    </div>
                    <div>
                        <textarea name="guideAddress" value={formData.guideAddress} onChange={handleChange} placeholder="Address" rows="4" className={`${inputClass(errors.guideAddress)} resize-none`}></textarea>
                        {errors.guideAddress && <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideAddress}</p>}
                    </div>

                    <div className="mt-6 flex justify-center">
                        <button type="submit" disabled={isSubmitting} className="bg-[#5937E0] hover:bg-[#482ab8] text-white text-xl font-bold py-3 px-16 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70">
                            {isSubmitting ? "Updating..." : "Update"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UpdateGuide;