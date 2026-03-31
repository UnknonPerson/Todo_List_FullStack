import React from 'react'

const About = () => {
  return (
    <div className='p-6 w-full font-mono backdrop-blur-lg bg-white/10 border border-white/20 rounded-lg shadow-2xl mb-10 text-white'>
        <h1 className='text-3xl font-bold text-center mt-10 text-white'>About This App</h1>
      <p className='text-white text-center mt-10 text-m'>This is a simple Todo List application built with React. It allows users to manage their tasks efficiently by providing features such as adding, editing, and deleting tasks. The application is designed with a clean and intuitive user interface, making it easy for users to stay organized and productive.</p>
      <p className='text-white text-center mt-4 text-m'>The app is built using modern React practices, including functional components and hooks. It also utilizes Tailwind CSS for styling, ensuring a responsive and visually appealing design. Whether you're a student, professional, or anyone looking to keep track of your tasks, this Todo List app is here to help you stay on top of your to-dos!</p>
    </div>
  )
}

export default About
