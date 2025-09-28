import useRecipeStore from "./recipeStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function RecommendationsList() {
    const recommendations = useRecipeStore((state) => state.recommendations);
    const generateRecommendations = useRecipeStore(
        (state) => state.generateRecommendations
    );

    useEffect(() => {
        generateRecommendations();
    }, [generateRecommendations]);

    if (!recommendations.length) return <p>No recommendations yet.</p>;

    return (
        <div>
            <h3 className="font-semibold mb-2">Recommendations</h3>
            <div className="space-y-2">
                {recommendations.map((r) => (
                    <div key={r.id} className="p-2 border rounded">
                        <Link to={`/recipe/${r.id}`} className="text-blue-600">
                            {r.title}
                        </Link>
                        <p className="text-sm text-gray-600">{r.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
