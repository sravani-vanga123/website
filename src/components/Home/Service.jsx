import React from 'react';

import {
    GraduationCap,
    Laptop,
    Plane,
    Truck,
    SolarPanel,
    Factory
} from 'lucide-react';

import { motion } from 'framer-motion';


// ======================================================
// SERVICES DATA
// ======================================================

const services = [
    {
        icon: GraduationCap,
        title: 'Education',
        description:
            'Explore education and training opportunities designed to build skills, support higher education goals, and create better career opportunities.'
    },

    {
        icon: Laptop,
        title: 'Technology',
        description:
            'Our technology services help businesses improve their digital presence, streamline operations, and build reliable technology solutions.'
    },

    {
        icon: Plane,
        title: 'Immigration',
        description:
            'Get professional guidance for international immigration opportunities with support throughout your visa and immigration journey.'
    },

    {
        icon: Truck,
        title: 'Logistics',
        description:
            'Our logistics services support businesses with efficient movement, coordination, and management of goods across domestic and international markets.'
    },

    {
        icon: SolarPanel,
        title: 'Renewable Energy',
        description:
            'Explore renewable energy solutions focused on sustainable power generation and efficient energy management.'
    },

    {
        icon: Factory,
        title: 'Manufacturing',
        description:
            'Our manufacturing services support businesses with product development, production, quality management, and operational solutions.'
    }
];


// Header animation
const headerVariants = {
    hidden: {
        opacity: 0,
        y: 30
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.6,
            ease: 'easeOut'
        }
    }
};

// Container animation
const containerVariants = {
    hidden: {
        opacity: 0
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15
        }
    }
};

// Card animation
const cardVariants = {
    hidden: {
        opacity: 0,
        y: 40
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.5,
            ease: 'easeOut'
        }
    }
};

const Service = () => {
    return (
        <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Animated Header */}
                <motion.div
                    className="text-center mb-12 md:mb-16"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: '-100px'
                    }}
                    variants={headerVariants}
                >
                    <h2 className="text-4xl font-extrabold text-gray-900 tracking-tight">
                        Explore Our Extensive Service Portfolio
                    </h2>

                    {/* Purple Line */}
                    <div className="h-1 w-16 bg-[#A202F0] mx-auto mt-3 rounded-full"></div>

                    <p className="mt-4 text-xl text-gray-600 max-w-3xl mx-auto">
                          Explore our industry-focused services and
          discover solutions designed to support business
          growth and operational excellence.
                    </p>
                </motion.div>

                {/* Animated Grid */}
                <motion.div
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                    initial="hidden"
                    whileInView="visible"
                    viewport={{
                        once: true,
                        margin: '-50px'
                    }}
                    variants={containerVariants}
                >

                    {services.map((service, index) => {
                        const Icon = service.icon;

                        return (
                            <motion.div
                                key={index}
                                variants={cardVariants}

                                // Card lift animation
                                whileHover={{
                                    y: -10
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
                                "
                            >

                                {/* Icon */}
                                <div className="mb-4 mx-auto text-[#A202F0]">
                                    <Icon className="w-10 h-10" />
                                </div>

                                {/* Title */}
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {service.title}
                                </h3>

                                {/* Description */}
                                <p className="text-gray-600 leading-relaxed text-sm">
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

export default Service;