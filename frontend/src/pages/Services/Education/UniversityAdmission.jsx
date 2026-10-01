
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import CareerImage from "../../../assets/Career1.png";

import {
  GraduationCap,
  UserCheck,
  FileCheck,
  Award,
  ClipboardCheck,
  UserRound,
  Globe2,
  TrendingUp,
  ShieldCheck,
} from "lucide-react";

// University Admission Services
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
    icon: FileCheck,
    title: "Application Assistance",
    description:
      "Get professional support with applications, documentation, forms, and submission requirements.",
  },
  {
    icon: Award,
    title: "Scholarship Guidance",
    description:
      "Explore available scholarships and funding opportunities based on university and programme eligibility.",
  },
  {
    icon: ClipboardCheck,
    title: "Admission Follow-Up",
    description:
      "Receive guidance throughout the application process, including offer letters and next-step requirements.",
  },
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

          <li className="cursor-default">Services</li>

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

            <p className="text-lg leading-relaxed text-gray-700">
              From university selection to application submission and
              admission support, our team provides personalised, transparent,
              and end-to-end guidance.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              Turn Your Ambition Into Admission.
            </h2>

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
  src={CareerImage}
  alt="University Admission Guidance at Moin Consultancy"
  className="w-full h-auto object-contain rounded-2xl"
  loading="lazy"
/>
            </div>
          </div>
        </div>
      </section>

      {/* University Admission Services */}
      <section className="bg-[#EFF0F6] py-16 md:py-20">
        <div className="container mx-auto px-4">
          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-3xl font-bold text-[#A202F0] mb-4">
              Our University Admission Services
            </h2>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>
          </div>

          {/* Service Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {benefits.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    group
                    relative
                    bg-white
                    rounded-2xl
                    shadow-md
                    border-t-4
                    border-[#A202F0]
                    p-7
                    min-h-[290px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:shadow-2xl
                  "
                >
                  {/* Step Number */}
                  <div
                    className="
                      absolute
                      top-4
                      right-5
                      text-sm
                      font-bold
                      text-[#A202F0]/30
                    "
                  >
                    0{index + 1}
                  </div>

                  {/* Icon */}
                  <div
                    className="
                      w-16
                      h-16
                      rounded-full
                      bg-[#A202F0]/10
                      flex
                      items-center
                      justify-center
                      mb-5
                      transition-all
                      duration-500
                      group-hover:bg-[#A202F0]
                      group-hover:scale-110
                      group-hover:rotate-3
                    "
                  >
                    <Icon
                      size={32}
                      strokeWidth={2}
                      className="
                        text-[#A202F0]
                        transition-colors
                        duration-300
                        group-hover:text-white
                      "
                    />
                  </div>

                  {/* Title */}
                  <h3
                    className="
                      text-lg
                      md:text-xl
                      font-bold
                      text-[#A202F0]
                      mb-3
                    "
                  >
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p
                    className="
                      text-gray-500
                      text-base
                      leading-relaxed
                      max-w-xs
                    "
                  >
                    {step.description}
                  </p>

                  {/* Bottom Line */}
                  <div
                    className="
                      absolute
                      bottom-0
                      left-1/2
                      -translate-x-1/2
                      w-0
                      h-1
                      bg-[#A202F0]
                      rounded-full
                      transition-all
                      duration-500
                      group-hover:w-20
                    "
                  ></div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Study in India */}
      <section className="bg-white py-16 md:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-3xl font-bold text-[#A202F0] mb-4">
              Study in India
            </h2>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Explore university admission opportunities across leading
              academic destinations, including:
            </p>
          </div>
        </div>
      </section>

    
{/* Why Choose Moin Consultancy */}
<section className="bg-[#EFF0F6] py-16 md:py-20">
  <div className="container mx-auto px-4">

    {/* Section Heading */}
    <div className="max-w-3xl mx-auto text-center mb-12">
      <h2 className="text-3xl md:text-3xl font-bold text-[#A202F0] mb-4">
        Why Choose Moin Consultancy?
      </h2>

      <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
        We provide personalised guidance to help you make confident and
        informed education decisions.
      </p>

      <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>
    </div>

    {/* Why Choose Cards */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

      {/* Card 1 */}
      <div
        className="
          group
          relative
          bg-white
          rounded-2xl
          shadow-md
          border-t-4
          border-[#A202F0]
          p-7
          min-h-[290px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
        "
      >
        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          01
        </div>

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-[#A202F0]/10
            flex
            items-center
            justify-center
            mb-5
            transition-all
            duration-500
            group-hover:bg-[#A202F0]
            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          <UserRound
            size={32}
            strokeWidth={2}
            className="
              text-[#A202F0]
              transition-colors
              duration-300
              group-hover:text-white
            "
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Personalised Admission Strategy
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Guidance tailored to your individual academic and career profile.
        </p>

        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-0
            h-1
            bg-[#A202F0]
            rounded-full
            transition-all
            duration-500
            group-hover:w-20
          "
        ></div>
      </div>

      {/* Card 2 */}
      <div
        className="
          group
          relative
          bg-white
          rounded-2xl
          shadow-md
          border-t-4
          border-[#A202F0]
          p-7
          min-h-[290px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
        "
      >
        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          02
        </div>

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-[#A202F0]/10
            flex
            items-center
            justify-center
            mb-5
            transition-all
            duration-500
            group-hover:bg-[#A202F0]
            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          <Globe2
            size={32}
            strokeWidth={2}
            className="
              text-[#A202F0]
              transition-colors
              duration-300
              group-hover:text-white
            "
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Global Education Perspective
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Access guidance across multiple study destinations and academic
          pathways.
        </p>

        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-0
            h-1
            bg-[#A202F0]
            rounded-full
            transition-all
            duration-500
            group-hover:w-20
          "
        ></div>
      </div>

      {/* Card 3 */}
      <div
        className="
          group
          relative
          bg-white
          rounded-2xl
          shadow-md
          border-t-4
          border-[#A202F0]
          p-7
          min-h-[290px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
        "
      >
        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          03
        </div>

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-[#A202F0]/10
            flex
            items-center
            justify-center
            mb-5
            transition-all
            duration-500
            group-hover:bg-[#A202F0]
            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          <TrendingUp
            size={32}
            strokeWidth={2}
            className="
              text-[#A202F0]
              transition-colors
              duration-300
              group-hover:text-white
            "
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Career-Focused Selection
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          We look beyond admission to connect your programme choice with
          future career opportunities.
        </p>

        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-0
            h-1
            bg-[#A202F0]
            rounded-full
            transition-all
            duration-500
            group-hover:w-20
          "
        ></div>
      </div>

      {/* Card 4 */}
      <div
        className="
          group
          relative
          bg-white
          rounded-2xl
          shadow-md
          border-t-4
          border-[#A202F0]
          p-7
          min-h-[290px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
        "
      >
        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          04
        </div>

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-[#A202F0]/10
            flex
            items-center
            justify-center
            mb-5
            transition-all
            duration-500
            group-hover:bg-[#A202F0]
            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          <ClipboardCheck
            size={32}
            strokeWidth={2}
            className="
              text-[#A202F0]
              transition-colors
              duration-300
              group-hover:text-white
            "
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          End-to-End Support
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Guidance from initial counselling through application, admission,
          visa, and pre-departure stages.
        </p>

        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-0
            h-1
            bg-[#A202F0]
            rounded-full
            transition-all
            duration-500
            group-hover:w-20
          "
        ></div>
      </div>

      {/* Card 5 */}
      <div
        className="
          group
          relative
          bg-white
          rounded-2xl
          shadow-md
          border-t-4
          border-[#A202F0]
          p-7
          min-h-[290px]
          flex
          flex-col
          items-center
          justify-center
          text-center
          transition-all
          duration-500
          hover:-translate-y-3
          hover:shadow-2xl
        "
      >
        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          05
        </div>

        <div
          className="
            w-16
            h-16
            rounded-full
            bg-[#A202F0]/10
            flex
            items-center
            justify-center
            mb-5
            transition-all
            duration-500
            group-hover:bg-[#A202F0]
            group-hover:scale-110
            group-hover:rotate-3
          "
        >
          <ShieldCheck
            size={32}
            strokeWidth={2}
            className="
              text-[#A202F0]
              transition-colors
              duration-300
              group-hover:text-white
            "
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Transparent Guidance
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Clear communication and responsible advice throughout your admission
          journey.
        </p>

        <div
          className="
            absolute
            bottom-0
            left-1/2
            -translate-x-1/2
            w-0
            h-1
            bg-[#A202F0]
            rounded-full
            transition-all
            duration-500
            group-hover:w-20
          "
        ></div>
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
            <h4 className="text-xl md:text-2xl font-bold">
              Ready to Find the Right University?
            </h4>

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

