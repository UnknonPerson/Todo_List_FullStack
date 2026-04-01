import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import userContext from '../../Context/userCntext'
import { User, LogOut } from 'lucide-react'

const Nav = () => {

  const { user, setUser } = useContext(userContext)
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem("accessToken")
    setUser(null)
    navigate("/login")
  }

  return (
    <div className="font-mono flex items-center justify-between px-6 py-3 
    backdrop-blur-lg bg-white/10 border border-white/20 
    rounded-2xl shadow-2xl w-full my-3">

      {/* Logo */}
      <div className="text-white text-2xl font-bold tracking-wide">
        LearnWise
      </div>

      {/* Nav Links */}
      <ul className="text-white flex items-center gap-6">

        <li>
          <Link to="/" className="hover:text-purple-300 transition">
            Home
          </Link>
        </li>

        <li>
          <Link to="#" className="hover:text-purple-300 transition">
            About
          </Link>
        </li>

        <li>
          <Link to="/todo" className="hover:text-purple-300 transition">
            Todo List
          </Link>
        </li>

        {/* 🔥 Dynamic Auth UI */}
        <li>
          {user ? (
            <div className="flex items-center gap-4">

              {/* Profile */}
              <div
                onClick={() => navigate("/profile")}
                className="flex items-center gap-2 cursor-pointer hover:text-purple-300"
              >
                <User size={20} />
                <span>{user?.name || "Profile"}</span>
              </div>

              {/* Logout */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 border px-3 py-1 rounded-2xl 
                bg-red-500/20 hover:bg-red-500/30 transition"
              >
                <LogOut size={18} />
                Logout
              </button>

            </div>
          ) : (
            <Link
              to="/login"
              className="border px-3 py-1 rounded-2xl bg-white text-black 
              hover:bg-transparent hover:text-white transition"
            >
              Login
            </Link>
          )}
        </li>

      </ul>
    </div>
  )
}

export default Nav