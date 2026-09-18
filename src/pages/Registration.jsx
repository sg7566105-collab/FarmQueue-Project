import React from "react";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F5F7F2] px-6 py-12">

      {/* Back to Home */}
      <div className="mx-auto max-w-5xl">
        <button
          onClick={() => navigate("/login")}
          className="rounded-lg border-2 border-green-700 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
        >
          ← Back to Login
        </button>
      </div>

      {/* Heading */}
      <div className="mx-auto mt-10 max-w-5xl text-center">
        <h1 className="text-4xl font-bold text-green-900">
          FarmQueue पर पंजीकरण करें
        </h1>

        <p className="mt-3 text-lg text-gray-600">
          अपना अकाउंट प्रकार चुनें और आगे बढ़ें
        </p>
      </div>

      {/* Cards */}
      <div className="mx-auto mt-10 grid max-w-4xl gap-8 md:grid-cols-2">

        {/* Seller */}
        <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow">
            👨‍🌾
          </div>

          <h2 className="mt-6 text-2xl font-bold text-green-900">
            Seller / किसान
          </h2>

          <p className="mt-3 leading-6 text-gray-600">
            किसान के रूप में पंजीकरण करें और अपनी
            फसल बेचने के लिए FarmQueue का उपयोग करें।
          </p>

          <button
            onClick={() => navigate("/SellerRegistration")}
            className="mt-7 w-full rounded-lg bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800"
          >
            Seller के रूप में पंजीकरण करें →
          </button>

        </div>


        {/* Buyer */}
        <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center shadow-md transition duration-300 hover:-translate-y-1 hover:shadow-xl">

          <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow">
            🛒
          </div>

          <h2 className="mt-6 text-2xl font-bold text-orange-900">
            Buyer / खरीदार
          </h2>

          <p className="mt-3 leading-6 text-gray-600">
            खरीदार के रूप में पंजीकरण करें और
            किसानों से फसल खरीदने के लिए FarmQueue का उपयोग करें।
          </p>

          <button
            onClick={() => navigate("/BuyerRegistration")}
            className="mt-7 w-full rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700"
          >
            Buyer के रूप में पंजीकरण करें →
          </button>

        </div>

      </div>

    </div>
  );
};

export default Registration;