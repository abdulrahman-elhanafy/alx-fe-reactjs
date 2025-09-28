import { Link, useParams } from "react-router-dom";
import useRecipeStore from "../store/recipeStore";

export default function RecipeDetails() {
    const { id } = useParams();
    const recipeId = Number(id);
    const recipe = useRecipeStore((state) => state.findById(recipeId));

    if (!recipe) return <p>Recipe not found.</p>;

    return (
        <div>
            <h2 className="text-xl font-bold mb-2">{recipe.title}</h2>
            <p className="mb-4">{recipe.description}</p>

            <Link
                to={`/edit/${recipe.id}`}
                className="bg-yellow-500 text-white px-3 py-1 rounded">
                Edit
            </Link>
        </div>
    );
}
