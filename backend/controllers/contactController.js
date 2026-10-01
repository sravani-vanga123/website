const Contact = require("../models/Contact");

// Create contact
const createContact = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            message,
        } = req.body;

        if (!name || !email || !phone || !message) {
            return res.status(400).json({
                success: false,
                message:
                    "Name, email, phone and message are required.",
            });
        }

        const contact = await Contact.create({
            name,
            email,
            phone,
            message,
        });

        return res.status(201).json({
            success: true,
            message:
                "Your message has been submitted successfully.",
            contact,
        });
    } catch (error) {
        console.error(
            "Create Contact Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to submit your message. Please try again later.",
        });
    }
};

// Get all contacts - Admin
const getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find()
            .sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            contacts,
        });
    } catch (error) {
        console.error(
            "Get Contacts Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message: "Unable to fetch contacts.",
        });
    }
};

// Update contact status - Admin
const updateContactStatus = async (req, res) => {
    try {
        const { status } = req.body;

        if (!["new", "read", "replied"].includes(status)) {
            return res.status(400).json({
                success: false,
                message: "Invalid contact status.",
            });
        }

        const contact = await Contact.findByIdAndUpdate(
            req.params.id,
            { status },
            {
                new: true,
                runValidators: true,
            }
        );

        if (!contact) {
            return res.status(404).json({
                success: false,
                message: "Contact not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message: "Contact status updated.",
            contact,
        });
    } catch (error) {
        console.error(
            "Update Contact Status Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to update contact status.",
        });
    }
};

module.exports = {
    createContact,
    getContacts,
    updateContactStatus,
};