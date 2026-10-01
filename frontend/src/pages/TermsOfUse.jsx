// src/pages/TermsOfUse.jsx

import React from "react";
import SEO from "../components/SEO/SEO";

const TermsOfUse = () => {
  return (
    <main className="w-full font-sans">
      {/* SEO Implementation for Terms of Use */}
      <SEO
        title="Terms of Use | Moin Consultancy"
        description="Read the Terms of Use for Moin Consultancy. These terms govern access to our website and use of our professional services."
        keywords="Moin Consultancy Terms of Use, Terms and Conditions, Service Agreement, User Policy, Website Terms, Service Usage"
        url="/terms-of-use"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* ================= HERO ================= */}
      <section className="bg-navy-dark text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Terms of Use
          </h1>

          <p className="text-white/80 text-lg">
            Please read these terms carefully before using Moin Consultancy
            services.
          </p>
        </div>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="py-20 bg-white px-6">
        <div className="max-w-4xl mx-auto space-y-12 text-gray-dark text-lg leading-relaxed">

          {/* Intro */}
          <div>
            <p>
              Welcome to{" "}
              <span className="font-semibold text-navy">
                Moin Consultancy
              </span>
              . These Terms of Use govern your access to and use of our
              website and professional services. By accessing or using our
              services, you agree to be bound by these terms. If you do not
              agree with these terms, please do not use our services.
            </p>
          </div>

          {/* Definitions */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              1. Definitions
            </h2>

            <p>
              “Company”, “We”, “Us”, or “Our” refers to Moin Consultancy.
              “User”, “You”, or “Client” refers to any individual or
              organization accessing or using our website or services.
              “Services” refers to the professional services provided by Moin
              Consultancy across areas such as education, technology,
              immigration, logistics, renewable energy, manufacturing, and
              business solutions.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              2. Eligibility
            </h2>

            <p>
              You must be legally capable of entering into a binding agreement
              to use our services. By using Moin Consultancy services, you
              confirm that the information you provide is accurate and
              complete and that you have the necessary authority to request
              services on behalf of an organization, where applicable.
            </p>
          </div>

          {/* Use of Services */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              3. Use of Services
            </h2>

            <p>
              You agree to use our website and services only for lawful
              purposes and in compliance with applicable laws and regulations.
              You must not misuse, disrupt, interfere with, or attempt to gain
              unauthorized access to our website, systems, services, or
              information.
            </p>
          </div>

          {/* Intellectual Property */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              4. Intellectual Property Rights
            </h2>

            <p>
              Content, designs, logos, text, graphics, website materials, and
              other materials provided by Moin Consultancy are owned by or
              licensed to the Company unless stated otherwise. You may not
              copy, reproduce, modify, distribute, publish, or use such
              materials without appropriate authorization.
            </p>
          </div>

          {/* Client Responsibilities */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              5. Client Responsibilities
            </h2>

            <p>
              Clients are responsible for providing accurate information,
              complete requirements, timely feedback, and any documents or
              resources necessary for the requested service. Delays resulting
              from incomplete, inaccurate, or late information may affect
              service timelines.
            </p>
          </div>

          {/* Payments */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              6. Payments & Billing
            </h2>

            <p>
              Payments must be made according to the applicable proposal,
              quotation, invoice, service agreement, or other agreed payment
              terms. Failure to complete required payments may result in
              suspension or termination of applicable services. Refunds are
              subject to the Moin Consultancy Refund Policy and any applicable
              service agreement.
            </p>
          </div>

          {/* Confidentiality */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              7. Confidentiality
            </h2>

            <p>
              Moin Consultancy and its clients may receive confidential
              business, technical, personal, or service-related information
              during an engagement. Both parties should take reasonable steps
              to protect confidential information and should not disclose it
              except where authorized or required by applicable law.
            </p>
          </div>

          {/* Limitation of Liability */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              8. Limitation of Liability
            </h2>

            <p>
              To the extent permitted by applicable law, Moin Consultancy will
              not be responsible for indirect, incidental, or consequential
              losses arising from the use of or inability to use our website or
              services. Specific responsibilities and limitations may also be
              governed by the applicable service agreement.
            </p>
          </div>

          {/* Termination */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              9. Termination
            </h2>

            <p>
              Moin Consultancy may suspend or terminate access to services
              where there is a material violation of these terms, misuse of
              services, unauthorized activity, or other circumstances that
              reasonably require termination. Applicable contractual
              obligations may continue after termination where required.
            </p>
          </div>

          {/* Changes */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              10. Changes to Terms
            </h2>

            <p>
              Moin Consultancy may update these Terms of Use from time to time
              to reflect changes in our services, website practices, or
              applicable requirements. Updated terms will be published on this
              page. Users are encouraged to review this page periodically.
            </p>
          </div>

          {/* Governing Law */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              11. Governing Law
            </h2>

            <p>
              These terms shall be interpreted in accordance with applicable
              laws. Any disputes will be handled in accordance with the
              applicable legal and jurisdictional requirements governing the
              relevant service or agreement.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              12. Contact Information
            </h2>

            <p>
              If you have any questions about these Terms of Use, please
              contact Moin Consultancy at{" "}
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

export default TermsOfUse;