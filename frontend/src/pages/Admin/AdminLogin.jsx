import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = async (e) => {
        e.preventDefault();

        setError("");
        setLoading(true);

        try {
            const response = await fetch(
                `${import.meta.env.VITE_API_URL}/api/auth/login`,
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        email,
                        password,
                    }),
                }
            );

            const data = await response.json();

            if (!response.ok) {
                setError(
                    data.message || "Login failed."
                );
                return;
            }

            localStorage.setItem(
                "adminToken",
                data.token
            );

            localStorage.setItem(
                "adminUser",
                JSON.stringify(data.admin)
            );

            navigate("/admin/dashboard");
        } catch (error) {
            setError(
                "Unable to connect to the server."
            );
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            style={{
                minHeight: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#EFF0F6",
                padding: "20px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "420px",
                    background: "#FFFFFF",
                    padding: "40px",
                    borderRadius: "20px",
                    boxShadow:
                        "0 10px 40px rgba(0,0,0,0.08)",
                }}
            >
                <h1
                    style={{
                        textAlign: "center",
                        color: "#25252B",
                        marginBottom: "8px",
                    }}
                >
                    Admin Login
                </h1>

                <p
                    style={{
                        textAlign: "center",
                        color: "#666",
                        marginBottom: "30px",
                    }}
                >
                    Moin Consultancy
                </p>

                {error && (
                    <div
                        style={{
                            background: "#ffe5e5",
                            color: "#c62828",
                            padding: "12px",
                            borderRadius: "8px",
                            marginBottom: "20px",
                        }}
                    >
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    {/* EMAIL */}
                    <div
                        style={{
                            marginBottom: "20px",
                        }}
                    >
                        <label>Email</label>

                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                setEmail(e.target.value)
                            }
                            placeholder="Enter admin email"
                            required
                            style={{
                                width: "100%",
                                padding: "13px",
                                marginTop: "8px",
                                border:
                                    "1px solid #ddd",
                                borderRadius: "8px",
                                boxSizing:
                                    "border-box",
                            }}
                        />
                    </div>

                    {/* PASSWORD */}
                    <div
                        style={{
                            marginBottom: "25px",
                        }}
                    >
                        <label>Password</label>

                        <div
                            style={{
                                position: "relative",
                                marginTop: "8px",
                            }}
                        >
                            <input
                                type={
                                    showPassword
                                        ? "text"
                                        : "password"
                                }
                                value={password}
                                onChange={(e) =>
                                    setPassword(
                                        e.target.value
                                    )
                                }
                                placeholder="Enter password"
                                required
                                style={{
                                    width: "100%",
                                    padding: "13px 70px 13px 13px",
                                    border:
                                        "1px solid #ddd",
                                    borderRadius: "8px",
                                    boxSizing:
                                        "border-box",
                                }}
                            />

                            <button
                                type="button"
                                onClick={() =>
                                    setShowPassword(
                                        !showPassword
                                    )
                                }
                                style={{
                                    position: "absolute",
                                    right: "10px",
                                    top: "50%",
                                    transform:
                                        "translateY(-50%)",
                                    border: "none",
                                    background:
                                        "transparent",
                                    color: "#A202F0",
                                    fontWeight: "600",
                                    cursor: "pointer",
                                }}
                            >
                                {showPassword
                                    ? "Hide"
                                    : "Show"}
                            </button>
                        </div>
                    </div>

                    {/* LOGIN BUTTON */}
                    <button
                        type="submit"
                        disabled={loading}
                        style={{
                            width: "100%",
                            padding: "14px",
                            border: "none",
                            borderRadius: "8px",
                            background: "#A202F0",
                            color: "#FFFFFF",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: "pointer",
                        }}
                    >
                        {loading
                            ? "Logging in..."
                            : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;