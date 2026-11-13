
import {
  UserPlus,
  ListPlus,
  BrainCircuit,
  TrendingUp,
  ArrowRight,
  Sparkles,
} from "lucide-react";

import { getCurrentUser } from "../utils/auth";

const HowItWorks = () => {
  const currentUser = getCurrentUser();
  const isLoggedIn = Boolean(currentUser);

  const steps = [
    {
      number: "01",
      icon: UserPlus,
      title: "Create Your Account",
      description:
        "Create your workspace in seconds and get straight to your day.",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
    },
    {
      number: "02",
      icon: ListPlus,
      title: "Add Your Tasks",
      description:
        "Add a task, set a priority, and keep all your work in one place.",
      color: "from-violet-500 to-purple-600",
      bg: "bg-violet-50",
    },
    {
      number: "03",
      icon: BrainCircuit,
      title: "Let AI Help You",
      description:
        "Get a clearer view of what matters and decide what to do next.",
      color: "from-orange-500 to-amber-500",
      bg: "bg-orange-50",
    },
    {
      number: "04",
      icon: TrendingUp,
      title: "Track Your Progress",
      description:
        "Check off completed work and see your progress build over time.",
      color: "from-emerald-500 to-green-600",
      bg: "bg-emerald-50",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-gray-50 px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600">
            <Sparkles size={16} />
            Simple Process
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            How TaskFlow AI
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Works for You
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Capture work, choose what matters, and track your progress in one simple flow.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div key={step.number} className="relative group">
                {/* Connector */}
                {index !== steps.length - 1 && (
                  <div className="absolute left-[calc(50%+45px)] top-10 hidden h-0.5 w-[calc(100%-50px)] border-t-2 border-dashed border-gray-300 lg:block" />
                )}

                <div className="relative h-full rounded-2xl border border-gray-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/40">
                  {/* Step Number */}
                  <div className="absolute right-5 top-5 text-3xl font-extrabold text-gray-100 transition-colors duration-300 group-hover:text-blue-100">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div
                    className={`relative mx-auto mb-7 flex h-20 w-20 items-center justify-center rounded-3xl ${step.bg} transition-transform duration-300 group-hover:scale-110`}
                  >
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${step.color} text-white shadow-lg`}
                    >
                      <Icon size={27} strokeWidth={2} />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-gray-900">
                    {step.title}
                  </h3>

                  <p className="text-sm leading-7 text-gray-500">
                    {step.description}
                  </p>

                  {/* Bottom Indicator */}
                  <div className="mx-auto mt-7 h-1 w-12 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 group-hover:w-20" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold text-gray-900 sm:text-3xl">
            Your productivity journey starts here.
          </h3>

          <p className="mt-3 text-gray-500">
            Spend less time managing tasks and more time getting things done.
          </p>

          <a
            href={isLoggedIn ? "#pricing" : "/signup"}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {isLoggedIn ? "Explore Pricing Plans" : "Get Started Today"}
            <ArrowRight size={18} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
