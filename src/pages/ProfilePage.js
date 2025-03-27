// // import React, { useEffect, useState } from 'react';
// // import RecipeCard from '../components/RecipeCard';
// // import UploadRecipePage from './UploadRecipePage';  
// // import { Modal, Button, Box } from '@mui/material';

// // function ProfilePage() {
// //     const [recipes, setRecipes] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);
// //     const [open, setOpen] = useState(false); // 🔹 State for modal visibility

// //     const token = localStorage.getItem('token'); 

// //     useEffect(() => {
// //         if (!token) {
// //             setError("User not logged in");
// //             setLoading(false);
// //             return;
// //         }

// //         fetch('http://localhost:5000/api/recipes/my-recipes', { 
// //             headers: { 'Authorization': `Bearer ${token}` } 
// //         })
// //             .then(res => {
// //                 if (!res.ok) {
// //                     throw new Error('Failed to fetch user recipes');
// //                 }
// //                 return res.json();
// //             })
// //             .then(data => {
// //                 setRecipes(data);
// //                 setLoading(false);
// //             })
// //             .catch(err => {
// //                 setError(err.message);
// //                 setLoading(false);
// //             });
// //     }, [token]); 

// //     // ✅ Add new recipe to the list without refreshing
// //     const handleRecipeUpload = (newRecipe) => {
// //         setRecipes([newRecipe, ...recipes]); // ✅ Add the new recipe to the list
// //     };

// //     return (
// //         <div>
// //             <h1>👨‍🍳 My Recipes</h1>

// //             {loading && <p>Loading your recipes... ⏳</p>}
// //             {error && <p style={{ color: 'red' }}>❌ {error}</p>}

// //             {/* 🔹 Button to Open Upload Recipe Modal */}
// //             <Button 
// //                 variant="contained" 
// //                 onClick={() => setOpen(true)}
// //                 style={{ marginBottom: '20px' }}
// //             >
// //                 Upload Recipe 📸
// //             </Button>

// //             {/* 🔹 Modal for Uploading Recipe */}
// //             <Modal
// //                 open={open}
// //                 onClose={() => setOpen(false)}
// //                 aria-labelledby="upload-recipe-modal"
// //                 aria-describedby="modal-for-uploading-recipes"
// //             >
// //                 <Box 
// //                     sx={{ 
// //                         position: 'absolute', 
// //                         top: '50%', 
// //                         left: '50%', 
// //                         transform: 'translate(-50%, -50%)',
// //                         bgcolor: 'white', 
// //                         boxShadow: 24, 
// //                         p: 4, 
// //                         borderRadius: 3,
// //                         width: '55%',
// //                         minHeight: '300px',
// //                         maxHeight: '80vh',
// //                         overflowY: 'auto'
// //                     }}
// //                 >
// //                     <UploadRecipePage 
// //                         open={open} 
// //                         onClose={() => setOpen(false)} 
// //                         onRecipeUpload={handleRecipeUpload} // ✅ Pass the function
// //                     />
// //                 </Box>
// //             </Modal>

// //             <div className="recipe-list">
// //                 {recipes.length > 0 ? (
// //                     recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} uploader="You" />)
// //                 ) : (
// //                     !loading && <p>No recipes yet. Start adding some! 🍕</p>
// //                 )}
// //             </div>
// //         </div>
// //     );
// // }

// // export default ProfilePage;
// import React, { useEffect, useState } from 'react';
// import RecipeCard from '../components/RecipeCard';
// import UploadRecipePage from './UploadRecipePage';  
// import { Modal, Button, Box } from '@mui/material';

// function ProfilePage() {
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [open, setOpen] = useState(false);

//     const token = localStorage.getItem('token');

//     useEffect(() => {
//         if (!token) {
//             setError("❌ User not logged in.");
//             setLoading(false);
//             return;
//         }

//         const fetchUserRecipes = async () => {
//             try {
//                 const response = await fetch('http://localhost:5000/api/recipes/my-recipes', { 
//                     method: 'GET',
//                     headers: { 
//                         'Authorization': `Bearer ${token}`, 
//                         'Content-Type': 'application/json' 
//                     }
//                 });

//                 if (!response.ok) {
//                     const errorMessage = await response.json();
//                     throw new Error(errorMessage.error || '❌ Failed to fetch user recipes');
//                 }

//                 const data = await response.json();
//                 setRecipes(data);
//             } catch (err) {
//                 console.error("Profile Fetch Error:", err.message);
//                 setError(err.message);
//             } finally {
//                 setLoading(false);
//             }
//         };

//         fetchUserRecipes();
//     }, [token]);

//     return (
//         <div>
//             <h1>👨‍🍳 My Recipes</h1>
//             {loading && <p>Loading your recipes... ⏳</p>}
//             {error && <p style={{ color: 'red' }}>❌ {error}</p>}

//             {/* 🔹 Button to Open Upload Recipe Modal */}
//             <Button 
//                 variant="contained" 
//                 onClick={() => setOpen(true)}
//                 style={{ marginBottom: '20px' }}
//             >
//                 Upload Recipe 📸
//             </Button>

//             {/* 🔹 Modal for Uploading Recipe */}
//             <Modal
//                 open={open}
//                 onClose={() => setOpen(false)}
//                 aria-labelledby="upload-recipe-modal"
//                 aria-describedby="modal-for-uploading-recipes"
//             >
//                 <Box 
//                     sx={{ 
//                         position: 'absolute', 
//                         top: '50%', 
//                         left: '50%', 
//                         transform: 'translate(-50%, -50%)',
//                         bgcolor: 'white', 
//                         boxShadow: 24, 
//                         p: 4, 
//                         borderRadius: 3,
//                         width: '55%',
//                         minHeight: '300px',
//                         maxHeight: '80vh',
//                         overflowY: 'auto'
//                     }}
//                 >
//                     <UploadRecipePage 
//                         open={open} 
//                         onClose={() => setOpen(false)} 
//                         onRecipeUpload={(newRecipe) => setRecipes([newRecipe, ...recipes])}
//                     />
//                 </Box>
//             </Modal>

//             <div className="recipe-list">
//                 {recipes.length > 0 ? (
//                     recipes.map(recipe => <RecipeCard key={recipe._id} recipe={recipe} uploader="You" />)
//                 ) : (
//                     !loading && <p>No recipes yet. Start adding some! 🍕</p>
//                 )}
//             </div>
//         </div>
//     );
// }

// export default ProfilePage;

import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
<RecipeCard recipe={recipe} uploader={recipe.user?.username || "Anonymous"} />

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
