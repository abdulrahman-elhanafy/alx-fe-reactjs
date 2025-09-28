import useRecipeStore from "../store/recipeStore";
import { Link } from "react-router-dom";

export default function FavoritesList() {
    const favorites = useRecipeStore((state) => state.favorites);
    const recipes = useRecipeStore((state) => state.recipes);

    const favRecipes = favorites
        .map((id) => recipes.find((r) => r.id === id))
        .filter(Boolean);

    if (!favRecipes.length) return <p>No favorites yet.</p>;

    return (
        <div>
            <h3 className="font-semibold mb-2">My Favorites</h3>
            <div className="space-y-2">
                {favRecipes.map((r) => (
                    <div key={r.id} className="p-2 border rounded">
                        <Link
                            to={`/recipe/${r.id}`}
                            className="text-blue-600 font-medium">
                            {r.title}
                        </Link>
                        <p className="text-sm text-gray-600">{r.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
