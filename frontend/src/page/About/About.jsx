import React from "react";

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center p-6">
      
      <div className="max-w-6xl w-full backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-10 text-white">
        
        {/* Title */}
        <h1 className="text-4xl font-bold mb-6 text-center">About Us</h1>

        {/* Intro */}
        <p className="text-lg text-gray-200 text-center mb-8">
          Welcome to <span className="font-semibold text-white">Your Todo App</span> — 
          your personal productivity companion designed to help you stay organized and focused every day.
        </p>

        {/* Sections */}
        <div className="space-y-6">

          <div>
            <h2 className="text-2xl font-semibold mb-2">🚀 Our Mission</h2>
            <p className="text-gray-300">
              We aim to simplify productivity by providing a clean and distraction-free
              environment where you can manage tasks effortlessly.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">💡 Why This App?</h2>
            <p className="text-gray-300">
              Most task managers are overloaded with features. We built this app to be minimal,
              fast, and easy to use — so you can focus on what truly matters.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">✨ Features</h2>
            <ul className="list-disc list-inside text-gray-300 space-y-1">
              <li>Create, edit, and delete tasks</li>
              <li>Track completed tasks</li>
              <li>Secure login system</li>
              <li>Clean and modern UI</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold mb-2">👨‍💻 Vision</h2>
            <p className="text-gray-300">
              We are continuously working to enhance this platform by adding smart features,
              better integrations, and AI-powered productivity tools.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="mt-10 text-center text-gray-400">
          <p>❤️ Built with passion to boost your productivity</p>
        </div>
      </div>

    </div>
  );
};

export default About;