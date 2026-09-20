import React from "react";
import { useNavigate } from "react-router-dom";
import sdashbg from "../assets/sdashbg.jpeg";
import Seller_Hero from "./Seller_Hero";
import SlotBooking from "./SlotBooking";
import QueueStatus from "./QueueStatus";
import CropStatus from "./CropStatus";
import GovernmentStatus from "./GovernmentStatus";
const SellerDashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gray-200 ">
      {/* TOP GREEN BAR */}
      <div className="bg-green-900 text-white px-6 py-2 text-sm">
        <div className="max-w-7xl mx-auto flex justify-between">
          <span>अब फसल बेचना हुआ आसान</span>
          <span>किसानों की सुविधा, देश की समृद्धि</span>
        </div>
      </div>

      {/* HEADER */}
      <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* LOGO */}
            <div>
              <h1 className="text-3xl font-bold text-green-900">FarmQueue</h1>

              <p className="text-sm text-gray-600">फसल बिक्री अब आसान</p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">हिंदी | English</span>

              <button
                onClick={() => navigate("/login")}
                className="border border-green-700 text-green-800 px-5 py-2 rounded-md font-semibold hover:cursor-pointer hover:bg-green-50 transition"
              >
                Logout
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* RED NAVIGATION BAR */}
      <nav className="bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center gap-8 py-3">
            <button
              onClick={() => navigate("/seller-dashboard")}
              className="font-semibold hover:text-yellow-200 hover:cursor-pointer"
            >
              होम
            </button>

            <button
              onClick={() => navigate("/seller-dashboard/slot-booking")}
              className="hover:text-yellow-200 hover:cursor-pointer"
            >
              स्लॉट बुकिंग
            </button>

            <button
              onClick={() => navigate("/seller-dashboard/queue")}
              className="hover:text-yellow-200 hover:cursor-pointer"
            >
              कतार स्थिति
            </button>

            <button
              onClick={() => navigate("/seller-dashboard/crop-status")}
              className="hover:text-yellow-200 hover:cursor-pointer"
            >
              फसल स्थिति
            </button>

            <button
              onClick={() => navigate("/seller-dashboard/notices")}
              className="hover:text-yellow-200 hover:cursor-pointer"
            >
              सरकारी सूचनाएँ
            </button>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <Seller_Hero/>

      {/* DASHBOARD FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-10 ">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            किसान की सुविधाएँ
          </h2>

          <p className="text-gray-600 mt-2">
            अपनी फसल और खरीद से जुड़ी सभी जानकारी एक जगह देखें।
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* SLOT */}
          <SlotBooking/>

          {/* QUEUE */}
           <QueueStatus/>

          {/* CROP STATUS */}
          <CropStatus/>

          {/* GOVERNMENT */}
          <GovernmentStatus/>
        </div>
      </section>

      {/* CURRENT INFORMATION */}
      <section className="max-w-7xl mx-auto px-6 pb-12 ">
        <div className="bg-white rounded-xl shadow-md overflow-hidden">
          <div className="bg-green-900 text-white px-6 py-4">
            <h2 className="text-2xl font-bold">आपकी वर्तमान जानकारी</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">
            {/* SLOT INFO */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-gray-500">आज का स्लॉट</p>

              <h3 className="text-xl font-bold text-green-800 mt-2">
                अभी बुक नहीं किया
              </h3>
            </div>

            {/* QUEUE INFO */}
            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-gray-500">कतार टोकन</p>

              <h3 className="text-xl font-bold text-red-700 mt-2">--</h3>
            </div>

            {/* CROP INFO */}
            <div className="p-6">
              <p className="text-gray-500">खरीद स्थिति</p>

              <h3 className="text-xl font-bold text-blue-700 mt-2">
                कोई सक्रिय खरीद नहीं
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-green-900 text-white">
        <div className="max-w-7xl mx-auto px-6 py-6 text-center">
          <h3 className="font-bold text-xl">FarmQueue</h3>

          <p className="text-green-100 mt-1">फसल बिक्री अब आसान</p>

          <p className="text-green-200 text-sm mt-3">
            किसानों की सुविधा, देश की समृद्धि
          </p>
        </div>
      </footer>
    </div>
  );
};

export default SellerDashboard;
