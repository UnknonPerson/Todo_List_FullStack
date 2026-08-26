import React from 'react'
import TaskCard from '../components/TaskCard'
import AddForm from '../components/AddForm';
import { useTasks } from '../context/TaskContext';
import { useUser } from '../context/UserContext';
import { Navigate } from 'react-router-dom';

const Home = () => {

    const [isCreatingTask, setIsCreatingTask] = React.useState(false);

    const { tasks, loading, error, fetchTasks } = useTasks();
    const { user } = useUser();

    React.useEffect(() => {
        if (user) {
            fetchTasks();
        }
    }, [user]);

    if (!user) {
        return <Navigate to="/login" replace />;
    }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 p-4 dark:bg-gray-900">
        <div className="flex justify-between items-center text-gray-800 dark:text-white border-b-1 border-black-500 pb-4">
            <h1 className="text-4xl font-bold">All Tasks</h1>
            <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4 hover:bg-blue-600 transition-colors duration-300 " 
            onClick={() => setIsCreatingTask(true)}>
                Add Task
            </button>
        </div>

        {loading && (
            <p className="text-gray-500 dark:text-gray-400 mt-6">Loading tasks...</p>
        )}

        {error && (
            <p className="text-red-500 mt-6">{error}</p>
        )}

        {!loading && !error && tasks.length === 0 && (
            <p className="text-gray-500 dark:text-gray-400 mt-6">No tasks yet. Click "Add Task" to create one.</p>
        )}

      <div className="flex gap-4 mt-4 flex-wrap">
        {tasks.map((task) => (
          <TaskCard key={task._id} task={task} />
        ))}
      </div>
      {
        isCreatingTask && <AddForm onClose={() => setIsCreatingTask(false)} />
      }
    </div>
  )
}

export default Home
