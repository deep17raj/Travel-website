import React, { useState } from "react";
import axios from "axios";
import { Phone } from "lucide-react"; 

// Ensure these paths match your project structure
import Pic1 from "../../assets/BlogPic.svg";
import Map from "../../assets/Form/Map.svg";
import Plane1 from "../../assets/Form/Plane1.svg";
import Ecp1 from "../../assets/Form/Ecp1.svg";
import Ecp2 from "../../assets/Form/Ecp2.svg";
import Ecp3 from "../../assets/Form/Ecp3.svg";

function Blog() {
  // 1. Updated state keys to match Mongoose Schema
  const [form, setForm] = useState({
    customerName: "",
    customerPhoneNo: "",
    customerEmail: "",
    travelDestination: "",
    travelDate: "",
    totalNoOfPersons: "",
  });

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const personsInt = parseInt(form.totalNoOfPersons, 10) || 0;

    // 2. Updated Validation Logic
    if (
      !form.customerName.trim() ||
      !form.customerPhoneNo.trim() ||
      !form.customerEmail.trim() ||
      !form.travelDestination.trim() ||
      !form.travelDate ||
      personsInt <= 0
    ) {
      setError("Please fill all fields correctly.");
      setSuccess("");
      return;
    }

    // Phone length validation (Schema requires min/max 10)
    if (form.customerPhoneNo.length !== 10) {
        setError("Phone number must be exactly 10 digits.");
        setSuccess("");
        return;
    }

    setError("");
    setLoading(true);

    try {
      // 3. Payload matching schema types
      const payload = { ...form, totalNoOfPersons: personsInt };
      
      console.log("Sending Payload:", payload);
      
      // Replace with your actual API endpoint
      const res = await axios.post("http://localhost:3000/api/v1/save/customer/details", payload);
      console.log("Response:", res.data);

      setForm({
        customerName: "",
        customerPhoneNo: "",
        customerEmail: "",
        travelDestination: "",
        travelDate: "",
        totalNoOfPersons: "",
      });
      setSuccess("Request sent successfully!");
    } catch (err) {
      console.error(err);
      setError("Failed to submit. Try again.");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full pb-20 pt-4">
      
      {/* --- HERO IMAGE SECTION --- */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-lg mb-8">
          <img 
            src={Pic1} 
            alt="Rishikesh Landscape" 
            className="w-full h-full object-cover" 
          />
        </div>

        {/* Action Buttons Row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6 mb-12">
           {/* Call Button */}
          <button className="flex items-center gap-3 text-[#5C15B8] hover:text-[#4a1094] transition-colors group">
            <div className="p-2 bg-purple-50 rounded-full group-hover:bg-purple-100 transition-colors">
               <Phone size={20} className="stroke-current" />
            </div>
            <span className="text-lg font-semibold">Call for Pricing</span>
          </button>

          {/* Contact Button */}
          <button className="bg-[#5C15B8] hover:bg-[#4a1094] text-white px-8 py-3 rounded-full font-medium shadow-lg shadow-purple-200 transition-all hover:scale-105">
            Contact Now
          </button>
        </div>

        {/* --- CONTENT & FORM GRID --- */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* LEFT: Blog Text Content */}
          <div className="w-full lg:w-[55%] flex flex-col gap-10 text-[#1C1C1C]">
            
            {/* Section 1 */}
            <div>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Rishikesh</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Rishikesh, known as the "Yoga Capital of the World," is a serene town nestled in the foothills of the Himalayas along the banks of the sacred Ganges River. It attracts spiritual seekers, adventure enthusiasts, and nature lovers alike.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Where spirituality flows with the Ganga</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                The evening Ganga Aarti at Triveni Ghat is a mesmerizing spiritual experience, where lamps float on the river, creating a golden aura. Beyond spirituality, Rishikesh is famous for its iconic suspension bridges, Ram Jhula and Lakshman Jhula.
              </p>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">A sanctuary of spirituality</h2>
              <p className="text-gray-600 text-lg leading-relaxed">
                For adventure seekers, it offers white-water rafting, bungee jumping, and trekking trails. Whether you seek inner peace at an ashram or an adrenaline rush on the rapids, Rishikesh promises an unforgettable journey.
              </p>
            </div>
          </div>

          {/* RIGHT: "Get a free tour plan" Form Card */}
          <div className="w-full lg:w-[45%] sticky top-8">
            <div className="relative bg-[#FFF5FC] rounded-[2.5rem] shadow-xl overflow-hidden border border-purple-50">
              
              {/* Decorative Elements */}
              <img src={Ecp1} alt="" className="absolute -top-4 -left-4 w-20 opacity-80 z-0 pointer-events-none" />
              <img src={Ecp2} alt="" className="absolute bottom-0 left-0 w-24 opacity-80 z-0 pointer-events-none" />
              <img src={Ecp3} alt="" className="absolute bottom-0 right-0 w-20 opacity-80 z-0 pointer-events-none" />
              <img src={Map} alt="" className="absolute top-10 right-10 w-16 opacity-100 z-0 pointer-events-none hidden sm:block" />
              <img src={Plane1} alt="" className="absolute bottom-20 right-4 w-32 opacity-100 z-0 pointer-events-none animate-pulse hidden sm:block" />

              {/* Form Content */}
              <div className="relative z-10 p-8 sm:p-10">
                <h3 className="text-center text-[#F411CF] text-2xl font-bold mb-8">
                  Get a free tour plan
                </h3>

                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  {error && <div className="text-red-500 text-center text-sm bg-red-50 p-2 rounded-lg">{error}</div>}
                  {success && <div className="text-green-600 text-center text-sm bg-green-50 p-2 rounded-lg">{success}</div>}

                  {/* Customer Name */}
                  <input
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F411CF] focus:ring-1 focus:ring-[#F411CF] transition-all"
                    type="text"
                    name="customerName"
                    placeholder="Name"
                    value={form.customerName}
                    onChange={handleChange}
                  />

                  {/* Customer Phone */}
                  <input
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F411CF] focus:ring-1 focus:ring-[#F411CF] transition-all"
                    type="tel"
                    name="customerPhoneNo"
                    placeholder="Mobile Number (10 digits)"
                    maxLength={10}
                    value={form.customerPhoneNo}
                    onChange={handleChange}
                  />

                  {/* Customer Email */}
                  <input
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F411CF] focus:ring-1 focus:ring-[#F411CF] transition-all"
                    type="email"
                    name="customerEmail"
                    placeholder="Email"
                    value={form.customerEmail}
                    onChange={handleChange}
                  />

                  {/* Travel Destination */}
                  <input
                    className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F411CF] focus:ring-1 focus:ring-[#F411CF] transition-all"
                    type="text"
                    name="travelDestination"
                    placeholder="Destination"
                    value={form.travelDestination}
                    onChange={handleChange}
                  />

                  <div className="flex flex-col sm:flex-row gap-4">
                    {/* Travel Date */}
                    <input
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F411CF] focus:ring-1 focus:ring-[#F411CF] transition-all"
                      type="date"
                      name="travelDate"
                      value={form.travelDate}
                      onChange={handleChange}
                    />
                    
                    {/* Total Persons */}
                    <input
                      className="w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F411CF] focus:ring-1 focus:ring-[#F411CF] transition-all"
                      type="number"
                      name="totalNoOfPersons"
                      min="1"
                      placeholder="Persons"
                      value={form.totalNoOfPersons}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="flex justify-center mt-4">
                    <button
                      type="submit"
                      disabled={loading}
                      className="bg-[#5C15B8] hover:bg-[#4a1094] text-white px-12 py-3.5 rounded-full font-semibold shadow-lg shadow-purple-200 transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                      {loading ? "Submitting..." : "Submit Request"}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Blog;