import React, { useState } from "react";
import SEO from "../components/SEO/SEO";
import Swal from "sweetalert2";

import {
  Briefcase,
  MapPin,
  Clock,
  Star,
  Gift,
  CheckCircle,
  Send,
  ArrowRight,
} from "lucide-react";

const Careers = () => {
  // ======================================================
  // FORM STATE
  // ======================================================

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    position: "",
    experience: "",
    qualification: "",
    resumeLink: "",
    coverLetter: "",
  });

  const [loading, setLoading] = useState(false);

  // ======================================================
  // CURRENT JOBS
  // ======================================================

  // No specific job openings are listed until confirmed
  // by Moin Consultancy.
  const jobs = [];

  // ======================================================
  // INPUT CHANGE
  // ======================================================

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  // ======================================================
  // SUBMIT APPLICATION
  // ======================================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/application`,
        {
          method: "POST",

          headers: {
            "Content-Type": "application/json",
          },

          body: JSON.stringify({
            name: formData.name,
            email: formData.email,
            phone: formData.phone,
            position: formData.position,
            experience: formData.experience,
            qualification: formData.qualification,
            resume: formData.resumeLink,
            message: formData.coverLetter,
          }),
        }
      );

      const data = await response.json();

      // ==================================================
      // API ERROR
      // ==================================================

      if (!response.ok) {
        Swal.fire({
          title: "Submission Failed",
          text:
            data.message ||
            "Unable to submit your application.",
          icon: "error",
          confirmButtonColor: "#A202F0",
        });

        return;
      }

      // ==================================================
      // SUCCESS
      // ==================================================

      Swal.fire({
        title: "Application Received!",
        text: `Thank you, ${formData.name}. We have received your application. Our team will review your details and contact you if there is a suitable opportunity.`,
        icon: "success",
        confirmButtonColor: "#A202F0",
      });

      // Clear form
      setFormData({
        name: "",
        email: "",
        phone: "",
        position: "",
        experience: "",
        qualification: "",
        resumeLink: "",
        coverLetter: "",
      });
    } catch (error) {
      console.error(
        "Application Submit Error:",
        error
      );

      Swal.fire({
        title: "Server Error",
        text:
          "Unable to connect to the server. Please try again later.",
        icon: "error",
        confirmButtonColor: "#A202F0",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="font-sans text-[#25252B] bg-white min-h-screen">

      {/* =====================================================
          SEO
      ====================================================== */}

      <SEO
        title="Careers | Join Moin Consultancy"
        description="Explore career opportunities with Moin Consultancy and submit your profile for future opportunities across education, technology, business, and professional services."
        keywords="Moin Consultancy Careers, Moin Consultancy Jobs, Career Opportunities, Job Opportunities, Internship Opportunities, Moin Consultancy"
        url="/careers"
        siteName="Moin Consultancy"
        type="website"
      />

      {/* =====================================================
          HERO SECTION
      ====================================================== */}

      <section className="relative bg-[#25252B] text-white py-24 md:py-32 overflow-hidden">

        {/* Background Effects */}

        <div className="absolute inset-0 bg-gradient-to-br from-[#25252B] via-[#25252B] to-[#A202F0]/30"></div>

        <div className="absolute top-0 right-0 w-80 h-80 bg-[#A202F0]/20 rounded-full blur-3xl"></div>

        <div className="absolute -bottom-20 -left-20 w-96 h-96 bg-[#A202F0]/10 rounded-full blur-3xl"></div>

        <div className="container mx-auto px-6 relative z-10 text-center max-w-4xl">

          <span className="inline-flex items-center gap-2 bg-[#A202F0]/20 border border-[#A202F0]/40 text-white text-xs font-semibold uppercase tracking-wider px-4 py-2 rounded-full">
            <Briefcase size={14} />
            Join Moin Consultancy
          </span>

          <h1 className="text-4xl md:text-6xl font-black mt-6 leading-tight tracking-tight">
            Build Your Career.
            <br />
            <span className="text-[#A202F0]">
              Shape Your Future.
            </span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mt-6 font-normal leading-relaxed max-w-3xl mx-auto">
            We believe in continuous learning, professional development,
            collaboration, and creating meaningful opportunities for people
            who want to grow with us.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">

            <a
              href="#openings-section"
              className="bg-[#A202F0] hover:bg-[#8E02D6] text-white font-bold px-8 py-3.5 rounded-xl transition duration-300 shadow-lg inline-flex items-center justify-center gap-2"
            >
              Explore Opportunities
              <ArrowRight size={18} />
            </a>

            <a
              href="#apply-form-section"
              className="border border-white/40 hover:bg-white/10 text-white font-bold px-8 py-3.5 rounded-xl transition duration-300"
            >
              Submit Your Profile
            </a>

          </div>
        </div>
      </section>

      {/* =====================================================
          CULTURE / VALUES
      ====================================================== */}

      <section className="py-20 bg-[#EFF0F6]">

        <div className="container mx-auto px-6 max-w-6xl">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#25252B]">
              Our Work Culture
            </h2>

            <div className="h-1 w-16 bg-[#A202F0] rounded-full mx-auto mt-4"></div>

            <p className="text-gray-600 mt-5 text-base leading-relaxed">
              We encourage professional growth, practical learning,
              collaboration, and a positive approach to solving challenges.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            {/* Card 1 */}

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition duration-300">

              <div className="p-3 bg-[#A202F0]/10 text-[#A202F0] rounded-xl w-fit mb-6">
                <Star size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Professional Growth
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                We encourage team members to continuously improve their
                knowledge, skills, and professional capabilities.
              </p>

            </div>

            {/* Card 2 */}

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition duration-300">

              <div className="p-3 bg-[#A202F0]/10 text-[#A202F0] rounded-xl w-fit mb-6">
                <CheckCircle size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Commitment to Quality
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                We value responsible work, attention to detail, clear
                communication, and reliable service delivery.
              </p>

            </div>

            {/* Card 3 */}

            <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl border border-gray-100 transition duration-300">

              <div className="p-3 bg-[#A202F0]/10 text-[#A202F0] rounded-xl w-fit mb-6">
                <Gift size={28} />
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                Continuous Learning
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm">
                We support a learning mindset and encourage people to stay
                current with changing technologies, industries, and
                professional practices.
              </p>

            </div>

          </div>
        </div>
      </section>

      {/* =====================================================
          PROFESSIONAL BENEFITS
      ====================================================== */}

      <section className="py-20 bg-white">

        <div className="container mx-auto px-6 max-w-6xl">

          <div className="text-center max-w-2xl mx-auto mb-16">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#25252B]">
              Why Build Your Career With Us?
            </h2>

            <div className="h-1 w-16 bg-[#A202F0] rounded-full mx-auto mt-4"></div>

            <p className="text-gray-600 mt-5">
              We aim to create an environment where people can learn,
              contribute, and grow professionally.
            </p>

          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

            {[
              {
                title: "Learning Opportunities",
                desc: "Develop practical knowledge and strengthen your professional skills through continuous learning.",
              },
              {
                title: "Collaborative Environment",
                desc: "Work with people from different professional backgrounds and contribute to shared goals.",
              },
              {
                title: "Professional Development",
                desc: "Build experience through meaningful responsibilities and opportunities to improve your capabilities.",
              },
              {
                title: "Technology Exposure",
                desc: "Stay connected with modern tools, technologies, and evolving industry practices.",
              },
              {
                title: "Meaningful Work",
                desc: "Contribute to services and solutions designed to support individuals and businesses.",
              },
              {
                title: "Growth Mindset",
                desc: "Take initiative, learn from challenges, and continuously work toward professional improvement.",
              },
            ].map((item, index) => (

              <div
                key={index}
                className="flex gap-4 p-5 rounded-xl hover:bg-[#EFF0F6] transition duration-300"
              >

                <div className="h-10 w-10 flex-shrink-0 rounded-lg bg-[#A202F0]/10 flex items-center justify-center text-[#A202F0] font-bold">
                  <CheckCircle size={20} />
                </div>

                <div>

                  <h4 className="font-bold text-gray-800">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm mt-1 leading-relaxed">
                    {item.desc}
                  </p>

                </div>

              </div>

            ))}

          </div>
        </div>
      </section>

      {/* =====================================================
          CURRENT OPENINGS
      ====================================================== */}

      <section
        id="openings-section"
        className="py-20 bg-[#EFF0F6]"
      >

        <div className="container mx-auto px-6 max-w-4xl">

          <div className="text-center mb-12">

            <h2 className="text-3xl md:text-4xl font-extrabold text-[#25252B]">
              Current Job Openings
            </h2>

            <div className="h-1 w-16 bg-[#A202F0] rounded-full mx-auto mt-4"></div>

            <p className="text-gray-600 mt-5">
              Current vacancies will be published here when positions are
              officially available.
            </p>

          </div>

          {jobs.length === 0 ? (

            <div className="bg-white rounded-2xl shadow-md border border-gray-200 p-10 md:p-14 text-center">

              <div className="w-16 h-16 mx-auto rounded-full bg-[#A202F0]/10 flex items-center justify-center mb-6">

                <Briefcase
                  size={30}
                  className="text-[#A202F0]"
                />

              </div>

              <h3 className="text-2xl font-bold text-[#25252B] mb-3">
                No Current Openings
              </h3>

              <p className="text-gray-600 max-w-xl mx-auto leading-relaxed">
                We do not have any confirmed job openings listed at the
                moment. You can still submit your profile through the
                application form below for consideration when suitable
                opportunities become available.
              </p>

              <a
                href="#apply-form-section"
                className="mt-7 inline-flex items-center gap-2 bg-[#A202F0] hover:bg-[#8E02D6] text-white font-semibold px-7 py-3 rounded-lg transition-all"
              >
                Submit Your Profile
                <ArrowRight size={18} />
              </a>

            </div>

          ) : (

            <div className="space-y-4">

              {jobs.map((job, index) => (

                <div
                  key={index}
                  className="bg-white border border-gray-200 rounded-2xl p-6"
                >

                  <h3 className="text-xl font-bold">
                    {job.title}
                  </h3>

                </div>

              ))}

            </div>

          )}

        </div>
      </section>

      {/* =====================================================
          APPLICATION FORM
      ====================================================== */}

      <section
        id="apply-form-section"
        className="py-20 bg-white"
      >

        <div className="container mx-auto px-6 max-w-2xl bg-[#EFF0F6] border border-gray-200 p-8 md:p-12 rounded-3xl shadow-xl">

          <div className="text-center mb-8">

            <h2 className="text-2xl md:text-3xl font-extrabold text-[#25252B]">
              Submit Your Profile
            </h2>

            <div className="h-1 w-16 bg-[#A202F0] rounded-full mx-auto mt-4"></div>

            <p className="text-gray-600 mt-4 text-sm leading-relaxed">
              Share your details and professional profile with us for future
              opportunities.
            </p>

          </div>

          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >

            {/* =================================================
                POSITION
            ================================================== */}

            <div>

              <label className="block text-sm font-bold text-gray-700 mb-2">
                Area of Interest*
              </label>

              <select
                name="position"
                required
                value={formData.position}
                onChange={handleInputChange}
                className="select select-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#A202F0] outline-none h-12 bg-white"
              >

                <option value="">
                  -- Select Area of Interest --
                </option>

                <option value="Technology">
                  Technology
                </option>

                <option value="Education">
                  Education
                </option>

                <option value="Immigration">
                  Immigration
                </option>

                <option value="Logistics">
                  Logistics
                </option>

                <option value="Renewable Energy">
                  Renewable Energy
                </option>

                <option value="Manufacturing">
                  Manufacturing
                </option>

                <option value="Business Support">
                  Business Support
                </option>

                <option value="Internship">
                  Internship
                </option>

                <option value="Other">
                  Other
                </option>

              </select>

            </div>

            {/* =================================================
                NAME + EMAIL
            ================================================== */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Your Full Name*
                </label>

                <input
                  type="text"
                  name="name"
                  required
                  placeholder="Enter full name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#A202F0] outline-none bg-white"
                />

              </div>

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Email Address*
                </label>

                <input
                  type="email"
                  name="email"
                  required
                  placeholder="name@example.com"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#A202F0] outline-none bg-white"
                />

              </div>

            </div>

            {/* =================================================
                PHONE + RESUME
            ================================================== */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Phone Number*
                </label>

                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter phone number"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#A202F0] outline-none bg-white"
                />

              </div>

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Resume URL Link*
                </label>

                <input
                  type="url"
                  name="resumeLink"
                  required
                  placeholder="Google Drive / LinkedIn / Resume URL"
                  value={formData.resumeLink}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#A202F0] outline-none bg-white"
                />

              </div>

            </div>

            {/* =================================================
                EXPERIENCE + QUALIFICATION
            ================================================== */}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Experience
                </label>

                <input
                  type="text"
                  name="experience"
                  placeholder="e.g. Fresher / 1 Year"
                  value={formData.experience}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#A202F0] outline-none bg-white"
                />

              </div>

              <div>

                <label className="block text-sm font-bold text-gray-700 mb-2">
                  Qualification
                </label>

                <input
                  type="text"
                  name="qualification"
                  placeholder="e.g. MCA / B.Tech"
                  value={formData.qualification}
                  onChange={handleInputChange}
                  className="input input-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#A202F0] outline-none bg-white"
                />

              </div>

            </div>

            {/* =================================================
                COVER LETTER / MESSAGE
            ================================================== */}

            <div>

              <label className="block text-sm font-bold text-gray-700 mb-2">
                Message / Cover Letter*
              </label>

              <textarea
                name="coverLetter"
                required
                rows="4"
                placeholder="Tell us briefly about your skills, experience, and career interests..."
                value={formData.coverLetter}
                onChange={handleInputChange}
                className="textarea textarea-bordered w-full border-gray-300 p-3 rounded-lg focus:ring-2 focus:ring-[#A202F0] outline-none bg-white h-32"
              ></textarea>

            </div>

            {/* =================================================
                SUBMIT
            ================================================== */}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#A202F0] hover:bg-[#8E02D6] disabled:opacity-60 disabled:cursor-not-allowed text-white font-bold py-3.5 px-6 rounded-xl transition duration-300 shadow-lg flex items-center justify-center gap-2"
            >

              <Send size={18} />

              {loading
                ? "Submitting..."
                : "Submit Application"}

            </button>

          </form>

        </div>
      </section>

    </div>
  );
};

export default Careers;