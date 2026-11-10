
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

import Seller_Hero from "./Seller_Hero";
import SlotBooking from "./SlotBooking";
import QueueStatus from "./QueueStatus";
import CropStatus from "./CropStatus";
import GovernmentStatus from "./GovernmentStatus";

const SellerDashboard = () => {
  const navigate = useNavigate();

  const [activeSection, setActiveSection] = useState("");

  // Logout Function
  const handleLogout = () => {
    localStorage.removeItem("seller");
    navigate("/login");
  };

  // Details Toggle
  const toggleSection = (section) => {
    setActiveSection((prev) => prev === section ? "" : section);
  };

  return (
    <div className="min-h-screen bg-gray-200">

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
              <h1 className="text-3xl font-bold text-green-900">
                FarmQueue
              </h1>
              <p className="text-sm text-gray-600">
                फसल बिक्री अब आसान
              </p>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">
                हिंदी | English
              </span>

              <button
                onClick={handleLogout}
                className="border border-green-700 text-green-800 px-5 py-2 rounded-md font-semibold hover:cursor-pointer hover:bg-green-50 transition"
              >
                Logout
              </button>
            </div>

          </div>
        </div>
      </header>

      {/* RED NAVIGATION BAR - HOME ONLY */}
      <nav className="bg-red-700 text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex items-center py-3">

            <button
              onClick={() => {
                setActiveSection("");
                navigate("/seller-dashboard");
              }}
              className="font-semibold hover:text-yellow-200 hover:cursor-pointer"
            >
              🏠 होम
            </button>

          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <Seller_Hero />

      {/* DASHBOARD FEATURES */}
      <section className="max-w-7xl mx-auto px-6 py-10">

        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">
            किसान की सुविधाएँ
          </h2>

          <p className="text-gray-600 mt-2">
            अपनी फसल और खरीद से जुड़ी सभी जानकारी एक जगह देखें।
          </p>
        </div>

        {/* FOUR CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          <SlotBooking
            onView={() => toggleSection("slot")}
          />

          <QueueStatus
            onView={() => toggleSection("queue")}
          />

          <CropStatus
            onView={() => toggleSection("crop")}
          />

          <GovernmentStatus
            onView={() => toggleSection("notices")}
          />

        </div>

        {/* COMMON DETAILS SECTION */}
        {activeSection && (
          <div className="mt-8 bg-white rounded-xl shadow-md overflow-hidden">

            {/* SLOT BOOKING */}
            {activeSection === "slot" && (
              <>
                <div className="bg-green-800 text-white px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    स्लॉट बुकिंग
                  </h2>
                  <button onClick={() => setActiveSection("")}>
                    ✕ बंद करें
                  </button>
                </div>

                <div className="p-6">
                  <p className="text-gray-600 mb-5">
                    फसल बेचने के लिए अपनी सुविधा के अनुसार स्लॉट चुनें।
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-5">

                    <div>
                      <label className="block font-semibold mb-2">
                        फसल का नाम
                      </label>
                      <input
                        className="w-full border rounded-lg p-3"
                        placeholder="फसल का नाम दर्ज करें"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">
                        बुकिंग की तारीख
                      </label>
                      <input
                        type="date"
                        className="w-full border rounded-lg p-3"
                      />
                    </div>

                    <div>
                      <label className="block font-semibold mb-2">
                        समय
                      </label>
                      <select className="w-full border rounded-lg p-3">
                        <option>समय चुनें</option>
                        <option>सुबह 9:00 - 11:00</option>
                        <option>सुबह 11:00 - 1:00</option>
                        <option>दोपहर 1:00 - 3:00</option>
                      </select>
                    </div>

                  </div>

                  <p className="text-sm text-gray-500 mt-4">
                    यह अभी UI demo है। बुकिंग अभी सेव नहीं होती।
                  </p>
                </div>
              </>
            )}

            {/* QUEUE STATUS */}
            {activeSection === "queue" && (
              <>
                <div className="bg-red-700 text-white px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    आपकी कतार स्थिति
                  </h2>
                  <button onClick={() => setActiveSection("")}>
                    ✕ बंद करें
                  </button>
                </div>

                <div className="p-6 grid grid-cols-1 md:grid-cols-3 gap-5">

                  <div className="bg-red-50 p-5 rounded-lg">
                    <p className="text-gray-600">आपका टोकन नंबर</p>
                    <h3 className="text-3xl font-bold text-red-700 mt-2">
                      --
                    </h3>
                  </div>

                  <div className="bg-gray-50 p-5 rounded-lg">
                    <p className="text-gray-600">कतार में स्थान</p>
                    <h3 className="text-3xl font-bold mt-2">--</h3>
                  </div>

                  <div className="bg-green-50 p-5 rounded-lg">
                    <p className="text-gray-600">कतार स्थिति</p>
                    <h3 className="text-xl font-bold text-green-700 mt-2">
                      कोई सक्रिय कतार नहीं
                    </h3>
                  </div>

                </div>
              </>
            )}

            {/* CROP STATUS */}
            {activeSection === "crop" && (
              <>
                <div className="bg-green-800 text-white px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    फसल / खरीद स्थिति
                  </h2>
                  <button onClick={() => setActiveSection("")}>
                    ✕ बंद करें
                  </button>
                </div>

                <div className="p-6 overflow-x-auto">
                  <table className="w-full text-left">
                    <thead className="bg-gray-100">
                      <tr>
                        <th className="p-3">फसल का नाम</th>
                        <th className="p-3">मात्रा</th>
                        <th className="p-3">खरीद स्थिति</th>
                        <th className="p-3">तारीख</th>
                      </tr>
                    </thead>

                    <tbody>
                      <tr>
                        <td className="p-3" colSpan="4">
                          अभी कोई सक्रिय खरीद उपलब्ध नहीं है।
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </>
            )}

            {/* GOVERNMENT NOTICES */}
            {activeSection === "notices" && (
              <>
                <div className="bg-blue-700 text-white px-6 py-4 flex justify-between items-center">
                  <h2 className="text-xl font-bold">
                    सरकारी सूचनाएँ
                  </h2>
                  <button onClick={() => setActiveSection("")}>
                    ✕ बंद करें
                  </button>
                </div>

                <div className="p-6 space-y-4">

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold">
                      फसल खरीद संबंधी सूचना
                    </h3>
                    <p className="text-gray-600 mt-1">
                      फसल खरीद से संबंधित जानकारी के लिए आधिकारिक सरकारी पोर्टल देखें।
                    </p>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-bold">
                      किसान पंजीकरण
                    </h3>
                    <p className="text-gray-600 mt-1">
                      अपना किसान पंजीकरण और विवरण अपडेट रखें।
                    </p>
                  </div>

                  <p className="text-xs text-gray-500">
                    ये उदाहरण के लिए demo सूचनाएँ हैं, वास्तविक सरकारी घोषणाएँ नहीं।
                  </p>

                </div>
              </>
            )}

          </div>
        )}

      </section>

      {/* CURRENT INFORMATION */}
      <section className="max-w-7xl mx-auto px-6 pb-12">

        <div className="bg-white rounded-xl shadow-md overflow-hidden">

          <div className="bg-green-900 text-white px-6 py-4">
            <h2 className="text-2xl font-bold">
              आपकी वर्तमान जानकारी
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0">

            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-gray-500">आज का स्लॉट</p>
              <h3 className="text-xl font-bold text-green-800 mt-2">
                अभी बुक नहीं किया
              </h3>
            </div>

            <div className="p-6 border-b md:border-b-0 md:border-r border-gray-200">
              <p className="text-gray-500">कतार टोकन</p>
              <h3 className="text-xl font-bold text-red-700 mt-2">
                --
              </h3>
            </div>

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

          <p className="text-green-100 mt-1">
            फसल बिक्री अब आसान
          </p>

          <p className="text-green-200 text-sm mt-3">
            किसानों की सुविधा, देश की समृद्धि
          </p>
        </div>
      </footer>

    </div>
  );
};

export default SellerDashboard;
