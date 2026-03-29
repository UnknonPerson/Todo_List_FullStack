import React from 'react'

const Today = () => {
  return (
    <div>
      <h1 className='text-2xl font-bold mb-4'>Today's Tasks</h1>
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

export default Today
