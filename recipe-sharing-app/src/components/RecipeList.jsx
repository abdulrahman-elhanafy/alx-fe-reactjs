import useRecipeStore from "../store/recipeStore";

export default function RecipeList() {
    const recipes = useRecipeStore((state) => state.recipes);

    if (!recipes.length) return <p>No recipes yet.</p>;

    return (
        <div className="space-y-4">
            {recipes.map((r) => (
                <div key={r.id} className="p-3 border rounded shadow-sm">
                    <h3 className="font-semibold">{r.title}</h3>
                    <p className="text-sm text-gray-700">{r.description}</p>
                </div>
            ))}
        </div>
    );
}
