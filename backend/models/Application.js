const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            trim: true,
        },

        email: {
            type: String,
            required: true,
            trim: true,
            lowercase: true,
        },

        phone: {
            type: String,
            required: true,
            trim: true,
        },

        position: {
            type: String,
            required: true,
            trim: true,
        },

        experience: {
            type: String,
            trim: true,
            default: "",
        },

        qualification: {
            type: String,
            trim: true,
            default: "",
        },

        resume: {
            type: String,
            trim: true,
            default: "",
        },

        message: {
            type: String,
            trim: true,
            default: "",
        },

        status: {
            type: String,
            enum: [
                "new",
                "reviewing",
                "shortlisted",
                "rejected",
            ],
            default: "new",
        },
    },
    {
        timestamps: true,
    }
);

const Application = mongoose.model(
    "Application",
    applicationSchema
);

module.exports = Application;