
import React from "react";
import { Link } from "react-router-dom";
import image from "../../../assets/Intern.png";
import SEO from "../../../components/SEO/SEO";

import {
  Code2,
  Factory,
  BriefcaseBusiness,
  Compass,
  Lightbulb,
  CheckCircle,
  Globe2,
  Users,
  TrendingUp,
   Handshake,
   Target
} from "lucide-react";

const Internship = () => {
  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* SEO */}
      <SEO
        title="Internship Opportunities | Moin Consultancy"
        description="Explore internship opportunities across IT, technology, engineering, manufacturing, business, management, and other professional domains with Moin Consultancy."
        keywords="Internships, Internship Opportunities, IT Internship, Engineering Internship, Business Internship, Moin Consultancy"
        url="/services/education/internship"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* Breadcrumbs */}
      <div className="container mx-auto px-4 py-6 text-sm">
        <ul className="flex flex-wrap items-center gap-2 text-[#A202F0] opacity-80">

          <li>
            <Link
              to="/"
              className="hover:text-[#A202F0] transition-colors"
            >
              Home
            </Link>
          </li>

          <li>/</li>

          <li className="cursor-default">
            Services
          </li>

          <li>/</li>

          <li className="font-semibold opacity-100">
            Internship
          </li>

        </ul>
      </div>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 md:py-20">
        <div className="flex flex-col md:flex-row items-center gap-14">

          {/* Left Content */}
          <div className="w-full md:w-1/2 space-y-6">

            <h1 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              Learn. Experience. Grow.
            </h1>

            <p className="text-lg leading-relaxed text-gray-700">
              At Moin Consultancy, we help students and aspiring
              professionals gain valuable industry exposure and practical
              experience through internship opportunities aligned with their
              education, skills, and career goals.
            </p>
  <p className=" text-lg leading-relaxed text-gray-700">
              An internship is more than a certificate—it is an opportunity
              to apply knowledge, develop professional skills, understand
              workplace expectations, and build career confidence.
            </p>

            <h2 className="text-2xl md:text-3xl font-bold text-[#A202F0] leading-tight">
              Build Experience Before You Build Your Career
            </h2>

            <p className="leading-relaxed text-gray-600">
              Academic knowledge provides the foundation. Industry experience
              helps you turn that knowledge into capability.
            </p>

            <p className="leading-relaxed text-gray-600">
              Our internship pathways are designed to help candidates gain
              exposure to real-world work environments across emerging and
              high-demand fields.
            </p>

          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-center">

            <img
              src={image}
              alt="Internship Opportunities"
              className="w-3/4 h-auto object-contain"
              loading="lazy"
            />

          </div>

        </div>
      </section>


      {/* Key Internship Areas */}
      <section className="bg-[#EFF0F6] py-16 md:py-20">

        <div className="container mx-auto px-4">

          {/* Section Heading */}
          <div className="max-w-3xl mx-auto text-center mb-12">

            <h2 className="text-3xl md:text-3xl font-bold text-[#A202F0] mb-4">
              Key Internship Areas
            </h2>

            <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>

          </div>


          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 max-w-6xl mx-auto">

            {/* Card 1 */}
            <div className="group relative bg-white rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
                01
              </div>

              <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">

                <Code2
                  size={32}
                  strokeWidth={2}
                  className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
                />

              </div>

              <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
                IT & Technology
              </h3>

              <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                Software Development, Web Development, Cloud Solutions,
                Data & AI, Cybersecurity and emerging technologies.
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

            </div>


            {/* Card 2 */}
            <div className="group relative bg-white rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
                02
              </div>

              <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">

                <Factory
                  size={32}
                  strokeWidth={2}
                  className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
                />

              </div>

              <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
                Engineering & Manufacturing
              </h3>

              <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                Engineering operations, production, quality, automation,
                design, and manufacturing technologies.
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

            </div>


            {/* Card 3 */}
            <div className="group relative bg-white rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
                03
              </div>

              <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">

                <BriefcaseBusiness
                  size={32}
                  strokeWidth={2}
                  className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
                />

              </div>

              <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
                Business & Management
              </h3>

              <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                Marketing, Finance, Human Resources, Business Development,
                Operations, and Management.
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

            </div>


            {/* Card 4 */}
            <div className="group relative bg-white rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

              <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
                04
              </div>

              <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">

                <Compass
                  size={32}
                  strokeWidth={2}
                  className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
                />

              </div>

              <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
                Other Professional Domains
              </h3>

              <p className="text-gray-500 text-base leading-relaxed max-w-xs">
                Internship opportunities based on industry demand, academic
                background, and career objectives.
              </p>

              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>

            </div>

          </div>

        </div>

      </section>


      {/* What You Gain */}
{/* What You Gain */}
<section className="bg-[#EFF0F6] py-16 md:py-20">
  <div className="container mx-auto px-4">

    {/* Section Heading */}
    <div className="text-center mb-12">
      <h2 className="text-3xl md:text-3xl font-bold text-[#A202F0]  mb-4">
        What You Gain
      </h2>

      <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>

      <p className="mt-5 text-gray-600 max-w-2xl mx-auto">
        Build practical knowledge, professional skills, and career
        confidence through meaningful internship experience.
      </p>
    </div>

    {/* Cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

      {/* Practical Experience */}
      <div className="group relative bg-[white] rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          01
        </div>

        <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">
          <Lightbulb
            size={32}
            strokeWidth={2}
            className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Practical Experience
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Apply academic knowledge to real-world projects and professional
          situations.
        </p>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* Industry Exposure */}
      <div className="group relative bg-[white] rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          02
        </div>

        <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">
          <Globe2
            size={32}
            strokeWidth={2}
            className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Industry Exposure
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Understand how organisations, teams, and professional environments
          operate.
        </p>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* Professional Skills */}
      <div className="group relative bg-[white] rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          03
        </div>

        <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">
          <Users
            size={32}
            strokeWidth={2}
            className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Professional Skills
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Develop communication, teamwork, problem-solving, time management,
          and workplace skills.
        </p>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* Career Readiness */}
      <div className="group relative bg-[white] rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          04
        </div>

        <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">
          <TrendingUp
            size={32}
            strokeWidth={2}
            className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Career Readiness
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Build a stronger professional profile and prepare for future
          employment opportunities.
        </p>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* Industry Connections */}
      <div className="group relative bg-[white] rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          05
        </div>

        <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">
          <Handshake
            size={32}
            strokeWidth={2}
            className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Industry Connections
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Gain exposure to professionals and organisations within your chosen
          field.
        </p>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>
      </div>

      {/* Career Confidence */}
      <div className="group relative bg-[white] rounded-2xl shadow-md border-t-4 border-[#A202F0] p-7 min-h-[290px] flex flex-col items-center justify-center text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl">

        <div className="absolute top-4 right-5 text-sm font-bold text-[#A202F0]/30">
          06
        </div>

        <div className="w-16 h-16 rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-5 transition-all duration-500 group-hover:bg-[#A202F0] group-hover:scale-110 group-hover:rotate-3">
          <Target
            size={32}
            strokeWidth={2}
            className="text-[#A202F0] transition-colors duration-300 group-hover:text-white"
          />
        </div>

        <h3 className="text-lg md:text-xl font-bold text-[#A202F0] mb-3">
          Career Confidence
        </h3>

        <p className="text-gray-500 text-base leading-relaxed max-w-xs">
          Discover your strengths, interests, and potential career direction
          through practical experience.
        </p>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-[#A202F0] rounded-full transition-all duration-500 group-hover:w-20"></div>
      </div>

    </div>
  </div>
</section>
 <section className="bg-white py-20">

        <div className="container mx-auto px-4">

          <div className="max-w-3xl">

            <h2
              className="
                text-2xl
                md:text-3xl
                font-bold
                text-[#A202F0]
                mb-4
              "
            >
          Who Can Apply?
            </h2>

            <div
              className="
                w-16
                h-1
                bg-[#A202F0]
                rounded-full
                mb-10
              "
            ></div>

          </div>

          <ul className="space-y-6 max-w-3xl">

            {[
              "Undergraduate Students",
"Postgraduate Students",
"Diploma Students",
"Recent Graduates",
"Students Seeking Industry Projects",
"Aspiring Professionals",
            ].map((step, i) => (

              <li
                key={i}
                className="
                  group
                  flex
                  items-center
                  gap-4
                  p-4
                  rounded-xl
                  transition-all
                  duration-300
                  hover:bg-[#EFF0F6]
                  hover:translate-x-2
                "
              >

                {/* Check Icon */}
                <div
                  className="
                    w-9
                    h-9
                    rounded-full
                    bg-[#A202F0]/10
                    flex
                    items-center
                    justify-center
                    shrink-0
                    transition-all
                    duration-300
                    group-hover:bg-[#A202F0]
                  "
                >

                  <CheckCircle
                    size={20}
                    className="
                      text-[#A202F0]
                      transition-colors
                      duration-300
                      group-hover:text-white
                    "
                  />

                </div>

                <span className="text-lg">
                  {step}
                </span>

              </li>

            ))}

          </ul>

        </div>

      </section>

      {/* CTA */}
      <section className="bg-[#A202F0] text-white py-16">

        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-8">

          <div className="max-w-3xl">

            <h3 className="text-xl md:text-2xl font-bold">
              Turn Knowledge Into Experience. Turn Experience Into Opportunity.
            </h3>

          </div>

          <Link
            to="/contact"
            className="
              bg-white
              hover:bg-[black]
              text-[#A202F0]
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
            Explore Internship Opportunities →
          </Link>

        </div>

      </section>

    </div>
  );
};

export default Internship;


