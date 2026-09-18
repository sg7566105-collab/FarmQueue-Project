import React from "react";
import farmerimage from "../assets/farmer.jpeg";
const leftHero = () => {
  return (
    <section className="relative h-100 w-385  overflow-hidden ">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src={farmerimage}
          alt="किसान"
          className="h-full w-full object-cover"
        />
      </div>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full items-center px-12">
        <div className="max-w-2xl text-white">
          <span className="mb-15 bg-red-900 text-white rounded-md px-7 py-2  ">
            किसानों के लिए विशेष
          </span>
          <h1 className="text-5xl font-bold leading-tight text-green-900 mt-5 ">
            किसान की सुविधा,
            <br />
            आसान फसल बिक्री
          </h1>

          <p className="mt-5 text-lg leading-8">
            अब फसल बेचने के लिए लंबी कतारों में इंतजार नहीं। FarmQueue के साथ
            अपना स्लॉट बुक करें और अपनी फसल की बिक्री को आसान बनाएं।
          </p>

          {/* Buttons */}
          <div className="mt-8 flex gap-4">
            <button className="rounded-md bg-green-700 px-7 py-3 font-semibold text-white transition-all duration-300 hover:bg-green-800">
              स्लॉट बुक करें
            </button>

            <button className="rounded-md border-2 border-white bg-white/10 px-7 py-3 font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white hover:text-black">
              कतार स्थिति देखें
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default leftHero;
