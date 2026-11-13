
import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  Clock3,
  Command,
  Layers3,
  Plus,
  Sparkles,
  TrendingUp,
  Zap,
  Circle,
} from "lucide-react";

import { getCurrentUser } from "../utils/auth";

const Hero = () => {
  // Check whether the user is logged in
  const currentUser = getCurrentUser();
  const isLoggedIn = Boolean(currentUser);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[#fafaff] text-slate-900">

      {/* Background */}
      <div className="pointer-events-none absolute -left-40 top-40 h-96 w-96 rounded-full bg-purple-200/40 blur-[110px]" />
      <div className="pointer-events-none absolute -right-32 top-20 h-96 w-96 rounded-full bg-blue-200/40 blur-[110px]" />

      {/* Hero Content */}
      <div className="relative z-10 mx-auto grid max-w-7xl items-center gap-16 px-6 pb-24 pt-28 sm:pt-32 lg:grid-cols-2 lg:px-10 lg:pb-32 lg:pt-36">

        {/* Left Content */}
        <div className="max-w-2xl">

          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white/80 px-4 py-2 shadow-sm">
            <Sparkles size={15} className="text-violet-600" />

            <span className="text-xs font-bold tracking-wide text-violet-700">
              YOUR SMARTER WORKSPACE STARTS HERE
            </span>

            <ArrowRight size={14} className="text-violet-500" />
          </div>

          <h1 className="text-5xl font-black leading-[1.08] tracking-tight text-slate-950 sm:text-6xl lg:text-[68px]">
            Work Smarter.
            <br />

            Achieve{" "}
            <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              More.
            </span>

            <br />
            Every Day.
          </h1>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-500 sm:text-lg">
            Take control of your work with intelligent task management.
            Plan projects, organize your team, and let AI help you focus
            on what truly matters.
          </p>

          {/* CTA Buttons */}
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">

            <Link
              to={isLoggedIn ? "/#pricing" : "/signup"}
              className="group inline-flex items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-7 py-4 font-bold text-white shadow-xl shadow-violet-200 transition hover:-translate-y-1 hover:shadow-violet-300"
            >
              {isLoggedIn ? "Explore Pricing Plans" : "Start for Free"}

              <ArrowRight
                size={19}
                className="transition group-hover:translate-x-1"
              />
            </Link>

            <a
              href="#features"
              className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-7 py-4 font-bold text-slate-700 transition hover:border-violet-200 hover:bg-violet-50"
            >
              Explore Features
            </a>

          </div>

          {/* Benefits */}
          <div className="mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-slate-500">

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-500" />
              Easy to use
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-500" />
              AI-powered workflow
            </span>

            <span className="flex items-center gap-2">
              <CheckCircle2 size={17} className="text-emerald-500" />
              Stay organized
            </span>

          </div>
        </div>

        {/* Dashboard Preview */}
        <div className="relative mx-auto w-full max-w-[580px]">

          <div className="absolute -inset-5 rounded-[35px] bg-gradient-to-br from-violet-200/60 to-blue-200/60 blur-2xl" />

          <div className="relative overflow-hidden rounded-2xl border border-white bg-white shadow-2xl shadow-indigo-200/50">

            {/* Dashboard Top Bar */}
            <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">

              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-600 text-white">
                  <Zap size={17} fill="white" />
                </div>

                <span className="font-extrabold text-slate-800">
                  Workspace
                </span>
              </div>

              <div className="flex items-center gap-3">
                <span className="hidden text-xs text-slate-400 sm:block">
                  Your productivity dashboard
                </span>

                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-violet-500 to-indigo-500 text-xs font-bold text-white">
                  {isLoggedIn
                    ? currentUser.name?.charAt(0).toUpperCase() || "U"
                    : "AS"}
                </div>
              </div>

            </div>

            <div className="bg-[#fcfcff] p-5 sm:p-7">

              {/* Overview */}
              <div className="flex items-center justify-between">

                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Overview
                  </p>

                  <h2 className="mt-1 text-2xl font-extrabold text-slate-900">
                    Good morning, {isLoggedIn ? currentUser.name : "Alex"} 👋
                  </h2>

                  <p className="mt-1 text-sm text-slate-500">
                    Let's make today productive.
                  </p>
                </div>

                <button className="rounded-lg bg-violet-600 p-2.5 text-white shadow-md shadow-violet-200">
                  <Plus size={19} />
                </button>

              </div>

              {/* Stats */}
              <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">

                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <div className="flex items-center justify-between">
                    <Layers3 size={17} className="text-violet-500" />
                    <TrendingUp size={15} className="text-emerald-500" />
                  </div>

                  <p className="mt-3 text-2xl font-extrabold">24</p>
                  <p className="text-xs text-slate-400">Total Tasks</p>
                </div>

                <div className="rounded-xl border border-slate-100 bg-white p-4">
                  <CheckCircle2 size={17} className="text-emerald-500" />

                  <p className="mt-3 text-2xl font-extrabold">18</p>
                  <p className="text-xs text-slate-400">Completed</p>
                </div>

                <div className="col-span-2 rounded-xl border border-slate-100 bg-white p-4 sm:col-span-1">
                  <Clock3 size={17} className="text-amber-500" />

                  <p className="mt-3 text-2xl font-extrabold">06</p>
                  <p className="text-xs text-slate-400">In Progress</p>
                </div>

              </div>

              {/* Weekly Progress */}
              <div className="mt-5 rounded-xl border border-slate-100 bg-white p-5">

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold text-slate-800">
                      Weekly Progress
                    </h3>

                    <p className="mt-1 text-xs text-slate-400">
                      Your productivity this week
                    </p>
                  </div>

                  <span className="rounded-lg bg-emerald-50 px-3 py-1.5 text-sm font-bold text-emerald-600">
                    +24%
                  </span>
                </div>

                <div className="mt-5 flex items-end gap-2">

                  {[38, 58, 45, 78, 62, 92, 70].map((height, index) => (
                    <div
                      key={index}
                      className="flex flex-1 flex-col items-center gap-2"
                    >
                      <div className="flex h-24 w-full items-end rounded-md bg-violet-50">
                        <div
                          className={`w-full rounded-md ${
                            index === 5
                              ? "bg-gradient-to-t from-violet-700 to-indigo-500"
                              : "bg-violet-300"
                          }`}
                          style={{ height: `${height}%` }}
                        />
                      </div>

                      <span className="text-[10px] text-slate-400">
                        {["M", "T", "W", "T", "F", "S", "S"][index]}
                      </span>
                    </div>
                  ))}

                </div>
              </div>

              {/* Today's Tasks */}
              <div className="mt-5 rounded-xl border border-slate-100 bg-white p-5">

                <div className="mb-4 flex items-center justify-between">
                  <h3 className="font-bold text-slate-800">
                    Today's Tasks
                  </h3>

                  <button className="text-xs font-semibold text-violet-600">
                    View all
                  </button>
                </div>

                <div className="space-y-4">

                  <div className="flex items-center gap-3">
                    <CheckCircle2 size={19} className="shrink-0 text-emerald-500" />

                    <span className="flex-1 text-sm text-slate-400 line-through">
                      Complete project research
                    </span>

                    <span className="rounded-md bg-emerald-50 px-2 py-1 text-[10px] font-semibold text-emerald-600">
                      Done
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Circle size={19} className="shrink-0 text-violet-500" />

                    <span className="flex-1 text-sm font-medium text-slate-700">
                      Design landing page
                    </span>

                    <span className="rounded-md bg-amber-50 px-2 py-1 text-[10px] font-semibold text-amber-600">
                      Today
                    </span>
                  </div>

                  <div className="flex items-center gap-3">
                    <Circle size={19} className="shrink-0 text-slate-300" />

                    <span className="flex-1 text-sm font-medium text-slate-700">
                      Review team feedback
                    </span>

                    <span className="rounded-md bg-blue-50 px-2 py-1 text-[10px] font-semibold text-blue-600">
                      Upcoming
                    </span>
                  </div>

                </div>
              </div>

            </div>
          </div>

          {/* Floating AI Card */}
          <div className="absolute -left-7 top-28 hidden max-w-[205px] rounded-2xl border border-white bg-white p-4 shadow-xl shadow-violet-200/50 sm:block">

            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-violet-600 to-indigo-600 text-white">
                <Sparkles size={17} />
              </div>

              <span className="text-xs font-extrabold text-slate-800">
                AI Assistant
              </span>
            </div>

            <p className="mt-3 text-xs leading-5 text-slate-500">
              You're making great progress! Focus on your next priority.
            </p>

            <div className="mt-3 flex items-center gap-1 text-[10px] font-bold text-violet-600">
              <Zap size={12} />
              Smart suggestion
            </div>

          </div>

          {/* Floating Productivity Card */}
          <div className="absolute -bottom-6 -right-5 hidden items-center gap-3 rounded-2xl border border-white bg-white p-4 shadow-xl shadow-indigo-200/50 sm:flex">

            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-50 text-emerald-600">
              <TrendingUp size={22} />
            </div>

            <div>
              <p className="text-lg font-extrabold text-slate-900">
                92%
              </p>

              <p className="text-xs text-slate-400">
                Productivity score
              </p>
            </div>

          </div>

        </div>
      </div>

      {/* Bottom Brand Strip */}
      <div className="relative z-10 border-t border-slate-100 bg-white/70">

        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-10 gap-y-4 px-6 py-7 text-sm font-semibold text-slate-400">

          <span className="flex items-center gap-2">
            <Command size={17} />
            PLAN BETTER
          </span>

          <span className="flex items-center gap-2">
            <Layers3 size={17} />
            STAY ORGANIZED
          </span>

          <span className="flex items-center gap-2">
            <Sparkles size={17} />
            WORK SMARTER
          </span>

          <span className="flex items-center gap-2">
            <Check size={17} />
            ACHIEVE MORE
          </span>

        </div>
      </div>

    </section>
  );
};

export default Hero;
