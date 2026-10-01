const express = require("express");

const router = express.Router();

const {
    createContact,
    getContacts,
    updateContactStatus,
} = require("../controllers/contactController");

const protect = require("../middleware/authMiddleware");

// Public contact form
router.post("/", createContact);

// Admin: get all contacts
router.get("/", protect, getContacts);

// Admin: update contact status
router.patch("/:id/status", protect, updateContactStatus);

module.exports = router;