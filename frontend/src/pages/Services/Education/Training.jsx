import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import CareerImage from "../../../assets/Career1.png";

import {
  BookOpen,
  Code2,
  BriefcaseBusiness,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

const Training = () => {
  // =====================================================
  // TRAINING AREAS
  // =====================================================
  const trainingAreas = [
    {
      icon: Code2,
      title: "Technical & Industry-Oriented Training",
      description:
        "Build practical technical knowledge aligned with current industry requirements and professional expectations.",
    },
    {
      icon: Users,
      title: "Professional Skill Development",
      description:
        "Strengthen communication, teamwork, leadership, problem-solving, and other essential workplace skills.",
    },
    {
      icon: Target,
      title: "Career-Focused Learning",
      description:
        "Develop skills and knowledge that support your career goals and help you prepare for professional opportunities.",
    },
    {
      icon: Lightbulb,
      title: "Practical & Hands-On Learning",
      description:
        "Learn through practical activities and real-world applications to build confidence and job-ready capabilities.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Interview & Job Readiness",
      description:
        "Prepare for interviews, resume development, workplace communication, and the expectations of the professional world.",
    },
    {
      icon: TrendingUp,
      title: "Communication & Soft Skills",
      description:
        "Improve communication, presentation, interpersonal, and professional skills needed to succeed in the workplace.",
    },
  ];

  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen overflow-hidden">

      {/* =====================================================
          ANIMATION STYLES
      ====================================================== */}
      <style>{`
        @keyframes floatImage {
          0%, 100% {
            transform: translateY(0);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes pulseCircle {
          0%, 100% {
            transform: scale(1);
            opacity: 0.35;
          }

          50% {
            transform: scale(1.08);
            opacity: 0.55;
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-150%) skewX(-20deg);
          }

          100% {
            transform: translateX(250%) skewX(-20deg);
          }
        }

        .training-float {
          animation: floatImage 4s ease-in-out infinite;
        }

        .training-pulse {
          animation: pulseCircle 5s ease-in-out infinite;
        }

        .training-shine {
          position: relative;
          overflow: hidden;
        }

        .training-shine::after {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 35%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255, 255, 255, 0.45),
            transparent
          );
          transform: translateX(-150%) skewX(-20deg);
        }

        .training-shine:hover::after {
          animation: shine 0.8s ease;
        }
      `}</style>

      {/* =====================================================
          SEO
      ====================================================== */}
      <SEO
        title="Career-Focused Training Programs | Moin Consultancy"
        description="Moin Consultancy provides career-focused training designed to help students, graduates, and working professionals develop technical, professional, and industry-relevant skills."
        keywords="career training, professional training, technical training, skill development, job readiness, career development, Moin Consultancy"
        url="/services/education/training"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* =====================================================
          BREADCRUMBS
      ====================================================== */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#A202F0]">

          <li>
            <Link
              to="/"
              className="hover:underline transition-all duration-300"
            >
              Home
            </Link>
          </li>

          <li>/</li>

          <li>
            <span className="opacity-70">
              Services
            </span>
          </li>

          <li>/</li>

          <li>
            <span className="opacity-70">
              Education
            </span>
          </li>

          <li>/</li>

          <li className="font-semibold">
            Training
          </li>

        </ul>
      </div>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative container mx-auto px-4 py-10 md:py-16">

        {/* Decorative Background */}
        <div
          className="
            absolute
            -top-10
            right-0
            w-72
            h-72
            bg-[#A202F0]/10
            rounded-full
            blur-3xl
            training-pulse
            pointer-events-none
          "
        ></div>

        <div
          className="
            absolute
            bottom-0
            left-0
            w-64
            h-64
            bg-[#F5F0E6]
            rounded-full
            blur-3xl
            pointer-events-none
          "
        ></div>

        <div
          className="
            relative
            flex
            flex-col
            md:flex-row
            items-center
            gap-12
            md:gap-16
          "
        >

          {/* =================================================
              LEFT CONTENT
          ================================================= */}
          <div className="w-full md:w-1/2 space-y-6">

            <h1
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-[#A202F0]
                leading-tight
              "
            >
              Build Skills. Shape Careers. Stay Future-Ready.
            </h1>

            <div className="w-20 h-1 bg-[#A202F0] rounded-full"></div>

            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              At Moin Consultancy, we provide career-focused training designed
              to help students, graduates, and working professionals develop
              the technical, professional, and industry-relevant skills needed
              to succeed in a rapidly evolving world.
            </p>

            <p className="text-base  md:text-lg leading-relaxed text-gray-700">
              Our training approach combines practical learning, industry
              relevance, and professional development to help learners move
              confidently from education to employment.
            </p>

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-[#A202F0]
                leading-tight
              "
            >
              Learn Today. Lead Tomorrow.
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Whether you are starting your career, upgrading your skills, or
              preparing for new opportunities, our training programmes are
              designed around your career goals and industry requirements.
            </p>

          </div>

          {/* =================================================
              RIGHT IMAGE
          ================================================= */}
          <div className="w-full md:w-1/2 flex justify-center">

            <div className="relative">

              {/* Decorative Circle */}
              <div
                className="
                  absolute
                  inset-8
                  rounded-full
                  bg-[#A202F0]/10
                  blur-2xl
                  training-pulse
                "
              ></div>

              {/* Image */}
              <div className="relative training-float">

                <img
  src={CareerImage}
  alt="Career focused training at Moin Consultancy"
  className="
    w-full
    max-w-lg
    h-auto
    object-contain
    drop-shadow-2xl
  "
  loading="lazy"
/>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* =====================================================
          TRAINING AREAS
      ====================================================== */}
      <section className="bg-[#EFF0F6] py-16 md:py-20">

        <div className="container mx-auto px-4">

          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-[#A202F0]
                mb-4
              "
            >
              Our Training Areas
            </h2>

            <div
              className="
                w-16
                h-1
                bg-[#A202F0]
                rounded-full
                mx-auto
              "
            ></div>

          </div>

          {/* Cards */}
          <div
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              lg:grid-cols-3
              gap-7
              max-w-6xl
              mx-auto
            "
          >

            {trainingAreas.map((step, index) => {

              // Get icon from each object
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

      {/* =====================================================
          WHO WE TRAIN
      ====================================================== */}
      <section className="bg-white py-20">

        <div className="container mx-auto px-4">

          <div className="max-w-3xl">

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-[#A202F0]
                mb-4
              "
            >
              Who We Train?
            </h2>

            <div
              className="
                w-16
                h-1
                bg-[#A202F0]
                rounded-full
                mb-10
              "
            ></div>

          </div>

          <ul className="space-y-6 max-w-3xl">

            {[
              "Students",
              "Graduates",
              "Working Professionals",
              "Career Starters",
              "Career Switchers",
              "Professionals Seeking Upskilling",
              "Candidates Preparing for Global Opportunities",
            ].map((step, i) => (

              <li
                key={i}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-xl
                  transition-all
                  duration-300
                  hover:bg-[#EFF0F6]
                  hover:translate-x-2
                "
              >

                {/* Check Icon */}
                <div
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#A202F0]/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                    transition-all
                    duration-300
                    group-hover:bg-[#A202F0]
                  "
                >

                  <CheckCircle
                    size={20}
                    className="
                      text-[#A202F0]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  />

                </div>

                <span className="text-lg">
                  {step}
                </span>

              </li>

            ))}

          </ul>

        </div>

      </section>

      {/* =====================================================
          CTA SECTION
      ====================================================== */}
      <section
        className="
          relative
          bg-[#A202F0]
          text-white
          py-14
          md:py-16
          overflow-hidden
        "
      >

        {/* Decorative Background - Top Right */}
        <div
          className="
            absolute
            -top-24
            -right-24
            w-72
            h-72
            rounded-full
            bg-white/10
            blur-2xl
          "
        ></div>

        {/* Decorative Background - Bottom Left */}
        <div
          className="
            absolute
            -bottom-32
            -left-20
            w-80
            h-80
            rounded-full
            bg-white/10
            blur-3xl
          "
        ></div>

        <div className="container mx-auto px-4 relative">

          <div
            className="
              flex
              flex-col
              md:flex-row
              justify-between
              items-center
              gap-8
            "
          >

            {/* CTA Text */}
            <div className="text-center md:text-left">

            <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[white] leading-tight">
                Turn Skills Into Opportunities.
              </h3>

           

            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="
                training-shine
                group
                bg-white
                text-black
                hover:bg-[#25252B]
                hover:text-white
                px-8
                py-3.5
                rounded-lg
                font-semibold
                transition-all
                duration-300
                shadow-lg
                hover:shadow-2xl
                hover:-translate-y-1
                inline-flex
                items-center
                justify-center
                gap-2
              "
            >
           Explore Training Programs

              <ArrowRight
                size={19}
                className="
                  transition-transform
                  duration-300
                  group-hover:translate-x-1
                "
              />

            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Training;




