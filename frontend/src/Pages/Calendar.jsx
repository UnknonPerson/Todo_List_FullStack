import React, { useMemo, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useTasks } from "../context/TaskContext";

const Calendar = () => {
  const { tasks } = useTasks();

  const [currentDate, setCurrentDate] = useState(new Date());

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

  const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

  const today = new Date();

  const calendarDays = useMemo(() => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const firstDay = new Date(year, month, 1);
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const blanks = Array(firstDay.getDay()).fill(null);
    const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);

    return [...blanks, ...days];
  }, [currentDate]);

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

  const getTasksForDay = (day) => {
    if (!day) return [];

    return tasks.filter((task) => {
      if (!task.dueDate) return false;

      const date = new Date(task.dueDate);

      return (
        date.getDate() === day &&
        date.getMonth() === currentDate.getMonth() &&
        date.getFullYear() === currentDate.getFullYear()
      );
    });
  };

  return (
    <div className="min-h-screen bg-zinc-950 p-6">
      {/* Header */}
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {months[currentDate.getMonth()]} {currentDate.getFullYear()}
          </h1>

          <p className="text-zinc-400 mt-1">
            Organize your tasks efficiently
          </p>
        </div>

        <div className="flex gap-3">
          <button
            onClick={prevMonth}
            className="rounded-lg border border-zinc-700 bg-zinc-900 p-2 hover:bg-zinc-800"
          >
            <ChevronLeft className="text-white" />
          </button>

          <button
            onClick={() => setCurrentDate(new Date())}
            className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Today
          </button>

          <button
            onClick={nextMonth}
            className="rounded-lg border border-zinc-700 bg-zinc-900 p-2 hover:bg-zinc-800"
          >
            <ChevronRight className="text-white" />
          </button>
        </div>
      </div>

      {/* Week Days */}
      <div className="grid grid-cols-7 gap-3 mb-3">
        {weekDays.map((day) => (
          <div
            key={day}
            className="text-center font-semibold text-zinc-400"
          >
            {day}
          </div>
        ))}
      </div>

      {/* Calendar */}
      <div className="grid grid-cols-7 gap-3">
        {calendarDays.map((day, index) => {
          const dayTasks = getTasksForDay(day);

          const isToday =
            day &&
            day === today.getDate() &&
            currentDate.getMonth() === today.getMonth() &&
            currentDate.getFullYear() === today.getFullYear();

          return (
            <div
              key={index}
              className={`
                min-h-[120px]
                rounded-xl
                border
                p-3
                transition
                ${
                  day
                    ? "border-zinc-800 bg-zinc-900 hover:border-blue-500"
                    : "border-transparent"
                }
                ${isToday ? "ring-2 ring-blue-500" : ""}
              `}
            >
              {day && (
                <>
                  <div className="flex items-center justify-between">
                    <span
                      className={`font-semibold ${
                        isToday
                          ? "text-blue-400"
                          : "text-white"
                      }`}
                    >
                      {day}
                    </span>

                    {dayTasks.length > 0 && (
                      <span className="rounded-full bg-blue-600 px-2 py-0.5 text-xs text-white">
                        {dayTasks.length}
                      </span>
                    )}
                  </div>

                  <div className="mt-3 space-y-2">
                    {dayTasks.slice(0, 3).map((task) => (
                      <div
                        key={task._id}
                        className="truncate rounded-md bg-blue-500/20 px-2 py-1 text-xs text-blue-300"
                      >
                        {task.title}
                      </div>
                    ))}

                    {dayTasks.length > 3 && (
                      <p className="text-xs text-zinc-500">
                        +{dayTasks.length - 3} more
                      </p>
                    )}
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Calendar;