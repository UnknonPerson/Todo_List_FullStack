import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { ThemeProvider } from "./context/ThemeContext";
import { TaskProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";
import Setting from "./Pages/Setting";
import Calendar from "./Pages/Calendar";
import Dashboard from "./Pages/Dashboard";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";


function App() {

  return (
    <UserProvider>
      <TaskProvider>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route element={<Layout />}>
                <Route path="/tasks" element={<Home />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<Setting />} />
                <Route path="/calendar" element={<Calendar />} />
              </Route>
              <Route path="/login" element = {<Login />} />
              <Route path="/signup" element = {<Signup />} />
            </Routes>
          </Router>
        </ThemeProvider>
      </TaskProvider>
    </UserProvider>
  );
}

export default App;