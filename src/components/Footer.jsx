
import { Link } from "react-router-dom";

const Footer = () => {
  const productLinks = [
    { name: "Features", href: "/#features" },
    { name: "How It Works", href: "/#how-it-works" },
    { name: "Pricing", href: "/#pricing" },
    { name: "Testimonials", href: "/#testimonials" },
    { name: "FAQ", href: "/#faq" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Support", href: "/contact" },
  ];

  const resourceLinks = [
    { name: "Help Center", href: "/#faq" },
    { name: "Getting Started", href: "/#how-it-works" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms & Conditions", href: "/terms" },
  ];

  return (
    <footer className="bg-white text-gray-700">

      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-16">

        {/* Top CTA */}
        <div className="border-b border-gray-200 py-14">
          <div className="flex flex-col items-center justify-between gap-7 rounded-2xl bg-blue-50 px-7 py-10 text-center sm:px-10 lg:flex-row lg:text-left">

            <div>
              <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-xs font-bold tracking-wide text-blue-700">
                BOOST YOUR PRODUCTIVITY
              </span>

              <h2 className="mt-5 text-2xl font-extrabold text-gray-900 sm:text-3xl lg:text-4xl">
                Ready to get more done?
              </h2>

              <p className="mt-3 max-w-xl text-sm leading-7 text-gray-600 sm:text-base">
                Organize your tasks, manage your priorities, and make every
                day more productive with TaskFlow AI.
              </p>
            </div>

            <Link
              to="/signup"
              className="inline-flex shrink-0 items-center gap-2 rounded-xl bg-blue-600 px-7 py-4 text-sm font-bold text-white shadow-md transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              Get Started Free
              <span aria-hidden="true">→</span>
            </Link>

          </div>
        </div>

        {/* Main Footer */}
        <div className="grid grid-cols-1 gap-12 py-14 sm:grid-cols-2 lg:grid-cols-5 lg:gap-10">

          {/* Brand */}
          <div className="lg:col-span-2">

            <Link to="/" className="inline-flex items-center">
              <span className="text-2xl font-extrabold tracking-tight text-gray-900">
                TaskFlow
                <span className="text-blue-600"> AI</span>
              </span>
            </Link>

            <p className="mt-5 max-w-sm text-sm leading-7 text-gray-500">
              A smarter way to organize your work, manage daily tasks,
              track progress, and improve productivity. Make every task
              count with TaskFlow AI.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap items-center gap-5">

              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
              >
                GitHub
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
              >
                LinkedIn
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-500 transition-colors hover:text-blue-600"
              >
                Twitter
              </a>

            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900">
              Product
            </h3>

            <ul className="space-y-4">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900">
              Company
            </h3>

            <ul className="space-y-4">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-wider text-gray-900">
              Resources
            </h3>

            <ul className="space-y-4">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors hover:text-blue-600"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Contact Section */}
        <div className="flex flex-col items-center justify-between gap-5 border-y border-gray-200 py-7 sm:flex-row">

          <div className="text-center sm:text-left">
            <h3 className="text-sm font-bold text-gray-900">
              Have a question?
            </h3>

            <p className="mt-1 text-xs text-gray-500">
              Get in touch with our support team.
            </p>
          </div>

          <Link
            to="/contact"
            className="rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 transition-all hover:border-blue-600 hover:bg-blue-50 hover:text-blue-600"
          >
            Contact Support →
          </Link>

        </div>

        {/* Copyright */}
        <div className="flex flex-col items-center justify-between gap-4 py-7 text-center sm:flex-row">

          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} TaskFlow AI. All rights reserved.
          </p>

          <p className="text-xs text-gray-500">
            Made with care for better productivity.
          </p>

        </div>

      </div>
    </footer>
  );
};

export default Footer;
