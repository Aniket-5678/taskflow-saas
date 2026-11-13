
import { useState } from "react";
import {
  ChevronDown,
  MessageCircleQuestion,
  Sparkles,
  HelpCircle,
} from "lucide-react";
import { getCurrentUser } from "../utils/auth";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Check logged-in user
  const currentUser = getCurrentUser();
  const isLoggedIn = Boolean(currentUser);

  const faqs = [
    {
      question: "What is TaskFlow AI?",
      answer:
        "TaskFlow AI is a smart task management platform designed to help you organize your daily tasks, manage priorities, track deadlines, and improve your productivity.",
    },
    {
      question: "Is TaskFlow AI free to use?",
      answer:
        "Yes! TaskFlow AI offers a free plan that allows you to get started with basic task management. You can explore other plans if you need additional features.",
    },
    {
      question: "How does AI-powered task management work?",
      answer:
        "AI-powered task management is designed to help users organize their work, identify priorities, and plan tasks more efficiently. Available AI features depend on your selected plan.",
    },
    {
      question: "Can I manage multiple tasks at once?",
      answer:
        "Yes. You can organize multiple tasks, set priorities, manage deadlines, and track your progress from your workspace.",
    },
    {
      question: "Can I change my subscription plan later?",
      answer:
        "Yes. You can choose a different subscription plan as your productivity needs change. Any billing or subscription changes will depend on the available account and payment features.",
    },
    {
      question: "Is my account information protected?",
      answer:
        "TaskFlow AI provides account authentication to help protect access to your workspace. Always use a strong password and keep your login credentials private.",
    },
    {
      question: "Can I use TaskFlow AI on mobile devices?",
      answer:
        "Yes. The interface is designed to be responsive, allowing you to access TaskFlow AI on mobile phones, tablets, laptops, and desktop devices.",
    },
    {
      question: "How can I get started?",
      answer:
        "Simply create your account, access your workspace, and start adding your tasks. You can begin with the free plan and explore additional plans whenever you need them.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="relative overflow-hidden bg-white px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/50 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-100/50 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <MessageCircleQuestion size={16} />
            Frequently Asked Questions
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            Got Questions?
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              We've Got Answers.
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Find answers to common questions about TaskFlow AI, its features,
            pricing, and how to get started.
          </p>
        </div>

        {/* FAQ Content */}
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-12 lg:grid-cols-3">

          {/* Left Information Card */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-xl shadow-blue-200/50 lg:sticky lg:top-24">
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-white/10 blur-2xl" />

            <div className="relative">
              <div className="mb-7 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15 backdrop-blur-sm">
                <HelpCircle size={30} />
              </div>

              <h3 className="text-2xl font-extrabold">
                Still have questions?
              </h3>

              <p className="mt-4 text-sm leading-7 text-blue-100">
                Can't find the answer you're looking for? We're here to help
                you understand TaskFlow AI better.
              </p>

              <div className="my-8 h-px bg-white/20" />

              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15">
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-sm font-bold">
                    TaskFlow AI Support
                  </p>

                  <p className="text-xs text-blue-100">
                    Your productivity matters.
                  </p>
                </div>
              </div>

              <a
                href="mailto:support@taskflowai.com"
                className="mt-8 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white px-5 py-3.5 text-sm font-bold text-blue-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-50"
              >
                Contact Support
                <MessageCircleQuestion size={17} />
              </a>

              <p className="mt-3 text-center text-xs text-blue-100">
                Replace this demo email with your real support address.
              </p>
            </div>
          </div>

          {/* Right Accordion */}
          <div className="space-y-4 lg:col-span-2">
            {faqs.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`overflow-hidden rounded-2xl border transition-all duration-300 ${
                    isOpen
                      ? "border-blue-200 bg-blue-50/50 shadow-lg shadow-blue-100/40"
                      : "border-gray-200 bg-white hover:border-blue-200 hover:shadow-md"
                  }`}
                >
                  <button
                    type="button"
                    onClick={() => toggleFAQ(index)}
                    aria-expanded={isOpen}
                    className="flex w-full items-center justify-between gap-5 px-6 py-6 text-left sm:px-7"
                  >
                    <div className="flex items-center gap-4">
                      <span
                        className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-xl text-xs font-bold transition-all duration-300 ${
                          isOpen
                            ? "bg-gradient-to-br from-blue-600 to-violet-600 text-white"
                            : "bg-gray-100 text-gray-500"
                        }`}
                      >
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span
                        className={`text-sm font-bold sm:text-base ${
                          isOpen ? "text-blue-700" : "text-gray-800"
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "rotate-180 bg-blue-600 text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <ChevronDown size={19} />
                    </span>
                  </button>

                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="border-t border-blue-100 px-6 pb-6 pt-5 sm:px-7 sm:pl-[4.75rem]">
                        <p className="text-sm leading-7 text-gray-600">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Ready to simplify your workflow?
          </h3>

          <p className="mt-3 text-sm text-gray-500 sm:text-base">
            Start organizing your tasks and make every day more productive.
          </p>

          <a
            href={isLoggedIn ? "#pricing" : "/signup"}
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
          >
            {isLoggedIn ? "View Pricing Plans" : "Get Started Today"}
            <Sparkles size={17} />
          </a>
        </div>

      </div>
    </section>
  );
};

export default FAQ;
