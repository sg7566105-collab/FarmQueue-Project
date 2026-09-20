import React from 'react'

const SlotBooking = () => {
  return (
   <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-green-700">
            <div className="p-6">
              <div className="text-4xl mb-4">📅</div>

              <h3 className="text-xl font-bold text-gray-800">स्लॉट बुकिंग</h3>

              <p className="text-gray-600 mt-2 min-h-12">
                फसल बेचने के लिए अपनी तारीख और समय का स्लॉट बुक करें।
              </p>

              <button
                onClick={() => navigate("/seller-dashboard/slot-booking")}
                className="mt-5 w-full bg-green-700 text-white py-2.5 rounded-md font-semibold hover:bg-green-800 hover:cursor-pointer"
              >
                स्लॉट बुक करें
              </button>
            </div>
          </div>
  )
}

export default SlotBooking
