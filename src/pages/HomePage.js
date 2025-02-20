import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

function HomePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true); // ✅ ספינר בזמן טעינה
    const [error, setError] = useState(null); // ✅ טיפול בשגיאות

    useEffect(() => {
        fetch('http://localhost:5000/api/recipes')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch recipes');
                }
                return res.json();
            })
            .then(data => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, []);

    return (
        <div>
            <h1>
                <span role="img" aria-label="book">📖</span> Sharing Recipes
            </h1>

            {loading && (
                <p>Loading recipes... <span role="img" aria-label="hourglass">⏳</span></p>
            )}
            {error && (
                <p style={{ color: 'red' }}>
                    <span role="img" aria-label="error">❌</span> {error}
                </p>
            )}

            <div className="recipe-list">
                {recipes.length > 0 ? (
                    recipes.map(recipe => (
                        <RecipeCard 
                            key={recipe._id} 
                            recipe={recipe} 
                            uploader={recipe.user?.username || "Anonymous"} // 🔹 Show uploader's name
                        />
                    ))
                ) : (
                    !loading && <p>No recipes found. Be the first to share one! 🍽️</p>
                )}
            </div>
        </div>
    );
}

export default HomePage;
