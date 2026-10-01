// src/pages/default/Error404.jsx
import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import SEO from "../../components/SEO/SEO";

const Error404 = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-[#EFF0F6] px-6">

      {/* SEO Configuration: 404 Specific */}
      <SEO
        title="Page Not Found (404) | Moin Consultancy"
        description="The page you are looking for does not exist or has been moved. Return to the Moin Consultancy homepage."
        url="/404"
        siteName="Moin Consultancy"
      />

      {/* Override Robots to prevent indexing of 404 pages */}
      <Helmet>
        <meta name="robots" content="noindex, follow" />
      </Helmet>

      <div className="max-w-3xl w-full text-center bg-white rounded-2xl shadow-lg p-10 md:p-14 relative overflow-hidden">

        {/* Decorative Shapes */}
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#A202F0] rounded-full blur-3xl opacity-10"></div>

        <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-[#A202F0] rounded-full blur-3xl opacity-10"></div>

        {/* Content */}
        <h1 className="text-[100px] md:text-[140px] font-extrabold text-[#A202F0] leading-none">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-bold text-[#25252B] mt-4">
          Page Not Found
        </h2>

        <p className="text-[#25252B] mt-4 max-w-xl mx-auto leading-relaxed">
          The page you’re looking for doesn’t exist or may have been moved.
          Don’t worry — let’s get you back on track.
        </p>

        {/* CTA Buttons */}
        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">

          <Link
            to="/"
            className="bg-[#A202F0] hover:bg-[#8E02D6] text-white px-8 py-3 rounded-lg font-semibold shadow-md transition-all"
          >
            Go to Homepage
          </Link>

          <Link
            to="/contact"
            className="border border-[#A202F0] text-[#A202F0] hover:bg-[#A202F0] hover:text-white px-8 py-3 rounded-lg font-semibold transition-all"
          >
            Contact Us
          </Link>

        </div>

        {/* Brand Footer */}
        <p className="mt-10 text-sm text-[#25252B] opacity-70">
          © {new Date().getFullYear()} Moin Consultancy — All Rights Reserved
        </p>

      </div>
    </section>
  );
};

export default Error404;