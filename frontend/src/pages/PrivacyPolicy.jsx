// src/pages/PrivacyPolicy.jsx
import React from "react";
import SEO from "../components/SEO/SEO";

const PrivacyPolicy = () => {
  return (
    <main className="w-full font-sans">
      {/* ================= SEO ================= */}
      <SEO
        title="Privacy Policy | Moin Consultancy"
        description="Learn how Moin Consultancy collects, uses, and protects personal information and how we work to maintain privacy and data security."
        keywords="Moin Consultancy Privacy Policy, Privacy Policy, Data Protection, User Privacy, Information Security, Personal Data"
        url="/privacy-policy"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-navy-dark text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Privacy Policy
          </h1>

          <p className="text-white/80 text-lg">
            Your privacy matters to us. Learn how Moin Consultancy collects,
            uses, and protects your information.
          </p>
        </div>
      </section>

      {/* ================= CONTENT SECTION ================= */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-dark text-lg leading-relaxed">

          {/* Intro */}
          <div>
            <p>
              At{" "}
              <span className="font-semibold text-navy">
                Moin Consultancy
              </span>
              , we are committed to protecting your privacy and personal data.
              This Privacy Policy explains how we collect, use, store, and
              safeguard your information when you access our website or use
              our services.
            </p>
          </div>

          {/* Information We Collect */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              1. Information We Collect
            </h2>

            <p>
              We may collect the following types of information:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Personal information such as name, email address, and phone
                number
              </li>
              <li>
                Information provided when you submit inquiries or request
                our services
              </li>
              <li>
                Business or service-related details voluntarily provided to us
              </li>
              <li>
                Technical information such as IP address, browser type, and
                device information
              </li>
              <li>
                Usage information related to how you interact with our
                website
              </li>
            </ul>
          </div>

          {/* How We Use Information */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              2. How We Use Your Information
            </h2>

            <p>
              We may use the information we collect to:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Respond to inquiries and service requests</li>
              <li>Provide and improve our services</li>
              <li>Communicate with clients and website visitors</li>
              <li>Understand website usage and improve user experience</li>
              <li>Maintain website security and prevent unauthorized access</li>
              <li>Comply with applicable legal and regulatory requirements</li>
            </ul>
          </div>

          {/* Data Sharing */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              3. Data Sharing & Disclosure
            </h2>

            <p>
              Moin Consultancy does not sell or rent your personal information.
              We may share information with trusted service providers or
              partners when necessary to provide requested services, operate
              our website, comply with legal obligations, or protect our
              rights.
            </p>
          </div>

          {/* Data Security */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              4. Data Security
            </h2>

            <p>
              We take reasonable technical and organizational measures to
              protect personal information against unauthorized access, loss,
              misuse, alteration, or disclosure. However, no method of
              transmitting or storing information online can be guaranteed to
              be completely secure.
            </p>
          </div>

          {/* Cookies */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              5. Cookies & Tracking Technologies
            </h2>

            <p>
              Our website may use cookies and similar technologies to improve
              website functionality, understand website usage, and enhance
              the user experience. You can manage or disable cookies through
              your browser settings.
            </p>
          </div>

          {/* Third-Party Links */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              6. Third-Party Links
            </h2>

            <p>
              Our website may contain links to third-party websites or
              services. Moin Consultancy is not responsible for the privacy
              practices, security, or content of external websites. We
              recommend reviewing the privacy policies of those websites
              separately.
            </p>
          </div>

          {/* Data Retention */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              7. Data Retention
            </h2>

            <p>
              We retain personal information only for as long as reasonably
              necessary to provide services, respond to requests, fulfill
              business requirements, comply with applicable legal obligations,
              and resolve disputes.
            </p>
          </div>

          {/* User Rights */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              8. Your Rights
            </h2>

            <p>
              Depending on applicable laws, you may have rights relating to
              your personal information, including requesting access,
              correction, or deletion of your information. You may also
              contact us regarding questions or concerns about how your
              information is handled.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              9. Changes to This Privacy Policy
            </h2>

            <p>
              Moin Consultancy may update this Privacy Policy from time to
              time to reflect changes in our services, website practices, or
              applicable requirements. Any updates will be published on this
              page.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              10. Contact Us
            </h2>

            <p>
              If you have any questions or concerns about this Privacy Policy
              or how we handle your information, please contact us at{" "}
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

export default PrivacyPolicy;