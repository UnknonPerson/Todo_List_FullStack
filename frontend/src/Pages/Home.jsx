import React from 'react'
import TaskCard from '../components/TaskCard'
import AddForm from '../components/AddForm';
import { useTasks } from '../context/TaskContext';

const Home = () => {

    const [isCreatingTask, setIsCreatingTask] = React.useState(false);
    const [isEditingTask, setIsEditingTask] = React.useState(false);

    const {tasks} = useTasks();



  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4 dark:bg-gray-900">
        <div className="flex justify-between items-center text-gray-800 dark:text-white border-b-1 border-black-500 pb-4">
            <h1 className="text-4xl font-bold">All Tasks</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300 " 
            onClick={() => setIsCreatingTask(true)}>
                Add Task
            </button>
        </div>
      <div className="flex gap-4 mt-4 flex-wrap">
        {tasks.map((task) => (
          <TaskCard key={task.id} title={task.title} dueDate={task.dueDate} priority={task.priority} />
        ))}
      </div>
      {
        isCreatingTask && <AddForm onClose={() => setIsCreatingTask(false)} />
      }
      {
        isEditingTask && <AddForm onClose={() => setIsEditingTask(false)} />
      }
    </div>
  )
}

export default Home
