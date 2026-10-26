import React from 'react';
import { Link } from 'react-router-dom';
import SEO from '../../../components/SEO/SEO';
import CareerImage from '../../../assets/Study.png';
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
          <li><Link to="/" className="hover:text-[#A202F0]">Home</Link></li>
          <li>/</li>
          <li className="hover:text-[#A202F0] cursor-default">Services</li>
          <li>/</li>
          <li className="font-semibold opacity-100">Study Abroad</li>
        </ul>
      </div>

      {/* =========================================================
          Hero Section - WITH ADDONS
      ========================================================= */}
      <section className="relative overflow-hidden container mx-auto px-4 py-12 md:py-20">

        {/* ADDON 1: Purple Wavy Ribbon Lines */}
        <div className="absolute inset-0 -z-10 opacity-[0.15] pointer-events-none">
          <svg width="100%" height="100%" viewBox="0 0 1200 500" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <g stroke="#A202F0" strokeWidth="0.8" fill="none" strokeLinecap="round">
              <path d="M-100 180 C 200 30, 400 370, 600 190 S 900 80, 1300 200" />
              <path d="M-100 190 C 200 40, 400 380, 600 200 S 900 90, 1300 210" />
              <path d="M-100 200 C 200 50, 400 390, 600 210 S 900 100, 1300 220" />
              <path d="M-100 210 C 200 60, 400 400, 600 220 S 900 110, 1300 230" />
              <path d="M-100 220 C 200 70, 400 410, 600 230 S 900 120, 1300 240" />
              <path d="M-100 230 C 200 80, 400 420, 600 240 S 900 130, 1300 250" />
              <path d="M-100 240 C 200 90, 400 430, 600 250 S 900 140, 1300 260" />
              <path d="M-100 250 C 200 100, 400 440, 600 260 S 900 150, 1300 270" />
              <path d="M-100 260 C 200 110, 400 450, 600 270 S 900 160, 1300 280" />
              <path d="M-100 270 C 200 120, 400 460, 600 280 S 900 170, 1300 290" />
            </g>
          </svg>
        </div>

        {/* ADDON 2: Mint / Purple Glow Blobs */}
        <div className="absolute top-5 -right-20 w-[400px] h-[400px] bg-[#E9D5FF]/50 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-[60px] -z-10 pointer-events-none"></div>
        <div className="absolute -bottom-20 -left-20 w-[350px] h-[350px] bg-[#D5F0E6]/60 rounded-[40%_60%_70%_30%/30%_70%_40%_60%] blur-[50px] -z-10 pointer-events-none"></div>

        {/* ADDON 3: Small Circles & Triangles */}
        <div className="absolute top-16 left-[45%] w-3 h-3 bg-[#A202F0]/20 rounded-full pointer-events-none"></div>
        <div className="absolute top-24 left-[48%] w-16 h-16 border border-[#A202F0]/15 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-20 left-[40%] w-0 h-0 border-l-[12px] border-r-[12px] border-b-[20px] border-l-transparent border-r-transparent border-b-[#A202F0]/15 rotate-12 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row items-center gap-14 relative z-10">
          <div className="w-full md:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-[#A202F0] leading-tight">
              Your Global Education Journey Starts Here.
            </h3>
            <p className="text-base leading-relaxed">
              At Moin Consultancy, we help students turn international
              education aspirations into clear, achievable career pathways.
              From choosing the right country and university to applications,
              visa guidance, and pre-departure support, we provide end-to-end
              guidance for your global education journey.
            </p>
            <h3 className="text-3xl font-bold text-[#A202F0] leading-tight">
              Study Globally. Build Your Future.
            </h3>
            <p className="text-base leading-relaxed">
              Choose from leading study destinations offering world-class
              education, industry exposure, research opportunities, and
              pathways to global careers.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center relative">
            {/* Image behind addon glow */}
            <div className="absolute w-[80%] h-[80%] bg-gradient-to-br from-[#A202F0]/10 to-[#D5F0E6]/50 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-[10px] -z-10"></div>
            <img
              src={CareerImage}
              alt="Study Abroad and International Education"
              className="w-3/4 h-3/4 object-contain"
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* =========================================================
          Our Study Destinations - WITH ADDONS
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EFF0F6] py-12 md:py-16">

        {/* Background Addons */}
        <div className="absolute top-10 left-10 w-24 h-24 border border-[#A202F0]/10 rounded-full pointer-events-none"></div>
        <div className="absolute top-40 right-20 w-40 h-40 border border-[#A202F0]/5 rounded-full pointer-events-none"></div>
        <div className="absolute bottom-10 left-1/4 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[35px] border-l-transparent border-r-transparent border-b-[#A202F0]/5 rotate-[25deg] pointer-events-none"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h4 className="text-3xl font-bold text-[#A202F0] mb-4">Our Study Destinations</h4>
            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>
            <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
              Explore leading international study destinations and discover
              education opportunities that match your academic and career goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <DestinationCard number="01" title="USA" description="World-class universities, cutting-edge research, innovation, and diverse career opportunities." />
            <DestinationCard number="02" title="UK" description="Globally recognised degrees, industry-focused programmes, and strong academic excellence." />
            <DestinationCard number="03" title="Australia" description="Practical education, strong industry connections, and opportunities for international graduates." />
            <DestinationCard number="04" title="Canada" description="Career-oriented education, co-op opportunities, multicultural learning, and global exposure." />
            <DestinationCard number="05" title="New Zealand" description="High-quality education, practical learning, and a supportive international environment." />
            <DestinationCard number="06" title="Ireland" description="A growing technology and business hub with strong links between education and industry." />
            <DestinationCard number="07" title="Europe" description="Access to diverse universities, specialised programmes, research opportunities, and international learning environments." />
            <DestinationCard number="08" title="UAE" description="A rapidly growing global education and business hub connecting students with emerging industries." />
            <DestinationCard number="09" title="Turkey" description="Quality education, affordable study options, and a strategic location connecting Europe and Asia." />
          </div>
        </div>
      </section>

      {/* =========================================================
          Our Study Abroad Services
      ========================================================= */}
      <section className="relative overflow-hidden bg-white py-12 md:py-16">
        <div className="absolute -top-20 -right-20 w-[500px] h-[500px] bg-[#F3E8FF]/30 rounded-full blur-[70px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h4 className="text-3xl font-bold text-[#A202F0] mb-4">Our Study Abroad Services</h4>
            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>
            <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
              Comprehensive guidance and support to help you confidently plan,
              apply, and prepare for your international education journey.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceCard number="01" icon={<GraduationCap size={32} strokeWidth={2} />} title="Career & Course Counselling" description="Identify the right programme based on your academic background, skills, interests, and career aspirations." />
            <ServiceCard number="02" icon={<University size={32} strokeWidth={2} />} title="University Selection" description="Shortlist suitable universities based on programme quality, entry requirements, location, budget, and career goals." />
            <ServiceCard number="03" icon={<FileCheck size={32} strokeWidth={2} />} title="Application Assistance" description="Professional support with university applications, documentation, SOPs, and application submissions." />
            <ServiceCard number="04" icon={<Award size={32} strokeWidth={2} />} title="Scholarship Guidance" description="Explore suitable scholarship and funding opportunities based on eligibility and programme requirements." />
            <ServiceCard number="05" icon={<FileText size={32} strokeWidth={2} />} title="Visa Guidance" description="Guidance on visa documentation, application preparation, and interview readiness." />
            <ServiceCard number="06" icon={<Plane size={32} strokeWidth={2} />} title="Pre-Departure Support" description="Prepare for your international journey with guidance on accommodation, travel, documentation, and life abroad." />
          </div>
        </div>
      </section>

      {/* =========================================================
          Why Choose Moin Consultancy
      ========================================================= */}
      <section className="relative overflow-hidden bg-[#EFF0F6] py-12 md:py-16">
        <div className="absolute bottom-0 left-0 w-full h-[300px] opacity-[0.04] pointer-events-none">
           <svg width="100%" height="100%" viewBox="0 0 1000 300"><pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse"><circle cx="2" cy="2" r="1.5" fill="#A202F0"/></pattern><rect width="100%" height="100%" fill="url(#dots)"/></svg>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-10">
            <h4 className="text-3xl font-bold text-[#A202F0] mb-4">Why Choose Moin Consultancy?</h4>
            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>
            <p className="mt-4 text-base text-gray-600 max-w-2xl mx-auto">
              Trusted guidance and personalised support to help students achieve their international education goals.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <WhyChooseCard number="01" icon={<UserRoundCheck size={32} strokeWidth={2} />} title="Personalised Guidance" description="Every student receives guidance based on their unique academic and career objectives." />
            <WhyChooseCard number="02" icon={<Globe2 size={32} strokeWidth={2} />} title="Global University Access" description="Explore opportunities across leading international study destinations." />
            <WhyChooseCard number="03" icon={<Target size={32} strokeWidth={2} />} title="Career-Focused Approach" description="We connect education choices with long-term career goals and industry opportunities." />
            <WhyChooseCard number="04" icon={<Handshake size={32} strokeWidth={2} />} title="End-to-End Support" description="From your first counselling session to your departure, we support you throughout the process." />
            <WhyChooseCard number="05" icon={<ShieldCheck size={32} strokeWidth={2} />} title="Transparent Guidance" description="Clear information and responsible guidance at every stage of your journey." extraClass="md:col-span-2 lg:col-span-1" />
          </div>
        </div>
      </section>

      <StudentEnquiryForm />

      <section className="bg-[#A202F0] text-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">
          <div><h3 className="text-3xl font-bold">Your Ambition. Your Destination. Your Global Future.</h3></div>
          <Link to="/contact" className="bg-white hover:bg-black text-[#A202F0] transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center">
            Start Your Study Abroad Journey →
          </Link>
        </div>
      </section>
    </div>
  );
};

const DestinationCard = ({ number, title, description }) => {
  return (
    <div className="group relative bg-white rounded-xl shadow-md border-t-4 border-[#A202F0] p-5 min-h-[220px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-xl overflow-hidden">
      {/* Card Addon */}
      <div className="absolute -top-12 -left-12 w-28 h-28 bg-[#F3E8FF] rounded-full blur-[1px] opacity-70 group-hover:scale-110 transition-all duration-500 pointer-events-none"></div>
      <div className="absolute top-3 right-4 text-xs font-bold text-[#A202F0]/30">{number}</div>
      <h3 className="text-xl font-bold text-[#A202F0] mb-3 relative z-10">{title}</h3>
      <p className="text-base text-gray-500 leading-relaxed max-w-xs relative z-10">{description}</p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-16"></div>
    </div>
  );
};

const ServiceCard = ({ number, icon, title, description }) => {
  return (
    <div className="group relative bg-white rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[280px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden">
      {/* Card Addon - Mint Corner like your screenshot */}
      <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#E6F7F1]/70 rounded-br-[50px] group-hover:bg-[#E6F7F1] transition-all duration-500 pointer-events-none"></div>
      <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">{number}</div>
      <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3 relative z-10">
        <div className="text-[#A202F0] transition-colors duration-300 group-hover:text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-[#A202F0] mb-3 relative z-10">{title}</h3>
      <p className="text-base text-gray-500 leading-relaxed max-w-xs relative z-10">{description}</p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>
    </div>
  );
};

const WhyChooseCard = ({ number, icon, title, description, extraClass = "" }) => {
  return (
    <div className={`group relative bg-white rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[280px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl overflow-hidden ${extraClass}`}>
      <div className="absolute -top-10 -left-10 w-20 h-20 bg-[#A202F0]/5 rounded-full pointer-events-none group-hover:bg-[#A202F0]/10 transition-all"></div>
      <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">{number}</div>
      <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3 relative z-10">
        <div className="text-[#A202F0] transition-colors duration-300 group-hover:text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-[#A202F0] mb-3 relative z-10">{title}</h3>
      <p className="text-base text-gray-500 leading-relaxed max-w-xs relative z-10">{description}</p>
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>
    </div>
  );
};

export default StudyAbroad;