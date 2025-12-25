import React, { useState, useEffect } from "react";
import axios from "axios";

// Assets
import Map from "../../assets/Form/Map.svg";
import Plane1 from "../../assets/Form/Plane1.svg";
import Ecp1 from "../../assets/Form/Ecp1.svg";
import Ecp2 from "../../assets/Form/Ecp2.svg";
import Ecp3 from "../../assets/Form/Ecp3.svg";

// 1. Accept onClose prop
const CustomerInquiryForm = ({ defaultDestination = "", onClose }) => {
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

  const inputClasses = "w-full bg-white border border-gray-200 rounded-2xl px-5 py-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#F411CF] transition-all";

  useEffect(() => {
    if (defaultDestination) {
      setForm((prev) => ({ ...prev, travelDestination: defaultDestination }));
    }
  }, [defaultDestination]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const personsInt = parseInt(form.totalNoOfPersons, 10) || 0;

    if (!form.customerName.trim() || !form.customerPhoneNo.trim() || !form.customerEmail.trim() || !form.travelDestination.trim() || !form.travelDate || personsInt <= 0) {
      setError("Please fill all fields correctly.");
      setSuccess("");
      return;
    }

    if (form.customerPhoneNo.length !== 10) {
      setError("Phone number must be exactly 10 digits.");
      setSuccess("");
      return;
    }

    setError("");
    setLoading(true);

    try {
      const payload = { ...form, totalNoOfPersons: personsInt };
      await axios.post(`${import.meta.env.VITE_API_URL}/api/v1/save/customer/details`, payload);

      setForm({
        customerName: "",
        customerPhoneNo: "",
        customerEmail: "",
        travelDestination: defaultDestination || "", 
        travelDate: "",
        totalNoOfPersons: "",
      });
      setSuccess("Request sent successfully!");
      
      // 2. Close Modal after 2 seconds on success (if onClose is provided)
      if (onClose) {
        setTimeout(() => {
            onClose();
            setSuccess(""); // Reset success message
        }, 2000);
      }

    } catch (err) {
      console.error(err);
      setError("Failed to submit. Try again.");
      setSuccess("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bg-[#FFF5FC] rounded-[2.5rem] shadow-xl overflow-hidden border border-purple-50 w-full">
      {/* Decorative Elements */}
      <img src={Ecp1} alt="" className="absolute -top-4 -left-4 w-20 opacity-80 z-0 pointer-events-none" />
      <img src={Ecp2} alt="" className="absolute bottom-0 left-0 w-24 opacity-80 z-0 pointer-events-none" />
      <img src={Ecp3} alt="" className="absolute bottom-0 right-0 w-20 opacity-80 z-0 pointer-events-none" />
      <img src={Map} alt="" className="absolute top-10 right-10 w-16 opacity-100 z-0 pointer-events-none hidden sm:block" />
      <img src={Plane1} alt="" className="absolute bottom-20 right-4 w-32 opacity-100 z-0 pointer-events-none animate-pulse hidden sm:block" />

      <div className="relative z-10 p-8 sm:p-10">
        <h3 className="text-center text-[#F411CF] text-2xl font-bold mb-8">
          Get a free tour plan
        </h3>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          {error && <div className="text-red-500 text-center text-sm bg-red-50 p-2 rounded-lg">{error}</div>}
          {success && <div className="text-green-600 text-center text-sm bg-green-50 p-2 rounded-lg">{success}</div>}

          <input className={inputClasses} type="text" name="customerName" placeholder="Name" value={form.customerName} onChange={handleChange} />
          <input className={inputClasses} type="tel" name="customerPhoneNo" placeholder="Mobile Number (10 digits)" maxLength={10} value={form.customerPhoneNo} onChange={handleChange} />
          <input className={inputClasses} type="email" name="customerEmail" placeholder="Email" value={form.customerEmail} onChange={handleChange} />
          <input className={inputClasses} type="text" name="travelDestination" placeholder="Destination" value={form.travelDestination} onChange={handleChange} />

          <div className="flex flex-col sm:flex-row gap-4">
            <input className={inputClasses} type="date" name="travelDate" value={form.travelDate} onChange={handleChange} />
            <input className={inputClasses} type="number" name="totalNoOfPersons" min="1" placeholder="Persons" value={form.totalNoOfPersons} onChange={handleChange} />
          </div>

          <div className="flex justify-center mt-4">
            <button type="submit" disabled={loading} className="bg-[#5C15B8] hover:bg-[#4a1094] text-white px-12 py-3.5 rounded-full font-semibold shadow-lg shadow-purple-200 transition-all hover:scale-105 disabled:opacity-70 disabled:cursor-not-allowed">
              {loading ? "Submitting..." : "Submit Request"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CustomerInquiryForm;