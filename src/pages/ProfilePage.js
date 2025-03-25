

import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';

function ProfilePage() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const token = localStorage.getItem('token');

    useEffect(() => {
        if (!token) {
            setError("User not logged in");
            setLoading(false);
            return;
        }

        fetch('http://localhost:5000/api/recipes/my-recipes', {
            headers: { 'Authorization': `Bearer ${token}` }
        })
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
                setLoading(false);
            })
            .catch(err => {
                setError(err.message);
                setLoading(false);
            });
    }, [token]);

    return (
        <div>
            <h1>👨‍🍳 My Recipes</h1>

            {loading && <p>Loading your recipes... ⏳</p>}
            {error && <p style={{ color: 'red' }}>❌ {error}</p>}

            <div className="recipe-list">
                {recipes.length > 0 ? (
                    recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} uploader="You" />)
                ) : (
                    !loading && <p>No recipes yet. Start adding some! 🍕</p>
                )}
            </div>
        </div>
    );
}

export default ProfilePage;
