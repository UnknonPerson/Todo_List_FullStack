import React, { useContext, useEffect } from 'react'
import taskContext from '../../Context/taskContext';

const TaskList = ({addbtn}) => {

  const { tasks, setTasks } = useContext(taskContext);

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

        if (res.ok) {
          setTasks(result.data);
        }

      } catch (error) {
        console.log(error);
      }
    };

    fetchTasks();
  }, [addbtn]);

  return (
    <div className='mt-8 p-6 rounded-2xl backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl'>

      <h2 className='text-lg font-semibold mb-4'>Your Tasks</h2>

      <div className='space-y-3'>
        {tasks.length > 0 ? (
          tasks.map((task) => (
            <div 
              key={task._id}
              className='p-3 rounded-lg bg-white/10 hover:bg-white/20 transition'
            >
              {task.task}
            </div>
          ))
        ) : (
          <p className="text-gray-300">No tasks yet</p>
        )}
      </div>
    </div>
  )
}

export default TaskList;