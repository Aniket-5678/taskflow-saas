
import {
  Star,
  Quote,
  MessageSquareQuote,
  Sparkles,
} from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "Freelance Developer",
      initials: "RS",
      color: "from-blue-500 to-cyan-500",
      rating: 5,
      review:
        "TaskFlow AI has completely changed how I organize my daily work. Managing multiple projects feels much easier, and I can focus more on development.",
    },
    {
      name: "Priya Patel",
      role: "Product Designer",
      initials: "PP",
      color: "from-pink-500 to-rose-500",
      rating: 5,
      review:
        "I love the clean interface and simple task management experience. Everything is organized in one place, making my workflow much smoother.",
    },
    {
      name: "Amit Verma",
      role: "Startup Founder",
      initials: "AV",
      color: "from-violet-500 to-purple-600",
      rating: 5,
      review:
        "TaskFlow AI makes it easier to manage priorities and keep track of important work. It is a great productivity solution for busy professionals.",
    },
    {
      name: "Sneha Kulkarni",
      role: "Marketing Manager",
      initials: "SK",
      color: "from-orange-500 to-amber-500",
      rating: 5,
      review:
        "The organized dashboard and deadline tracking help me stay on top of my work. I really appreciate how simple the experience feels.",
    },
    {
      name: "Arjun Mehta",
      role: "Software Engineer",
      initials: "AM",
      color: "from-emerald-500 to-green-600",
      rating: 5,
      review:
        "A clean and useful platform for managing tasks. I like having my priorities and progress visible without unnecessary complexity.",
    },
    {
      name: "Neha Desai",
      role: "Business Consultant",
      initials: "ND",
      color: "from-fuchsia-500 to-purple-600",
      rating: 5,
      review:
        "TaskFlow AI offers a straightforward way to organize everyday responsibilities. The interface feels modern, intuitive, and easy to use.",
    },
  ];

  return (
    <section
      id="testimonials"
      className="relative overflow-hidden bg-gray-50 px-5 py-24 sm:px-8 lg:px-16"
    >
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />

      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-violet-50 px-4 py-2 text-sm font-semibold text-violet-600">
            <MessageSquareQuote size={16} />
            Testimonials
          </span>

          <h2 className="mt-6 text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
            What People Say About
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              TaskFlow AI
            </span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Discover how a better-organized workflow can make everyday work
            simpler, smarter, and more productive.
          </p>
        </div>

        {/* Rating Summary */}
        <div className="mx-auto mb-14 flex max-w-md flex-col items-center justify-center gap-3 rounded-2xl border border-gray-100 bg-white p-6 shadow-sm sm:flex-row sm:gap-6">
          <div className="text-center">
            <h3 className="text-4xl font-extrabold text-gray-900">
              5.0
            </h3>

            <div className="mt-2 flex justify-center gap-1 text-amber-400">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  size={17}
                  fill="currentColor"
                  strokeWidth={1.5}
                />
              ))}
            </div>
          </div>

          <div className="hidden h-14 w-px bg-gray-200 sm:block" />

          <div className="text-center sm:text-left">
            <p className="font-bold text-gray-900">
              Designed for Better Productivity
            </p>

            <p className="mt-1 text-sm text-gray-500">
              A simpler way to organize your work.
            </p>
          </div>
        </div>

        {/* Testimonial Cards */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-gray-100 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-100/40"
            >
              {/* Quote Icon */}
              <div className="absolute right-7 top-7 text-blue-100 transition-colors duration-300 group-hover:text-blue-200">
                <Quote size={38} fill="currentColor" />
              </div>

              {/* Stars */}
              <div className="mb-6 flex gap-1 text-amber-400">
                {Array.from({ length: testimonial.rating }).map(
                  (_, starIndex) => (
                    <Star
                      key={starIndex}
                      size={17}
                      fill="currentColor"
                      strokeWidth={1.5}
                    />
                  )
                )}
              </div>

              {/* Review */}
              <p className="min-h-32 text-sm leading-7 text-gray-600">
                "{testimonial.review}"
              </p>

              {/* Divider */}
              <div className="my-6 h-px bg-gray-100" />

              {/* User Profile */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br ${testimonial.color} text-sm font-bold text-white shadow-md`}
                >
                  {testimonial.initials}
                </div>

                <div>
                  <h3 className="font-bold text-gray-900">
                    {testimonial.name}
                  </h3>

                  <p className="mt-1 text-xs text-gray-500">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-600 to-violet-600 text-white shadow-lg shadow-blue-200">
            <Sparkles size={27} />
          </div>

          <h3 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
            Make Your Work More Productive
          </h3>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500 sm:text-base">
            Bring clarity to your everyday tasks and take the next step
            towards smarter work management.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Testimonials;
