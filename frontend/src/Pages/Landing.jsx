import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, CheckCircle2, CalendarDays, BarChart3 } from "lucide-react";

const Landing = () => {
  return (
    <section className="min-h-screen bg-zinc-950 text-white">
      <div className="mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 py-16">

        {/* Logo */}
        <div className="mb-8 flex items-center gap-3">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 font-bold text-xl">
            T
          </div>

          <h1 className="text-3xl font-bold tracking-tight">
            TaskFlow
          </h1>
        </div>

        {/* Hero */}
        <div className="max-w-3xl text-center">

          <span className="rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-2 text-sm text-blue-400">
            Simple • Fast • Organized
          </span>

          <h2 className="mt-8 text-5xl font-extrabold leading-tight md:text-6xl">
            Organize Your Work
            <br />
            <span className="text-blue-500">
              One Task at a Time
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-zinc-400">
            Stay productive with an elegant workspace that helps you
            manage tasks, plan your day, and achieve your goals without
            distractions.
          </p>

          {/* Buttons */}

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

            <Link
              to="/signup"
              className="flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-8 py-4 font-semibold transition hover:bg-blue-700"
            >
              Get Started
              <ArrowRight size={18} />
            </Link>

            <Link
              to="/login"
              className="rounded-xl border border-zinc-700 bg-zinc-900 px-8 py-4 font-semibold transition hover:border-zinc-600 hover:bg-zinc-800"
            >
              Login
            </Link>

          </div>

        </div>

        {/* Preview Card */}

        <div className="mt-20 w-full max-w-5xl rounded-3xl border border-zinc-800 bg-zinc-900 p-8 shadow-2xl">

          <div className="grid gap-8 md:grid-cols-3">

            <div className="rounded-2xl bg-zinc-800 p-6">

              <CheckCircle2
                className="mb-4 text-green-500"
                size={36}
              />

              <h3 className="text-xl font-semibold">
                Smart Tasks
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Create, edit, organize and complete your tasks with ease.
              </p>

            </div>

            <div className="rounded-2xl bg-zinc-800 p-6">

              <CalendarDays
                className="mb-4 text-blue-500"
                size={36}
              />

              <h3 className="text-xl font-semibold">
                Calendar View
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Plan your week and never miss an important deadline.
              </p>

            </div>

            <div className="rounded-2xl bg-zinc-800 p-6">

              <BarChart3
                className="mb-4 text-purple-500"
                size={36}
              />

              <h3 className="text-xl font-semibold">
                Track Progress
              </h3>

              <p className="mt-3 text-sm leading-6 text-zinc-400">
                Monitor completed tasks and improve your productivity.
              </p>

            </div>

          </div>

        </div>

        {/* Footer */}

        <p className="mt-16 text-center text-sm text-zinc-500">
          Built for students, developers, and professionals who value
          productivity.
        </p>

      </div>
    </section>
  );
};

export default Landing;