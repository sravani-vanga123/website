const express = require("express");

const router = express.Router();

const {
    createStudentEnquiry,
    getStudentEnquiries,
    getStudentEnquiryById,
    updateStudentEnquiryStatus,
    deleteStudentEnquiry,
} = require("../controllers/studentEnquiryController");

const protect = require("../middleware/authMiddleware");

// PUBLIC
// Submit student / study abroad enquiry
router.post("/", createStudentEnquiry);

// ADMIN
// Get all student enquiries
router.get("/", protect, getStudentEnquiries);

// ADMIN
// Get single student enquiry
router.get(
    "/:id",
    protect,
    getStudentEnquiryById
);

// ADMIN
// Update enquiry status
router.patch(
    "/:id/status",
    protect,
    updateStudentEnquiryStatus
);

// ADMIN
// Delete enquiry
router.delete(
    "/:id",
    protect,
    deleteStudentEnquiry
);

module.exports = router;