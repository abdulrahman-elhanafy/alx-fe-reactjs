import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";

export default function App() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
            <div className="w-full max-w-2xl bg-white p-6 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Recipe Sharing App</h1>
                <AddRecipeForm />
                <hr className="my-4" />
                <RecipeList />
            </div>
        </div>
    );
}
