import React from "react";
import {
  CalendarClock,
  Check,
  Circle,
  Flag,
  Pencil,
  X,
} from "lucide-react";
import { useTasks } from "../context/TaskContext";

const TaskCard = ({ id, title, dueDate, priority, completed = false }) => {
  const { task,removeTask, updateTask } = useTasks();

  const getPriorityStyle = (priority) => {
    switch (priority) {
      case "High":
        return "bg-red-100 text-red-600 dark:bg-red-500/20 dark:text-red-400";
      case "Medium":
        return "bg-yellow-100 text-yellow-600 dark:bg-yellow-500/20 dark:text-yellow-400";
      case "Low":
        return "bg-green-100 text-green-600 dark:bg-green-500/20 dark:text-green-400";
      default:
        return "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-300";
    }
  };

  const handleComplete = () => {
    updateTask(id, {
      completed: !completed,
    });
  };

  const handleEdit = () => {
    console.log("Edit Task:", id);

    // TODO:
    // Open edit modal
    // OR navigate to edit page
    // OR set selected task in context
  };

  const handleDelete = () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (confirmDelete) {
      removeTask(id);
      console.log(task);
    }
  };

  return (
    <div
      className={`w-full rounded-xl border p-5 shadow-md transition-all duration-300
      ${
        completed
          ? "bg-gray-50 dark:bg-slate-900 opacity-75"
          : "bg-white dark:bg-slate-800 hover:shadow-xl hover:-translate-y-1"
      }
      dark:border-gray-700`}
    >
      {/* Title */}
      <div className="flex items-center gap-3">
        <Circle
          size={20}
          className={
            completed
              ? "text-green-500 fill-green-500"
              : "text-blue-500"
          }
        />

        <h2
          className={`text-lg font-semibold text-gray-800 dark:text-white ${
            completed ? "line-through text-gray-500" : ""
          }`}
        >
          {title}
        </h2>
      </div>

      {/* Due Date */}
      <div className="mt-4 flex items-center gap-2 text-sm text-gray-600 dark:text-gray-300">
        <CalendarClock size={16} className="text-gray-400" />
        <span>Due: {dueDate}</span>
      </div>

      {/* Priority */}
      <div className="mt-3 flex items-center gap-2 text-sm">
        <Flag size={16} className="text-gray-400" />

        <span
          className={`rounded-lg px-3 py-1 text-xs font-semibold ${getPriorityStyle(
            priority
          )}`}
        >
          {priority}
        </span>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end gap-3">
        {/* Complete */}
        <button
          type="button"
          onClick={handleComplete}
          title={completed ? "Mark Incomplete" : "Mark Complete"}
          className="rounded-full bg-green-500 p-2 text-white transition hover:bg-green-600"
        >
          <Check size={16} />
        </button>

        {/* Edit */}
        <button
          type="button"
          onClick={handleEdit}
          title="Edit Task"
          className="rounded-full bg-blue-500 p-2 text-white transition hover:bg-blue-600"
        >
          <Pencil size={16} />
        </button>

        {/* Delete */}
        <button
          type="button"
          onClick={handleDelete}
          title="Delete Task"
          className="rounded-full bg-red-500 p-2 text-white transition hover:bg-red-600"
        >
          <X size={16} />
        </button>
      </div>
    </div>
  );
};

export default TaskCard;