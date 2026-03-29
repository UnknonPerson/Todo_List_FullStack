import React from 'react'

const AddTask = ({ onClose }) => {
  return (
    <div className='w-full h-full bg-black/50 backdrop-blur-sm flex items-center justify-center fixed top-0 left-0 z-50'>
      
      <div className='w-full max-w-md p-6 bg-white rounded-2xl shadow-2xl relative'>
        
        {/* Close Button */}
        <button 
          onClick={onClose}
          className='absolute top-3 right-3 text-gray-500 hover:text-black text-xl'
        >
          ✕
        </button>

        <h2 className='text-2xl font-bold mb-4 text-center'>Add New Task</h2>

        <form className='space-y-4'>
          
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Task Title
            </label>
            <input 
              type='text'
              className='mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none'
              placeholder='Enter task title'
            />
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Description
            </label>
            <textarea 
              className='mt-1 w-full border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-blue-500 outline-none'
              placeholder='Enter task description'
            />
          </div>

          <button 
            type='submit'
            className='w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition'
          >
            Add Task
          </button>

        </form>
      </div>
    </div>
  )
}

export default AddTask