import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career1.png";
import SEO from "../../../components/SEO/SEO";

import {
  Search,
  Share2,
  Target,
  FileText,
  Megaphone,
  Palette,
  Mail,
  BarChart3,
  ArrowRight,
} from "lucide-react";

const marketingServices = [
  {
    icon: Search,
    title: "Search Engine Optimization (SEO)",
    description:
      "Improve your online visibility and attract relevant audiences through strategic keyword research, on-page optimization, technical SEO, content, and search performance.",
  },
  {
    icon: Share2,
    title: "Social Media Marketing",
    description:
      "Build a strong social presence through engaging content, strategic campaigns, community engagement, and platform-specific marketing.",
  },
  {
    icon: Target,
    title: "Performance Marketing",
    description:
      "Reach high-intent audiences through targeted digital advertising campaigns designed around measurable business objectives.",
  },
  {
    icon: FileText,
    title: "Content Marketing",
    description:
      "Create valuable and relevant content that educates your audience, strengthens brand authority, improves search visibility, and supports conversions.",
  },
  {
    icon: Megaphone,
    title: "Google & Social Media Advertising",
    description:
      "Plan and manage targeted advertising campaigns across search and social platforms to connect your brand with the right audience.",
  },
  {
    icon: Palette,
    title: "Brand & Creative Marketing",
    description:
      "Develop consistent digital creatives, messaging, and visual communication that create a recognizable and professional brand presence.",
  },
  {
    icon: Mail,
    title: "Email & Digital Campaigns",
    description:
      "Build meaningful customer relationships through targeted email campaigns, promotional communication, and audience engagement.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Performance Tracking",
    description:
      "Monitor campaign performance through meaningful metrics and insights to understand what is working and where improvements are needed.",
  },
];
const DigitalMarketing = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen overflow-hidden">

      {/* =====================================================
          ANIMATION STYLES
      ====================================================== */}
      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }

          50% {
            transform: translateY(-12px);
          }
        }

        @keyframes pulseSoft {
          0%, 100% {
            opacity: 0.35;
            transform: scale(1);
          }

          50% {
            opacity: 0.6;
            transform: scale(1.08);
          }
        }

        @keyframes shine {
          0% {
            transform: translateX(-120%);
          }

          100% {
            transform: translateX(120%);
          }
        }

        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(25px);
          }

          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-float {
          animation: float 4s ease-in-out infinite;
        }

        .animate-pulse-soft {
          animation: pulseSoft 5s ease-in-out infinite;
        }

        .animate-fade-up {
          animation: fadeUp 0.8s ease-out both;
        }

        .shine-effect {
          position: relative;
          overflow: hidden;
        }

        .shine-effect::after {
          content: "";
          position: absolute;
          top: 0;
          left: -120%;
          width: 70%;
          height: 100%;
          background: linear-gradient(
            90deg,
            transparent,
            rgba(255,255,255,0.45),
            transparent
          );
          transform: skewX(-20deg);
        }

        .shine-effect:hover::after {
          animation: shine 0.8s ease;
        }

        .card-glow:hover {
          box-shadow:
            0 20px 40px rgba(162, 2, 240, 0.12),
            0 0 0 1px rgba(162, 2, 240, 0.08);
        }
      `}</style>

      {/* =====================================================
          SEO
      ====================================================== */}
      <SEO
        title="Cloud Solutions Built for Business Growth - Moin Consultancy"
        description="Empower your business with secure, scalable, and high-performance cloud solutions designed around your technology and business goals."
        keywords="Cloud Solutions, Cloud Consulting, Cloud Migration, Cloud Infrastructure, Cloud Security, Cloud Optimization, Managed Cloud Services"
        url="/services/technology/cloud-solutions"
        type="website"
      />

      {/* =====================================================
          BREADCRUMBS
      ====================================================== */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#A202F0] opacity-70">

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
            Technology
          </li>

          <li>/</li>

          <li className="font-semibold opacity-100">
          Digital Marketing
          </li>

        </ul>
      </div>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="relative container mx-auto px-4 py-12 md:py-20">

        {/* Decorative Background */}
        <div className="absolute top-10 right-0 w-72 h-72 bg-[#A202F0]/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-[white] rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-center gap-14">

          {/* =====================================================
              LEFT CONTENT
          ====================================================== */}
          <div className="w-full md:w-1/2 space-y-6 animate-fade-up">

            <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
             Build Visibility. Create Engagement. Drive Growth.
            </h3>

            {/* Purple underline */}
            <div className="w-20 h-1 bg-[#A202F0] rounded-full"></div>

            <p className="text-lg leading-relaxed text-gray-700">
Transform your digital presence into a powerful business growth engine with strategic, data-driven digital marketing solutions.
            </p>

            <p className="text-lg leading-relaxed text-gray-700">
At Moin Consultancy, we help businesses strengthen their online presence, reach the right audience, build brand credibility, and generate meaningful opportunities. From SEO and content marketing to social media and performance campaigns, we create integrated strategies aligned with your business objectives.
            </p>

          </div>

          {/* =====================================================
              RIGHT IMAGE
          ====================================================== */}
          <div className="w-full md:w-1/2 flex justify-center animate-fade-up">

            <div className="relative">

              {/* Background Circle */}
              <div className="absolute inset-5 rounded-full bg-[#A202F0]/10 blur-2xl"></div>

              {/* Image */}
              <div className="relative animate-float">
                <img
                  src={image}
                  alt="Cloud Solutions"
                  className="w-3/4 md:w-full max-w-xl h-auto object-contain mx-auto drop-shadow-2xl"
                  loading="lazy"
                />
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =====================================================
          CLOUD SERVICES
      ====================================================== */}
      <section className="relative bg-[#EFF0F6] py-20">

        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-14">

            <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
             Our Digital Marketing Services
            </h3>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>

            

          </div>

          {/* =====================================================
              CLOUD SERVICE CARDS
          ====================================================== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

            {marketingServices.map((step, index) => {

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
                    card-glow
                  "
                >

                  {/* Step Number */}
                  <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
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
                  <h3 className="text-xl font-bold text-[#A202F0] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                  {/* Bottom line */}
                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

                </div>
              );
            })}

          </div>

        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="relative bg-[#A202F0] text-white py-16 overflow-hidden">

        {/* Background decorations */}
        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>

        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>

        <div className="container mx-auto px-4 relative">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* CTA Content */}
            <div className="text-center md:text-left max-w-2xl">

              <h3 className="text-xl md:text-lg lg:text-2xl font-bold text-[white] leading-tight">
                Explore Digital Marketing
              </h3>

            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="
                shine-effect
                group
                bg-white
                text-[#A202F0]
                hover:bg-[#25252B]
                hover:text-white
                transition-all
                duration-300
                px-8
                md:px-10
                h-14
                rounded-xl
                font-semibold
                text-base
                md:text-lg
                shadow-xl
                inline-flex
                items-center
                justify-center
                gap-3
                whitespace-nowrap
                hover:-translate-y-1
                hover:shadow-2xl
              "
            >
              Talk to Our Experts

              <ArrowRight
                size={21}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

          </div>

        </div>
      </section>

    </div>
  );
};

export default DigitalMarketing;