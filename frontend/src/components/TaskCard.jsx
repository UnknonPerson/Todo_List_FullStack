import { CalendarClock, Check, Circle, Flag, Pencil, X } from 'lucide-react'
import React from 'react'

const TaskCard = ({ title, dueDate, priority }) => {

  const getPriorityColor = (priority) => {
    switch (priority) {
      case 'High':
        return 'bg-red-500/20';
      case 'Medium':
        return 'bg-yellow-500/20';
      case 'Low':
        return 'bg-green-500/20';
      default:
        return 'bg-gray-500';
    }
  };

  return (
    <div className="flex flex-col gap-4 w-100 bg-white shadow-lg rounded-xl p-4 mb-4 dark:bg-slate-800 hover:dark:bg-slate-700 dark:border dark:border-gray-700 dark:text-white transition-all duration-300">
      <div className="flex items-center gap-2 text-xl font-bold text-gray-800 dark:text-white">
          <Circle size={20} color='blue'/>
          <h2>{title}</h2>
      </div>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <CalendarClock size={16} color='gray' />
        Due Date: {dueDate}
      </div>
      <div className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
        <Flag size={16} color='gray' />
        Priority: <span className={getPriorityColor(priority) + ' font-bold p-1 rounded-lg'}>{priority}</span>
      </div>
      <div className="flex justify-end gap-2 mt-4">
        <span className="border border-gray-300 dark:border-gray-600 p-2 rounded-full bg-green-500 text-white cursor-pointer"><Check size={15}/></span>
        <span className="border border-gray-300 dark:border-gray-600 p-2 rounded-full bg-blue-500 text-white cursor-pointer"><Pencil size={15}/></span>
        <span className="border border-gray-300 dark:border-gray-600 p-2 rounded-full bg-red-500 text-white cursor-pointer"><X size={15}/></span>
      </div>
    </div>
  )
}

export default TaskCard
