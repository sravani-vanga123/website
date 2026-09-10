
import React from "react";
import { Link } from "react-router-dom";
import SEO from "../../../components/SEO/SEO";
import {
  BookOpen,
  Code2,
  BriefcaseBusiness,
  Target,
  Lightbulb,
  TrendingUp,
  Users,
  CheckCircle,
} from "lucide-react";

const Training = () => {
  

  const trainingAreas = [
    "Technical & Industry-Oriented Training",
    "Professional Skill Development",
    "Career-Focused Learning",
    "Practical & Hands-On Learning",
    "Interview & Job Readiness",
    "Communication & Soft Skills",
  ];

  const benefits = [
    {
      icon: Code2,
      title: "IT & Software Training",
      description:
        "Build practical skills in software development, web technologies, cloud computing, cybersecurity, data, and emerging technologies.",
    },
    {
      icon: Users,
      title: "Professional & Soft Skills",
      description:
        "Strengthen communication, presentation, teamwork, leadership, problem-solving, and workplace skills.",
    },
    {
      icon: BriefcaseBusiness,
      title: "Career Readiness",
      description:
        "Prepare for the professional world through resume development, interview preparation, workplace communication, and career guidance",
    },
    {
      icon: BookOpen,
      title: "Language & Test Preparation",
      description:
        "Develop English language proficiency and prepare for international language and entrance examinations where applicable.",
    },
    {
      icon: TrendingUp,
      title: "Industry-Oriented Training",
      description:
        "Gain practical knowledge aligned with evolving industry requirements and professional expectations.",
    },
  ];

  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* SEO */}
      <SEO
        title="Career-Focused Training Programs | Moin Consultancy"
        description="Moin Consultancy provides career-focused training designed to help students, graduates, and working professionals develop technical, professional, and industry-relevant skills."
        keywords="career training, professional training, technical training, skill development, job readiness, career development, Moin Consultancy"
        url="/services/education/training"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap gap-2 text-[#A202F0]">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>

          <li>/</li>

          <li>
            <span className="opacity-70">Services</span>
          </li>

          <li>/</li>

          <li>
            <span className="opacity-70">Education</span>
          </li>

          <li>/</li>

          <li className="font-semibold">
            Training
          </li>
        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-10 md:py-16">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">

          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">

            <h1 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              Build Skills. Shape Careers. Stay Future-Ready.
            </h1>

            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              At Moin Consultancy, we provide career-focused training designed
              to help students, graduates, and working professionals develop
              the technical, professional, and industry-relevant skills needed
              to succeed in a rapidly evolving world.
            </p>

            <p className="text-base leading-relaxed text-gray-600">
              Our training approach combines practical learning, industry
              relevance, and professional development to help learners move
              confidently from education to employment.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              Learn Today. Lead Tomorrow.
            </h2>

            <p className="text-base md:text-lg leading-relaxed text-gray-600">
              Whether you are starting your career, upgrading your skills, or
              preparing for new opportunities, our training programmes are
              designed around your career goals and industry requirements.
            </p>

          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">

            <img
              src="https://digitaldatait.s3.ap-southeast-1.amazonaws.com/Service/SEO_Local-min.png"
              alt="Career focused training at Moin Consultancy"
              className="w-full max-w-lg h-auto object-contain"
              loading="lazy"
            />

          </div>

        </div>
      </section>



      {/* Why Choose Us */}
      <section className="bg-[#EFF0F6] py-16 md:py-20">

        <div className="container mx-auto px-4">

          <div className="max-w-3xl mx-auto text-center mb-12">

            <h2 className="text-2xl md:text-3xl font-bold text-[#A202F0] mb-4">
            Our Training Areas
            </h2>


          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">

            {benefits.map((benefit, index) => {

              const Icon = benefit.icon;

              return (
                <div
                  key={index}
                  className="
                    bg-white
                    rounded-xl
                    p-7
                    shadow-sm
                    hover:shadow-lg
                    transition-all
                    duration-300
                    flex
                    gap-5
                  "
                >

                  {/* Icon */}
                  <div className="w-12 h-12 rounded-full bg-[#A202F0]/10 flex items-center justify-center shrink-0">

                    <Icon
                      size={25}
                      className="text-[#A202F0]"
                    />

                  </div>

                  <div>

                    {/* Title */}
                    <h3 className="text-lg font-semibold mb-2">
                      {benefit.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-500 leading-relaxed">
                      {benefit.description}
                    </p>

                  </div>

                </div>
              );

            })}

          </div>

        </div>

      </section>
            {/* SEO Process */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#1A356A] mb-12">
           Who We Train?
          </h2>

          <ul className="space-y-6 max-w-3xl">
            {[
              "Students",
"Graduates",
"Working Professionals",
"Career Starters",
"Career Switchers",
"Professionals Seeking Upskilling",
"Candidates Preparing for Global Opportunities",
            ].map((step, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-3 h-3 mt-2 rounded-full bg-[#056FFD]"></span>
                <span className="text-lg">{step}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>


    

      {/* CTA */}
      <section className="bg-[#A202F0] text-white py-14 md:py-16">

        <div className="container mx-auto px-4">

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">

            <div className="text-center md:text-left">

              <h2 className="text-2xl md:text-3xl font-bold">
               Turn Skills Into Opportunities.
              </h2>

              <p className="text-white/80 mt-2">
             Build the knowledge, confidence, and practical capabilities you need to move forward in your career.
              </p>

            </div>

            <Link
              to="/contact"
              className="
                bg-white
                text-black
                hover:bg-[#A202F0]
                px-8
                py-3.5
                rounded-lg
                font-semibold
                transition-all
                duration-300
                shadow-lg
                inline-flex
                items-center
                justify-center
              "
            >
              Get Started
            </Link>

          </div>

        </div>

      </section>

    </div>
  );
};

export default Training;
