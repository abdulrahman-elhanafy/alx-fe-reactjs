import React, { useState } from "react";

const RegistrationForm = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!username || !email || !password) {
            setError("كل الحقول مطلوبة!");
            return;
        }

        setError("");
        console.log("Form submitted:", { username, email, password });
        alert("✅ Registered successfully!");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-3 w-80 mx-auto mt-10">
            <h2 className="text-xl font-bold text-center">User Registration</h2>

            <input
                type="text"
                name="username"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="border p-2 rounded"
            />

            <input
                type="email"
                name="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border p-2 rounded"
            />

            <input
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border p-2 rounded"
            />

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
                type="submit"
                className="bg-blue-600 text-white p-2 rounded">
                Register
            </button>
        </form>
    );
};

export default RegistrationForm;
