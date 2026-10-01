// src/pages/CookiePolicy.jsx

import React from "react";
import SEO from "../components/SEO/SEO";

const CookiePolicy = () => {
  return (
    <main className="w-full font-sans">
      <SEO
        title="Cookie Policy | Moin Consultancy"
        description="Learn how Moin Consultancy uses cookies and similar technologies to improve website functionality, performance, security, and user experience."
        keywords="Moin Consultancy Cookie Policy, Cookies, Website Privacy, Website Tracking, User Experience, Digital Privacy"
        url="/cookie-policy"
        siteName="Moin Consultancy"
        type="website"
      />

      <section className="bg-navy-dark text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Cookie Policy
          </h1>

          <p className="text-white/80 text-lg">
            Learn how Moin Consultancy uses cookies to improve website
            functionality, security, and user experience.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-dark text-lg leading-relaxed">

          <div>
            <p>
              This Cookie Policy explains how{" "}
              <span className="font-semibold text-navy">
                Moin Consultancy
              </span>{" "}
              uses cookies and similar technologies when you visit our website
              or use our digital services.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              1. What Are Cookies?
            </h2>
            <p>
              Cookies are small text files stored on your device when you visit
              a website. They help websites function efficiently and can
              provide information that helps improve website performance and
              user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              2. Types of Cookies We Use
            </h2>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Essential Cookies:</strong> Required for basic website
                functionality, security, and navigation.
              </li>
              <li>
                <strong>Performance Cookies:</strong> Help us understand how
                visitors interact with our website.
              </li>
              <li>
                <strong>Functional Cookies:</strong> May remember user
                preferences to improve usability.
              </li>
              <li>
                <strong>Analytics Cookies:</strong> May collect information
                about website traffic and usage patterns.
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              3. How We Use Cookies
            </h2>

            <p>Moin Consultancy may use cookies to:</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Support website security and functionality</li>
              <li>Improve website performance and usability</li>
              <li>Understand website traffic and usage patterns</li>
              <li>Improve the overall user experience</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              4. Third-Party Cookies
            </h2>

            <p>
              We may use trusted third-party services, such as analytics or
              website-support tools, that may place cookies or similar
              technologies on your device. These third parties may have their
              own privacy and cookie policies.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              5. Managing & Disabling Cookies
            </h2>

            <p>
              You can control or disable cookies through your browser settings
              at any time. Disabling certain cookies may affect some website
              functionality or user experience.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              6. Data Protection & Privacy
            </h2>

            <p>
              Information collected through cookies or similar technologies is
              handled in accordance with our Privacy Policy. Moin Consultancy
              takes reasonable steps to protect information collected through
              its website.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              7. Updates to This Cookie Policy
            </h2>

            <p>
              Moin Consultancy may update this Cookie Policy from time to time
              to reflect changes in our website practices, services, or
              applicable requirements. Updates will be published on this page.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              8. Contact Us
            </h2>

            <p>
              If you have questions about this Cookie Policy, please contact us
              at{" "}
              <span className="font-semibold">
                connect@moinconsultancy.com
              </span>
              .
            </p>

            <p className="mt-4">
              <span className="font-semibold">Phone:</span>{" "}
              +919390605958
            </p>
          </div>

        </div>
      </section>
    </main>
  );
};

export default CookiePolicy;