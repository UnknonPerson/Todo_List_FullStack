import { Car } from 'lucide-react';
import todoImage from '../../assets/Todo.png';
import Card from '../Cards/InfoCard';
import About from '../Cards/About';

const Home = () => {
  return (

    <div>
      <div className="flex items-center justify-between px-20 h-95vh">

        <div className="text-white">
          <h1 className="text-5xl font-bold mb-4">TodoList</h1>
          <p className="text-lg opacity-80">
            Organize your tasks efficiently
          </p>
          <button className='mt-2 px-4 py-2 bg-white/20 text-white 
      rounded-lg hover:bg-white/30 transition'>
            Read More
          </button>
        </div>

        <div>
          <img
            src={todoImage}
            alt="Todo Illustration"
            className="w-100 object-contain"
          />
        </div>
      </div>
      <div className='px-20 py-10 grid grid-cols-1 md:grid-cols-3 gap-6'>
        <Card
          icon={<Car size={24} />}
          title="Easy to Use"
          description="Our intuitive interface makes it simple to manage your tasks."
        />
        <Card
          icon={<Car size={24} />}
          title="Organize Efficiently"
          description="Keep your tasks organized and never miss a deadline."
        />
        <Card
          icon={<Car size={24} />}
          title="Track Progress"
          description="Monitor your task completion and stay on top of your goals."
        />
      </div>
      <div className='px-20 py-10'>
        <About />
      </div>
    </div>
  );
};

export default Home;
