import React, { useState } from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signing up:", formData);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="bg-[#22272b] p-8 rounded-2xl shadow-xl w-full max-w-[450px]">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Create Account
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-white text-[16px] font-semibold mb-1">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              className="w-full p-3 text-white bg-transparent border border-[#eaeef0] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-white text-[16px] font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              className="w-full p-3 text-white bg-transparent border border-[#eaeef0] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-white text-[16px] font-semibold mb-1">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              className="w-full p-3 text-white bg-transparent border border-[#eaeef0] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your phone number"
              value={formData.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="block text-white text-[16px] font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="w-full p-3 text-white bg-transparent border border-[#eaeef0] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>

          <div>
            <label className="block text-white text-[16px] font-semibold mb-1">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              className="w-full p-3 text-white bg-transparent border border-[#eaeef0] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Re-enter your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Sign Up
          </button>
        </form>

        <div className="text-center text-white text-[16px] mt-4">
          Already have an account?{" "}
          <Link to="/login" className="text-red-600 font-semibold hover:underline">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;

