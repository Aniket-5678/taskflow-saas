
import { useState } from "react";
import {
  Check,
  X,
  Sparkles,
  Zap,
  Crown,
  Users,
  ArrowRight,
  ShieldCheck,
  Star,
} from "lucide-react";

import { getCurrentUser } from "../utils/auth";

const Pricing = () => {
  const [billing, setBilling] = useState("monthly");
  const [selectedPlan, setSelectedPlan] = useState("");

  const currentUser = getCurrentUser();
  const isLoggedIn = Boolean(currentUser);

  const plans = [
    {
      name: "Free",
      description: "Perfect for getting started with task management.",
      icon: Zap,
      monthlyPrice: 0,
      yearlyPrice: 0,
      period: "forever",
      color: "from-slate-500 to-slate-700",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700",
      popular: false,
      features: [
        { text: "Up to 10 active tasks", included: true },
        { text: "Basic task management", included: true },
        { text: "Task priority management", included: true },
        { text: "Basic dashboard", included: true },
        { text: "AI task assistance", included: false },
        { text: "Advanced analytics", included: false },
        { text: "Team collaboration", included: false },
      ],
    },
    {
      name: "Pro",
      description: "Everything you need to maximize your productivity.",
      icon: Crown,
      monthlyPrice: 499,
      yearlyPrice: 3999,
      period: "per month",
      color: "from-blue-600 to-violet-600",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700",
      popular: true,
      features: [
        { text: "Unlimited active tasks", included: true },
        { text: "Advanced task management", included: true },
        { text: "Priority-based organization", included: true },
        { text: "AI task assistance", included: true },
        { text: "Productivity analytics", included: true },
        { text: "Deadline reminders", included: true },
        { text: "Team collaboration", included: false },
      ],
    },
    {
      name: "Team",
      description: "Built for teams that want to achieve more together.",
      icon: Users,
      monthlyPrice: 999,
      yearlyPrice: 7999,
      period: "per month",
      color: "from-fuchsia-600 to-purple-700",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700",
      popular: false,
      features: [
        { text: "Everything in Pro", included: true },
        { text: "Unlimited active tasks", included: true },
        { text: "Team collaboration", included: true },
        { text: "Shared project workspace", included: true },
        { text: "Team productivity insights", included: true },
        { text: "Advanced task assignments", included: true },
        { text: "Priority support", included: true },
      ],
    },
  ];

  const handlePlanSelect = (planName) => {
    setSelectedPlan(planName);
  };

  return (
    <section
      id="pricing"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-32 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-20 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <Sparkles size={16} />
            Simple & Transparent Pricing
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Choose the Perfect Plan
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              For Your Productivity
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Start for free and upgrade whenever you need more power.
            Get the tools you need to organize your work and achieve more.
          </p>
        </div>

        {/* Billing Toggle */}
        <div className="mb-14 flex flex-col items-center justify-center gap-4">
          <div className="flex items-center gap-3 rounded-full border border-gray-200 bg-gray-50 p-1.5 shadow-sm">
            <button
              onClick={() => {
                setBilling("monthly");
                setSelectedPlan("");
              }}
              className={`rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                billing === "monthly"
                  ? "bg-white text-gray-900 shadow-md"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Monthly
            </button>

            <button
              onClick={() => {
                setBilling("yearly");
                setSelectedPlan("");
              }}
              className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ${
                billing === "yearly"
                  ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg"
                  : "text-gray-500 hover:text-gray-900"
              }`}
            >
              Yearly
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-xs font-bold text-emerald-700">
                Save 33%
              </span>
            </button>
          </div>

          <p className="text-xs text-gray-400">
            Flexible plans. Upgrade whenever you need.
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2 lg:grid-cols-3">

          {plans.map((plan) => {
            const Icon = plan.icon;

            const price =
              billing === "monthly"
                ? plan.monthlyPrice
                : plan.yearlyPrice;

            const isSelected = selectedPlan === plan.name;

            return (
              <div
                key={plan.name}
                className={`group relative flex flex-col rounded-3xl border bg-white p-8 transition-all duration-300 hover:-translate-y-2 ${
                  plan.popular
                    ? "border-blue-500 shadow-2xl shadow-blue-200/60 lg:scale-105 lg:z-10"
                    : "border-gray-200 shadow-lg shadow-gray-100 hover:border-blue-200 hover:shadow-xl"
                }`}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2 text-xs font-bold text-white shadow-lg">
                    <Star size={14} fill="currentColor" />
                    MOST POPULAR
                  </div>
                )}

                {/* Plan Header */}
                <div className="mb-7">
                  <div className="flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-2xl ${plan.iconBg}`}
                    >
                      <Icon
                        size={27}
                        className={plan.iconColor}
                      />
                    </div>

                    {plan.popular && (
                      <span className="rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                        Best Value
                      </span>
                    )}
                  </div>

                  <h3 className="mt-6 text-2xl font-extrabold text-gray-900">
                    {plan.name}
                  </h3>

                  <p className="mt-2 min-h-12 text-sm leading-6 text-gray-500">
                    {plan.description}
                  </p>
                </div>

                {/* Price */}
                <div className="mb-8 border-b border-gray-100 pb-8">
                  <div className="flex items-baseline gap-1">
                    <span className="text-4xl font-extrabold tracking-tight text-gray-900">
                      ₹{price.toLocaleString("en-IN")}
                    </span>

                    <span className="text-sm text-gray-400">
                      {plan.monthlyPrice === 0
                        ? "/ forever"
                        : billing === "monthly"
                          ? "/ month"
                          : "/ year"}
                    </span>
                  </div>

                  {plan.monthlyPrice > 0 && billing === "yearly" && (
                    <p className="mt-2 text-xs font-medium text-emerald-600">
                      Equivalent to ₹
                      {Math.round(price / 12).toLocaleString("en-IN")} / month
                      when billed yearly
                    </p>
                  )}

                  {plan.monthlyPrice === 0 && (
                    <p className="mt-2 text-xs text-gray-400">
                      No credit card required
                    </p>
                  )}
                </div>

                {/* CTA */}
                {isLoggedIn ? (
                  <button
                    onClick={() => handlePlanSelect(plan.name)}
                    className={`mb-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold transition-all duration-300 ${
                      isSelected
                        ? "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200"
                        : plan.popular
                          ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:brightness-110"
                          : "border border-gray-200 bg-gray-50 text-gray-800 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    {isSelected ? (
                      <>
                        <Check size={18} />
                        Selected
                      </>
                    ) : (
                      <>
                        Choose {plan.name}
                        <ArrowRight size={17} />
                      </>
                    )}
                  </button>
                ) : (
                  <a
                    href="/signup"
                    className={`mb-8 flex w-full items-center justify-center gap-2 rounded-xl px-5 py-4 text-sm font-bold transition-all duration-300 ${
                      plan.popular
                        ? "bg-gradient-to-r from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-200 hover:shadow-xl hover:brightness-110"
                        : "border border-gray-200 bg-gray-50 text-gray-800 hover:border-blue-300 hover:bg-blue-50"
                    }`}
                  >
                    Get Started
                    <ArrowRight size={17} />
                  </a>
                )}

                {/* Features */}
                <div className="flex-1">
                  <p className="mb-5 text-xs font-bold uppercase tracking-widest text-gray-400">
                    What's included
                  </p>

                  <ul className="space-y-4">
                    {plan.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start gap-3"
                      >
                        {feature.included ? (
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
                            <Check size={13} strokeWidth={3} />
                          </span>
                        ) : (
                          <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gray-100 text-gray-400">
                            <X size={13} />
                          </span>
                        )}

                        <span
                          className={`text-sm ${
                            feature.included
                              ? "text-gray-600"
                              : "text-gray-400"
                          }`}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Bottom Decoration */}
                <div
                  className={`mt-8 h-1 w-full rounded-full bg-gradient-to-r ${plan.color} opacity-70`}
                />
              </div>
            );
          })}
        </div>

        {/* Logged-in Plan Selection Feedback */}
        {isLoggedIn && selectedPlan && (
          <div className="mx-auto mt-10 max-w-2xl rounded-2xl border border-emerald-200 bg-emerald-50 p-5 text-center">
            <div className="flex items-center justify-center gap-2 font-bold text-emerald-700">
              <ShieldCheck size={20} />
              {selectedPlan} plan selected!
            </div>

            <p className="mt-2 text-sm leading-6 text-emerald-700">
              {selectedPlan === "Free" ? "Your free plan is ready to explore." : `You selected the ${selectedPlan} plan. Plan details are ready whenever you are.`}
            </p>
          </div>
        )}

        {/* Trust Section */}
        <div className="mt-20 border-t border-gray-100 pt-10">
          <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-center">
            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <ShieldCheck size={19} className="text-emerald-500" />
              Simple & Transparent Pricing
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Zap size={19} className="text-blue-500" />
              Easy to Get Started
            </div>

            <div className="flex items-center gap-2 text-sm font-medium text-gray-500">
              <Sparkles size={19} className="text-violet-500" />
              Upgrade Anytime
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;
