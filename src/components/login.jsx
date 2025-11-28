import React, { useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in:", { email, password });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center px-4">
      <div className="bg-[#22272b] p-8 rounded-2xl shadow-xl w-full max-w-[400px]">
        <h2 className="text-2xl font-bold text-center text-red-600 mb-6">
          Login
        </h2>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-white text-[16px] font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full p-3 text-white bg-transparent border border-[#eaeef0] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-white text-[16px] font-semibold mb-1">
              Password
            </label>
            <input
              type="password"
              className="w-full p-3 text-white bg-transparent border border-[#eaeef0] rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-red-600 text-white p-3 rounded-lg font-semibold hover:bg-red-700 transition"
          >
            Login
          </button>
        </form>

        {/* Forgot Password */}
        <div className="text-center text-white text-[16px] mt-4 space-y-2">
          <p>
            Forgot your password?{" "}
            <span className="text-red-600 cursor-pointer hover:underline">
              Reset here
            </span>
          </p>
          <p>
            Don’t have an account?{" "}
            <Link
              to="/signup"
              className="text-red-600 font-semibold hover:underline"
            >
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
