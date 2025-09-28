import useRecipeStore from "./recipeStore";

export default function DeleteRecipeButton({ id, onDeleted }) {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);

    const handle = () => {
        if (!confirm("Delete this recipe?")) return;
        try {
            deleteRecipe(id);
            if (onDeleted) onDeleted();
        } catch (error) {
            alert("Failed to delete");
            console.error(error);
        }
    };

    return (
        <button
            onClick={handle}
            className="px-3 py-1 bg-red-600 text-white rounded">
            Delete
        </button>
    );
}
