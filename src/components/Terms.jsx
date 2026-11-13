
import { Link } from "react-router-dom";
import { FileText, ArrowLeft } from "lucide-react";

const Terms = () => {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content: [
        "By accessing or using TaskFlow AI, you agree to these Terms & Conditions.",
        "If you do not agree with these terms, please do not use the application.",
      ],
    },
    {
      title: "2. About TaskFlow AI",
      content: [
        "TaskFlow AI is a task management and productivity application designed to help users organize tasks, manage priorities, and track their work.",
        "Some features currently displayed are demonstrations and may not be fully functional.",
      ],
    },
    {
      title: "3. User Accounts",
      content: [
        "You are responsible for providing accurate information when creating an account.",
        "You are responsible for maintaining the confidentiality of your account credentials and for activity performed through your account.",
        "Do not use another person's account without their permission.",
      ],
    },
    {
      title: "4. Acceptable Use",
      content: [
        "You agree not to misuse the application or attempt to disrupt its functionality.",
        "You must not attempt unauthorized access, distribute malicious software, or use the platform for unlawful activities.",
        "You must not copy, modify, or exploit the application in ways that violate applicable laws or these terms.",
      ],
    },
    {
      title: "5. Features and Availability",
      content: [
        "We may add, modify, suspend, or remove features at any time.",
        "We do not guarantee uninterrupted access or that every feature will always be available.",
        "The current demo may contain incomplete features or sample information.",
      ],
    },
    {
      title: "6. Plans, Pricing and Payments",
      content: [
        "Any plans or prices displayed in the current demo are illustrative and do not represent an active subscription or payment service.",
        "No payment or subscription activation is currently processed through the demo pricing interface.",
        "If paid plans are introduced, applicable pricing, billing, renewal, cancellation, and payment terms will be provided before users make a purchase.",
      ],
    },
    {
      title: "7. Intellectual Property",
      content: [
        "The TaskFlow AI name, branding, design, website content, and application materials may be protected by applicable intellectual property laws.",
        "You may not reproduce, distribute, or commercially exploit protected materials without appropriate authorization.",
      ],
    },
    {
      title: "8. User Responsibilities",
      content: [
        "You are responsible for the information and content you submit through the application.",
        "You should not submit confidential or sensitive information through features that are still in demonstration mode.",
      ],
    },
    {
      title: "9. Disclaimer",
      content: [
        "TaskFlow AI is currently provided as a demonstration application. It is provided on an as-is and as-available basis to the extent permitted by applicable law.",
        "We do not guarantee that the application will meet every user's requirements or be free from errors.",
      ],
    },
    {
      title: "10. Limitation of Liability",
      content: [
        "To the extent permitted by applicable law, TaskFlow AI and its operators will not be responsible for indirect or consequential losses arising from the use of the demo application.",
        "Nothing in these terms excludes liability that cannot legally be excluded under applicable law.",
      ],
    },
    {
      title: "11. Termination",
      content: [
        "Access to the application may be suspended or restricted if these terms are violated or if necessary to protect the application and its users.",
      ],
    },
    {
      title: "12. Changes to These Terms",
      content: [
        "We may revise these Terms & Conditions as the application develops. Changes will be published on this page with an updated date.",
      ],
    },
    {
      title: "13. Governing Law",
      content: [
        "These terms are subject to applicable laws of India. Any disputes will be handled by the courts having jurisdiction under applicable law.",
      ],
    },
    {
      title: "14. Contact Information",
      content: [
        "If you have questions about these Terms & Conditions, please contact us through the Contact page.",
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
              <FileText size={30} />
            </div>

            <h1 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
              Terms & Conditions
            </h1>

            <p className="mt-4 text-sm text-slate-500">
              Last Updated: November 13, 2026
            </p>

            <p className="mt-5 max-w-3xl leading-8 text-slate-600">
              Welcome to TaskFlow AI. These Terms & Conditions explain
              the rules and responsibilities that apply when you access
              or use our application.
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

                {section.title === "14. Contact Information" && (
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
              Need help understanding these terms?
            </h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              Reach out to us if you have any questions about using TaskFlow AI.
            </p>
            <Link
              to="/contact"
              className="mt-4 inline-flex font-semibold text-blue-600 hover:text-blue-800"
            >
              Contact Support →
            </Link>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Terms;
