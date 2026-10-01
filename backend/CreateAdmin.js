const dotenv = require("dotenv");
const bcrypt = require("bcryptjs");

const connectDB = require("./config/db");
const User = require("./models/User");

dotenv.config();

const createAdmin = async () => {
    try {
        await connectDB();

        const existingAdmin = await User.findOne({
            email: process.env.ADMIN_EMAIL,
        });

        if (existingAdmin) {
            console.log("Admin already exists.");
            process.exit(0);
        }

        const hashedPassword = await bcrypt.hash(
            process.env.ADMIN_PASSWORD,
            12
        );

        const admin = await User.create({
            name: process.env.ADMIN_NAME,
            email: process.env.ADMIN_EMAIL,
            password: hashedPassword,
            role: "admin",
        });

        console.log(
            `Admin created successfully: ${admin.email}`
        );

        process.exit(0);

    } catch (error) {
        console.error(
            "Create Admin Error:",
            error
        );

        process.exit(1);
    }
};

createAdmin();