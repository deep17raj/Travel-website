import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      // NOTE: We use withCredentials: true so the browser accepts the session cookie
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/login`, 
        credentials,
        { withCredentials: true } 
      );

      if (response.data) {
        // Save a simple flag in localStorage for UI logic (Backend handles real security via cookies)
        localStorage.setItem("isAdminLoggedIn", "true");
        navigate("/dashboard");
      }
    } catch (err) {
      console.error(err);
      setError(err.response?.data?.message || "Invalid Credentials");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="w-full max-w-md bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-gray-100">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Admin Login</h2>
        
        {error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded mb-4 text-sm text-center">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={credentials.username}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={credentials.password}
            onChange={handleChange}
            className="w-full px-5 py-3 rounded-xl border border-gray-200 focus:border-purple-500 focus:outline-none transition-all"
            required
          />
          
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#5C15B8] hover:bg-[#4a1094] text-white font-bold py-3 rounded-xl transition-all shadow-lg shadow-purple-200 disabled:opacity-70"
          >
            {loading ? "Verifying..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;