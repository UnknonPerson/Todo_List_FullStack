import {
  LayoutDashboard,
  CheckSquare,
  Calendar,
  User2,
  Settings,
  LogOut,
  Link,
} from "lucide-react";
import { NavLink } from "react-router-dom";

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
  {
    name: "Settings",
    path: "/setting",
    icon: Settings,
  },
];

const Sidebar = () => {
  return (
    <aside className="flex h-screen w-72 flex-col border-r border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900">
      {/* Logo */}
      <NavLink to="/" className="block">
        <div className="border-b border-gray-200 px-6 py-6 dark:border-gray-800">
          <h1 className="text-2xl font-bold text-blue-600">TaskFlow</h1>

          <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">Organize your work</p>
        </div>
      </NavLink>

      {/* Navigation */}
      <nav className="flex-1 p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;

            return (
              <li key={item.name}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center gap-3 rounded-xl px-4 py-3 font-medium transition-all duration-200
                    ${
                      isActive
                        ? "bg-blue-600 text-white shadow-md"
                        : "text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-800"
                    }`
                  }
                >
                  <Icon size={20} />
                  <span>{item.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* User Section */}
      <div className="border-t border-gray-200 p-4 dark:border-gray-800">
        <div className="mb-4 flex items-center gap-3 rounded-xl bg-gray-100 p-3 dark:bg-gray-800">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-blue-600 font-semibold text-white">
            TK
          </div>

          <div>
            <h3 className="font-semibold">Tanish Kumar</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Developer
            </p>
          </div>
        </div>

        <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-red-500 transition hover:bg-red-50 dark:hover:bg-red-900/20">
          <LogOut size={20} />
          <span>Logout</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;