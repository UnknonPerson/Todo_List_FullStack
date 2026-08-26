import React from "react";

import {
    CheckCircle2,
    Clock3,
    ListTodo,
    Plus,
    Search,
    SlidersHorizontal,
} from "lucide-react";

import TaskCard from "../components/TaskCard";
import AddForm from "../components/AddForm";

import { useTasks } from "../context/TaskContext";
import { useUser } from "../context/UserContext";
import { Navigate } from "react-router-dom";

const Home = () => {
    const [isCreatingTask, setIsCreatingTask] =
        React.useState(false);

    const [searchTerm, setSearchTerm] =
        React.useState("");

    const [filter, setFilter] =
        React.useState("all");

    const {
        tasks,
        loading,
        error,
        fetchTasks,
    } = useTasks();

    const { user } = useUser();

    /* ---------------------------------- */
    /* Fetch Tasks                         */
    /* ---------------------------------- */

    React.useEffect(() => {
        if (user) {
            fetchTasks();
        }
    }, [user]);

    /* ---------------------------------- */
    /* Authentication                      */
    /* ---------------------------------- */

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    /* ---------------------------------- */
    /* Statistics                          */
    /* ---------------------------------- */

    const totalTasks = tasks.length;

    const completedTasks = tasks.filter(
        (task) => task.completed
    ).length;

    const pendingTasks =
        totalTasks - completedTasks;

    /* ---------------------------------- */
    /* Filter Tasks                        */
    /* ---------------------------------- */

    const filteredTasks = tasks.filter((task) => {
        const matchesSearch =
            task.title
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase()) ||
            task.description
                ?.toLowerCase()
                .includes(searchTerm.toLowerCase());

        const matchesFilter =
            filter === "all" ||
            (filter === "completed" && task.completed) ||
            (filter === "pending" && !task.completed);

        return matchesSearch && matchesFilter;
    });

    return (
        <div className="min-h-screen bg-slate-100 text-slate-900 transition-colors duration-300 dark:bg-[#07111f] dark:text-white">

            {/* ========================================= */}
            {/* Page Container                            */}
            {/* ========================================= */}

            <div className="mx-auto max-w-7xl p-4 sm:p-5 lg:p-6">

                {/* ===================================== */}
                {/* Header                                  */}
                {/* ===================================== */}

                <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <div className="flex items-center gap-3">

                            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-400/15">
                                <ListTodo
                                    size={22}
                                    className="text-cyan-600 dark:text-cyan-400"
                                />
                            </div>

                            <div>
                                <h1 className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-3xl">
                                    My Tasks
                                </h1>

                                <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400 sm:text-sm">
                                    Manage and organize your
                                    tasks
                                </p>
                            </div>

                        </div>
                    </div>

                    {/* Add Task */}
                    <button
                        type="button"
                        onClick={() =>
                            setIsCreatingTask(true)
                        }
                        className="flex items-center justify-center gap-2 rounded-xl bg-cyan-500 px-4 py-2.5 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-600 active:scale-[0.98] dark:hover:bg-cyan-400"
                    >
                        <Plus size={18} />
                        Add Task
                    </button>
                </div>

                {/* ===================================== */}
                {/* Statistics                             */}
                {/* ===================================== */}

                <div className="mb-6 grid grid-cols-1 gap-3 sm:grid-cols-3">

                    {/* Total */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Total Tasks
                                </p>

                                <p className="mt-1 text-2xl font-bold text-slate-900 dark:text-white">
                                    {totalTasks}
                                </p>
                            </div>

                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-cyan-100 dark:bg-cyan-400/10">
                                <ListTodo
                                    size={18}
                                    className="text-cyan-600 dark:text-cyan-400"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Pending */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Pending
                                </p>

                                <p className="mt-1 text-2xl font-bold text-orange-500">
                                    {pendingTasks}
                                </p>
                            </div>

                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-orange-100 dark:bg-orange-400/10">
                                <Clock3
                                    size={18}
                                    className="text-orange-500"
                                />
                            </div>

                        </div>
                    </div>

                    {/* Completed */}
                    <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60">

                        <div className="flex items-center justify-between">

                            <div>
                                <p className="text-xs font-medium text-slate-500 dark:text-slate-400">
                                    Completed
                                </p>

                                <p className="mt-1 text-2xl font-bold text-emerald-500">
                                    {completedTasks}
                                </p>
                            </div>

                            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-100 dark:bg-emerald-400/10">
                                <CheckCircle2
                                    size={18}
                                    className="text-emerald-500"
                                />
                            </div>

                        </div>
                    </div>
                </div>

                {/* ===================================== */}
                {/* Search + Filter                        */}
                {/* ===================================== */}

                <div className="mb-5 flex flex-col gap-3 sm:flex-row">

                    {/* Search */}
                    <div className="relative flex-1">

                        <Search
                            size={17}
                            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
                        />

                        <input
                            type="text"
                            value={searchTerm}
                            onChange={(e) =>
                                setSearchTerm(
                                    e.target.value
                                )
                            }
                            placeholder="Search tasks..."
                            className="w-full rounded-xl border border-slate-200 bg-white py-2.5 pl-10 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:ring-2 focus:ring-cyan-500/10 dark:border-slate-700/60 dark:bg-slate-800/60 dark:text-white dark:placeholder:text-slate-500 dark:focus:border-cyan-500"
                        />
                    </div>

                    {/* Filter */}
                    <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-white p-1 dark:border-slate-700/60 dark:bg-slate-800/60">

                        <div className="flex h-8 w-8 items-center justify-center text-slate-400">
                            <SlidersHorizontal
                                size={16}
                            />
                        </div>

                        <button
                            type="button"
                            onClick={() =>
                                setFilter("all")
                            }
                            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                                filter === "all"
                                    ? "bg-cyan-500 text-white"
                                    : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
                            }`}
                        >
                            All
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setFilter("pending")
                            }
                            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                                filter === "pending"
                                    ? "bg-orange-500 text-white"
                                    : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
                            }`}
                        >
                            Pending
                        </button>

                        <button
                            type="button"
                            onClick={() =>
                                setFilter("completed")
                            }
                            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${
                                filter === "completed"
                                    ? "bg-emerald-500 text-white"
                                    : "text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-700"
                            }`}
                        >
                            Done
                        </button>
                    </div>
                </div>

                {/* ===================================== */}
                {/* Loading                                */}
                {/* ===================================== */}

                {loading && (
                    <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                        {[1, 2, 3].map((item) => (
                            <div
                                key={item}
                                className="h-52 animate-pulse rounded-2xl border border-slate-200 bg-white dark:border-slate-700/60 dark:bg-slate-800/60"
                            />
                        ))}
                    </div>
                )}

                {/* ===================================== */}
                {/* Error                                  */}
                {/* ===================================== */}

                {!loading && error && (
                    <div className="rounded-xl border border-red-200 bg-red-50 p-5 text-sm text-red-600 dark:border-red-500/20 dark:bg-red-500/10 dark:text-red-400">
                        {error}
                    </div>
                )}

                {/* ===================================== */}
                {/* Empty State                            */}
                {/* ===================================== */}

                {!loading &&
                    !error &&
                    filteredTasks.length === 0 && (
                        <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-5 py-14 text-center dark:border-slate-700 dark:bg-slate-800/40">

                            <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-400/10">
                                <ListTodo
                                    size={22}
                                    className="text-cyan-600 dark:text-cyan-400"
                                />
                            </div>

                            <h2 className="mt-4 text-base font-semibold text-slate-900 dark:text-white">
                                {searchTerm ||
                                filter !== "all"
                                    ? "No matching tasks"
                                    : "No tasks yet"}
                            </h2>

                            <p className="mx-auto mt-1 max-w-sm text-xs text-slate-500 dark:text-slate-400">
                                {searchTerm ||
                                filter !== "all"
                                    ? "Try changing your search or filter."
                                    : 'Create your first task by clicking "Add Task".'}
                            </p>

                            {!searchTerm &&
                                filter === "all" && (
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setIsCreatingTask(
                                                true
                                            )
                                        }
                                        className="mt-5 inline-flex items-center gap-2 rounded-lg bg-cyan-500 px-4 py-2 text-xs font-semibold text-white transition hover:bg-cyan-600"
                                    >
                                        <Plus
                                            size={15}
                                        />
                                        Create Task
                                    </button>
                                )}
                        </div>
                    )}

                {/* ===================================== */}
                {/* Tasks                                  */}
                {/* ===================================== */}

                {!loading &&
                    !error &&
                    filteredTasks.length > 0 && (
                        <>
                            <div className="mb-3 flex items-center justify-between">
                                <h2 className="text-sm font-semibold text-slate-700 dark:text-slate-300">
                                    {filter === "all"
                                        ? "All Tasks"
                                        : filter ===
                                            "pending"
                                          ? "Pending Tasks"
                                          : "Completed Tasks"}
                                </h2>

                                <span className="text-xs text-slate-400 dark:text-slate-500">
                                    {filteredTasks.length}{" "}
                                    task
                                    {filteredTasks.length !==
                                    1
                                        ? "s"
                                        : ""}
                                </span>
                            </div>

                            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                                {filteredTasks.map(
                                    (task) => (
                                        <TaskCard
                                            key={task._id}
                                            task={task}
                                        />
                                    )
                                )}
                            </div>
                        </>
                    )}
            </div>

            {/* ========================================= */}
            {/* Add Task Modal                            */}
            {/* ========================================= */}

            {isCreatingTask && (
                <AddForm
                    onClose={() =>
                        setIsCreatingTask(false)
                    }
                />
            )}
        </div>
    );
};

export default Home;