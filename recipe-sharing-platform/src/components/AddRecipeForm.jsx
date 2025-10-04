import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeForm({ setRecipes }) {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState([""]);
    const [steps, setSteps] = useState([""]);
    const [errors, setErrors] = useState({}); // ✅ لازم يكون فيه errors + setErrors
    const navigate = useNavigate();

    // ✅ دالة validate
    const validate = () => {
        const newErrors = {};

        if (!title) newErrors.title = "Title is required.";
        if (!summary) newErrors.summary = "Summary is required.";
        if (!image) newErrors.image = "Image URL is required.";
        if (ingredients.filter((i) => i.trim() !== "").length < 2) {
            newErrors.ingredients = "At least 2 ingredients are required.";
        }
        if (steps.filter((s) => s.trim() !== "").length < 1) {
            newErrors.steps = "At least 1 step is required.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validate()) {
            return; // لو فيه errors ما نكملش
        }

        const newRecipe = {
            id: Date.now(),
            title,
            summary,
            image,
            ingredients: ingredients.filter((i) => i.trim() !== ""),
            steps: steps.filter((s) => s.trim() !== ""),
        };

        setRecipes((prev) => [...prev, newRecipe]);
        navigate("/");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white shadow p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>

            {/* Title + Summary جنب بعض من أول md */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded p-2"
                        placeholder="Recipe title"
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm">{errors.title}</p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Summary</label>
                    <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="w-full border rounded p-2 h-[42px]"
                        placeholder="Short description"
                    />
                    {errors.summary && (
                        <p className="text-red-500 text-sm">{errors.summary}</p>
                    )}
                </div>
            </div>

            {/* باقي الفورم زي ما هو */}

            <button
                type="submit"
                className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                Save Recipe
            </button>
        </form>
    );
}
