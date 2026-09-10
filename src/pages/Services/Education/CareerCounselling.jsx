import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Career.png";
import SEO from "../../../components/SEO/SEO";

import {
  Search,
  ClipboardCheck,
  Compass,
  Map,
  TrendingUp,
  Route
} from "lucide-react";

const CareerCounselling = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* =====================================================
          SEO
      ====================================================== */}
      <SEO
        title="Career Counselling Services - Moin Consultancy"
        description="Get personalised career counselling and guidance to choose the right career, course, university, skills, and international career pathway."
        keywords="Career Counselling, Career Guidance, Course Selection, Study Abroad, Career Planning, Professional Development"
        url="/services/education/careercounsellling"
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
            Services
          </li>

          <li>/</li>

          <li className="font-semibold opacity-100">
            Career Counselling
          </li>
        </ul>
      </div>

      {/* =====================================================
          HERO SECTION
      ====================================================== */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">

          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">

            <h1 className="text-4xl md:text-5xl font-bold text-[#A202F0] leading-tight">
             Clarity for Your Career. Confidence for Your Future
            </h1>

            <p className="text-lg leading-relaxed text-gray-700">
             At Moin Consultancy, we help students, graduates, and working professionals make informed career decisions based on their strengths, interests, skills, aspirations, and evolving industry opportunities.
            </p>

            <p className="leading-relaxed text-gray-600">
          
            </p>
Our personalised career counselling approach connects your education choices with real-world career pathways, helping you move forward with clarity and purpose.
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">
            <img
              src={image}
              alt="Career Counselling"
              className="w-3/4 h-auto object-contain"
              loading="lazy"
            />
          </div>

        </div>
      </section>
   




      {/* =====================================================
          MAKE THE RIGHT CHOICE
      ====================================================== */}
      
      <section className="bg-[white] py-20">
        <div className="container mx-auto px-4">

          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-[#A202F0] mb-5">
             Our Career Counselling Process
            </h2>

          </div>

          {/* Career Counselling Approach Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {[
              {
                icon: Search,
                title: "Discover",
                description:
                  "Understand your interests, strengths, skills, and aspirations.",
              },
              {
                icon: ClipboardCheck,
                title: "Assess",
                description:
                  "Evaluate your academic background, capabilities, and career potential.",
              },
              {
                icon: Compass,
                title: "Explore",
                description:
                  "Identify suitable career fields, courses, universities, and industry opportunities.",
              },
              {
                icon: Route,
                title: "Strategise",
                description:
                  "Develop a personalised education and career roadmap.",
              },
              {
                icon: Map,
                title: "Prepare",
                description:"Build the skills, knowledge, and professional profile required for your chosen pathway."
                ,
              },
              {
                icon: TrendingUp,
                title: "Progress",
                description:
                  "Support you as you move toward higher education, employment, or global career opportunities.",
              },
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-xl
                    shadow-md
                    border-t-4
                    border-[#A202F0]
                    p-6
                    min-h-[280px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    hover:-translate-y-2
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                  {/* Icon */}
                  <div className="mb-4">
                    <Icon
                      size={38}
                      strokeWidth={2}
                      className="text-[#A202F0]"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#25252B] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>
        </div>
      </section>

      

      {/* =====================================================
         
      ====================================================== */}
      <section className="bg-[white] py-20">
        <div className="container mx-auto px-4">

          <h2 className="text-3xl md:text-4xl font-bold text-[#A202F0] mb-12 text-center">
          Our Career Guidance Covers
          </h2>

          <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">

            {[
              "Career & Course Selection",
"Stream & Specialisation Guidance",
"Higher Education Planning",
"University & Programme Selection",
"Study Abroad Guidance",
"Career Transition Planning",
"Skill & Industry-Oriented Career Planning",
"Professional Development",

            ].map((reason, idx) => (
              <div
                key={idx}
                className="
                  bg-[#EFF0F6]
                  p-5
                  rounded-xl
                  shadow-sm
                  border-l-4
                  hover:shadow-md
                  hover:-translate-y-1
                  transition-all
                  duration-300
                "
              >
                <div className="flex items-center gap-4">

                  {/* Bullet */}
                  <span className="w-3 h-3 rounded-full bg-[#A202F0] flex-shrink-0"></span>

                  <p className="font-medium text-gray-700">
                    {reason}
                  </p>

                </div>
              </div>
            ))}

          </div>
        </div>
      </section>
      
          {/* Heading */}
          <div className="max-w-4xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-bold text-[#A202F0] mb-5">
     Why Moin Consultancy?
            </h2>

          </div>

          {/* Career Counselling Approach Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">

            {[
              {
              
                title: "Personalised Guidance",
                description:
                  "Every career journey is different. Our recommendations are aligned with your individual goals and profile. ",
              },
              {
               
                title: "Industry-Oriented Perspective",
                description:
                  "We consider evolving industry requirements and emerging career opportunities when planning your pathway.",
              },
              {
               
                title: "Education + Career Alignment",
                description:
                  "We connect your academic choices with practical career objectives.",
              },
              {
             
                title: "Global Opportunities",
                description:
                  "Where relevant, we help you explore international education and career pathways.",
              },
              {
            
                title: "Long-Term Approach",
                description:"Our focus is not just on your next decision, but on building a sustainable career direction."
                ,
              },
              
            ].map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-xl
                    shadow-md
                    border-t-4
                    border-[#A202F0]
                    p-6
                    min-h-[280px]
                    flex
                    flex-col
                    items-center
                    justify-center
                    text-center
                    hover:-translate-y-2
                    hover:shadow-xl
                    transition-all
                    duration-300
                  "
                >

                

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-[#25252B] mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                    {step.description}
                  </p>

                </div>
              );
            })}

          </div>
      
      {/* =====================================================
          CAREER DECISIONS
      ====================================================== */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">

          <div className="max-w-5xl mx-auto">

          
            {/* Sub Heading */}
            <div className="bg-[#EFF0F6] rounded-xl p-8 md:p-10">

              <h3 className="text-2xl md:text-3xl font-bold text-[#25252B] mb-5">
               Discover Your Direction. Build Your Path. Shape Your Future.
              </h3>

              <p className="text-gray-600 leading-relaxed text-lg">
               
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          CTA
      ====================================================== */}
      <section className="bg-[#A202F0] text-white py-16">
        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            {/* CTA Content */}
            <div className="text-center md:text-left">

              <h3 className="text-3xl font-bold">
                Ready to Plan Your Career?
              </h3>

              <p className="text-white mt-3 leading-relaxed">
                Get personalised career guidance and take the next step
                toward a confident future.
              </p>

            </div>

            {/* CTA Button */}
            <Link
              to="/contact"
              className="
                bg-[white]
               text-black
                hover:bg-[#A202F0]
                transition-all
                px-10
                h-14
                rounded-lg
                font-semibold
                text-lg
                shadow-lg
                inline-flex
                items-center
                justify-center
                whitespace-nowrap
              "
            >
Talk to Our Career Counselling Team →
            </Link>

          </div>
        </div>
      </section>

    </div>
  );
};

export default CareerCounselling;