import create from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
    persist(
        (set, get) => ({
            recipes: [],
            addRecipe: (newRecipe) =>
                set((state) => ({ recipes: [...state.recipes, newRecipe] })),
            setRecipes: (recipes) => set({ recipes }),
            // small helpers for validations
            findById: (id) => get().recipes.find((r) => r.id === id),
        }),
        {
            name: "recipe-storage", // persisted in localStorage
            getStorage: () => localStorage,
        }
    )
);

export default useRecipeStore;
