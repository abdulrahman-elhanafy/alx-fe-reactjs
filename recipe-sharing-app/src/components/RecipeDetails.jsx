import { useParams, Link, useNavigate } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";

export default function RecipeDetails() {
    const { id } = useParams();
    const recipe = useRecipeStore((state) =>
        state.recipes.find((r) => String(r.id) === id)
    );
    const navigate = useNavigate();

    if (!recipe) return <p>Recipe not found.</p>;

    return (
        <div className="p-4 border rounded">
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="mb-4">{recipe.description}</p>

            <div className="flex gap-2">
                <Link
                    to={`/edit/${recipe.id}`}
                    className="px-3 py-1 bg-blue-600 text-white rounded">
                    Edit
                </Link>
                <DeleteRecipeButton
                    id={recipe.id}
                    onDeleted={() => navigate("/")}
                />
                <Link to="/" className="px-3 py-1 bg-gray-200 rounded">
                    Back
                </Link>
            </div>
        </div>
    );
}
