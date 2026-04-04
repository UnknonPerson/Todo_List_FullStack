import React, { useEffect, useState } from 'react'
import AddTask from './AddTask';

const TaskList = ({ addbtn }) => {

  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const dataa = JSON.parse(localStorage.getItem("user"));
        const token = dataa?.accessToken;

        const res = await fetch("http://localhost:7200/api/v1/task/get", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        });

        const result = await res.json();

        console.log(result.data);

        if (res.ok) {
          setTasks(result.data); 
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [addbtn,AddTask]);

  return (
    <div className='mt-8 p-6 rounded-2xl 
      backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl'>

      <div className='flex w-full justify-between my-3'>
        <h2 className='text-lg font-semibold mb-4'>Your Tasks</h2>
      </div>

      <div className='space-y-3'>
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <div 
              key={index}
              className='p-3 rounded-lg bg-white/10 hover:bg-white/20 transition'
            >
              {task.task || task.Task}
            </div>
          ))
        ) : (
          <p className="text-gray-300">No tasks yet</p>
        )}
      </div>
    </div>
  )
}

export default TaskList