import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career1.png";
import SEO from "../../../components/SEO/SEO";

import {
  ShieldCheck,
  Shield,
  Cloud,
  KeyRound,
  SearchCheck,
  CodeXml,
  BarChart3,
  DatabaseBackup,
  Siren,
  ArrowRight,
} from "lucide-react";

const cybersecurityServices = [
  {
    icon: ShieldCheck,
    title: "Cybersecurity Assessment",
    description:
      "Identify vulnerabilities, security gaps, and potential risks across your IT environment with structured security assessments.",
  },
  {
    icon: Shield,
    title: "Network Security",
    description:
      "Protect your network infrastructure with security controls designed to prevent unauthorized access, monitor threats, and strengthen network resilience.",
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description:
      "Secure cloud environments, workloads, applications, and data with security-focused architecture, access controls, monitoring, and protection.",
  },
  {
    icon: KeyRound,
    title: "Identity & Access Management",
    description:
      "Control who can access your systems and data through secure authentication, authorization, access policies, and identity management.",
  },
  {
    icon: SearchCheck,
    title: "Vulnerability Assessment",
    description:
      "Discover and prioritize security weaknesses across applications, systems, networks, and infrastructure so organizations can address risks proactively.",
  },
  {
    icon: CodeXml,
    title: "Application Security",
    description:
      "Integrate security into application environments to help protect software, APIs, databases, and sensitive business information.",
  },
  {
    icon: BarChart3,
    title: "Security Monitoring",
    description:
      "Improve visibility across your IT environment through continuous monitoring, logging, threat detection, and security event analysis. CISA specifically highlights logging and monitoring as important capabilities for detecting and responding to cyber threats.",
  },
  {
    icon: DatabaseBackup,
    title: "Data Protection & Backup",
    description:
      "Protect critical business information through data-security controls, secure backups, encryption, and recovery strategies.",
  },
  {
    icon: Siren,
    title: "Incident Response & Recovery",
    description:
      "Prepare your organization to respond to security incidents, contain disruption, recover systems, and strengthen defenses after an incident.",
  },
];


const CyberSecurity= () => {
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
        url="/services/Technology/cybersecurity"
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
            CyberSecurity
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
Secure Your Business. Strengthen Your Future
</h3>

            {/* Purple underline */}
            <div className="w-20 h-1 bg-[#A202F0] rounded-full"></div>

            <p className="text-lg leading-relaxed text-gray-700">
             Protect your digital infrastructure, business data, and critical applications with comprehensive cybersecurity solutions designed for modern organizations
            </p>

            <p className=" text-lg  leading-relaxed text-gray-700">
             At Moin Consultancy, we help businesses identify security risks, strengthen their digital defenses, and build resilient technology environments. From security assessments and vulnerability management to network, cloud, application, and data security, our solutions are designed around your organization's specific requirements.
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
             Our Cybersecurity Services
            </h3>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto mt-5"></div>

           
          </div>

          {/* Career Counselling Approach Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 max-w-6xl mx-auto">
            {cybersecurityServices.map((step, index) => {
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
               Strengthen Your Security
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
              Talk to Our Security Experts
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

export default CyberSecurity;