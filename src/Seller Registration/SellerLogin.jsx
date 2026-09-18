import React from "react";
import { useNavigate } from "react-router-dom";

const SellerLogin = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7F2] px-5 py-10">

      {/* Back Button */}
      <div className="mx-auto max-w-md">
        <button
          type="button"
          onClick={() => navigate("/login")}
          className="rounded-lg border-2 border-green-700 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
        >
          ← Back to Login
        </button>
      </div>

      {/* Login Card */}
      <div className="mx-auto mt-10 w-full max-w-md rounded-2xl bg-white p-8 shadow-xl">

        {/* Icon & Heading */}
        <div className="text-center">

          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
            👨‍🌾
          </div>

          <h1 className="mt-5 text-3xl font-bold text-green-900">
            Seller Login
          </h1>

          <p className="mt-2 text-gray-600">
            किसान के रूप में अपने अकाउंट में लॉगिन करें
          </p>

        </div>


        {/* Form */}
        <form className="mt-8 space-y-5">

          {/* Mobile / Email */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              मोबाइल नंबर / ईमेल
            </label>

            <input
              type="text"
              placeholder="मोबाइल नंबर या ईमेल दर्ज करें"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* Password */}
          <div>
            <label className="mb-2 block font-semibold text-gray-700">
              पासवर्ड
            </label>

            <input
              type="password"
              placeholder="अपना पासवर्ड दर्ज करें"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
            />
          </div>


          {/* Forgot Password */}
          <div className="text-right">
            <button
              type="button"
              className="text-sm font-semibold text-green-700 hover:underline"
            >
              पासवर्ड भूल गए?
            </button>
          </div>


          {/* Login */}
          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3.5 text-lg font-bold text-white transition hover:bg-green-800"
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
            className="mt-2 font-semibold text-green-700 hover:underline"
          >
            Seller Registration करें
          </button>

        </div>

      </div>

    </div>
  );
};

export default SellerLogin;