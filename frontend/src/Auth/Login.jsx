import React, { useContext } from 'react'
import log from '../assets/login.png'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from "react-router-dom";
import userContext from '../Context/userCntext';

const Login = () => {

  const { setUser , user } = useContext(userContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);

    try {
      const res = await fetch("http://localhost:7200/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data)
      });

      const result = await res.json();
      console.log(result);

      // ✅ Save user (adjust based on your API response)
      setUser(result.data);

      console.log(user);

      // ✅ Redirect after login
      navigate("/");

    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className='flex justify-center items-center min-h-screen px-4'>
      
      <div className='backdrop-blur-lg bg-white/10 border border-white/20 
      rounded-2xl shadow-2xl flex flex-col md:flex-row items-center 
      justify-between text-white p-8 max-w-4xl w-full gap-8 '>

        {/* IMAGE */}
        <div className='flex justify-center items-center'>
          <img 
            src={log}
            className='h-64 w-64 md:h-80 md:w-80 object-contain'
            alt='login visual'
          />
        </div>

        <div className='hidden md:block w-1 h-80 bg-white/30'></div>

        {/* FORM */}
        <div className='w-full max-w-sm'>
          <form className='flex flex-col gap-4' onSubmit={handleSubmit(onSubmit)}>

            <h1 className='text-2xl font-bold text-center mb-2'>
              Login to Your Account
            </h1>

            {/* Email */}
            <input 
              type="email" 
              {...register("email", { required: true })}
              placeholder='Enter email'
              className='input-style bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />

            {/* Username */}
            <input 
              type="text" 
              {...register("username")}
              placeholder='Enter username'
              className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />

            {/* Password */}
            <input 
              type='password' 
              {...register("password", { required: true })}
              placeholder='Enter password'
              className='bg-white/10 border border-white/20 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500'
            />

             <input 
              type="submit" 
              value="Log In"
              className='mt-3 bg-linear-to-r from-purple-500 to-indigo-600 
              hover:scale-105 transition-all duration-300 py-2 rounded-lg font-semibold shadow-lg'
            />

          </form>

          <div className='text-sm text-center text-gray-400 mt-4'>
            New here? 
            <Link to="/signup" className='text-purple-400 hover:underline'>
              Create an account
            </Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Login