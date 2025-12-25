import React, { useState } from "react";
import axios from "axios";
// Keeping your existing image imports
import Map from "../../assets/Form/Map.svg";
import Plane1 from "../../assets/Form/Plane1.svg";
import Ecp1 from "../../assets/Form/Ecp1.svg";
import Ecp2 from "../../assets/Form/Ecp2.svg";
import Ecp3 from "../../assets/Form/Ecp3.svg";
import.meta.env.VITE_API_URL
function GuideForm({ isOpen, onClose = () => {} }) {
  // 1. State keys matching Mongoose schema
  const [form, setForm] = useState({
    guideName: "",
    guidePhoneNo: "",
    guidePhoneNo2: "", // Optional Field
    guideEmail: "",
    guideAddress: "",
    guideExperience: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  // If the modal is not open, do not render anything
  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const expInt = parseInt(form.guideExperience, 10) || 0;

    // 2. Validation Logic
    if (
      !form.guideName.trim() ||
      !form.guidePhoneNo.trim() ||
      !form.guideEmail.trim() ||
      !form.guideAddress.trim() ||
      expInt <= 0
    ) {
      setError("Please fill all required fields correctly. Experience must be > 0.");
      return;
    }

    // Primary phone check
    if (form.guidePhoneNo.length !== 10) {
      setError("Primary Phone Number must be exactly 10 digits.");
      return;
    }

    // Secondary phone check (Only if user typed something)
    if (form.guidePhoneNo2.trim() && form.guidePhoneNo2.length !== 10) {
      setError("Secondary Phone Number must be exactly 10 digits.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      // 3. Create Payload & Remove Optional Key if Empty
      const payload = { ...form, guideExperience: expInt };

      // Check if guidePhoneNo2 is empty/whitespace. If so, delete the key.
      if (!payload.guidePhoneNo2 || payload.guidePhoneNo2.trim() === "") {
        delete payload.guidePhoneNo2;
      }

      console.log("Sending Payload:", payload);

      await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/save/request/new/guide`, payload);

      // Simulate success
      setTimeout(() => {
        // Reset form
        setForm({
          guideName: "",
          guidePhoneNo: "",
          guidePhoneNo2: "",
          guideEmail: "",
          guideAddress: "",
          guideExperience: "",
        });
        setLoading(false);
        // Close modal on success
        onClose();
      }, 1000);
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Try again.");
      setLoading(false);
    }
  };

  return (
    // OVERLAY
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      
      {/* MODAL CONTAINER */}
      <div className="relative w-full max-w-lg bg-[#fff7fd] shadow-2xl rounded-4xl overflow-hidden flex flex-col max-h-[90vh] overflow-y-auto">
        
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-[60] text-gray-500 hover:text-[#F411CF] transition-colors p-2 bg-white/50 rounded-full"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* --- DECORATIVE IMAGES --- */}
        <div className="absolute -top-2 left-0 pointer-events-none">
          <img src={Ecp1} alt="" className="w-16 md:w-auto" />
        </div>
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <img src={Ecp2} alt="" className="w-20 md:w-auto" />
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <img src={Ecp3} alt="" className="w-20 md:w-auto" />
        </div>
        <div className="absolute top-12 right-12 opacity-50 md:opacity-100 pointer-events-none z-0">
          <img src={Map} alt="" className="w-24 md:w-auto" />
        </div>
        <div className="absolute bottom-10 right-10 pointer-events-none z-0 hidden sm:block">
          <img src={Plane1} alt="" />
        </div>

        {/* --- CONTENT --- */}
        <div className="p-8 md:p-10 z-10">
          <h2 className="text-2xl md:text-3xl font-normal mb-6 text-center text-[#F411CF]">
            Become a Guide
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}

            {/* Guide Name */}
            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="text"
              name="guideName"
              placeholder="Name *"
              value={form.guideName}
              onChange={handleChange}
            />

            {/* Primary Phone */}
            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="tel"
              name="guidePhoneNo"
              placeholder="Mobile Number *"
              maxLength={10}
              value={form.guidePhoneNo}
              onChange={handleChange}
            />

            {/* Secondary Phone (Optional) */}
            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="tel"
              name="guidePhoneNo2"
              placeholder="Secondary Mobile Number (Optional)"
              maxLength={10}
              value={form.guidePhoneNo2}
              onChange={handleChange}
            />

            {/* Email */}
            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="email"
              name="guideEmail"
              placeholder="Email *"
              value={form.guideEmail}
              onChange={handleChange}
            />

            {/* Address */}
            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="text"
              name="guideAddress"
              placeholder="Address *"
              value={form.guideAddress}
              onChange={handleChange}
            />

            {/* Experience */}
            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="number"
              name="guideExperience"
              min={1}
              placeholder="Years of experience *"
              value={form.guideExperience}
              onChange={handleChange}
            />

            <div className="flex flex-col items-center mt-6">
              <button
                type="submit"
                className="bg-[#5C15B8] hover:bg-[#4a1196] transition-colors text-white px-12 py-3 rounded-full shadow-lg"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default GuideForm;