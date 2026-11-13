
import {
  BrainCircuit,
  ListTodo,
  CalendarDays,
  BarChart3,
  ShieldCheck,
  Users,
  Zap,
  Sparkles,
} from "lucide-react";

import { getCurrentUser } from "../utils/auth";

const Features = () => {
  const currentUser = getCurrentUser();
  const isLoggedIn = Boolean(currentUser);

  const features = [
    {
      icon: BrainCircuit,
      title: "AI-Powered Task Management",
      description:
        "Let AI organize your tasks, suggest priorities, and help you manage your daily workflow more efficiently.",
      color: "from-violet-500 to-purple-600",
      bg: "bg-violet-50",
    },
    {
      icon: ListTodo,
      title: "Smart Task Organization",
      description:
        "Create, organize, and manage all your tasks in one place. Keep your projects structured and organized.",
      color: "from-blue-500 to-cyan-500",
      bg: "bg-blue-50",
    },
    {
      icon: CalendarDays,
      title: "Deadline Tracking",
      description:
        "Set deadlines, track upcoming tasks, and stay on schedule without missing important work.",
      color: "from-orange-500 to-amber-500",
      bg: "bg-orange-50",
    },
    {
      icon: BarChart3,
      title: "Productivity Analytics",
      description:
        "Track your progress, monitor completed tasks, and understand how efficiently you manage your time.",
      color: "from-emerald-500 to-green-600",
      bg: "bg-emerald-50",
    },
    {
      icon: Users,
      title: "Team Collaboration",
      description:
        "Work together with your team, share responsibilities, and keep everyone updated on project progress.",
      color: "from-pink-500 to-rose-500",
      bg: "bg-pink-50",
    },
    {
      icon: ShieldCheck,
      title: "Secure Workspace",
      description:
        "Keep your workspace organized with user authentication and protected access to your account.",
      color: "from-indigo-500 to-blue-600",
      bg: "bg-indigo-50",
    },
    {
      icon: Zap,
      title: "Faster Workflow",
      description:
        "Reduce repetitive work, simplify task management, and spend more time on what matters most.",
      color: "from-yellow-500 to-orange-500",
      bg: "bg-yellow-50",
    },
    {
      icon: Sparkles,
      title: "Simple & Modern Interface",
      description:
        "Enjoy a clean and intuitive dashboard designed to make your everyday task management effortless.",
      color: "from-fuchsia-500 to-purple-600",
      bg: "bg-fuchsia-50",
    },
  ];

  return (
    <section
      id="features"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-2xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <Sparkles size={16} />
            Powerful Features
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Everything You Need to
            <span className="block bg-gradient-to-r from-blue-600 to-violet-600 bg-clip-text text-transparent">
              Work Smarter
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-gray-500 sm:text-lg">
            Take control of your productivity with intelligent tools designed
            to simplify your tasks, organize your workflow, and help you achieve
            more every day.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;

            return (
              <div
                key={index}
                className="group rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/50"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.bg} transition-transform duration-300 group-hover:scale-110`}
                >
                  <div
                    className={`flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br ${feature.color} text-white shadow-md`}
                  >
                    <Icon size={23} strokeWidth={2} />
                  </div>
                </div>

                <h3 className="mb-3 text-lg font-bold text-gray-900">
                  {feature.title}
                </h3>

                <p className="text-sm leading-7 text-gray-500">
                  {feature.description}
                </p>

                <div className="mt-6 h-1 w-10 rounded-full bg-gradient-to-r from-blue-500 to-violet-500 transition-all duration-300 group-hover:w-20" />
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-violet-600 px-6 py-10 text-center sm:px-12">
          <h3 className="text-2xl font-bold text-white sm:text-3xl">
            Ready to boost your productivity?
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-6 text-blue-100 sm:text-base">
            Bring your tasks, projects, and workflow together with TaskFlow AI.
          </p>

          <a
            href={isLoggedIn ? "#pricing" : "/signup"}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-white px-7 py-3.5 text-sm font-bold text-blue-600 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
          >
            {isLoggedIn ? "Explore Pricing Plans" : "Get Started"}
            <Sparkles size={17} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Features;
