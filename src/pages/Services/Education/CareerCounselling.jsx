import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career.png";
import SEO from "../../../components/SEO/SEO";

import {
  Search,
  ClipboardCheck,
  Compass,
  Map,
  TrendingUp,
} from "lucide-react";

const CareerCounselling = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* =====================================================
          SEO
      ====================================================== */}
      <SEO
        title="Career Counselling Services - Moin Consultancy"
        description="Get personalised career counselling and guidance to choose the right career, course, university, skills, and international career pathway."
        keywords="Career Counselling, Career Guidance, Course Selection, Study Abroad, Career Planning, Professional Development"
        url="/services/education/careercounsellling"
        type="website"
      />

      {/* =====================================================
          BREADCRUMBS
      ====================================================== */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#1A356A] opacity-70">
          <li>
            <Link
              to="/"
              className="hover:text-[#A202F0] transition-colors"
            >
              Home
            </Link>
          </li>

          <li>/</li>

          <li className="hover:text-[#A202F0] cursor-default">
            Services
          </li>

          <li>/</li>

          <li className="font-semibold opacity-100">
            Career Counselling
          </li>
        </ul>
      </div>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">

          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">

            <h1 className="text-4xl md:text-5xl font-bold text-[#A202F0] leading-tight">
              Your Career. Your Potential. Your Future.
            </h1>

            <p className="text-lg leading-relaxed text-gray-700">
              At Moin Consultancy, our career counselling services help
              students, graduates, and working professionals make informed
              and confident career decisions.
            </p>

            <p className="leading-relaxed text-gray-600">
              We understand your interests, strengths, academic background,
              and career aspirations to help you identify the right education,
              skills, career pathway, and global opportunities.
            </p>

          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={image}
              alt="Career Counselling"
              className="w-3/4 h-auto object-contain"
              loading="lazy"
            />
          </div>

        </div>
      </section>

      {/* =====================================================
          MAKE THE RIGHT CHOICE
      ====================================================== */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-[#A202F0] mb-5">
              Make the Right Choice for Your Future
            </h2>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Choosing a career is one of the most important decisions you
              will make. Our expert guidance helps you move beyond uncertainty
              and build a clear, practical career roadmap.
            </p>

          </div>

          {/* Career Counselling Approach Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {[
              {
                icon: Search,
                title: "Discover",
                description:
                  "Understand your interests, strengths, skills, and aspirations.",
              },
              {
                icon: ClipboardCheck,
                title: "Assess",
                description:
                  "Evaluate your academic background, capabilities, and career potential.",
              },
              {
                icon: Compass,
                title: "Explore",
                description:
                  "Identify suitable career fields, courses, universities, and industry opportunities.",
              },
              {
                icon: Map,
                title: "Plan",
                description:
                  "Create a personalised education and career roadmap aligned with your goals.",
              },
              {
                icon: TrendingUp,
                title: "Progress",
                description:
                  "Develop the skills and strategies required to move confidently toward your chosen career.",
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-xl
                    shadow-md
                    border-t-4
                    border-[#A202F0]
                    p-6
                    min-h-[280px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    hover:-translate-y-2
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon
                      size={38}
                      strokeWidth={2}
                      className="text-[#A202F0]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#25252B] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      {/* =====================================================
          CAREER DECISIONS
      ====================================================== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto">

            <h2 className="text-3xl md:text-4xl font-bold text-[#A202F0] mb-6">
              Career Decisions Backed by Insight
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              Our approach combines personalised counselling, education
              pathways, industry trends, and career opportunities to help
              you make decisions with greater clarity.
            </p>

            {/* Sub Heading */}
            <div className="bg-[#EFF0F6] rounded-xl p-8 md:p-10">

              <h3 className="text-2xl md:text-3xl font-bold text-[#25252B] mb-5">
                From Confusion to Clarity. From Education to Career.
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
                Whether you are choosing your academic stream, selecting a
                university, exploring international education, changing your
                career, or planning your professional growth, our counsellors
                provide structured guidance to help you move forward with
                confidence.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          WHAT WE HELP YOU WITH
      ====================================================== */}
      <section className="bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-[#A202F0] mb-12 text-center">
            What We Help You With
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

            {[
              "Career & Course Selection",
              "Stream & Specialisation Guidance",
              "Study Abroad & International Education",
              "University & Programme Selection",
              "Career Transition Planning",
              "Skill & Industry-Oriented Career Planning",
              "Professional Development",
              "International Career Pathways",
            ].map((reason, idx) => (
              <div
                key={idx}
                className="
                  bg-white
                  p-5
                  rounded-xl
                  shadow-sm
                  border-l-4
                  border-[#A202F0]
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center gap-4">

                  {/* Bullet */}
                  <span className="w-3 h-3 rounded-full bg-[#A202F0] flex-shrink-0"></span>

                  <p className="font-medium text-gray-700">
                    {reason}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#A202F0] text-white py-16">
        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* CTA Content */}
            <div className="text-center md:text-left">

              <h3 className="text-3xl font-bold">
                Ready to Plan Your Career?
              </h3>

              <p className="text-white mt-3 leading-relaxed">
                Get personalised career guidance and take the next step
                toward a confident future.
              </p>

            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="
                bg-black
                hover:bg-[#A202F0]
                transition-all
                px-10
                h-14
                rounded-lg
                font-semibold
                text-lg
                shadow-lg
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
              "
            >
              Start Career Counselling
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CareerCounselling;