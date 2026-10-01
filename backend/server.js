const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

const connectDB = require("./config/db");

dotenv.config();

connectDB();

const app = express();

// ======================================================
// CORS
// ======================================================

app.use(
    cors({
        origin: process.env.CLIENT_URL,
        credentials: true,
    })
);

// ======================================================
// BODY PARSER
// ======================================================

app.use(express.json());

app.use(
    express.urlencoded({
        extended: true,
    })
);

// ======================================================
// ROOT
// ======================================================

app.get("/", (req, res) => {
    res.json({
        success: true,
        message:
            "Moin Consultancy Backend is Running",
    });
});

// ======================================================
// HEALTH CHECK
// ======================================================

app.get("/api/health", (req, res) => {
    res.json({
        success: true,
        message:
            "Moin Consultancy API is healthy",
    });
});

// ======================================================
// AUTH ROUTES
// ======================================================

app.use(
    "/api/auth",
    require("./routes/authRoutes")
);

// ======================================================
// CONTACT ROUTES
// ======================================================

app.use(
    "/api/contact",
    require("./routes/contactRoutes")
);

// ======================================================
// APPLICATION ROUTES
// ======================================================

app.use(
    "/api/application",
    require("./routes/applicationRoutes")
);

// ======================================================
// STUDENT / STUDY ABROAD ENQUIRY ROUTES
// ======================================================

app.use(
    "/api/student-enquiry",
    require("./routes/studentEnquiryRoutes")
);

// ======================================================
// APPLICATION TEST ROUTE
// ======================================================

app.get("/api/application-test", (req, res) => {
    res.json({
        success: true,
        message:
            "Application test route is working",
    });
});

// ======================================================
// 404
// ======================================================

app.use((req, res) => {
    res.status(404).json({
        success: false,
        message:
            "API route not found",
    });
});

// ======================================================
// SERVER
// ======================================================

const PORT =
    process.env.PORT || 5000;

app.listen(
    PORT,
    "0.0.0.0",
    () => {
        console.log(
            `Server running on port ${PORT}`
        );
    }
);