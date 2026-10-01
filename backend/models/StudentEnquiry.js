const mongoose = require("mongoose");

const studentEnquirySchema = new mongoose.Schema(
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

        country: {
            type: String,
            trim: true,
            default: "",
        },

        course: {
            type: String,
            trim: true,
            default: "",
        },

        qualification: {
            type: String,
            trim: true,
            default: "",
        },

        graduationYear: {
            type: String,
            trim: true,
            default: "",
        },

        intake: {
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
                "contacted",
                "counselling-scheduled",
                "in-progress",
                "converted",
                "closed",
            ],
            default: "new",
        },
    },
    {
        timestamps: true,
    }
);

const StudentEnquiry =
    mongoose.model(
        "StudentEnquiry",
        studentEnquirySchema
    );

module.exports = StudentEnquiry;