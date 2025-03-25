
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

import React, { useEffect, useState } from 'react';
import { Avatar, Box, Typography, Tabs, Tab, Button } from '@mui/material';
import RecipeCard from '../components/RecipeCard';
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
  );
}

export default ProfilePage;
