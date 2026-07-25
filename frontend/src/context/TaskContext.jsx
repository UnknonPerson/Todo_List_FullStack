import { createContext, useContext, useState } from "react";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([{ id: 1, title: 'Complete React Fundamentals', dueDate: '2023-10-15', priority: 'High' },
    { id: 2, title: 'Build a Portfolio Website', dueDate: '2023-10-20', priority: 'Medium' },
    { id: 3, title: 'Learn Redux Basics', dueDate: '2023-10-25', priority: 'Low' },]);

    const addTask = (task) => {
        setTasks((prevTasks) => [...prevTasks, task]);
    }

    const removeTask = (taskId) => {
        setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId));
    }

    const updateTask = (updatedTask) => {
        setTasks((prevTasks) =>
            prevTasks.map((task) => (task.id === updatedTask.id ? updatedTask : task))
        );
    }

    return (
        <TaskContext.Provider value={{ tasks, setTasks, addTask, removeTask, updateTask }}>
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