import { useState } from "react";
import useRecipeStore from "../store/recipeStore";
import { useNavigate } from "react-router-dom";

export default function EditRecipeForm({ recipeId }) {
    const recipe = useRecipeStore((state) => state.findById(recipeId));
    const updateRecipe = useRecipeStore((state) => state.updateRecipe);
    const navigate = useNavigate();

    const [title, setTitle] = useState(recipe?.title || "");
    const [description, setDescription] = useState(recipe?.description || "");

    if (!recipe) return <p>Recipe not found.</p>;

    const handleSubmit = (e) => {
        e.preventDefault();
        updateRecipe(recipeId, { title, description });
        navigate(`/recipe/${recipeId}`);
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div>
                <label className="block">Title:</label>
                <input
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <div>
                <label className="block">Description:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    className="w-full p-2 border rounded"
                />
            </div>

            <button
                type="submit"
                className="bg-blue-500 text-white px-4 py-2 rounded">
                Save Changes
            </button>
        </form>
    );
}
