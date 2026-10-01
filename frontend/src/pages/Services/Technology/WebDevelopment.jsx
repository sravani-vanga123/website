
import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career1.png";
import SEO from "../../../components/SEO/SEO";

import {
  Globe2,
  Settings2,
  MonitorSmartphone,
  ShoppingCart,
  Smartphone,
  Plug,
  Database,
  Gauge,
  ShieldCheck,
  Wrench,
  ArrowRight,
} from "lucide-react";

const webServices = [
  {
    icon: Globe2,
    title: "Corporate Website Development",
    description:
      "Build a professional digital presence that communicates your brand, services, expertise, and value proposition with clarity.",
  },
  {
    icon: Settings2,
    title: "Custom Web Development",
    description:
      "Develop tailored web solutions around your specific business processes, functionality, integrations, and operational requirements.",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Application Development",
    description:
      "Create powerful web applications with customized workflows, dashboards, user management, databases, and business functionality.",
  },
  {
    icon: ShoppingCart,
    title: "E-Commerce Development",
    description:
      "Build secure and responsive online stores with product management, customer journeys, payment integration, order management, and scalable architecture.",
  },
  {
    icon: Smartphone,
    title: "Responsive Web Development",
    description:
      "Deliver consistent digital experiences across desktops, tablets, and smartphones with responsive layouts and mobile-focused usability.",
  },
  {
    icon: Plug,
    title: "API & Third-Party Integration",
    description:
      "Connect your website or application with CRM, payment gateways, communication platforms, business tools, and other external services.",
  },
  {
    icon: Database,
    title: "Database & Backend Development",
    description:
      "Develop structured backend systems and databases that support secure data management, application logic, and reliable performance.",
  },
  {
    icon: Gauge,
    title: "Website Performance Optimization",
    description:
      "Improve loading performance, responsiveness, technical structure, and overall website efficiency.",
  },
  {
    icon: ShieldCheck,
    title: "Web Security",
    description:
      "Implement security-conscious development practices to help protect applications, data, authentication, and business information.",
  },
  {
    icon: Wrench,
    title: "Website Maintenance & Support",
    description:
      "Keep your digital platform updated, secure, optimized, and aligned with evolving business requirements.",
  },
];

const WebDevelopment = () => {
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
        title="Web Development Services - Moin Consultancy"
        description="Build powerful, responsive, secure, and scalable websites and web applications with Moin Consultancy's professional web development services."
        keywords="Web Development, Website Development, Custom Web Development, Web Application Development, E-Commerce Development, Responsive Web Development, API Integration, Backend Development"
        url="/services/Technology/web-development"
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
            Web Development
          </li>

        </ul>

      </div>


      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative container mx-auto px-4 py-12 md:py-20">

        {/* Decorative Background */}

        <div className="absolute top-10 right-0 w-72 h-72 bg-[#A202F0]/10 rounded-full blur-3xl animate-pulse-soft pointer-events-none"></div>

        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl pointer-events-none"></div>


        <div className="relative flex flex-col md:flex-row items-center gap-14">


          {/* =================================================
              LEFT CONTENT
          ================================================== */}

          <div className="w-full md:w-1/2 space-y-6 animate-fade-up">

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#A202F0] leading-tight">

              Build Digital Experiences

              <span className="block text-[#A202F0] mt-2">
                That Drive Business
              </span>

            </h3>


            {/* Purple underline */}

            <div className="w-20 h-1 bg-[#A202F0] rounded-full"></div>


            <p className="text-lg leading-relaxed text-gray-700">

              Create powerful, responsive, and scalable web solutions
              engineered around your business goals.

            </p>


         
   <p className="text-lg leading-relaxed text-gray-700">
              At Moin Consultancy, we design and develop modern websites
              and web applications that combine intuitive user experiences,
              robust technology, strong performance, and scalable architecture.
              From corporate websites to custom business platforms, we
              transform ideas into reliable digital solutions built for today
              and ready for tomorrow.

            </p>


      

      

          </div>


          {/* =================================================
              RIGHT IMAGE
          ================================================== */}

          <div className="w-full md:w-1/2 flex justify-center animate-fade-up">

            <div className="relative">

              {/* Background Circle */}

              <div className="absolute inset-5 rounded-full bg-[#A202F0]/10 blur-2xl"></div>


              {/* Image */}

              <div className="relative animate-float">

                <img
                  src={image}
                  alt="Web Development Services"
                  className="w-3/4 md:w-full max-w-xl h-auto object-contain mx-auto drop-shadow-2xl"
                  loading="lazy"
                />

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =====================================================
          OUR WEB DEVELOPMENT SERVICES
      ====================================================== */}

      <section className="relative bg-[#EFF0F6] py-20 overflow-hidden">

        {/* Background Decorations */}

        <div className="absolute top-10 left-0 w-64 h-64 bg-[#A202F0]/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="absolute bottom-10 right-0 w-72 h-72 bg-[#A202F0]/5 rounded-full blur-3xl pointer-events-none"></div>


        <div className="container mx-auto px-4 relative">


          {/* Section Heading */}

          <div className="max-w-4xl mx-auto text-center mb-14">

           

            <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-[#A202F0] leading-tight">
              Our Web Development Services
            </h3>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>

            <p className="mt-5 text-gray-600 max-w-2xl mx-auto leading-relaxed">

              From professional corporate websites to custom web
              applications, we build scalable, responsive, secure,
              and business-focused digital solutions designed around
              your goals.

            </p>

          </div>


          {/* =================================================
              SERVICES CARDS
          ================================================== */}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">

            {webServices.map((service, index) => {

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
                    min-h-[300px]
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

                  <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/25">

                    {String(index + 1).padStart(2, "0")}

                  </div>


                  {/* Icon */}

                  <div
                    className="
                      w-16
                      h-16
                      rounded-2xl
                      bg-[#A202F0]/10
                      flex
                      items-center
                      justify-center
                      mb-5
                      transition-all
                      duration-500
                      group-hover:bg-[#A202F0]
                      group-hover:scale-110
                      group-hover:-rotate-3
                    "
                  >

                    <Icon
                      size={31}
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

                  <p className="text-gray-500 text-base leading-relaxed max-w-sm">

                    {service.description}

                  </p>


                  {/* Bottom Hover Line */}

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
          CTA SECTION
      ====================================================== */}

      <section className="relative bg-[#A202F0] text-white py-16 overflow-hidden">

        {/* Background Decorations */}

        <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-white/10 blur-2xl"></div>

        <div className="absolute -bottom-32 -left-20 w-80 h-80 rounded-full bg-white/10 blur-3xl"></div>


        <div className="container mx-auto px-4 relative">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">


            {/* CTA Content */}

            <div className="text-center md:text-left max-w-2xl">

              <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
Turn Your Vision Into a Digital Product

              </h3>

              <p className="mt-4 text-white/90 leading-relaxed">

            
Your website should do more than look professional. It should support your customers, streamline your processes, strengthen your brand, and contribute to business growth.
              </p>
                 <p className="mt-4 text-white/90 leading-relaxed">
                 
                 Moin Consultancy combines strategy, UI/UX, development, cloud, and technology expertise to create digital solutions built around your business.</p>

 <h3 className="text-xl md:text-2xl lg:text-3xl font-bold text-white leading-tight">
  Imagine. Build. Launch. Grow.
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

              Start Your Web Project

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

export default WebDevelopment;
