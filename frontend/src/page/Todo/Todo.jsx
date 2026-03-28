import React from 'react'
import { WorkflowIcon, CheckCircle, ListTodo, Clock } from 'lucide-react'
import TaskCard from '../../components/TodoList/TaskCard'
import TaskList from '../../components/TodoList/TaskList'
import SideNav from '../../components/Nav/SideNav'

const Todo = () => {
  return (

    <div className='flex'>
    <SideNav />

    <div className='p-6 w-full text-white'>

      {/* 🔝 HEADER */}
      <h1 className='text-2xl font-bold mb-6'>Dashboard</h1>

      {/* 📊 STATS CARDS */}
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
        <TaskCard icon = {<WorkflowIcon />} title = "Total Task" number="12" last = "+2 from yesterday" />
        <TaskCard icon = {<ListTodo />} title = "Pending" number="12"  />
        <TaskCard icon = {<CheckCircle />} title = "Completed" number="7"  />
        <TaskCard icon = {<Clock />} title = "Due Today" number="3"  />
      </div>

      {/* TASK LIST */}
      <TaskList />

    </div>
    </div>
  )
}

export default Todo