
// // // src/pages/RecipePage.js
// // import React, { useEffect, useState } from "react";
// // import {
// //   Box, Typography, Avatar, Divider, IconButton, Chip, Dialog,
// //   DialogTitle, DialogContent, List, ListItem, ListItemText
// // } from "@mui/material";
// // import { useNavigate, useParams } from "react-router-dom";
// // import AccessTimeIcon from "@mui/icons-material/AccessTime";
// // import GroupsIcon from "@mui/icons-material/Groups";
// // import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// // import FavoriteIcon from "@mui/icons-material/Favorite";
// // import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// // import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// // import ShareIcon from "@mui/icons-material/Share";
// // import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// // import CommentSection from "../components/Comments";

// // function RecipePage() {
// //   const { id } = useParams();
// //   const navigate = useNavigate();
// //   const userId = localStorage.getItem("userId");
// //   const token = localStorage.getItem("token");

// //   const [recipe, setRecipe] = useState(null);
// //   const [likes, setLikes] = useState(0);
// //   const [liked, setLiked] = useState(false);
// //   const [commentsCount, setCommentsCount] = useState(0);
// //   const [likeUsers, setLikeUsers] = useState([]);
// //   const [showLikes, setShowLikes] = useState(false);
// //   const [showComments, setShowComments] = useState(false);

// //   useEffect(() => {
// //     const fetchRecipe = async () => {
// //       try {
// //         const res = await fetch("http://localhost:5000/api/recipes");
// //         const data = await res.json();
// //         const found = data.find((r) => r._id === id);
// //         setRecipe(found);
// //         setLikes(found.likes || 0);
// //       } catch (err) {
// //         console.error("❌ Failed to fetch recipe", err);
// //       }
// //     };

// //     const fetchComments = async () => {
// //       try {
// //         const res = await fetch(`http://localhost:5000/api/comments/${id}`);
// //         const data = await res.json();
// //         setCommentsCount(data.length);
// //       } catch (err) {
// //         console.error("❌ Failed to fetch comments", err);
// //       }
// //     };

// //     const fetchLikeStatus = async () => {
// //       if (!userId) return;
// //       try {
// //         const res = await fetch(`http://localhost:5000/api/likes/${id}/${userId}`);
// //         const data = await res.json();
// //         setLiked(data.liked);
// //       } catch (err) {}
// //     };

// //     fetchRecipe();
// //     fetchComments();
// //     fetchLikeStatus();
// //   }, [id, userId]);

// //   const handleLike = async () => {
// //     if (!token || !userId) return alert("❌ Login required");
// //     try {
// //       const res = await fetch("http://localhost:5000/api/likes", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`,
// //         },
// //         body: JSON.stringify({ recipe: id, user: userId }),
// //       });
// //       const data = await res.json();
// //       if (res.ok) {
// //         setLikes(data.liked ? likes + 1 : likes - 1);
// //         setLiked(data.liked);
// //       }
// //     } catch (err) {}
// //   };

// //   const handleShowLikes = async () => {
// //     try {
// //       const res = await fetch(`http://localhost:5000/api/likes/users/${id}`);
// //       const data = await res.json();
// //       setLikeUsers(data.users || []);
// //       setShowLikes(true);
// //     } catch {}
// //   };

// //   if (!recipe) return <Typography>Loading...</Typography>;

// //   return (
// //     <Box sx={styles.container}>
// //       <Box sx={{ position: "relative" }}>
// //         <img
// //           src={`http://localhost:5000${recipe.imageUrl}`}
// //           alt={recipe.title}
// //           style={styles.image}
// //           onError={(e) => (e.target.src = "/default-image.png")}
// //         />
// //         <IconButton onClick={() => navigate(-1)} sx={styles.backBtn}>
// //           <ArrowForwardIosIcon />
// //         </IconButton>
// //       </Box>

// //       <Box sx={styles.header}>
// //         <Avatar />
// //         <Box>
// //           <Typography fontWeight="bold">{recipe.user?.username || "Unknown"}</Typography>
// //           <Typography fontSize={12} color="gray">
// //             {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : "Unknown Date"}
// //           </Typography>
// //         </Box>
// //       </Box>

// //       <Typography variant="h5" sx={{ mt: 2 }}>{recipe.title}</Typography>
// //       <Typography sx={{ mb: 2 }}>{recipe.description}</Typography>

// //       <Box sx={styles.details}>
// //         <Chip icon={<AccessTimeIcon />} label={`${recipe.cookingTime} mins`} sx={styles.lightChip} />
// //         <Chip icon={<GroupsIcon />} label={`${recipe.servings} servings`} sx={styles.lightChip} />
// //         {recipe.difficulty && <Chip label={recipe.difficulty} sx={styles.darkChip} />}
// //         {recipe.category && <Chip label={recipe.category} sx={styles.darkChip} />}
// //       </Box>

// //       {recipe.tags && recipe.tags.length > 0 && (
// //         <Box sx={styles.tagsContainer}>
// //           {recipe.tags.map((tag, i) => (
// //             <Typography key={i} sx={styles.tag}>#{tag}</Typography>
// //           ))}
// //         </Box>
// //       )}

// //       <Divider sx={{ my: 2 }} />

// //       <Box sx={styles.columns}>
// //         <Box sx={styles.column}>
// //           <Typography variant="h6">Ingredients</Typography>
// //           <ul style={styles.list}>
// //             {recipe.ingredients?.map((ing, i) => (
// //               <li key={i}><Typography>{ing}</Typography></li>
// //             ))}
// //           </ul>
// //         </Box>
// //         <Box sx={styles.column}>
// //           <Typography variant="h6">Instructions</Typography>
// //           <ol style={styles.list}>
// //             {recipe.instructions?.map((step, i) => (
// //               <li key={i}><Typography>{step}</Typography></li>
// //             ))}
// //           </ol>
// //         </Box>
// //       </Box>

// //       <Divider sx={{ my: 2 }} />

// //       <Box sx={styles.actions}>
// //         <Box sx={styles.iconGroup}>
// //           <IconButton onClick={handleLike} sx={styles.iconButton}>
// //             {liked ? <FavoriteIcon sx={styles.iconSvg} /> : <FavoriteBorderIcon sx={styles.iconSvg} />}
// //           </IconButton>
// //           <Typography>{likes}</Typography>
// //         </Box>

// //         <IconButton onClick={handleShowLikes} sx={styles.iconButton}>
// //           <PeopleAltOutlinedIcon sx={styles.iconSvg} />
// //         </IconButton>

// //         <Box sx={styles.iconGroup}>
// //           <IconButton onClick={() => setShowComments(!showComments)} sx={styles.iconButton}>
// //             <ChatBubbleOutlineIcon sx={styles.iconSvg} />
// //           </IconButton>
// //           <Typography>{commentsCount}</Typography>
// //         </Box>

// //         <IconButton sx={styles.iconButton}>
// //           <ShareIcon sx={styles.iconSvg} />
// //         </IconButton>
// //       </Box>

// //       {showComments && <CommentSection recipeId={recipe._id} />}

// //       <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// //         <DialogTitle>People who liked this recipe</DialogTitle>
// //         <DialogContent>
// //           {likeUsers.length > 0 ? (
// //             <List>
// //               {likeUsers.map((user, i) => (
// //                 <ListItem key={i}>
// //                   <ListItemText primary={user} />
// //                 </ListItem>
// //               ))}
// //             </List>
// //           ) : (
// //             <Typography>No likes yet.</Typography>
// //           )}
// //         </DialogContent>
// //       </Dialog>
// //     </Box>
// //   );
// // }

// // export default RecipePage;

// // const styles = {
// //   container: {
// //     maxWidth: 900,
// //     margin: "auto",
// //     padding: 2,
// //   },
// //   image: {
// //     width: "100%",
// //     maxHeight: 450,
// //     objectFit: "cover",
// //     borderRadius: 8,
// //   },
// //   backBtn: {
// //     position: "absolute",
// //     top: 12,
// //     right: 12,
// //     backgroundColor: "#fff",
// //     "&:hover": {
// //       backgroundColor: "#f0f0f0",
// //     },
// //   },
// //   header: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: 2,
// //     mt: 2,
// //   },
// //   details: {
// //     display: "flex",
// //     gap: 1.5,
// //     mt: 1,
// //     flexWrap: "wrap",
// //   },
// //   lightChip: {
// //     backgroundColor: "#e6e6e6",
// //     fontSize: 13,
// //     height: 28,
// //     "& .MuiChip-icon": { fontSize: 18 },
// //   },
// //   darkChip: {
// //     backgroundColor: "#333",
// //     color: "#fff",
// //     fontSize: 13,
// //     height: 28,
// //   },
// //   tagsContainer: {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     gap: 1,
// //     mt: 1,
// //   },
// //   tag: {
// //     color: "#ff8a33",
// //     fontWeight: "bold",
// //     fontSize: 14,
// //   },
// //   columns: {
// //     display: "flex",
// //     flexDirection: { xs: "column", md: "row" },
// //     gap: 4,
// //   },
// //   column: {
// //     flex: 1,
// //     textAlign: "left",
// //   },
// //   list: {
// //     paddingLeft: "1.2rem",
// //     marginTop: "0.5rem",
// //   },
// //   actions: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: 2,
// //     mt: 2,
// //   },
// //   iconGroup: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: 0.5,
// //   },
// //   iconButton: {
// //     backgroundColor: "#fff",
// //     color: "#ff6600",
// //     padding: "6px",
// //     transition: "background-color 0.3s ease, transform 0.2s ease",
// //     "&:hover": {
// //       backgroundColor: "rgba(255, 102, 0, 0.1)",
// //       transform: "scale(1.05)",
// //     },
// //   },
// //   iconSvg: {
// //     fontSize: 20,
// //   },
// // };

// // src/pages/RecipePage.js
// import React, { useEffect, useState } from "react";
// import {
//   Box, Typography, Avatar, Divider, IconButton, Chip, Dialog,
//   DialogTitle, DialogContent, List, ListItem, ListItemText
// } from "@mui/material";
// import { useNavigate, useParams } from "react-router-dom";
// import AccessTimeIcon from "@mui/icons-material/AccessTime";
// import GroupsIcon from "@mui/icons-material/Groups";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
// import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
// import ShareIcon from "@mui/icons-material/Share";
// import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
// import CommentSection from "../components/Comments";

// function RecipePage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const userId = localStorage.getItem("userId");
//   const token = localStorage.getItem("token");

//   const [recipe, setRecipe] = useState(null);
//   const [likes, setLikes] = useState(0);
//   const [liked, setLiked] = useState(false);
//   const [commentsCount, setCommentsCount] = useState(0);
//   const [likeUsers, setLikeUsers] = useState([]);
//   const [showLikes, setShowLikes] = useState(false);
//   const [showComments, setShowComments] = useState(false);

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/recipes");
//         const data = await res.json();
//         const found = data.find((r) => r._id === id);
//         setRecipe(found);
//         setLikes(found.likes || 0);
//       } catch (err) {
//         console.error("❌ Failed to fetch recipe", err);
//       }
//     };

//     const fetchComments = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/comments/${id}`);
//         const data = await res.json();
//         setCommentsCount(data.length);
//       } catch (err) {
//         console.error("❌ Failed to fetch comments", err);
//       }
//     };

//     const fetchLikeStatus = async () => {
//       if (!userId) return;
//       try {
//         const res = await fetch(`http://localhost:5000/api/likes/${id}/${userId}`);
//         const data = await res.json();
//         setLiked(data.liked);
//       } catch (err) {}
//     };

//     fetchRecipe();
//     fetchComments();
//     fetchLikeStatus();
//   }, [id, userId]);

//   const handleLike = async () => {
//     if (!token || !userId) return alert("❌ Login required");
//     try {
//       const res = await fetch("http://localhost:5000/api/likes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({ recipe: id, user: userId }),
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setLikes(data.liked ? likes + 1 : likes - 1);
//         setLiked(data.liked);
//       }
//     } catch (err) {}
//   };

//   const handleShowLikes = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/likes/users/${id}`);
//       const data = await res.json();
//       setLikeUsers(data.users || []);
//       setShowLikes(true);
//     } catch {}
//   };

//   if (!recipe) return <Typography>Loading...</Typography>;

//   return (
//     <Box sx={styles.container}>
//       <Box sx={{ position: "relative" }}>
//         <img
//           src={`http://localhost:5000${recipe.imageUrl}`}
//           alt={recipe.title}
//           style={styles.image}
//           onError={(e) => (e.target.src = "/default-image.png")}
//         />
//         <IconButton onClick={() => navigate(-1)} sx={styles.backBtn}>
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </Box>

//       <Box sx={styles.header}>
//         <Avatar />
//         <Box>
//           <Typography fontWeight="bold">{recipe.user?.username || "Unknown"}</Typography>
//           <Typography fontSize={12} color="gray">
//             {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : "Unknown Date"}
//           </Typography>
//         </Box>
//       </Box>

//       <Typography variant="h5" sx={{ mt: 2 }}>{recipe.title}</Typography>
//       <Typography sx={{ mb: 2 }}>{recipe.description}</Typography>

//       <Box sx={styles.details}>
//         <Chip icon={<AccessTimeIcon />} label={`${recipe.cookingTime} mins`} sx={styles.lightChip} />
//         <Chip icon={<GroupsIcon />} label={`${recipe.servings} servings`} sx={styles.lightChip} />
//         {recipe.difficulty && (
//           <Chip
//             label={recipe.difficulty}
//             sx={styles.darkChip}
//             onClick={() => navigate(`/search/difficulty/${recipe.difficulty}`)}
//             clickable
//           />
//         )}
//         {recipe.category && (
//           <Chip
//             label={recipe.category}
//             sx={styles.darkChip}
//             onClick={() => navigate(`/search/category/${recipe.category}`)}
//             clickable
//           />
//         )}
//       </Box>

//       {recipe.tags && recipe.tags.length > 0 && (
//         <Box sx={styles.tagsContainer}>
//           {recipe.tags.map((tag, i) => (
//             <Typography
//               key={i}
//               sx={styles.tag}
//               onClick={() => navigate(`/search/tag/${tag}`)}
//             >
//               #{tag}
//             </Typography>
//           ))}
//         </Box>
//       )}

//       <Divider sx={{ my: 2 }} />

//       <Box sx={styles.columns}>
//         <Box sx={styles.column}>
//           <Typography variant="h6">Ingredients</Typography>
//           <ul style={styles.list}>
//             {recipe.ingredients?.map((ing, i) => (
//               <li key={i}><Typography>{ing}</Typography></li>
//             ))}
//           </ul>
//         </Box>
//         <Box sx={styles.column}>
//           <Typography variant="h6">Instructions</Typography>
//           <ol style={styles.list}>
//             {recipe.instructions?.map((step, i) => (
//               <li key={i}><Typography>{step}</Typography></li>
//             ))}
//           </ol>
//         </Box>
//       </Box>

//       <Divider sx={{ my: 2 }} />

//       <Box sx={styles.actions}>
//         <Box sx={styles.iconGroup}>
//           <IconButton onClick={handleLike} sx={styles.iconButton}>
//             {liked ? <FavoriteIcon sx={styles.iconSvg} /> : <FavoriteBorderIcon sx={styles.iconSvg} />}
//           </IconButton>
//           <Typography>{likes}</Typography>
//         </Box>

//         <IconButton onClick={handleShowLikes} sx={styles.iconButton}>
//           <PeopleAltOutlinedIcon sx={styles.iconSvg} />
//         </IconButton>

//         <Box sx={styles.iconGroup}>
//           <IconButton onClick={() => setShowComments(!showComments)} sx={styles.iconButton}>
//             <ChatBubbleOutlineIcon sx={styles.iconSvg} />
//           </IconButton>
//           <Typography>{commentsCount}</Typography>
//         </Box>

//         <IconButton sx={styles.iconButton}>
//           <ShareIcon sx={styles.iconSvg} />
//         </IconButton>
//       </Box>

//       {showComments && <CommentSection recipeId={recipe._id} />}

//       <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
//         <DialogTitle>People who liked this recipe</DialogTitle>
//         <DialogContent>
//           {likeUsers.length > 0 ? (
//             <List>
//               {likeUsers.map((user, i) => (
//                 <ListItem key={i}>
//                   <ListItemText primary={user} />
//                 </ListItem>
//               ))}
//             </List>
//           ) : (
//             <Typography>No likes yet.</Typography>
//           )}
//         </DialogContent>
//       </Dialog>
//     </Box>
//   );
// }

// export default RecipePage;

// const styles = {
//   container: {
//     maxWidth: 900,
//     margin: "auto",
//     padding: 2,
//   },
//   image: {
//     width: "100%",
//     maxHeight: 450,
//     objectFit: "cover",
//     borderRadius: 8,
//   },
//   backBtn: {
//     position: "absolute",
//     top: 12,
//     right: 12,
//     backgroundColor: "#fff",
//     "&:hover": {
//       backgroundColor: "#f0f0f0",
//     },
//   },
//   header: {
//     display: "flex",
//     alignItems: "center",
//     gap: 2,
//     mt: 2,
//   },
//   details: {
//     display: "flex",
//     gap: 1.5,
//     mt: 1,
//     flexWrap: "wrap",
//   },
//   lightChip: {
//     backgroundColor: "#f1f1f1",
//     fontSize: 13,
//     height: 28,
//     "& .MuiChip-icon": { fontSize: 18 },
//   },
//   darkChip: {
//     backgroundColor: "#4b4b4b",
//     color: "#fff",
//     fontSize: 13,
//     height: 28,
//     cursor: "pointer",
//   },
//   tagsContainer: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: 1,
//     mt: 1,
//   },
//   tag: {
//     color: "#ff8a33",
//     fontWeight: "bold",
//     fontSize: 14,
//     cursor: "pointer",
//   },
//   columns: {
//     display: "flex",
//     flexDirection: { xs: "column", md: "row" },
//     gap: 4,
//   },
//   column: {
//     flex: 1,
//     textAlign: "left",
//   },
//   list: {
//     paddingLeft: "1.2rem",
//     marginTop: "0.5rem",
//   },
//   actions: {
//     display: "flex",
//     alignItems: "center",
//     gap: 2,
//     mt: 2,
//   },
//   iconGroup: {
//     display: "flex",
//     alignItems: "center",
//     gap: 0.5,
//   },
//   iconButton: {
//     backgroundColor: "#fff",
//     color: "#ff6600",
//     padding: "6px",
//     transition: "background-color 0.3s ease, transform 0.2s ease",
//     "&:hover": {
//       backgroundColor: "rgba(255, 102, 0, 0.1)",
//       transform: "scale(1.05)",
//     },
//   },
//   iconSvg: {
//     fontSize: 20,
//   },
// };

// src/pages/RecipePage.js
import React, { useEffect, useState } from "react";
import {
  Box, Typography, Avatar, Divider, IconButton, Chip, Dialog,
  DialogTitle, DialogContent, List, ListItem, ListItemText
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import GroupsIcon from "@mui/icons-material/Groups";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import ShareIcon from "@mui/icons-material/Share";
import PeopleAltOutlinedIcon from "@mui/icons-material/PeopleAltOutlined";
import CommentSection from "../components/Comments";

function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const userId = localStorage.getItem("userId");
  const token = localStorage.getItem("token");

  const [recipe, setRecipe] = useState(null);
  const [likes, setLikes] = useState(0);
  const [liked, setLiked] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);
  const [likeUsers, setLikeUsers] = useState([]);
  const [showLikes, setShowLikes] = useState(false);
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/recipes");
        const data = await res.json();
        const found = data.find((r) => r._id === id);
        setRecipe(found);
        setLikes(found.likes || 0);
      } catch (err) {
        console.error("❌ Failed to fetch recipe", err);
      }
    };

    const fetchComments = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/comments/${id}`);
        const data = await res.json();
        setCommentsCount(data.length);
      } catch (err) {
        console.error("❌ Failed to fetch comments", err);
      }
    };

    const fetchLikeStatus = async () => {
      if (!userId) return;
      try {
        const res = await fetch(`http://localhost:5000/api/likes/${id}/${userId}`);
        const data = await res.json();
        setLiked(data.liked);
      } catch (err) {}
    };

    fetchRecipe();
    fetchComments();
    fetchLikeStatus();
  }, [id, userId]);

  const handleLike = async () => {
    if (!token || !userId) return alert("❌ Login required");
    try {
      const res = await fetch("http://localhost:5000/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ recipe: id, user: userId }),
      });
      const data = await res.json();
      if (res.ok) {
        setLikes(data.liked ? likes + 1 : likes - 1);
        setLiked(data.liked);
      }
    } catch (err) {}
  };

  const handleShowLikes = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/likes/users/${id}`);
      const data = await res.json();
      setLikeUsers(data.users || []);
      setShowLikes(true);
    } catch {}
  };

  if (!recipe) return <Typography>Loading...</Typography>;

  return (
    <Box sx={styles.container}>
      <Box sx={{ position: "relative" }}>
        <img
          src={recipe.imageUrl}
          alt={recipe.title}
          style={styles.image}
          onError={(e) => (e.target.src = "/default-image.png")}
        />
        <IconButton onClick={() => navigate(-1)} sx={styles.backBtn}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Box sx={styles.header}>
        <Avatar />
        <Box>
          <Typography fontWeight="bold">{recipe.user?.username || "Unknown"}</Typography>
          <Typography fontSize={12} color="gray">
            {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : "Unknown Date"}
          </Typography>
        </Box>
      </Box>

      <Typography variant="h5" sx={{ mt: 2 }}>{recipe.title}</Typography>
      <Typography sx={{ mb: 2 }}>{recipe.description}</Typography>

      <Box sx={styles.details}>
        <Chip icon={<AccessTimeIcon />} label={`${recipe.cookingTime} mins`} sx={styles.lightChip} />
        <Chip icon={<GroupsIcon />} label={`${recipe.servings} servings`} sx={styles.lightChip} />
        {recipe.difficulty && (
          <Chip
            label={recipe.difficulty}
            sx={styles.darkChip}
            onClick={() => navigate(`/search/difficulty/${recipe.difficulty}`)}
            clickable
          />
        )}
        {recipe.category && (
          <Chip
            label={recipe.category}
            sx={styles.darkChip}
            onClick={() => navigate(`/search/category/${recipe.category}`)}
            clickable
          />
        )}
      </Box>

      {recipe.tags && recipe.tags.length > 0 && (
        <Box sx={styles.tagsContainer}>
          {recipe.tags.map((tag, i) => (
            <Typography
              key={i}
              sx={styles.tag}
              onClick={() => navigate(`/search/tag/${tag}`)}
            >
              #{tag}
            </Typography>
          ))}
        </Box>
      )}

      <Divider sx={{ my: 2 }} />

      <Box sx={styles.columns}>
        <Box sx={styles.column}>
          <Typography variant="h6">Ingredients</Typography>
          <ul style={styles.list}>
            {recipe.ingredients?.map((ing, i) => (
              <li key={i}><Typography>{ing}</Typography></li>
            ))}
          </ul>
        </Box>
        <Box sx={styles.column}>
          <Typography variant="h6">Instructions</Typography>
          <ol style={styles.list}>
            {recipe.instructions?.map((step, i) => (
              <li key={i}><Typography>{step}</Typography></li>
            ))}
          </ol>
        </Box>
      </Box>

      <Divider sx={{ my: 2 }} />

      <Box sx={styles.actions}>
        <Box sx={styles.iconGroup}>
          <IconButton onClick={handleLike} sx={styles.iconButton}>
            {liked ? <FavoriteIcon sx={styles.iconSvg} /> : <FavoriteBorderIcon sx={styles.iconSvg} />}
          </IconButton>
          <Typography>{likes}</Typography>
        </Box>

        <IconButton onClick={handleShowLikes} sx={styles.iconButton}>
          <PeopleAltOutlinedIcon sx={styles.iconSvg} />
        </IconButton>

        <Box sx={styles.iconGroup}>
          <IconButton onClick={() => setShowComments(!showComments)} sx={styles.iconButton}>
            <ChatBubbleOutlineIcon sx={styles.iconSvg} />
          </IconButton>
          <Typography>{commentsCount}</Typography>
        </Box>

        <IconButton sx={styles.iconButton}>
          <ShareIcon sx={styles.iconSvg} />
        </IconButton>
      </Box>

      {showComments && <CommentSection recipeId={recipe._id} />}

      <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
        <DialogTitle>People who liked this recipe</DialogTitle>
        <DialogContent>
          {likeUsers.length > 0 ? (
            <List>
              {likeUsers.map((user, i) => (
                <ListItem key={i}>
                  <ListItemText primary={user} />
                </ListItem>
              ))}
            </List>
          ) : (
            <Typography>No likes yet.</Typography>
          )}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

export default RecipePage;

const styles = {
  container: {
    maxWidth: 900,
    margin: "auto",
    padding: 2,
  },
  image: {
    width: "100%",
    maxHeight: 450,
    objectFit: "cover",
    borderRadius: 8,
  },
  backBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
  header: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mt: 2,
  },
  details: {
    display: "flex",
    gap: 1.5,
    mt: 1,
    flexWrap: "wrap",
  },
  lightChip: {
    backgroundColor: "#f1f1f1",
    fontSize: 13,
    height: 28,
    "& .MuiChip-icon": { fontSize: 18 },
  },
  darkChip: {
    backgroundColor: "#4b4b4b",
    color: "#fff",
    fontSize: 13,
    height: 28,
    cursor: "pointer",
  },
  tagsContainer: {
    display: "flex",
    flexWrap: "wrap",
    gap: 1,
    mt: 1,
  },
  tag: {
    color: "#ff8a33",
    fontWeight: "bold",
    fontSize: 14,
    cursor: "pointer",
  },
  columns: {
    display: "flex",
    flexDirection: { xs: "column", md: "row" },
    gap: 4,
  },
  column: {
    flex: 1,
    textAlign: "left",
  },
  list: {
    paddingLeft: "1.2rem",
    marginTop: "0.5rem",
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    mt: 2,
  },
  iconGroup: {
    display: "flex",
    alignItems: "center",
    gap: 0.5,
  },
  iconButton: {
    backgroundColor: "#fff",
    color: "#ff6600",
    padding: "6px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    "&:hover": {
      backgroundColor: "rgba(255, 102, 0, 0.1)",
      transform: "scale(1.05)",
    },
  },
  iconSvg: {
    fontSize: 20,
  },
};
