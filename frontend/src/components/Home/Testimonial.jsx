import React from 'react';
import { FaQuoteLeft, FaStar, FaRegStar } from 'react-icons/fa';

// --- Helper Component: TestimonialCard ---
const TestimonialCard = ({ title, review, rating }) => {

    const renderStars = (rating) => {
        const stars = [];

        for (let i = 1; i <= 5; i++) {
            if (i <= rating) {
                stars.push(
                    <FaStar
                        key={i}
                        className="text-yellow-400"
                    />
                );
            } else {
                stars.push(
                    <FaRegStar
                        key={i}
                        className="text-gray-300"
                    />
                );
            }
        }

        return stars;
    };

    return (
        <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition duration-300 flex flex-col border-t-4 border-primary h-full">

            {/* Quote Icon */}
            <FaQuoteLeft className="w-8 h-8 text-primary mb-4 opacity-30" />

            {/* Review */}
            <p className="text-gray-dark leading-relaxed italic mb-6 flex-grow">
                "{review}"
            </p>

            {/* Rating */}
            <div className="flex gap-1 mb-6">
                {renderStars(rating)}
            </div>

            {/* Service Information */}
            <div className="flex items-center mt-auto border-t border-gray-200 pt-4">

                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <FaQuoteLeft className="text-primary" />
                </div>

                <div className="ml-4">
                    <h4 className="text-lg font-semibold text-black">
                        {title}
                    </h4>

                    <p className="text-sm text-gray-dark">
                        Moin Consultancy
                    </p>
                </div>

            </div>
        </div>
    );
};


// --- Main Component ---
const Testimonial = () => {

    const reviews = [
        {
            id: 1,
            title: "Professional Support",
            rating: 5,
            review:
                "Moin Consultancy focuses on understanding client requirements and providing structured support throughout the service process."
        },
        {
            id: 2,
            title: "Client-Focused Approach",
            rating: 5,
            review:
                "Our approach is centered around practical solutions, clear communication, and support tailored to individual and business requirements."
        },
        {
            id: 3,
            title: "Reliable Services",
            rating: 5,
            review:
                "Moin Consultancy brings together professional services across education, technology, immigration, logistics, renewable energy, and manufacturing."
        }
    ];

    return (
        <section className="py-16 md:py-24 bg-gray-light">

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                {/* Header */}
                <div className="text-center mb-12 md:mb-16">

                    <h2 className="text-4xl font-extrabold text-black tracking-tight">
                        Client Testimonials
                    </h2>

                    <div className="h-1 w-16 bg-primary mx-auto mt-3 rounded-full"></div>

                    <p className="mt-4 text-xl text-gray-dark">
                        Our approach to professional and client-focused services
                    </p>

                </div>

                {/* Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

                    {reviews.map((review) => (
                        <TestimonialCard
                            key={review.id}
                            {...review}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
};

export default Testimonial;