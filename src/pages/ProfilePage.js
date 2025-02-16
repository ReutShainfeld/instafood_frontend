import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

function ProfilePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // קבלת ה-User ID מתוך ה-LocalStorage (נניח שהמשתמש מחובר)
    const userId = localStorage.getItem('userId'); // 🔹 יש לוודא שהמשתמש מחובר!

    useEffect(() => {
        if (!userId) {
            setError("User not logged in");
            setLoading(false);
            return;
        }

        fetch('http://localhost:5000/api/recipes')
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch recipes');
                }
                return res.json();
            })
            .then(data => {
                const userRecipes = data.filter(recipe => recipe.userId === userId);
                setRecipes(userRecipes);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [userId]);

    return (
        <div>
            <h1>
                <span role="img" aria-label="chef">👨‍🍳</span> My Recipes
            </h1>

            {loading && (
                <p>Loading your recipes... <span role="img" aria-label="hourglass">⏳</span></p>
            )}
            {error && (
                <p style={{ color: 'red' }}>
                    <span role="img" aria-label="error">❌</span> {error}
                </p>
            )}

            <div className="recipe-list">
                {recipes.length > 0 ? (
                    recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} />)
                ) : (
                    !loading && (
                        <p>No recipes yet. Start adding some! 
                            <span role="img" aria-label="pizza">🍕</span>
                        </p>
                    )
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
