import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";

export default function App() {
    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-white shadow p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-bold">RecipeShare</h1>
                    </div>
                </nav>

                <main className="container mx-auto p-4">
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/recipe/:id" element={<RecipeDetail />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
