
import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career1.png";
import SEO from "../../../components/SEO/SEO";

import {
  Target,
  Compass,
  Pencil,
  Palette,
  Smartphone,
  MousePointerClick,
  Blocks,
  FlaskConical,
  Code2,
  ArrowRight,
  Users,
  BriefcaseBusiness,
  Layers3,
} from "lucide-react";

const UxDesign = () => {
  const services = [
    {
      icon: Target,
      title: "UX Research & Strategy",
      description:
        "Understand your users, business goals, and market landscape to establish a clear experience strategy before design begins.",
    },
    {
      icon: Compass,
      title: "User Journey & Information Architecture",
      description:
        "Structure content, navigation, and user flows to make complex digital products easier to understand and navigate.",
    },
    {
      icon: Pencil,
      title: "Wireframing",
      description:
        "Transform ideas and requirements into clear wireframes that define layouts, functionality, and user interactions before visual design.",
    },
    {
      icon: Palette,
      title: "UI & Visual Design",
      description:
        "Create modern, brand-aligned interfaces with thoughtful typography, layouts, colors, components, and visual hierarchy.",
    },
    {
      icon: Smartphone,
      title: "Web & Mobile UI/UX",
      description:
        "Design responsive experiences for websites, web applications, SaaS platforms, and mobile applications across different screen sizes.",
    },
    {
      icon: MousePointerClick,
      title: "Interactive Prototyping",
      description:
        "Bring concepts to life with interactive prototypes that allow teams to experience and validate key user journeys before development.",
    },
    {
      icon: Blocks,
      title: "Design Systems",
      description:
        "Develop reusable components, patterns, and visual guidelines that maintain consistency and make digital products easier to scale.",
    },
    {
      icon: FlaskConical,
      title: "Usability Testing",
      description:
        "Evaluate user flows and interfaces to identify friction points and refine the experience before launch.",
    },
    {
      icon: Code2,
      title: "Developer Handoff",
      description:
        "Provide structured design files, specifications, components, and assets that help development teams implement designs accurately.",
    },
  ];

  const designPrinciples = [
    {
      icon: Users,
      title: "User-Centered",
      description:
        "Every experience starts with understanding the people who will use your product.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Business-Focused",
      description:
        "Design decisions are connected to your business objectives and digital strategy.",
    },
    {
      icon: Palette,
      title: "Visually Engaging",
      description:
        "Premium interfaces create a strong and consistent digital identity.",
    },
    {
      icon: Layers3,
      title: "Scalable",
      description:
        "Reusable components and design systems help products evolve efficiently.",
    },
    {
      icon: Smartphone,
      title: "Responsive",
      description:
        "Experiences are designed to work seamlessly across desktop, tablet, and mobile devices.",
    },
    {
      icon: Code2,
      title: "Development-Ready",
      description:
        "Clear specifications and organized design assets make the transition from design to development smoother.",
    },
  ];

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
        title="UI/UX Design Services - Moin Consultancy"
        description="Create intuitive, engaging, and high-performing digital experiences with Moin Consultancy's UI/UX design services."
        keywords="UI UX Design, UX Research, UI Design, Wireframing, Prototyping, Design Systems, Usability Testing, Web Design, Mobile App Design"
        url="/services/Technology/UxDesign"
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
            UI/UX Design
          </li>

        </ul>
      </div>


      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative container mx-auto px-4 py-12 md:py-20">

        <div className="absolute top-10 right-0 w-72 h-72 bg-[#A202F0]/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none"></div>

        <div className="relative flex flex-col md:flex-row items-center gap-14">

          {/* LEFT CONTENT */}

          <div className="w-full md:w-1/2 space-y-6 animate-fade-up">

            <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
              Design Experiences That Move Your Business Forward
            </h3>

            <div className="w-20 h-1 bg-[#A202F0] rounded-full"></div>

            <p className="text-lg leading-relaxed text-gray-700">
              Create intuitive, engaging, and high-performing digital
              experiences designed around your users and business objectives.
            </p>

            <p className=" text-lg leading-relaxed text-gray-700">
              At Moin Consultancy, we combine user experience strategy,
              modern interface design, and technology-focused thinking to
              create digital products that are easy to use, visually engaging,
              and built to scale. From websites and mobile applications to
              dashboards and enterprise platforms, we design experiences that
              connect people with technology.
            </p>

          </div>


          {/* RIGHT IMAGE */}

          <div className="w-full md:w-1/2 flex justify-center animate-fade-up">

            <div className="relative">

              <div className="absolute inset-5 rounded-full bg-[#A202F0]/10 blur-2xl"></div>

              <div className="relative animate-float">

                <img
                  src={image}
                  alt="UI/UX Design Services"
                  className="w-3/4 md:w-full max-w-xl h-auto object-contain mx-auto drop-shadow-2xl"
                  loading="lazy"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 2 - UI/UX DESIGN SERVICES
      ====================================================== */}

      <section className="relative bg-[#EFF0F6] py-20">

        <div className="container mx-auto px-4">

          {/* Heading */}

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
              Our UI/UX Design Services
            </h3>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From research and strategy to visual design, prototyping, and
              developer handoff, we create user-focused digital experiences.
            </p>

          </div>


          {/* SERVICES CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

            {services.map((step, index) => {

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

                  {/* Number */}

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
                    {step.title}
                  </h3>


                  {/* Description */}

                  <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>


                  {/* Bottom Line */}

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =====================================================
          SECTION 3 - DESIGN APPROACH
      ====================================================== */}

      <section className="relative bg-[#EFF0F6] py-20">

        <div className="container mx-auto px-4">

          {/* Heading */}

          <div className="max-w-4xl mx-auto text-center mb-14">

            <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-[#A202F0] leading-tight">
              Design That Balances People, Technology & Business
            </h3>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Our approach combines user needs, business objectives, visual
              design, scalability, responsiveness, and development readiness.
            </p>

          </div>


          {/* DESIGN PRINCIPLE CARDS */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

            {designPrinciples.map((principle, index) => {

              const Icon = principle.icon;

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

                  {/* Number */}

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
                    {principle.title}
                  </h3>


                  {/* Description */}

                  <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                    {principle.description}
                  </p>


                  {/* Bottom Line */}

                  <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

                </div>
              );

            })}

          </div>

        </div>

      </section>





      {/* =====================================================
          CTA SECTION
      ====================================================== */}

      <section className="relative bg-[#A202F0] text-white py-16 overflow-hidden">

        {/* Background decorations */}

        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>

        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>


        <div className="container mx-auto px-4 relative">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* CTA Content */}

            <div className="text-center md:text-left max-w-2xl">

              <h3 className="text-xl md:text-lg lg:text-3xl font-bold text-white leading-tight">
                Think Better. Design Smarter. Experience More.
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
              Talk to Our Design Experts

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

export default UxDesign;
