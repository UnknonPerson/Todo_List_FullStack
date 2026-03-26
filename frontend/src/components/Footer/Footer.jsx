import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-black/80 backdrop-blur-lg border-t border-white/10 text-white px-6 py-8">
      
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        
        <h2 className="text-xl font-bold tracking-wide">
          TodoList
        </h2>

        <ul className="flex gap-6 text-sm text-gray-300">
          <li className="hover:text-white cursor-pointer transition">Home</li>
          <li className="hover:text-white cursor-pointer transition">About</li>
          <li className="hover:text-white cursor-pointer transition">Contact</li>
        </ul>

        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} TodoList. All rights reserved.
        </p>

      </div>
    </footer>
  )
}

export default Footer
