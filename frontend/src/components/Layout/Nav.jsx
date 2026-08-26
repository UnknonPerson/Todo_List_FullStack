import React, { useMemo, useState } from "react";

import {
    Sun,
    Moon,
    Menu,
    LogOut,
    User,
    ChevronDown,
} from "lucide-react";

import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";

import {
    useLocation,
    useNavigate,
} from "react-router-dom";

const Nav = ({ onMenuClick }) => {
    const { theme, toggleTheme } = useTheme();
    const { user, logout } = useUser();

    const navigate = useNavigate();
    const location = useLocation();

    const [profileOpen, setProfileOpen] = useState(false);

    /* Page title */
    const pageTitle = useMemo(() => {
        const path = location.pathname;

        if (path === "/" || path === "/dashboard") {
            return "Dashboard";
        }

        if (path.startsWith("/tasks")) {
            return "My Tasks";
        }

        if (path.startsWith("/calendar")) {
            return "Calendar";
        }

        if (path.startsWith("/profile")) {
            return "Profile";
        }

        return "Task Manager";
    }, [location.pathname]);

    /* User initials */
    const initials = useMemo(() => {
        if (!user?.username) return "GU";

        const name = user.username.trim();

        if (!name) return "GU";

        const words = name.split(" ");

        if (words.length >= 2) {
            return (
                words[0][0] + words[1][0]
            ).toUpperCase();
        }

        return name.slice(0, 2).toUpperCase();
    }, [user?.username]);

    /* Logout */
    const handleLogout = () => {
        setProfileOpen(false);

        logout();

        navigate("/login", {
            replace: true,
        });
    };

    /* Profile */
    const handleProfile = () => {
        setProfileOpen(false);
        navigate("/profile");
    };

    return (
        <header className="sticky top-0 z-40 h-16 border-b border-slate-200 bg-white/95 backdrop-blur-md transition-colors duration-300 dark:border-slate-700/60 dark:bg-[#07111f]/95">

            <div className="flex h-full items-center justify-between px-4 sm:px-5 lg:px-6">

                {/* =============================== */}
                {/* Left Section                     */}
                {/* =============================== */}

                <div className="flex min-w-0 items-center gap-3">

                    {/* Mobile Menu */}
                    <button
                        type="button"
                        onClick={onMenuClick}
                        aria-label="Open navigation menu"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white lg:hidden"
                    >
                        <Menu size={20} />
                    </button>

                    {/* Page Title */}
                    <div className="min-w-0">
                        <h1 className="truncate text-lg font-bold text-slate-900 dark:text-white sm:text-xl">
                            {pageTitle}
                        </h1>

                        <p className="hidden text-[10px] text-slate-400 dark:text-slate-500 sm:block">
                            Stay organized and get things done
                        </p>
                    </div>
                </div>

                {/* =============================== */}
                {/* Right Section                    */}
                {/* =============================== */}

                <div className="flex items-center gap-1.5 sm:gap-2">

                    {/* Theme Toggle */}
                    <button
                        type="button"
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className="flex h-9 w-9 items-center justify-center rounded-lg text-slate-500 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-800 dark:hover:text-white"
                    >
                        {theme === "light" ? (
                            <Moon size={18} />
                        ) : (
                            <Sun
                                size={18}
                                className="text-yellow-400"
                            />
                        )}
                    </button>

                    {/* Divider */}
                    <div className="mx-1 hidden h-6 w-px bg-slate-200 dark:bg-slate-700 sm:block" />

                    {/* =========================== */}
                    {/* Profile                      */}
                    {/* =========================== */}

                    <div className="relative">

                        <button
                            type="button"
                            onClick={() =>
                                setProfileOpen(
                                    (prev) => !prev
                                )
                            }
                            className="flex items-center gap-2 rounded-xl p-1 transition hover:bg-slate-100 dark:hover:bg-slate-800"
                        >
                            {/* Avatar */}
                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white shadow-sm">
                                {initials}
                            </div>

                            {/* User Info */}
                            <div className="hidden text-left lg:block">
                                <p className="max-w-[110px] truncate text-xs font-semibold text-slate-900 dark:text-white">
                                    {user?.username ||
                                        "Guest User"}
                                </p>

                                <p className="text-[10px] text-slate-500 dark:text-slate-400">
                                    {user?.role ||
                                        "Developer"}
                                </p>
                            </div>

                            <ChevronDown
                                size={14}
                                className={`
                                    hidden text-slate-400 transition-transform lg:block
                                    ${
                                        profileOpen
                                            ? "rotate-180"
                                            : ""
                                    }
                                `}
                            />
                        </button>

                        {/* =========================== */}
                        {/* Profile Dropdown             */}
                        {/* =========================== */}

                        {profileOpen && (
                            <>
                                {/* Overlay */}
                                <button
                                    type="button"
                                    aria-label="Close profile menu"
                                    className="fixed inset-0 z-40 cursor-default"
                                    onClick={() =>
                                        setProfileOpen(
                                            false
                                        )
                                    }
                                />

                                <div className="absolute right-0 top-12 z-50 w-56 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-xl shadow-slate-900/10 dark:border-slate-700/60 dark:bg-slate-800 dark:shadow-black/30">

                                    {/* User Info */}
                                    <div className="border-b border-slate-200 p-3 dark:border-slate-700/60">

                                        <div className="flex items-center gap-3">

                                            <div className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white">
                                                {initials}
                                            </div>

                                            <div className="min-w-0">
                                                <p className="truncate text-xs font-semibold text-slate-900 dark:text-white">
                                                    {user?.username ||
                                                        "Guest User"}
                                                </p>

                                                <p className="truncate text-[10px] text-slate-500 dark:text-slate-400">
                                                    {user?.email ||
                                                        user?.role ||
                                                        "Developer"}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Menu */}
                                    <div className="p-1.5">

                                        <button
                                            type="button"
                                            onClick={handleProfile}
                                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 dark:text-slate-300 dark:hover:bg-slate-700 dark:hover:text-white"
                                        >
                                            <User size={15} />
                                            Profile
                                        </button>

                                        <button
                                            type="button"
                                            onClick={handleLogout}
                                            className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-xs font-medium text-red-500 transition hover:bg-red-50 dark:hover:bg-red-500/10"
                                        >
                                            <LogOut size={15} />
                                            Logout
                                        </button>

                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Nav;