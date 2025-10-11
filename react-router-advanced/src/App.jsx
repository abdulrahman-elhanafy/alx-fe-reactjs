import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import Profile from "./components/Profile";
import Home from "./components/Home";
import Login from "./components/Login";
import BlogPost from "./components/BlogPost"; // تأكد إن الملف ده موجود

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />

                {/* Dynamic route for blog posts */}
                <Route path="/blog/:id" element={<BlogPost />} />

                {/* Protected Route for Profile */}
                <Route
                    path="/profile"
                    element={
                        <ProtectedRoute>
                            <Profile />
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
    );
}
