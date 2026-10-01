import React, { useState } from 'react';
import { FaPhoneAlt, FaEnvelope, FaClock } from 'react-icons/fa';
import { HiOutlineMapPin } from 'react-icons/hi2';
import Swal from 'sweetalert2';
import SEO from '../components/SEO/SEO';

import HeroImage from '../assets/contact-Hero-Image-1.jpg';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
        captcha: '',
    });

    const [captchaCorrect, setCaptchaCorrect] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    // Handle contact form submission
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Check CAPTCHA
        if (!captchaCorrect) {
            Swal.fire(
                'Error',
                'Please complete the human verification first.',
                'error'
            );
            return;
        }

        // Prevent multiple submissions
        if (isSubmitting) {
            return;
        }

        setIsSubmitting(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/contact`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: formData.name,
                        email: formData.email,
                        phone: formData.phone,
                        message: formData.message,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message || 'Failed to submit contact form.'
                );
            }

            // Success message
            await Swal.fire({
                title: 'Success!',
                text: 'Your message has been submitted successfully.',
                icon: 'success',
                confirmButtonColor: '#A202F0',
            });

            // Reset form
            setFormData({
                name: '',
                email: '',
                phone: '',
                message: '',
                captcha: '',
            });

            setCaptchaCorrect(false);
        } catch (error) {
            console.error('Contact Form Error:', error);

            Swal.fire(
                'Error',
                error.message ||
                    'Failed to send message. Please try again later.',
                'error'
            );
        } finally {
            setIsSubmitting(false);
        }
    };

    // CAPTCHA
    const handleCaptchaClick = (selectedIcon) => {
        if (selectedIcon === 'cap') {
            setCaptchaCorrect(true);

            setFormData((prevData) => ({
                ...prevData,
                captcha: 'cap',
            }));
        } else {
            setCaptchaCorrect(false);

            setFormData((prevData) => ({
                ...prevData,
                captcha: '',
            }));

            Swal.fire({
                toast: true,
                position: 'top-end',
                icon: 'error',
                title: 'Incorrect selection',
                showConfirmButton: false,
                timer: 1500,
            });
        }
    };

    return (
        <div className="bg-white min-h-screen">

            {/* SEO */}
            <SEO
                title="Contact Us | Moin Consultancy - Get in Touch"
                description="Contact Moin Consultancy for education, technology, immigration, logistics, renewable energy, and manufacturing services."
                keywords="Contact Moin Consultancy, Moin Consultancy Address, Moin Consultancy Phone, Education Services, Technology Services, Immigration Services, Logistics Services"
                url="/contact"
                image={HeroImage}
                siteName="Moin Consultancy"
                type="website"
            />

            {/* ================= HERO SECTION ================= */}

            <div
                className="relative bg-cover bg-center h-64 flex items-center justify-start text-white p-8"
                style={{
                    backgroundImage: `url(${HeroImage})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-gray-900 opacity-60"></div>

                <div className="relative z-10 p-4">
                    <h1 className="text-4xl font-bold mb-2">
                        Contact Us
                    </h1>

                    <p className="text-xl">
                        Contact for Premium Business Services
                    </p>
                </div>
            </div>

            {/* ================= MAIN CONTENT ================= */}

            <div className="container mx-auto p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-3 gap-12">

                {/* ================= LEFT COLUMN ================= */}

                <div className="lg:col-span-1 bg-white p-8 shadow-xl rounded-lg border border-gray-100 h-fit">

                    {/* REGISTERED OFFICE */}

                    <div className="mb-8 border-b pb-4">

                        <h2 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                            <HiOutlineMapPin className="text-[#A202F0] mr-2" />
                            REGISTERED OFFICE
                        </h2>

                        <p className="text-gray-600 ml-6">
                            9-7-054, Near Sri Sai Junior College,
                            <br />
                            Bezawada gardens,
                            <br />
                            Yanam-533464
                        </p>

                        <p className="text-gray-600 mt-2 ml-6 flex items-center">
                            <FaPhoneAlt className="text-sm mr-2 text-[#A202F0]" />
                            +919390605958
                        </p>

                    </div>

                    {/* HEAD OFFICE */}

                    <div className="mb-8 border-b pb-4">

                        <h2 className="text-xl font-bold text-gray-800 flex items-center mb-2">
                            <HiOutlineMapPin className="text-[#A202F0] mr-2" />
                            HEAD OFFICE
                        </h2>

                        <p className="text-gray-600 ml-6">
                            Vijayawada
                        </p>

                        <p className="text-gray-600 mt-2 ml-6 flex items-center">
                            <FaPhoneAlt className="text-sm mr-2 text-[#A202F0]" />
                            +919390605958
                        </p>

                    </div>

                    {/* EMAIL */}

                    <div className="mb-8 border-b pb-4">

                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            Talk to us
                        </h2>

                        <p className="text-gray-600 mt-2 ml-0 flex items-center">
                            <FaEnvelope className="text-sm mr-2 text-[#A202F0]" />
                            connect@moinconsultancy.com
                        </p>

                    </div>

                    {/* OPENING HOURS */}

                    <div className="mb-4">

                        <h2 className="text-xl font-bold text-gray-800 mb-2">
                            Opening hour
                        </h2>

                        <p className="text-gray-600 mt-2 ml-0 flex items-center">
                            <FaClock className="text-sm mr-2 text-[#A202F0]" />
                            Monday-Saturday
                        </p>

                        <p className="text-gray-600 ml-6">
                            9:00 a.m. - 7:00 p.m.
                        </p>

                    </div>

                </div>

                {/* ================= RIGHT COLUMN ================= */}

                <div className="lg:col-span-2 p-8 shadow-xl rounded-lg bg-gray-50 border border-gray-200">

                    <p className="text-sm font-semibold text-[#A202F0] mb-1">
                        MESSAGE US, CONNECT HERE
                    </p>

                    <h2 className="text-3xl font-bold text-gray-800 mb-6">
                        Drop Us a Quick Message
                    </h2>

                    <p className="text-gray-600 mb-6">
                        We'll love to hear from you. Please complete the form below and share your requirements.
                    </p>

                    {/* ================= CONTACT FORM ================= */}

                    <form
                        onSubmit={handleSubmit}
                        className="space-y-4"
                    >

                        {/* NAME */}

                        <input
                            type="text"
                            name="name"
                            placeholder="Name*"
                            className="input input-bordered w-full border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#A202F0] outline-none"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        {/* EMAIL */}

                        <input
                            type="email"
                            name="email"
                            placeholder="Email*"
                            className="input input-bordered w-full border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#A202F0] outline-none"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        {/* PHONE */}

                        <input
                            type="tel"
                            name="phone"
                            placeholder="+ Phone*"
                            className="input input-bordered w-full border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#A202F0] outline-none"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        {/* MESSAGE */}

                        <textarea
                            name="message"
                            placeholder="Describe Your Message Here*"
                            className="textarea textarea-bordered w-full h-32 border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-[#A202F0] outline-none"
                            value={formData.message}
                            onChange={handleChange}
                            required
                        ></textarea>

                        {/* ================= CAPTCHA ================= */}

                        <div className="p-4 bg-white rounded-lg border border-gray-300">

                            <p className="text-sm mb-3">
                                Please prove you are human by selecting{' '}
                                <span className="font-bold text-red-500">
                                    cap
                                </span>
                            </p>

                            <div className="flex space-x-4">

                                {/* CUP */}

                                <button
                                    type="button"
                                    className={`text-2xl p-2 rounded-lg transition-all ${
                                        !captchaCorrect
                                            ? 'hover:bg-gray-100'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        handleCaptchaClick('cup')
                                    }
                                >
                                    ☕
                                </button>

                                {/* BELL */}

                                <button
                                    type="button"
                                    className={`text-2xl p-2 rounded-lg transition-all ${
                                        !captchaCorrect
                                            ? 'hover:bg-gray-100'
                                            : ''
                                    }`}
                                    onClick={() =>
                                        handleCaptchaClick('bell')
                                    }
                                >
                                    🔔
                                </button>

                                {/* CAP */}

                                <button
                                    type="button"
                                    className={`text-2xl p-2 rounded-lg transition-all ${
                                        captchaCorrect
                                            ? 'border-2 border-green-500 bg-green-50'
                                            : 'hover:bg-gray-100'
                                    }`}
                                    onClick={() =>
                                        handleCaptchaClick('cap')
                                    }
                                >
                                    🎓
                                </button>

                            </div>

                            {/* CAPTCHA SUCCESS MESSAGE */}

                            {captchaCorrect && (
                                <p className="text-green-600 text-sm mt-2 font-medium">
                                    ✓ Human verification completed
                                </p>
                            )}

                        </div>

                        {/* ================= SUBMIT BUTTON ================= */}

                        <button
                            type="submit"
                            disabled={!captchaCorrect || isSubmitting}
                            className={`w-full sm:w-auto px-8 py-3 rounded-md font-bold text-white transition-all ${
                                captchaCorrect && !isSubmitting
                                    ? 'bg-[#A202F0] hover:bg-[#8500C7]'
                                    : 'bg-gray-400 cursor-not-allowed'
                            }`}
                        >
                            {isSubmitting
                                ? 'Sending...'
                                : 'Send Message'}
                        </button>

                    </form>

                </div>

            </div>

            {/* ================= GOOGLE MAP ================= */}

            <div className="w-full h-96 bg-gray-200">

                <iframe
                    title="Moin Consultancy Office Location"
                    width="100%"
                    height="100%"
                    frameBorder="0"
                    scrolling="no"
                    marginHeight="0"
                    marginWidth="0"
                    src="https://maps.google.com/maps?q=Yanam%2C%20India&t=&z=15&ie=UTF8&iwloc=&output=embed"
                    loading="lazy"
                ></iframe>

            </div>

            {/* ================= FLOATING CALL BUTTON ================= */}

            <a
                href="tel:+919390605958"
                className="fixed bottom-6 right-6 p-4 bg-green-500 text-white rounded-full shadow-lg hover:bg-green-600 transition duration-300 z-50"
            >
                <FaPhoneAlt size={24} />
            </a>

        </div>
    );
};

export default ContactUs;