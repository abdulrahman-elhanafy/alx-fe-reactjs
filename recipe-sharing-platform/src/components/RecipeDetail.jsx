import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import data from "../data.json";

export default function RecipeDetail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const recipe = data.find((r) => String(r.id) === id);

    if (!recipe) {
        return (
            <div className="text-center py-20">
                <p className="text-lg">Recipe not found.</p>
                <button
                    onClick={() => navigate(-1)}
                    className="mt-4 px-4 py-2 bg-gray-200 rounded">
                    Go back
                </button>
            </div>
        );
    }

    return (
        <div className="max-w-3xl mx-auto bg-white rounded-lg shadow p-6">
            <img
                src={recipe.image}
                alt={recipe.title}
                className="w-full h-64 object-cover rounded mb-6"
            />
            <h1 className="text-2xl font-bold mb-2">{recipe.title}</h1>
            <p className="text-gray-700 mb-4">{recipe.summary}</p>

            <section className="mb-4">
                <h2 className="font-semibold mb-2">Ingredients</h2>
                <ul className="list-disc pl-5 space-y-1">
                    {recipe.ingredients?.map((ing, i) => (
                        <li key={i}>{ing}</li>
                    ))}
                </ul>
            </section>

            <section>
                <h2 className="font-semibold mb-2">Steps</h2>
                <ol className="list-decimal pl-5 space-y-2">
                    {recipe.steps?.map((step, i) => (
                        <li key={i}>{step}</li>
                    ))}
                </ol>
            </section>
        </div>
    );
}
