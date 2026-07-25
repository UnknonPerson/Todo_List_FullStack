import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import { ThemeProvider } from "./context/ThemeContext";
import { TaskProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";
import Setting from "./Pages/Setting";


function App() {

  return (
    <UserProvider>
      <TaskProvider>
        <ThemeProvider>
          <Router>
            <Routes>
              <Route element={<Layout />}>
                <Route path="/" element={<Home />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/setting" element={<Setting />} />
              </Route>
            </Routes>
          </Router>
        </ThemeProvider>
      </TaskProvider>
    </UserProvider>
  );
}

export default App;