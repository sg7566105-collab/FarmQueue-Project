import React from "react";
import cardbg from "../assets/cardbg.jpeg";
const mobile = () => {
  return (
    <section className="mx-6 my-6 rounded-xl bg-green-50 p-6 bg-cover bg-center " style={{backgroundImage:`url(${cardbg})`}}>
      <div className="flex items-center relative justify-between gap-6 overflow-hidden ">
      
        {/* Left */}
        <div className="relative z-10">
          <h2 className="text-2xl font-bold text-green-900 ">
            सभी जानकारी अब आपके मोबाइल पर
          </h2>

          <p className="mt-2 text-gray-700 font-bold">
            SMS और ऐप के माध्यम से पंजीकरण, स्लॉट, कतार स्थिति, फसल खरीद और
            भुगतान की हर अपडेट पाएं।
          </p>

          <button className="mt-4 rounded-lg bg-green-700 px-5 py-2 font-semibold text-white hover:bg-green-100 border-2 hover:text-green-900 hover:cursor-pointer">
            अधिक जानकारी →
          </button>
        </div>

        {/* Right */}
        
      </div>
    </section>
  );
};

export default mobile;
