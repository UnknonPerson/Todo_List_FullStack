import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  CheckCircle2,
  ArrowLeft
} from "lucide-react";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  return (
    <div className="min-h-screen bg-zinc-950 flex">

      {/* Left Side */}

      <div className="hidden lg:flex w-1/2 bg-zinc-900 items-center justify-center p-12">

        <div className="max-w-md">

          <div className="flex items-center gap-3 mb-8">
            <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-2xl font-bold">
              T
            </div>

            <h1 className="text-3xl font-bold text-white">
              TaskFlow
            </h1>
          </div>

          <h2 className="text-5xl font-bold leading-tight text-white">
            Start Your Productivity Journey.
          </h2>

          <p className="mt-6 leading-7 text-zinc-400">
            Join thousands of users who organize their work, plan
            smarter, and achieve more every day.
          </p>

          <div className="mt-10 space-y-5">

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" />
              <span className="text-zinc-300">
                Unlimited task management
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" />
              <span className="text-zinc-300">
                Calendar planning
              </span>
            </div>

            <div className="flex items-center gap-3">
              <CheckCircle2 className="text-green-500" />
              <span className="text-zinc-300">
                Progress tracking
              </span>
            </div>

          </div>

        </div>

      </div>

      {/* Right Side */}

      <div className="flex flex-1 items-center justify-center px-6 py-10">

        <div className="w-full max-w-md rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

          <h2 className="text-3xl font-bold text-white">
            Create Account
          </h2>

          <p className="mt-2 text-zinc-400">
            Create your free account to get started.
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

          <form className="mt-8 space-y-5">

            {/* Name */}

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Full Name
              </label>

              <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">

                <User size={18} className="text-zinc-500" />

                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full bg-transparent px-3 py-4 text-white outline-none"
                />

              </div>
            </div>

            {/* Email */}

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Email
              </label>

              <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">

                <Mail size={18} className="text-zinc-500" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-transparent px-3 py-4 text-white outline-none"
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
                  placeholder="Create password"
                  className="w-full bg-transparent px-3 py-4 text-white outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="text-zinc-500"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>

              </div>
            </div>

            {/* Confirm Password */}

            <div>
              <label className="mb-2 block text-sm text-zinc-300">
                Confirm Password
              </label>

              <div className="flex items-center rounded-xl border border-zinc-700 bg-zinc-800 px-4">

                <Lock size={18} className="text-zinc-500" />

                <input
                  type={showConfirm ? "text" : "password"}
                  placeholder="Confirm password"
                  className="w-full bg-transparent px-3 py-4 text-white outline-none"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirm(!showConfirm)}
                  className="text-zinc-500"
                >
                  {showConfirm ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>

              </div>
            </div>

            {/* Terms */}

            <label className="flex items-start gap-3 text-sm text-zinc-400">

              <input
                type="checkbox"
                className="mt-1 accent-blue-600"
              />

              <span>
                I agree to the Terms of Service and Privacy Policy.
              </span>

            </label>

            {/* Button */}

            <button
              className="w-full rounded-xl bg-blue-600 py-4 font-semibold text-white transition hover:bg-blue-700"
            >
              Create Account
            </button>

          </form>

          <p className="mt-8 text-center text-zinc-400">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-blue-500 hover:text-blue-400"
            >
              Login
            </Link>
          </p>

        </div>

      </div>

    </div>
  );
};

export default Signup;