import { createContext, useContext, useState } from "react";

const TaskContext = createContext(null);

export function TaskProvider({ children }) {
    const [tasks, setTasks] = useState([]);

    return (
        <TaskContext.Provider value={{ tasks, setTasks }}>
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