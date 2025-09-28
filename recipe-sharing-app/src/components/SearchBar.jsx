import useRecipeStore from "../store/recipeStore";

export default function SearchBar() {
    const searchTerm = useRecipeStore((state) => state.searchTerm);
    const setSearchTerm = useRecipeStore((state) => state.setSearchTerm);

    return (
        <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search recipes by title or description..."
            className="w-full p-2 border rounded mb-4"
        />
    );
}
