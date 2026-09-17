import React from 'react'
import homeImage from "../assets/home.png"
const Navbar = () => {
  return (
    <nav className="flex bg-red-800 justify-between items-center text-white font-medium">
       
      <div className="flex h-full items-center gap-1">

        <a
          href="#"
          className="flex items-center px-5 font-semibold transition-all duration-300 hover:bg-red-800"
        >
          <img src={homeImage} alt=""  className="h-5 w-5 mr-2"/> होम
        </a>

        <a
          href="#"
          className="flex items-center px-5 transition-all duration-300 hover:bg-red-800"
        >
          स्लॉट बुक करें
        </a>

        <a
          href="#"
          className="flex items-center px-5 transition-all duration-300 hover:bg-red-800"
        >
          कतार स्थिति
        </a>

        <a
          href="#"
          className="flex items-center px-5 transition-all duration-300 hover:bg-red-800"
        >
          खरीद स्थिति
        </a>

        <a
          href="#"
          className="flex items-center px-5 transition-all duration-300 hover:bg-red-800"
        >
          भुगतान स्थिति
        </a>

        <a
          href="#"
          className="flex items-center px-5 transition-all duration-300 hover:bg-red-800"
        >
          सूचनाएँ
        </a>

        <a
          href="#"
          className="flex items-center px-5 transition-all duration-300 hover:bg-red-800"
        >
          हमारे बारे में
        </a>

      </div>

      {/* Menu */}
      <button className="px-3 py-2 text-2xl transition-all duration-300 hover:bg-red-800">
        ☰
      </button>

    </nav>
  )
}

export default Navbar
