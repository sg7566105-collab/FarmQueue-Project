import React from 'react'

const CropStatus = () => {
  return (
 <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-green-700">
            <div className="p-6">
              <div className="text-4xl mb-4">🌾</div>

              <h3 className="text-xl font-bold text-gray-800">
                फसल / खरीद स्थिति
              </h3>

              <p className="text-gray-600 mt-2 min-h-12">
                अपनी फसल की खरीद की वर्तमान स्थिति देखें।
              </p>

              <button
                onClick={() => navigate("/seller-dashboard/crop-status")}
                className="mt-5 w-full bg-green-700 text-white py-2.5 rounded-md font-semibold hover:bg-green-800 hover:cursor-pointer"
              >
                स्थिति देखें
              </button>
            </div>
          </div>
  )
}

export default CropStatus
