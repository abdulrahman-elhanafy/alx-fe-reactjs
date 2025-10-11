import React from "react";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ isAuthenticated, children }) {
    // لو المستخدم مش عامل تسجيل دخول → رجّعه على صفحة login
    if (!isAuthenticated) {
        return <Navigate to="/login" />;
    }

    // لو متسجل → رجّع الصفحة اللي المفروض يشوفها
    return children;
}
