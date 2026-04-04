import React, { useEffect, useState } from 'react'
import taskContext from './taskContext.js'

const TaskContextProvidee = ({ children }) => {

  const [tasks, setTasks] = useState([]);

  // 🔥 Load user on refresh
//   useEffect(() => {
//     const storedUser = localStorage.getItem("user");
//     if (storedUser) {
//       setUser(JSON.parse(storedUser));
//     }
//   }, []);

  // 🔥 Save user whenever it changes
//   useEffect(() => {
//     if (user) {
//       localStorage.setItem("user", JSON.stringify(user));
//     } else {
//       localStorage.removeItem("user");
//     }
//   }, [user]);

  return (
    <taskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </taskContext.Provider>
  )
}

export default TaskContextProvidee;