import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Profile from "./components/Profile";
import ProfileDetails from "./components/ProfileDetails";
import ProfileSettings from "./components/ProfileSettings";
import Login from "./components/Login";
import BlogPost from "./components/BlogPost"; // ✅ استيراد جديد

function ProtectedRoute({ isAuthenticated, children }) {
    return isAuthenticated ? children : <Navigate to="/login" />;
}

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

                {/* ✅ Dynamic Route */}
                <Route path="/blog/:id" element={<BlogPost />} />
            </Routes>
        </Router>
    );
}
