import React from 'react'

const TaskList = () => {
  return (
    <div className='mt-8 p-6 rounded-2xl 
      backdrop-blur-lg bg-white/10 border border-white/20 shadow-xl'>

        <div className='flex w-full justify-between my-3'>
            <h2 className='text-lg font-semibold mb-4'>Your Tasks</h2>
        <button className='bg-purple-500 hover:bg-purple-600 text-white py-2 px-4 rounded-lg transition'>
          ADD TASK
        </button>
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
