import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";

import {
  GraduationCap,
  UserCheck,
  FileCheck,
  FileText,
  Award,
  ClipboardCheck,
  Plane,
} from "lucide-react";

const benefits = [
  {
     icon: GraduationCap,
    title: "University & Programme Selection",
    description:
      "Identify universities and programmes aligned with your academic background, interests, budget, and career objectives.",
  },
  {
       icon: UserCheck,
    title: "Profile Assessment",
    description:
      "Evaluate your academic qualifications, skills, experience, and eligibility to develop a suitable admission strategy.",
  },
  {
  icon:FileCheck,
    title: "Application Assistance",
    description:
      "Get professional support with applications, documentation, forms, and submission requirements.",
  },
  {
    icon:FileText,
    title: "SOP & Application Support",
    description:
      "Present your academic journey, achievements, goals, and aspirations effectively through well-structured application materials.",
  },
  {
   icon:Award,
    title: "Scholarship Guidance",
    description:
      "Explore available scholarships and funding opportunities based on university and programme eligibility.",
  },
   {
    icon:ClipboardCheck,
    title: "Admission Follow-Up",
    description:
      "Receive guidance throughout the application process, including offer letters and next-step requirements.",
  },
   {
   icon:Plane,
    title: "Visa & Pre-Departure Guidance",
    description:
      "Continue your journey with support for visa preparation and essential pre-departure requirements.",
  },
];

const reasons = [
  "Personalised university and programme recommendations",
  "Guidance based on academic profile and career goals",
  "Support throughout the application process",
  "Clear and transparent admission guidance",
  "Assistance with documentation and requirements",
  "Focus on long-term academic and career outcomes",
];

const UniversityAdmission = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">
      {/* SEO */}
      <SEO
        title="University Admission Guidance | Moin Consultancy"
        description="Get personalised university and programme selection, application support, document guidance, and admission assistance from Moin Consultancy."
        keywords="University Admission, University Selection, Admission Guidance, Programme Selection, Study Abroad, University Application, Moin Consultancy"
        url="/services/education/university-admission"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap items-center gap-2 text-[#A202F0] opacity-80">
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
            University Admission
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">
      <h1 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              The Right University.
              <br />
              The Right Programme.
              <br />
              The Right Future.
            </h1>

            <p className="text-lg leading-relaxed text-gray-700">
              At Moin Consultancy, we simplify the university admission
              journey by helping students identify and apply to institutions
              that align with their academic profile, career goals, interests,
              and future aspirations.
            </p>

            <p className="text-lg leading-relaxed text-gray-600">
              From university selection to application submission and
              admission support, our team provides personalised, transparent,
              and end-to-end guidance.
            </p>

            <h1 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              Turn Your Ambition Into Admission.
        </h1>

            <p className="text-lg leading-relaxed text-gray-600">
              Choosing a university is one of the most important decisions in
              your academic journey. We help you make that decision with
              clarity and confidence.
            </p>

          
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <div className="w-full max-w-lg">
              <img
                src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/SEO_Professional-min.jpeg"
                alt="University Admission Guidance"
                className="w-full h-auto object-contain rounded-2xl"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admission Areas */}
      <section className="bg-[#EFF0F6] py-16 md:py-20">
        <div className="container mx-auto px-4">

          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">
          

            <h2 className="text-3xl md:text-4xl font-bold text-[#25252B] mb-4">
             Our University Admission Services
            </h2>

          
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-xl
                    p-7
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                    duration-300
                    flex
                    gap-5
                    border border-transparent
                    hover:border-[#A202F0]/20
                  "
                >
                  {/* Icon */}
                  <div
                    className="
                      w-12
                      h-12
                      rounded-full
                      bg-[#A202F0]/10
                      flex
                      items-center
                      justify-center
                      shrink-0
                    "
                  >
                    <Icon
                      size={25}
                      strokeWidth={2}
                      className="text-[#A202F0]"
                    />
                  </div>

                  {/* Content */}
                  <div>
                    <h3 className="text-xl font-semibold mb-2 text-[#25252B]">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Moin */}
      <section className="bg-[#FAF8F0] py-16 md:py-20">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#A202F0] font-semibold uppercase tracking-wide mb-3">
              Why Moin Consultancy
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#25252B] mb-4">
              Guidance That Puts Your Future First
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Our approach focuses on helping students make confident,
              informed, and future-oriented university decisions.
            </p>
          </div>

          {/* Reasons */}
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            {reasons.map((reason, index) => (
              <div
                key={index}
                className="
                  bg-white
                  rounded-xl
                  p-5
                  shadow-sm
                  flex
                  items-center
                  gap-4
                  hover:shadow-md
                  transition-all
                  duration-300
                "
              >
                <div className="shrink-0">
                  <CheckCircle
                    size={24}
                    className="text-[#A202F0]"
                  />
                </div>

                <p className="font-medium text-gray-700">
                  {reason}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Admission Journey */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center mb-12">
            <p className="text-[#A202F0] font-semibold uppercase tracking-wide mb-3">
              Our Approach
            </p>

            <h2 className="text-3xl md:text-4xl font-bold text-[#25252B] mb-4">
              From Choice to Admission
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              We make the admission journey simple, structured, and easier
              to navigate.
            </p>
          </div>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Step 1 */}
            <div className="text-center p-7 rounded-xl bg-[#EFF0F6]">
              <div
                className="
                  w-14
                  h-14
                  mx-auto
                  rounded-full
                  bg-[#A202F0]/10
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                <Compass
                  size={28}
                  className="text-[#A202F0]"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                01. Explore
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Understand your academic profile, interests, goals, and
                explore suitable universities and programmes.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center p-7 rounded-xl bg-[#EFF0F6]">
              <div
                className="
                  w-14
                  h-14
                  mx-auto
                  rounded-full
                  bg-[#A202F0]/10
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                <ClipboardCheck
                  size={28}
                  className="text-[#A202F0]"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                02. Apply
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Prepare your application and required documents with
                structured guidance throughout the submission process.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center p-7 rounded-xl bg-[#EFF0F6]">
              <div
                className="
                  w-14
                  h-14
                  mx-auto
                  rounded-full
                  bg-[#A202F0]/10
                  flex
                  items-center
                  justify-center
                  mb-5
                "
              >
                <GraduationCap
                  size={28}
                  className="text-[#A202F0]"
                />
              </div>

              <h3 className="text-xl font-semibold mb-3">
                03. Achieve
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Move forward with confidence towards your university
                admission and future academic goals.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#A202F0] text-white py-16">
        <div
          className="
            container
            mx-auto
            px-4
            flex
            flex-col
            md:flex-row
            justify-between
            items-center
            gap-8
          "
        >
          <div className="max-w-2xl">
            <h3 className="text-3xl md:text-4xl font-bold">
              Ready to Find the Right University?
            </h3>

            <p className="text-white/80 mt-3 text-lg leading-relaxed">
              Let Moin Consultancy help you choose the right university,
              programme, and admission pathway for your future.
            </p>
          </div>

          <Link
            to="/contact"
            className="
              bg-white
              text-[#A202F0]
              hover:bg-[#FAF8F0]
              transition-all
              px-8
              py-4
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
            Start Your Journey
          </Link>
        </div>
      </section>
    </div>
  );
};

export default UniversityAdmission;