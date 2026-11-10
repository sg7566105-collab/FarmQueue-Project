
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const BuyerLogin = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      (email === "buyer@gmail.com" || email === "9876543210") &&
      password === "buyer123"
    ) {
      // Save buyer login session
      localStorage.setItem("buyer", "loggedIn");

      // Open Buyer Dashboard
      navigate("/buyer-dashboard");
    } else {
      alert("Invalid email/mobile number or password");
    }
  };

  return (
    <div className="min-h-screen bg-[#FFF8F0] px-5 py-10">

      {/* Back Button */}
      <div className="mx-auto max-w-md">
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="rounded-lg border-2 border-orange-600 px-5 py-2.5 font-semibold text-orange-600 transition hover:bg-orange-600 hover:text-white"
        >
          ← Back to Login
        </button>
      </div>

      {/* Login Card */}
      <div className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Icon */}
        <div className="text-center">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
            🛒
          </div>

          <h1 className="mt-5 text-3xl font-bold text-orange-900">
            Buyer Login
          </h1>

          <p className="mt-2 text-gray-600">
            खरीदार के रूप में अपने अकाउंट में लॉगिन करें
          </p>
        </div>

        {/* Login Form */}
        <form onSubmit={handleLogin} className="mt-8 space-y-5">

          {/* Mobile / Email */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              मोबाइल नंबर / ईमेल
            </label>

            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="मोबाइल नंबर या ईमेल दर्ज करें"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Password */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              पासवर्ड
            </label>

            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="अपना पासवर्ड दर्ज करें"
              required
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              onClick={() => alert("Forgot Password feature is coming soon.")}
              className="text-sm font-semibold text-orange-600 hover:underline"
            >
              पासवर्ड भूल गए?
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-600 py-3.5 text-lg font-bold text-white transition hover:bg-orange-700"
          >
            Login करें →
          </button>

        </form>

        {/* Registration */}
        <div className="mt-7 border-t border-gray-200 pt-6 text-center">

          <p className="text-gray-600">
            अभी तक अकाउंट नहीं बनाया?
          </p>

          <button
            type="button"
            onClick={() => navigate("/Registration")}
            className="mt-2 font-semibold text-orange-600 hover:underline"
          >
            नया अकाउंट बनाएं
          </button>

        </div>

        {/* Demo Credentials */}
        <div className="mt-6 rounded-lg bg-orange-50 p-3 text-sm text-gray-600">
          <p className="font-semibold">Demo Credentials</p>
          <p>Email: buyer@gmail.com</p>
          <p>Mobile: 9876543210</p>
          <p>Password: buyer123</p>
        </div>

      </div>

    </div>
  );
};

export default BuyerLogin;
