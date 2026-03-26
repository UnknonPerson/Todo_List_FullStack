import React from 'react'
import log from '../assets/login.png'

const Login = () => {
  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
      
      <div className='backdrop-blur-lg bg-white/10 border border-white/20 
      rounded-2xl shadow-2xl flex flex-col md:flex-row items-center 
      justify-between text-white p-8 max-w-4xl w-full gap-8 '>

        {/* LEFT IMAGE */}
        <div className='flex justify-center items-center'>
          <img 
            src={log}
            className='h-64 w-64 md:h-80 md:w-80 object-contain'
            alt='login visual'
          />
        </div>

        {/* DIVIDER */}
        <div className='hidden md:block w-1 h-80 bg-white/30'></div>

        {/* FORM */}
        <div className='w-full max-w-sm'>
          <form className='flex flex-col gap-4'>

            <h1 className='text-2xl font-bold text-center mb-2'>
              Login to Your Account
            </h1>

            {/* Email */}
            <div className='flex flex-col gap-1'>
              <label className='text-sm'>Email</label>
              <input 
                type="email" 
                name='email' 
                placeholder='Enter email'
                className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            {/* Password */}
            <div className='flex flex-col gap-1'>
              <label className='text-sm'>Password</label>
              <input 
                type='password' 
                name='password' 
                placeholder='Enter password'
                className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            {/* Button */}
            <button 
              className='mt-3 bg-linear-to-r from-purple-500 to-indigo-600 
              hover:scale-105 transition-all duration-300 py-2 rounded-lg font-semibold shadow-lg'
            >
              Login
            </button>

          </form>
        </div>

      </div>
    </div>
  )
}

export default Login