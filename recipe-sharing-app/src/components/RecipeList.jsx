import useRecipeStore from "../store/recipeStore";
import { Link } from "react-router-dom";

export default function RecipeList() {
    const recipes = useRecipeStore((state) => state.filteredRecipes);

    if (!recipes.length) return <p>No recipes match your search.</p>;

    return (
        <div className="space-y-4">
            {recipes.map((r) => (
                <div key={r.id} className="p-3 border rounded shadow-sm">
                    <Link
                        to={`/recipe/${r.id}`}
                        className="font-semibold text-blue-600">
                        {r.title}
                    </Link>
                    <p className="text-sm text-gray-700">{r.description}</p>
                </div>
            ))}
        </div>
    );
}
