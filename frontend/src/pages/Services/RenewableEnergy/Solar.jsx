import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career1.png";
import SEO from "../../../components/SEO/SEO";

import {
  Sun,
  Home,
  Building2,
  Factory,
  Wheat,
  BatteryCharging,
  Zap,
  Cable,
  Wrench,
  Settings,
  ArrowUpRight,
  ArrowRight,
} from "lucide-react";

// ======================================================
const solarServices = [
  {
    icon: Sun,
    title: "Solar Consultation",
    description:
      "Understand your energy requirements, site conditions, electricity usage, and suitable solar options before investing in a system.",
  },
  {
    icon: Home,
    title: "Residential Solar",
    description:
      "Customized rooftop solar solutions designed to help households generate renewable electricity and manage their energy requirements.",
  },
  {
    icon: Building2,
    title: "Commercial Solar",
    description:
      "Solar solutions for offices, commercial buildings, retail spaces, and other businesses looking to improve energy efficiency and reduce dependence on conventional electricity.",
  },
  {
    icon: Factory,
    title: "Industrial Solar",
    description:
      "High-capacity solar solutions designed around industrial energy consumption, available space, operational requirements, and long-term energy objectives.",
  },
  {
    icon: Wheat,
    title: "Solar for Agriculture",
    description:
      "Solar-powered solutions for eligible agricultural applications, including solar pumping and decentralized energy requirements.",
  },
  {
    icon: BatteryCharging,
    title: "Solar + Battery Storage",
    description:
      "Integrate solar generation with battery storage where appropriate to improve energy flexibility and backup capability.",
  },
  {
    icon: Zap,
    title: "On-Grid Solar Systems",
    description:
      "Grid-connected solar systems designed to work alongside the electricity grid, subject to applicable technical and regulatory requirements.",
  },
  {
    icon: Cable,
    title: "Off-Grid Solar Systems",
    description:
      "Independent solar solutions for locations and applications where reliable grid connectivity is unavailable or unsuitable.",
  },
  {
    icon: Wrench,
    title: "Solar Installation & Commissioning",
    description:
      "Professional installation, system setup, testing, and commissioning to ensure the solar system is ready for operation.",
  },
  {
    icon: Settings,
    title: "Solar Operations & Maintenance",
    description:
      "Ongoing inspection, monitoring, maintenance, and performance support to help maintain system reliability.",
  },
];


const solar= () => {
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
        title="Career Counselling Services - Moin Consultancy"
        description="Get personalised career counselling and guidance to choose the right career, course, university, skills, and international career pathway."
        keywords="Career Counselling, Career Guidance, Course Selection, Study Abroad, Career Planning, Professional Development"
        url="/services/RenewableEnergy/soalr"
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
    Services
          </li>/
       

     <li className="hover:text-[#A202F0] cursor-default">
    RenewableEnergy
          </li>/

          <li className="font-semibold opacity-100">
          solar
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
          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6 animate-fade-up">
            {/* Small Badge */}
          

          <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
Power Your Future With Solar Energy
  <span className="block text-[#25252B] mt-2">
    Smarter Energy. Sustainable Growth.
  </span>
</h3>

            {/* Purple underline */}
            <div className="w-20 h-1 bg-[#A202F0] rounded-full"></div>

            <p className="text-lg leading-relaxed text-gray-700">
             Harness the power of solar with reliable, efficient, and professionally designed solar solutions for homes, businesses, industries, and institutions.
            </p>

          
            <p className="text-lg leading-relaxed text-gray-700">
            At Moin Consultancy, we help customers transition toward cleaner energy through customized solar solutions—from initial consultation and system design to installation, commissioning, monitoring, and ongoing support. 
            </p>

            
            </div>
          

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center animate-fade-up">
            <div className="relative">
              {/* Background Circle */}
              <div className="absolute inset-5 rounded-full bg-[#A202F0]/10 blur-2xl"></div>

              {/* Image */}
              <div className="relative animate-float">
                <img
                  src={image}
                  alt="Career Counselling"
                  className="w-3/4 md:w-full max-w-xl h-auto object-contain mx-auto drop-shadow-2xl"
                  loading="lazy"
                />
              </div>

        
                

                <div>
          
          
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          MAKE THE RIGHT CHOICE / PROCESS
      ====================================================== */}
      <section className="relative bg-[#EFF0F6] py-20">
        <div className="container mx-auto px-4">
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-14">
         

        
          <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
            Our Solar Services
            </h3>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
            
            </p>
          </div>

          {/* Career Counselling Approach Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {solarServices.map((step, index) => {
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
            

                  <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[white] leading-tight">
            Get a Solar Consultation
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
              Talk to Our team
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

export default solar;