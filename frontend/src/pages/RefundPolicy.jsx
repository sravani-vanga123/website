// src/pages/RefundPolicy.jsx

import React from "react";
import SEO from "../components/SEO/SEO";

const RefundPolicy = () => {
  return (
    <main className="w-full font-sans">
      <SEO
        title="Refund Policy | Moin Consultancy"
        description="Understand the refund guidelines applicable to services provided by Moin Consultancy, including service cancellations, project work, and recurring services."
        keywords="Moin Consultancy Refund Policy, Refund Policy, Service Cancellation, Project Refund, Service Agreement, Payment Policy"
        url="/refund-policy"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* ================= HERO SECTION ================= */}
      <section className="bg-navy-dark text-white py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Refund Policy
          </h1>

          <p className="text-white/80 text-lg">
            Clear and transparent refund guidelines for Moin Consultancy
            services.
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
              , we value transparency and clear communication with our clients.
              This Refund Policy explains the general conditions that may apply
              to refunds for services provided by us.
            </p>
          </div>

          {/* General Policy */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              1. General Refund Policy
            </h2>

            <p>
              Moin Consultancy provides professional services across areas such
              as education, technology, immigration, logistics, renewable
              energy, manufacturing, and business solutions. Refund
              eligibility may vary depending on the nature of the service,
              work completed, applicable agreements, and payment terms.
            </p>
          </div>

          {/* Eligibility */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              2. Eligibility for Refunds
            </h2>

            <p>
              A refund may be considered in circumstances such as:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                A payment was made incorrectly or duplicated.
              </li>

              <li>
                A service is cancelled before the relevant work or service
                delivery has started, where applicable.
              </li>

              <li>
                A service cannot be initiated due to circumstances attributable
                to Moin Consultancy.
              </li>

              <li>
                Other circumstances specifically agreed upon in writing
                between Moin Consultancy and the client.
              </li>
            </ul>
          </div>

          {/* Non-Refundable */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              3. Non-Refundable Services
            </h2>

            <p>
              Refunds may not be available for services or work that has
              already been completed or delivered. This may include:
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                Completed or partially completed service work.
              </li>

              <li>
                Work performed based on information, documents, or requirements
                provided by the client.
              </li>

              <li>
                Third-party services, fees, licenses, registrations, or
                expenses already paid on behalf of the client, where applicable.
              </li>

              <li>
                Requests made after agreed service milestones or stages have
                been completed.
              </li>

              <li>
                Changes in personal preference after a service has already been
                initiated or delivered.
              </li>
            </ul>
          </div>

          {/* Project / Milestone Payments */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              4. Project & Milestone-Based Services
            </h2>

            <p>
              Where a service or project is divided into stages or milestones,
              payments associated with completed work may not be refundable.
              Any remaining work or payment obligations will be handled
              according to the applicable service agreement.
            </p>
          </div>

          {/* Subscription & Recurring Services */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              5. Subscription & Recurring Services
            </h2>

            <p>
              Fees for recurring services, subscriptions, support, maintenance,
              or other ongoing services may be non-refundable once the
              applicable service period has started, unless a separate written
              agreement states otherwise.
            </p>
          </div>

          {/* Request Process */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              6. Refund Request Process
            </h2>

            <p>
              To request a refund, clients should submit a written request to{" "}
              <span className="font-semibold">
                connect@moinconsultancy.com
              </span>
              . The request should include relevant payment details, service
              information, and the reason for requesting a refund.
            </p>
          </div>

          {/* Review */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              7. Review & Processing
            </h2>

            <p>
              Refund requests will be reviewed based on the nature of the
              service, work already completed, applicable payment terms, and
              any agreement between Moin Consultancy and the client. If a
              refund is approved, the applicable processing timeline and
              payment method will be communicated to the client.
            </p>
          </div>

          {/* Policy Updates */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              8. Changes to This Refund Policy
            </h2>

            <p>
              Moin Consultancy may update this Refund Policy from time to time
              to reflect changes in our services, business practices, or
              applicable requirements. Any updates will be published on this
              page.
            </p>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-2xl font-bold text-navy mb-4">
              9. Contact Us
            </h2>

            <p>
              If you have any questions regarding this Refund Policy, please
              contact us at{" "}
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

export default RefundPolicy;