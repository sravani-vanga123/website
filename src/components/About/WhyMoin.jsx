import React from "react";

import {
  Globe2,
  Handshake,
  Lightbulb,
  ShieldCheck,
} from "lucide-react";

import {
  FaLaptopCode,
  FaIndustry,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

const WhyMoin = () => {
  const values = [
    {
      icon: Globe2,
      title: "Global Perspective",
      description:
        "Connecting local capabilities with international expertise and opportunities.",
    },

    

   
    {
      icon: FaGraduationCap,
      title: "Industry Focus",
      description:
        "Understanding evolving industry requirements and creating solutions around real-world needs."
    },

    {
      icon: FaUsers,
      title: "Recruitment & Talent",
      description:
        "We bridge organizations with skilled professionals through recruitment, talent acquisition, workforce solutions, career development, and industry-aligned training.",
    },

    {
      icon: Handshake,
      title: "Strategic Partnerships",
      description:
        "Building relationships that generate long-term value for our clients and partners.",
    },

    {
      icon: Lightbulb,
      title: "Innovation & Technology",
      description:
        "Embracing modern technologies and forward-thinking approaches to solve business challenges.",
    },

    {
      icon: ShieldCheck,
      title: "Trust & Integrity",
      description:
        "Building every relationship on transparency, professionalism, accountability, and mutual success.",
    },
  ];

  return (
    <section className="py-16 md:py-20 bg-gray-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 uppercase tracking-wide">
            Why Moin Consultancy?
          </h2>

          <p className="max-w-4xl mx-auto mt-5 text-gray-600 text-base md:text-lg leading-relaxed">
            We combine global perspectives, industry knowledge, technology,
            and people-focused solutions to create meaningful and long-term
            value.
          </p>

          {/* Underline */}
          <div className="h-1 w-16 bg-[#A202F0] mx-auto mt-5 rounded-full"></div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {values.map((item, index) => {
            const Icon = item.icon;

            return (
              <div
                key={index}
                className="w-full"
              >
                <div
                  className="
                    bg-white
                    p-8
                    rounded-2xl
                    shadow-md
                    hover:shadow-xl
                    transition-all
                    duration-300
                    hover:-translate-y-2
                    text-center
                    border-t-4
                    border-[#A202F0]
                    min-h-[400px]
                    h-full
                    flex
                    flex-col
                    items-center
                    justify-center
                  "
                >

                  {/* Icon */}
                  <div className="flex items-center justify-center w-20 h-20 rounded-full bg-[#A202F0]/10 mb-6">
                    <Icon
                      size={40}
                      strokeWidth={2.5}
                      className="text-[#A202F0]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl font-bold text-[#A202F0] mb-5">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 text-base leading-7">
                    {item.description}
                  </p>

                </div>
              </div>
            );
          })}

        </div>
      </div>
    </section>
  );
};

export default WhyMoin;