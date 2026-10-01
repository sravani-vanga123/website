import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import CareerImage from '../../../assets/Career1.png';
import StudentEnquiryForm from "../../../components/StudentEnquiry/StudentEnquiryForm";
import {
  GraduationCap,
  University,
  FileCheck,
  Award,
  FileText,
  Plane,
  UserRoundCheck,
  Globe2,
  Target,
  Handshake,
  ShieldCheck,
} from "lucide-react";

const StudyAbroad = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* SEO */}
      <SEO
        title="Study Abroad & International Education | Moin Consultancy"
        description="Explore study abroad opportunities with Moin Consultancy. Get guidance on universities, courses, applications, scholarships, visas, and international education pathways."
        keywords="Study Abroad, International Education, Study Overseas, Overseas Education, University Admissions, Study Abroad Consultancy, Moin Consultancy"
        url="/services/education/study-abroad"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#A202F0] opacity-70">

          <li>
            <Link
              to="/"
              className="hover:text-[#A202F0]"
            >
              Home
            </Link>
          </li>

          <li>/</li>

          <li className="hover:text-[#A202F0] cursor-default">
            Services
          </li>

          <li>/</li>

          <li className="font-semibold opacity-100">
            Study Abroad
          </li>

        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">

        <div className="flex flex-col md:flex-row items-center gap-14">

          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">

            <h3 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              Your Global Education Journey Starts Here.
            </h3>

            <p className="text-lg leading-relaxed">
              At Moin Consultancy, we help students turn international
              education aspirations into clear, achievable career pathways.
              From choosing the right country and university to applications,
              visa guidance, and pre-departure support, we provide end-to-end
              guidance for your global education journey.
            </p>

            <h3 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              Study Globally. Build Your Future.
            </h3>

            <p className="leading-relaxed">
              Choose from leading study destinations offering world-class
              education, industry exposure, research opportunities, and
              pathways to global careers.
            </p>

          </div>

          {/* Hero Image */}
          <div className="w-full md:w-1/2 flex justify-center">

            <img
              src={CareerImage}
              alt="Study Abroad and International Education"
              className="w-3/4 h-3/4 object-contain"
              loading="lazy"
            />

          </div>

        </div>

      </section>

      {/* Our Study Destinations */}
      <section className="bg-[#EFF0F6] py-12 md:py-16">

        <div className="container mx-auto px-4">

          {/* Section Heading */}
          <div className="text-center mb-10">

            <h4 className="text-2xl md:text-3xl font-bold text-[#A202F0] mb-4">
              Our Study Destinations
            </h4>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Explore leading international study destinations and discover
              education opportunities that match your academic and career goals.
            </p>

          </div>

          {/* Destination Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* USA */}
            <DestinationCard
              number="01"
              title="USA"
              description="World-class universities, cutting-edge research, innovation, and diverse career opportunities."
            />

            {/* UK */}
            <DestinationCard
              number="02"
              title="UK"
              description="Globally recognised degrees, industry-focused programmes, and strong academic excellence."
            />

            {/* Australia */}
            <DestinationCard
              number="03"
              title="Australia"
              description="Practical education, strong industry connections, and opportunities for international graduates."
            />

            {/* Canada */}
            <DestinationCard
              number="04"
              title="Canada"
              description="Career-oriented education, co-op opportunities, multicultural learning, and global exposure."
            />

            {/* New Zealand */}
            <DestinationCard
              number="05"
              title="New Zealand"
              description="High-quality education, practical learning, and a supportive international environment."
            />

            {/* Ireland */}
            <DestinationCard
              number="06"
              title="Ireland"
              description="A growing technology and business hub with strong links between education and industry."
            />

            {/* Europe */}
            <DestinationCard
              number="07"
              title="Europe"
              description="Access to diverse universities, specialised programmes, research opportunities, and international learning environments."
            />

            {/* UAE */}
            <DestinationCard
              number="08"
              title="UAE"
              description="A rapidly growing global education and business hub connecting students with emerging industries."
            />

            {/* Turkey */}
            <DestinationCard
              number="09"
              title="Turkey"
              description="Quality education, affordable study options, and a strategic location connecting Europe and Asia."
            />

          </div>

        </div>

      </section>

      {/* Our Study Abroad Services */}
      <section className="bg-white py-12 md:py-16">

        <div className="container mx-auto px-4">

          {/* Section Heading */}
          <div className="text-center mb-10">

            <h4 className="text-3xl font-bold text-[#A202F0] mb-4">
              Our Study Abroad Services
            </h4>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Comprehensive guidance and support to help you confidently plan,
              apply, and prepare for your international education journey.
            </p>

          </div>

          {/* Services Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <ServiceCard
              number="01"
              icon={<GraduationCap size={32} strokeWidth={2} />}
              title="Career & Course Counselling"
              description="Identify the right programme based on your academic background, skills, interests, and career aspirations."
            />

            <ServiceCard
              number="02"
              icon={<University size={32} strokeWidth={2} />}
              title="University Selection"
              description="Shortlist suitable universities based on programme quality, entry requirements, location, budget, and career goals."
            />

            <ServiceCard
              number="03"
              icon={<FileCheck size={32} strokeWidth={2} />}
              title="Application Assistance"
              description="Professional support with university applications, documentation, SOPs, and application submissions."
            />

            <ServiceCard
              number="04"
              icon={<Award size={32} strokeWidth={2} />}
              title="Scholarship Guidance"
              description="Explore suitable scholarship and funding opportunities based on eligibility and programme requirements."
            />

            <ServiceCard
              number="05"
              icon={<FileText size={32} strokeWidth={2} />}
              title="Visa Guidance"
              description="Guidance on visa documentation, application preparation, and interview readiness."
            />

            <ServiceCard
              number="06"
              icon={<Plane size={32} strokeWidth={2} />}
              title="Pre-Departure Support"
              description="Prepare for your international journey with guidance on accommodation, travel, documentation, and life abroad."
            />

          </div>

        </div>

      </section>

      {/* Why Choose Moin Consultancy */}
      <section className="bg-[#EFF0F6] py-12 md:py-16">

        <div className="container mx-auto px-4">

          {/* Section Heading */}
          <div className="text-center mb-10">

            <h4 className="text-3xl font-bold text-[#A202F0] mb-4">
              Why Choose Moin Consultancy?
            </h4>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Trusted guidance and personalised support to help students
              achieve their international education goals.
            </p>

          </div>

          {/* Why Choose Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            <WhyChooseCard
              number="01"
              icon={<UserRoundCheck size={32} strokeWidth={2} />}
              title="Personalised Guidance"
              description="Every student receives guidance based on their unique academic and career objectives."
            />

            <WhyChooseCard
              number="02"
              icon={<Globe2 size={32} strokeWidth={2} />}
              title="Global University Access"
              description="Explore opportunities across leading international study destinations."
            />

            <WhyChooseCard
              number="03"
              icon={<Target size={32} strokeWidth={2} />}
              title="Career-Focused Approach"
              description="We connect education choices with long-term career goals and industry opportunities."
            />

            <WhyChooseCard
              number="04"
              icon={<Handshake size={32} strokeWidth={2} />}
              title="End-to-End Support"
              description="From your first counselling session to your departure, we support you throughout the process."
            />

            <WhyChooseCard
              number="05"
              icon={<ShieldCheck size={32} strokeWidth={2} />}
              title="Transparent Guidance"
              description="Clear information and responsible guidance at every stage of your journey."
              extraClass="md:col-span-2 lg:col-span-1"
            />

          </div>

        </div>

      </section>
 <StudentEnquiryForm />
      {/* CTA */}
      <section className="bg-[#A202F0] text-white py-16">

        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">

          <div>

            <h3 className="text-3xl font-bold">
              Your Ambition. Your Destination. Your Global Future.
            </h3>

          </div>

          <Link
            to="/contact"
            className="bg-white hover:bg-black text-[#A202F0] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center"
          >
            Start Your Study Abroad Journey →
          </Link>

        </div>

      </section>

    </div>
  );
};


/* =========================================================
   Destination Card
========================================================= */

const DestinationCard = ({
  number,
  title,
  description,
}) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-md border-t-4 border-[#A202F0] p-5 min-h-[220px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl">

      <div className="absolute top-3 right-4 text-xs font-bold text-[#A202F0]/30">
        {number}
      </div>

      <h3 className="text-lg font-bold text-[#A202F0] mb-2">
        {title}
      </h3>

      <p className="text-gray-500 text-base leading-relaxed max-w-xs">
        {description}
      </p>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-16"></div>

    </div>
  );
};


/* =========================================================
   Service Card
========================================================= */

const ServiceCard = ({
  number,
  icon,
  title,
  description,
}) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[280px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

      <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
        {number}
      </div>

      <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">

        <div className="text-[#A202F0] transition-colors duration-300 group-hover:text-white">
          {icon}
        </div>

      </div>

      <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
        {title}
      </h3>

      <p className="text-gray-500 text-base leading-relaxed max-w-xs">
        {description}
      </p>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

    </div>
  );
};


/* =========================================================
   Why Choose Card
========================================================= */

const WhyChooseCard = ({
  number,
  icon,
  title,
  description,
  extraClass = "",
}) => {
  return (
    <div
      className={`group relative bg-white rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[280px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl ${extraClass}`}
    >

      <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
        {number}
      </div>

      <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">

        <div className="text-[#A202F0] transition-colors duration-300 group-hover:text-white">
          {icon}
        </div>

      </div>

      <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
        {title}
      </h3>

      <p className="text-gray-500 text-base leading-relaxed max-w-xs">
        {description}
      </p>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

    </div>
    
  );
 
};

export default StudyAbroad;