const express = require("express");

const router = express.Router();

const {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplicationStatus,
    deleteApplication,
} = require("../controllers/applicationController");

const protect = require("../middleware/authMiddleware");

// Public
router.post("/", createApplication);

// Admin
router.get("/", protect, getApplications);

router.get(
    "/:id",
    protect,
    getApplicationById
);

router.patch(
    "/:id/status",
    protect,
    updateApplicationStatus
);

router.delete(
    "/:id",
    protect,
    deleteApplication
);

module.exports = router;