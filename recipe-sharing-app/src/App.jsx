import {
    BrowserRouter,
    Routes,
    Route,
    Link,
    useParams,
} from "react-router-dom";

import AddRecipeForm from "./components/AddRecipeForm";
import RecipeList from "./components/RecipeList";
import RecipeDetails from "./components/RecipeDetails";
import EditRecipeForm from "./components/EditRecipeForm";
import SearchBar from "./components/SearchBar"; // ← أضف الاستيراد الجديد

function Home() {
    return (
        <>
            <AddRecipeForm />
            <hr className="my-4" />
            <SearchBar /> {/* ← هنا ضفنا SearchBar */}
            <RecipeList />
        </>
    );
}

export default function App() {
    return (
        <BrowserRouter>
            <div className="min-h-screen flex items-center justify-center bg-gray-50 p-6">
                <div className="w-full max-w-3xl bg-white p-6 rounded shadow">
                    <header className="flex justify-between items-center mb-4">
                        <h1 className="text-2xl font-bold">
                            Recipe Sharing App
                        </h1>
                        <Link to="/" className="text-sm text-blue-600">
                            Home
                        </Link>
                    </header>

                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/recipe/:id" element={<RecipeDetails />} />
                        <Route path="/edit/:id" element={<EditRoute />} />
                    </Routes>
                </div>
            </div>
        </BrowserRouter>
    );
}

function EditRoute() {
    // grabs id from path and pass to EditRecipeForm
    const { id } = useParams();
    const recipeId = Number(id);
    return <EditRecipeForm recipeId={recipeId} />;
}
