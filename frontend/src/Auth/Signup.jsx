import React from 'react'
import pmg from '../assets/sign.png'
import { useForm } from 'react-hook-form'

const Signup = () => {

    const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

const onSubmit = async (data) => {
  try {
    const res = await fetch("http://localhost:7200/api/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data)
    });

    const result = await res.json();
    console.log(result);

  } catch (error) {
    console.error("Error:", error);
  }
};

  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
      
      <div className='backdrop-blur-lg bg-white/10 border border-white/20 
      rounded-2xl shadow-2xl flex flex-col md:flex-row items-center 
      justify-between text-white p-8 max-w-4xl w-full gap-8 my-5'>

        {/* LEFT IMAGE */}
        <div className='flex justify-center items-center'>
          <img 
            src={pmg}
            className='h-64 w-64 md:h-80 md:w-80 object-contain'
            alt='signup visual'
          />
        </div>

        {/* DIVIDER */}
        <div className='hidden md:block w-1 h-80 bg-white/30'></div>

        {/* FORM */}
        <div className='w-full max-w-sm'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>

            <h1 className='text-2xl font-bold text-center mb-2'>
              SIGN UP
            </h1>

            {/* Username */}
            <div className='flex flex-col gap-1'>
              <label className='text-sm'>Username</label>
              <input 
                type="text" 
                {...register("username")} 
                placeholder='Enter username'
                className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            {/* Email */}
            <div className='flex flex-col gap-1'>
              <label className='text-sm'>Email</label>
              <input 
                type="email" 
                {...register("email")}
                placeholder='Enter email'
                className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            {/* Password */}
            <div className='flex flex-col gap-1'>
              <label className='text-sm'>Password</label>
              <input 
                type='password' 
                {...register("password" , { required: {value : true , message: "Password is required"}, minLength: {value: 6 , message: "Password is required to be at least 6 characters long"} })}
                placeholder='Enter password'
                className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            {/* Confirm Password */}
            <div className='flex flex-col gap-1'>
              <label className='text-sm'>Confirm Password</label>
              <input 
                type='password' 
                {...register("confirmPassword" , {required: {value: true, message: "Please confirm your password"}})}
                placeholder='Confirm password'
                className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
              />
            </div>

            {/* Button */}
            <input 
              type="submit" 
              value="Create Account"
              className='mt-3 bg-linear-to-r from-purple-500 to-indigo-600 
              hover:scale-105 transition-all duration-300 py-2 rounded-lg font-semibold shadow-lg'
            />
          </form>
        </div>

      </div>
    </div>
  )
}

export default Signup