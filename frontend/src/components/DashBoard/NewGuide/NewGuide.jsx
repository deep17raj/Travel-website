import React, { useState } from "react";
import axios from "axios"; // 1. Import Axios

const NewGuide = () => {
    // State for form data
    const [formData, setFormData] = useState({
        guideName: "",
        guideId: "",
        primaryPhone: "",
        secondaryPhone: "",
        experience: "",
        address: "",
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

        if (!formData.guideName.trim())
            newErrors.guideName = "Guide Name is required";
        if (!formData.guideId.trim()) newErrors.guideId = "Guide Id is required";

        if (!formData.primaryPhone.trim()) {
            newErrors.primaryPhone = "Primary phone no is required";
        } else if (!phoneRegex.test(formData.primaryPhone)) {
            newErrors.primaryPhone = "Enter a valid 10-digit phone number";
        }

        if (
            formData.secondaryPhone.trim() &&
            !phoneRegex.test(formData.secondaryPhone)
        ) {
            newErrors.secondaryPhone = "Enter a valid 10-digit phone number";
        }

        if (!formData.experience.trim()) {
            newErrors.experience = "Years of Experience is required";
        } else if (isNaN(formData.experience) || Number(formData.experience) < 0) {
            newErrors.experience = "Enter a valid positive number";
        }

        if (!formData.address.trim()) newErrors.address = "Address is required";

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    // 2. Updated Handle Submit using AXIOS
    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitSuccess(null);

        if (validateForm()) {
            setIsSubmitting(true);
            try {
                // --- Axios Request Start ---
                // Replace with your actual API endpoint
                const response = await axios.post(
                    "https://your-api-endpoint.com/api/guides",
                    formData
                );

                // Axios automatically throws an error for non-200 status codes,
                // so if we reach here, the request was successful.
                console.log("Server Response:", response.data);
                // --- Axios Request End ---

                setSubmitSuccess("Guide created successfully!");

                // Reset form on success
                setFormData({
                    guideName: "",
                    guideId: "",
                    primaryPhone: "",
                    secondaryPhone: "",
                    experience: "",
                    address: "",
                });
            } catch (error) {
                console.error("Error submitting form:", error);

                // Better error handling with Axios
                if (error.response) {
                    // The server responded with a status code outside the 2xx range
                    setSubmitSuccess(
                        `Failed: ${error.response.data.message || "Server Error"}`
                    );
                } else if (error.request) {
                    // The request was made but no response was received
                    setSubmitSuccess(
                        "Failed: No response from server. Check your connection."
                    );
                } else {
                    // Something happened in setting up the request
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

                    {/* Primary Phone */}
                    <div>
                        <input
                            type="tel"
                            name="primaryPhone"
                            value={formData.primaryPhone}
                            onChange={handleChange}
                            placeholder="Primary phone no"
                            maxLength={10}
                            className={inputClass(errors.primaryPhone)}
                        />
                        {errors.primaryPhone && (
                            <p className="text-red-500 text-sm mt-1 ml-2">
                                {errors.primaryPhone}
                            </p>
                        )}
                    </div>

                    {/* Secondary Phone */}
                    <div>
                        <input
                            type="tel"
                            name="secondaryPhone"
                            value={formData.secondaryPhone}
                            onChange={handleChange}
                            placeholder="Secondary phone no"
                            maxLength={10}
                            className={inputClass(errors.secondaryPhone)}
                        />
                        {errors.secondaryPhone && (
                            <p className="text-red-500 text-sm mt-1 ml-2">
                                {errors.secondaryPhone}
                            </p>
                        )}
                    </div>

                    {/* Years of Experience */}
                    <div>
                        <input
                            type="number"
                            name="experience"
                            value={formData.experience}
                            onChange={handleChange}
                            placeholder="Years of Experience"
                            min="0"
                            className={inputClass(errors.experience)}
                        />
                        {errors.experience && (
                            <p className="text-red-500 text-sm mt-1 ml-2">
                                {errors.experience}
                            </p>
                        )}
                    </div>

                    {/* Address */}
                    <div>
                        <textarea
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            placeholder="Address"
                            rows="4"
                            className={`${inputClass(errors.address)} resize-none`}
                        ></textarea>
                        {errors.address && (
                            <p className="text-red-500 text-sm mt-1 ml-2">{errors.address}</p>
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
