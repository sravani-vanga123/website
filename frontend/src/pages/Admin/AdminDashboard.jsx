import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminDashboard = () => {
    const navigate = useNavigate();

    // =====================================================
    // STATES
    // =====================================================

    const [contacts, setContacts] = useState([]);
    const [applications, setApplications] = useState([]);
    const [studentEnquiries, setStudentEnquiries] =
        useState([]);

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const [selectedStudentEnquiry, setSelectedStudentEnquiry] =
        useState(null);

    const token = localStorage.getItem("adminToken");

    const adminUser = JSON.parse(
        localStorage.getItem("adminUser") || "{}"
    );

    // =====================================================
    // INITIAL LOAD
    // =====================================================

    useEffect(() => {
        if (!token) {
            navigate("/admin/login");
            return;
        }

        fetchDashboardData();
    }, []);

    // =====================================================
    // AUTH ERROR HANDLER
    // =====================================================

    const handleUnauthorized = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin/login");
    };

    // =====================================================
    // FETCH ALL DASHBOARD DATA
    // =====================================================

    const fetchDashboardData = async () => {
        setLoading(true);
        setError("");

        try {
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            const [
                contactsResponse,
                applicationsResponse,
                enquiriesResponse,
            ] = await Promise.all([
                fetch(
                    `${import.meta.env.VITE_API_URL}/api/contact`,
                    {
                        headers,
                    }
                ),

                fetch(
                    `${import.meta.env.VITE_API_URL}/api/application`,
                    {
                        headers,
                    }
                ),

                fetch(
                    `${import.meta.env.VITE_API_URL}/api/student-enquiry`,
                    {
                        headers,
                    }
                ),
            ]);

            if (
                contactsResponse.status === 401 ||
                applicationsResponse.status === 401 ||
                enquiriesResponse.status === 401
            ) {
                handleUnauthorized();
                return;
            }

            const contactsData =
                await contactsResponse.json();

            const applicationsData =
                await applicationsResponse.json();

            const enquiriesData =
                await enquiriesResponse.json();

            if (!contactsResponse.ok) {
                throw new Error(
                    contactsData.message ||
                        "Unable to fetch contacts."
                );
            }

            if (!applicationsResponse.ok) {
                throw new Error(
                    applicationsData.message ||
                        "Unable to fetch applications."
                );
            }

            if (!enquiriesResponse.ok) {
                throw new Error(
                    enquiriesData.message ||
                        "Unable to fetch student enquiries."
                );
            }

            setContacts(
                contactsData.contacts || []
            );

            setApplications(
                applicationsData.applications || []
            );

            setStudentEnquiries(
                enquiriesData.enquiries || []
            );
        } catch (error) {
            console.error(
                "Dashboard Error:",
                error
            );

            setError(
                error.message ||
                    "Unable to connect to the server."
            );
        } finally {
            setLoading(false);
        }
    };

    // =====================================================
    // CONTACT STATUS
    // =====================================================

    const updateContactStatus = async (
        contactId,
        status
    ) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/contact/${contactId}/status`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type":
                            "application/json",

                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        status,
                    }),
                }
            );

            const data = await response.json();

            if (response.status === 401) {
                handleUnauthorized();
                return;
            }

            if (!response.ok) {
                alert(
                    data.message ||
                        "Unable to update contact status."
                );

                return;
            }

            setContacts((previousContacts) =>
                previousContacts.map((contact) =>
                    contact._id === contactId
                        ? data.contact
                        : contact
                )
            );
        } catch (error) {
            console.error(error);

            alert(
                "Unable to connect to the server."
            );
        }
    };

    // =====================================================
    // APPLICATION STATUS
    // =====================================================

    const updateApplicationStatus = async (
        applicationId,
        status
    ) => {
        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/application/${applicationId}/status`,
                {
                    method: "PATCH",

                    headers: {
                        "Content-Type":
                            "application/json",

                        Authorization: `Bearer ${token}`,
                    },

                    body: JSON.stringify({
                        status,
                    }),
                }
            );

            const data = await response.json();

            if (response.status === 401) {
                handleUnauthorized();
                return;
            }

            if (!response.ok) {
                alert(
                    data.message ||
                        "Unable to update application status."
                );

                return;
            }

            setApplications(
                (previousApplications) =>
                    previousApplications.map(
                        (application) =>
                            application._id ===
                            applicationId
                                ? data.application
                                : application
                    )
            );
        } catch (error) {
            console.error(error);

            alert(
                "Unable to connect to the server."
            );
        }
    };

    // =====================================================
    // DELETE APPLICATION
    // =====================================================

    const deleteApplication = async (
        applicationId
    ) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this application?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/application/${applicationId}`,
                {
                    method: "DELETE",

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.status === 401) {
                handleUnauthorized();
                return;
            }

            if (!response.ok) {
                alert(
                    data.message ||
                        "Unable to delete application."
                );

                return;
            }

            setApplications(
                (previousApplications) =>
                    previousApplications.filter(
                        (application) =>
                            application._id !==
                            applicationId
                    )
            );
        } catch (error) {
            console.error(error);

            alert(
                "Unable to connect to the server."
            );
        }
    };

    // =====================================================
    // STUDENT ENQUIRY STATUS
    // =====================================================

    const updateStudentEnquiryStatus =
        async (
            enquiryId,
            status
        ) => {
            try {
                const response = await fetch(
                    `${import.meta.env.VITE_API_URL}/api/student-enquiry/${enquiryId}/status`,
                    {
                        method: "PATCH",

                        headers: {
                            "Content-Type":
                                "application/json",

                            Authorization: `Bearer ${token}`,
                        },

                        body: JSON.stringify({
                            status,
                        }),
                    }
                );

                const data =
                    await response.json();

                if (response.status === 401) {
                    handleUnauthorized();
                    return;
                }

                if (!response.ok) {
                    alert(
                        data.message ||
                            "Unable to update enquiry status."
                    );

                    return;
                }

                setStudentEnquiries(
                    (previousEnquiries) =>
                        previousEnquiries.map(
                            (enquiry) =>
                                enquiry._id ===
                                enquiryId
                                    ? data.enquiry
                                    : enquiry
                        )
                );

                // If popup is open for this enquiry,
                // update popup also.
                if (
                    selectedStudentEnquiry &&
                    selectedStudentEnquiry._id ===
                        enquiryId
                ) {
                    setSelectedStudentEnquiry(
                        data.enquiry
                    );
                }
            } catch (error) {
                console.error(error);

                alert(
                    "Unable to connect to the server."
                );
            }
        };

    // =====================================================
    // DELETE STUDENT ENQUIRY
    // =====================================================

    const deleteStudentEnquiry = async (
        enquiryId
    ) => {
        const confirmed = window.confirm(
            "Are you sure you want to delete this student enquiry?"
        );

        if (!confirmed) {
            return;
        }

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/student-enquiry/${enquiryId}`,
                {
                    method: "DELETE",

                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );

            const data = await response.json();

            if (response.status === 401) {
                handleUnauthorized();
                return;
            }

            if (!response.ok) {
                alert(
                    data.message ||
                        "Unable to delete student enquiry."
                );

                return;
            }

            setStudentEnquiries(
                (previousEnquiries) =>
                    previousEnquiries.filter(
                        (enquiry) =>
                            enquiry._id !== enquiryId
                    )
            );

            // Close popup if deleted enquiry
            // was currently open.
            if (
                selectedStudentEnquiry &&
                selectedStudentEnquiry._id ===
                    enquiryId
            ) {
                setSelectedStudentEnquiry(null);
            }
        } catch (error) {
            console.error(error);

            alert(
                "Unable to connect to the server."
            );
        }
    };

    // =====================================================
    // STUDENT ENQUIRY DETAILS
    // =====================================================

    const openStudentEnquiryDetails = (
        enquiry
    ) => {
        setSelectedStudentEnquiry(enquiry);
    };

    const closeStudentEnquiryDetails = () => {
        setSelectedStudentEnquiry(null);
    };

    // =====================================================
    // LOGOUT
    // =====================================================

    const logout = () => {
        localStorage.removeItem("adminToken");
        localStorage.removeItem("adminUser");

        navigate("/admin/login");
    };

    // =====================================================
    // DATE FORMAT
    // =====================================================

    const formatDate = (date) => {
        if (!date) {
            return "Not available";
        }

        return new Date(date).toLocaleString(
            "en-IN",
            {
                dateStyle: "medium",
                timeStyle: "short",
            }
        );
    };

    // =====================================================
    // CONTACT COUNTS
    // =====================================================

    const newContacts = contacts.filter(
        (contact) =>
            contact.status === "new"
    ).length;

    const readContacts = contacts.filter(
        (contact) =>
            contact.status === "read"
    ).length;

    const repliedContacts =
        contacts.filter(
            (contact) =>
                contact.status === "replied"
        ).length;

    // =====================================================
    // APPLICATION COUNTS
    // =====================================================

    const newApplications =
        applications.filter(
            (application) =>
                application.status === "new"
        ).length;

    const shortlistedApplications =
        applications.filter(
            (application) =>
                application.status ===
                "shortlisted"
        ).length;

    // =====================================================
    // STUDENT ENQUIRY COUNTS
    // =====================================================

    const newStudentEnquiries =
        studentEnquiries.filter(
            (enquiry) =>
                enquiry.status === "new"
        ).length;

    const contactedStudentEnquiries =
        studentEnquiries.filter(
            (enquiry) =>
                enquiry.status === "contacted"
        ).length;

    const convertedStudentEnquiries =
        studentEnquiries.filter(
            (enquiry) =>
                enquiry.status === "converted"
        ).length;

    // =====================================================
    // LOADING
    // =====================================================

    if (loading) {
        return (
            <div
                style={{
                    minHeight: "100vh",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    background: "#EFF0F6",
                    fontFamily:
                        "Futura, Trebuchet MS, Arial, sans-serif",
                    color: "#25252B",
                    fontSize: "20px",
                }}
            >
                Loading Admin Dashboard...
            </div>
        );
    }

    // =====================================================
    // MAIN JSX
    // =====================================================

    return (
        <div style={pageStyle}>
            {/* =================================================
                HEADER
            ================================================= */}

            <div style={headerStyle}>
                <div>
                    <h1
                        style={{
                            margin: 0,
                            color: "#25252B",
                            fontSize: "30px",
                        }}
                    >
                        Admin Dashboard
                    </h1>

                    <p
                        style={{
                            marginTop: "8px",
                            color: "#666",
                        }}
                    >
                        Welcome,{" "}
                        <strong>
                            {adminUser.name ||
                                "Admin"}
                        </strong>
                    </p>
                </div>

                <div
                    style={{
                        display: "flex",
                        gap: "10px",
                    }}
                >
                    <button
                        onClick={
                            fetchDashboardData
                        }
                        style={refreshButtonStyle}
                    >
                        ↻ Refresh
                    </button>

                    <button
                        onClick={logout}
                        style={logoutButtonStyle}
                    >
                        Logout
                    </button>
                </div>
            </div>

            {/* =================================================
                ERROR
            ================================================= */}

            {error && (
                <div style={errorStyle}>
                    {error}
                </div>
            )}

            {/* =================================================
                STATISTICS
            ================================================= */}

            <div style={statsGridStyle}>
                <StatCard
                    title="Contact Messages"
                    count={contacts.length}
                    subtitle={`${newContacts} new`}
                />

                <StatCard
                    title="Applications"
                    count={applications.length}
                    subtitle={`${newApplications} new`}
                />

                <StatCard
                    title="Student Enquiries"
                    count={studentEnquiries.length}
                    subtitle={`${newStudentEnquiries} new`}
                />

                <StatCard
                    title="Converted Enquiries"
                    count={
                        convertedStudentEnquiries
                    }
                    subtitle="Student enquiries"
                />
            </div>

            {/* =================================================
                CONTACT MESSAGES
            ================================================= */}

            <section style={sectionStyle}>
                <div
                    style={sectionHeaderStyle}
                >
                    <div>
                        <h2 style={sectionTitle}>
                            Contact Messages
                        </h2>

                        <p
                            style={{
                                color: "#777",
                                margin: "5px 0 0",
                            }}
                        >
                            Manage website contact
                            enquiries.
                        </p>
                    </div>

                    <div
                        style={smallStatsStyle}
                    >
                        <span>
                            New: {newContacts}
                        </span>

                        <span>
                            Read: {readContacts}
                        </span>

                        <span>
                            Replied:{" "}
                            {repliedContacts}
                        </span>
                    </div>
                </div>

                <div style={tableWrapperStyle}>
                    {contacts.length === 0 ? (
                        <EmptyMessage text="No contact messages available." />
                    ) : (
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>
                                        Name
                                    </th>

                                    <th style={thStyle}>
                                        Email
                                    </th>

                                    <th style={thStyle}>
                                        Phone
                                    </th>

                                    <th style={thStyle}>
                                        Message
                                    </th>

                                    <th style={thStyle}>
                                        Date
                                    </th>

                                    <th style={thStyle}>
                                        Status
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {contacts.map(
                                    (contact) => (
                                        <tr
                                            key={
                                                contact._id
                                            }
                                        >
                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    contact.name
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    contact.email
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    contact.phone
                                                }
                                            </td>

                                            <td
                                                style={{
                                                    ...tdStyle,
                                                    maxWidth:
                                                        "280px",
                                                }}
                                            >
                                                {
                                                    contact.message
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {formatDate(
                                                    contact.createdAt
                                                )}
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                <select
                                                    value={
                                                        contact.status
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        updateContactStatus(
                                                            contact._id,
                                                            e
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                    style={
                                                        selectStyle
                                                    }
                                                >
                                                    <option value="new">
                                                        New
                                                    </option>

                                                    <option value="read">
                                                        Read
                                                    </option>

                                                    <option value="replied">
                                                        Replied
                                                    </option>
                                                </select>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>

            {/* =================================================
                JOB APPLICATIONS
            ================================================= */}

            <section style={sectionStyle}>
                <div
                    style={sectionHeaderStyle}
                >
                    <div>
                        <h2 style={sectionTitle}>
                            Job Applications
                        </h2>

                        <p
                            style={{
                                color: "#777",
                                margin: "5px 0 0",
                            }}
                        >
                            Manage applications
                            submitted through
                            Careers.
                        </p>
                    </div>

                    <div
                        style={smallStatsStyle}
                    >
                        <span>
                            New:{" "}
                            {newApplications}
                        </span>

                        <span>
                            Shortlisted:{" "}
                            {
                                shortlistedApplications
                            }
                        </span>
                    </div>
                </div>

                <div style={tableWrapperStyle}>
                    {applications.length ===
                    0 ? (
                        <EmptyMessage text="No applications available." />
                    ) : (
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>
                                        Name
                                    </th>

                                    <th style={thStyle}>
                                        Email
                                    </th>

                                    <th style={thStyle}>
                                        Phone
                                    </th>

                                    <th style={thStyle}>
                                        Position
                                    </th>

                                    <th style={thStyle}>
                                        Qualification
                                    </th>

                                    <th style={thStyle}>
                                        Experience
                                    </th>

                                    <th style={thStyle}>
                                        Resume
                                    </th>

                                    <th style={thStyle}>
                                        Date
                                    </th>

                                    <th style={thStyle}>
                                        Status
                                    </th>

                                    <th style={thStyle}>
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {applications.map(
                                    (
                                        application
                                    ) => (
                                        <tr
                                            key={
                                                application._id
                                            }
                                        >
                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    application.name
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    application.email
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    application.phone
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    application.position
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    application.qualification ||
                                                    "Not provided"
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    application.experience ||
                                                    "Not provided"
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {application.resume ? (
                                                    <a
                                                        href={
                                                            application.resume
                                                        }
                                                        target="_blank"
                                                        rel="noreferrer"
                                                        style={
                                                            linkStyle
                                                        }
                                                    >
                                                        View Resume
                                                    </a>
                                                ) : (
                                                    "Not provided"
                                                )}
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {formatDate(
                                                    application.createdAt
                                                )}
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                <select
                                                    value={
                                                        application.status
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        updateApplicationStatus(
                                                            application._id,
                                                            e
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                    style={
                                                        selectStyle
                                                    }
                                                >
                                                    <option value="new">
                                                        New
                                                    </option>

                                                    <option value="reviewing">
                                                        Reviewing
                                                    </option>

                                                    <option value="shortlisted">
                                                        Shortlisted
                                                    </option>

                                                    <option value="rejected">
                                                        Rejected
                                                    </option>
                                                </select>
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                <button
                                                    onClick={() =>
                                                        deleteApplication(
                                                            application._id
                                                        )
                                                    }
                                                    style={
                                                        deleteButtonStyle
                                                    }
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>

            {/* =================================================
                STUDENT ENQUIRIES
            ================================================= */}

            <section style={sectionStyle}>
                <div
                    style={sectionHeaderStyle}
                >
                    <div>
                        <h2 style={sectionTitle}>
                            Student Enquiries
                        </h2>

                        <p
                            style={{
                                color: "#777",
                                margin: "5px 0 0",
                            }}
                        >
                            Manage Study Abroad
                            student enquiries.
                        </p>
                    </div>

                    <div
                        style={smallStatsStyle}
                    >
                        <span>
                            New:{" "}
                            {newStudentEnquiries}
                        </span>

                        <span>
                            Contacted:{" "}
                            {
                                contactedStudentEnquiries
                            }
                        </span>

                        <span>
                            Converted:{" "}
                            {
                                convertedStudentEnquiries
                            }
                        </span>
                    </div>
                </div>

                <div style={tableWrapperStyle}>
                    {studentEnquiries.length ===
                    0 ? (
                        <EmptyMessage text="No student enquiries available." />
                    ) : (
                        <table style={tableStyle}>
                            <thead>
                                <tr>
                                    <th style={thStyle}>
                                        Name
                                    </th>

                                    <th style={thStyle}>
                                        Email
                                    </th>

                                    <th style={thStyle}>
                                        Phone
                                    </th>

                                    <th style={thStyle}>
                                        Country
                                    </th>

                                    <th style={thStyle}>
                                        Course
                                    </th>

                                    <th style={thStyle}>
                                        Qualification
                                    </th>

                                    <th style={thStyle}>
                                        Intake
                                    </th>

                                    <th style={thStyle}>
                                        Date
                                    </th>

                                    <th style={thStyle}>
                                        Status
                                    </th>

                                    <th style={thStyle}>
                                        Action
                                    </th>
                                </tr>
                            </thead>

                            <tbody>
                                {studentEnquiries.map(
                                    (enquiry) => (
                                        <tr
                                            key={
                                                enquiry._id
                                            }
                                        >
                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    enquiry.name
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    enquiry.email
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    enquiry.phone
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    enquiry.country ||
                                                    "Not provided"
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    enquiry.course ||
                                                    "Not provided"
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    enquiry.qualification ||
                                                    "Not provided"
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {
                                                    enquiry.intake ||
                                                    "Not provided"
                                                }
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                {formatDate(
                                                    enquiry.createdAt
                                                )}
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                <select
                                                    value={
                                                        enquiry.status
                                                    }
                                                    onChange={(
                                                        e
                                                    ) =>
                                                        updateStudentEnquiryStatus(
                                                            enquiry._id,
                                                            e
                                                                .target
                                                                .value
                                                        )
                                                    }
                                                    style={
                                                        selectStyle
                                                    }
                                                >
                                                    <option value="new">
                                                        New
                                                    </option>

                                                    <option value="contacted">
                                                        Contacted
                                                    </option>

                                                    <option value="counselling-scheduled">
                                                        Counselling Scheduled
                                                    </option>

                                                    <option value="in-progress">
                                                        In Progress
                                                    </option>

                                                    <option value="converted">
                                                        Converted
                                                    </option>

                                                    <option value="closed">
                                                        Closed
                                                    </option>
                                                </select>
                                            </td>

                                            <td
                                                style={
                                                    tdStyle
                                                }
                                            >
                                                <div
                                                    style={{
                                                        display:
                                                            "flex",
                                                        gap: "8px",
                                                        flexWrap:
                                                            "wrap",
                                                    }}
                                                >
                                                    <button
                                                        onClick={() =>
                                                            openStudentEnquiryDetails(
                                                                enquiry
                                                            )
                                                        }
                                                        style={
                                                            viewButtonStyle
                                                        }
                                                    >
                                                        View Details
                                                    </button>

                                                    <button
                                                        onClick={() =>
                                                            deleteStudentEnquiry(
                                                                enquiry._id
                                                            )
                                                        }
                                                        style={
                                                            deleteButtonStyle
                                                        }
                                                    >
                                                        Delete
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    )
                                )}
                            </tbody>
                        </table>
                    )}
                </div>
            </section>

            {/* =================================================
                STUDENT ENQUIRY DETAILS MODAL
            ================================================= */}

            {selectedStudentEnquiry && (
                <div
                    onClick={
                        closeStudentEnquiryDetails
                    }
                    style={modalOverlayStyle}
                >
                    <div
                        onClick={(e) =>
                            e.stopPropagation()
                        }
                        style={modalStyle}
                    >
                        {/* Modal Header */}

                        <div
                            style={{
                                display: "flex",
                                justifyContent:
                                    "space-between",
                                alignItems:
                                    "center",
                                marginBottom:
                                    "25px",
                            }}
                        >
                            <div>
                                <h2
                                    style={{
                                        margin: 0,
                                        color: "#25252B",
                                    }}
                                >
                                    Student Enquiry
                                    Details
                                </h2>

                                <p
                                    style={{
                                        margin:
                                            "6px 0 0",
                                        color: "#777",
                                    }}
                                >
                                    Complete enquiry
                                    information
                                </p>
                            </div>

                            <button
                                onClick={
                                    closeStudentEnquiryDetails
                                }
                                style={
                                    closeIconButtonStyle
                                }
                            >
                                ×
                            </button>
                        </div>

                        {/* Student Details */}

                        <div
                            style={
                                detailsGridStyle
                            }
                        >
                            <DetailItem
                                label="Name"
                                value={
                                    selectedStudentEnquiry.name
                                }
                            />

                            <DetailItem
                                label="Email"
                                value={
                                    selectedStudentEnquiry.email
                                }
                            />

                            <DetailItem
                                label="Phone"
                                value={
                                    selectedStudentEnquiry.phone
                                }
                            />

                            <DetailItem
                                label="Country"
                                value={
                                    selectedStudentEnquiry.country ||
                                    "Not provided"
                                }
                            />

                            <DetailItem
                                label="Course"
                                value={
                                    selectedStudentEnquiry.course ||
                                    "Not provided"
                                }
                            />

                            <DetailItem
                                label="Qualification"
                                value={
                                    selectedStudentEnquiry.qualification ||
                                    "Not provided"
                                }
                            />

                            <DetailItem
                                label="Graduation Year"
                                value={
                                    selectedStudentEnquiry.graduationYear ||
                                    "Not provided"
                                }
                            />

                            <DetailItem
                                label="Intake"
                                value={
                                    selectedStudentEnquiry.intake ||
                                    "Not provided"
                                }
                            />

                            <DetailItem
                                label="Status"
                                value={
                                    selectedStudentEnquiry.status
                                }
                            />

                            <DetailItem
                                label="Submitted"
                                value={formatDate(
                                    selectedStudentEnquiry.createdAt
                                )}
                            />
                        </div>

                        {/* Message */}

                        <div
                            style={{
                                marginTop: "22px",
                            }}
                        >
                            <h4
                                style={{
                                    marginBottom:
                                        "8px",
                                    color: "#25252B",
                                }}
                            >
                                Message
                            </h4>

                            <div
                                style={{
                                    background:
                                        "#F8F8FA",
                                    padding: "16px",
                                    borderRadius:
                                        "10px",
                                    color: "#555",
                                    lineHeight:
                                        "1.6",
                                    minHeight:
                                        "70px",
                                }}
                            >
                                {selectedStudentEnquiry.message ||
                                    "No message provided."}
                            </div>
                        </div>

                        {/* Close */}

                        <button
                            onClick={
                                closeStudentEnquiryDetails
                            }
                            style={{
                                width: "100%",
                                marginTop: "25px",
                                padding: "13px",
                                border: "none",
                                borderRadius: "8px",
                                background:
                                    "#A202F0",
                                color: "#fff",
                                fontSize: "15px",
                                fontWeight: "600",
                                cursor: "pointer",
                            }}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

// =========================================================
// STAT CARD
// =========================================================

const StatCard = ({
    title,
    count,
    subtitle,
}) => {
    return (
        <div style={statCardStyle}>
            <p
                style={{
                    margin: 0,
                    color: "#777",
                    fontSize: "14px",
                }}
            >
                {title}
            </p>

            <h2
                style={{
                    margin: "10px 0",
                    color: "#25252B",
                    fontSize: "32px",
                }}
            >
                {count}
            </h2>

            <p
                style={{
                    margin: 0,
                    color: "#A202F0",
                    fontSize: "13px",
                    fontWeight: "600",
                }}
            >
                {subtitle}
            </p>
        </div>
    );
};

// =========================================================
// DETAIL ITEM
// =========================================================

const DetailItem = ({
    label,
    value,
}) => {
    return (
        <div
            style={{
                background: "#F8F8FA",
                padding: "14px",
                borderRadius: "8px",
            }}
        >
            <div
                style={{
                    color: "#777",
                    fontSize: "12px",
                    marginBottom: "5px",
                    textTransform:
                        "uppercase",
                    letterSpacing:
                        "0.4px",
                }}
            >
                {label}
            </div>

            <div
                style={{
                    color: "#25252B",
                    fontSize: "14px",
                    fontWeight: "600",
                    wordBreak: "break-word",
                }}
            >
                {value}
            </div>
        </div>
    );
};

// =========================================================
// EMPTY MESSAGE
// =========================================================

const EmptyMessage = ({ text }) => {
    return (
        <div
            style={{
                padding: "40px 20px",
                textAlign: "center",
                color: "#777",
            }}
        >
            {text}
        </div>
    );
};

// =========================================================
// COMMON STYLES
// =========================================================

const pageStyle = {
    minHeight: "100vh",
    background: "#EFF0F6",
    padding: "30px",
    fontFamily:
        "Futura, Trebuchet MS, Arial, sans-serif",
    boxSizing: "border-box",
};

const headerStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "30px",
    flexWrap: "wrap",
};

const statsGridStyle = {
    display: "grid",
    gridTemplateColumns:
        "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginBottom: "30px",
};

const statCardStyle = {
    background: "#fff",
    padding: "24px",
    borderRadius: "15px",
    boxShadow:
        "0 5px 20px rgba(0,0,0,0.05)",
};

const sectionStyle = {
    background: "#fff",
    padding: "25px",
    borderRadius: "15px",
    marginBottom: "30px",
    boxShadow:
        "0 5px 20px rgba(0,0,0,0.05)",
};

const sectionHeaderStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "20px",
    marginBottom: "20px",
    flexWrap: "wrap",
};

const sectionTitle = {
    margin: 0,
    color: "#25252B",
    fontSize: "22px",
};

const smallStatsStyle = {
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    color: "#666",
    fontSize: "13px",
};

const tableWrapperStyle = {
    width: "100%",
    overflowX: "auto",
};

const tableStyle = {
    width: "100%",
    minWidth: "900px",
    borderCollapse: "collapse",
};

const thStyle = {
    textAlign: "left",
    padding: "14px",
    borderBottom:
        "2px solid #EFF0F6",
    color: "#25252B",
    whiteSpace: "nowrap",
    fontSize: "13px",
};

const tdStyle = {
    padding: "14px",
    borderBottom:
        "1px solid #EFF0F6",
    verticalAlign: "top",
    color: "#444",
    fontSize: "13px",
};

const selectStyle = {
    padding: "8px 10px",
    border: "1px solid #ddd",
    borderRadius: "6px",
    background: "#fff",
    cursor: "pointer",
};

const viewButtonStyle = {
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    background: "#25252B",
    color: "#fff",
    cursor: "pointer",
    fontSize: "12px",
    whiteSpace: "nowrap",
};

const deleteButtonStyle = {
    padding: "8px 12px",
    border: "none",
    borderRadius: "6px",
    background: "#dc2626",
    color: "#fff",
    cursor: "pointer",
    fontSize: "12px",
    whiteSpace: "nowrap",
};

const refreshButtonStyle = {
    background: "#A202F0",
    color: "#fff",
    border: "none",
    padding: "11px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
};

const logoutButtonStyle = {
    background: "#25252B",
    color: "#fff",
    border: "none",
    padding: "11px 18px",
    borderRadius: "8px",
    cursor: "pointer",
    fontWeight: "600",
};

const linkStyle = {
    color: "#A202F0",
    fontWeight: "600",
    textDecoration: "none",
};

const errorStyle = {
    background: "#ffe5e5",
    color: "#c62828",
    padding: "15px",
    borderRadius: "8px",
    marginBottom: "20px",
};

const modalOverlayStyle = {
    position: "fixed",
    inset: 0,
    background:
        "rgba(0, 0, 0, 0.6)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 9999,
    padding: "20px",
    boxSizing: "border-box",
};

const modalStyle = {
    width: "100%",
    maxWidth: "700px",
    maxHeight: "90vh",
    overflowY: "auto",
    background: "#fff",
    borderRadius: "18px",
    padding: "30px",
    boxSizing: "border-box",
    boxShadow:
        "0 25px 60px rgba(0,0,0,0.25)",
};

const closeIconButtonStyle = {
    width: "38px",
    height: "38px",
    border: "none",
    borderRadius: "50%",
    background: "#F1F1F3",
    color: "#25252B",
    fontSize: "24px",
    cursor: "pointer",
    lineHeight: "1",
};

const detailsGridStyle = {
    display: "grid",
    gridTemplateColumns:
        "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "12px",
};

export default AdminDashboard;