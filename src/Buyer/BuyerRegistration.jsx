import React from "react";
import { useNavigate } from "react-router-dom";

const BuyerRegistration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7F2] px-5 py-10">

      {/* Back Button */}
      <div className="mx-auto max-w-4xl">
        <button
          type="button"
          onClick={() => navigate("/Registration")}
          className="rounded-lg border-2 border-orange-600 px-5 py-2.5 font-semibold text-orange-600 transition hover:bg-orange-600 hover:text-white"
        >
          ← Back to Registration
        </button>
      </div>

      {/* Heading */}
      <div className="mx-auto mt-8 max-w-4xl text-center">

        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-orange-100 text-4xl">
          🛒
        </div>

        <h1 className="mt-4 text-4xl font-bold text-orange-800">
          Buyer Registration
        </h1>

        <p className="mt-2 text-lg text-gray-600">
          खरीदार के रूप में अपना FarmQueue अकाउंट बनाएं
        </p>

      </div>


      {/* Registration Form */}
      <div className="mx-auto mt-8 max-w-4xl rounded-2xl bg-white p-7 shadow-lg">

        <form className="space-y-7">

          {/* Personal Information */}
          <div>

            <h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold text-orange-800">
              व्यक्तिगत जानकारी
            </h2>

            <div className="grid gap-5 md:grid-cols-2">

              {/* Full Name */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  पूरा नाम
                </label>

                <input
                  type="text"
                  placeholder="अपना पूरा नाम दर्ज करें"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>


              {/* Business Name */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  व्यवसाय / दुकान का नाम
                </label>

                <input
                  type="text"
                  placeholder="व्यवसाय का नाम दर्ज करें"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

            </div>

          </div>


          {/* Business Information */}
          <div>

            <h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold text-orange-800">
              व्यवसाय संबंधी जानकारी
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>


              {/* Business Type */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  व्यवसाय का प्रकार
                </label>

                <select
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >
                  <option value="">व्यवसाय का प्रकार चुनें</option>
                  <option value="wholesaler">थोक खरीदार</option>
                  <option value="retailer">रिटेलर</option>
                  <option value="trader">व्यापारी</option>
                  <option value="processor">फूड प्रोसेसर</option>
                  <option value="other">अन्य</option>
                </select>
              </div>


              {/* Main Crop */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  मुख्य खरीदी जाने वाली फसल
                </label>

                <select
                  className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                >
                  <option value="">फसल चुनें</option>
                  <option value="wheat">गेहूं</option>
                  <option value="rice">धान</option>
                  <option value="potato">आलू</option>
                  <option value="mustard">सरसों</option>
                  <option value="vegetables">सब्जियां</option>
                  <option value="other">अन्य</option>
                </select>
              </div>

            </div>

          </div>


          {/* Account Information */}
          <div>

            <h2 className="mb-5 border-b border-gray-200 pb-3 text-xl font-bold text-orange-800">
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
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>


              {/* Confirm Password */}
              <div>
                <label className="mb-2 block font-semibold text-gray-700">
                  पासवर्ड की पुष्टि करें
                </label>

                <input
                  type="password"
                  placeholder="पासवर्ड दोबारा दर्ज करें"
                  className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-100"
                />
              </div>

            </div>

          </div>


          {/* Terms */}
          <div className="flex items-start gap-3">

            <input
              type="checkbox"
              className="mt-1 h-4 w-4 accent-orange-600"
            />

            <p className="text-sm text-gray-600">
              मैं FarmQueue की शर्तों और नियमों से सहमत हूँ।
            </p>

          </div>


          {/* Create Account */}
          <button
            type="submit"
            className="w-full rounded-lg bg-orange-600 py-3.5 text-lg font-bold text-white transition hover:bg-orange-700"
          >
            Buyer Account बनाएं →
          </button>

        </form>

      </div>

    </div>
  );
};

export default BuyerRegistration;