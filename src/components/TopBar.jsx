import React from 'react'

const TopBar = () => {
  return (
    <div className="flex h-10 items-center justify-between bg-green-800 text-sm text-white">
        {/* leftside */}
        <div className="flex items-center gap-2 ml-10">
            <span className='mr-2'>अब फसल बिकेगी घर बैठे</span>
            <span className=''>|</span>
            <span className='ml-2'>किसानों की सुविधा, देश की समृद्धि</span>
        </div>
        {/* rightside */}
        <div className="flex items-center gap-2 mr-10">
            <button className='font-semibold hover:underline'>
                हिंदी
            </button>
           
            <span>|</span>
            <button className='hover:underline'>English</button>
        </div>

    </div>
  )
}

export default TopBar
