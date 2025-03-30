
// <<<<<<< HEAD
// // // src/components/RecipeCard.js
// =======
// // src/components/RecipeCard.js
// >>>>>>> foryou
// // import React, { useState, useEffect } from 'react';
// // import {
// //   Card, CardMedia, CardContent, Typography, Box, Avatar,
// //   IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
// // } from '@mui/material';
// // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // import ShareIcon from '@mui/icons-material/Share';
// // import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // import GroupsIcon from '@mui/icons-material/Groups';
// // import { useNavigate } from 'react-router-dom';
// // import CommentSection from './Comments';

// // function RecipeCard({ recipe, uploader = "Anonymous", imageOnly = false }) {
// //   const navigate = useNavigate();
// //   const userId = localStorage.getItem('userId');
// //   const token = localStorage.getItem('token');

// //   const [likes, setLikes] = useState(recipe.likes || 0);
// //   const [liked, setLiked] = useState(false);
// //   const [showLikes, setShowLikes] = useState(false);
// //   const [likeUsers, setLikeUsers] = useState([]);
// //   const [showComments, setShowComments] = useState(false);
// //   const [commentsCount, setCommentsCount] = useState(0);

// //   useEffect(() => {
// //     if (!userId || imageOnly) return;
// //     fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`)
// //       .then(res => res.json())
// //       .then(data => setLiked(data.liked))
// //       .catch(() => {});
// //   }, [recipe._id, userId, imageOnly]);

// //   useEffect(() => {
// //     if (imageOnly) return;
// //     fetch(`http://localhost:5000/api/comments/${recipe._id}`)
// //       .then(res => res.json())
// //       .then(data => setCommentsCount(data.length))
// //       .catch(() => {});
// //   }, [recipe._id, imageOnly]);

// //   const handleLike = async () => {
// //     if (!token || !userId) return alert("Login required");
// //     try {
// //       const res = await fetch("http://localhost:5000/api/likes", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`
// //         },
// //         body: JSON.stringify({ recipe: recipe._id, user: userId })
// //       });
// //       const data = await res.json();
// //       if (res.ok) {
// //         setLikes(data.liked ? likes + 1 : likes - 1);
// //         setLiked(data.liked);
// //       }
// //     } catch {}
// //   };

// //   const handleShowLikes = async () => {
// //     try {
// //       const res = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// //       const data = await res.json();
// //       setLikeUsers(data.users || []);
// //       setShowLikes(true);
// //     } catch {}
// //   };

// //   if (imageOnly) {
// //     return (
// //       <Card sx={styles.card}>
// //         <CardMedia
// //           component="img"
// //           image={`http://localhost:5000${recipe.imageUrl}`}
// //           alt={recipe.title}
// //           sx={styles.imageOnly}
// //           onClick={() => navigate(`/recipe/${recipe._id}`)}
// //           onError={(e) => { e.target.src = '/default-image.png'; }}
// //         />
// //       </Card>
// //     );
// //   }

// //   return (
// //     <Card sx={styles.card}>
// //       <CardMedia
// //         component="img"
// //         image={`http://localhost:5000${recipe.imageUrl}`}
// //         alt={recipe.title}
// <<<<<<< HEAD
// //         sx={{ ...styles.image, cursor: "pointer" }}
// =======
// //         sx={styles.image}
// >>>>>>> foryou
// //         onClick={() => navigate(`/recipe/${recipe._id}`)}
// //         onError={(e) => { e.target.src = '/default-image.png'; }}
// //       />
// //       <CardContent>
// //         <Box sx={styles.uploaderBox}>
// //           <Avatar />
// //           <Box sx={{ ml: 1 }}>
// //             <Typography variant="subtitle2" fontWeight="bold">{uploader}</Typography>
// //             <Typography variant="caption" color="text.secondary">
// //               {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : 'Unknown Date'}
// //             </Typography>
// //           </Box>
// //         </Box>

// // //         <Typography
// // //           variant="h6"
// // //           sx={{ ...styles.title, cursor: "pointer" }}
// // //           onClick={() => navigate(`/recipe/${recipe._id}`)}
// // //         >
// // //           {recipe.title}
// // //         </Typography>

// // //         <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
// // //           {recipe.description}
// // //         </Typography>

// // //         {recipe.tags?.length > 0 && (
// // //           <Box sx={styles.tagsBox}>
// // //             {recipe.tags.map((tag, index) => (
// // //               <Typography
// // //                 key={index}
// // //                 variant="caption"
// // //                 sx={styles.tag}
// // //                 onClick={() => navigate(`/search/tag/${tag}`)}
// // //               >
// // //                 #{tag}
// // //               </Typography>
// // //             ))}
// // //           </Box>
// // //         )}

// // //         <Box sx={styles.recipeInfo}>
// // //           <Box sx={styles.infoItem}>
// // //             <AccessTimeIcon sx={{ fontSize: 16 }} />
// // //             <Typography variant="caption" sx={{ ml: 0.5 }}>{recipe.cookingTime || 25} mins</Typography>
// // //           </Box>
// // //           <Box sx={styles.infoItem}>
// // //             <GroupsIcon sx={{ fontSize: 16 }} />
// // //             <Typography variant="caption" sx={{ ml: 0.5 }}>{recipe.servings || 4} servings</Typography>
// // //           </Box>
// // //         </Box>

// // //         <Box sx={styles.actions}>
// // //           <Box sx={styles.iconGroup}>
// // //             <IconButton onClick={handleLike} sx={styles.iconButton}>
// // //               {liked ? <FavoriteIcon sx={styles.iconSvg} /> : <FavoriteBorderIcon sx={styles.iconSvg} />}
// // //             </IconButton>
// // //             <Typography variant="body2">{likes}</Typography>
// // //           </Box>

// // //           <IconButton onClick={handleShowLikes} sx={styles.iconButton}>
// // //             <PeopleAltOutlinedIcon sx={styles.iconSvg} />
// // //           </IconButton>

// // //           <Box sx={styles.iconGroup}>
// // //             <IconButton onClick={() => setShowComments(!showComments)} sx={styles.iconButton}>
// // //               <ChatBubbleOutlineIcon sx={styles.iconSvg} />
// // //             </IconButton>
// // //             <Typography variant="body2">{commentsCount}</Typography>
// // //           </Box>

// // //           <IconButton sx={styles.iconButton}>
// // //             <ShareIcon sx={styles.iconSvg} />
// // //           </IconButton>
// // //         </Box>

// // //         {showComments && <CommentSection recipeId={recipe._id} />}
// // //       </CardContent>

// // //       <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // //         <DialogTitle>People who liked this recipe</DialogTitle>
// // //         <DialogContent>
// // //           {likeUsers.length > 0 ? (
// // //             <List>
// // //               {likeUsers.map((user, i) => (
// // //                 <ListItem key={i}><ListItemText primary={user} /></ListItem>
// // //               ))}
// // //             </List>
// // //           ) : (
// // //             <Typography>No likes yet.</Typography>
// // //           )}
// // //           <Button onClick={() => setShowLikes(false)}>Close</Button>
// // //         </DialogContent>
// // //       </Dialog>
// // //     </Card>
// // //   );
// // // }

// // // export default RecipeCard;

// // // const styles = {
// // //   card: {
// // //     width: "100%",
// // //     maxWidth: 500,
// // //     margin: "auto",
// // //     borderRadius: "15px",
// // //     overflow: "hidden",
// // //     boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
// // //     backgroundColor: "#fff"
// // //   },
// // //   image: {
// // //     width: "100%",
// // //     height: 220,
// // //     objectFit: "cover",
// // //     cursor: "pointer"
// // //   },
// // //   imageOnly: {
// // //     width: "100%",
// // //     height: 220,
// // //     objectFit: "cover",
// // //     cursor: "pointer",
// // //     transition: "transform 0.2s ease",
// // //     '&:hover': {
// // //       transform: "scale(1.03)"
// // //     }
// // //   },
// // //   uploaderBox: {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     marginBottom: 1
// // //   },
// // //   title: {
// // //     fontWeight: "bold",
// // //     marginTop: 1
// // //   },
// // //   recipeInfo: {
// // //     display: "flex",
// // //     gap: 2,
// // //     marginTop: 1,
// // //     marginBottom: 1
// // //   },
// // //   infoItem: {
// // //     display: "flex",
// // //     alignItems: "center"
// // //   },
// // //   actions: {
// // //     display: "flex",
// // //     justifyContent: "space-around",
// // //     alignItems: "center",
// // //     marginTop: 2
// // //   },
// // //   iconGroup: {
// // //     display: "flex",
// // //     alignItems: "center",
// // //     gap: "4px"
// // //   },
// // //   iconButton: {
// // //     color: "#ff6600"
// // //   },
// // //   iconSvg: {
// // //     fontSize: 20
// // //   },
// // //   tagsBox: {
// // //     display: "flex",
// // //     flexWrap: "wrap",
// // //     gap: "6px",
// // //     marginBottom: "8px"
// // //   },
// // //   tag: {
// // //     backgroundColor: "#f2f2f2",
// // //     color: "#ff8a33",
// // //     borderRadius: "12px",
// // //     padding: "4px 8px",
// // //     fontWeight: "bold",
// // //     fontSize: "0.75rem",
// // //     cursor: "pointer"
// // //   }
// // // };
// // import React, { useState, useEffect } from 'react';
// // import {
// //   Card, CardMedia, CardContent, Typography, Box, Avatar,
// //   IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
// // } from '@mui/material';
// // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // import ShareIcon from '@mui/icons-material/Share';
// // import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // import GroupsIcon from '@mui/icons-material/Groups';
// // import { useNavigate } from 'react-router-dom';
// // import CommentSection from './Comments';

// // function RecipeCard({ recipe, uploader = "Anonymous", imageOnly = false }) {
// //   const navigate = useNavigate();
// //   const userId = localStorage.getItem('userId');
// //   const token = localStorage.getItem('token');

// //   const [likes, setLikes] = useState(recipe.likes || 0);
// //   const [liked, setLiked] = useState(false);
// //   const [showLikes, setShowLikes] = useState(false);
// //   const [likeUsers, setLikeUsers] = useState([]);
// //   const [showComments, setShowComments] = useState(false);
// //   const [commentsCount, setCommentsCount] = useState(0);

// //   useEffect(() => {
// //     if (!userId || imageOnly) return;
// //     fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`)
// //       .then(res => res.json())
// //       .then(data => setLiked(data.liked))
// //       .catch(() => {});
// //   }, [recipe._id, userId, imageOnly]);

// //   useEffect(() => {
// //     if (imageOnly) return;
// //     fetch(`http://localhost:5000/api/comments/${recipe._id}`)
// //       .then(res => res.json())
// //       .then(data => setCommentsCount(data.length))
// //       .catch(() => {});
// //   }, [recipe._id, imageOnly]);

// //   const handleLike = async () => {
// //     if (!token || !userId) return alert("Login required");
// //     try {
// //       const res = await fetch("http://localhost:5000/api/likes", {
// //         method: "POST",
// //         headers: {
// //           "Content-Type": "application/json",
// //           Authorization: `Bearer ${token}`
// //         },
// //         body: JSON.stringify({ recipe: recipe._id, user: userId })
// //       });
// //       const data = await res.json();
// //       if (res.ok) {
// //         setLikes(data.liked ? likes + 1 : likes - 1);
// //         setLiked(data.liked);
// //       }
// //     } catch {}
// //   };

// //   const handleShowLikes = async () => {
// //     try {
// //       const res = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// //       const data = await res.json();
// //       setLikeUsers(data.users || []);
// //       setShowLikes(true);
// //     } catch {}
// //   };

// // <<<<<<< HEAD
// //   // ✅ הכנה ל־Cloudinary או קובץ מקומי
// //   const getImageUrl = (url) => {
// //     if (!url) return '/default-image.png';
// //     return url.startsWith('http') ? url : `http://localhost:5000${url}`;
// //   };
// // =======
// //   if (imageOnly) {
// //     return (
// //       <Card sx={styles.card}>
// //         <CardMedia
// //           component="img"
// //           image={`http://localhost:5000${recipe.imageUrl}`}
// //           alt={recipe.title}
// //           sx={styles.imageOnly}
// //           onClick={() => navigate(`/recipe/${recipe._id}`)}
// //           onError={(e) => { e.target.src = '/default-image.png'; }}
// //         />
// //       </Card>
// //     );
// //   }
// // >>>>>>> foryou

// //   return (
// //     <Card sx={styles.card}>
// //       <CardMedia
// //         component="img"
// //         image={getImageUrl(recipe.imageUrl)}
// //         alt={recipe.title}
// //         sx={styles.image}
// //         onClick={() => navigate(`/recipe/${recipe._id}`)}
// //         onError={(e) => { e.target.src = '/default-image.png'; }}
// //       />
// //       <CardContent>
// //         <Box sx={styles.uploaderBox}>
// //           <Avatar />
// //           <Box sx={{ ml: 1 }}>
// //             <Typography variant="subtitle2" fontWeight="bold">{uploader}</Typography>
// //             <Typography variant="caption" color="text.secondary">
// //               {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : 'Unknown Date'}
// //             </Typography>
// //           </Box>
// //         </Box>

// //         <Typography
// //           variant="h6"
// //           sx={{ ...styles.title, cursor: "pointer" }}
// //           onClick={() => navigate(`/recipe/${recipe._id}`)}
// //         >
// //           {recipe.title}
// //         </Typography>

// //         <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
// //           {recipe.description}
// //         </Typography>

// //         {recipe.tags?.length > 0 && (
// //           <Box sx={styles.tagsBox}>
// //             {recipe.tags.map((tag, index) => (
// //               <Typography
// //                 key={index}
// //                 variant="caption"
// //                 sx={styles.tag}
// //                 onClick={() => navigate(`/search/tag/${tag}`)}
// //               >
// //                 #{tag}
// //               </Typography>
// //             ))}
// //           </Box>
// //         )}

// //         <Box sx={styles.recipeInfo}>
// //           <Box sx={styles.infoItem}>
// //             <AccessTimeIcon sx={{ fontSize: 16 }} />
// //             <Typography variant="caption" sx={{ ml: 0.5 }}>{recipe.cookingTime || 25} mins</Typography>
// //           </Box>
// //           <Box sx={styles.infoItem}>
// //             <GroupsIcon sx={{ fontSize: 16 }} />
// //             <Typography variant="caption" sx={{ ml: 0.5 }}>{recipe.servings || 4} servings</Typography>
// //           </Box>
// //         </Box>

// //         <Box sx={styles.actions}>
// //           <Box sx={styles.iconGroup}>
// //             <IconButton onClick={handleLike} sx={styles.iconButton}>
// //               {liked ? <FavoriteIcon sx={styles.iconSvg} /> : <FavoriteBorderIcon sx={styles.iconSvg} />}
// //             </IconButton>
// //             <Typography variant="body2">{likes}</Typography>
// //           </Box>

// //           <IconButton onClick={handleShowLikes} sx={styles.iconButton}>
// //             <PeopleAltOutlinedIcon sx={styles.iconSvg} />
// //           </IconButton>

// //           <Box sx={styles.iconGroup}>
// //             <IconButton onClick={() => setShowComments(!showComments)} sx={styles.iconButton}>
// //               <ChatBubbleOutlineIcon sx={styles.iconSvg} />
// //             </IconButton>
// //             <Typography variant="body2">{commentsCount}</Typography>
// //           </Box>

// //           <IconButton sx={styles.iconButton}>
// //             <ShareIcon sx={styles.iconSvg} />
// //           </IconButton>
// //         </Box>

// //         {showComments && <CommentSection recipeId={recipe._id} />}
// //       </CardContent>

// //       <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// //         <DialogTitle>People who liked this recipe</DialogTitle>
// //         <DialogContent>
// //           {likeUsers.length > 0 ? (
// //             <List>
// //               {likeUsers.map((user, i) => (
// //                 <ListItem key={i}><ListItemText primary={user} /></ListItem>
// //               ))}
// //             </List>
// //           ) : (
// //             <Typography>No likes yet.</Typography>
// //           )}
// //           <Button onClick={() => setShowLikes(false)}>Close</Button>
// //         </DialogContent>
// //       </Dialog>
// //     </Card>
// //   );
// // }

// // export default RecipeCard;

// // const styles = {
// //   card: {
// //     width: "100%",
// //     maxWidth: 500,
// //     margin: "auto",
// //     borderRadius: "15px",
// //     overflow: "hidden",
// //     boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
// //     backgroundColor: "#fff"
// //   },
// //   image: {
// //     width: "100%",
// //     height: 220,
// //     objectFit: "cover",
// //     cursor: "pointer"
// //   },
// //   imageOnly: {
// //     width: "100%",
// //     height: 220,
// //     objectFit: "cover",
// //     cursor: "pointer",
// //     transition: "transform 0.2s ease",
// //     '&:hover': {
// //       transform: "scale(1.03)"
// //     }
// //   },
// //   uploaderBox: {
// //     display: "flex",
// //     alignItems: "center",
// //     marginBottom: 1
// //   },
// //   title: {
// //     fontWeight: "bold",
// //     marginTop: 1
// //   },
// //   recipeInfo: {
// //     display: "flex",
// //     gap: 2,
// //     marginTop: 1,
// //     marginBottom: 1
// //   },
// //   infoItem: {
// //     display: "flex",
// //     alignItems: "center"
// //   },
// //   actions: {
// //     display: "flex",
// //     justifyContent: "space-around",
// //     alignItems: "center",
// //     marginTop: 2
// //   },
// //   iconGroup: {
// //     display: "flex",
// //     alignItems: "center",
// //     gap: "4px"
// //   },
// //   iconButton: {
// //     color: "#ff6600"
// //   },
// //   iconSvg: {
// //     fontSize: 20
// //   },
// //   tagsBox: {
// //     display: "flex",
// //     flexWrap: "wrap",
// //     gap: "6px",
// //     marginBottom: "8px"
// //   },
// //   tag: {
// //     backgroundColor: "#f2f2f2",
// //     color: "#ff8a33",
// //     borderRadius: "12px",
// //     padding: "4px 8px",
// //     fontWeight: "bold",
// //     fontSize: "0.75rem",
// //     cursor: "pointer"
// //   }
// // };
// import React, { useState, useEffect } from 'react';
// import {
//   Card, CardMedia, CardContent, Typography, Box, Avatar,
//   IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import ShareIcon from '@mui/icons-material/Share';
// import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import GroupsIcon from '@mui/icons-material/Groups';
// import { useNavigate } from 'react-router-dom';
// import CommentSection from './Comments';

// function RecipeCard({ recipe, uploader = "Anonymous", imageOnly = false }) {
//   const navigate = useNavigate();
//   const userId = localStorage.getItem('userId');
//   const token = localStorage.getItem('token');

//   const [likes, setLikes] = useState(recipe.likes || 0);
//   const [liked, setLiked] = useState(false);
//   const [showLikes, setShowLikes] = useState(false);
//   const [likeUsers, setLikeUsers] = useState([]);
//   const [showComments, setShowComments] = useState(false);
//   const [commentsCount, setCommentsCount] = useState(0);

//   useEffect(() => {
//     if (!userId || imageOnly) return;
//     fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`)
//       .then(res => res.json())
//       .then(data => setLiked(data.liked))
//       .catch(() => {});
//   }, [recipe._id, userId, imageOnly]);

//   useEffect(() => {
//     if (imageOnly) return;
//     fetch(`http://localhost:5000/api/comments/${recipe._id}`)
//       .then(res => res.json())
//       .then(data => setCommentsCount(data.length))
//       .catch(() => {});
//   }, [recipe._id, imageOnly]);

//   const handleLike = async () => {
//     if (!token || !userId) return alert("Login required");
//     try {
//       const res = await fetch("http://localhost:5000/api/likes", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ recipe: recipe._id, user: userId })
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setLikes(data.liked ? likes + 1 : likes - 1);
//         setLiked(data.liked);
//       }
//     } catch {}
//   };

//   const handleShowLikes = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
//       const data = await res.json();
//       setLikeUsers(data.users || []);
//       setShowLikes(true);
//     } catch {}
//   };

//   // ✅ Support local path or Cloudinary
//   const getImageUrl = (url) => {
//     if (!url) return '/default-image.png';
//     return url.startsWith('http') ? url : `http://localhost:5000${url}`;
//   };

//   // ✅ Image-only layout for ForYou page
//   if (imageOnly) {
//     return (
//       <Card sx={styles.card}>
//         <CardMedia
//           component="img"
//           image={getImageUrl(recipe.imageUrl)}
//           alt={recipe.title}
//           sx={styles.imageOnly}
//           onClick={() => navigate(`/recipe/${recipe._id}`)}
//           onError={(e) => { e.target.src = '/default-image.png'; }}
//         />
//       </Card>
//     );
//   }

//   // ✅ Full layout
//   return (
//     <Card sx={styles.card}>
//       <CardMedia
//         component="img"
//         image={getImageUrl(recipe.imageUrl)}
//         alt={recipe.title}
//         sx={styles.image}
//         onClick={() => navigate(`/recipe/${recipe._id}`)}
//         onError={(e) => { e.target.src = '/default-image.png'; }}
//       />
//       <CardContent>
//         <Box sx={styles.uploaderBox}>
//           <Avatar />
//           <Box sx={{ ml: 1 }}>
//             <Typography variant="subtitle2" fontWeight="bold">{uploader}</Typography>
//             <Typography variant="caption" color="text.secondary">
//               {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : 'Unknown Date'}
//             </Typography>
//           </Box>
//         </Box>

//         <Typography
//           variant="h6"
//           sx={{ ...styles.title, cursor: "pointer" }}
//           onClick={() => navigate(`/recipe/${recipe._id}`)}
//         >
//           {recipe.title}
//         </Typography>

//         <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
//           {recipe.description}
//         </Typography>

//         {recipe.tags?.length > 0 && (
//           <Box sx={styles.tagsBox}>
//             {recipe.tags.map((tag, index) => (
//               <Typography
//                 key={index}
//                 variant="caption"
//                 sx={styles.tag}
//                 onClick={() => navigate(`/search/tag/${tag}`)}
//               >
//                 #{tag}
//               </Typography>
//             ))}
//           </Box>
//         )}

//         <Box sx={styles.recipeInfo}>
//           <Box sx={styles.infoItem}>
//             <AccessTimeIcon sx={{ fontSize: 16 }} />
//             <Typography variant="caption" sx={{ ml: 0.5 }}>{recipe.cookingTime || 25} mins</Typography>
//           </Box>
//           <Box sx={styles.infoItem}>
//             <GroupsIcon sx={{ fontSize: 16 }} />
//             <Typography variant="caption" sx={{ ml: 0.5 }}>{recipe.servings || 4} servings</Typography>
//           </Box>
//         </Box>

//         <Box sx={styles.actions}>
//           <Box sx={styles.iconGroup}>
//             <IconButton onClick={handleLike} sx={styles.iconButton}>
//               {liked ? <FavoriteIcon sx={styles.iconSvg} /> : <FavoriteBorderIcon sx={styles.iconSvg} />}
//             </IconButton>
//             <Typography variant="body2">{likes}</Typography>
//           </Box>

//           <IconButton onClick={handleShowLikes} sx={styles.iconButton}>
//             <PeopleAltOutlinedIcon sx={styles.iconSvg} />
//           </IconButton>

//           <Box sx={styles.iconGroup}>
//             <IconButton onClick={() => setShowComments(!showComments)} sx={styles.iconButton}>
//               <ChatBubbleOutlineIcon sx={styles.iconSvg} />
//             </IconButton>
//             <Typography variant="body2">{commentsCount}</Typography>
//           </Box>

//           <IconButton sx={styles.iconButton}>
//             <ShareIcon sx={styles.iconSvg} />
//           </IconButton>
//         </Box>

//         {showComments && <CommentSection recipeId={recipe._id} />}
//       </CardContent>

//       <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
//         <DialogTitle>People who liked this recipe</DialogTitle>
//         <DialogContent>
//           {likeUsers.length > 0 ? (
//             <List>
//               {likeUsers.map((user, i) => (
//                 <ListItem key={i}><ListItemText primary={user} /></ListItem>
//               ))}
//             </List>
//           ) : (
//             <Typography>No likes yet.</Typography>
//           )}
//           <Button onClick={() => setShowLikes(false)}>Close</Button>
//         </DialogContent>
//       </Dialog>
//     </Card>
//   );
// }

// export default RecipeCard;

// const styles = {
//   card: {
//     width: "100%",
//     maxWidth: 500,
//     margin: "auto",
//     borderRadius: "15px",
//     overflow: "hidden",
//     boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
//     backgroundColor: "#fff"
//   },
//   image: {
//     width: "100%",
//     height: 220,
//     objectFit: "cover",
//     cursor: "pointer"
//   },
//   imageOnly: {
//     width: "100%",
//     height: 220,
//     objectFit: "cover",
//     cursor: "pointer",
//     transition: "transform 0.2s ease",
//     '&:hover': {
//       transform: "scale(1.03)"
//     }
//   },
//   uploaderBox: {
//     display: "flex",
//     alignItems: "center",
//     marginBottom: 1
//   },
//   title: {
//     fontWeight: "bold",
//     marginTop: 1
//   },
//   recipeInfo: {
//     display: "flex",
//     gap: 2,
//     marginTop: 1,
//     marginBottom: 1
//   },
//   infoItem: {
//     display: "flex",
//     alignItems: "center"
//   },
//   actions: {
//     display: "flex",
//     justifyContent: "space-around",
//     alignItems: "center",
//     marginTop: 2
//   },
//   iconGroup: {
//     display: "flex",
//     alignItems: "center",
//     gap: "4px"
//   },
//   iconButton: {
//     color: "#ff6600"
//   },
//   iconSvg: {
//     fontSize: 20
//   },
//   tagsBox: {
//     display: "flex",
//     flexWrap: "wrap",
//     gap: "6px",
//     marginBottom: "8px"
//   },
//   tag: {
//     backgroundColor: "#f2f2f2",
//     color: "#ff8a33",
//     borderRadius: "12px",
//     padding: "4px 8px",
//     fontWeight: "bold",
//     fontSize: "0.75rem",
//     cursor: "pointer"
//   }
// };

import React, { useState, useEffect } from 'react';
import {
  Card, CardMedia, CardContent, Typography, Box, Avatar,
  IconButton, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import { useNavigate } from 'react-router-dom';
import CommentSection from './Comments';

function RecipeCard({ recipe, uploader = "Anonymous", imageOnly = false }) {
  const navigate = useNavigate();
  const userId = localStorage.getItem('userId');
  const token = localStorage.getItem('token');

  const [likes, setLikes] = useState(recipe.likes || 0);
  const [liked, setLiked] = useState(false);
  const [showLikes, setShowLikes] = useState(false);
  const [likeUsers, setLikeUsers] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const [commentsCount, setCommentsCount] = useState(0);

  useEffect(() => {
    if (!userId || imageOnly) return;
    fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`)
      .then(res => res.json())
      .then(data => setLiked(data.liked))
      .catch(() => {});
  }, [recipe._id, userId, imageOnly]);

  useEffect(() => {
    if (imageOnly) return;
    fetch(`http://localhost:5000/api/comments/${recipe._id}`)
      .then(res => res.json())
      .then(data => setCommentsCount(data.length))
      .catch(() => {});
  }, [recipe._id, imageOnly]);

  const handleLike = async () => {
    if (!token || !userId) return alert("Login required");
    try {
      const res = await fetch("http://localhost:5000/api/likes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ recipe: recipe._id, user: userId })
      });
      const data = await res.json();
      if (res.ok) {
        setLikes(data.liked ? likes + 1 : likes - 1);
        setLiked(data.liked);
      }
    } catch {}
  };

  const handleShowLikes = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
      const data = await res.json();
      setLikeUsers(data.users || []);
      setShowLikes(true);
    } catch {}
  };

  const getImageUrl = (url) => {
    if (!url) return '/default-image.png';
    return url.startsWith('http') ? url : `http://localhost:5000${url}`;
  };

  if (imageOnly) {
    return (
      <Card sx={styles.card}>
        <CardMedia
          component="img"
          image={getImageUrl(recipe.imageUrl)}
          alt={recipe.title}
          sx={styles.imageOnly}
          onClick={() => navigate(`/recipe/${recipe._id}`)}
          onError={(e) => { e.target.src = '/default-image.png'; }}
        />
      </Card>
    );
  }

  return (
    <Card sx={styles.card}>
      <CardMedia
        component="img"
        image={getImageUrl(recipe.imageUrl)}
        alt={recipe.title}
        sx={styles.image}
        onClick={() => navigate(`/recipe/${recipe._id}`)}
        onError={(e) => { e.target.src = '/default-image.png'; }}
      />
      <CardContent>
        <Box sx={styles.uploaderBox}>
          <Avatar />
          <Box sx={{ ml: 1 }}>
            <Typography variant="subtitle2" fontWeight="bold">{uploader}</Typography>
            <Typography variant="caption" color="text.secondary">
              {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : 'Unknown Date'}
            </Typography>
          </Box>
        </Box>

        <Typography
          variant="h6"
          sx={{ ...styles.title, cursor: "pointer" }}
          onClick={() => navigate(`/recipe/${recipe._id}`)}
        >
          {recipe.title}
        </Typography>

        <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
          {recipe.description}
        </Typography>

        {recipe.tags?.length > 0 && (
          <Box sx={styles.tagsBox}>
            {recipe.tags.map((tag, index) => (
              <Typography
                key={index}
                variant="caption"
                sx={styles.tag}
                onClick={() => navigate(`/search/tag/${tag}`)}
              >
                #{tag}
              </Typography>
            ))}
          </Box>
        )}

        <Box sx={styles.recipeInfo}>
          <Box sx={styles.infoItem}>
            <AccessTimeIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption" sx={{ ml: 0.5 }}>{recipe.cookingTime || 25} mins</Typography>
          </Box>
          <Box sx={styles.infoItem}>
            <GroupsIcon sx={{ fontSize: 16 }} />
            <Typography variant="caption" sx={{ ml: 0.5 }}>{recipe.servings || 4} servings</Typography>
          </Box>
        </Box>

        <Box sx={styles.actions}>
          <Box sx={styles.iconGroup}>
            <IconButton onClick={handleLike} sx={styles.iconButton}>
              {liked ? <FavoriteIcon sx={styles.iconSvg} /> : <FavoriteBorderIcon sx={styles.iconSvg} />}
            </IconButton>
            <Typography variant="body2">{likes}</Typography>
          </Box>

          <IconButton onClick={handleShowLikes} sx={styles.iconButton}>
            <PeopleAltOutlinedIcon sx={styles.iconSvg} />
          </IconButton>

          <Box sx={styles.iconGroup}>
            <IconButton onClick={() => setShowComments(!showComments)} sx={styles.iconButton}>
              <ChatBubbleOutlineIcon sx={styles.iconSvg} />
            </IconButton>
            <Typography variant="body2">{commentsCount}</Typography>
          </Box>

          <IconButton sx={styles.iconButton}>
            <ShareIcon sx={styles.iconSvg} />
          </IconButton>
        </Box>

        {showComments && <CommentSection recipeId={recipe._id} />}
      </CardContent>

      <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
        <DialogTitle>People who liked this recipe</DialogTitle>
        <DialogContent>
          {likeUsers.length > 0 ? (
            <List>
              {likeUsers.map((user, i) => (
                <ListItem key={i}><ListItemText primary={user} /></ListItem>
              ))}
            </List>
          ) : (
            <Typography>No likes yet.</Typography>
          )}
          <Button onClick={() => setShowLikes(false)}>Close</Button>
        </DialogContent>
      </Dialog>
    </Card>
  );
}

export default RecipeCard;

const styles = {
  card: {
    width: "100%",
    maxWidth: 500,
    margin: "auto",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
    backgroundColor: "#fff"
  },
  image: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    cursor: "pointer"
  },
  imageOnly: {
    width: "100%",
    height: 220,
    objectFit: "cover",
    cursor: "pointer",
    transition: "transform 0.2s ease",
    '&:hover': {
      transform: "scale(1.03)"
    }
  },
  uploaderBox: {
    display: "flex",
    alignItems: "center",
    marginBottom: 1
  },
  title: {
    fontWeight: "bold",
    marginTop: 1
  },
  recipeInfo: {
    display: "flex",
    gap: 2,
    marginTop: 1,
    marginBottom: 1
  },
  infoItem: {
    display: "flex",
    alignItems: "center"
  },
  actions: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    marginTop: 2
  },
  iconGroup: {
    display: "flex",
    alignItems: "center",
    gap: "4px"
  },
  iconButton: {
    color: "#ff6600"
  },
  iconSvg: {
    fontSize: 20
  },
  tagsBox: {
    display: "flex",
    flexWrap: "wrap",
    gap: "6px",
    marginBottom: "8px"
  },
  tag: {
    backgroundColor: "#f2f2f2",
    color: "#ff8a33",
    borderRadius: "12px",
    padding: "4px 8px",
    fontWeight: "bold",
    fontSize: "0.75rem",
    cursor: "pointer"
  }
};
