import React from "react";
import { User, Mail, Shield, Calendar, CircleCheck as CheckCircle2, Clock3, ListTodo, Palette, LogOut, Pencil, Lock } from "lucide-react";
import { useUser } from "../context/UserContext";
import { useTasks } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const { user, logout } = useUser();
  const { tasks } = useTasks();
  const { theme } = useTheme();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login", { replace: true });
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter((task) => task.completed).length;
  const pendingTasks = totalTasks - completedTasks;

  const completionRate =
    totalTasks === 0
      ? 0
      : Math.round((completedTasks / totalTasks) * 100);

  const initials =
    user?.username
      ?.trim()
      .slice(0, 2)
      .toUpperCase() || "GU";

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-8 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <div className="flex flex-col items-center gap-5 md:flex-row">

            {/* Avatar */}
            <div className="flex h-28 w-28 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 text-4xl font-bold text-white shadow-lg">
              {user?.profile ? (
                <img
                  src={user.profile}
                  alt="Profile"
                  className="h-full w-full rounded-full object-cover"
                />
              ) : (
                initials
              )}
            </div>

            {/* User Info */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-gray-800 dark:text-white">
                {user?.username || "Guest User"}
              </h1>

              <p className="mt-1 text-gray-500 dark:text-gray-400">
                {user?.email || "No email available"}
              </p>

              <span className="mt-3 inline-block rounded-full bg-blue-100 px-4 py-1 text-sm font-semibold text-blue-700 dark:bg-blue-500/20 dark:text-blue-300">
                {user?.role || "User"}
              </span>
            </div>

            {/* Buttons */}
            <div className="flex flex-wrap gap-3">
              <button className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700">
                <Pencil size={18} />
                Edit
              </button>

              <button className="flex items-center gap-2 rounded-lg bg-yellow-500 px-4 py-2 text-white transition hover:bg-yellow-600">
                <Lock size={18} />
                Password
              </button>

              <button
                onClick={handleLogout}
                className="flex items-center gap-2 rounded-lg bg-red-500 px-4 py-2 text-white transition hover:bg-red-600"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-8 grid gap-6 md:grid-cols-4">

          <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-800">
            <ListTodo className="mb-3 text-blue-500" size={30} />
            <h3 className="text-3xl font-bold dark:text-white">
              {totalTasks}
            </h3>
            <p className="text-gray-500">Total Tasks</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-800">
            <CheckCircle2 className="mb-3 text-green-500" size={30} />
            <h3 className="text-3xl font-bold dark:text-white">
              {completedTasks}
            </h3>
            <p className="text-gray-500">Completed</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-800">
            <Clock3 className="mb-3 text-orange-500" size={30} />
            <h3 className="text-3xl font-bold dark:text-white">
              {pendingTasks}
            </h3>
            <p className="text-gray-500">Pending</p>
          </div>

          <div className="rounded-xl bg-white p-6 shadow dark:bg-slate-800">
            <CheckCircle2 className="mb-3 text-purple-500" size={30} />
            <h3 className="text-3xl font-bold dark:text-white">
              {completionRate}%
            </h3>
            <p className="text-gray-500">Completion</p>
          </div>
        </div>

        {/* Account Information */}
        <div className="mt-8 rounded-2xl bg-white p-8 shadow-lg dark:bg-slate-800">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 dark:text-white">
            Account Information
          </h2>

          <div className="space-y-5">

            <div className="flex items-center gap-4">
              <User className="text-blue-500" />
              <div>
                <p className="text-sm text-gray-500">Username</p>
                <p className="font-semibold dark:text-white">
                  {user?.username || "Guest User"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="text-green-500" />
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-semibold dark:text-white">
                  {user?.email || "No Email"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Shield className="text-red-500" />
              <div>
                <p className="text-sm text-gray-500">Role</p>
                <p className="font-semibold dark:text-white">
                  {user?.role || "User"}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Palette className="text-indigo-500" />
              <div>
                <p className="text-sm text-gray-500">Current Theme</p>
                <p className="font-semibold capitalize dark:text-white">
                  {theme}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Calendar className="text-orange-500" />
              <div>
                <p className="text-sm text-gray-500">Joined</p>
                <p className="font-semibold dark:text-white">
                  {user?.createdAt
                    ? new Date(user.createdAt).toLocaleDateString()
                    : "Not Available"}
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;