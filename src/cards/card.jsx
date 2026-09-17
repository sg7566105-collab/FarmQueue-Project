import React from 'react'

const card = ({icon,title,description,bg}) => {
  return (
    <div className={`${bg} rounded-xl backdrop-blur-sm p-6 shadow-lg transition-all duration-300  hover:shadow-xl flex flex-col  text-center items-center gap-2 `}>
        {icon}
        <h3 className='font-bold text-green-800 text-lg'>{title}</h3>
        <p className='text-green-900 font-medium'>{description}</p>
        <div className='flex h-10 w-10 items-center justify-center rounded-full backdrop-blur-sm bg-white text-2xl text-green-950 transition-all duration 400 hover:text-white hover:bg-green-950 hover:cursor-pointer'>→</div>
      
    </div>
  )
}

export default card
