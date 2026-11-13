
import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Zap,
  Eye,
  EyeOff,
  Mail,
  Lock,
  ArrowRight,
  CheckCircle2,
  Layers,
  ShieldCheck,
  Sparkles,
} from "lucide-react";

import { loginUser, isAuthenticated } from "../utils/auth";
import toast from "react-hot-toast";

function SignIn() {
  const navigate = useNavigate();
  const location = useLocation();

  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    email: location.state?.email || "",
    password: "",
  });

  const [error, setError] = useState("");

  const [success, setSuccess] = useState(
    location.state?.registered
      ? "Account created successfully! Please sign in."
      : ""
  );

  useEffect(() => {
    if (location.state?.registered) toast.success("Account created successfully! Please sign in.");
  }, [location.state]);

  useEffect(() => {
    if (isAuthenticated()) {
      navigate("/", { replace: true });
    }
  }, [navigate]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setError("");
    setSuccess("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setSuccess("");

    if (!formData.email.trim() || !formData.password) {
      setError("Please fill in all required fields.");
      toast.error("Please fill in all required fields.");
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError("Please enter a valid email address.");
      toast.error("Please enter a valid email address.");
      return;
    }

    try {
      setLoading(true);

      await loginUser({
        email: formData.email,
        password: formData.password,
        rememberMe,
      });

      navigate("/", { replace: true });
    } catch (err) {
      setError(err.message || "Something went wrong. Please try again.");
      toast.error(err.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-white lg:grid lg:grid-cols-2">

      {/* Left Branding Section */}
      <div className="relative hidden min-h-screen overflow-hidden bg-[#171447] px-12 py-10 text-white lg:flex lg:flex-col lg:justify-between xl:px-20">

        {/* Background Effects */}
        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-indigo-500/30 blur-[100px]" />
        <div className="absolute -bottom-20 right-0 h-96 w-96 rounded-full bg-purple-500/20 blur-[120px]" />

        {/* Logo */}
        <Link to="/" className="relative z-10 flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-indigo-500">
            <Zap size={24} fill="white" />
          </div>

          <span className="text-2xl font-bold tracking-tight">
            TaskFlow<span className="text-indigo-400">.</span>
          </span>
        </Link>

        {/* Main Content */}
        <div className="relative z-10 my-12 max-w-xl">

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm text-indigo-100">
            <Sparkles size={15} />
            Your productivity starts here
          </div>

          <h1 className="text-5xl font-bold leading-tight xl:text-6xl">
            Work smarter.
            <br />
            Achieve more.
            <br />
            <span className="text-indigo-400">Every day.</span>
          </h1>

          <p className="mt-6 max-w-md text-base leading-8 text-indigo-100/70">
            Bring your projects, teams, and tasks together in one
            powerful workspace. Focus on what matters and let
            TaskFlow handle the rest.
          </p>

          {/* Feature Highlights */}
          <div className="mt-12 space-y-6">

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <Layers size={22} className="text-indigo-300" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Everything in one place
                </h3>

                <p className="mt-1 text-sm text-indigo-100/60">
                  Manage all your projects effortlessly.
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <ShieldCheck size={22} className="text-indigo-300" />
              </div>

              <div>
                <h3 className="font-semibold">
                  Built for productivity
                </h3>

                <p className="mt-1 text-sm text-indigo-100/60">
                  Stay organized and achieve your goals.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Text */}
        <div className="relative z-10 flex items-center justify-between border-t border-white/10 pt-6 text-sm text-indigo-100/50">
          <p>© 2026 TaskFlow. All rights reserved.</p>
          <p>Built for better work.</p>
        </div>
      </div>

      {/* Right Sign In Section */}
      <div className="flex min-h-screen flex-col justify-center px-5 py-10 sm:px-12 lg:px-16 xl:px-24">

        {/* Mobile Logo */}
        <Link to="/" className="mb-12 flex items-center gap-3 lg:hidden">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white">
            <Zap size={22} fill="white" />
          </div>

          <span className="text-2xl font-bold text-gray-900">
            TaskFlow<span className="text-indigo-600">.</span>
          </span>
        </Link>

        <div className="mx-auto w-full max-w-md">

          {/* Heading */}
          <div className="mb-9">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-indigo-600">
              Welcome Back
            </p>

            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Sign in to your account
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-500">
              Enter your details below to access your workspace
              and continue where you left off.
            </p>
          </div>

          {/* Success Message */}
          {success && (
            <div className="mb-5 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-sm text-green-700">
              <CheckCircle2 size={20} className="shrink-0" />
              <span>{success}</span>
            </div>
          )}

          {/* Error Message */}
          {error && (
            <div
              role="alert"
              className="mb-5 rounded-xl border border-red-200 bg-red-50 p-3 text-sm text-red-600"
            >
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Email */}
            <div>
              <label
                htmlFor="signin-email"
                className="mb-2 block text-sm font-semibold text-gray-700"
              >
                Email Address
              </label>

              <div className="relative">
                <Mail
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="signin-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label
                  htmlFor="signin-password"
                  className="block text-sm font-semibold text-gray-700"
                >
                  Password
                </label>

                <button
                  type="button"
                  onClick={() => {
                    setError("Password recovery is not connected yet.");
                    toast.error("Password recovery is not connected yet.");
                  }}
                  className="text-xs font-semibold text-indigo-600 hover:text-indigo-700"
                >
                  Forgot password?
                </button>
              </div>

              <div className="relative">
                <Lock
                  size={19}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                />

                <input
                  id="signin-password"
                  type={showPassword ? "text" : "password"}
                  name="password"
                  autoComplete="current-password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                  required
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-12 pr-12 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-indigo-500 focus:bg-white focus:ring-4 focus:ring-indigo-500/10"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword((prev) => !prev)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-700"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? (
                    <EyeOff size={19} />
                  ) : (
                    <Eye size={19} />
                  )}
                </button>
              </div>
            </div>

            {/* Remember Me */}
            <div className="flex items-center justify-between">
              <label className="flex cursor-pointer items-center gap-2.5 text-sm text-gray-600">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 accent-indigo-600"
                />
                Remember me
              </label>

              <span className="text-xs text-gray-400">
                Secure login
              </span>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-indigo-600 py-3.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:-translate-y-0.5 hover:bg-indigo-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-60"
            >
              {loading ? "Signing In..." : "Sign In"}

              {!loading && (
                <ArrowRight
                  size={18}
                  className="transition group-hover:translate-x-1"
                />
              )}
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-gray-200" />

            <span className="text-xs font-medium text-gray-400">
              OR CONTINUE WITH
            </span>

            <div className="h-px flex-1 bg-gray-200" />
          </div>

          {/* Google Demo Button */}
          <button
            type="button"
            onClick={() => {
              setError("Google authentication is not connected yet.");
              toast.error("Google authentication is not connected yet.");
            }}
            className="flex w-full items-center justify-center gap-3 rounded-xl border border-gray-200 py-3.5 text-sm font-semibold text-gray-700 transition hover:border-gray-300 hover:bg-gray-50"
          >
            <svg width="19" height="19" viewBox="0 0 48 48">
              <path
                fill="#EA4335"
                d="M24 9.5c3.54 0 6.71 1.22 9.21 3.6l6.85-6.85C35.9 2.38 30.47 0 24 0 14.62 0 6.51 5.38 2.56 13.22l7.98 6.19C12.43 13.72 17.74 9.5 24 9.5z"
              />
              <path
                fill="#4285F4"
                d="M46.98 24.55c0-1.57-.15-3.09-.38-4.55H24v9.02h12.94c-.58 2.96-2.26 5.48-4.76 7.18l7.73 6C44.42 38.1 46.98 31.95 46.98 24.55z"
              />
              <path
                fill="#FBBC05"
                d="M10.53 28.59A14.4 14.4 0 0 1 9.5 24c0-1.59.27-3.12.75-4.59l-7.98-6.19A23.9 23.9 0 0 0 0 24c0 3.87.93 7.52 2.56 10.78l7.97-6.19z"
              />
              <path
                fill="#34A853"
                d="M24 48c6.48 0 11.93-2.13 15.91-5.8l-7.73-6c-2.15 1.45-4.89 2.3-8.18 2.3-6.26 0-11.57-4.22-13.47-9.91l-7.97 6.19C6.51 42.62 14.62 48 24 48z"
              />
            </svg>

            Continue with Google
          </button>

          {/* Sign Up Link */}
          <p className="mt-8 text-center text-sm text-gray-500">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="font-semibold text-indigo-600 hover:text-indigo-700"
            >
              Create an account
            </Link>
          </p>

          {/* Footer */}
          <p className="mt-12 text-center text-xs text-gray-400">
            By continuing, you agree to our{" "}
            <a
              href="#terms"
              className="font-medium text-gray-600 hover:text-indigo-600"
            >
              Terms of Service
            </a>{" "}
            and{" "}
            <a
              href="#privacy"
              className="font-medium text-gray-600 hover:text-indigo-600"
            >
              Privacy Policy
            </a>.
          </p>

        </div>
      </div>
    </div>
  );
}

export default SignIn;
