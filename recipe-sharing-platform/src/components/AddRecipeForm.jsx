import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddRecipeForm({ setRecipes, addRecipe }) {
    const [title, setTitle] = useState("");
    const [summary, setSummary] = useState("");
    const [image, setImage] = useState("");
    const [ingredients, setIngredients] = useState([""]);
    const [steps, setSteps] = useState([""]);
    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    // saveRecipe: uses addRecipe OR setRecipes prop, otherwise fallback to localStorage
    const saveRecipe = (newRecipe) => {
        if (typeof addRecipe === "function") {
            addRecipe(newRecipe);
        } else if (typeof setRecipes === "function") {
            setRecipes((prev) => [newRecipe, ...prev]);
        } else {
            // fallback so app doesn't crash if parent forgot to pass setter
            try {
                const stored = JSON.parse(
                    localStorage.getItem("recipes") || "[]"
                );
                localStorage.setItem(
                    "recipes",
                    JSON.stringify([newRecipe, ...stored])
                );
                console.warn(
                    "No setRecipes/addRecipe prop — saved recipe to localStorage."
                );
            } catch (err) {
                console.error("Failed to save fallback recipe:", err);
            }
        }
    };

    const validate = () => {
        const newErrors = {};
        if (!title.trim()) newErrors.title = "Title is required.";
        if (!summary.trim()) newErrors.summary = "Summary is required.";
        // image optional; if you want required uncomment next line:
        // if (!image.trim()) newErrors.image = "Image URL is required.";
        const ingCount = ingredients.filter((i) => i.trim() !== "").length;
        if (ingCount < 2)
            newErrors.ingredients = "At least 2 ingredients are required.";
        const stepCount = steps.filter((s) => s.trim() !== "").length;
        if (stepCount < 1) newErrors.steps = "At least 1 step is required.";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validate()) return;

        const newRecipe = {
            id: Date.now(),
            title: title.trim(),
            summary: summary.trim(),
            image: image.trim() || "https://via.placeholder.com/800x500",
            ingredients: ingredients.map((i) => i.trim()).filter(Boolean),
            steps: steps.map((s) => s.trim()).filter(Boolean),
        };

        saveRecipe(newRecipe);
        navigate("/");
    };

    // helpers to add/remove
    const addIngredient = () => setIngredients((p) => [...p, ""]);
    const removeIngredient = (idx) =>
        setIngredients((p) => p.filter((_, i) => i !== idx));
    const updateIngredient = (idx, val) =>
        setIngredients((p) => p.map((item, i) => (i === idx ? val : item)));

    const addStep = () => setSteps((p) => [...p, ""]);
    const removeStep = (idx) => setSteps((p) => p.filter((_, i) => i !== idx));
    const updateStep = (idx, val) =>
        setSteps((p) => p.map((s, i) => (i === idx ? val : s)));

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-3xl mx-auto bg-white shadow p-6 rounded-lg">
            <h1 className="text-2xl font-bold mb-4">Add New Recipe</h1>

            {/* Title + Summary side-by-side from md */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                    <label className="block mb-1 font-medium">Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full border rounded p-2"
                        placeholder="Recipe title"
                        aria-invalid={errors.title ? "true" : "false"}
                    />
                    {errors.title && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.title}
                        </p>
                    )}
                </div>

                <div>
                    <label className="block mb-1 font-medium">Summary</label>
                    <textarea
                        value={summary}
                        onChange={(e) => setSummary(e.target.value)}
                        className="w-full border rounded p-2 h-24"
                        placeholder="Short description"
                        aria-invalid={errors.summary ? "true" : "false"}
                    />
                    {errors.summary && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.summary}
                        </p>
                    )}
                </div>
            </div>

            {/* Image URL */}
            <div className="mb-4">
                <label className="block mb-1 font-medium">
                    Image URL (optional)
                </label>
                <input
                    type="text"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    className="w-full border rounded p-2"
                    placeholder="https://example.com/image.jpg"
                />
                {errors.image && (
                    <p className="text-red-500 text-sm mt-1">{errors.image}</p>
                )}
            </div>

            {/* Ingredients + Steps side-by-side from md */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Ingredients */}
                <div>
                    <label className="block mb-1 font-medium">
                        Ingredients
                    </label>
                    {ingredients.map((ing, i) => (
                        <div key={`ing-${i}`} className="flex gap-2 mb-2">
                            <input
                                type="text"
                                value={ing}
                                onChange={(e) =>
                                    updateIngredient(i, e.target.value)
                                }
                                className="flex-1 border rounded p-2"
                                placeholder={`Ingredient ${i + 1}`}
                            />
                            <button
                                type="button"
                                onClick={() => removeIngredient(i)}
                                className="px-2 py-1 bg-red-500 text-white rounded disabled:opacity-50"
                                aria-label={`Remove ingredient ${i + 1}`}>
                                ✕
                            </button>
                        </div>
                    ))}

                    <div className="flex gap-2 items-center">
                        <button
                            type="button"
                            onClick={addIngredient}
                            className="px-3 py-1 bg-green-500 text-white rounded">
                            + Add Ingredient
                        </button>
                        {errors.ingredients && (
                            <p className="text-red-500 text-sm">
                                {errors.ingredients}
                            </p>
                        )}
                    </div>
                </div>

                {/* Steps */}
                <div>
                    <label className="block mb-1 font-medium">Steps</label>
                    {steps.map((step, i) => (
                        <div key={`step-${i}`} className="mb-2">
                            <div className="flex gap-2">
                                <textarea
                                    value={step}
                                    onChange={(e) =>
                                        updateStep(i, e.target.value)
                                    }
                                    className="flex-1 border rounded p-2"
                                    placeholder={`Step ${i + 1}`}
                                />
                                <button
                                    type="button"
                                    onClick={() => removeStep(i)}
                                    className="px-2 py-1 bg-red-500 text-white rounded"
                                    aria-label={`Remove step ${i + 1}`}>
                                    ✕
                                </button>
                            </div>
                        </div>
                    ))}

                    <div className="flex gap-2 items-center">
                        <button
                            type="button"
                            onClick={addStep}
                            className="px-3 py-1 bg-green-500 text-white rounded">
                            + Add Step
                        </button>
                        {errors.steps && (
                            <p className="text-red-500 text-sm">
                                {errors.steps}
                            </p>
                        )}
                    </div>
                </div>
            </div>

            {/* submit */}
            <div className="mt-6">
                <button
                    type="submit"
                    className="w-full md:w-auto bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">
                    Save Recipe
                </button>
            </div>
        </form>
    );
}
