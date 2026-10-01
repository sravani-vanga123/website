import React, { useState } from "react";
import Swal from "sweetalert2";

const StudentEnquiryForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        country: "",
        course: "",
        qualification: "",
        graduationYear: "",
        intake: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;

        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (
            !formData.name ||
            !formData.email ||
            !formData.phone
        ) {
            Swal.fire({
                icon: "warning",
                title: "Required Fields",
                text: "Please enter your name, email and phone number.",
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

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.message ||
                        "Unable to submit enquiry."
                );
            }

            Swal.fire({
                icon: "success",
                title: "Enquiry Submitted!",
                text:
                    "Thank you for your interest. Our counselling team will contact you soon.",
                confirmButtonColor: "#A202F0",
            });

            setFormData({
                name: "",
                email: "",
                phone: "",
                country: "",
                course: "",
                qualification: "",
                graduationYear: "",
                intake: "",
                message: "",
            });
        } catch (error) {
            console.error(
                "Student Enquiry Error:",
                error
            );

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
        <section
            style={{
                padding: "70px 20px",
                background: "#EFF0F6",
            }}
        >
            <div
                style={{
                    maxWidth: "900px",
                    margin: "0 auto",
                }}
            >
                {/* Heading */}
                <div
                    style={{
                        textAlign: "center",
                        marginBottom: "40px",
                    }}
                >
                    <p
                        style={{
                            color: "#A202F0",
                            fontWeight: "600",
                            fontSize: "15px",
                            marginBottom: "10px",
                            textTransform: "uppercase",
                            letterSpacing: "1px",
                        }}
                    >
                        Study Abroad
                    </p>

                    <h2
                        style={{
                            color: "#25252B",
                            fontSize: "36px",
                            marginBottom: "15px",
                            fontFamily:
                                "Futura, Trebuchet MS, Arial, sans-serif",
                        }}
                    >
                        Start Your Study Abroad Journey
                    </h2>

                    <p
                        style={{
                            color: "#555",
                            fontSize: "16px",
                            lineHeight: "1.7",
                            maxWidth: "650px",
                            margin: "0 auto",
                        }}
                    >
                        Share your details with us and our
                        counselling team will help you explore
                        suitable study-abroad opportunities.
                    </p>
                </div>

                {/* Form Card */}
                <form
                    onSubmit={handleSubmit}
                    style={{
                        background: "#FFFFFF",
                        padding: "40px",
                        borderRadius: "24px",
                        boxShadow:
                            "0 15px 45px rgba(0, 0, 0, 0.08)",
                    }}
                >
                    {/* Name + Email */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <div>
                            <label style={labelStyle}>
                                Full Name *
                            </label>

                            <input
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Enter your full name"
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>
                                Email *
                            </label>

                            <input
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="Enter your email"
                                required
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    {/* Phone + Country */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <div>
                            <label style={labelStyle}>
                                Phone Number *
                            </label>

                            <input
                                type="tel"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="Enter your phone number"
                                required
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>
                                Preferred Country
                            </label>

                            <select
                                name="country"
                                value={formData.country}
                                onChange={handleChange}
                                style={inputStyle}
                            >
                                <option value="">
                                    Select country
                                </option>

                                <option value="USA">
                                    USA
                                </option>

                                <option value="UK">
                                    UK
                                </option>

                                <option value="Canada">
                                    Canada
                                </option>

                                <option value="Australia">
                                    Australia
                                </option>

                                <option value="New Zealand">
                                    New Zealand
                                </option>

                                <option value="Ireland">
                                    Ireland
                                </option>

                                <option value="Europe">
                                    Europe
                                </option>

                                <option value="UAE">
                                    UAE
                                </option>

                                <option value="Turkey">
                                    Turkey
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Course + Qualification */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <div>
                            <label style={labelStyle}>
                                Course / Program
                            </label>

                            <input
                                type="text"
                                name="course"
                                value={formData.course}
                                onChange={handleChange}
                                placeholder="Example: MS Computer Science"
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>
                                Highest Qualification
                            </label>

                            <input
                                type="text"
                                name="qualification"
                                value={
                                    formData.qualification
                                }
                                onChange={handleChange}
                                placeholder="Example: B.Tech / MCA"
                                style={inputStyle}
                            />
                        </div>
                    </div>

                    {/* Graduation Year + Intake */}
                    <div
                        style={{
                            display: "grid",
                            gridTemplateColumns:
                                "repeat(auto-fit, minmax(250px, 1fr))",
                            gap: "20px",
                            marginBottom: "20px",
                        }}
                    >
                        <div>
                            <label style={labelStyle}>
                                Year of Graduation
                            </label>

                            <input
                                type="text"
                                name="graduationYear"
                                value={
                                    formData.graduationYear
                                }
                                onChange={handleChange}
                                placeholder="Example: 2025"
                                style={inputStyle}
                            />
                        </div>

                        <div>
                            <label style={labelStyle}>
                                Preferred Intake
                            </label>

                            <select
                                name="intake"
                                value={formData.intake}
                                onChange={handleChange}
                                style={inputStyle}
                            >
                                <option value="">
                                    Select intake
                                </option>

                                <option value="January">
                                    January
                                </option>

                                <option value="February">
                                    February
                                </option>

                                <option value="May">
                                    May
                                </option>

                                <option value="September">
                                    September
                                </option>

                                <option value="October">
                                    October
                                </option>

                                <option value="Other">
                                    Other
                                </option>
                            </select>
                        </div>
                    </div>

                    {/* Message */}
                    <div
                        style={{
                            marginBottom: "25px",
                        }}
                    >
                        <label style={labelStyle}>
                            Message
                        </label>

                        <textarea
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            placeholder="Tell us about your study abroad plans..."
                            rows="5"
                            style={{
                                ...inputStyle,
                                resize: "vertical",
                            }}
                        />
                    </div>

                    {/* Submit */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            padding: "15px 25px",
                            border: "none",
                            borderRadius: "10px",
                            background: "#A202F0",
                            color: "#FFFFFF",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: loading
                                ? "not-allowed"
                                : "pointer",
                            opacity: loading ? 0.7 : 1,
                            transition: "0.3s",
                        }}
                    >
                        {loading
                            ? "Submitting..."
                            : "Submit Enquiry"}
                    </button>
                </form>
            </div>
        </section>
    );
};

const labelStyle = {
    display: "block",
    marginBottom: "8px",
    color: "#25252B",
    fontSize: "14px",
    fontWeight: "600",
};

const inputStyle = {
    width: "100%",
    padding: "13px 15px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    outline: "none",
    fontSize: "15px",
    color: "#25252B",
    background: "#FFFFFF",
    boxSizing: "border-box",
};

export default StudentEnquiryForm;