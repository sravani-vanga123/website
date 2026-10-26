import React, { useState } from "react";
import Swal from "sweetalert2";
import { Send, User, Mail, Phone, GraduationCap, Globe2, MessageSquare } from "lucide-react";

const StudentEnquiryForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    course: "",
    destination: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (
      !formData.name ||
      !formData.email ||
      !formData.phone ||
      !formData.course ||
      !formData.destination
    ) {
      Swal.fire({
        icon: "warning",
        title: "Required Fields",
        text: "Please fill in all required fields.",
        confirmButtonColor: "#A202F0",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/student-enquiry`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const text = await response.text();

      let data = {};

      if (text) {
        try {
          data = JSON.parse(text);
        } catch (error) {
          console.error("Invalid JSON response:", text);
        }
      }

      if (!response.ok) {
        throw new Error(
          data.message || "Failed to submit enquiry."
        );
      }

      Swal.fire({
        icon: "success",
        title: "Enquiry Submitted!",
        text:
          data.message ||
          "Thank you! Our team will contact you shortly.",
        confirmButtonColor: "#A202F0",
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        course: "",
        destination: "",
        message: "",
      });
    } catch (error) {
      console.error("Student Enquiry Error:", error);

      Swal.fire({
        icon: "error",
        title: "Submission Failed",
        text:
          error.message ||
          "Unable to submit your enquiry. Please try again.",
        confirmButtonColor: "#A202F0",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-white py-12 md:py-16">
      <div className="container mx-auto px-4">

        {/* Section Heading */}
        <div className="text-center mb-10">
          <h4 className="text-3xl font-bold text-[#A202F0] mb-4">
            Student Enquiry
          </h4>

          <div className="w-16 h-1 bg-[#A202F0] rounded-full mx-auto"></div>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Have questions about studying abroad? Share your details with us
            and our education experts will get in touch with you.
          </p>
        </div>

        {/* Main Form Card */}
        <div className="max-w-5xl mx-auto">
          <div className="bg-[#EFF0F6] rounded-2xl shadow-md border-t-4 border-[#A202F0] p-6 md:p-10">

            <form onSubmit={handleSubmit}>

              {/* First Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-[#25252B] mb-2">
                    Full Name <span className="text-[#A202F0]">*</span>
                  </label>

                  <div className="relative">
                    <User
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A202F0]"
                    />

                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full h-12 pl-11 pr-4 rounded-lg bg-white border border-gray-200 focus:border-[#A202F0] focus:ring-2 focus:ring-[#A202F0]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-[#25252B] mb-2">
                    Email Address <span className="text-[#A202F0]">*</span>
                  </label>

                  <div className="relative">
                    <Mail
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A202F0]"
                    />

                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email"
                      className="w-full h-12 pl-11 pr-4 rounded-lg bg-white border border-gray-200 focus:border-[#A202F0] focus:ring-2 focus:ring-[#A202F0]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-[#25252B] mb-2">
                    Phone Number <span className="text-[#A202F0]">*</span>
                  </label>

                  <div className="relative">
                    <Phone
                      size={19}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A202F0]"
                    />

                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full h-12 pl-11 pr-4 rounded-lg bg-white border border-gray-200 focus:border-[#A202F0] focus:ring-2 focus:ring-[#A202F0]/20 outline-none transition-all"
                    />
                  </div>
                </div>

                {/* Course */}
                <div>
                  <label className="block text-sm font-semibold text-[#25252B] mb-2">
                    Interested Course <span className="text-[#A202F0]">*</span>
                  </label>

                  <div className="relative">
                    <GraduationCap
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A202F0] pointer-events-none"
                    />

                    <select
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full h-12 pl-11 pr-4 rounded-lg bg-white border border-gray-200 focus:border-[#A202F0] focus:ring-2 focus:ring-[#A202F0]/20 outline-none transition-all appearance-none"
                    >
                      <option value="">Select Course</option>
                      <option value="Undergraduate">
                        Undergraduate
                      </option>
                      <option value="Postgraduate">
                        Postgraduate
                      </option>
                      <option value="Masters">
                        Masters
                      </option>
                      <option value="MBA">
                        MBA
                      </option>
                      <option value="MS">
                        MS
                      </option>
                      <option value="PhD">
                        PhD
                      </option>
                      <option value="Other">
                        Other
                      </option>
                    </select>
                  </div>
                </div>

                {/* Destination */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#25252B] mb-2">
                    Preferred Study Destination{" "}
                    <span className="text-[#A202F0]">*</span>
                  </label>

                  <div className="relative">
                    <Globe2
                      size={20}
                      className="absolute left-4 top-1/2 -translate-y-1/2 text-[#A202F0] pointer-events-none"
                    />

                    <select
                      name="destination"
                      value={formData.destination}
                      onChange={handleChange}
                      className="w-full h-12 pl-11 pr-4 rounded-lg bg-white border border-gray-200 focus:border-[#A202F0] focus:ring-2 focus:ring-[#A202F0]/20 outline-none transition-all appearance-none"
                    >
                      <option value="">
                        Select Study Destination
                      </option>
                      <option value="USA">USA</option>
                      <option value="UK">UK</option>
                      <option value="Australia">Australia</option>
                      <option value="Canada">Canada</option>
                      <option value="New Zealand">
                        New Zealand
                      </option>
                      <option value="Ireland">Ireland</option>
                      <option value="Europe">Europe</option>
                      <option value="UAE">UAE</option>
                      <option value="Turkey">Turkey</option>
                      <option value="Not Decided">
                        Not Decided
                      </option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div className="md:col-span-2">
                  <label className="block text-sm font-semibold text-[#25252B] mb-2">
                    Message
                  </label>

                  <div className="relative">
                    <MessageSquare
                      size={19}
                      className="absolute left-4 top-4 text-[#A202F0]"
                    />

                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows="5"
                      placeholder="Tell us about your education plans or requirements..."
                      className="w-full pl-11 pr-4 py-3 rounded-lg bg-white border border-gray-200 focus:border-[#A202F0] focus:ring-2 focus:ring-[#A202F0]/20 outline-none transition-all resize-none"
                    ></textarea>
                  </div>
                </div>

              </div>

              {/* Submit Button */}
              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  disabled={loading}
                  className="bg-[#A202F0] hover:bg-black text-white transition-all px-10 h-14 rounded-lg font-semibold text-lg shadow-lg inline-flex items-center justify-center gap-3 disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    "Submitting..."
                  ) : (
                    <>
                      Submit Enquiry
                      <Send size={19} />
                    </>
                  )}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StudentEnquiryForm;