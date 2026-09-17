import React from "react";

const todaycard = ({ icon, title, value, label }) => {
  return (
    <div className="flex items-center justify-between rounded-lg  bg-green-50 p-4 shadow-sm hover:bg-red-300 transition-colors duration-500">
      <div>
        <div className="flex items-center gap-2">
          <span className="text-xl">{icon}</span>
          <h3 className="font-semibold text-green-900">{title}</h3>
        </div>

        <p className="mt-2 text-2xl font-bold text-gray-900">{value}</p>

        <p className="text-xs text-gray-500">{label}</p>
      </div>

      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-green-100 hover:bg-green-900 hover:cursor-pointer hover:text-white transition-all duration-500">
        →
      </div>
    </div>
  );
};

export default todaycard;
