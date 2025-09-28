import useRecipeStore from "../store/recipeStore";
import DeleteRecipeButton from "./DeleteRecipeButton";
import { Link } from "react-router-dom";

export default function RecipeList() {
    const filteredRecipes = useRecipeStore((state) => state.filteredRecipes());

    if (filteredRecipes.length === 0) return <p>No recipes found.</p>;

    return (
        <ul className="space-y-3">
            {filteredRecipes.map((recipe) => (
                <li
                    key={recipe.id}
                    className="p-3 border rounded flex justify-between items-center">
                    <Link to={`/recipe/${recipe.id}`}>{recipe.title}</Link>
                    <DeleteRecipeButton id={recipe.id} />
                </li>
            ))}
        </ul>
    );
}
