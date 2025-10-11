import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Login from "./components/Login";
import BlogPost from "./components/BlogPost";
import ProtectedRoute from "./components/ProtectedRoute"; // ✅ الجديد

export default function App() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);

    return (
        <Router>
            <Navbar
                isAuthenticated={isAuthenticated}
                setAuth={setIsAuthenticated}
            />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route
                    path="/login"
                    element={<Login setAuth={setIsAuthenticated} />}
                />

                <Route
                    path="/profile/*"
                    element={
                        <ProtectedRoute isAuthenticated={isAuthenticated}>
                            <Profile />
                        </ProtectedRoute>
                    }
                />

                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
        </Router>
    );
}
