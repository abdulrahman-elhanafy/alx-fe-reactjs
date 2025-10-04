import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeForm({ setRecipes }) {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState([""]);
    const [instructions, setInstructions] = useState([""]);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validation
        if (!title || !summary || !image) {
            alert("Please fill all required fields.");
            return;
        }
        if (ingredients.filter((i) => i.trim() !== "").length < 2) {
            alert("Please add at least 2 ingredients.");
            return;
        }

        const newRecipe = {
            id: Date.now(),
            title,
            summary,
            image,
            ingredients: ingredients.filter((i) => i.trim() !== ""),
            instructions: instructions.filter((s) => s.trim() !== ""),
        };

        setRecipes((prev) => [...prev, newRecipe]);
        navigate("/");
    };

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white shadow p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Title</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="Recipe title"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Summary</label>
                <textarea
                    value={summary}
                    onChange={(e) => setSummary(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="Short description"
                />
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Image URL</label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="https://example.com/image.jpg"
                />
            </div>

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
            </div>

            <div className="mb-4">
                <label className="block mb-1 font-medium">Instructions</label>
                {instructions.map((step, i) => (
                    <textarea
                        key={i}
                        value={step}
                        onChange={(e) => {
                            const copy = [...instructions];
                            copy[i] = e.target.value;
                            setInstructions(copy);
                        }}
                        className="w-full border rounded p-2 mb-2"
                        placeholder={`Step ${i + 1}`}
                    />
                ))}
                <button
                    type="button"
                    onClick={() => setInstructions([...instructions, ""])}
                    className="px-3 py-1 bg-green-500 text-white rounded">
                    + Add Step
                </button>
            </div>

            <button
                type="submit"
                className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
                Save Recipe
            </button>
        </form>
    );
}
