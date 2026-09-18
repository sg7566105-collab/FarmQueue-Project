import React from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#F5F7F2] px-6 py-12">
      <button
        onClick={() => navigate("/")}
        className="rounded-lg border-2 border-green-700 px-5 py-2.5 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white"
      >
        ← Back to Home
      </button>

      {/* Heading */}
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="text-4xl font-bold text-green-900">FarmQueue</h1>

        <p className="mt-2 text-lg text-gray-600">अपने खाते में लॉगिन करें</p>
      </div>

      {/* Login Box */}
      <div className="mx-auto mt-8 max-w-5xl rounded-2xl bg-white p-8 shadow-lg">
        <h2 className="text-center text-2xl font-bold text-gray-800">
          आप किस रूप में लॉगिन करना चाहते हैं?
        </h2>

        <div className="mt-8 grid gap-7 md:grid-cols-2">
          {/* Seller Card */}
          <div className="rounded-2xl border border-green-200 bg-green-50 p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow">
              👨‍🌾
            </div>

            <h3 className="mt-5 text-2xl font-bold text-green-900">
              Seller Login
            </h3>

            <p className="mx-auto mt-3 max-w-sm leading-6 text-gray-600">
              अपनी फसल की बिक्री, स्लॉट बुकिंग और कतार की स्थिति देखने के लिए
              लॉगिन करें।
            </p>

            <button className="mt-6 w-full rounded-lg flex items-center justify-center gap-3 bg-green-700 px-5 py-3 font-semibold text-white transition hover:bg-green-800" onClick={()=> navigate("/SellerLogin")}>
              <span className="font-bold text-2xl mb-2">Seller</span> के रूप में लॉगिन करें →
            </button>
          </div>

          {/* Buyer Card */}
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-8 text-center transition duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-5xl shadow">
              🛒
            </div>

            <h3 className="mt-5 text-2xl font-bold text-orange-900">
              Buyer Login
            </h3>

            <p className="mx-auto mt-3 max-w-sm leading-6 text-gray-600">
              किसानों की फसल खरीदने और अपनी बुकिंग देखने के लिए लॉगिन करें।
            </p>

            <button className="mt-6 w-full rounded-lg bg-orange-600 px-5 py-3 font-semibold text-white transition hover:bg-orange-700 flex justify-center items-center gap-2" onClick={()=> navigate("/BuyerLogin")} >
              <span className="font-bold text-2xl mb-2">Buyer</span> के रूप में लॉगिन करें →
            </button>
          </div>
        </div>

        {/* Registration */}
        <div className="mt-9 border-t border-gray-200 pt-7 text-center">
          <p className="text-gray-600">अभी तक अकाउंट नहीं बनाया?</p>

          <button className="mt-3 rounded-lg border-2 border-green-700 px-6 py-2.5 font-semibold text-green-700 transition hover:bg-green-700 hover:text-white" onClick={()=>navigate("/Registration")}>
            नया अकाउंट बनाएं →
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
