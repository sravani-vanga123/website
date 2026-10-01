const Application = require("../models/Application");

// ======================================================
// CREATE APPLICATION
// PUBLIC
// ======================================================

const createApplication = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,
            position,
            experience,
            qualification,
            resume,
            message,
        } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !position
        ) {
            return res.status(400).json({
                success: false,
                message:
                    "Name, email, phone and position are required.",
            });
        }

        const application =
            await Application.create({
                name,
                email,
                phone,
                position,
                experience,
                qualification,
                resume,
                message,
            });

        return res.status(201).json({
            success: true,
            message:
                "Application submitted successfully.",
            application,
        });
    } catch (error) {
        console.error(
            "Create Application Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to submit application.",
        });
    }
};

// ======================================================
// GET ALL APPLICATIONS
// ADMIN
// ======================================================

const getApplications = async (req, res) => {
    try {
        const applications =
            await Application.find().sort({
                createdAt: -1,
            });

        return res.status(200).json({
            success: true,
            applications,
        });
    } catch (error) {
        console.error(
            "Get Applications Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to fetch applications.",
        });
    }
};

// ======================================================
// GET SINGLE APPLICATION
// ADMIN
// ======================================================

const getApplicationById = async (
    req,
    res
) => {
    try {
        const application =
            await Application.findById(
                req.params.id
            );

        if (!application) {
            return res.status(404).json({
                success: false,
                message:
                    "Application not found.",
            });
        }

        return res.status(200).json({
            success: true,
            application,
        });
    } catch (error) {
        console.error(
            "Get Application Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to fetch application.",
        });
    }
};

// ======================================================
// UPDATE APPLICATION STATUS
// ADMIN
// ======================================================

const updateApplicationStatus =
    async (req, res) => {
        try {
            const { status } = req.body;

            const allowedStatuses = [
                "new",
                "reviewing",
                "shortlisted",
                "rejected",
            ];

            if (
                !allowedStatuses.includes(
                    status
                )
            ) {
                return res.status(400).json({
                    success: false,
                    message:
                        "Invalid application status.",
                });
            }

            const application =
                await Application.findByIdAndUpdate(
                    req.params.id,
                    {
                        status,
                    },
                    {
                        new: true,
                        runValidators: true,
                    }
                );

            if (!application) {
                return res.status(404).json({
                    success: false,
                    message:
                        "Application not found.",
                });
            }

            return res.status(200).json({
                success: true,
                message:
                    "Application status updated.",
                application,
            });
        } catch (error) {
            console.error(
                "Update Application Status Error:",
                error
            );

            return res.status(500).json({
                success: false,
                message:
                    "Unable to update application status.",
            });
        }
    };

// ======================================================
// DELETE APPLICATION
// ADMIN
// ======================================================

const deleteApplication = async (
    req,
    res
) => {
    try {
        const application =
            await Application.findByIdAndDelete(
                req.params.id
            );

        if (!application) {
            return res.status(404).json({
                success: false,
                message:
                    "Application not found.",
            });
        }

        return res.status(200).json({
            success: true,
            message:
                "Application deleted successfully.",
        });
    } catch (error) {
        console.error(
            "Delete Application Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Unable to delete application.",
        });
    }
};

module.exports = {
    createApplication,
    getApplications,
    getApplicationById,
    updateApplicationStatus,
    deleteApplication,
};