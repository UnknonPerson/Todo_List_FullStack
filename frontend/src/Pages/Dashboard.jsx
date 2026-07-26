
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
    const completedTasks = tasks.filter((task) => task.completed).length;
    const pendingTasks = totalTasks - completedTasks;

    const completionRate =
        totalTasks === 0
            ? 0
            : Math.round((completedTasks / totalTasks) * 100);

    const recentTasks = [...tasks].slice(0, 5);

    const cards = [
        {
            title: "Total Tasks",
            value: totalTasks,
            icon: ListTodo,
            color: "text-blue-500",
            bg: "bg-blue-500/10",
        },
        {
            title: "Completed",
            value: completedTasks,
            icon: CheckCircle2,
            color: "text-green-500",
            bg: "bg-green-500/10",
        },
        {
            title: "Pending",
            value: pendingTasks,
            icon: Clock3,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
        },
        {
            title: "Completion",
            value: `${completionRate}%`,
            icon: TrendingUp,
            color: "text-purple-500",
            bg: "bg-purple-500/10",
        },
    ];

    return (
        <div className="min-h-screen bg-zinc-950 p-8">

            {/* Header */}

            <div className="flex flex-col md:flex-row md:items-center md:justify-between">

                <div>
                    <h1 className="text-4xl font-bold text-white">
                        Welcome Back 👋
                    </h1>

                    <p className="mt-2 text-zinc-400">
                        Here's what's happening with your tasks today.
                    </p>
                </div>

                <Link
                    to="/calendar"
                    className="mt-5 md:mt-0 flex items-center gap-2 rounded-lg bg-blue-600 px-5 py-3 text-white transition hover:bg-blue-700"
                >
                    <CalendarDays size={20} />
                    Calendar
                </Link>

            </div>

            {/* Stats */}

            <div className="mt-10 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">

                {cards.map((card) => {
                    const Icon = card.icon;

                    return (
                        <div
                            key={card.title}
                            className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 transition hover:border-blue-500"
                        >
                            <div
                                className={`flex h-14 w-14 items-center justify-center rounded-xl ${card.bg}`}
                            >
                                <Icon className={card.color} size={28} />
                            </div>

                            <h2 className="mt-6 text-3xl font-bold text-white">
                                {card.value}
                            </h2>

                            <p className="mt-1 text-zinc-400">
                                {card.title}
                            </p>
                        </div>
                    );
                })}

            </div>

            {/* Bottom Section */}

            <div className="mt-10 grid gap-8 lg:grid-cols-3">

                {/* Recent Tasks */}

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6 lg:col-span-2">

                    <div className="mb-6 flex items-center justify-between">

                        <h2 className="text-xl font-semibold text-white">
                            Recent Tasks
                        </h2>

                        <Link
                            to="/tasks"
                            className="flex items-center gap-1 text-blue-400 hover:text-blue-300"
                        >
                            View All
                            <ArrowRight size={16} />
                        </Link>

                    </div>

                    {recentTasks.length === 0 ? (
                        <div className="rounded-xl border border-dashed border-zinc-700 py-12 text-center text-zinc-500">
                            No tasks available.
                        </div>
                    ) : (
                        <div className="space-y-4">

                            {recentTasks.map((task) => (

                                <div
                                    key={task._id}
                                    className="flex items-center justify-between rounded-xl bg-zinc-800 p-4"
                                >
                                    <div>

                                        <h3 className="font-medium text-white">
                                            {task.title}
                                        </h3>

                                        <p className="mt-1 text-sm text-zinc-400">
                                            {task.description || "No description"}
                                        </p>

                                    </div>

                                    <span
                                        className={`rounded-full px-3 py-1 text-xs font-semibold ${task.completed
                                                ? "bg-green-500/20 text-green-400"
                                                : "bg-orange-500/20 text-orange-400"
                                            }`}
                                    >
                                        {task.completed ? "Completed" : "Pending"}
                                    </span>

                                </div>

                            ))}

                        </div>
                    )}

                </div>

                {/* Progress */}

                <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6">

                    <h2 className="text-xl font-semibold text-white">
                        Progress
                    </h2>

                    <div className="mt-8 flex justify-center">

                        <div className="relative flex h-44 w-44 items-center justify-center rounded-full border-[12px] border-blue-500">

                            <div className="text-center">

                                <p className="text-4xl font-bold text-white">
                                    {completionRate}%
                                </p>

                                <p className="text-sm text-zinc-400">
                                    Completed
                                </p>

                            </div>

                        </div>

                    </div>

                    <div className="mt-10 space-y-4">

                        <div className="flex justify-between text-zinc-300">
                            <span>Total Tasks</span>
                            <span>{totalTasks}</span>
                        </div>

                        <div className="flex justify-between text-zinc-300">
                            <span>Completed</span>
                            <span>{completedTasks}</span>
                        </div>

                        <div className="flex justify-between text-zinc-300">
                            <span>Pending</span>
                            <span>{pendingTasks}</span>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
};

export default Dashboard;
