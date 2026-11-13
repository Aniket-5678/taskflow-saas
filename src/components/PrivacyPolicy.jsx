
import { Link } from "react-router-dom";
import { ShieldCheck, ArrowLeft } from "lucide-react";

const PrivacyPolicy = () => {
  const sections = [
    {
      title: "1. Information We Collect",
      content: [
        "When you create an account, you may provide information such as your name and email address.",
        "Information entered into forms or other features may also be provided by you while using TaskFlow AI.",
      ],
    },
    {
      title: "2. How We Use Your Information",
      content: [
        "To create and manage your account.",
        "To provide access to TaskFlow AI features.",
        "To improve the user experience and maintain the functionality of the platform.",
        "To respond to questions or support requests when a working communication channel is available.",
      ],
    },
    {
      title: "3. Account Information and Browser Storage",
      content: [
        "The current demo version stores account and session information in your browser using localStorage and sessionStorage.",
        "This information is stored on your device and may remain there until you clear your browser storage or the application removes it.",
        "Browser storage is not a substitute for secure server-side authentication. Avoid using real or sensitive passwords in this demo application.",
      ],
    },
    {
      title: "4. Contact Form",
      content: [
        "The current contact form is a demonstration interface. Submitting it displays a confirmation message but does not currently send or store your message.",
        "This may change when a backend or email service is integrated. The policy should be updated when that happens.",
      ],
    },
    {
      title: "5. Cookies and Tracking",
      content: [
        "The current application may use browser storage to support account and session functionality.",
        "We do not claim to use advertising cookies or analytics tracking in the current demo version.",
      ],
    },
    {
      title: "6. Third-Party Services",
      content: [
        "TaskFlow AI may integrate third-party services in the future for hosting, payments, analytics, or communication.",
        "When such services are introduced, their privacy practices and relevant details will be disclosed where appropriate.",
      ],
    },
    {
      title: "7. Data Security",
      content: [
        "We aim to handle information responsibly. However, the current demo application does not provide production-grade server-side account security.",
        "Please do not submit confidential, financial, or other sensitive personal information through this demo.",
      ],
    },
    {
      title: "8. Your Choices",
      content: [
        "You can clear browser storage through your browser settings. Doing so may remove locally stored account and session information.",
        "For privacy-related questions, you can contact us using the Contact page.",
      ],
    },
    {
      title: "9. Children's Privacy",
      content: [
        "TaskFlow AI is not specifically designed to collect personal information from children. Please do not submit personal information if you are not permitted to use the service.",
      ],
    },
    {
      title: "10. Changes to This Policy",
      content: [
        "We may update this Privacy Policy when the application or its features change. The updated version will be published on this page with a revised last-updated date.",
      ],
    },
    {
      title: "11. Contact Us",
      content: [
        "If you have questions about this Privacy Policy, please visit our Contact page.",
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 px-5 pb-20 pt-32 sm:px-8 lg:px-16">
      <div className="mx-auto max-w-5xl">

        <Link
          to="/"
          className="mb-8 inline-flex items-center gap-2 text-sm font-semibold text-blue-600 transition hover:text-blue-800"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        <div className="rounded-3xl border border-slate-100 bg-white p-7 shadow-sm sm:p-12">

          <div className="mb-10 border-b border-slate-100 pb-8">
            <div className="mb-5 inline-flex rounded-2xl bg-blue-50 p-4 text-blue-600">
              <ShieldCheck size={30} />
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Privacy Policy
            </h1>

            <p className="mt-4 text-sm text-slate-500">
              Last Updated: November 13, 2026
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              Your privacy matters to us. This Privacy Policy explains what
              information you may provide while using TaskFlow AI and how
              the current version of our application handles that information.
            </p>
          </div>

          <div className="space-y-9">
            {sections.map((section) => (
              <section key={section.title}>
                <h2 className="text-xl font-bold text-slate-900">
                  {section.title}
                </h2>

                <div className="mt-3 space-y-3">
                  {section.content.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-sm leading-8 text-slate-600 sm:text-base"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>

                {section.title === "11. Contact Us" && (
                  <Link
                    to="/contact"
                    className="mt-4 inline-flex items-center rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
                  >
                    Contact Us
                  </Link>
                )}
              </section>
            ))}
          </div>

          <div className="mt-12 rounded-2xl bg-blue-50 p-6">
            <h3 className="font-bold text-slate-900">
              Questions about your privacy?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              We're happy to help. Visit our Contact page for more information.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex font-semibold text-blue-600 hover:text-blue-800"
            >
              Get in Touch →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
