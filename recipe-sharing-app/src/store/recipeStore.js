import create from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
    persist(
        (set, get) => ({
            recipes: [],
            searchTerm: "",
            setSearchTerm: (term) => set({ searchTerm: term }),
            get filteredRecipes() {
                const term = get().searchTerm.trim().toLowerCase();
                if (!term) return get().recipes;
                return get().recipes.filter(
                    (r) =>
                        (r.title || "").toLowerCase().includes(term) ||
                        (r.description || "").toLowerCase().includes(term)
                );
            },
            addRecipe: (newRecipe) =>
                set((state) => ({ recipes: [...state.recipes, newRecipe] })),
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
            name: "recipe-storage",
            getStorage: () => localStorage,
        }
    )
);

export default useRecipeStore;
