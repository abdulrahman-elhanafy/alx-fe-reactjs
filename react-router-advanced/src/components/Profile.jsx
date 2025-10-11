import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import ProfileDetails from "./ProfileDetails";
import ProfileSettings from "./ProfileSettings";

export default function Profile() {
    return (
        <div className="p-6">
            <h2>Profile Page 👤</h2>

            <nav className="mt-2 flex gap-3">
                <Link to="details">Details</Link>
                <Link to="settings">Settings</Link>
            </nav>

            <hr className="my-4" />

            {/* 🧩 Nested Routes داخل Profile.jsx */}
            <Routes>
                <Route path="details" element={<ProfileDetails />} />
                <Route path="settings" element={<ProfileSettings />} />
            </Routes>
        </div>
    );
}
