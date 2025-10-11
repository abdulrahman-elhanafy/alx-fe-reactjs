import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function Profile() {
    return (
        <div className="p-6">
            <h2>Profile Page 👤</h2>
            <nav className="mt-2 flex gap-3">
                <Link to="details">Details</Link>
                <Link to="settings">Settings</Link>
            </nav>
            <hr className="my-4" />
            <Outlet />
        </div>
    );
}
