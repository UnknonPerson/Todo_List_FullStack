import { createContext, useContext, useState } from "react";
import taskServises from "../Services/taskService.js";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchTasks = async () => {
        setLoading(true);
        setError(null);
        try {
            const res = await taskServises.getTask();
            setTasks(res.data?.data || []);
        } catch (e) {
            const message = e.response?.data?.message || "Failed to fetch tasks";
            setError(message);
            setTasks([]);
        } finally {
            setLoading(false);
        }
    };

    const addTask = async (taskData) => {
        try {
            const res = await taskServises.addTask(taskData);
            const createdTask = res.data?.data?.task;
            if (createdTask) {
                setTasks((prevTasks) => [createdTask, ...prevTasks]);
            }
            return res;
        } catch (e) {
            const message = e.response?.data?.message || "Failed to add task";
            setError(message);
            throw e;
        }
    };

    const removeTask = async (taskId) => {
        try {
            await taskServises.deleteTask(taskId);
            setTasks((prevTasks) => prevTasks.filter((task) => task._id !== taskId));
        } catch (e) {
            const message = e.response?.data?.message || "Failed to delete task";
            setError(message);
            throw e;
        }
    };

    const updateTask = async (taskId, taskData) => {
        try {
            const res = await taskServises.editTask(taskId, taskData);
            const updatedTask = res.data?.data?.task;
            if (updatedTask) {
                setTasks((prevTasks) =>
                    prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
                );
            }
            return res;
        } catch (e) {
            const message = e.response?.data?.message || "Failed to update task";
            setError(message);
            throw e;
        }
    };

    const toggleComplete = async (taskId) => {
        try {
            const res = await taskServises.toggalCompete(taskId);
            const updatedTask = res.data?.data?.task;
            if (updatedTask) {
                setTasks((prevTasks) =>
                    prevTasks.map((task) => (task._id === updatedTask._id ? updatedTask : task))
                );
            }
            return res;
        } catch (e) {
            const message = e.response?.data?.message || "Failed to toggle task";
            setError(message);
            throw e;
        }
    };

    return (
        <TaskContext.Provider value={{ tasks, setTasks, loading, error, fetchTasks, addTask, removeTask, updateTask, toggleComplete }}>
            {children}
        </TaskContext.Provider>
    );
}

export function useTasks() {
    const context = useContext(TaskContext);

    if (context === null) {
        throw new Error("useTasks must be used inside TaskProvider");
    }

    return context;
}
