import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../firebse";
import { useNavigate } from "react-router-dom";

export default function Signup() {
    const [firstname, setFirstname] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(null);
    const [success, setSuccess] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(null);

        if (password.length < 6) {
            // Display toast notification for short password
            toast.error("Password should be at least 6 characters long");
            return;
        }

        try {
            await createUserWithEmailAndPassword(auth, email, password);
            toast.success("Account created successfully! Please log in.");
            setSuccess(true); // Redirect after successful account creation
        } catch (err) {
            console.error("Error creating account:", err.message);
            toast.error(err.message);
        }
    };

    if (success) {
        navigate("/login");
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
                                            Sign<span style={{ color: "red" }}> Up</span>
                                        </h1>
                                    </div>
                                    <div className="col-md-12">
                                        <div className="signup-header1">
                                            <form onSubmit={handleSubmit}>
                                                <label className="form-label">First name</label>
                                                <input
                                                    type="text"
                                                    name="firstname"
                                                    value={firstname}
                                                    placeholder="Fname"
                                                    className="details-area"
                                                    onChange={(e) => setFirstname(e.target.value)}
                                                    required
                                                />

                                                <label className="form-label">Last name</label>
                                                <input
                                                    type="text"
                                                    name="lastname"
                                                    value={lastname}
                                                    placeholder="Lname"
                                                    className="details-area"
                                                    onChange={(e) => setLastname(e.target.value)}
                                                    required
                                                />

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

                                                {/* Error Message */}
                                                {error && (
                                                    <p style={{ color: "red", fontWeight: "bold" }}>
                                                        {error}
                                                    </p>
                                                )}

                                                <button type="submit" className="site-btn">
                                                    Sign Up
                                                </button>
                                                <a href="login" className="account">
                                                    Already Have Account?
                                                </a>
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
