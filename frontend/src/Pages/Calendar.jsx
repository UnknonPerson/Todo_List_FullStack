import React, { useMemo, useState } from "react";

import {
    ChevronLeft,
    ChevronRight,
    CheckCircle2,
    Clock3,
    ListTodo,
} from "lucide-react";

import { useTasks } from "../context/TaskContext";

const Calendar = () => {
    const { tasks } = useTasks();

    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());

    const months = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    const weekDays = [
        "Sun",
        "Mon",
        "Tue",
        "Wed",
        "Thu",
        "Fri",
        "Sat",
    ];

    const today = new Date();

    /* ---------------------------------- */
    /* Calendar Days                       */
    /* ---------------------------------- */

    const calendarDays = useMemo(() => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();

        const firstDay = new Date(year, month, 1);
        const daysInMonth = new Date(
            year,
            month + 1,
            0
        ).getDate();

        const blanks = Array(firstDay.getDay()).fill(null);

        const days = Array.from(
            { length: daysInMonth },
            (_, index) => index + 1
        );

        return [...blanks, ...days];
    }, [currentDate]);

    /* ---------------------------------- */
    /* Navigation                          */
    /* ---------------------------------- */

    const nextMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() + 1,
                1
            )
        );
    };

    const prevMonth = () => {
        setCurrentDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth() - 1,
                1
            )
        );
    };

    const goToToday = () => {
        const date = new Date();

        setCurrentDate(date);
        setSelectedDate(date);
    };

    /* ---------------------------------- */
    /* Task Helpers                        */
    /* ---------------------------------- */

    const getTasksForDay = (day) => {
        if (!day) return [];

        return tasks.filter((task) => {
            if (!task.dueDate) return false;

            const taskDate = new Date(task.dueDate);

            return (
                taskDate.getDate() === day &&
                taskDate.getMonth() === currentDate.getMonth() &&
                taskDate.getFullYear() === currentDate.getFullYear()
            );
        });
    };

    const isToday = (day) => {
        return (
            day &&
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear()
        );
    };

    const isSelected = (day) => {
        return (
            day &&
            day === selectedDate.getDate() &&
            currentDate.getMonth() === selectedDate.getMonth() &&
            currentDate.getFullYear() === selectedDate.getFullYear()
        );
    };

    const handleDayClick = (day) => {
        if (!day) return;

        setSelectedDate(
            new Date(
                currentDate.getFullYear(),
                currentDate.getMonth(),
                day
            )
        );
    };

    /* ---------------------------------- */
    /* Selected Date Tasks                 */
    /* ---------------------------------- */

    const selectedDayTasks = useMemo(() => {
        return tasks.filter((task) => {
            if (!task.dueDate) return false;

            const taskDate = new Date(task.dueDate);

            return (
                taskDate.getDate() === selectedDate.getDate() &&
                taskDate.getMonth() === selectedDate.getMonth() &&
                taskDate.getFullYear() === selectedDate.getFullYear()
            );
        });
    }, [tasks, selectedDate]);

    const selectedCompletedTasks = selectedDayTasks.filter(
        (task) => task.completed
    ).length;

    const selectedPendingTasks =
        selectedDayTasks.length - selectedCompletedTasks;

    return (
        <div className="min-h-screen bg-slate-100 p-4 text-slate-900 transition-colors duration-300 dark:bg-[#07111f] dark:text-white sm:p-5 md:p-6">

            {/* ========================================= */}
            {/* Header                                    */}
            {/* ========================================= */}

            <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">

                <div>
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-100 dark:bg-cyan-400/15">
                            <ListTodo
                                size={21}
                                className="text-cyan-600 dark:text-cyan-400"
                            />
                        </div>

                        <div>
                            <h1 className="text-2xl font-bold text-slate-900 dark:text-white">
                                Calendar
                            </h1>

                            <p className="text-xs text-slate-500 dark:text-slate-400">
                                Organize your tasks and deadlines
                            </p>
                        </div>
                    </div>
                </div>

                {/* Navigation */}
                <div className="flex items-center gap-1.5">
                    <button
                        type="button"
                        onClick={prevMonth}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-cyan-500/50 dark:hover:text-cyan-400"
                        aria-label="Previous month"
                    >
                        <ChevronLeft size={18} />
                    </button>

                    <button
                        type="button"
                        onClick={goToToday}
                        className="rounded-lg bg-cyan-500 px-3.5 py-2 text-xs font-semibold text-white shadow-md shadow-cyan-500/20 transition hover:bg-cyan-600 dark:hover:bg-cyan-400"
                    >
                        Today
                    </button>

                    <button
                        type="button"
                        onClick={nextMonth}
                        className="flex h-9 w-9 items-center justify-center rounded-lg border border-slate-200 bg-white text-slate-600 transition hover:border-cyan-300 hover:text-cyan-600 dark:border-slate-700 dark:bg-slate-800/70 dark:text-slate-300 dark:hover:border-cyan-500/50 dark:hover:text-cyan-400"
                        aria-label="Next month"
                    >
                        <ChevronRight size={18} />
                    </button>
                </div>
            </div>

            {/* ========================================= */}
            {/* Calendar Card                             */}
            {/* ========================================= */}

            <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60 dark:shadow-xl dark:shadow-black/10">

                {/* Month */}
                <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h2 className="text-lg font-bold text-slate-900 dark:text-white">
                            {months[currentDate.getMonth()]}{" "}
                            {currentDate.getFullYear()}
                        </h2>

                        <p className="text-xs text-slate-500 dark:text-slate-400">
                            Select a date to view its tasks
                        </p>
                    </div>

                    {/* Legend */}
                    <div className="flex items-center gap-3 text-[10px] font-medium text-slate-500 dark:text-slate-400">
                        <div className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-cyan-500" />
                            Today
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-emerald-500" />
                            Done
                        </div>

                        <div className="flex items-center gap-1">
                            <span className="h-2 w-2 rounded-full bg-orange-500" />
                            Pending
                        </div>
                    </div>
                </div>

                {/* Horizontal scroll only on very small screens */}
                <div className="overflow-x-auto">
                    <div className="min-w-[680px]">

                        {/* ================================= */}
                        {/* Week Days                          */}
                        {/* ================================= */}

                        <div className="mb-1.5 grid grid-cols-7 gap-1.5">
                            {weekDays.map((day) => (
                                <div
                                    key={day}
                                    className="py-1 text-center text-[10px] font-semibold uppercase tracking-wide text-slate-400 dark:text-slate-500 sm:text-xs"
                                >
                                    {day}
                                </div>
                            ))}
                        </div>

                        {/* ================================= */}
                        {/* Calendar Grid                     */}
                        {/* ================================= */}

                        <div className="grid grid-cols-7 gap-1.5">
                            {calendarDays.map((day, index) => {
                                const dayTasks =
                                    getTasksForDay(day);

                                const todayDate =
                                    isToday(day);

                                const selected =
                                    isSelected(day);

                                const completedCount =
                                    dayTasks.filter(
                                        (task) =>
                                            task.completed
                                    ).length;

                                const pendingCount =
                                    dayTasks.length -
                                    completedCount;

                                return (
                                    <button
                                        key={index}
                                        type="button"
                                        disabled={!day}
                                        onClick={() =>
                                            handleDayClick(day)
                                        }
                                        className={`
                                            relative min-h-[88px] rounded-lg border p-1.5 text-left transition-all duration-150
                                            ${
                                                day
                                                    ? "border-slate-200 bg-slate-50 hover:border-cyan-300 hover:bg-white hover:shadow-sm dark:border-slate-700/60 dark:bg-slate-900/30 dark:hover:border-cyan-500/40 dark:hover:bg-slate-800/80"
                                                    : "border-transparent bg-transparent"
                                            }
                                            ${
                                                todayDate
                                                    ? "ring-1 ring-cyan-500"
                                                    : ""
                                            }
                                            ${
                                                selected
                                                    ? "border-cyan-400 bg-cyan-50 dark:border-cyan-500 dark:bg-cyan-500/10"
                                                    : ""
                                            }
                                        `}
                                    >
                                        {day && (
                                            <>
                                                {/* Date Number */}
                                                <div className="flex items-center justify-between">
                                                    <span
                                                        className={`
                                                            flex h-6 w-6 items-center justify-center rounded-md text-[11px] font-bold
                                                            ${
                                                                todayDate
                                                                    ? "bg-cyan-500 text-white"
                                                                    : selected
                                                                      ? "bg-cyan-100 text-cyan-700 dark:bg-cyan-400/15 dark:text-cyan-400"
                                                                      : "text-slate-700 dark:text-slate-300"
                                                            }
                                                        `}
                                                    >
                                                        {day}
                                                    </span>

                                                    {dayTasks.length >
                                                        0 && (
                                                        <span className="text-[9px] font-bold text-cyan-600 dark:text-cyan-400">
                                                            {
                                                                dayTasks.length
                                                            }
                                                        </span>
                                                    )}
                                                </div>

                                                {/* Tasks */}
                                                <div className="mt-1 space-y-1">
                                                    {dayTasks
                                                        .slice(
                                                            0,
                                                            2
                                                        )
                                                        .map(
                                                            (
                                                                task
                                                            ) => (
                                                                <div
                                                                    key={
                                                                        task._id
                                                                    }
                                                                    className={`
                                                                        truncate rounded px-1.5 py-1 text-[9px] font-medium
                                                                        ${
                                                                            task.completed
                                                                                ? "bg-emerald-100 text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400"
                                                                                : "bg-orange-100 text-orange-700 dark:bg-orange-400/10 dark:text-orange-400"
                                                                        }
                                                                    `}
                                                                >
                                                                    {task.title}
                                                                </div>
                                                            )
                                                        )}

                                                    {dayTasks.length >
                                                        2 && (
                                                        <p className="px-1 text-[9px] text-slate-400 dark:text-slate-500">
                                                            +
                                                            {dayTasks.length -
                                                                2}{" "}
                                                            more
                                                        </p>
                                                    )}
                                                </div>

                                                {/* Status Indicators */}
                                                {dayTasks.length >
                                                    0 && (
                                                    <div className="absolute bottom-1.5 left-1.5 flex gap-1">
                                                        {completedCount >
                                                            0 && (
                                                            <span className="h-1 w-1 rounded-full bg-emerald-500" />
                                                        )}

                                                        {pendingCount >
                                                            0 && (
                                                            <span className="h-1 w-1 rounded-full bg-orange-500" />
                                                        )}
                                                    </div>
                                                )}
                                            </>
                                        )}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>

            {/* ========================================= */}
            {/* Selected Date Tasks                       */}
            {/* ========================================= */}

            <div className="mt-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm dark:border-slate-700/60 dark:bg-slate-800/60">

                {/* Selected Date Header */}
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">

                    <div>
                        <h2 className="text-base font-bold text-slate-900 dark:text-white">
                            {selectedDate.toLocaleDateString(
                                "en-US",
                                {
                                    weekday: "short",
                                    month: "short",
                                    day: "numeric",
                                    year: "numeric",
                                }
                            )}
                        </h2>

                        <p className="mt-0.5 text-xs text-slate-500 dark:text-slate-400">
                            {selectedDayTasks.length === 0
                                ? "No tasks scheduled"
                                : `${selectedDayTasks.length} task${
                                      selectedDayTasks.length !==
                                      1
                                          ? "s"
                                          : ""
                                  } scheduled`}
                        </p>
                    </div>

                    {/* Counts */}
                    {selectedDayTasks.length > 0 && (
                        <div className="flex gap-1.5">
                            <span className="rounded-full bg-emerald-100 px-2.5 py-1 text-[10px] font-semibold text-emerald-700 dark:bg-emerald-400/10 dark:text-emerald-400">
                                {selectedCompletedTasks} Done
                            </span>

                            <span className="rounded-full bg-orange-100 px-2.5 py-1 text-[10px] font-semibold text-orange-700 dark:bg-orange-400/10 dark:text-orange-400">
                                {selectedPendingTasks} Pending
                            </span>
                        </div>
                    )}
                </div>

                {/* ===================================== */}
                {/* Task List                              */}
                {/* ===================================== */}

                <div className="mt-3">
                    {selectedDayTasks.length === 0 ? (
                        <div className="rounded-lg border border-dashed border-slate-300 bg-slate-50 py-6 text-center dark:border-slate-700 dark:bg-slate-900/30">

                            <ListTodo
                                size={24}
                                className="mx-auto text-slate-400 dark:text-slate-600"
                            />

                            <p className="mt-2 text-xs text-slate-500 dark:text-slate-400">
                                No tasks for this date.
                            </p>
                        </div>
                    ) : (
                        <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
                            {selectedDayTasks.map((task) => (
                                <div
                                    key={task._id}
                                    className="rounded-lg border border-slate-200 bg-slate-50 p-3 transition hover:border-slate-300 dark:border-slate-700/50 dark:bg-slate-900/40 dark:hover:border-slate-600"
                                >
                                    <div className="flex items-start gap-2.5">

                                        {/* Icon */}
                                        <div
                                            className={`
                                                flex h-8 w-8 shrink-0 items-center justify-center rounded-lg
                                                ${
                                                    task.completed
                                                        ? "bg-emerald-100 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400"
                                                        : "bg-orange-100 text-orange-600 dark:bg-orange-400/10 dark:text-orange-400"
                                                }
                                            `}
                                        >
                                            {task.completed ? (
                                                <CheckCircle2
                                                    size={16}
                                                />
                                            ) : (
                                                <Clock3
                                                    size={16}
                                                />
                                            )}
                                        </div>

                                        {/* Content */}
                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-2">
                                                <h3
                                                    className={`truncate text-xs font-semibold ${
                                                        task.completed
                                                            ? "text-slate-400 line-through dark:text-slate-500"
                                                            : "text-slate-900 dark:text-white"
                                                    }`}
                                                >
                                                    {task.title}
                                                </h3>

                                                <span
                                                    className={`shrink-0 text-[9px] font-semibold ${
                                                        task.completed
                                                            ? "text-emerald-500"
                                                            : "text-orange-500"
                                                    }`}
                                                >
                                                    {task.completed
                                                        ? "Done"
                                                        : "Pending"}
                                                </span>
                                            </div>

                                            {task.description && (
                                                <p className="mt-1 truncate text-[10px] text-slate-500 dark:text-slate-400">
                                                    {
                                                        task.description
                                                    }
                                                </p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Calendar;