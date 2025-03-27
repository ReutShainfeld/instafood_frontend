
// import React, { useEffect, useState } from 'react';
// import { Avatar, Box, Typography, Tabs, Tab, Button } from '@mui/material';
// import RecipeCard from '../components/RecipeCard';
// import { useNavigate } from 'react-router-dom';

// function ProfilePage() {
//   const [user, setUser] = useState(null);
//   const [myRecipes, setMyRecipes] = useState([]);
//   const [likedRecipes, setLikedRecipes] = useState([]);
//   const [selectedTab, setSelectedTab] = useState(0);
//   const navigate = useNavigate();

//   const token = localStorage.getItem('token');

//   useEffect(() => {
//     if (!token) return;

//     const fetchProfile = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/users/me', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         setUser(data);
//       } catch (err) {
//         console.error("Failed to fetch user", err);
//       }
//     };

//     const fetchMyRecipes = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/recipes/my-recipes', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         setMyRecipes(data);
//       } catch (err) {
//         console.error("Failed to fetch my recipes", err);
//       }
//     };

//     const fetchLiked = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/users/liked', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         setLikedRecipes(data.recipes);
//       } catch (err) {
//         console.error("Failed to fetch liked recipes", err);
//       }
//     };

//     fetchProfile();
//     fetchMyRecipes();
//     fetchLiked();
//   }, [token]);

//   if (!user) return <Typography>Loading profile...</Typography>;

<<<<<<< HEAD
//   return (
//     <Box sx={{ maxWidth: 1000, margin: 'auto', p: 2 }}>
//       <Box
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           gap: 3,
//           mb: 3,
//           p: 3,
//           boxShadow: 2,
//           borderRadius: 3,
//           backgroundColor: '#fff',
//         }}
//       >
//         <Avatar
//           src={user.profileImage}
//           alt="Profile"
//           sx={{ width: 96, height: 96 }}
//         />
//         <Box>
//           <Typography variant="h5" fontWeight="bold">
//             {`${user.firstName} ${user.lastName}`  || 'שם מלא לא קיים'}
//           </Typography>
//           <Typography color="gray">{user.email}</Typography>
//           <Box sx={{ display: 'flex', gap: 4, mt: 1 }}>
//             <Box>
//               <Typography fontWeight="bold">{myRecipes.length}</Typography>
//               <Typography fontSize={13}>Recipes</Typography>
//             </Box>
//             <Box>
//               <Typography fontWeight="bold">{likedRecipes.length}</Typography>
//               <Typography fontSize={13}>Liked</Typography>
//             </Box>
//           </Box>
//           <Button
//             onClick={() => navigate('/edit-profile')}
//             size="small"
//             sx={{ mt: 2, textTransform: "none" }}
//             variant="outlined"
//           >
//             Edit Profile
//           </Button>
//         </Box>
//       </Box>

//       <Tabs value={selectedTab} onChange={(e, newVal) => setSelectedTab(newVal)} centered>
//         <Tab label="My Recipes" />
//         <Tab label="Liked Recipes" />
//       </Tabs>
=======
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
>>>>>>> foryou

//       <Box mt={3}>
//         {selectedTab === 0 && (
//           <>
//             {myRecipes.length > 0 ? (
//               myRecipes.map((r) => (
//                 <RecipeCard key={r._id} recipe={r} uploader={user.username || user.email} />
//               ))
//             ) : (
//               <Typography>No recipes yet.</Typography>
//             )}
//           </>
//         )}

//         {selectedTab === 1 && (
//           <>
//             {likedRecipes.length > 0 ? (
//               likedRecipes.map((r) => (
//                 <RecipeCard key={r._id} recipe={r} uploader={r.user?.username || "Unknown"} />
//               ))
//             ) : (
//               <Typography>No liked recipes yet.</Typography>
//             )}
//           </>
//         )}
//       </Box>
//     </Box>
//   );
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
import { Avatar, Box, Typography, Tabs, Tab, Button } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
<<<<<<< HEAD
import { useNavigate } from 'react-router-dom';

function ProfilePage() {
  const [user, setUser] = useState(null);
  const [myRecipes, setMyRecipes] = useState([]);
  const [likedRecipes, setLikedRecipes] = useState([]);
  const [selectedTab, setSelectedTab] = useState(0);
  const navigate = useNavigate();

  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) return;

    const fetchProfile = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error("Failed to fetch user", err);
      }
    };

    const fetchMyRecipes = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/recipes/my-recipes', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setMyRecipes(data);
      } catch (err) {
        console.error("Failed to fetch my recipes", err);
      }
    };

    const fetchLiked = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users/liked', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setLikedRecipes(data.recipes);
      } catch (err) {
        console.error("Failed to fetch liked recipes", err);
      }
    };

    fetchProfile();
    fetchMyRecipes();
    fetchLiked();
  }, [token]);

  if (!user) return <Typography>Loading profile...</Typography>;

  return (
    <Box sx={{ maxWidth: 1000, margin: 'auto', p: 2 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          gap: 3,
          mb: 3,
          p: 3,
          boxShadow: 2,
          borderRadius: 3,
          backgroundColor: '#fff',
        }}
      >
        <Avatar
          src={user.profileImage}
          alt="Profile"
          sx={{ width: 96, height: 96 }}
        />
        <Box>
          <Typography variant="h5" fontWeight="bold">
            {`${user.firstName} ${user.lastName}` || 'שם מלא לא קיים'}
          </Typography>
          <Typography color="gray">{user.email}</Typography>
          <Box sx={{ display: 'flex', gap: 4, mt: 1 }}>
            <Box>
              <Typography fontWeight="bold" color="black">{myRecipes.length}</Typography>
              <Typography fontSize={13} color="black">Recipes</Typography>
            </Box>
            <Box>
              <Typography fontWeight="bold" color="black">{likedRecipes.length}</Typography>
              <Typography fontSize={13} color="black">Liked</Typography>
            </Box>
          </Box>
          <Button
            onClick={() => navigate('/edit-profile')}
            size="small"
            sx={{
              mt: 2,
              textTransform: "none",
              backgroundColor: "black",
              color: "white",
              '&:hover': { backgroundColor: "#333" }
            }}
            variant="contained"
          >
            Edit Profile
          </Button>
        </Box>
      </Box>

      <Tabs
  value={selectedTab}
  onChange={(e, newVal) => setSelectedTab(newVal)}
  centered
  TabIndicatorProps={{ style: { backgroundColor: '#ff6600' } }}
  textColor="inherit"
>
  <Tab 
    label="My Recipes" 
    sx={{ 
      color: selectedTab === 0 ? 'black' : 'gray',
      fontWeight: selectedTab === 0 ? 'bold' : 'normal'
    }} 
  />
  <Tab 
    label="Liked Recipes" 
    sx={{ 
      color: selectedTab === 1 ? 'black' : 'gray',
      fontWeight: selectedTab === 1 ? 'bold' : 'normal'
    }} 
  />
</Tabs>


      <Box mt={3}>
        {selectedTab === 0 && (
          <>
            {myRecipes.length > 0 ? (
              myRecipes.map((r) => (
                <RecipeCard key={r._id} recipe={r} uploader={user.username || user.email} />
              ))
            ) : (
              <Typography>No recipes yet.</Typography>
            )}
          </>
        )}

        {selectedTab === 1 && (
          <>
            {likedRecipes.length > 0 ? (
              likedRecipes.map((r) => (
                <RecipeCard key={r._id} recipe={r} uploader={r.user?.username || "Unknown"} />
              ))
            ) : (
              <Typography>No liked recipes yet.</Typography>
            )}
          </>
        )}
      </Box>
    </Box>
=======
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
>>>>>>> foryou
  );
}

export default ProfilePage;


