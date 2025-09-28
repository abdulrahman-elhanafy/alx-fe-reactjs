import { useState } from "react";
import useRecipeStore from "../store/recipeStore";
import { useNavigate } from "react-router-dom";

export default function EditRecipeForm({ recipeId }) {
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => r.id === recipeId)
    );
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const [title, setTitle] = useState(recipe?.title || "");
    const [description, setDescription] = useState(recipe?.description || "");
    const [err, setErr] = useState("");
    const navigate = useNavigate();

    if (!recipe) return <p>Recipe not found.</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setErr("Title cannot be empty");
            return;
        }
        updateRecipe(recipeId, {
            title: title.trim(),
            description: description.trim(),
        });
        navigate(`/recipe/${recipeId}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            {err && <div className="text-red-600">{err}</div>}
            <input
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-2 border rounded"
            />
            <div className="flex gap-2">
                <button className="px-4 py-2 bg-blue-600 text-white rounded">
                    Save
                </button>
                <button
                    type="button"
                    onClick={() => navigate(-1)}
                    className="px-4 py-2 bg-gray-200 rounded">
                    Cancel
                </button>
            </div>
        </form>
    );
}
