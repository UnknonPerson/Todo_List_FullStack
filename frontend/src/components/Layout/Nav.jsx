import React, { useMemo } from "react";
import { Sun, Moon, Search, Menu } from "lucide-react";
import { useTheme } from "../../context/ThemeContext";
import { useUser } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";

const Nav = ({ onMenuClick }) => {
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const initials = useMemo(() => {
    if (!user?.name) return "GU";

    return user.name
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map((word) => word[0])
      .join("")
      .toUpperCase();
  }, [user?.name]);

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center justify-between border-b border-gray-200 bg-white px-6 shadow-sm dark:border-gray-800 dark:bg-gray-900">

      {/* Left */}
      <div className="flex items-center gap-4">
        <button
          onClick={onMenuClick}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:hover:bg-gray-800 lg:hidden"
        >
          <Menu size={22} />
        </button>

        <h1 className="text-2xl font-bold text-gray-900 dark:text-white">
          Dashboard
        </h1>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">

        {/* Search */}
        <div className="relative hidden lg:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="search"
            placeholder="Search..."
            className="w-64 rounded-xl border border-gray-200 bg-gray-50 py-2 pl-10 pr-4 text-sm outline-none focus:border-blue-500 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
          />
        </div>

        {/* Theme */}
        <button
          onClick={toggleTheme}
          className="rounded-lg p-2 transition hover:bg-gray-100 dark:text-white dark:hover:bg-gray-800"
        >
          {theme === "light" ? <Moon size={20} /> : <Sun size={20} />}
        </button>

        {/* Profile */}
        <button className="flex items-center gap-3 rounded-xl px-2 py-1 transition hover:bg-gray-100 dark:hover:bg-gray-800">

          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-sm font-semibold text-white">
            {initials}
          </div>

          <div className="hidden md:block text-left">
            <p className="font-medium text-gray-900 dark:text-white">
              {user?.name || "Guest User"}
            </p>

            <p className="text-xs text-gray-500 dark:text-gray-400">
              {user?.role || "Developer"}
            </p>
          </div>
        </button>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="rounded-lg bg-red-500 px-4 py-2 text-sm font-medium text-white transition hover:bg-red-600"
        >
          Logout
        </button>

      </div>
    </header>
  );
};

export default Nav;