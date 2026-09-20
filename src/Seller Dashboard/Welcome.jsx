import React from 'react'

const Welcome = () => {
  return (
    <div className="max-w-2xl text-white">
            <span className="inline-block bg-red-700 px-5 py-2 rounded-md mb-5 font-semibold">
              किसान के लिए विशेष
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              नमस्ते, किसान जी
            </h2>

            <p className="mt-4 text-lg">
              FarmQueue के माध्यम से अपनी फसल की बिक्री, स्लॉट और कतार की स्थिति
              आसानी से देखें।
            </p>

            <div className="flex flex-wrap gap-4 mt-7">
              <button
                onClick={() => navigate("/seller-dashboard/slot-booking")}
                className="bg-green-700 hover:bg-green-800 px-7 py-3 rounded-md font-bold transition hover:cursor-pointer"
              >
                स्लॉट बुक करें
              </button>

              <button
                onClick={() => navigate("/seller-dashboard/queue")}
                className="bg-white text-green-900 hover:bg-gray-100 px-7 py-3 rounded-md font-bold transition hover:cursor-pointer"
              >
                कतार स्थिति देखें
              </button>
            </div>
            </div>
  )
}

export default Welcome
