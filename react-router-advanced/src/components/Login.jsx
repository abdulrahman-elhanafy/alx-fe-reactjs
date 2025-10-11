import React from "react";
import { useNavigate } from "react-router-dom";

export default function Login({ setAuth }) {
    const navigate = useNavigate();

    const handleLogin = () => {
        setAuth(true);
        navigate("/profile/details");
    };

    return (
        <div className="p-6">
            <h2>Login Page</h2>
            <button
                onClick={handleLogin}
                className="mt-3 bg-blue-600 text-white px-4 py-2 rounded-lg">
                Login
            </button>
        </div>
    );
}
