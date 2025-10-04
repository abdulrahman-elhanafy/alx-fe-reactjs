import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import data from "../data.json";

export default function HomePage() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        setRecipes(data);
    }, []);

    return (
        <div>
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-3xl font-bold">Recipes</h1>
            </div>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {recipes.map((r) => (
                    <Link
                        key={r.id}
                        to={`/recipe/${r.id}`}
                        className="block bg-white rounded-lg overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition">
                        <img
                            src={r.image}
                            alt={r.title}
                            className="w-full h-40 object-cover"
                        />
                        <div className="p-4">
                            <h2 className="text-lg font-semibold mb-1">
                                {r.title}
                            </h2>
                            <p className="text-sm text-gray-600">{r.summary}</p>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}
