import React, { useState } from "react";
import axios from "axios";

const NewGuide = () => {
    const [formData, setFormData] = useState({
        guideName: "", guideId: "", guideEmail: "",
        guidePhoneNo: "", guidePhoneNo2: "",
        guideExperience: "", guideAddress: "",
    });

    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);

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
        if (!formData.guideEmail.trim() || !emailRegex.test(formData.guideEmail)) newErrors.guideEmail = "Valid email is required";
        if (!formData.guidePhoneNo.trim() || !phoneRegex.test(formData.guidePhoneNo)) newErrors.guidePhoneNo = "Valid 10-digit phone required";
        if (formData.guidePhoneNo2.trim() && !phoneRegex.test(formData.guidePhoneNo2)) newErrors.guidePhoneNo2 = "Valid 10-digit phone required";
        if (!formData.guideExperience) newErrors.guideExperience = "Experience is required";
        if (!formData.guideAddress.trim()) newErrors.guideAddress = "Address is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitSuccess(null);

        if (validateForm()) {
            setIsSubmitting(true);
            try {
                const payload = { ...formData };
                if (!payload.guidePhoneNo2 || payload.guidePhoneNo2.trim() === "") delete payload.guidePhoneNo2;

                // --- POST REQUEST ---
                await axios.post("http://localhost:3000/api/v1/save/create/new/guide", payload);

                setSubmitSuccess("Guide created successfully!");
                setFormData({
                    guideName: "", guideId: "", guideEmail: "",
                    guidePhoneNo: "", guidePhoneNo2: "",
                    guideExperience: "", guideAddress: "",
                });
            } catch (error) {
                console.error("Error creating guide:", error);
                setSubmitSuccess("Failed to create guide.");
            } finally {
                setIsSubmitting(false);
            }
        }
    };

    const inputClass = (errorMsg) => `w-full px-4 py-3 rounded-xl border ${errorMsg ? "border-red-500 bg-red-50" : "border-gray-400 focus:border-[#5937E0]"} text-gray-800 placeholder-gray-500 outline-none transition-all duration-200`;

    return (
        <div className="h-full w-full bg-gray-50 flex items-center justify-center p-4 px-6 font-sans">
            <div className="bg-white w-full max-w-full md:max-w-lg rounded-3xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">Create A new Guide</h2>
                {submitSuccess && <div className={`mb-6 text-center p-3 rounded-lg ${submitSuccess.includes("Success") || submitSuccess.includes("successfully") ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}>{submitSuccess}</div>}
                
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Inputs similar to UpdateGuide but without pre-filled data loading */}
                    <div>
                        <input type="text" name="guideName" value={formData.guideName} onChange={handleChange} placeholder="Guide Name" className={inputClass(errors.guideName)} />
                        {errors.guideName && <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideName}</p>}
                    </div>
                    <div>
                        <input type="text" name="guideId" value={formData.guideId} onChange={handleChange} placeholder="Guide Id" className={inputClass(errors.guideId)} />
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
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewGuide;