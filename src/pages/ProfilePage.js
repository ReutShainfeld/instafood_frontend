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
//             {/* </Button>
// {/* 
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
//                     }} */}
// //                 > */}
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

// import React, { useEffect, useState } from 'react';
// import RecipeCard from '../components/RecipeCard';


// function ProfilePage() {
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const token = localStorage.getItem('token');

//     useEffect(() => {
//         if (!token) {
//             setError("User not logged in");
//             setLoading(false);
//             return;
//         }

//         fetch('http://localhost:5000/api/recipes/my-recipes', {
//             headers: { 'Authorization': `Bearer ${token}` }
//         })
//             .then(res => res.json())
//             .then(data => {
//                 setRecipes(data);
//                 setLoading(false);
//             })
//             .catch(err => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, [token]);

//     return (
//         <div>
//             <h1>👨‍🍳 My Recipes</h1>

//             {loading && <p>Loading your recipes... ⏳</p>}
//             {error && <p style={{ color: 'red' }}>❌ {error}</p>}

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
import {
  Container,
  CircularProgress,
  Typography,
  Grid,
  Box,
  Button,
  Modal,
} from '@mui/material';
import UploadRecipePage from './UploadRecipePage';

function ProfilePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [open, setOpen] = useState(false);
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

  const handleRecipeUpload = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
  };

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      <Typography variant="h4" fontWeight="bold" gutterBottom align="center">
        👨‍🍳 My Recipes
      </Typography>

      <Box display="flex" justifyContent="center" mb={2}>
        <Button variant="contained" onClick={() => setOpen(true)}>
          Upload Recipe 📸
        </Button>
      </Box>

      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            bgcolor: 'white',
            boxShadow: 24,
            p: 4,
            borderRadius: 3,
            width: '55%',
            maxHeight: '80vh',
            overflowY: 'auto'
          }}
        >
          <UploadRecipePage
            open={open}
            onClose={() => setOpen(false)}
            onRecipeUpload={handleRecipeUpload}
          />
        </Box>
      </Modal>

      {loading && (
        <Box display="flex" justifyContent="center" mt={6}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" align="center" mt={2}>
          ❌ {error}
        </Typography>
      )}

      <Grid container direction="column" spacing={3} mt={2}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Grid item key={recipe._id}>
              <RecipeCard recipe={recipe} uploader="You" />
            </Grid>
          ))
        ) : (
          !loading && (
            <Typography align="center" mt={4}>
              No recipes yet. Start adding some! 🍕
            </Typography>
          )
        )}
      </Grid>
    </Container>
  );
}

export default ProfilePage;


