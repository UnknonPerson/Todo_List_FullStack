import React from 'react'
import logo from '../../assets/png1.png'

const InfoCard = (props) => {
  return (
    <div className='backdrop-blur-lg bg-white/10 border border-white/20 
    rounded-2xl shadow-2xl flex flex-col items-center text-center 
    w-70 p-6 gap-4 hover:scale-105 transition-all duration-300'>

      <img  
        src={props.logo || logo}
        alt="logo"
        className="w-20 object-contain"
      />

      <h1 className='text-white text-xl font-semibold'>
        {props.title || "Store your tasks"}
      </h1>

      <p className='text-gray-300 text-sm'>
        {props.message || "Organize and manage your daily tasks efficiently with ease."}
      </p>

      <button className='mt-2 px-4 py-2 bg-white/20 text-white 
      rounded-lg hover:bg-white/30 transition'>
        {props.btnMsg || "Read More"}
      </button>

    </div>
  )
}

export default InfoCard
