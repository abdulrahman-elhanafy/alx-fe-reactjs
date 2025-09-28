import create from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
    persist(
        (set, get) => ({
            recipes: [],

            addRecipe: (newRecipe) =>
                set((state) => ({
                    recipes: [...state.recipes, newRecipe],
                })),

            setRecipes: (recipes) => set({ recipes }),

            updateRecipe: (id, patch) =>
                set((state) => ({
                    recipes: state.recipes.map((r) =>
                        r.id === id ? { ...r, ...patch } : r
                    ),
                })),

            deleteRecipe: (id) =>
                set((state) => ({
                    recipes: state.recipes.filter((r) => r.id !== id),
                })),

            findById: (id) => get().recipes.find((r) => r.id === id),
        }),
        {
            name: "recipe-storage", // الاسم جوه localStorage
            getStorage: () => localStorage,
        }
    )
);

export default useRecipeStore;
