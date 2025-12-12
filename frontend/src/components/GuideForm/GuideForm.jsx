import React, { useState } from "react";
import axios from "axios";
// Keeping your existing image imports
import Map from "../../assets/Form/Map.svg";
import Plane1 from "../../assets/Form/Plane1.svg";
import Ecp1 from "../../assets/Form/Ecp1.svg";
import Ecp2 from "../../assets/Form/Ecp2.svg";
import Ecp3 from "../../assets/Form/Ecp3.svg";

function GuideForm({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    exp: "",
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
    const expInt = parseInt(form.exp, 10) || 0;

    if (!form.name.trim() || !form.mobile.trim() || !form.email.trim() || expInt <= 0) {
      setError("Please fill all fields correctly. Experience must be > 0.");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const payload = { ...form, exp: expInt };
      // await axios.post("http://localhost:5000/api/form", payload);
      
      // Simulate success for demo
      setTimeout(() => {
        console.log("Submitted:", payload);
        setForm({ name: "", mobile: "", email: "", exp: "" });
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
    // OVERLAY: Covers the whole screen
    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      
      {/* MODAL CONTAINER */}
      {/* max-h-[90vh] ensures it fits on small vertical screens (landscape mobile) */}
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

        {/* --- DECORATIVE IMAGES (Absolute) --- */}
        {/* Hidden on very small screens (xs) to prevent overlap with text */}
        <div className="absolute -top-2 left-0 pointer-events-none">
          <img src={Ecp1} alt="" className="w-16 md:w-auto" />
        </div>
        <div className="absolute bottom-0 left-0 pointer-events-none">
          <img src={Ecp2} alt="" className="w-20 md:w-auto" />
        </div>
        <div className="absolute bottom-0 right-0 pointer-events-none">
          <img src={Ecp3} alt="" className="w-20 md:w-auto" />
        </div>
        {/* Map & Plane: Adjusted z-index to be behind inputs (z-0) but visible */}
        <div className="absolute top-12 right-12 opacity-50 md:opacity-100 pointer-events-none z-0">
          <img src={Map} alt="" className="w-24 md:w-auto" />
        </div>
        <div className="absolute bottom-10 right-10 pointer-events-none z-0 hidden sm:block">
          <img src={Plane1} alt="" />
        </div>

        {/* --- CONTENT --- */}
        <div className="p-8 md:p-10 z-10">
          <h2 className="text-2xl md:text-3xl font-normal mb-6 text-center text-[#F411CF]">
            Get a free tour plan
          </h2>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            {error && <p className="text-red-600 text-sm text-center">{error}</p>}

            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="text"
              name="name"
              placeholder="Name"
              value={form.name}
              onChange={handleChange}
            />

            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={form.mobile}
              onChange={handleChange}
            />

            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
            />

            <input
              className="border border-gray-300 p-3 rounded-2xl placeholder-gray-500 text-black focus:outline-none focus:border-[#F411CF] transition-colors bg-white/80"
              type="number"
              name="exp"
              min={1}
              placeholder="Years of experience"
              value={form.exp}
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