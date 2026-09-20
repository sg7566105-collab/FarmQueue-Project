import React from 'react'

const QueueStatus = () => {
  return (
  <div className="bg-white rounded-xl shadow-md overflow-hidden border-t-4 border-red-600">
            <div className="p-6">
              <div className="text-4xl mb-4">1234</div>

              <h3 className="text-xl font-bold text-gray-800">कतार स्थिति</h3>

              <p className="text-gray-600 mt-2 min-h-12">
                अपना टोकन नंबर और वर्तमान कतार की स्थिति देखें।
              </p>

              <button
                onClick={() => navigate("/seller-dashboard/queue")}
                className="mt-5 w-full bg-red-600 text-white py-2.5 rounded-md font-semibold hover:bg-red-700 hover:cursor-pointer"
              >
                कतार देखें
              </button>
            </div>
          </div>
  )
}

export default QueueStatus
