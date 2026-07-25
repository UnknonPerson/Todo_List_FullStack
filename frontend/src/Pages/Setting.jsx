import React from "react";
import {
  User,
  Lock,
  Moon,
  Sun,
  Bell,
  Globe,
  Trash2,
  Shield,
  ChevronRight,
} from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useUser } from "../context/UserContext";

const Setting = () => {
  const { theme, toggleTheme } = useTheme();
  const { user } = useUser();

  return (
    <div className="min-h-screen bg-gray-100 p-6 dark:bg-slate-900">
      <div className="mx-auto max-w-5xl">

        {/* Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">
            Settings
          </h1>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Manage your account and application preferences.
          </p>
        </div>

        <div className="space-y-6">

          {/* Account */}
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-800">
            <h2 className="mb-5 text-xl font-semibold dark:text-white">
              Account
            </h2>

            <button className="flex w-full items-center justify-between rounded-xl p-4 transition hover:bg-gray-100 dark:hover:bg-slate-700">
              <div className="flex items-center gap-4">
                <User className="text-blue-500" />
                <div className="text-left">
                  <p className="font-medium dark:text-white">
                    Edit Profile
                  </p>
                  <p className="text-sm text-gray-500">
                    Update your personal information
                  </p>
                </div>
              </div>

              <ChevronRight />
            </button>

            <button className="mt-3 flex w-full items-center justify-between rounded-xl p-4 transition hover:bg-gray-100 dark:hover:bg-slate-700">
              <div className="flex items-center gap-4">
                <Lock className="text-yellow-500" />
                <div className="text-left">
                  <p className="font-medium dark:text-white">
                    Change Password
                  </p>
                  <p className="text-sm text-gray-500">
                    Update your account password
                  </p>
                </div>
              </div>

              <ChevronRight />
            </button>
          </div>

          {/* Appearance */}
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-800">
            <h2 className="mb-5 text-xl font-semibold dark:text-white">
              Appearance
            </h2>

            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-slate-700">

              <div className="flex items-center gap-4">
                {theme === "light" ? (
                  <Sun className="text-orange-500" />
                ) : (
                  <Moon className="text-indigo-400" />
                )}

                <div>
                  <p className="font-medium dark:text-white">
                    Dark Mode
                  </p>

                  <p className="text-sm text-gray-500">
                    Switch between light and dark themes
                  </p>
                </div>
              </div>

              <button
                onClick={toggleTheme}
                className={`relative h-7 w-14 rounded-full transition ${
                  theme === "dark"
                    ? "bg-blue-600"
                    : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
                    theme === "dark"
                      ? "left-8"
                      : "left-1"
                  }`}
                />
              </button>

            </div>
          </div>

          {/* Notifications */}
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-800">
            <h2 className="mb-5 text-xl font-semibold dark:text-white">
              Notifications
            </h2>

            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-slate-700">

              <div className="flex items-center gap-4">
                <Bell className="text-red-500" />

                <div>
                  <p className="font-medium dark:text-white">
                    Email Notifications
                  </p>

                  <p className="text-sm text-gray-500">
                    Receive reminders for upcoming tasks
                  </p>
                </div>
              </div>

              <input
                type="checkbox"
                className="h-5 w-5 accent-blue-600"
              />
            </div>
          </div>

          {/* Language */}
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-800">
            <h2 className="mb-5 text-xl font-semibold dark:text-white">
              Language
            </h2>

            <div className="flex items-center justify-between rounded-xl bg-gray-50 p-4 dark:bg-slate-700">

              <div className="flex items-center gap-4">
                <Globe className="text-green-500" />

                <div>
                  <p className="font-medium dark:text-white">
                    Language
                  </p>

                  <p className="text-sm text-gray-500">
                    English (US)
                  </p>
                </div>
              </div>

              <ChevronRight />
            </div>
          </div>

          {/* Privacy */}
          <div className="rounded-2xl bg-white p-6 shadow dark:bg-slate-800">
            <h2 className="mb-5 text-xl font-semibold dark:text-white">
              Privacy & Security
            </h2>

            <button className="flex w-full items-center justify-between rounded-xl p-4 transition hover:bg-gray-100 dark:hover:bg-slate-700">

              <div className="flex items-center gap-4">
                <Shield className="text-indigo-500" />

                <div className="text-left">
                  <p className="font-medium dark:text-white">
                    Privacy Settings
                  </p>

                  <p className="text-sm text-gray-500">
                    Manage account security
                  </p>
                </div>
              </div>

              <ChevronRight />
            </button>
          </div>

          {/* Danger Zone */}
          <div className="rounded-2xl border border-red-300 bg-white p-6 shadow dark:border-red-600 dark:bg-slate-800">

            <h2 className="mb-5 text-xl font-semibold text-red-600">
              Danger Zone
            </h2>

            <button className="flex items-center gap-3 rounded-lg bg-red-500 px-5 py-3 text-white transition hover:bg-red-600">
              <Trash2 size={18} />
              Delete Account
            </button>

            <p className="mt-3 text-sm text-gray-500">
              Permanently delete your account and all associated tasks.
            </p>

          </div>

        </div>
      </div>
    </div>
  );
};

export default Setting;