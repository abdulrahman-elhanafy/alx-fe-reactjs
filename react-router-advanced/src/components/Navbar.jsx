import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({ isAuthenticated, setAuth }) {
    return (
        <nav className="p-4 bg-gray-900 text-white flex gap-4">
            <Link to="/">Home</Link>
            <Link to="/profile/details">Profile</Link>
            <Link to="/user/abdulrahman">Dynamic User</Link>
            {isAuthenticated ? (
                <button onClick={() => setAuth(false)}>Logout</button>
            ) : (
                <Link to="/login">Login</Link>
            )}
        </nav>
    );
}
