import React from 'react'

const Nav = () => {
  return (
    <div className="font-mono flex items-center justify-between px-6 py-3 
backdrop-blur-lg bg-white/10 border border-white/20 
rounded-2xl shadow-2xl w-full my-3">

      <div className="text-white text-2xl font-bold tracking-wide">
        LearnWise
      </div>
      <ul className="text-white flex items-center gap-6">
        <li>
          <a href="#" className="hover:text-purple-300 transition duration-300">
            Home
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-300 transition duration-300">
            About
          </a>
        </li>
        <li>
          <a href="#" className="hover:text-purple-300 transition duration-300">
            Services
          </a>
        </li>
        <li>
          <a href="#" className=" transition duration-300 border px-3 py-1 rounded-2xl bg-white text-black hover:bg-transparent hover:text-white">
            Login
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Nav
