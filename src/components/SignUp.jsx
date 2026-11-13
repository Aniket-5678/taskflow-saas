
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Zap,
  User,
  Mail,
  Lock,
  Eye,
  EyeOff,
  ArrowRight,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Check,
} from "lucide-react";
import { registerUser, isAuthenticated } from "../utils/auth";
import toast from "react-hot-toast";

function SignUp() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  if (isAuthenticated()) {
    navigate("/", { replace: true });
    return null;
  }

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError("");
  };

  const passwordChecks = [
    {
      label: "At least 8 characters",
      valid: formData.password.length >= 8,
    },
    {
      label: "One uppercase letter",
      valid: /[A-Z]/.test(formData.password),
    },
    {
      label: "One number",
      valid: /[0-9]/.test(formData.password),
    },
    {
      label: "One special character",
      valid: /[^A-Za-z0-9]/.test(formData.password),
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.name.trim()) {
      toast.error("Please enter your full name.");
      return setError("Please enter your full name.");
    }

    if (formData.name.trim().length < 2) {
      toast.error("Name must contain at least 2 characters.");
      return setError("Name must contain at least 2 characters.");
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error("Please enter a valid email address.");
      return setError("Please enter a valid email address.");
    }

    if (!passwordChecks.every((item) => item.valid)) {
      toast.error("Please create a stronger password.");
      return setError("Please create a stronger password.");
    }

    if (formData.password !== formData.confirmPassword) {
      toast.error("Passwords do not match.");
      return setError("Passwords do not match.");
    }

    if (!agreeTerms) {
      toast.error("Please accept the Terms and Privacy Policy.");
      return setError("Please accept the Terms and Privacy Policy.");
    }

    try {
      setLoading(true);

      await registerUser({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      });
      toast.success("Account created successfully!");

      navigate("/signin", {
        replace: true,
        state: {
          email: formData.email.trim().toLowerCase(),
          registered: true,
        },
      });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">

      {/* Left Branding */}
      <div className="relative hidden min-h-screen overflow-hidden bg-[#171447] px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-500/30 blur-[100px]" />
        <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />

        <Link to="/" className="relative z-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500">
            <Zap size={24} fill="white" />
          </div>
          <span className="text-2xl font-bold">
            TaskFlow<span className="text-indigo-400">.</span>
          </span>
        </Link>

        <div className="relative z-10 my-12 max-w-xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-indigo-100">
            <Sparkles size={15} />
            Start your productivity journey
          </div>

          <h1 className="text-5xl font-bold leading-tight xl:text-6xl">
            Make room for
            <br />
            <span className="text-indigo-400">great work.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-8 text-indigo-100/70">
            Create your free account and bring your tasks,
            projects and team collaboration into one
            beautiful workspace.
          </p>

          <div className="mt-12 space-y-6">
            {[
              "Organize projects in one workspace",
              "Collaborate with your entire team",
              "Track progress and meet your goals",
            ].map((item) => (
              <div key={item} className="flex items-center gap-4">
                <div className="rounded-full bg-indigo-500/20 p-2">
                  <Check size={18} className="text-indigo-300" />
                </div>
                <span className="text-sm text-indigo-100/80">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="relative z-10 flex justify-between border-t border-white/10 pt-6 text-sm text-indigo-100/50">
          <span>© 2026 TaskFlow. All rights reserved.</span>
          <span>Built for better work.</span>
        </div>
      </div>

      {/* Right Signup Form */}
      <div className="flex min-h-screen flex-col justify-center px-5 py-10 sm:px-12 lg:px-16 xl:px-24">

        <Link to="/" className="mb-10 flex items-center gap-3 lg:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Zap size={22} fill="white" />
          </div>
          <span className="text-2xl font-bold text-gray-900">
            TaskFlow<span className="text-indigo-600">.</span>
          </span>
        </Link>

        <div className="mx-auto w-full max-w-md">

          <div className="mb-8">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Get Started For Free
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Create your account
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Join TaskFlow and start managing your work smarter.
            </p>
          </div>

          {error && (
            <div className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* Full Name */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Full Name
              </label>

              <div className="relative">
                <User size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="text"
                  name="name"
                  autoComplete="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Enter your full name"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Email Address
              </label>

              <div className="relative">
                <Mail size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Password
              </label>

              <div className="relative">
                <Lock size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="new-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Create a strong password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  aria-label="Toggle password visibility"
                >
                  {showPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>

              {/* Password Requirements */}
              {formData.password && (
                <div className="mt-3 grid grid-cols-2 gap-2">
                  {passwordChecks.map((item) => (
                    <div key={item.label} className={`flex items-center gap-1.5 text-xs ${item.valid ? "text-green-600" : "text-gray-400"}`}>
                      <CheckCircle2 size={14} />
                      {item.label}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Confirm Password */}
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-700">
                Confirm Password
              </label>

              <div className="relative">
                <Lock size={19} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" />

                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  autoComplete="new-password"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="Re-enter your password"
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-12 text-sm outline-none transition focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400"
                  aria-label="Toggle confirm password visibility"
                >
                  {showConfirmPassword ? <EyeOff size={19} /> : <Eye size={19} />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <label className="flex cursor-pointer items-start gap-2.5 pt-1 text-sm leading-6 text-gray-500">
              <input
                type="checkbox"
                checked={agreeTerms}
                onChange={(e) => setAgreeTerms(e.target.checked)}
                className="mt-1 h-4 w-4 shrink-0 accent-indigo-600"
              />
              <span>
                I agree to the{" "}
                <a href="#terms" className="font-semibold text-indigo-600">
                  Terms of Service
                </a>{" "}
                and{" "}
                <a href="#privacy" className="font-semibold text-indigo-600">
                  Privacy Policy
                </a>.
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Creating Account..." : "Create Account"}
              {!loading && <ArrowRight size={18} className="transition group-hover:translate-x-1" />}
            </button>
          </form>

          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />
            <span className="text-xs font-medium text-gray-400">SECURE REGISTRATION</span>
            <div className="h-px flex-1 bg-gray-200" />
          </div>

          <div className="flex items-center justify-center gap-2 text-xs text-gray-400">
            <ShieldCheck size={16} className="text-green-500" />
            Your account details are protected in this demo.
          </div>

          <p className="mt-8 text-center text-sm text-gray-500">
            Already have an account?{" "}
            <Link to="/signin" className="font-semibold text-indigo-600 hover:text-indigo-700">
              Sign in
            </Link>
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignUp;
