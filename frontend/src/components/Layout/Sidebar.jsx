import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  User2,
  LogOut,
  ChevronRight,
  X,
} from "lucide-react";

import { NavLink, useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

const menuItems = [
  {
    name: "Dashboard",
    path: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Tasks",
    path: "/tasks",
    icon: CheckSquare,
  },
  {
    name: "Calendar",
    path: "/calendar",
    icon: Calendar,
  },
  {
    name: "Profile",
    path: "/profile",
    icon: User2,
  },
];

const Sidebar = ({ isOpen, onClose }) => {
  const { user, logout } = useUser();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/", {
      replace: true,
    });
  };

  const initials = user?.username
    ? user.username.trim().slice(0, 2).toUpperCase()
    : "GU";

  return (
    <aside
      className={`
        fixed inset-y-0 left-0 z-50
        flex w-72 flex-col
        border-r border-slate-200
        bg-white
        transition-transform duration-300
        dark:border-slate-700/60
        dark:bg-[#07111f]

        ${isOpen ? "translate-x-0" : "-translate-x-full"}

        lg:static
        lg:translate-x-0
        lg:shrink-0
      `}
    >
      {/* Logo */}
      <NavLink to="/dashboard" className="group block">
        <div className="border-b border-slate-200 px-5 py-5 dark:border-slate-700/60">
          <div className="flex items-center gap-3">
            {/* Logo */}
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-linear-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/20">
              <CheckSquare
                size={21}
                className="text-white"
                strokeWidth={2.5}
              />
            </div>

            {/* Brand */}
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900 dark:text-white">
                TaskFlow
              </h1>

              <p className="text-[10px] font-medium text-slate-400 dark:text-slate-500">
                Organize. Focus. Complete.
              </p>
            </div>

            {/* Mobile Close Button */}
            <div className="ml-auto lg:hidden">
              <button
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onClose();
                }}
                className="rounded-lg p-1 hover:bg-slate-100 dark:hover:bg-slate-800"
              >
                <X
                  size={18}
                  className="text-slate-600 dark:text-slate-400"
                />
              </button>
            </div>
          </div>
        </div>
      </NavLink>

      {/* Navigation */}
      <nav className="flex-1 px-3 py-5">
        <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-widest text-slate-400 dark:text-slate-500">
          Workspace
        </p>

        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  onClick={onClose}
                  className={({ isActive }) => `
                    group flex items-center gap-3 rounded-xl
                    px-3 py-2.5 text-sm font-medium
                    transition-all duration-200

                    ${
                      isActive
                        ? "bg-cyan-500 text-white shadow-md shadow-cyan-500/20"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800/80 dark:hover:text-white"
                    }
                  `}
                >
                  {({ isActive }) => (
                    <>
                      {/* Icon */}
                      <span
                        className={`
                          flex h-8 w-8 items-center justify-center rounded-lg

                          ${
                            isActive
                              ? "bg-white/15"
                              : "bg-slate-100 dark:bg-slate-800"
                          }
                        `}
                      >
                        <Icon
                          size={17}
                          strokeWidth={isActive ? 2.5 : 2}
                        />
                      </span>

                      {/* Name */}
                      <span className="flex-1">{item.name}</span>

                      {/* Active Arrow */}
                      {isActive && (
                        <ChevronRight
                          size={15}
                          className="text-white/80"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="border-t border-slate-200 p-3 dark:border-slate-700/60">
        {/* User Card */}
        <div className="mb-2 rounded-xl border border-slate-200 bg-slate-50 p-3 dark:border-slate-700/60 dark:bg-slate-800/50">
          <div className="flex items-center gap-3">
            {/* Avatar */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-cyan-500 to-blue-600 text-xs font-bold text-white">
              {initials}
            </div>

            {/* User Info */}
            <div className="min-w-0 flex-1">
              <h3 className="truncate text-xs font-semibold text-slate-900 dark:text-white">
                {user?.username || "Guest User"}
              </h3>

              <p className="mt-0.5 truncate text-[10px] text-slate-500 dark:text-slate-400">
                {user?.email || "No email available"}
              </p>
            </div>
          </div>
        </div>

        {/* Logout */}
        <button
          type="button"
          onClick={handleLogout}
          className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-red-500 transition hover:bg-red-50 hover:text-red-600 dark:text-red-400 dark:hover:bg-red-500/10 dark:hover:text-red-300"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-50 dark:bg-red-500/10">
            <LogOut size={16} />
          </span>

          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
