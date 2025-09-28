import { create } from "zustand";
import { persist } from "zustand/middleware";

const useRecipeStore = create(
    persist(
        (set, get) => ({
            recipes: [],
            favorites: [], // 👈 المفضلات
            recommendations: [], // 👈 التوصيات

            // إضافة وصفة جديدة
            addRecipe: (title, description) =>
                set((state) => ({
                    recipes: [
                        ...state.recipes,
                        { id: Date.now(), title, description },
                    ],
                })),

            // تعديل وصفة
            updateRecipe: (id, newTitle, newDescription) =>
                set((state) => ({
                    recipes: state.recipes.map((recipe) =>
                        recipe.id === id
                            ? {
                                  ...recipe,
                                  title: newTitle,
                                  description: newDescription,
                              }
                            : recipe
                    ),
                })),

            // حذف وصفة
            deleteRecipe: (id) =>
                set((state) => ({
                    recipes: state.recipes.filter((recipe) => recipe.id !== id),
                    favorites: state.favorites.filter((favId) => favId !== id),
                })),

            // ---------- Favorites ----------
            addFavorite: (id) =>
                set((state) => ({
                    favorites: state.favorites.includes(id)
                        ? state.favorites
                        : [...state.favorites, id],
                })),

            removeFavorite: (id) =>
                set((state) => ({
                    favorites: state.favorites.filter((favId) => favId !== id),
                })),

            toggleFavorite: (id) => {
                const { favorites, addFavorite, removeFavorite } = get();
                if (favorites.includes(id)) {
                    removeFavorite(id);
                } else {
                    addFavorite(id);
                }
            },

            // ---------- Recommendations ----------
            generateRecommendations: () => {
                const { recipes, favorites } = get();
                // ببساطة: رجّع وصفات مش مفضلة
                const recs = recipes.filter((r) => !favorites.includes(r.id));
                set({ recommendations: recs.slice(0, 3) }); // أول 3 بس
            },
        }),
        { name: "recipe-store" }
    )
);

export default useRecipeStore;
