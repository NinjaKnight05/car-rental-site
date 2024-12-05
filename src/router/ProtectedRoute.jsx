import React from "react";
import { Navigate } from "react-router-dom";
import { auth } from "../firebse"; // Your Firebase setup
import { useAuthState } from "react-firebase-hooks/auth"; // For managing Firebase auth state

const ProtectedRoute = ({ children, adminOnly = false }) => {
    const [user, loading] = useAuthState(auth); // Firebase authentication state

    if (loading) {
        return <div>Loading...</div>; // Show a loader while checking auth
    }

    if (!user) {
        return <Navigate to="/login" replace />; // Redirect to login if not authenticated
    }

    if (adminOnly) {
        // Assuming admin is identified by their email
        const adminEmail = "admin@example.com";
        if (user.email !== adminEmail) {
            return <Navigate to="/home" replace />; // Redirect regular users to home
        }
    }

    return children; // Render the child components if authenticated
};

export default ProtectedRoute;
