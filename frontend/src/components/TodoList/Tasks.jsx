import React from 'react'

const Tasks = () => {
  return (
    <div className='flex-1 p-6 rounded-2xl 
      backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl'>
      <h1 className='text-2xl font-bold mb-4'>Tasks</h1>
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

export default Tasks
