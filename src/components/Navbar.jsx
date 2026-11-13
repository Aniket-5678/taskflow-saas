
import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  Zap,
  ArrowUpRight,
  User,
  LogOut,
  ChevronDown,
} from "lucide-react";

import { getCurrentUser, logoutUser } from "../utils/auth";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);

  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: "Features", href: "/#features" },
    { name: "How it works", href: "/#how-it-works" },
    { name: "About", href: "/about" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Contact", href: "/#contact" },
    { name: "Testimonials", href: "/#testimonials" },
  ];

  // Check logged-in user
  useEffect(() => {
    const updateUser = () => {
      setCurrentUser(getCurrentUser());
    };

    updateUser();

    window.addEventListener("storage", updateUser);

    return () => {
      window.removeEventListener("storage", updateUser);
    };
  }, [location.pathname]);

  // Close menus when route changes
  useEffect(() => {
    setMenuOpen(false);
    setProfileOpen(false);
  }, [location.pathname]);

  // Logout
  const handleLogout = () => {
    logoutUser();

    setCurrentUser(null);
    setProfileOpen(false);
    setMenuOpen(false);

    navigate("/signin", { replace: true });
  };

  const userName = currentUser?.name || "User";
  const userEmail = currentUser?.email || "";

  // Render navigation links
  const renderNavLinks = (isMobile = false) => (
    <>
      {navLinks.map((link) => {
        const className = `${
          isMobile
            ? "text-sm font-medium text-gray-700 hover:text-indigo-600"
            : "text-sm font-medium text-gray-600 transition hover:text-indigo-600"
        }`;

        if (link.name === "About") {
          return (
            <Link
              key={link.name}
              to="/about"
              onClick={() => isMobile && setMenuOpen(false)}
              className={className}
            >
              {link.name}
            </Link>
          );
        }

        // Other links navigate to Home page sections
        return (
          <a
            key={link.name}
            href={link.href}
            onClick={() => isMobile && setMenuOpen(false)}
            className={className}
          >
            {link.name}
          </a>
        );
      })}
    </>
  );

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-gray-100 bg-white/90 backdrop-blur-xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">

        {/* Logo */}
        <Link
          to="/"
          onClick={() => {
            setMenuOpen(false);
            setProfileOpen(false);
          }}
          className="flex items-center gap-2.5"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-lg shadow-indigo-200">
            <Zap size={22} fill="currentColor" />
          </div>

          <span className="text-xl font-bold tracking-tight text-gray-900">
            TaskFlow<span className="text-indigo-600">.</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {renderNavLinks()}
        </div>

        {/* Desktop Authentication */}
        <div className="hidden items-center gap-4 md:flex">

          {currentUser ? (
            <div className="relative">

              {/* Profile Button */}
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-3 py-2 transition hover:border-indigo-200 hover:bg-indigo-50"
              >
                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-indigo-100 text-sm font-bold uppercase text-indigo-700">
                  {userName.charAt(0)}
                </div>

                <div className="text-left">
                  <p className="max-w-[120px] truncate text-sm font-semibold text-gray-800">
                    {userName}
                  </p>
                  <p className="text-xs text-gray-500">
                    My Account
                  </p>
                </div>

                <ChevronDown
                  size={16}
                  className={`text-gray-500 transition ${
                    profileOpen ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* Profile Dropdown */}
              {profileOpen && (
                <div className="absolute right-0 top-14 w-64 overflow-hidden rounded-xl border border-gray-100 bg-white shadow-xl">

                  <div className="border-b border-gray-100 p-4">
                    <p className="font-semibold text-gray-900">
                      {userName}
                    </p>

                    <p className="mt-1 truncate text-xs text-gray-500">
                      {userEmail}
                    </p>
                  </div>

                  <div className="p-2">
                    <div className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-gray-600">
                      <User size={17} />
                      <span>My Profile</span>
                    </div>

                    <button
                      onClick={handleLogout}
                      className="flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-semibold text-red-600 transition hover:bg-red-50"
                    >
                      <LogOut size={17} />
                      Logout
                    </button>
                  </div>

                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                to="/signin"
                className="text-sm font-semibold text-gray-700 transition hover:text-indigo-600"
              >
                Sign in
              </Link>

              <Link
                to="/signup"
                className="group flex items-center gap-2 rounded-xl bg-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-indigo-200 transition hover:bg-indigo-700"
              >
                Get Started

                <ArrowUpRight
                  size={16}
                  className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="rounded-lg p-2 text-gray-700 hover:bg-gray-100 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

      </nav>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-5 py-5 shadow-lg md:hidden">

          <div className="flex flex-col gap-5">

            {renderNavLinks(true)}

            <div className="mt-2 border-t border-gray-100 pt-4">

              {currentUser ? (
                <div>

                  <div className="mb-4 flex items-center gap-3">

                    <div className="flex h-11 w-11 items-center justify-center rounded-full bg-indigo-100 font-bold uppercase text-indigo-700">
                      {userName.charAt(0)}
                    </div>

                    <div className="min-w-0">
                      <p className="font-semibold text-gray-900">
                        {userName}
                      </p>

                      <p className="truncate text-xs text-gray-500">
                        {userEmail}
                      </p>
                    </div>

                  </div>

                  <button
                    onClick={handleLogout}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-red-50 py-3 text-sm font-semibold text-red-600 transition hover:bg-red-100"
                  >
                    <LogOut size={17} />
                    Logout
                  </button>

                </div>
              ) : (
                <div className="flex gap-3">

                  <Link
                    to="/signin"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 rounded-xl border border-gray-200 py-3 text-center text-sm font-semibold text-gray-700 transition hover:border-indigo-500 hover:text-indigo-600"
                  >
                    Sign in
                  </Link>

                  <Link
                    to="/signup"
                    onClick={() => setMenuOpen(false)}
                    className="flex-1 rounded-xl bg-indigo-600 py-3 text-center text-sm font-semibold text-white transition hover:bg-indigo-700"
                  >
                    Get Started
                  </Link>

                </div>
              )}

            </div>
          </div>
        </div>
      )}

    </header>
  );
}

export default Navbar;
