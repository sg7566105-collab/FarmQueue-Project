import React from "react";

const Footer = () => {
  return (
    <footer className="mt-6 bg-green-900 text-white">

     
      <div className="flex items-center justify-between px-10 py-5">

       {/* logo here  */}
        <div className="flex items-center gap-3">
          <div className="text-5xl">🌾</div>

          <div>
            <h2 className="text-2xl font-bold">FarmQueue</h2>
            <p className="text-sm text-green-200">
              फसल बिक्री अब आसान
            </p>
          </div>
        </div>


        {/* Links */}
        <div className="flex items-center gap-5 text-sm">

          <span className="cursor-pointer hover:text-green-300">
            होम
          </span>

          <span className="text-green-400">|</span>

          <span className="cursor-pointer hover:text-green-300">
            हमारे बारे में
          </span>

          <span className="text-green-400">|</span>

          <span className="cursor-pointer hover:text-green-300">
            गोपनीयता नीति
          </span>

          <span className="text-green-400">|</span>

          <span className="cursor-pointer hover:text-green-300">
            नियम और शर्तें
          </span>

          <span className="text-green-400">|</span>

          <span className="cursor-pointer hover:text-green-300">
            संपर्क करें
          </span>

        </div>


        {/* Social Icons */}
        <div className="flex items-center gap-4 text-xl">

          <span className="cursor-pointer hover:text-green-300">
            ▶
          </span>

          <span className="cursor-pointer hover:text-green-300">
            f
          </span>

          <span className="cursor-pointer hover:text-green-300">
            𝕏
          </span>

          <span className="cursor-pointer hover:text-green-300">
            ◎
          </span>

        </div>

      </div>


      {/* Copyright */}
      <div className="border-t border-green-700 px-10 py-3 text-right text-sm text-green-200">
        © 2026 FarmQueue. सभी अधिकार सुरक्षित।
      </div>

    </footer>
  );
};

export default Footer;