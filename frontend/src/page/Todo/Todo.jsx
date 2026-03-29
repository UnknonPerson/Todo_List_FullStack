import React, { useState, useEffect } from 'react'
import { WorkflowIcon, CheckCircle, ListTodo, Clock } from 'lucide-react'
import TaskCard from '../../components/TodoList/TaskCard'
import TaskList from '../../components/TodoList/TaskList'
import SideNav from '../../components/Nav/SideNav'
import AddTask from '../../components/TodoList/AddTask'

const Todo = () => {

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    document.body.style.overflow = showModal ? 'hidden' : 'auto';
  }, [showModal]);

  return (
    <div className='flex min-h-screen bg-gradient-to-br from-[#0f0c29] via-[#302b63] to-[#24243e]'>

      <SideNav />

      <div className='p-6 w-full text-white overflow-y-auto'>

        {/*  HEADER */}
        <div className='flex justify-between items-center mb-6'>
          <h1 className='text-3xl font-bold'>Dashboard</h1>
          <button 
            onClick={() => setShowModal(true)}
            className='bg-blue-600 px-4 py-2 rounded-lg hover:bg-blue-700 transition'
          >
            + Add Task
          </button>
        </div>

        {/* STATS */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 backdrop-blur-lg bg-white/10 border border-white/20 p-4 rounded-2xl shadow-2xl'>
          <TaskCard icon={<WorkflowIcon />} title="Total Task" number="12" last="+2 from yesterday" />
          <TaskCard icon={<ListTodo />} title="Pending" number="12" />
          <TaskCard icon={<CheckCircle />} title="Completed" number="7" />
          <TaskCard icon={<Clock />} title="Due Today" number="3" />
        </div>

        {/* TASK LIST */}
        <TaskList addbtn={() => setShowModal(true)} />

      </div>

      {/* MODAL */}
      {showModal && <AddTask onClose={() => setShowModal(false)} />}

    </div>
  )
}

export default Todo