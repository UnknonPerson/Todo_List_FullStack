import todoImage from '../../assets/Todo.png';

const Home = () => {
  return (
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
  );
};

export default Home;
