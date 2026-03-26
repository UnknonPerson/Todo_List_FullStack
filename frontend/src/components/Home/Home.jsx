import todoImage from '../../assets/Todo.png';

const Home = () => {
  return (
    <div className="flex items-center justify-between px-10 h-95vh">
      
      <div className="text-white">
        <h1 className="text-5xl font-bold mb-4">TodoList</h1>
        <p className="text-lg opacity-80">
          Organize your tasks efficiently 
        </p>
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
