import React, { useState } from "react";
import axios from "axios";

const NewGuide = () => {
    // 1. Updated state keys to match Mongoose Schema
    const [formData, setFormData] = useState({
        guideName: "",
        guideId: "",
        guideEmail: "",        // Added Email Field
        guidePhoneNo: "",      
        guidePhoneNo2: "",     
        guideExperience: "",   
        guideAddress: "",      
    });

    // State for validation errors and submission status
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(null);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        // Clear error when user starts typing again
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: "",
            });
        }
    };

    // Validation Logic
    const validateForm = () => {
        let newErrors = {};
        const phoneRegex = /^\d{10}$/;
        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!formData.guideName.trim()) newErrors.guideName = "Guide Name is required";
        if (!formData.guideId.trim()) newErrors.guideId = "Guide Id is required";

        // Validate Email
        if (!formData.guideEmail.trim()) {
            newErrors.guideEmail = "Email is required";
        } else if (!emailRegex.test(formData.guideEmail)) {
            newErrors.guideEmail = "Enter a valid email address";
        }

        // Validate Primary Phone
        if (!formData.guidePhoneNo.trim()) {
            newErrors.guidePhoneNo = "Primary phone no is required";
        } else if (!phoneRegex.test(formData.guidePhoneNo)) {
            newErrors.guidePhoneNo = "Enter a valid 10-digit phone number";
        }

        // Validate Secondary Phone (Optional)
        if (
            formData.guidePhoneNo2.trim() &&
            !phoneRegex.test(formData.guidePhoneNo2)
        ) {
            newErrors.guidePhoneNo2 = "Enter a valid 10-digit phone number";
        }

        // Validate Experience
        if (!formData.guideExperience.trim()) {
            newErrors.guideExperience = "Years of Experience is required";
        } else if (isNaN(formData.guideExperience) || Number(formData.guideExperience) < 0) {
            newErrors.guideExperience = "Enter a valid positive number";
        }

        // Validate Address
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
                // 2. Prepare Payload
                const payload = { ...formData };
                
                // 3. Logic to delete guidePhoneNo2 key if empty
                if (!payload.guidePhoneNo2 || payload.guidePhoneNo2.trim() === "") {
                    delete payload.guidePhoneNo2;
                }

                console.log("Sending Payload:", payload);

                // --- Axios Request Start ---
                const response = await axios.post(
                    "http://localhost:3000/api/v1/save/create/new/guide",
                    payload
                );

                console.log("Server Response:", response.data);
                setSubmitSuccess("Guide created successfully!");

                // Reset form on success
                setFormData({
                    guideName: "",
                    guideId: "",
                    guideEmail: "",
                    guidePhoneNo: "",
                    guidePhoneNo2: "",
                    guideExperience: "",
                    guideAddress: "",
                });
            } catch (error) {
                console.error("Error submitting form:", error);

                // Error handling
                if (error.response) {
                    setSubmitSuccess(
                        `Failed: ${error.response.data.message || "Server Error"}`
                    );
                } else if (error.request) {
                    setSubmitSuccess(
                        "Failed: No response from server. Check your connection."
                    );
                } else {
                    setSubmitSuccess("Failed to send request.");
                }
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

    return (
        <div className="h-full w-full bg-gray-50 flex items-center justify-center p-4 px-6 font-sans">
            <div className="bg-white w-full max-w-full md:max-w-lg rounded-3xl shadow-xl p-8 md:p-10">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-black mb-10">
                    Create A new Guide
                </h2>

                {submitSuccess && (
                    <div
                        className={`mb-6 text-center p-3 rounded-lg ${submitSuccess.includes("Success") ||
                            submitSuccess.includes("successfully")
                            ? "bg-green-100 text-green-700"
                            : "bg-red-100 text-red-700"
                        }`}
                    >
                        {submitSuccess}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                    {/* Guide Name */}
                    <div>
                        <input
                            type="text"
                            name="guideName"
                            value={formData.guideName}
                            onChange={handleChange}
                            placeholder="Guide Name"
                            className={inputClass(errors.guideName)}
                        />
                        {errors.guideName && (
                            <p className="text-red-500 text-sm mt-1 ml-2">
                                {errors.guideName}
                            </p>
                        )}
                    </div>

                    {/* Guide ID */}
                    <div>
                        <input
                            type="text"
                            name="guideId"
                            value={formData.guideId}
                            onChange={handleChange}
                            placeholder="Guide Id"
                            className={inputClass(errors.guideId)}
                        />
                        {errors.guideId && (
                            <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideId}</p>
                        )}
                    </div>

                    {/* Email Field (Added) */}
                    <div>
                        <input
                            type="email"
                            name="guideEmail"
                            value={formData.guideEmail}
                            onChange={handleChange}
                            placeholder="Email Address"
                            className={inputClass(errors.guideEmail)}
                        />
                        {errors.guideEmail && (
                            <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideEmail}</p>
                        )}
                    </div>

                    {/* Primary Phone */}
                    <div>
                        <input
                            type="tel"
                            name="guidePhoneNo"
                            value={formData.guidePhoneNo}
                            onChange={handleChange}
                            placeholder="Primary phone no"
                            maxLength={10}
                            className={inputClass(errors.guidePhoneNo)}
                        />
                        {errors.guidePhoneNo && (
                            <p className="text-red-500 text-sm mt-1 ml-2">
                                {errors.guidePhoneNo}
                            </p>
                        )}
                    </div>

                    {/* Secondary Phone */}
                    <div>
                        <input
                            type="tel"
                            name="guidePhoneNo2"
                            value={formData.guidePhoneNo2}
                            onChange={handleChange}
                            placeholder="Secondary phone no (Optional)"
                            maxLength={10}
                            className={inputClass(errors.guidePhoneNo2)}
                        />
                        {errors.guidePhoneNo2 && (
                            <p className="text-red-500 text-sm mt-1 ml-2">
                                {errors.guidePhoneNo2}
                            </p>
                        )}
                    </div>

                    {/* Years of Experience */}
                    <div>
                        <input
                            type="number"
                            name="guideExperience"
                            value={formData.guideExperience}
                            onChange={handleChange}
                            placeholder="Years of Experience"
                            min="0"
                            className={inputClass(errors.guideExperience)}
                        />
                        {errors.guideExperience && (
                            <p className="text-red-500 text-sm mt-1 ml-2">
                                {errors.guideExperience}
                            </p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <textarea
                            name="guideAddress"
                            value={formData.guideAddress}
                            onChange={handleChange}
                            placeholder="Address"
                            rows="4"
                            className={`${inputClass(errors.guideAddress)} resize-none`}
                        ></textarea>
                        {errors.guideAddress && (
                            <p className="text-red-500 text-sm mt-1 ml-2">{errors.guideAddress}</p>
                        )}
                    </div>

                    {/* Save Button */}
                    <div className="mt-6 flex justify-center">
                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="bg-[#5937E0] hover:bg-[#482ab8] text-white text-xl font-bold py-3 px-16 rounded-full transition-all duration-300 shadow-md hover:shadow-lg disabled:opacity-70"
                        >
                            {isSubmitting ? "Saving..." : "Save"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewGuide;