import { X } from 'lucide-react'
import React from 'react'
import { useTasks } from '../context/TaskContext';

const AddForm = ({ onClose }) => {

    const [title, setTitle] = React.useState('');
    const [task, setTask] = React.useState('');
    const [dueDate, setDueDate] = React.useState('');
    const [priority, setPriority] = React.useState('Medium');
    const [submitError, setSubmitError] = React.useState(null);
    const [submitting, setSubmitting] = React.useState(false);

    const { addTask } = useTasks();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setSubmitError(null);

        if (!title.trim()) {
            setSubmitError("Task title is required");
            return;
        }

        setSubmitting(true);
        try {
            await addTask({
                title,
                task,
                dueDate,
                priority
            });
            onClose();
        } catch (err) {
            setSubmitError(err.response?.data?.message || "Failed to create task");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
            <div className="relative w-full max-w-xl rounded-xl bg-white p-6 dark:bg-gray-800 dark:text-white">

                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 hover:text-red-500"
                >
                    <X size={25} />
                </button>

                <h2 className="text-2xl font-bold">
                    Add New Task
                </h2>

                <p className="text-gray-500 dark:text-gray-400 mt-1">
                    Fill in the details below to add a new task.
                </p>

                {submitError && (
                    <p className="mt-4 rounded-lg bg-red-50 px-4 py-2 text-sm text-red-600 dark:bg-red-500/20 dark:text-red-400">
                        {submitError}
                    </p>
                )}

                <form className="mt-6 flex flex-col gap-4" onSubmit={handleSubmit}>

                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Task Title</span>
                        <input
                            type="text"
                            placeholder="Enter task title"
                            className="border border-gray-300 rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Task Description</span>
                        <input
                            type="text"
                            placeholder="Enter task Description"
                            className="border border-gray-300 rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={description}
                            onChange={(e) => setTask(e.target.value)}
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Due Date</span>
                        <input
                            type="date"
                            className="border border-gray-300 rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={dueDate}
                            onChange={(e) => setDueDate(e.target.value)}
                        />
                    </label>
                    <label className="flex flex-col gap-1">
                        <span className="font-semibold">Priority</span>
                        <select
                            className="border border-gray-300 rounded p-2 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                            value={priority}
                            onChange={(e) => setPriority(e.target.value)}
                        >
                            <option>Low</option>
                            <option>Medium</option>
                            <option>High</option>
                        </select>
                    </label>

                    <div className="flex justify-end gap-3 mt-6">
                        <button
                            type="button"
                            onClick={onClose}
                            className="px-4 py-2 rounded-md border border-gray-300 hover:bg-gray-100 dark:border-gray-600 dark:hover:bg-gray-700"
                        >
                            Cancel
                        </button>

                        <button
                            type="submit"
                            disabled={submitting}
                            className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
                        >
                            {submitting ? "Adding..." : "Add Task"}
                        </button>
                    </div>

                </form>

            </div>
        </div>
    );
};

export default AddForm;
