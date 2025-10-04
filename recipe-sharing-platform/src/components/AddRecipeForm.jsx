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

            {/* Title */}
            <div className="mb-4">
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

            {/* Summary */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Summary</label>
                <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="Short description"
                />
                {errors.summary && (
                    <p className="text-red-500 text-sm">{errors.summary}</p>
                )}
            </div>

            {/* Image */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Image URL</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="https://example.com/image.jpg"
                />
                {errors.image && (
                    <p className="text-red-500 text-sm">{errors.image}</p>
                )}
            </div>

            {/* Ingredients */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Ingredients</label>
                {ingredients.map((ing, i) => (
                    <input
                        key={i}
                        type="text"
                        value={ing}
                        onChange={(e) => {
                            const copy = [...ingredients];
                            copy[i] = e.target.value;
                            setIngredients(copy);
                        }}
                        className="w-full border rounded p-2 mb-2"
                        placeholder={`Ingredient ${i + 1}`}
                    />
                ))}
                <button
                    type="button"
                    onClick={() => setIngredients([...ingredients, ""])}
                    className="px-3 py-1 bg-green-500 text-white rounded">
                    + Add Ingredient
                </button>
                {errors.ingredients && (
                    <p className="text-red-500 text-sm">{errors.ingredients}</p>
                )}
            </div>

            {/* Steps */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">Steps</label>
                {steps.map((step, i) => (
                    <textarea
                        key={i}
                        value={step}
                        onChange={(e) => {
                            const copy = [...steps];
                            copy[i] = e.target.value;
                            setSteps(copy);
                        }}
                        className="w-full border rounded p-2 mb-2"
                        placeholder={`Step ${i + 1}`}
                    />
                ))}
                <button
                    type="button"
                    onClick={() => setSteps([...steps, ""])}
                    className="px-3 py-1 bg-green-500 text-white rounded">
                    + Add Step
                </button>
                {errors.steps && (
                    <p className="text-red-500 text-sm">{errors.steps}</p>
                )}
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Save Recipe
            </button>
        </form>
    );
}
