import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useNavigate,
} from "react-router-dom";
import HomePage from "./components/HomePage";
import RecipeDetail from "./components/RecipeDetail";
import AddRecipeForm from "./components/AddRecipeForm";
import data from "./data.json";

export default function App() {
    const [recipes, setRecipes] = useState(data);

    return (
        <Router>
            <div className="min-h-screen bg-gray-50">
                <nav className="bg-white shadow p-4">
                    <div className="container mx-auto flex justify-between items-center">
                        <h1 className="text-xl font-bold">RecipeShare</h1>
                        <Link
                            to="/add"
                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                            Add Recipe
                        </Link>
                    </div>
                </nav>

                <main className="container mx-auto p-4">
                    <Routes>
                        <Route
                            path="/"
                            element={<HomePage recipes={recipes} />}
                        />
                        <Route
                            path="/recipe/:id"
                            element={<RecipeDetail recipes={recipes} />}
                        />
                        <Route
                            path="/add"
                            element={<AddRecipeForm setRecipes={setRecipes} />}
                        />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}
