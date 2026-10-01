import React from "react";
import { Eye, Target } from "lucide-react";

const Missionvision = () => {
  const cards = [
    {
      icon: Eye,
      title: "Our Vision",
      description:
        "To become a trusted global ecosystem partner connecting technology, manufacturing, education, and talent to create sustainable growth and international opportunities.",
    },
    {
      icon: Target,
      title: "Our Mission",
      description:
        "To connect global partners, businesses, institutions, and talent through innovative IT solutions, manufacturing partnerships, education pathways, and workforce solutions that accelerate growth and create lasting value.",
    },
  ];

  return (
    <section className="w-full bg-gray-50 py-20 px-5 md:px-10">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-14">

        <p className="text-[#A202F0] font-semibold text-sm md:text-base uppercase tracking-[3px] mb-3">
          Mission & Vision
        </p>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#151b2b]">
          Our Objectives & Future Direction
        </h2>

        <p className="max-w-2xl mx-auto mt-5 text-gray-500 text-base md:text-lg">
          Building a stronger future through innovation, opportunities,
          partnerships, and sustainable growth.
        </p>

      </div>


      {/* ================= CARDS ================= */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">

        {cards.map((card, index) => {
          const Icon = card.icon;

          return (
            <div
              key={index}
              className="
                group
                relative
                bg-white
                rounded-2xl
                border-t-[6px]
                border-[#A202F0]
                px-8
                py-12
                md:px-12
                md:py-14
                text-center
                shadow-[0_15px_35px_rgba(0,0,0,0.10)]
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-[0_20px_45px_rgba(0,0,0,0.15)]
              "
            >

              {/* ================= ICON ================= */}
              <div className="flex justify-center mb-8">

                <div
                  className="
                    w-16
                    h-16
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Icon
                    className="
                      w-12
                      h-12
                      text-[#A202F0]
                      stroke-[2.5]
                      transition-transform
                      duration-300
                      group-hover:scale-110
                    "
                  />
                </div>

              </div>


              {/* ================= TITLE ================= */}
              <h3 className="text-2xl md:text-3xl font-bold text-[#151b2b] mb-6">
                {card.title}
              </h3>


              {/* ================= DESCRIPTION ================= */}
              <p
                className="
                  text-gray-500
                  text-base
                  md:text-lg
                  leading-8
                  max-w-xl
                  mx-auto
                "
              >
                {card.description}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
};

export default Missionvision;