import {
  ArrowRight,
  Check,
  Compass,
  HeartHandshake,
  Layers3,
  Sparkles,
  Target,
  Zap,
} from "lucide-react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { getCurrentUser } from "../utils/auth";

const principles = [
  {
    icon: Target,
    title: "Clarity over clutter",
    copy: "Your next step should be easy to spot. Keep plans simple and priorities clear.",
    tone: "bg-blue-50 text-blue-600",
  },
  {
    icon: HeartHandshake,
    title: "Progress with purpose",
    copy: "Good tools make room for meaningful work, steady momentum, and a healthier pace.",
    tone: "bg-violet-50 text-violet-600",
  },
  {
    icon: Sparkles,
    title: "Helpful by design",
    copy: "AI should make planning feel lighter while keeping you in control of your work.",
    tone: "bg-amber-50 text-amber-600",
  },
];

const About = () => {
  const isLoggedIn = Boolean(getCurrentUser());

  return (
  <div className="min-h-screen overflow-hidden bg-white text-gray-900">
    <Navbar />

    <main className="pt-20">
      <section className="relative isolate overflow-hidden bg-[#10102e] px-5 py-20 text-white sm:px-8 sm:py-28 lg:px-16">
        <div className="pointer-events-none absolute -right-32 -top-40 h-[34rem] w-[34rem] rounded-full bg-indigo-500/20 blur-[110px]" />
        <div className="pointer-events-none absolute -bottom-48 left-1/4 h-96 w-96 rounded-full bg-blue-500/20 blur-[100px]" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-indigo-100">
              <Sparkles size={16} className="text-indigo-300" />
              A little more focus. A lot more flow.
            </div>
            <h1 className="mt-7 max-w-2xl text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Make space for
              <span className="mt-2 block bg-gradient-to-r from-blue-300 via-indigo-300 to-violet-300 bg-clip-text text-transparent">
                your best work.
              </span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-8 text-indigo-100/75 sm:text-lg">
              TaskFlow AI brings tasks, priorities, and thoughtful AI assistance together—so you can spend less energy organizing work and more energy moving it forward.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Link to={isLoggedIn ? "/#pricing" : "/signup"} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-950 shadow-lg transition hover:-translate-y-0.5 hover:bg-indigo-50">
                {isLoggedIn ? "Explore pricing" : "Start your journey"} <ArrowRight size={17} />
              </Link>
              <Link to="/#how-it-works" className="inline-flex items-center justify-center rounded-xl border border-white/20 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10">
                See how it works
              </Link>
            </div>
            <div className="mt-9 flex flex-wrap gap-x-6 gap-y-3 text-sm text-indigo-100/70">
              {["Simple task planning", "AI-guided focus", "Progress you can see"].map((item) => (
                <span key={item} className="inline-flex items-center gap-2"><Check size={16} className="text-emerald-300" />{item}</span>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-lg">
            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-indigo-400/20 to-violet-400/10 blur-2xl" />
            <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.08] p-5 shadow-2xl backdrop-blur-xl sm:p-7">
              <div className="flex items-center justify-between border-b border-white/10 pb-5">
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-indigo-200/70">A calmer kind of busy</p>
                  <h2 className="mt-2 text-xl font-bold">Today, with intention</h2>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-indigo-400/20 text-indigo-200"><Zap size={21} /></div>
              </div>
              <div className="mt-5 space-y-3">
                {[
                  ["Plan the week", "Focus", "bg-violet-300"],
                  ["Finish the product brief", "Priority", "bg-amber-300"],
                  ["Share project update", "Next up", "bg-emerald-300"],
                ].map(([task, label, color], index) => (
                  <div key={task} className="flex items-center gap-3 rounded-2xl border border-white/[0.08] bg-[#17173b]/80 p-4">
                    <span className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${index === 0 ? "border-emerald-300 bg-emerald-300 text-[#10102e]" : "border-white/20"}`}>
                      {index === 0 && <Check size={14} strokeWidth={3} />}
                    </span>
                    <span className={`h-2 w-2 rounded-full ${color}`} />
                    <span className={`min-w-0 flex-1 truncate text-sm font-medium ${index === 0 ? "text-indigo-100/50 line-through" : "text-white"}`}>{task}</span>
                    <span className="hidden rounded-full bg-white/[0.07] px-2.5 py-1 text-[11px] text-indigo-100/70 sm:block">{label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 flex items-center gap-3 rounded-2xl bg-gradient-to-r from-indigo-500/20 to-violet-500/20 p-4">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-indigo-300/15 text-indigo-200"><Sparkles size={17} /></div>
                <p className="text-sm leading-6 text-indigo-50/80">A clear next step can turn a busy day into a focused one.</p>
              </div>
              <div className="mt-5 flex items-center justify-between text-xs text-indigo-100/60">
                <span>One step at a time</span><span>Made for momentum</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-20 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-indigo-100 bg-indigo-50 px-4 py-2 text-sm font-semibold text-indigo-600"><Compass size={16} /> Why TaskFlow</span>
            <h2 className="mt-5 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">Work feels better when the next step is clear.</h2>
          </div>
          <div className="space-y-5 text-base leading-8 text-gray-600 sm:text-lg">
            <p>Most days don’t need another complicated system. They need one dependable place to capture what matters, make a plan, and keep moving.</p>
            <p>TaskFlow AI is built around that simple idea. It brings everyday task management and helpful AI guidance into one workspace that feels easy to return to.</p>
          </div>
        </div>
      </section>

      <section className="bg-gray-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-16">
        <div className="mx-auto max-w-7xl">
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-violet-100 bg-white px-4 py-2 text-sm font-semibold text-violet-600"><Layers3 size={16} /> What guides us</span>
            <h2 className="mt-5 text-3xl font-extrabold tracking-tight sm:text-4xl">Built around the way work happens.</h2>
            <p className="mt-4 text-base leading-7 text-gray-500">A useful workspace should make the work feel lighter, from the first idea to the final checkmark.</p>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {principles.map(({ icon: Icon, title, copy, tone }, index) => (
              <article key={title} className="group rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-8">
                <div className={`flex h-14 w-14 items-center justify-center rounded-2xl ${tone} transition group-hover:scale-105`}><Icon size={25} /></div>
                <p className="mt-7 text-xs font-bold uppercase tracking-[0.18em] text-gray-300">0{index + 1}</p>
                <h3 className="mt-2 text-xl font-bold text-gray-900">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-500">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-16 sm:px-8 sm:py-20 lg:px-16">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-7 rounded-[2rem] bg-gradient-to-r from-indigo-700 via-indigo-600 to-violet-600 p-8 text-white shadow-xl shadow-indigo-200/60 sm:p-12 md:flex-row md:items-center">
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-indigo-100">Your next good day starts here</p>
            <h2 className="mt-3 text-3xl font-extrabold tracking-tight sm:text-4xl">Bring a little more flow to your work.</h2>
            <p className="mt-3 text-sm leading-7 text-indigo-100/80 sm:text-base">Create your workspace and take the first small step toward a clearer day.</p>
          </div>
          <Link to={isLoggedIn ? "/#pricing" : "/signup"} className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-bold text-indigo-700 transition hover:-translate-y-0.5 hover:bg-indigo-50">{isLoggedIn ? "Explore pricing" : "Get started"} <ArrowRight size={17} /></Link>
        </div>
      </section>
    </main>

    <Footer />
  </div>
  );
};

export default About;
