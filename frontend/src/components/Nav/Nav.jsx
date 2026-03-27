import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {

  const [authenticated, setAuthenticated] = React.useState('Login')

  return (
    <div className="font-mono flex items-center justify-between px-6 py-3 
backdrop-blur-lg bg-white/10 border border-white/20 
rounded-2xl shadow-2xl w-full my-3">

      <div className="text-white text-2xl font-bold tracking-wide">
        LearnWise
      </div>
      <ul className="text-white flex items-center gap-6">
        <li>
          <Link to="" className="hover:text-purple-300 transition duration-300">
            Home
          </Link>
        </li>
        <li>
          <Link to="#" className="hover:text-purple-300 transition duration-300">
            About
          </Link>
        </li>
        <li>
          <Link to="todo" className="hover:text-purple-300 transition duration-300">
            Todo List
          </Link>
        </li>
        <li>
          <Link to={authenticated} className=" transition duration-300 border px-3 py-1 rounded-2xl bg-white text-black hover:bg-transparent hover:text-white">
            {authenticated}
          </Link>
        </li>
      </ul>
    </div>
  )
}

export default Nav
