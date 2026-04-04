import React, { useEffect, useState } from 'react'

const TaskList = ({ addbtn }) => {

  const [task , setTask] = useState(null);

  useEffect(async () => {
    try {
      const res = fetch("http://localhost:7200/api/v1/task/get", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      const result = await res.json();

      console.log(result);

      if (res.ok) {
        setTask(result);
      }

    } catch (error) {
      console.log(error);
    }
  }, [])

  return (
    <div className='mt-8 p-6 rounded-2xl 
      backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl'>

      <div className='flex w-full justify-between my-3'>
        <h2 className='text-lg font-semibold mb-4'>Your Tasks</h2>
      </div>

      <div className='space-y-3'>
        <div className='p-3 rounded-lg bg-white/10 hover:bg-white/20 transition'>
          Task 1
        </div>
        <div className='p-3 rounded-lg bg-white/10 hover:bg-white/20 transition'>
          Task 2
        </div>
        <div className='p-3 rounded-lg bg-white/10 hover:bg-white/20 transition'>
          Task 3
        </div>
      </div>
    </div>
  )
}

export default TaskList
