import React from 'react'
import { Calendar, LayoutDashboard, List, CheckCircle, Settings } from 'lucide-react'
import { Link, useLocation } from "react-router-dom";

const SideNav = () => {

    const location = useLocation();

    const hideSidebarRoutes = ["/login", "/signup"];
    if (hideSidebarRoutes.includes(location.pathname)) return null;

    const isActive = (path) => location.pathname === path;

    return (
        <div className="font-mono flex flex-col justify-between
        backdrop-blur-lg bg-white/10 border border-white/20 
        rounded-2xl shadow-2xl w-70 h-screen p-5 text-white ml-2 mb-2">

            {/* 🔝 TOP MENU */}
            <div>
                <h3 className="mb-6 text-lg font-bold">MENU</h3>

                <ul className="flex flex-col gap-4">

                    <li>
                        <Link to="/todo"
                            className={`flex items-center gap-2 p-2 rounded-lg transition
                            ${isActive("/todo") ? "bg-white/20 text-purple-300" : "hover:bg-white/10"}`}>
                            <LayoutDashboard size={18} /> Dashboard
                        </Link>
                    </li>

                    <li>
                        <Link to="/todo/today"
                            className={`flex items-center gap-2 p-2 rounded-lg transition
                            ${isActive("/todo/today") ? "bg-white/20 text-purple-300" : "hover:bg-white/10"}`}>
                            <Calendar size={18} /> Today
                        </Link>
                    </li>

                    <li>
                        <Link to="/todo/tasks"
                            className={`flex items-center gap-2 p-2 rounded-lg transition
                            ${isActive("/todo/tasks") ? "bg-white/20 text-purple-300" : "hover:bg-white/10"}`}>
                            <List size={18} /> All Tasks
                        </Link>
                    </li>

                    <li>
                        <Link to="/todo/completed"
                            className={`flex items-center gap-2 p-2 rounded-lg transition
                            ${isActive("/todo/completed") ? "bg-white/20 text-purple-300" : "hover:bg-white/10"}`}>
                            <CheckCircle size={18} /> Completed
                        </Link>
                    </li>

                    <li>
                        <Link to="/todo/categories"
                            className={`flex items-center gap-2 p-2 rounded-lg transition
                            ${isActive("/todo/categories") ? "bg-white/20 text-purple-300" : "hover:bg-white/10"}`}>
                            <List size={18} /> Categories
                        </Link>
                    </li>

                    <li className="mt-4 border-t border-white/20 pt-4">
                        <Link to="/todo/settings"
                            className={`flex items-center gap-2 p-2 rounded-lg transition
                            ${isActive("/todo/settings") ? "bg-white/20 text-purple-300" : "hover:bg-white/10"}`}>
                            <Settings size={18} /> Settings
                        </Link>
                    </li>

                </ul>
            </div>

            {/* 🔻 BOTTOM PROFILE */}
            <div className="flex items-center gap-3 mt-6 p-3 rounded-xl 
            bg-white/10 border border-white/20 hover:bg-white/20 transition cursor-pointer">

                <div className="w-10 h-10 flex items-center justify-center 
                rounded-full bg-linear-to-br from-purple-500 to-pink-500 font-bold">
                    TK
                </div>

                <Link to="/profile" className="flex-1">
                    <p className="text-sm font-semibold">
                        Tanish Prasad
                    </p>
                    <p className="text-xs text-gray-300">
                        tanish90065@gmai.com
                    </p>
                </Link>

            </div>

        </div>
    )
}

export default SideNav