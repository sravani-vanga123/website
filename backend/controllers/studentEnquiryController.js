const StudentEnquiry = require("../models/StudentEnquiry");

// CREATE STUDENT ENQUIRY
const createStudentEnquiry = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            country,
            course,
            qualification,
            graduationYear,
            intake,
            message,
        } = req.body;

        // Required fields
        if (!name || !email || !phone) {
            return res.status(400).json({
                success: false,
                message:
                    "Name, email and phone are required.",
            });
        }

        const enquiry =
            await StudentEnquiry.create({
                name,
                email,
                phone,
                country,
                course,
                qualification,
                graduationYear,
                intake,
                message,
            });

        return res.status(201).json({
            success: true,
            message:
                "Student enquiry submitted successfully.",
            enquiry,
        });
    } catch (error) {
        console.error(
            "Create Student Enquiry Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to submit student enquiry.",
        });
    }
};

// GET ALL STUDENT ENQUIRIES
const getStudentEnquiries = async (req, res) => {
    try {
        const enquiries =
            await StudentEnquiry.find().sort({
                createdAt: -1,
            });

        return res.status(200).json({
            success: true,
            enquiries,
        });
    } catch (error) {
        console.error(
            "Get Student Enquiries Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to fetch student enquiries.",
        });
    }
};

// GET SINGLE STUDENT ENQUIRY
const getStudentEnquiryById = async (
    req,
    res
) => {
    try {
        const enquiry =
            await StudentEnquiry.findById(
                req.params.id
            );

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message:
                    "Student enquiry not found.",
            });
        }

        return res.status(200).json({
            success: true,
            enquiry,
        });
    } catch (error) {
        console.error(
            "Get Student Enquiry Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to fetch student enquiry.",
        });
    }
};

// UPDATE STUDENT ENQUIRY STATUS
const updateStudentEnquiryStatus =
    async (req, res) => {
        try {
            const { status } = req.body;

            const allowedStatuses = [
                "new",
                "contacted",
                "counselling-scheduled",
                "in-progress",
                "converted",
                "closed",
            ];

            if (
                !allowedStatuses.includes(status)
            ) {
                return res.status(400).json({
                    success: false,
                    message:
                        "Invalid student enquiry status.",
                });
            }

            const enquiry =
                await StudentEnquiry.findByIdAndUpdate(
                    req.params.id,
                    {
                        status,
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );

            if (!enquiry) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Student enquiry not found.",
                });
            }

            return res.status(200).json({
                success: true,
                message:
                    "Student enquiry status updated.",
                enquiry,
            });
        } catch (error) {
            console.error(
                "Update Student Enquiry Status Error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Unable to update student enquiry status.",
            });
        }
    };

// DELETE STUDENT ENQUIRY
const deleteStudentEnquiry = async (
    req,
    res
) => {
    try {
        const enquiry =
            await StudentEnquiry.findByIdAndDelete(
                req.params.id
            );

        if (!enquiry) {
            return res.status(404).json({
                success: false,
                message:
                    "Student enquiry not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message:
                "Student enquiry deleted successfully.",
        });
    } catch (error) {
        console.error(
            "Delete Student Enquiry Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to delete student enquiry.",
        });
    }
};

module.exports = {
    createStudentEnquiry,
    getStudentEnquiries,
    getStudentEnquiryById,
    updateStudentEnquiryStatus,
    deleteStudentEnquiry,
};