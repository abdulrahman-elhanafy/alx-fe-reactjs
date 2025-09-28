import React from "react";
import { useNavigate } from "react-router-dom";
import useRecipeStore from "./recipeStore";

function DeleteRecipeButton({ id }) {
    const deleteRecipe = useRecipeStore((state) => state.deleteRecipe);
    const navigate = useNavigate();

    const handleDelete = () => {
        try {
            deleteRecipe(id);
            navigate("/"); // 👈 بعد الحذف بيرجع للـ Home
        } catch (error) {
            alert("Failed to delete");
            console.error(error);
        }
    };

    return (
        <button
            onClick={handleDelete}
            style={{
                background: "red",
                color: "white",
                padding: "6px 12px",
                borderRadius: "6px",
                border: "none",
                cursor: "pointer",
            }}>
            Delete
        </button>
    );
}

export default DeleteRecipeButton;
