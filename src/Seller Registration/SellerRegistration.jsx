import React from "react";
import { useNavigate } from "react-router-dom";

const SellerRegistration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7F2] px-5 py-10">

      {/* Back Button */}
      <div className="mx-auto max-w-4xl">
        <button
          onClick={() => navigate("/registration")}
          className="rounded-lg border-2 border-green-700 px-5 py-2 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
        >
          ← Back
        </button>
      </div>

      {/* Heading */}
      <div className="mx-auto mt-8 max-w-4xl text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-green-100 text-4xl">
          👨‍🌾
        </div>

        <h1 className="mt-4 text-4xl font-bold text-green-900">
          Seller Registration
        </h1>

        <p className="mt-2 text-gray-600">
          किसान के रूप में अपना FarmQueue अकाउंट बनाएं
        </p>
      </div>

      {/* Form */}
      <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-7 shadow-lg">

        <form className="space-y-6">

          {/* Personal Details */}
          <div>
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-xl font-bold text-green-900">
              व्यक्तिगत जानकारी
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Name */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  पूरा नाम
                </label>

                <input
                  type="text"
                  placeholder="अपना पूरा नाम दर्ज करें"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Mobile */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  मोबाइल नंबर
                </label>

                <input
                  type="tel"
                  placeholder="10 अंकों का मोबाइल नंबर"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Email */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  ईमेल
                </label>

                <input
                  type="email"
                  placeholder="example@gmail.com"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Aadhaar */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  किसान पहचान / ID
                </label>

                <input
                  type="text"
                  placeholder="अपनी ID दर्ज करें"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

            </div>
          </div>


          {/* Farm Details */}
          <div>
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-xl font-bold text-green-900">
              कृषि संबंधी जानकारी
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              {/* State */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  राज्य
                </label>

                <input
                  type="text"
                  placeholder="अपना राज्य दर्ज करें"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* District */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  जिला
                </label>

                <input
                  type="text"
                  placeholder="अपना जिला दर्ज करें"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Mandi */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  मंडी
                </label>

                <input
                  type="text"
                  placeholder="नजदीकी मंडी"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Crop */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  मुख्य फसल
                </label>

                <select className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-green-600 focus:ring-2 focus:ring-green-100">
                  <option value="">फसल चुनें</option>
                  <option value="wheat">गेहूं</option>
                  <option value="rice">धान</option>
                  <option value="potato">आलू</option>
                  <option value="mustard">सरसों</option>
                  <option value="other">अन्य</option>
                </select>
              </div>

            </div>
          </div>


          {/* Account Details */}
          <div>
            <h2 className="mb-4 border-b border-gray-200 pb-2 text-xl font-bold text-green-900">
              अकाउंट जानकारी
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Password */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  पासवर्ड
                </label>

                <input
                  type="password"
                  placeholder="पासवर्ड बनाएं"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

              {/* Confirm Password */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  पासवर्ड दोबारा दर्ज करें
                </label>

                <input
                  type="password"
                  placeholder="पासवर्ड की पुष्टि करें"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-green-600 focus:ring-2 focus:ring-green-100"
                />
              </div>

            </div>
          </div>


          {/* Terms */}
          <div className="flex items-start gap-3">
            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-green-700"
            />

            <p className="text-sm text-gray-600">
              मैं FarmQueue की शर्तों और नियमों से सहमत हूँ।
            </p>
          </div>


          {/* Submit */}
          <button
            type="submit"
            className="w-full rounded-lg bg-green-700 py-3.5 text-lg font-bold text-white transition hover:bg-green-800"
          >
            Seller Account बनाएं →
          </button>

        </form>

      </div>

    </div>
  );
};

export default SellerRegistration;