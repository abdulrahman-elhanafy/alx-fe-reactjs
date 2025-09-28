import { useState } from "react";
import useRecipeStore from "./recipeStore";

export default function AddRecipeForm() {
    const addRecipe = useRecipeStore((state) => state.addRecipe);
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [err, setErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            setErr("Title cannot be empty");
            return;
        }
        addRecipe({
            id: Date.now(),
            title: title.trim(),
            description: description.trim(),
        });
        setTitle("");
        setDescription("");
        setErr("");
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            {err && <div className="text-red-600">{err}</div>}
            <input
                className="w-full p-2 border rounded"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
            <textarea
                className="w-full p-2 border rounded"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
            />
            <button className="px-4 py-2 bg-green-600 text-white rounded">
                Add Recipe
            </button>
        </form>
    );
}
