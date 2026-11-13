
import { useState } from "react";
import {
  Mail,
  MessageSquare,
  User,
  Send,
  MapPin,
  Clock,
  Headphones,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    setSubmitted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Demo only: no email is sent or stored.
    setSubmitted(true);

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  };

  return (
    <section id="contact" className="relative min-h-screen scroll-mt-24 overflow-hidden bg-gray-50 px-5 py-20 sm:px-8 lg:px-16">
      {/* Background Decorations */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-blue-100/60 blur-3xl" />
      <div className="pointer-events-none absolute -right-40 bottom-10 h-96 w-96 rounded-full bg-purple-100/60 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-blue-100 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-600">
            <MessageSquare size={16} />
            Contact Us
          </span>

          <h1 className="mt-6 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Let's Start a
            <span className="mt-2 block bg-gradient-to-r from-blue-600 via-violet-600 to-purple-600 bg-clip-text text-transparent">
              Conversation.
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-500 sm:text-lg">
            Have a question, suggestion, or need help with TaskFlow AI?
            We'd love to hear from you. Send us a message.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">

          {/* Left Contact Information */}
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-violet-700 p-8 text-white shadow-xl shadow-blue-200/50 lg:col-span-2 lg:p-10">
            <div className="absolute -right-16 -top-16 h-56 w-56 rounded-full bg-white/10 blur-3xl" />

            <div className="relative">
              <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-white/15">
                <Headphones size={30} />
              </div>

              <h2 className="text-3xl font-extrabold">
                Get in Touch
              </h2>

              <p className="mt-4 text-sm leading-7 text-blue-100">
                We're always happy to help. Contact us with your questions
                and feedback about TaskFlow AI.
              </p>

              <div className="my-10 space-y-7">

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Mail size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold">Email Us</h3>
                    <a
                      href="mailto:support@taskflowai.com"
                      className="mt-1 block text-sm text-blue-100 transition hover:text-white"
                    >
                      support@taskflowai.com
                    </a>
                  </div>
                </div>

                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <MapPin size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold">Our Platform</h3>
                    <p className="mt-1 text-sm text-blue-100">
                      TaskFlow AI - Online Support
                    </p>
                  </div>
                </div>

                {/* Support */}
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-white/15">
                    <Clock size={21} />
                  </div>

                  <div>
                    <h3 className="font-bold">Support</h3>
                    <p className="mt-1 text-sm text-blue-100">
                      Send us your message anytime.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-white/20 bg-white/10 p-5 backdrop-blur-sm">
                <div className="flex items-center gap-2">
                  <Sparkles size={19} />
                  <h3 className="font-bold">We're Here to Help!</h3>
                </div>

                <p className="mt-2 text-sm leading-6 text-blue-100">
                  Your feedback helps us improve your productivity
                  experience with TaskFlow AI.
                </p>
              </div>
            </div>
          </div>

          {/* Right Contact Form */}
          <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-xl shadow-gray-200/50 sm:p-10 lg:col-span-3">

            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-gray-900 sm:text-3xl">
                Send Us a Message
              </h2>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Fill out the form below and tell us how we can help.
              </p>
            </div>

            {submitted && (
              <div
                role="status"
                className="mb-7 flex items-start gap-3 rounded-xl border border-green-200 bg-green-50 p-4 text-green-700"
              >
                <CheckCircle size={21} className="mt-0.5 shrink-0" />

                <div>
                  <p className="font-bold">Form submitted successfully!</p>
                  <p className="mt-1 text-sm">
                    This is a demo submission. Connect a backend or email
                    service to actually receive messages.
                  </p>
                </div>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* Name and Email */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">

                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Full Name
                  </label>

                  <div className="relative">
                    <User
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      required
                      maxLength={80}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-semibold text-gray-700"
                  >
                    Email Address
                  </label>

                  <div className="relative">
                    <Mail
                      size={18}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
                    />

                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      required
                      maxLength={254}
                      className="w-full rounded-xl border border-gray-200 bg-gray-50 py-3.5 pl-11 pr-4 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                    />
                  </div>
                </div>
              </div>

              {/* Subject */}
              <div>
                <label
                  htmlFor="subject"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Subject
                </label>

                <input
                  id="subject"
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="What is your message about?"
                  required
                  maxLength={150}
                  className="w-full rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold text-gray-700"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Write your message here..."
                  rows={6}
                  required
                  maxLength={2000}
                  className="w-full resize-none rounded-xl border border-gray-200 bg-gray-50 px-4 py-3.5 text-sm text-gray-800 outline-none transition placeholder:text-gray-400 focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-100"
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-violet-600 px-7 py-4 text-sm font-bold text-white shadow-lg shadow-blue-200 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-200 sm:w-auto"
              >
                Send Message
                <Send size={17} />
              </button>

              <p className="text-xs leading-5 text-gray-400">
                By submitting this form, you agree to be contacted regarding
                your inquiry.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
