import React from 'react'

const Header = () => {
  return (
    <header className='flex h-22.5 items-center justify-between bg-white px-12'>
        {/* logo */}
        <div className="flex  items-center">
            <div className='text-5xl'>
                🌾

            </div>
            <div>
                <span className='text-3xl font-bold text-green-800'>Farm</span><span className='text-3xl font-bold'>Queue</span>
                <p className='font-bold text-sm '>  फसल बिक्री अब आसान</p>

            </div>

        </div>
        {/* searchh */}
        <div className="flex border-2 h-11 w-107 items-center rounded-full border-gray-300 px-4 hover:bg-gray-300 transition-all duration-400">
            <span className='text-xl text-gray-500 mr-3'> ⌕ </span>
            <input type="text" placeholder='यहाँ खोजें...' className=' flex items-center gap-3 ' />
        </div>
        {/* buttonn */}
        <div className='flex items-center'>
             <button className='border-2 bg-green-800 px-5 py-2.5  rounded-md font-semibold text-white transition-all duration-300 hover:bg-green-900'>
                    👤 लॉगिन करें
             </button>
             <button className='border-2 bg-white text-green-800 px-5 py-2.5 rounded-md font-semibold transition-all duration-300 hover:bg-green-800 hover:text-white'>
                    👤 पंजीकरण करें
             </button>
        </div>

    </header>
  )
}

export default Header
