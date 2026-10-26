const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

const User = require("../models/User");

const loginAdmin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // ==========================================
        // VALIDATE INPUT
        // ==========================================

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required.",
            });
        }

        const enteredEmail = email.toLowerCase().trim();

        const adminEmail = process.env.ADMIN_EMAIL
            ?.toLowerCase()
            .trim();

        const adminPassword = process.env.ADMIN_PASSWORD;

        const adminName =
            process.env.ADMIN_NAME || "Moin Admin";

        // ==========================================
        // CHECK ENV CONFIGURATION
        // ==========================================

        if (!adminEmail || !adminPassword) {
            console.error(
                "ADMIN_EMAIL or ADMIN_PASSWORD is missing in .env"
            );

            return res.status(500).json({
                success: false,
                message: "Admin configuration is missing.",
            });
        }

        // ==========================================
        // CHECK ADMIN EMAIL
        // ==========================================

        if (enteredEmail !== adminEmail) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        // ==========================================
        // CHECK ADMIN PASSWORD
        // ==========================================

        if (password !== adminPassword) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password.",
            });
        }

        // ==========================================
        // FIND ADMIN IN MONGODB
        // ==========================================

        let user = await User.findOne({
            email: adminEmail,
        });

        // ==========================================
        // CREATE ADMIN IF NOT EXISTS
        // ==========================================

        if (!user) {
            const hashedPassword =
                await bcrypt.hash(adminPassword, 10);

            user = await User.create({
                name: adminName,
                email: adminEmail,
                password: hashedPassword,
                role: "admin",
            });

            console.log(
                "Admin user created during login."
            );
        } else {
            // ======================================
            // MAKE SURE USER IS ADMIN
            // ======================================

            if (user.role !== "admin") {
                user.role = "admin";
            }

            // ======================================
            // SYNC PASSWORD WITH .ENV
            // ======================================

            const passwordMatches =
                await bcrypt.compare(
                    adminPassword,
                    user.password
                );

            if (!passwordMatches) {
                user.password =
                    await bcrypt.hash(
                        adminPassword,
                        10
                    );
            }

            // Update name if necessary
            if (user.name !== adminName) {
                user.name = adminName;
            }

            await user.save();
        }

        // ==========================================
        // JWT SECRET CHECK
        // ==========================================

        if (!process.env.JWT_SECRET) {
            console.error(
                "JWT_SECRET is missing in .env"
            );

            return res.status(500).json({
                success: false,
                message:
                    "JWT configuration is missing.",
            });
        }

        // ==========================================
        // CREATE JWT
        // ==========================================

        const token = jwt.sign(
            {
                id: user._id,
                role: "admin",
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1d",
            }
        );

        // ==========================================
        // LOGIN SUCCESS
        // ==========================================

        return res.status(200).json({
            success: true,
            message: "Login successful.",
            token,
            admin: {
                id: user._id,
                name: user.name,
                email: user.email,
                role: "admin",
            },
        });
    } catch (error) {
        console.error(
            "Admin Login Error:",
            error
        );

        return res.status(500).json({
            success: false,
            message:
                "Server error during login.",
        });
    }
};

module.exports = {
    loginAdmin,
};