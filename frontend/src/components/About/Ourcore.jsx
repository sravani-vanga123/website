// src/components/About/Ourcore.jsx

import React from "react";
import {
  FaLaptopCode,
  FaIndustry,
  FaGraduationCap,
  FaUsers,
} from "react-icons/fa";

import { motion } from "framer-motion";

// ======================================================
// SERVICES DATA
// ======================================================

const coreServices = [
  {
    icon: FaLaptopCode,
    title: "IT Solutions",
    description:
      "We help businesses embrace digital transformation through innovative and reliable technology solutions, including software development, web solutions, cloud services, cybersecurity, and IT consulting.",
  },
  {
    icon: FaIndustry,
    title: "Manufacturing",
    description:
      "We facilitate connections between manufacturers, industrial organizations, suppliers, technology providers, and international partners to support industrial innovation, smart manufacturing, operational efficiency, and business expansion.",
  },
  {
    icon: FaGraduationCap,
    title: "Education",
    description:
      "We connect students and professionals with leading educational institutions and global learning opportunities, providing guidance across international education, university admissions, career counselling, professional training, and skill development.",
  },
  {
    icon: FaUsers,
    title: "Recruitment & Talent",
    description:
      "We bridge organizations with skilled professionals through recruitment, talent acquisition, workforce solutions, career development, and industry-aligned training.",
  },
];

// ======================================================
// ANIMATIONS
// ======================================================

// Header animation
const headerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

// Container animation
const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

// Card animation
const cardVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

// ======================================================
// COMPONENT
// ======================================================

const Ourcore = () => {
  return (
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ================= HEADER ================= */}
        <motion.div
          className="text-center mb-12 md:mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-100px",
          }}
          variants={headerVariants}
        >
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 tracking-tight uppercase">
            Our Core Areas
          </h2>

          {/* Purple Line */}
          <div className="h-1 w-16 bg-[#A202F0] mx-auto mt-4 rounded-full"></div>

          <p className="mt-5 text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Explore our industry-focused services and discover solutions
            designed to support business growth, professional development,
            innovation, and operational excellence.
          </p>
        </motion.div>

        {/* ================= CARDS ================= */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            margin: "-50px",
          }}
          variants={containerVariants}
        >
          {coreServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{
                  y: -10,
                }}
                className="
                  bg-white
                  p-6 md:p-8
                  rounded-xl
                  shadow-lg
                  hover:shadow-xl
                  transition-all
                  duration-300
                  flex
                  flex-col
                  text-center
                  border-t-4
                  border-transparent
                  hover:border-[#A202F0]
                  min-h-[400px]
                  h-full
                "
              >
                {/* Icon */}
                <div className="mb-6 mx-auto flex items-center justify-center w-20 h-20 rounded-full bg-[#A202F0]/10">
                  <Icon
                    size={40}
                    className="text-[#A202F0]"
                  />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-7 text-sm md:text-base">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
};

export default Ourcore;