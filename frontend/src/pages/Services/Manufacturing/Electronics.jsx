import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career1.png";
import SEO from "../../../components/SEO/SEO";

import {
  Smartphone,
  Car,
  Radio,
  Factory,
  Sun,
  Laptop,
  HeartPulse,
  ArrowRight,
  Cpu,
  CircuitBoard,
  Boxes,
  BatteryCharging,
  Lightbulb,
  Globe2,
} from "lucide-react";

// ======================================================
// ELECTRONICS SERVICES
// ======================================================

const electronicsServices = [
  {
    icon: Cpu,
    title: "Electronic Components",
    description:
      "Source and coordinate components required for electronics manufacturing, assembly, and technology applications.",
  },
  {
    icon: CircuitBoard,
    title: "PCB & PCB Solutions",
    description:
      "Support sourcing and procurement requirements for printed circuit boards and related electronic assemblies.",
  },
  {
    icon: Boxes,
    title: "Electronic Sub-Assemblies",
    description:
      "Coordinate sourcing and supply requirements for suitable electronic sub-assemblies across different applications.",
  },
  {
    icon: BatteryCharging,
    title: "Power Electronics",
    description:
      "Support business requirements for power-management components, modules, and related electronic solutions.",
  },
  {
    icon: Lightbulb,
    title: "LED & Lighting Electronics",
    description:
      "Provide sourcing and business coordination for LED components, lighting electronics, and related systems.",
  },
  {
    icon: Radio,
    title: "Telecom & Communication Electronics",
    description:
      "Support component and technology requirements for communication, networking, and telecom applications.",
  },
  {
    icon: Car,
    title: "Automotive Electronics",
    description:
      "Explore electronics sourcing and supply solutions for automotive and mobility-related applications.",
  },
  {
    icon: Factory,
    title: "Industrial Electronics",
    description:
      "Support industrial automation, control systems, instrumentation, and other industrial electronics requirements.",
  },
  {
    icon: Laptop,
    title: "IT & Consumer Electronics",
    description:
      "Coordinate sourcing and supply requirements for selected IT hardware and consumer-electronics products.",
  },
  {
    icon: Globe2,
    title: "Global Electronics Sourcing",
    description:
      "Connect businesses with international suppliers and sourcing opportunities based on product specifications, quality requirements, and commercial objectives.",
  },
];

// ======================================================
// ELECTRONICS INDUSTRIES
// ======================================================

const electronicsIndustries = [
  {
    icon: Smartphone,
    title: "Consumer Electronics",
    description:
      "Components and solutions for connected consumer products, smart devices, and electronic equipment.",
    points: [
      "Smart Devices",
      "Electronic Components",
      "Connected Products",
    ],
  },
  {
    icon: Car,
    title: "Automotive",
    description:
      "Electronics supporting modern mobility, vehicle systems, automotive components, and emerging transportation technologies.",
    points: [
      "Vehicle Systems",
      "Automotive Electronics",
      "Mobility Solutions",
    ],
  },
  {
    icon: Radio,
    title: "Telecommunications",
    description:
      "Components and solutions for communication systems, connectivity, networking, and telecommunications infrastructure.",
    points: [
      "Communication Systems",
      "Networking",
      "Connectivity",
    ],
  },
  {
    icon: Factory,
    title: "Industrial",
    description:
      "Electronic systems and components supporting automation, control, monitoring, manufacturing, and industrial applications.",
    points: [
      "Automation",
      "Control Systems",
      "Industrial Monitoring",
    ],
  },
  {
    icon: Sun,
    title: "Solar & Energy",
    description:
      "Electronics for renewable-energy systems, power management, energy monitoring, control systems, and related applications.",
    points: [
      "Power Management",
      "Energy Monitoring",
      "Renewable Energy",
    ],
  },
  {
    icon: Laptop,
    title: "IT & Technology",
    description:
      "Components, hardware, and technology solutions supporting digital infrastructure, computing, networking, and technology environments.",
    points: [
      "IT Hardware",
      "Computing Solutions",
      "Digital Infrastructure",
    ],
  },
  {
    icon: HeartPulse,
    title: "Medical & Healthcare",
    description:
      "Electronic components and technology solutions for applicable healthcare and medical-device requirements, subject to relevant regulatory standards.",
    points: [
      "Medical Electronics",
      "Healthcare Technology",
      "Device Components",
    ],
  },
];

// ======================================================
// COMPONENT
// ======================================================

const Electronic = () => {
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
        title="Electronics Solutions & Global Sourcing - Moin Consultancy"
        description="Explore electronics components, PCB solutions, power electronics, industrial electronics, automotive electronics, telecom solutions, and global electronics sourcing services."
        keywords="Electronics Solutions, Electronic Components, PCB Solutions, Power Electronics, Automotive Electronics, Industrial Electronics, Global Electronics Sourcing"
        url="/services/manufacturing/electronics"
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
            services
          </li>

          <li>/</li>

          <li className="font-semibold opacity-100">
            Manufacturing
          </li>

          <li>/</li>

          <li className="font-semibold opacity-100">
            Electronics
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

              Powering the Future Through Electronics

              <span className="block text-[#25252B] mt-2">
                Technology. Components. Connectivity.
              </span>

            </h3>


            {/* Purple underline */}

            <div className="w-20 h-1 bg-[#A202F0] rounded-full"></div>


            <p className="text-lg leading-relaxed text-gray-700">
              Connect your business with reliable electronics solutions,
              components, sourcing, and technology-driven opportunities across
              a rapidly evolving global electronics ecosystem.
            </p>


       
            <p className="text-lg leading-relaxed text-gray-700">
              At Moin Consultancy, we support businesses with electronics
              sourcing, component procurement, international trade
              coordination, supply-chain support, and technology solutions
              tailored to their operational requirements.
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
                  alt="Electronics Solutions"
                  className="w-3/4 md:w-full max-w-xl h-auto object-contain mx-auto drop-shadow-2xl"
                  loading="lazy"
                />

              </div>

              <div></div>

            </div>

          </div>

        </div>

      </section>
            {/* =====================================================
          OUR ELECTRONICS SERVICES
      ====================================================== */}

      <section className="relative bg-white py-20">

        <div className="container mx-auto px-4">

          {/* Heading */}

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
              Our Electronics Services
            </h3>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Comprehensive electronics sourcing and coordination services
              supporting components, assemblies, technology requirements,
              and global sourcing opportunities.
            </p>

          </div>


          {/* Services Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

            {electronicsServices.map((service, index) => {

              const Icon = service.icon;

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

                  {/* Service Number */}

                  <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
                    {String(index + 1).padStart(2, "0")}
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
                    {service.title}
                  </h3>


                  {/* Description */}

                  <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                    {service.description}
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
          ELECTRONICS SOLUTIONS FOR MULTIPLE INDUSTRIES
      ====================================================== */}

      <section className="relative bg-[#EFF0F6] py-20">

        <div className="container mx-auto px-4">

          {/* Heading */}

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
              Electronics Solutions for Multiple Industries
            </h3>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              We support diverse industries with electronics components,
              technology solutions, sourcing, and supply-chain coordination.
            </p>

          </div>


          {/* Industry Cards */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

            {electronicsIndustries.map((step, index) => {

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
              Discuss Your Electronics Requirement
              </h3>

              <p className="mt-4 text-white/90 leading-relaxed">
              
              </p>

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

              Talk to Our Electronics Team

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

export default  Electronic;