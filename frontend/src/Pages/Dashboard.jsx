import React from "react";

import {
    ListTodo,
    CheckCircle2,
    Clock3,
    TrendingUp,
    CalendarDays,
    ArrowRight,
} from "lucide-react";

import { Link } from "react-router-dom";
import { useTasks } from "../context/TaskContext";

const Dashboard = () => {
    const { tasks } = useTasks();

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const pendingTasks = totalTasks - completedTasks;

    const completionRate =
        totalTasks === 0
            ? 0
            : Math.round((completedTasks / totalTasks) * 100);

    const recentTasks = [...tasks]
        .sort(
            (a, b) =>
                new Date(b.createdAt || 0) -
                new Date(a.createdAt || 0)
        )
        .slice(0, 5);

    const cards = [
        {
            title: "Total Tasks",
            value: totalTasks,
            icon: ListTodo,
            iconColor:
                "text-cyan-600 dark:text-cyan-400",
            iconBg:
                "bg-cyan-100 dark:bg-cyan-400/15",
        },
        {
            title: "Completed",
            value: completedTasks,
            icon: CheckCircle2,
            iconColor:
                "text-emerald-600 dark:text-emerald-400",
            iconBg:
                "bg-emerald-100 dark:bg-emerald-400/15",
        },
        {
            title: "Pending",
            value: pendingTasks,
            icon: Clock3,
            iconColor:
                "text-orange-600 dark:text-orange-400",
            iconBg:
                "bg-orange-100 dark:bg-orange-400/15",
        },
        {
            title: "Completion",
            value: `${completionRate}%`,
            icon: TrendingUp,
            iconColor:
                "text-purple-600 dark:text-purple-400",
            iconBg:
                "bg-purple-100 dark:bg-purple-400/15",
        },
    ];

    return (
        <div className="min-h-screen bg-slate-100 p-6 text-slate-900 transition-colors duration-300 dark:bg-[#07111f] dark:text-white md:p-8">

            {/* Header */}
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white md:text-4xl">
                        Welcome Back 👋
                    </h1>

                    <p className="mt-2 text-sm text-slate-500 dark:text-slate-400 md:text-base">
                        Here's what's happening with your tasks today.
                    </p>
                </div>

                <Link
                    to="/calendar"
                    className="flex w-fit items-center gap-2 rounded-xl bg-cyan-500 px-5 py-3 font-medium text-white shadow-lg shadow-cyan-500/20 transition-all duration-200 hover:bg-cyan-600 dark:hover:bg-cyan-400"
                >
                    <CalendarDays size={20} />
                    Calendar
                </Link>
            </div>

            {/* Stats */}
            <div className="mt-8 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
                {cards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.title}
                            className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-xl dark:shadow-black/10 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/80"
                        >
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.iconBg}`}
                            >
                                <Icon
                                    size={28}
                                    className={card.iconColor}
                                />
                            </div>

                            <h2 className="mt-6 text-3xl font-bold text-slate-900 dark:text-white">
                                {card.value}
                            </h2>

                            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                {card.title}
                            </p>
                        </div>
                    );
                })}
            </div>

            {/* Bottom Section */}
            <div className="mt-8 grid gap-6 lg:grid-cols-3">

                {/* Recent Tasks */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-xl dark:shadow-black/10 lg:col-span-2">

                    <div className="mb-6 flex items-center justify-between">
                        <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                            Recent Tasks
                        </h2>

                        <Link
                            to="/tasks"
                            className="flex items-center gap-1 text-sm font-medium text-cyan-600 transition-colors hover:text-cyan-500 dark:text-cyan-400 dark:hover:text-cyan-300"
                        >
                            View All
                            <ArrowRight size={16} />
                        </Link>
                    </div>

                    {recentTasks.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-slate-300 bg-slate-50 py-12 text-center text-slate-500 dark:border-slate-700 dark:bg-slate-900/30 dark:text-slate-500">
                            No tasks available.
                        </div>
                    ) : (
                        <div className="space-y-3">
                            {recentTasks.map((task) => (
                                <div
                                    key={task._id}
                                    className="flex items-center justify-between gap-4 rounded-xl border border-slate-200 bg-slate-50 p-4 transition-all duration-200 hover:border-slate-300 hover:bg-slate-100 dark:border-slate-700/40 dark:bg-slate-900/40 dark:hover:border-slate-600 dark:hover:bg-slate-900/60"
                                >
                                    <div className="min-w-0">
                                        <h3 className="truncate font-medium text-slate-900 dark:text-white">
                                            {task.title}
                                        </h3>

                                        <p className="mt-1 truncate text-sm text-slate-500 dark:text-slate-400">
                                            {task.description ||
                                                "No description"}
                                        </p>
                                    </div>

                                    <span
                                        className={`shrink-0 rounded-full px-3 py-1 text-xs font-semibold ${
                                            task.completed
                                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/15 dark:text-emerald-400"
                                                : "bg-orange-100 text-orange-700 dark:bg-orange-400/15 dark:text-orange-400"
                                        }`}
                                    >
                                        {task.completed
                                            ? "Completed"
                                            : "Pending"}
                                    </span>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Progress */}
                <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-xl dark:shadow-black/10">

                    <h2 className="text-xl font-semibold text-slate-900 dark:text-white">
                        Progress
                    </h2>

                    <div className="mt-8 flex justify-center">
                        <div
                            className="relative flex h-44 w-44 items-center justify-center rounded-full"
                            style={{
                                background: `conic-gradient(
                                    rgb(6 182 212) ${completionRate}%,
                                    rgb(226 232 240) ${completionRate}% 100%
                                )`,
                            }}
                        >
                            <div className="absolute inset-3 flex items-center justify-center rounded-full bg-white dark:bg-slate-800">
                                <div className="text-center">
                                    <p className="text-4xl font-bold text-slate-900 dark:text-white">
                                        {completionRate}%
                                    </p>

                                    <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                                        Completed
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="mt-10 space-y-4">

                        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                            <span>Total Tasks</span>

                            <span className="font-semibold text-slate-900 dark:text-white">
                                {totalTasks}
                            </span>
                        </div>

                        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                            <span>Completed</span>

                            <span className="font-semibold text-emerald-600 dark:text-emerald-400">
                                {completedTasks}
                            </span>
                        </div>

                        <div className="flex justify-between text-sm text-slate-600 dark:text-slate-300">
                            <span>Pending</span>

                            <span className="font-semibold text-orange-600 dark:text-orange-400">
                                {pendingTasks}
                            </span>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;