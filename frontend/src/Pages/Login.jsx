import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Mail, Lock, Eye, EyeOff, CircleCheck as CheckCircle2, ArrowLeft } from "lucide-react";
import { useUser } from "../context/UserContext";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    const { login } = useUser();
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (!username.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }

        setLoading(true);
        try {
            await login(username, password);
            navigate("/tasks");
        } catch (err) {
            setError(err.response?.data?.message || "Login failed. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-zinc-950 flex">


            {/* Left Side */}

            <div className="hidden lg:flex w-1/2 bg-zinc-900 items-center justify-center p-12">
                <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-8">
                        <div className="h-14 w-14 rounded-xl bg-blue-600 flex items-center justify-center text-2xl font-bold">
                            T
                        </div>
                        <h1 className="text-3xl font-bold text-white">
                            TaskFlow
                        </h1>
                    </div>
                    <h2 className="text-5xl font-bold text-white leading-tight">
                        Welcome Back.
                    </h2>
                    <p className="mt-5 text-zinc-400 leading-7">
                        Log in to manage your tasks, stay productive,
                        and keep your projects organized in one place.
                    </p>
                    <div className="mt-10 space-y-5">
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-500" />
                            <span className="text-zinc-300">
                                Organize daily tasks
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-500" />
                            <span className="text-zinc-300">
                                Calendar & reminders
                            </span>
                        </div>
                        <div className="flex items-center gap-3">
                            <CheckCircle2 className="text-green-500" />
                            <span className="text-zinc-300">
                                Track your productivity
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            {/* Right Side */}
            <div className="flex flex-1 items-center justify-center px-6">
                <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-xl">
                    <h2 className="text-3xl font-bold text-white">
                        Login
                    </h2>
                    <p className="mt-2 text-zinc-400">
                        Sign in to continue.
                    </p>

                    <div className="absolute top-6 left-6">
                        <Link
                            to="/"
                            className="flex items-center gap-2 rounded-lg border border-zinc-700 bg-zinc-900 px-4 py-2 text-zinc-300 transition hover:bg-zinc-800 hover:text-white"
                        >
                            <ArrowLeft size={18} />
                            Back
                        </Link>
                    </div>

                    {error && (
                        <p className="mt-4 rounded-lg bg-red-500/10 px-4 py-3 text-sm text-red-400">
                            {error}
                        </p>
                    )}

                    <form className="mt-8 space-y-6" onSubmit={handleSubmit}>

                        {/* Username */}

                        <div>

                            <label className="mb-2 block text-sm text-zinc-300">
                                Username
                            </label>

                            <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">

                                <Mail size={18} className="text-zinc-500" />

                                <input
                                    type="text"
                                    placeholder="Enter your username"
                                    className="w-full bg-transparent px-3 py-4 text-white outline-none"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                />

                            </div>

                        </div>

                        {/* Password */}

                        <div>

                            <label className="mb-2 block text-sm text-zinc-300">
                                Password
                            </label>

                            <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">

                                <Lock size={18} className="text-zinc-500" />

                                <input
                                    type={showPassword ? "text" : "password"}
                                    placeholder="Enter your password"
                                    className="w-full bg-transparent px-3 py-4 text-white outline-none"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="text-zinc-500"
                                >
                                    {showPassword ? (
                                        <EyeOff size={18} />
                                    ) : (
                                        <Eye size={18} />
                                    )}
                                </button>

                            </div>

                        </div>

                        {/* Remember */}

                        <div className="flex items-center justify-between">

                            <label className="flex items-center gap-2 text-sm text-zinc-400">

                                <input
                                    type="checkbox"
                                    className="accent-blue-600"
                                />

                                Remember me

                            </label>

                            <button
                                type="button"
                                className="text-sm text-blue-500 hover:text-blue-400"
                            >
                                Forgot Password?
                            </button>

                        </div>

                        {/* Login */}

                        <button
                            type="submit"
                            disabled={loading}
                            className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
                        >
                            {loading ? "Logging in..." : "Login"}
                        </button>

                    </form>

                    <p className="mt-8 text-center text-zinc-400">
                        Don't have an account?{" "}
                        <Link
                            to="/signup"
                            className="font-medium text-blue-500 hover:text-blue-400"
                        >
                            Create one
                        </Link>
                    </p>

                </div>

            </div>

        </div>
    );
};

export default Login;
