import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebse";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

            try {
                await signInWithEmailAndPassword(auth, email, password);
                toast.success("Logged in successfully!", {
                    onClose: () => navigate("/home"), // Navigate after the toast closes
                });
            } catch (err) {
                console.error("Login Failed:", err.message);
                toast.error(
                    err.message.includes("user-not-found")
                        ? "No account found with this email."
                        : err.message.includes("wrong-password")
                        ? "Incorrect password. Please try again."
                        : "Login failed. Please try again."
                );
            }
    };

    if (success) {
        navigate("/home");
    }


    return (
        <div className="main1">
            <ToastContainer />
            <div className="container">
                <div className="Rent-page">
                    <div className="header-part3">
                        <div className="signup-start">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <h1 className="about_taitalsign">
                                            Login<span style={{ color: "red" }}> Here</span>
                                        </h1>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="signup-header1">
                                            <form onSubmit={handleSubmit}>
                                                {/* Email */}
                                                <label className="form-label">Email</label>
                                                <input
                                                    type="email"
                                                    name="email"
                                                    value={email}
                                                    placeholder="..@gmail.com"
                                                    className="details-area"
                                                    onChange={(e) => setEmail(e.target.value)}
                                                    required
                                                />

                                                {/* Password */}
                                                <label className="form-label">Password</label>
                                                <input
                                                    type="password"
                                                    name="password"
                                                    value={password}
                                                    placeholder="***"
                                                    className="details-area"
                                                    onChange={(e) => setPassword(e.target.value)}
                                                    required
                                                />

                                                {/* Sign Up Button */}
                                                <button type="submit">Sign Up</button>
                                                <a href="signup" className="account">Create Account?</a>
                                            </form>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="top-right"
                autoClose={3000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
                theme="colored"
            />
        </div>
    );
}
