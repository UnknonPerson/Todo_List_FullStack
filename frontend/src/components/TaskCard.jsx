import React from "react";

import {
    CalendarClock,
    Check,
    Circle,
    Flag,
    Pencil,
    Trash2,
    Clock3,
} from "lucide-react";

import { useTasks } from "../context/TaskContext";

const TaskCard = ({ task }) => {
    const {
        removeTask,
        toggleComplete,
        updateTask,
    } = useTasks();

    const {
        _id,
        title,
        description,
        dueDate,
        priority = "Medium",
        completed = false,
    } = task;

    /* ---------------------------------- */
    /* Priority                            */
    /* ---------------------------------- */

    const getPriorityStyle = (priority) => {
        switch (priority) {
            case "High":
                return {
                    badge: "bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-400",
                    dot: "bg-red-500",
                };

            case "Medium":
                return {
                    badge: "bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-400",
                    dot: "bg-orange-500",
                };

            case "Low":
                return {
                    badge: "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400",
                    dot: "bg-emerald-500",
                };

            default:
                return {
                    badge: "bg-slate-100 text-slate-600 dark:bg-slate-700 dark:text-slate-300",
                    dot: "bg-slate-500",
                };
        }
    };

    const priorityStyle = getPriorityStyle(priority);

    /* ---------------------------------- */
    /* Due Date                            */
    /* ---------------------------------- */

    const formatDueDate = (date) => {
        if (!date) return "No due date";

        const parsedDate = new Date(date);

        if (Number.isNaN(parsedDate.getTime())) {
            return date;
        }

        return parsedDate.toLocaleDateString("en-US", {
            day: "numeric",
            month: "short",
            year: "numeric",
        });
    };

    const isOverdue = () => {
        if (!dueDate || completed) return false;

        const due = new Date(dueDate);
        const now = new Date();

        due.setHours(23, 59, 59, 999);

        return due < now;
    };

    const overdue = isOverdue();

    /* ---------------------------------- */
    /* Actions                             */
    /* ---------------------------------- */

    const handleComplete = () => {
        toggleComplete(_id);
    };

    const handleEdit = () => {
        const newTitle = window.prompt(
            "Edit task title:",
            title
        );

        if (
            newTitle &&
            newTitle.trim() !== "" &&
            newTitle.trim() !== title
        ) {
            updateTask(_id, {
                title: newTitle.trim(),
            });
        }
    };

    const handleDelete = () => {
        const confirmDelete = window.confirm(
            `Are you sure you want to delete "${title}"?`
        );

        if (confirmDelete) {
            removeTask(_id);
        }
    };

    return (
        <div
            className={`
                group relative w-full overflow-hidden rounded-2xl border p-5
                transition-all duration-200
                ${
                    completed
                        ? "border-emerald-200 bg-emerald-50/60 dark:border-emerald-500/20 dark:bg-emerald-500/[0.04]"
                        : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-cyan-300 hover:shadow-lg dark:border-slate-700/60 dark:bg-slate-800/60 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/80"
                }
            `}
        >
            {/* Top Accent */}
            <div
                className={`
                    absolute left-0 top-0 h-full w-1
                    ${completed ? "bg-emerald-500" : priorityStyle.dot}
                `}
            />

            {/* Header */}
            <div className="flex items-start justify-between gap-4">

                <div className="flex min-w-0 items-start gap-3">

                    {/* Completion Button */}
                    <button
                        type="button"
                        onClick={handleComplete}
                        title={
                            completed
                                ? "Mark incomplete"
                                : "Mark complete"
                        }
                        className={`
                            mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200
                            ${
                                completed
                                    ? "border-emerald-500 bg-emerald-500 text-white hover:bg-emerald-600"
                                    : "border-slate-300 text-transparent hover:border-cyan-500 hover:text-cyan-500 dark:border-slate-600 dark:hover:border-cyan-400 dark:hover:text-cyan-400"
                            }
                        `}
                    >
                        {completed ? (
                            <Check size={16} strokeWidth={3} />
                        ) : (
                            <Circle size={13} />
                        )}
                    </button>

                    {/* Title */}
                    <div className="min-w-0">
                        <h2
                            className={`
                                truncate text-base font-semibold
                                ${
                                    completed
                                        ? "text-slate-500 line-through dark:text-slate-500"
                                        : "text-slate-900 dark:text-white"
                                }
                            `}
                        >
                            {title}
                        </h2>

                        <p
                            className={`
                                mt-1 text-xs font-medium
                                ${
                                    completed
                                        ? "text-emerald-600 dark:text-emerald-400"
                                        : "text-slate-500 dark:text-slate-400"
                                }
                            `}
                        >
                            {completed
                                ? "Task completed"
                                : "Task in progress"}
                        </p>
                    </div>
                </div>

                {/* Priority */}
                <div
                    className={`flex shrink-0 items-center gap-1.5 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide ${priorityStyle.badge}`}
                >
                    <span
                        className={`h-1.5 w-1.5 rounded-full ${priorityStyle.dot}`}
                    />

                    {priority}
                </div>
            </div>

            {/* Description */}
            {description && (
                <p
                    className={`
                        mt-4 line-clamp-2 text-sm leading-5
                        ${
                            completed
                                ? "text-slate-400 dark:text-slate-500"
                                : "text-slate-600 dark:text-slate-400"
                        }
                    `}
                >
                    {description}
                </p>
            )}

            {/* Metadata */}
            <div className="mt-5 flex flex-wrap items-center gap-3">

                {/* Due Date */}
                <div
                    className={`
                        flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium
                        ${
                            overdue
                                ? "bg-red-100 text-red-700 dark:bg-red-400/10 dark:text-red-400"
                                : "bg-slate-100 text-slate-600 dark:bg-slate-900/60 dark:text-slate-400"
                        }
                    `}
                >
                    {overdue ? (
                        <Clock3 size={14} />
                    ) : (
                        <CalendarClock size={14} />
                    )}

                    <span>
                        {overdue
                            ? "Overdue"
                            : formatDueDate(dueDate)}
                    </span>
                </div>

                {/* Priority Label */}
                <div className="flex items-center gap-1.5 text-xs text-slate-500 dark:text-slate-400">
                    <Flag size={14} />

                    <span>
                        {priority} priority
                    </span>
                </div>
            </div>

            {/* Divider */}
            <div className="my-4 border-t border-slate-200 dark:border-slate-700/60" />

            {/* Footer / Actions */}
            <div className="flex items-center justify-between">

                {/* Status */}
                <div className="flex items-center gap-2">
                    <span
                        className={`
                            h-2 w-2 rounded-full
                            ${
                                completed
                                    ? "bg-emerald-500"
                                    : "bg-orange-500"
                            }
                        `}
                    />

                    <span className="text-xs font-medium text-slate-500 dark:text-slate-400">
                        {completed
                            ? "Completed"
                            : "Pending"}
                    </span>
                </div>

                {/* Actions */}
                <div className="flex items-center gap-1.5">

                    {/* Complete */}
                    <button
                        type="button"
                        onClick={handleComplete}
                        title={
                            completed
                                ? "Mark incomplete"
                                : "Mark complete"
                        }
                        className={`
                            flex h-8 w-8 items-center justify-center rounded-lg transition
                            ${
                                completed
                                    ? "bg-emerald-100 text-emerald-600 hover:bg-emerald-200 dark:bg-emerald-400/10 dark:text-emerald-400 dark:hover:bg-emerald-400/20"
                                    : "bg-slate-100 text-slate-500 hover:bg-emerald-100 hover:text-emerald-600 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:bg-emerald-400/10 dark:hover:text-emerald-400"
                            }
                        `}
                    >
                        <Check size={15} />
                    </button>

                    {/* Edit */}
                    <button
                        type="button"
                        onClick={handleEdit}
                        title="Edit task"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-cyan-100 hover:text-cyan-600 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:bg-cyan-400/10 dark:hover:text-cyan-400"
                    >
                        <Pencil size={14} />
                    </button>

                    {/* Delete */}
                    <button
                        type="button"
                        onClick={handleDelete}
                        title="Delete task"
                        className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-500 transition hover:bg-red-100 hover:text-red-600 dark:bg-slate-900/70 dark:text-slate-400 dark:hover:bg-red-400/10 dark:hover:text-red-400"
                    >
                        <Trash2 size={14} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TaskCard;