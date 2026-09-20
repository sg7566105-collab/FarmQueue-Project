import React from "react";

const GovernmentStatus = () => {
  return (
   <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-blue-600">
            <div className="p-6">
              <div className="text-4xl mb-4">🔔</div>

              <h3 className="text-xl font-bold text-gray-800">
                सरकारी सूचनाएँ
              </h3>

              <p className="text-gray-600 mt-2 min-h-12">
                किसानों के लिए महत्वपूर्ण सरकारी जानकारी देखें।
              </p>

              <button
                onClick={() => navigate("/seller-dashboard/notices")}
                className="mt-5 w-full bg-blue-600 text-white py-2.5 rounded-md font-semibold hover:bg-blue-700 hover:cursor-pointer"
              >
                सूचनाएँ देखें
              </button>
            </div>
          </div>
  );
};

export default GovernmentStatus;
