import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

function ProfilePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const token = localStorage.getItem('token'); // 🔹 Ensure user is authenticated

    useEffect(() => {
        if (!token) {
            setError("User not logged in");
            setLoading(false);
            return;
        }

        fetch('http://localhost:5000/api/recipes/my-recipes', { // 🔹 Fetch user's recipes directly
            headers: { 'Authorization': `Bearer ${token}` } // 🔹 Send authentication token
        })
            .then(res => {
                if (!res.ok) {
                    throw new Error('Failed to fetch user recipes');
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
    }, [token]); // 🔹 Depend on `token` to re-run if the user logs in/out

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
                    recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} uploader="You" />) // 🔹 Pass `uploader="You"`
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
