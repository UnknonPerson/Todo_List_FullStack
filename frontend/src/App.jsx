import React from "react";

import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Layout from "./components/Layout/Layout";
import ProtectedRoute from "./components/ProtectedRoute";

import Home from "./Pages/Home";
import Profile from "./Pages/Profile";
import Calendar from "./Pages/Calendar";
import Dashboard from "./Pages/Dashboard";
import Landing from "./Pages/Landing";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";

import { ThemeProvider } from "./context/ThemeContext";
import { TaskProvider } from "./context/TaskContext";
import { UserProvider } from "./context/UserContext";

function App() {
    return (
        <UserProvider>
            <TaskProvider>
                <ThemeProvider>
                    <Router>
                        <Routes>

                            {/* ============================== */}
                            {/* Public Routes                   */}
                            {/* ============================== */}

                            <Route
                                path="/"
                                element={<Landing />}
                            />

                            <Route
                                path="/login"
                                element={<Login />}
                            />

                            <Route
                                path="/signup"
                                element={<Signup />}
                            />

                            {/* ============================== */}
                            {/* Protected Routes               */}
                            {/* ============================== */}

                            <Route element={<ProtectedRoute />}>

                                <Route
                                    element={<Layout />}
                                >

                                    <Route
                                        path="/dashboard"
                                        element={<Dashboard />}
                                    />

                                    <Route
                                        path="/tasks"
                                        element={<Home />}
                                    />

                                    <Route
                                        path="/calendar"
                                        element={<Calendar />}
                                    />

                                    <Route
                                        path="/profile"
                                        element={<Profile />}
                                    />

                                </Route>

                            </Route>

                        </Routes>
                    </Router>
                </ThemeProvider>
            </TaskProvider>
        </UserProvider>
    );
}

export default App;