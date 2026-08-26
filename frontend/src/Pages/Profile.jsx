import React from "react";

import {
    User,
    Mail,
    Shield,
    Calendar,
    CheckCircle2,
    Clock3,
    ListTodo,
    Palette,
    LogOut,
    Pencil,
    Lock,
} from "lucide-react";

import { useUser } from "../context/UserContext";
import { useTasks } from "../context/TaskContext";
import { useTheme } from "../context/ThemeContext";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const { user, logout } = useUser();
    const { tasks } = useTasks();
    const { theme } = useTheme();

    const navigate = useNavigate();

    /* ---------------------------------- */
    /* Task Statistics                    */
    /* ---------------------------------- */

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const pendingTasks =
        totalTasks - completedTasks;

    const completionRate =
        totalTasks === 0
            ? 0
            : Math.round(
                  (completedTasks / totalTasks) * 100
              );

    /* ---------------------------------- */
    /* User Initials                      */
    /* ---------------------------------- */

    const initials =
        user?.username
            ?.trim()
            .split(" ")
            .slice(0, 2)
            .map((name) => name[0])
            .join("")
            .toUpperCase() || "GU";

    /* ---------------------------------- */
    /* Logout                              */
    /* ---------------------------------- */

    const handleLogout = () => {
        logout();

        navigate("/login", {
            replace: true,
        });
    };

    /* ---------------------------------- */
    /* Stats                               */
    /* ---------------------------------- */

    const stats = [
        {
            label: "Total Tasks",
            value: totalTasks,
            icon: ListTodo,
            iconStyle:
                "bg-cyan-100 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400",
        },
        {
            label: "Completed",
            value: completedTasks,
            icon: CheckCircle2,
            iconStyle:
                "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400",
        },
        {
            label: "Pending",
            value: pendingTasks,
            icon: Clock3,
            iconStyle:
                "bg-orange-100 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400",
        },
        {
            label: "Completion",
            value: `${completionRate}%`,
            icon: CheckCircle2,
            iconStyle:
                "bg-blue-100 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-100 px-4 py-6 text-slate-900 transition-colors duration-300 dark:bg-[#07111f] dark:text-white sm:px-6 lg:px-8">

            <div className="mx-auto max-w-6xl">

                {/* ================================= */}
                {/* Profile Header                     */}
                {/* ================================= */}

                <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60">

                    {/* Decorative background */}
                    <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-r from-cyan-500/15 via-blue-500/10 to-transparent dark:from-cyan-500/10 dark:via-blue-500/5" />

                    <div className="relative p-5 sm:p-6">

                        <div className="flex flex-col gap-5 sm:flex-row sm:items-center">

                            {/* Avatar */}
                            <div className="relative shrink-0">

                                <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-2xl border-4 border-white bg-gradient-to-br from-cyan-500 to-blue-600 text-3xl font-bold text-white shadow-lg dark:border-slate-800">

                                    {user?.profile ? (
                                        <img
                                            src={user.profile}
                                            alt="Profile"
                                            className="h-full w-full object-cover"
                                        />
                                    ) : (
                                        initials
                                    )}

                                </div>

                                {/* Online indicator */}
                                <span className="absolute bottom-1 right-1 h-4 w-4 rounded-full border-2 border-white bg-emerald-500 dark:border-slate-800" />
                            </div>

                            {/* User Info */}
                            <div className="min-w-0 flex-1">

                                <div className="flex flex-wrap items-center gap-2">

                                    <h1 className="truncate text-2xl font-bold text-slate-900 dark:text-white">
                                        {user?.username ||
                                            "Guest User"}
                                    </h1>

                                    <span className="rounded-full bg-cyan-100 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-cyan-700 dark:bg-cyan-400/10 dark:text-cyan-400">
                                        {user?.role ||
                                            "User"}
                                    </span>
                                </div>

                                <div className="mt-2 flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400">
                                    <Mail size={14} />
                                    <span className="truncate">
                                        {user?.email ||
                                            "No email available"}
                                    </span>
                                </div>

                                <p className="mt-2 text-xs text-slate-400 dark:text-slate-500">
                                    Manage your account and
                                    track your productivity.
                                </p>
                            </div>

                            {/* Actions */}
                            <div className="flex shrink-0 gap-2">

                                <button
                                    type="button"
                                    className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition hover:border-cyan-300 hover:bg-cyan-50 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-cyan-500/40 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400"
                                >
                                    <Pencil size={14} />
                                    <span className="hidden sm:inline">
                                        Edit Profile
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    className="flex h-9 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-xs font-semibold text-slate-600 transition hover:border-orange-300 hover:bg-orange-50 hover:text-orange-600 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 dark:hover:border-orange-500/40 dark:hover:bg-orange-400/10 dark:hover:text-orange-400"
                                >
                                    <Lock size={14} />
                                    <span className="hidden sm:inline">
                                        Password
                                    </span>
                                </button>

                                <button
                                    type="button"
                                    onClick={handleLogout}
                                    className="flex h-9 items-center gap-2 rounded-lg bg-red-500 px-3 text-xs font-semibold text-white transition hover:bg-red-600"
                                >
                                    <LogOut size={14} />
                                    <span className="hidden sm:inline">
                                        Logout
                                    </span>
                                </button>

                            </div>
                        </div>
                    </div>
                </div>

                {/* ================================= */}
                {/* Statistics                         */}
                {/* ================================= */}

                <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-4">

                    {stats.map((stat) => {
                        const Icon = stat.icon;

                        return (
                            <div
                                key={stat.label}
                                className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-700/60 dark:bg-slate-800/60"
                            >
                                <div className="flex items-center justify-between">

                                    <div>
                                        <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                            {stat.label}
                                        </p>

                                        <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                                            {stat.value}
                                        </p>
                                    </div>

                                    <div
                                        className={`flex h-9 w-9 items-center justify-center rounded-lg ${stat.iconStyle}`}
                                    >
                                        <Icon size={18} />
                                    </div>

                                </div>
                            </div>
                        );
                    })}

                </div>

                {/* ================================= */}
                {/* Main Content                       */}
                {/* ================================= */}

                <div className="mt-5 grid gap-5 lg:grid-cols-3">

                    {/* ============================= */}
                    {/* Completion Card                */}
                    {/* ============================= */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60">

                        <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                            Productivity
                        </h2>

                        <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                            Your task completion overview
                        </p>

                        <div className="mt-6 flex items-center justify-center">

                            <div
                                className="relative flex h-40 w-40 items-center justify-center rounded-full"
                                style={{
                                    background: `conic-gradient(
                                        rgb(6 182 212) ${completionRate}%,
                                        rgb(226 232 240) ${completionRate}% 100%
                                    )`,
                                }}
                            >

                                <div className="flex h-32 w-32 flex-col items-center justify-center rounded-full bg-white dark:bg-slate-800">

                                    <span className="text-3xl font-bold text-slate-900 dark:text-white">
                                        {completionRate}%
                                    </span>

                                    <span className="mt-1 text-[10px] text-slate-500 dark:text-slate-400">
                                        Completed
                                    </span>

                                </div>
                            </div>
                        </div>

                        <div className="mt-6 space-y-3">

                            <div className="flex items-center justify-between text-xs">
                                <span className="text-slate-500 dark:text-slate-400">
                                    Completed
                                </span>

                                <span className="font-semibold text-emerald-500">
                                    {completedTasks}
                                </span>
                            </div>

                            <div className="flex items-center justify-between text-xs">
                                <span className="text-slate-500 dark:text-slate-400">
                                    Pending
                                </span>

                                <span className="font-semibold text-orange-500">
                                    {pendingTasks}
                                </span>
                            </div>

                        </div>
                    </div>

                    {/* ============================= */}
                    {/* Account Information            */}
                    {/* ============================= */}

                    <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60 lg:col-span-2">

                        <div className="mb-5">
                            <h2 className="text-sm font-semibold text-slate-900 dark:text-white">
                                Account Information
                            </h2>

                            <p className="mt-1 text-xs text-slate-500 dark:text-slate-400">
                                Your account details
                            </p>
                        </div>

                        <div className="grid gap-3 sm:grid-cols-2">

                            {/* Username */}
                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/50">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-cyan-100 text-cyan-600 dark:bg-cyan-400/10 dark:text-cyan-400">
                                    <User size={17} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                                        Username
                                    </p>

                                    <p className="mt-0.5 truncate text-sm font-semibold text-slate-800 dark:text-white">
                                        {user?.username ||
                                            "Guest User"}
                                    </p>
                                </div>
                            </div>

                            {/* Email */}
                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/50">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400">
                                    <Mail size={17} />
                                </div>

                                <div className="min-w-0">
                                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                                        Email
                                    </p>

                                    <p className="mt-0.5 truncate text-sm font-semibold text-slate-800 dark:text-white">
                                        {user?.email ||
                                            "No email"}
                                    </p>
                                </div>
                            </div>

                            {/* Role */}
                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/50">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-400/10 dark:text-blue-400">
                                    <Shield size={17} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                                        Role
                                    </p>

                                    <p className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-white">
                                        {user?.role ||
                                            "User"}
                                    </p>
                                </div>
                            </div>

                            {/* Theme */}
                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/50">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-purple-100 text-purple-600 dark:bg-purple-400/10 dark:text-purple-400">
                                    <Palette size={17} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                                        Theme
                                    </p>

                                    <p className="mt-0.5 text-sm font-semibold capitalize text-slate-800 dark:text-white">
                                        {theme}
                                    </p>
                                </div>
                            </div>

                            {/* Joined */}
                            <div className="flex items-center gap-3 rounded-xl bg-slate-50 p-3 dark:bg-slate-900/50 sm:col-span-2">

                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400">
                                    <Calendar size={17} />
                                </div>

                                <div>
                                    <p className="text-[10px] font-medium uppercase tracking-wide text-slate-400">
                                        Joined
                                    </p>

                                    <p className="mt-0.5 text-sm font-semibold text-slate-800 dark:text-white">
                                        {user?.createdAt
                                            ? new Date(
                                                  user.createdAt
                                              ).toLocaleDateString(
                                                  "en-US",
                                                  {
                                                      day: "numeric",
                                                      month: "long",
                                                      year: "numeric",
                                                  }
                                              )
                                            : "Not available"}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* ================================= */}
                {/* Footer                             */}
                {/* ================================= */}

                <div className="mt-5 text-center">
                    <p className="text-[10px] text-slate-400 dark:text-slate-600">
                        TaskFlow · Account Overview
                    </p>
                </div>

            </div>
        </div>
    );
};

export default Profile;