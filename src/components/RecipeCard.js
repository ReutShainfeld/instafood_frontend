
// // // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // // import { 
// // // // // // // // // //     Card, CardContent, Typography, CardMedia, IconButton, Box, 
// // // // // // // // // //     Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button 
// // // // // // // // // // } from '@mui/material';
// // // // // // // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // // // // // // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // // // // // // // // // import ShareIcon from '@mui/icons-material/Share';
// // // // // // // // // // import PeopleIcon from '@mui/icons-material/People';

// // // // // // // // // // function RecipeCard({ recipe, uploader }) {
// // // // // // // // // //     const userId = localStorage.getItem('userId'); // Check if user is logged in
// // // // // // // // // //     const token = localStorage.getItem('token'); // Get auth token
// // // // // // // // // //     const [likes, setLikes] = useState(recipe.likes || 0);
// // // // // // // // // //     const [liked, setLiked] = useState(false);
// // // // // // // // // //     const [showLikes, setShowLikes] = useState(false);
// // // // // // // // // //     const [likeUsers, setLikeUsers] = useState([]);

// // // // // // // // // //     // Check if the user already liked the recipe
// // // // // // // // // //     useEffect(() => {
// // // // // // // // // //         if (!userId) return;
// // // // // // // // // //         const checkLikeStatus = async () => {
// // // // // // // // // //             try {
// // // // // // // // // //                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// // // // // // // // // //                 const data = await response.json();
// // // // // // // // // //                 setLiked(data.liked);
// // // // // // // // // //             } catch (error) {
// // // // // // // // // //                 console.error('Error checking like status:', error);
// // // // // // // // // //             }
// // // // // // // // // //         };
// // // // // // // // // //         checkLikeStatus();
// // // // // // // // // //     }, [recipe._id, userId]);

// // // // // // // // // //     // Handle Like/Unlike Button Click
// // // // // // // // // //     const handleLike = async () => {
// // // // // // // // // //         if (!userId || !token) {
// // // // // // // // // //             alert('❌ You must be logged in to like a recipe.');
// // // // // // // // // //             return;
// // // // // // // // // //         }

// // // // // // // // // //         try {
// // // // // // // // // //             const response = await fetch('http://localhost:5000/api/likes', {
// // // // // // // // // //                 method: 'POST', 
// // // // // // // // // //                 headers: { 
// // // // // // // // // //                     'Content-Type': 'application/json',
// // // // // // // // // //                     'Authorization': `Bearer ${token}`
// // // // // // // // // //                 },
// // // // // // // // // //                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
// // // // // // // // // //             });

// // // // // // // // // //             const data = await response.json();

// // // // // // // // // //             if (response.ok) {
// // // // // // // // // //                 setLikes(data.liked ? likes + 1 : likes - 1);
// // // // // // // // // //                 setLiked(data.liked);
// // // // // // // // // //             } else {
// // // // // // // // // //                 alert(`❌ ${data.message}`);
// // // // // // // // // //             }
// // // // // // // // // //         } catch (error) {
// // // // // // // // // //             alert('❌ Failed to like/unlike recipe.');
// // // // // // // // // //         }
// // // // // // // // // //     };

// // // // // // // // // //     // Fetch Users Who Liked This Recipe
// // // // // // // // // //     const handleShowLikes = async () => {
// // // // // // // // // //         try {
// // // // // // // // // //             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// // // // // // // // // //             const data = await response.json();
// // // // // // // // // //             setLikeUsers(data.users);
// // // // // // // // // //             setShowLikes(true);
// // // // // // // // // //         } catch (error) {
// // // // // // // // // //             console.error('❌ Failed to fetch liked users:', error);
// // // // // // // // // //         }
// // // // // // // // // //     };

// // // // // // // // // //     return (
// // // // // // // // // //         <Card sx={styles.card}>
// // // // // // // // // //             <CardContent sx={styles.header}>
// // // // // // // // // //                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
// // // // // // // // // //             </CardContent>

// // // // // // // // // //             <CardMedia
// // // // // // // // // //                 component="img"
// // // // // // // // // //                 image={`http://localhost:5000${recipe.imageUrl}`}
// // // // // // // // // //                 alt={recipe.title}
// // // // // // // // // //                 sx={styles.image}
// // // // // // // // // //                 onError={(e) => { e.target.src = "https://via.placeholder.com/400x250"; }}
// // // // // // // // // //             />

// // // // // // // // // //             <CardContent>
// // // // // // // // // //                 <Typography variant="body2" sx={styles.description}>{recipe.description}</Typography>
// // // // // // // // // //                 <Typography variant="subtitle2" sx={styles.uploader}>👨‍🍳 Uploaded by: <strong>{uploader}</strong></Typography>
// // // // // // // // // //             </CardContent>

// // // // // // // // // //             <Box sx={styles.actions}>
// // // // // // // // // //                 {/* Like Button */}
// // // // // // // // // //                 <IconButton onClick={handleLike} sx={styles.icon}>
// // // // // // // // // //                     <FavoriteIcon sx={{ color: liked ? 'pink' : 'transparent', stroke: 'black', strokeWidth: 2 }} /> {likes}
// // // // // // // // // //                 </IconButton>

// // // // // // // // // //                 {/* View Likes Button */}
// // // // // // // // // //                 <IconButton onClick={handleShowLikes} sx={styles.icon}>
// // // // // // // // // //                     <PeopleIcon /> View Likes
// // // // // // // // // //                 </IconButton>

// // // // // // // // // //                 <IconButton sx={styles.icon}><ChatBubbleOutlineIcon /> Comments</IconButton>
// // // // // // // // // //                 <IconButton sx={styles.icon}><ShareIcon /> Share</IconButton>
// // // // // // // // // //             </Box>

// // // // // // // // // //             {/* Modal to Display Users Who Liked the Recipe */}
// // // // // // // // // //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // // // // // // // // //                 <DialogTitle>People who liked this recipe</DialogTitle>
// // // // // // // // // //                 <DialogContent>
// // // // // // // // // //                     {likeUsers.length > 0 ? (
// // // // // // // // // //                         <List>
// // // // // // // // // //                             {likeUsers.map((user, index) => (
// // // // // // // // // //                                 <ListItem key={index}>
// // // // // // // // // //                                     <ListItemText primary={user} />
// // // // // // // // // //                                 </ListItem>
// // // // // // // // // //                             ))}
// // // // // // // // // //                         </List>
// // // // // // // // // //                     ) : (
// // // // // // // // // //                         <Typography>No likes yet.</Typography>
// // // // // // // // // //                     )}
// // // // // // // // // //                     <Button onClick={() => setShowLikes(false)}>Close</Button>
// // // // // // // // // //                 </DialogContent>
// // // // // // // // // //             </Dialog>
// // // // // // // // // //         </Card>
// // // // // // // // // //     );
// // // // // // // // // // }

// // // // // // // // // // const styles = {
// // // // // // // // // //     card: {
// // // // // // // // // //         maxWidth: 500,
// // // // // // // // // //         margin: "20px auto",
// // // // // // // // // //         borderRadius: "15px",
// // // // // // // // // //         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // // // // // //         backgroundColor: "#fff",
// // // // // // // // // //     },
// // // // // // // // // //     header: {
// // // // // // // // // //         display: "flex",
// // // // // // // // // //         justifyContent: "center",
// // // // // // // // // //         alignItems: "center",
// // // // // // // // // //         paddingBottom: "0",
// // // // // // // // // //     },
// // // // // // // // // //     title: {
// // // // // // // // // //         fontWeight: "bold",
// // // // // // // // // //         color: "#3E3E3E",
// // // // // // // // // //     },
// // // // // // // // // //     image: {
// // // // // // // // // //         width: "100%",
// // // // // // // // // //         height: "250px",
// // // // // // // // // //         objectFit: "cover",
// // // // // // // // // //     },
// // // // // // // // // //     description: {
// // // // // // // // // //         color: "#5A5A5A",
// // // // // // // // // //         textAlign: "center",
// // // // // // // // // //     },
// // // // // // // // // //     uploader: {
// // // // // // // // // //         color: "#8a4b30",
// // // // // // // // // //         textAlign: "center",
// // // // // // // // // //         marginTop: "8px",
// // // // // // // // // //     },
// // // // // // // // // //     actions: {
// // // // // // // // // //         display: "flex",
// // // // // // // // // //         justifyContent: "space-between",
// // // // // // // // // //         padding: "15px",
// // // // // // // // // //     },
// // // // // // // // // //     icon: {
// // // // // // // // // //         fontSize: "24px",
// // // // // // // // // //         padding: "12px",
// // // // // // // // // //     }
// // // // // // // // // // };

// // // // // // // // // // export default RecipeCard;

// // // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // // import { 
// // // // // // // // //     Card, CardContent, Typography, CardMedia, IconButton, Box, 
// // // // // // // // //     Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button 
// // // // // // // // // } from '@mui/material';
// // // // // // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // // // // // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // // // // // // // // import ShareIcon from '@mui/icons-material/Share';
// // // // // // // // // import PeopleIcon from '@mui/icons-material/People';
// // // // // // // // // import CommentSection from './Comments'; // ✅ תיקון הייבוא של התגובות

// // // // // // // // // function RecipeCard({ recipe, uploader }) {
// // // // // // // // //     const userId = localStorage.getItem('userId');
// // // // // // // // //     const token = localStorage.getItem('token');
// // // // // // // // //     const [likes, setLikes] = useState(recipe.likes || 0);
// // // // // // // // //     const [liked, setLiked] = useState(false);
// // // // // // // // //     const [showLikes, setShowLikes] = useState(false);
// // // // // // // // //     const [likeUsers, setLikeUsers] = useState([]);
// // // // // // // // //     const [showComments, setShowComments] = useState(false); // ✅ בקרת פתיחת תגובות

// // // // // // // // //     useEffect(() => {
// // // // // // // // //         if (!userId) return;
// // // // // // // // //         const checkLikeStatus = async () => {
// // // // // // // // //             try {
// // // // // // // // //                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// // // // // // // // //                 const data = await response.json();
// // // // // // // // //                 setLiked(data.liked);
// // // // // // // // //             } catch (error) {
// // // // // // // // //                 console.error('Error checking like status:', error);
// // // // // // // // //             }
// // // // // // // // //         };
// // // // // // // // //         checkLikeStatus();
// // // // // // // // //     }, [recipe._id, userId]);

// // // // // // // // //     const handleLike = async () => {
// // // // // // // // //         if (!userId || !token) {
// // // // // // // // //             alert('❌ You must be logged in to like a recipe.');
// // // // // // // // //             return;
// // // // // // // // //         }

// // // // // // // // //         try {
// // // // // // // // //             const response = await fetch('http://localhost:5000/api/likes', {
// // // // // // // // //                 method: 'POST', 
// // // // // // // // //                 headers: { 
// // // // // // // // //                     'Content-Type': 'application/json',
// // // // // // // // //                     'Authorization': `Bearer ${token}`
// // // // // // // // //                 },
// // // // // // // // //                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
// // // // // // // // //             });

// // // // // // // // //             const data = await response.json();

// // // // // // // // //             if (response.ok) {
// // // // // // // // //                 setLikes(data.liked ? likes + 1 : likes - 1);
// // // // // // // // //                 setLiked(data.liked);
// // // // // // // // //             } else {
// // // // // // // // //                 alert(`❌ ${data.message}`);
// // // // // // // // //             }
// // // // // // // // //         } catch (error) {
// // // // // // // // //             alert('❌ Failed to like/unlike recipe.');
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     const handleShowLikes = async () => {
// // // // // // // // //         try {
// // // // // // // // //             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// // // // // // // // //             const data = await response.json();
// // // // // // // // //             setLikeUsers(data.users || []);
// // // // // // // // //             setShowLikes(true);
// // // // // // // // //         } catch (error) {
// // // // // // // // //             console.error('❌ Failed to fetch liked users:', error);
// // // // // // // // //         }
// // // // // // // // //     };

// // // // // // // // //     return (
// // // // // // // // //         <Card sx={styles.card}>
// // // // // // // // //             <CardContent sx={styles.header}>
// // // // // // // // //                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
// // // // // // // // //             </CardContent>

// // // // // // // // //             <CardMedia
// // // // // // // // //                 component="img"
// // // // // // // // //                 image={`http://localhost:5000${recipe.imageUrl}`}
// // // // // // // // //                 alt={recipe.title}
// // // // // // // // //                 sx={styles.image}
// // // // // // // // //                 onError={(e) => { e.target.src = "https://via.placeholder.com/400x250"; }}
// // // // // // // // //             />

// // // // // // // // //             <CardContent>
// // // // // // // // //                 <Typography variant="body2" sx={styles.description}>{recipe.description}</Typography>
// // // // // // // // //                 <Typography variant="subtitle2" sx={styles.uploader}>
// // // // // // // // //                     <span role="img" aria-label="chef">👨‍🍳</span> Uploaded by: <strong>{uploader}</strong>
// // // // // // // // //                 </Typography>
// // // // // // // // //             </CardContent>

// // // // // // // // //             <Box sx={styles.actions}>
// // // // // // // // //                 {/* כפתור לייק */}
// // // // // // // // //                 <IconButton onClick={handleLike} sx={styles.icon}>
// // // // // // // // //                     <FavoriteIcon sx={{ color: liked ? 'red' : 'transparent', stroke: 'black', strokeWidth: 2 }} /> {likes}
// // // // // // // // //                 </IconButton>

// // // // // // // // //                 {/* כפתור הצגת מי שאהב */}
// // // // // // // // //                 <IconButton onClick={handleShowLikes} sx={styles.icon}>
// // // // // // // // //                     <PeopleIcon /> View Likes
// // // // // // // // //                 </IconButton>

// // // // // // // // //                 {/* הצגת תגובות */}
// // // // // // // // //                 <IconButton sx={styles.icon} onClick={() => setShowComments(!showComments)}>
// // // // // // // // //                     <ChatBubbleOutlineIcon /> Comments
// // // // // // // // //                 </IconButton>

// // // // // // // // //                 <IconButton sx={styles.icon}><ShareIcon /> Share</IconButton>
// // // // // // // // //             </Box>

// // // // // // // // //             {/* ✅ הצגת תגובות ישירות בכרטיס */}
// // // // // // // // //             {showComments && <CommentSection recipeId={recipe._id} />}

// // // // // // // // //             {/* חלון הצגת אוהבים */}
// // // // // // // // //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // // // // // // // //                 <DialogTitle>People who liked this recipe</DialogTitle>
// // // // // // // // //                 <DialogContent>
// // // // // // // // //                     {likeUsers.length > 0 ? (
// // // // // // // // //                         <List>
// // // // // // // // //                             {likeUsers.map((user, index) => (
// // // // // // // // //                                 <ListItem key={index}>
// // // // // // // // //                                     <ListItemText primary={user} />
// // // // // // // // //                                 </ListItem>
// // // // // // // // //                             ))}
// // // // // // // // //                         </List>
// // // // // // // // //                     ) : (
// // // // // // // // //                         <Typography>No likes yet.</Typography>
// // // // // // // // //                     )}
// // // // // // // // //                     <Button onClick={() => setShowLikes(false)}>Close</Button>
// // // // // // // // //                 </DialogContent>
// // // // // // // // //             </Dialog>
// // // // // // // // //         </Card>
// // // // // // // // //     );
// // // // // // // // // }

// // // // // // // // // const styles = {
// // // // // // // // //     card: {
// // // // // // // // //         maxWidth: 500,
// // // // // // // // //         margin: "20px auto",
// // // // // // // // //         borderRadius: "15px",
// // // // // // // // //         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // // // // //         backgroundColor: "#fff",
// // // // // // // // //     },
// // // // // // // // //     header: {
// // // // // // // // //         display: "flex",
// // // // // // // // //         justifyContent: "center",
// // // // // // // // //         alignItems: "center",
// // // // // // // // //         paddingBottom: "0",
// // // // // // // // //     },
// // // // // // // // //     title: {
// // // // // // // // //         fontWeight: "bold",
// // // // // // // // //         color: "#3E3E3E",
// // // // // // // // //     },
// // // // // // // // //     image: {
// // // // // // // // //         width: "100%",
// // // // // // // // //         height: "250px",
// // // // // // // // //         objectFit: "cover",
// // // // // // // // //     },
// // // // // // // // //     description: {
// // // // // // // // //         color: "#5A5A5A",
// // // // // // // // //         textAlign: "center",
// // // // // // // // //     },
// // // // // // // // //     uploader: {
// // // // // // // // //         color: "#8a4b30",
// // // // // // // // //         textAlign: "center",
// // // // // // // // //         marginTop: "8px",
// // // // // // // // //     },
// // // // // // // // //     actions: {
// // // // // // // // //         display: "flex",
// // // // // // // // //         justifyContent: "space-between",
// // // // // // // // //         padding: "15px",
// // // // // // // // //     },
// // // // // // // // //     icon: {
// // // // // // // // //         fontSize: "24px",
// // // // // // // // //         padding: "12px",
// // // // // // // // //     }
// // // // // // // // // };

// // // // // // // // // export default RecipeCard;
// // // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // // import { 
// // // // // // // //     Card, CardContent, Typography, CardMedia, IconButton, Box, 
// // // // // // // //     Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button 
// // // // // // // // } from '@mui/material';
// // // // // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // // // // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // // // // // // // import ShareIcon from '@mui/icons-material/Share';
// // // // // // // // import PeopleIcon from '@mui/icons-material/People';
// // // // // // // // import CommentSection from './Comments'; // ✅ הוספנו קומפוננטה לתגובות

// // // // // // // // function RecipeCard({ recipe, uploader }) {
// // // // // // // //     const userId = localStorage.getItem('userId');
// // // // // // // //     const token = localStorage.getItem('token');
// // // // // // // //     const [likes, setLikes] = useState(recipe.likes || 0);
// // // // // // // //     const [liked, setLiked] = useState(false);
// // // // // // // //     const [showLikes, setShowLikes] = useState(false);
// // // // // // // //     const [likeUsers, setLikeUsers] = useState([]);
// // // // // // // //     const [showComments, setShowComments] = useState(false); // ✅ חדש: סטייט להצגת תגובות

// // // // // // // //     useEffect(() => {
// // // // // // // //         if (!userId) return;
// // // // // // // //         const checkLikeStatus = async () => {
// // // // // // // //             try {
// // // // // // // //                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// // // // // // // //                 const data = await response.json();
// // // // // // // //                 setLiked(data.liked);
// // // // // // // //             } catch (error) {
// // // // // // // //                 console.error('Error checking like status:', error);
// // // // // // // //             }
// // // // // // // //         };
// // // // // // // //         checkLikeStatus();
// // // // // // // //     }, [recipe._id, userId]);

// // // // // // // //     const handleLike = async () => {
// // // // // // // //         if (!userId || !token) {
// // // // // // // //             alert('❌ You must be logged in to like a recipe.');
// // // // // // // //             return;
// // // // // // // //         }

// // // // // // // //         try {
// // // // // // // //             const response = await fetch('http://localhost:5000/api/likes', {
// // // // // // // //                 method: 'POST', 
// // // // // // // //                 headers: { 
// // // // // // // //                     'Content-Type': 'application/json',
// // // // // // // //                     'Authorization': `Bearer ${token}`
// // // // // // // //                 },
// // // // // // // //                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
// // // // // // // //             });

// // // // // // // //             const data = await response.json();

// // // // // // // //             if (response.ok) {
// // // // // // // //                 setLikes(data.liked ? likes + 1 : likes - 1);
// // // // // // // //                 setLiked(data.liked);
// // // // // // // //             } else {
// // // // // // // //                 alert(`❌ ${data.message}`);
// // // // // // // //             }
// // // // // // // //         } catch (error) {
// // // // // // // //             alert('❌ Failed to like/unlike recipe.');
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     const handleShowLikes = async () => {
// // // // // // // //         try {
// // // // // // // //             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// // // // // // // //             const data = await response.json();
// // // // // // // //             setLikeUsers(data.users || []);
// // // // // // // //             setShowLikes(true);
// // // // // // // //         } catch (error) {
// // // // // // // //             console.error('❌ Failed to fetch liked users:', error);
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <Card sx={styles.card}>
// // // // // // // //             <CardContent sx={styles.header}>
// // // // // // // //                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
// // // // // // // //             </CardContent>

// // // // // // // //             <CardMedia
// // // // // // // //                 component="img"
// // // // // // // //                 image={`http://localhost:5000${recipe.imageUrl}`} // ✅ מציג את התמונה מהשרת
// // // // // // // //                 alt={recipe.title}
// // // // // // // //                 sx={styles.image}
// // // // // // // //                 onError={(e) => { e.target.src = "https://via.placeholder.com/400x250"; }} // ✅ ברירת מחדל אם יש שגיאה
// // // // // // // //             />

// // // // // // // //             <CardContent>
// // // // // // // //                 <Typography variant="body2" sx={styles.description}>{recipe.description}</Typography>
// // // // // // // //                 <Typography variant="subtitle2" sx={styles.uploader}>
// // // // // // // //                     <span role="img" aria-label="chef">👨‍🍳</span> Uploaded by: <strong>{uploader}</strong>
// // // // // // // //                 </Typography>
// // // // // // // //             </CardContent>

// // // // // // // //             <Box sx={styles.actions}>
// // // // // // // //                 <IconButton onClick={handleLike} sx={styles.icon}>
// // // // // // // //                     <FavoriteIcon sx={{ color: liked ? 'red' : 'transparent', stroke: 'black', strokeWidth: 2 }} /> {likes}
// // // // // // // //                 </IconButton>

// // // // // // // //                 <IconButton onClick={handleShowLikes} sx={styles.icon}>
// // // // // // // //                     <PeopleIcon /> View Likes
// // // // // // // //                 </IconButton>

// // // // // // // //                 <IconButton onClick={() => setShowComments(!showComments)} sx={styles.icon}> {/* ✅ חדש */}
// // // // // // // //                     <ChatBubbleOutlineIcon /> Comments
// // // // // // // //                 </IconButton>

// // // // // // // //                 <IconButton sx={styles.icon}><ShareIcon /> Share</IconButton>
// // // // // // // //             </Box>

// // // // // // // //             {showComments && <CommentSection recipeId={recipe._id} />} {/* ✅ הצגת תגובות */}

// // // // // // // //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // // // // // // //                 <DialogTitle>People who liked this recipe</DialogTitle>
// // // // // // // //                 <DialogContent>
// // // // // // // //                     {likeUsers.length > 0 ? (
// // // // // // // //                         <List>
// // // // // // // //                             {likeUsers.map((user, index) => (
// // // // // // // //                                 <ListItem key={index}>
// // // // // // // //                                     <ListItemText primary={user} />
// // // // // // // //                                 </ListItem>
// // // // // // // //                             ))}
// // // // // // // //                         </List>
// // // // // // // //                     ) : (
// // // // // // // //                         <Typography>No likes yet.</Typography>
// // // // // // // //                     )}
// // // // // // // //                     <Button onClick={() => setShowLikes(false)}>Close</Button>
// // // // // // // //                 </DialogContent>
// // // // // // // //             </Dialog>
// // // // // // // //         </Card>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // const styles = {
// // // // // // // //     card: {
// // // // // // // //         maxWidth: 500,
// // // // // // // //         margin: "20px auto",
// // // // // // // //         borderRadius: "15px",
// // // // // // // //         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // // // //         backgroundColor: "#fff",
// // // // // // // //     },
// // // // // // // //     header: {
// // // // // // // //         display: "flex",
// // // // // // // //         justifyContent: "center",
// // // // // // // //         alignItems: "center",
// // // // // // // //         paddingBottom: "0",
// // // // // // // //     },
// // // // // // // //     title: {
// // // // // // // //         fontWeight: "bold",
// // // // // // // //         color: "#3E3E3E",
// // // // // // // //     },
// // // // // // // //     image: {
// // // // // // // //         width: "100%",
// // // // // // // //         height: "250px",
// // // // // // // //         objectFit: "cover",
// // // // // // // //     },
// // // // // // // //     description: {
// // // // // // // //         color: "#5A5A5A",
// // // // // // // //         textAlign: "center",
// // // // // // // //     },
// // // // // // // //     uploader: {
// // // // // // // //         color: "#8a4b30",
// // // // // // // //         textAlign: "center",
// // // // // // // //         marginTop: "8px",
// // // // // // // //     },
// // // // // // // //     actions: {
// // // // // // // //         display: "flex",
// // // // // // // //         justifyContent: "space-between",
// // // // // // // //         padding: "15px",
// // // // // // // //     },
// // // // // // // //     icon: {
// // // // // // // //         fontSize: "24px",
// // // // // // // //         padding: "12px",
// // // // // // // //     }
// // // // // // // // };

// // // // // // // // export default RecipeCard;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { 
// // // // // // //     Card, CardContent, Typography, CardMedia, IconButton, Box, 
// // // // // // //     Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button 
// // // // // // // } from '@mui/material';
// // // // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // // // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // // // // // // import ShareIcon from '@mui/icons-material/Share';
// // // // // // // import PeopleIcon from '@mui/icons-material/People';
// // // // // // // import CommentSection from './Comments'; // ✅ ייבוא תגובות

// // // // // // // function RecipeCard({ recipe, uploader }) {
// // // // // // //     const userId = localStorage.getItem('userId');
// // // // // // //     const token = localStorage.getItem('token');
// // // // // // //     const [likes, setLikes] = useState(recipe.likes || 0);
// // // // // // //     const [liked, setLiked] = useState(false);
// // // // // // //     const [showLikes, setShowLikes] = useState(false);
// // // // // // //     const [likeUsers, setLikeUsers] = useState([]);
// // // // // // //     const [showComments, setShowComments] = useState(false);

// // // // // // //     // ✅ בדיקה האם המשתמש כבר אהב את המתכון
// // // // // // //     useEffect(() => {
// // // // // // //         if (!userId) return;
// // // // // // //         const checkLikeStatus = async () => {
// // // // // // //             try {
// // // // // // //                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// // // // // // //                 if (!response.ok) return;
// // // // // // //                 const data = await response.json();
// // // // // // //                 setLiked(data.liked);
// // // // // // //             } catch (error) {
// // // // // // //                 console.error('Error checking like status:', error);
// // // // // // //             }
// // // // // // //         };
// // // // // // //         checkLikeStatus();
// // // // // // //     }, [recipe._id, userId]);

// // // // // // //     const handleLike = async () => {
// // // // // // //         if (!userId || !token) {
// // // // // // //             alert('❌ You must be logged in to like a recipe.');
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         try {
// // // // // // //             const response = await fetch('http://localhost:5000/api/likes', {
// // // // // // //                 method: 'POST', 
// // // // // // //                 headers: { 
// // // // // // //                     'Content-Type': 'application/json',
// // // // // // //                     'Authorization': `Bearer ${token}`
// // // // // // //                 },
// // // // // // //                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
// // // // // // //             });

// // // // // // //             const data = await response.json();

// // // // // // //             if (response.ok) {
// // // // // // //                 setLikes(data.liked ? likes + 1 : likes - 1);
// // // // // // //                 setLiked(data.liked);
// // // // // // //             } else {
// // // // // // //                 alert(`❌ ${data.message}`);
// // // // // // //             }
// // // // // // //         } catch (error) {
// // // // // // //             alert('❌ Failed to like/unlike recipe.');
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleShowLikes = async () => {
// // // // // // //         try {
// // // // // // //             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// // // // // // //             const data = await response.json();
// // // // // // //             setLikeUsers(data.users || []);
// // // // // // //             setShowLikes(true);
// // // // // // //         } catch (error) {
// // // // // // //             console.error('❌ Failed to fetch liked users:', error);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <Card sx={styles.card}>
// // // // // // //             <CardContent sx={styles.header}>
// // // // // // //                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
// // // // // // //             </CardContent>

// // // // // // //             <CardMedia
// // // // // // //                 component="img"
// // // // // // //                 image={`http://localhost:5000${recipe.imageUrl}`}
// // // // // // //                 alt={recipe.title}
// // // // // // //                 sx={styles.image}
// // // // // // //                 onError={(e) => {
// // // // // // //                     e.target.onerror = null;
// // // // // // //                     e.target.src = ""; // ✅ אם אין תמונה, לא מציגים כלום
// // // // // // //                 }}
// // // // // // //             />

// // // // // // //             <CardContent>
// // // // // // //                 <Typography variant="body2" sx={styles.description}>{recipe.description}</Typography>
// // // // // // //                 <Typography variant="subtitle2" sx={styles.uploader}>
// // // // // // //                     <span role="img" aria-label="chef">👨‍🍳</span> Uploaded by: <strong>{uploader}</strong>
// // // // // // //                 </Typography>
// // // // // // //             </CardContent>

// // // // // // //             <Box sx={styles.actions}>
// // // // // // //                 <IconButton onClick={handleLike} sx={styles.icon}>
// // // // // // //                     <FavoriteIcon sx={{ color: liked ? 'red' : 'transparent', stroke: 'black', strokeWidth: 2 }} /> {likes}
// // // // // // //                 </IconButton>

// // // // // // //                 <IconButton onClick={handleShowLikes} sx={styles.icon}>
// // // // // // //                     <PeopleIcon /> View Likes
// // // // // // //                 </IconButton>

// // // // // // //                 <IconButton sx={styles.icon} onClick={() => setShowComments(!showComments)}>
// // // // // // //                     <ChatBubbleOutlineIcon /> Comments
// // // // // // //                 </IconButton>

// // // // // // //                 <IconButton sx={styles.icon}><ShareIcon /> Share</IconButton>
// // // // // // //             </Box>

// // // // // // //             {showComments && <CommentSection recipeId={recipe._id} />}

// // // // // // //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // // // // // //                 <DialogTitle>People who liked this recipe</DialogTitle>
// // // // // // //                 <DialogContent>
// // // // // // //                     {likeUsers.length > 0 ? (
// // // // // // //                         <List>
// // // // // // //                             {likeUsers.map((user, index) => (
// // // // // // //                                 <ListItem key={index}>
// // // // // // //                                     <ListItemText primary={user} />
// // // // // // //                                 </ListItem>
// // // // // // //                             ))}
// // // // // // //                         </List>
// // // // // // //                     ) : (
// // // // // // //                         <Typography>No likes yet.</Typography>
// // // // // // //                     )}
// // // // // // //                     <Button onClick={() => setShowLikes(false)}>Close</Button>
// // // // // // //                 </DialogContent>
// // // // // // //             </Dialog>
// // // // // // //         </Card>
// // // // // // //     );
// // // // // // // }

// // // // // // // const styles = {
// // // // // // //     card: {
// // // // // // //         maxWidth: 500,
// // // // // // //         margin: "20px auto",
// // // // // // //         borderRadius: "15px",
// // // // // // //         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // // //         backgroundColor: "#fff",
// // // // // // //     },
// // // // // // //     header: {
// // // // // // //         display: "flex",
// // // // // // //         justifyContent: "center",
// // // // // // //         alignItems: "center",
// // // // // // //         paddingBottom: "0",
// // // // // // //     },
// // // // // // //     title: {
// // // // // // //         fontWeight: "bold",
// // // // // // //         color: "#3E3E3E",
// // // // // // //     },
// // // // // // //     image: {
// // // // // // //         width: "100%",
// // // // // // //         height: "250px",
// // // // // // //         objectFit: "cover",
// // // // // // //     },
// // // // // // //     description: {
// // // // // // //         color: "#5A5A5A",
// // // // // // //         textAlign: "center",
// // // // // // //     },
// // // // // // //     uploader: {
// // // // // // //         color: "#8a4b30",
// // // // // // //         textAlign: "center",
// // // // // // //         marginTop: "8px",
// // // // // // //     },
// // // // // // //     actions: {
// // // // // // //         display: "flex",
// // // // // // //         justifyContent: "space-between",
// // // // // // //         padding: "15px",
// // // // // // //     },
// // // // // // //     icon: {
// // // // // // //         fontSize: "24px",
// // // // // // //         padding: "12px",
// // // // // // //     }
// // // // // // // };

// // // // // // // export default RecipeCard;

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import {
// // // // // //     Card, CardContent, Typography, CardMedia, IconButton, Box,
// // // // // //     Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
// // // // // // } from '@mui/material';
// // // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // // // // // import ShareIcon from '@mui/icons-material/Share';
// // // // // // import PeopleIcon from '@mui/icons-material/People';
// // // // // // import CommentSection from './Comments';

// // // // // // function RecipeCard({ recipe, uploader }) {
// // // // // //     const userId = localStorage.getItem('userId');
// // // // // //     const token = localStorage.getItem('token');
// // // // // //     const [likes, setLikes] = useState(recipe.likes || 0);
// // // // // //     const [liked, setLiked] = useState(false);
// // // // // //     const [showLikes, setShowLikes] = useState(false);
// // // // // //     const [likeUsers, setLikeUsers] = useState([]);
// // // // // //     const [showComments, setShowComments] = useState(false);

// // // // // //     useEffect(() => {
// // // // // //         if (!userId || !recipe._id) return;
// // // // // //         const checkLikeStatus = async () => {
// // // // // //             try {
// // // // // //                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// // // // // //                 if (!response.ok) {
// // // // // //                     const errorText = await response.text();
// // // // // //                     console.warn('🔍 Like status fetch failed:', response.status, errorText);
// // // // // //                     return;
// // // // // //                 }
// // // // // //                 const data = await response.json();
// // // // // //                 setLiked(data.liked);
// // // // // //             } catch (error) {
// // // // // //                 console.error('❌ Error checking like status:', error);
// // // // // //             }
// // // // // //         };
// // // // // //         checkLikeStatus();
// // // // // //     }, [recipe._id, userId]);

// // // // // //     const handleLike = async () => {
// // // // // //         if (!userId || !token) {
// // // // // //             alert('❌ You must be logged in to like a recipe.');
// // // // // //             return;
// // // // // //         }

// // // // // //         try {
// // // // // //             const response = await fetch('http://localhost:5000/api/likes', {
// // // // // //                 method: 'POST',
// // // // // //                 headers: {
// // // // // //                     'Content-Type': 'application/json',
// // // // // //                     'Authorization': `Bearer ${token}`
// // // // // //                 },
// // // // // //                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
// // // // // //             });

// // // // // //             const data = await response.json();

// // // // // //             if (response.ok) {
// // // // // //                 setLikes(data.liked ? likes + 1 : likes - 1);
// // // // // //                 setLiked(data.liked);
// // // // // //             } else {
// // // // // //                 alert(`❌ ${data.message}`);
// // // // // //             }
// // // // // //         } catch (error) {
// // // // // //             alert('❌ Failed to like/unlike recipe.');
// // // // // //         }
// // // // // //     };

// // // // // //     const handleShowLikes = async () => {
// // // // // //         try {
// // // // // //             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// // // // // //             if (!response.ok) throw new Error('Failed to fetch like users');
// // // // // //             const data = await response.json();
// // // // // //             setLikeUsers(data.users || []);
// // // // // //             setShowLikes(true);
// // // // // //         } catch (error) {
// // // // // //             console.error('❌ Failed to fetch liked users:', error);
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <Card sx={styles.card}>
// // // // // //             <CardContent sx={styles.header}>
// // // // // //                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
// // // // // //             </CardContent>

// // // // // //             <CardMedia
// // // // // //                 component="img"
// // // // // //                 image={`http://localhost:5000${recipe.imageUrl}`}
// // // // // //                 alt={recipe.title}
// // // // // //                 sx={styles.image}
// // // // // //                 onError={(e) => {
// // // // // //                     e.target.onerror = null;
// // // // // //                     e.target.src = ""; // ✅ אם אין תמונה, לא מציגים כלום
// // // // // //                 }}
// // // // // //             />

// // // // // //             <CardContent>
// // // // // //                 <Typography variant="body2" sx={styles.description}>{recipe.description}</Typography>
// // // // // //                 <Typography variant="subtitle2" sx={styles.uploader}>
// // // // // //                     <span role="img" aria-label="chef">👨‍🍳</span> Uploaded by: <strong>{uploader}</strong>
// // // // // //                 </Typography>
// // // // // //             </CardContent>

// // // // // //             <Box sx={styles.actions}>
// // // // // //                 <IconButton onClick={handleLike} sx={styles.icon}>
// // // // // //                     <FavoriteIcon sx={{ color: liked ? 'red' : 'transparent', stroke: 'black', strokeWidth: 2 }} /> {likes}
// // // // // //                 </IconButton>

// // // // // //                 <IconButton onClick={handleShowLikes} sx={styles.icon}>
// // // // // //                     <PeopleIcon /> View Likes
// // // // // //                 </IconButton>

// // // // // //                 <IconButton sx={styles.icon} onClick={() => setShowComments(!showComments)}>
// // // // // //                     <ChatBubbleOutlineIcon /> Comments
// // // // // //                 </IconButton>

// // // // // //                 <IconButton sx={styles.icon}><ShareIcon /> Share</IconButton>
// // // // // //             </Box>

// // // // // //             {showComments && recipe._id && <CommentSection recipeId={recipe._id} />}

// // // // // //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // // // // //                 <DialogTitle>People who liked this recipe</DialogTitle>
// // // // // //                 <DialogContent>
// // // // // //                     {likeUsers.length > 0 ? (
// // // // // //                         <List>
// // // // // //                             {likeUsers.map((user, index) => (
// // // // // //                                 <ListItem key={index}>
// // // // // //                                     <ListItemText primary={user} />
// // // // // //                                 </ListItem>
// // // // // //                             ))}
// // // // // //                         </List>
// // // // // //                     ) : (
// // // // // //                         <Typography>No likes yet.</Typography>
// // // // // //                     )}
// // // // // //                     <Button onClick={() => setShowLikes(false)}>Close</Button>
// // // // // //                 </DialogContent>
// // // // // //             </Dialog>
// // // // // //         </Card>
// // // // // //     );
// // // // // // }

// // // // // // const styles = {
// // // // // //     card: {
// // // // // //         maxWidth: 500,
// // // // // //         margin: "20px auto",
// // // // // //         borderRadius: "15px",
// // // // // //         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
// // // // // //         backgroundColor: "#fff",
// // // // // //     },
// // // // // //     header: {
// // // // // //         display: "flex",
// // // // // //         justifyContent: "center",
// // // // // //         alignItems: "center",
// // // // // //         paddingBottom: "0",
// // // // // //     },
// // // // // //     title: {
// // // // // //         fontWeight: "bold",
// // // // // //         color: "#3E3E3E",
// // // // // //     },
// // // // // //     image: {
// // // // // //         width: "100%",
// // // // // //         height: "250px",
// // // // // //         objectFit: "cover",
// // // // // //     },
// // // // // //     description: {
// // // // // //         color: "#5A5A5A",
// // // // // //         textAlign: "center",
// // // // // //     },
// // // // // //     uploader: {
// // // // // //         color: "#8a4b30",
// // // // // //         textAlign: "center",
// // // // // //         marginTop: "8px",
// // // // // //     },
// // // // // //     actions: {
// // // // // //         display: "flex",
// // // // // //         justifyContent: "space-between",
// // // // // //         padding: "15px",
// // // // // //     },
// // // // // //     icon: {
// // // // // //         fontSize: "24px",
// // // // // //         padding: "12px",
// // // // // //     }
// // // // // // };

// // // // // // export default RecipeCard;

// // // // // import React, { useState, useEffect } from 'react';
// // // // // import {
// // // // //     Card, CardContent, CardMedia, Typography, IconButton, Box, Dialog, DialogTitle,
// // // // //     DialogContent, List, ListItem, ListItemText, Button
// // // // // } from '@mui/material';
// // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // import PeopleIcon from '@mui/icons-material/People';
// // // // // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // // // // import ShareIcon from '@mui/icons-material/Share';
// // // // // import CommentSection from './Comments';

// // // // // function RecipeCard({ recipe, uploader }) {
// // // // //     const userId = localStorage.getItem('userId');
// // // // //     const token = localStorage.getItem('token');
// // // // //     const [likes, setLikes] = useState(recipe.likes || 0);
// // // // //     const [liked, setLiked] = useState(false);
// // // // //     const [showLikes, setShowLikes] = useState(false);
// // // // //     const [likeUsers, setLikeUsers] = useState([]);
// // // // //     const [showComments, setShowComments] = useState(false);

// // // // //     useEffect(() => {
// // // // //         if (!userId) return;
// // // // //         const checkLikeStatus = async () => {
// // // // //             try {
// // // // //                 const res = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// // // // //                 const data = await res.json();
// // // // //                 if (res.ok) setLiked(data.liked);
// // // // //             } catch (err) {
// // // // //                 console.error("❌ Error checking like status:", err);
// // // // //             }
// // // // //         };
// // // // //         checkLikeStatus();
// // // // //     }, [recipe._id, userId]);

// // // // //     const handleLike = async () => {
// // // // //         if (!userId || !token) {
// // // // //             alert("❌ You must be logged in to like a recipe.");
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             const res = await fetch('http://localhost:5000/api/likes', {
// // // // //                 method: 'POST',
// // // // //                 headers: {
// // // // //                     'Content-Type': 'application/json',
// // // // //                     'Authorization': `Bearer ${token}`
// // // // //                 },
// // // // //                 body: JSON.stringify({ recipe: recipe._id, user: userId })
// // // // //             });

// // // // //             const data = await res.json();
// // // // //             if (res.ok) {
// // // // //                 setLikes(data.liked ? likes + 1 : likes - 1);
// // // // //                 setLiked(data.liked);
// // // // //             }
// // // // //         } catch (err) {
// // // // //             alert("❌ Failed to like/unlike recipe.");
// // // // //         }
// // // // //     };

// // // // //     const handleShowLikes = async () => {
// // // // //         try {
// // // // //             const res = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// // // // //             const data = await res.json();
// // // // //             setLikeUsers(data.users || []);
// // // // //             setShowLikes(true);
// // // // //         } catch (err) {
// // // // //             console.error("❌ Failed to fetch liked users:", err);
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <Card sx={{
// // // // //             borderRadius: 2,
// // // // //             boxShadow: 4,
// // // // //             overflow: 'hidden',
// // // // //             bgcolor: '#fff'
// // // // //         }}>
// // // // //             <CardMedia
// // // // //                 component="img"
// // // // //                 image={`http://localhost:5000${recipe.imageUrl}`}
// // // // //                 alt={recipe.title}
// // // // //                 sx={{ height: 400, objectFit: 'cover' }}
// // // // //                 onError={(e) => {
// // // // //                     e.target.onerror = null;
// // // // //                     e.target.src = '';
// // // // //                 }}
// // // // //             />
// // // // //             <CardContent>
// // // // //                 <Typography variant="h6" fontWeight="bold" gutterBottom>
// // // // //                     {recipe.title}
// // // // //                 </Typography>
// // // // //                 <Typography variant="body2" color="text.secondary" gutterBottom>
// // // // //                     {recipe.description}
// // // // //                 </Typography>
// // // // //                 <Typography variant="caption" color="text.secondary">
// // // // //                     👨‍🍳 Uploaded by: <strong>{uploader}</strong>
// // // // //                 </Typography>

// // // // //                 <Box display="flex" justifyContent="space-between" mt={2}>
// // // // //                     <IconButton onClick={handleLike}>
// // // // //                         <FavoriteIcon sx={{
// // // // //                             color: liked ? 'red' : 'inherit'
// // // // //                         }} />
// // // // //                         <Typography variant="body2" ml={0.5}>{likes}</Typography>
// // // // //                     </IconButton>

// // // // //                     <IconButton onClick={handleShowLikes}>
// // // // //                         <PeopleIcon />
// // // // //                     </IconButton>

// // // // //                     <IconButton onClick={() => setShowComments(!showComments)}>
// // // // //                         <ChatBubbleOutlineIcon />
// // // // //                     </IconButton>

// // // // //                     <IconButton>
// // // // //                         <ShareIcon />
// // // // //                     </IconButton>
// // // // //                 </Box>

// // // // //                 {showComments && <CommentSection recipeId={recipe._id} />}
// // // // //             </CardContent>

// // // // //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // // // //                 <DialogTitle>People who liked this recipe</DialogTitle>
// // // // //                 <DialogContent>
// // // // //                     {likeUsers.length > 0 ? (
// // // // //                         <List>
// // // // //                             {likeUsers.map((user, idx) => (
// // // // //                                 <ListItem key={idx}>
// // // // //                                     <ListItemText primary={user} />
// // // // //                                 </ListItem>
// // // // //                             ))}
// // // // //                         </List>
// // // // //                     ) : (
// // // // //                         <Typography>No likes yet.</Typography>
// // // // //                     )}
// // // // //                     <Button onClick={() => setShowLikes(false)} sx={{ mt: 2 }}>Close</Button>
// // // // //                 </DialogContent>
// // // // //             </Dialog>
// // // // //         </Card>
// // // // //     );
// // // // // }

// // // // // export default RecipeCard;

// // // // import React, { useState, useEffect } from 'react';
// // // // import {
// // // //     Card, CardContent, Typography, CardMedia, IconButton, Box,
// // // //     Avatar, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
// // // // } from '@mui/material';
// // // // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // // // import ShareIcon from '@mui/icons-material/Share';
// // // // import PeopleIcon from '@mui/icons-material/People';
// // // // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // // // import GroupsIcon from '@mui/icons-material/Groups';
// // // // import CommentSection from './Comments';

// // // // function RecipeCard({ recipe, uploader }) {
// // // //     const userId = localStorage.getItem('userId');
// // // //     const token = localStorage.getItem('token');
// // // //     const [likes, setLikes] = useState(recipe.likes || 0);
// // // //     const [liked, setLiked] = useState(false);
// // // //     const [showLikes, setShowLikes] = useState(false);
// // // //     const [likeUsers, setLikeUsers] = useState([]);
// // // //     const [showComments, setShowComments] = useState(false);

// // // //     useEffect(() => {
// // // //         if (!userId) return;
// // // //         const checkLikeStatus = async () => {
// // // //             try {
// // // //                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// // // //                 if (!response.ok) return;
// // // //                 const data = await response.json();
// // // //                 setLiked(data.liked);
// // // //             } catch (error) {
// // // //                 console.error('Error checking like status:', error);
// // // //             }
// // // //         };
// // // //         checkLikeStatus();
// // // //     }, [recipe._id, userId]);

// // // //     const handleLike = async () => {
// // // //         if (!userId || !token) {
// // // //             alert('❌ You must be logged in to like a recipe.');
// // // //             return;
// // // //         }

// // // //         try {
// // // //             const response = await fetch('http://localhost:5000/api/likes', {
// // // //                 method: 'POST',
// // // //                 headers: {
// // // //                     'Content-Type': 'application/json',
// // // //                     'Authorization': `Bearer ${token}`
// // // //                 },
// // // //                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
// // // //             });

// // // //             const data = await response.json();

// // // //             if (response.ok) {
// // // //                 setLikes(data.liked ? likes + 1 : likes - 1);
// // // //                 setLiked(data.liked);
// // // //             } else {
// // // //                 alert(`❌ ${data.message}`);
// // // //             }
// // // //         } catch (error) {
// // // //             alert('❌ Failed to like/unlike recipe.');
// // // //         }
// // // //     };

// // // //     const handleShowLikes = async () => {
// // // //         try {
// // // //             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// // // //             const data = await response.json();
// // // //             setLikeUsers(data.users || []);
// // // //             setShowLikes(true);
// // // //         } catch (error) {
// // // //             console.error('❌ Failed to fetch liked users:', error);
// // // //         }
// // // //     };

// // // //     return (
// // // //         <Card sx={styles.card}>
// // // //             <CardMedia
// // // //                 component="img"
// // // //                 image={`http://localhost:5000${recipe.imageUrl}`}
// // // //                 alt={recipe.title}
// // // //                 sx={styles.image}
// // // //                 onError={(e) => {
// // // //                     e.target.onerror = null;
// // // //                     e.target.src = '';
// // // //                 }}
// // // //             />

// // // //             <CardContent>
// // // //                 <Box sx={styles.uploaderBox}>
// // // //                     <Avatar sx={{ bgcolor: 'linear-gradient(45deg, #FF5722, #FFC107)' }} />
// // // //                     <Box sx={{ ml: 1 }}>
// // // //                         <Typography variant="subtitle2" fontWeight="bold">{uploader}</Typography>
// // // //                         <Typography variant="caption" color="text.secondary">
// // // //                             {new Date(recipe.createdAt).toLocaleDateString('en-US', {
// // // //                                 month: 'short',
// // // //                                 day: 'numeric',
// // // //                                 year: 'numeric'
// // // //                             })}
// // // //                         </Typography>
// // // //                     </Box>
// // // //                 </Box>

// // // //                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
// // // //                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
// // // //                     {recipe.description}
// // // //                 </Typography>

// // // //                 <Box sx={styles.recipeInfo}>
// // // //                     <Box sx={styles.infoItem}>
// // // //                         <AccessTimeIcon sx={{ fontSize: 16 }} />&nbsp;
// // // //                         <Typography variant="caption">{recipe.cookingTime || 25} mins</Typography>
// // // //                     </Box>
// // // //                     <Box sx={styles.infoItem}>
// // // //                         <GroupsIcon sx={{ fontSize: 16 }} />&nbsp;
// // // //                         <Typography variant="caption">{recipe.servings || 4} servings</Typography>
// // // //                     </Box>
// // // //                 </Box>

// // // //                 <Box sx={styles.actions}>
// // // //                     <IconButton onClick={handleLike}>
// // // //                         {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
// // // //                     </IconButton>
// // // //                     <Typography variant="caption">{likes}</Typography>

// // // //                     <IconButton onClick={handleShowLikes}>
// // // //                         <PeopleIcon />
// // // //                     </IconButton>

// // // //                     <IconButton onClick={() => setShowComments(!showComments)}>
// // // //                         <ChatBubbleOutlineIcon />
// // // //                     </IconButton>

// // // //                     <IconButton>
// // // //                         <ShareIcon />
// // // //                     </IconButton>
// // // //                 </Box>

// // // //                 {showComments && <CommentSection recipeId={recipe._id} />}
// // // //             </CardContent>

// // // //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // // //                 <DialogTitle>People who liked this recipe</DialogTitle>
// // // //                 <DialogContent>
// // // //                     {likeUsers.length > 0 ? (
// // // //                         <List>
// // // //                             {likeUsers.map((user, index) => (
// // // //                                 <ListItem key={index}>
// // // //                                     <ListItemText primary={user} />
// // // //                                 </ListItem>
// // // //                             ))}
// // // //                         </List>
// // // //                     ) : (
// // // //                         <Typography>No likes yet.</Typography>
// // // //                     )}
// // // //                     <Button onClick={() => setShowLikes(false)}>Close</Button>
// // // //                 </DialogContent>
// // // //             </Dialog>
// // // //         </Card>
// // // //     );
// // // // }

// // // // // const styles = {
// // // // //     card: {
// // // // //         maxWidth: 600,
// // // // //         margin: '40px auto',
// // // // //         borderRadius: '15px',
// // // // //         overflow: 'hidden',
// // // // //         boxShadow: '0px 4px 20px rgba(0,0,0,0.1)',
// // // // //     },
// // // // //     image: {
// // // // //         width: '100%',
// // // // //         height: 350,
// // // // //         objectFit: 'cover',
// // // // //     },
// // // // //     uploaderBox: {
// // // // //         display: 'flex',
// // // // //         alignItems: 'center',
// // // // //         marginBottom: 1,
// // // // //     },
// // // // //     title: {
// // // // //         fontWeight: 'bold',
// // // // //         marginTop: 1,
// // // // //     },
// // // // //     recipeInfo: {
// // // // //         display: 'flex',
// // // // //         gap: 2,
// // // // //         marginTop: 1,
// // // // //         marginBottom: 1,
// // // // //     },
// // // // //     infoItem: {
// // // // //         display: 'flex',
// // // // //         alignItems: 'center',
// // // // //         gap: 0.5,
// // // // //     },
// // // // //     actions: {
// // // // //         display: 'flex',
// // // // //         alignItems: 'center',
// // // // //         gap: 1.5,
// // // // //         marginTop: 1,
// // // // //     }
// // // // // };

// // // // const styles = {
// // // //     card: {
// // // //         width: 500,                    // ✅ רוחב אחיד
// // // //         height: 600,                   // ✅ גובה אחיד
// // // //         margin: "20px auto",          // ✅ מרווח קטן יותר
// // // //         borderRadius: "15px",
// // // //         overflow: "hidden",
// // // //         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
// // // //         backgroundColor: "#fff",
// // // //         display: "flex",
// // // //         flexDirection: "column",
// // // //         justifyContent: "space-between"
// // // //     },
// // // //     image: {
// // // //         width: "100%",
// // // //         height: 300,                  // ✅ גובה קבוע לתמונה
// // // //         objectFit: "cover",
// // // //     },
// // // //     header: {
// // // //         display: "flex",
// // // //         justifyContent: "center",
// // // //         alignItems: "center",
// // // //         paddingBottom: 0,
// // // //     },
// // // //     title: {
// // // //         fontWeight: "bold",
// // // //         color: "#3E3E3E",
// // // //     },
// // // //     description: {
// // // //         color: "#5A5A5A",
// // // //         textAlign: "center",
// // // //         marginTop: 8,
// // // //     },
// // // //     uploader: {
// // // //         color: "#8a4b30",
// // // //         textAlign: "center",
// // // //         fontSize: 14,
// // // //         marginTop: 4,
// // // //     },
// // // //     actions: {
// // // //         display: "flex",
// // // //         justifyContent: "space-between",  // כמו קודם
// // // //         padding: "10px 15px",             // פחות ריווח
// // // //         alignItems: "center",
// // // //     },

// // // //     icon: {
// // // //         fontSize: "20px",
// // // //         padding: "6px",
// // // //     }

// // // // };

// // // // export default RecipeCard;

// // // import React, { useState, useEffect } from 'react';
// // // import {
// // //     Card, CardContent, Typography, CardMedia, IconButton, Box,
// // //     Avatar, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
// // // } from '@mui/material';
// // // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // // import ShareIcon from '@mui/icons-material/Share';
// // // import PeopleIcon from '@mui/icons-material/People';
// // // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // // import GroupsIcon from '@mui/icons-material/Groups';
// // // import CommentSection from './Comments';

// // // function RecipeCard({ recipe, uploader }) {
// // //     const userId = localStorage.getItem('userId');
// // //     const token = localStorage.getItem('token');
// // //     const [likes, setLikes] = useState(recipe.likes || 0);
// // //     const [liked, setLiked] = useState(false);
// // //     const [showLikes, setShowLikes] = useState(false);
// // //     const [likeUsers, setLikeUsers] = useState([]);
// // //     const [showComments, setShowComments] = useState(false);

// // //     useEffect(() => {
// // //         if (!userId) return;
// // //         const checkLikeStatus = async () => {
// // //             try {
// // //                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// // //                 if (!response.ok) return;
// // //                 const data = await response.json();
// // //                 setLiked(data.liked);
// // //             } catch (error) {
// // //                 console.error('Error checking like status:', error);
// // //             }
// // //         };
// // //         checkLikeStatus();
// // //     }, [recipe._id, userId]);

// // //     const handleLike = async () => {
// // //         if (!userId || !token) {
// // //             alert('❌ You must be logged in to like a recipe.');
// // //             return;
// // //         }

// // //         try {
// // //             const response = await fetch('http://localhost:5000/api/likes', {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Content-Type': 'application/json',
// // //                     'Authorization': `Bearer ${token}`
// // //                 },
// // //                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
// // //             });

// // //             const data = await response.json();

// // //             if (response.ok) {
// // //                 setLikes(data.liked ? likes + 1 : likes - 1);
// // //                 setLiked(data.liked);
// // //             } else {
// // //                 alert(`❌ ${data.message}`);
// // //             }
// // //         } catch (error) {
// // //             alert('❌ Failed to like/unlike recipe.');
// // //         }
// // //     };

// // //     const handleShowLikes = async () => {
// // //         try {
// // //             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// // //             const data = await response.json();
// // //             setLikeUsers(data.users || []);
// // //             setShowLikes(true);
// // //         } catch (error) {
// // //             console.error('❌ Failed to fetch liked users:', error);
// // //         }
// // //     };

// // //     return (
// // //         <Card sx={styles.card}>
// // //             <CardMedia
// // //                 component="img"
// // //                 image={`http://localhost:5000${recipe.imageUrl}`}
// // //                 alt={recipe.title}
// // //                 sx={styles.image}
// // //                 onError={(e) => {
// // //                     e.target.onerror = null;
// // //                     e.target.src = '';
// // //                 }}
// // //             />

// // //             <CardContent>
// // //                 <Box sx={styles.header}>
// // //                     <Avatar sx={{ width: 36, height: 36 }} />
// // //                     <Box sx={{ ml: 1 }}>
// // //                         <Typography fontSize="14px" fontWeight="bold">{uploader}</Typography>
// // //                         <Typography fontSize="12px" color="text.secondary">
// // //                             {new Date(recipe.createdAt).toLocaleDateString('en-US', {
// // //                                 month: 'short',
// // //                                 day: 'numeric',
// // //                                 year: 'numeric'
// // //                             })}
// // //                         </Typography>
// // //                     </Box>
// // //                 </Box>

// // //                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
// // //                 <Typography variant="body2" color="text.secondary" sx={styles.description}>
// // //                     {recipe.description}
// // //                 </Typography>

// // //                 <Box sx={styles.recipeInfo}>
// // //                     <Box sx={styles.infoItem}>
// // //                         <AccessTimeIcon sx={{ fontSize: 16 }} />
// // //                         <Typography variant="caption">{recipe.cookingTime || 25} mins</Typography>
// // //                     </Box>
// // //                     <Box sx={styles.infoItem}>
// // //                         <GroupsIcon sx={{ fontSize: 16 }} />
// // //                         <Typography variant="caption">{recipe.servings || 4} servings</Typography>
// // //                     </Box>
// // //                 </Box>

// // //                 <Box sx={styles.actions}>
// // //                     <Box sx={styles.actionItem}>
// // //                         <IconButton onClick={handleLike}>
// // //                             {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
// // //                         </IconButton>
// // //                         <Typography fontSize="13px">{likes}</Typography>
// // //                     </Box>

// // //                     <Box sx={styles.actionItem}>
// // //                         <IconButton onClick={handleShowLikes}>
// // //                             <PeopleIcon />
// // //                         </IconButton>
// // //                     </Box>

// // //                     <Box sx={styles.actionItem}>
// // //                         <IconButton onClick={() => setShowComments(!showComments)}>
// // //                             <ChatBubbleOutlineIcon />
// // //                         </IconButton>
// // //                     </Box>

// // //                     <Box sx={styles.actionItem}>
// // //                         <IconButton>
// // //                             <ShareIcon />
// // //                         </IconButton>
// // //                     </Box>
// // //                 </Box>

// // //                 {showComments && <CommentSection recipeId={recipe._id} />}
// // //             </CardContent>

// // //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// // //                 <DialogTitle>People who liked this recipe</DialogTitle>
// // //                 <DialogContent>
// // //                     {likeUsers.length > 0 ? (
// // //                         <List>
// // //                             {likeUsers.map((user, index) => (
// // //                                 <ListItem key={index}>
// // //                                     <ListItemText primary={user} />
// // //                                 </ListItem>
// // //                             ))}
// // //                         </List>
// // //                     ) : (
// // //                         <Typography>No likes yet.</Typography>
// // //                     )}
// // //                     <Button onClick={() => setShowLikes(false)}>Close</Button>
// // //                 </DialogContent>
// // //             </Dialog>
// // //         </Card>
// // //     );
// // // }

// // // const styles = {
// // //     card: {
// // //         width: 500,
// // //         height: 'auto',
// // //         margin: "0 auto",
// // //         borderRadius: "12px",
// // //         boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
// // //         overflow: "hidden",
// // //         backgroundColor: "#fff",
// // //     },
// // //     image: {
// // //         width: "100%",
// // //         height: 300,
// // //         objectFit: "cover",
// // //     },
// // //     header: {
// // //         display: "flex",
// // //         alignItems: "center",
// // //         gap: 1,
// // //         mb: 1,
// // //     },
// // //     title: {
// // //         fontWeight: "bold",
// // //         mt: 1,
// // //         mb: 1,
// // //     },
// // //     description: {
// // //         mb: 2,
// // //     },
// // //     recipeInfo: {
// // //         display: "flex",
// // //         gap: 2,
// // //         mb: 1,
// // //     },
// // //     infoItem: {
// // //         display: "flex",
// // //         alignItems: "center",
// // //         gap: 0.5,
// // //     },
// // //     actions: {
// // //         display: "flex",
// // //         justifyContent: "space-around",
// // //         alignItems: "center",
// // //         mt: 1,
// // //     },
// // //     actionItem: {
// // //         display: "flex",
// // //         alignItems: "center",
// // //         gap: 0.5,
// // //     },
// // // };

// // // export default RecipeCard;

// // // src/components/RecipeCard.js
// // import React, { useState, useEffect } from 'react';
// // import {
// //     Card, CardContent, Typography, CardMedia, IconButton, Box, Avatar,
// //     Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
// // } from '@mui/material';
// // import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// // import ShareIcon from '@mui/icons-material/Share';
// // import PeopleIcon from '@mui/icons-material/People';
// // import AccessTimeIcon from '@mui/icons-material/AccessTime';
// // import GroupsIcon from '@mui/icons-material/Groups';
// // import CommentSection from './Comments';

// // function RecipeCard({ recipe, uploader }) {
// //     const userId = localStorage.getItem('userId');
// //     const token = localStorage.getItem('token');
// //     const [likes, setLikes] = useState(recipe.likes || 0);
// //     const [liked, setLiked] = useState(false);
// //     const [showLikes, setShowLikes] = useState(false);
// //     const [likeUsers, setLikeUsers] = useState([]);
// //     const [showComments, setShowComments] = useState(false);
// //     const [commentCount, setCommentCount] = useState(recipe.comments?.length || 0);

// //     useEffect(() => {
// //         if (!userId) return;
// //         const checkLikeStatus = async () => {
// //             try {
// //                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
// //                 if (!response.ok) return;
// //                 const data = await response.json();
// //                 setLiked(data.liked);
// //             } catch (error) {
// //                 console.error('Error checking like status:', error);
// //             }
// //         };
// //         checkLikeStatus();
// //     }, [recipe._id, userId]);

// //     const handleLike = async () => {
// //         if (!userId || !token) {
// //             alert('❌ You must be logged in to like a recipe.');
// //             return;
// //         }

// //         try {
// //             const response = await fetch('http://localhost:5000/api/likes', {
// //                 method: 'POST',
// //                 headers: {
// //                     'Content-Type': 'application/json',
// //                     'Authorization': `Bearer ${token}`
// //                 },
// //                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
// //             });

// //             const data = await response.json();

// //             if (response.ok) {
// //                 setLikes(data.liked ? likes + 1 : likes - 1);
// //                 setLiked(data.liked);
// //             } else {
// //                 alert(`❌ ${data.message}`);
// //             }
// //         } catch (error) {
// //             alert('❌ Failed to like/unlike recipe.');
// //         }
// //     };

// //     const handleShowLikes = async () => {
// //         try {
// //             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
// //             const data = await response.json();
// //             setLikeUsers(data.users || []);
// //             setShowLikes(true);
// //         } catch (error) {
// //             console.error('❌ Failed to fetch liked users:', error);
// //         }
// //     };

// //     return (
// //         <Card sx={styles.card}>
// //             <CardMedia
// //                 component="img"
// //                 image={`http://localhost:5000${recipe.imageUrl}`}
// //                 alt={recipe.title}
// //                 sx={styles.image}
// //                 onError={(e) => {
// //                     e.target.onerror = null;
// //                     e.target.src = '';
// //                 }}
// //             />

// //             <CardContent>
// //                 <Box sx={styles.uploaderBox}>
// //                     <Avatar sx={{ width: 32, height: 32, bgcolor: '#ccc' }} />
// //                     <Box sx={{ ml: 1 }}>
// //                         <Typography variant="subtitle2" fontWeight="bold">{uploader}</Typography>
// //                         <Typography variant="caption" color="text.secondary">
// //                             {new Date(recipe.createdAt).toLocaleDateString('en-US', {
// //                                 month: 'short',
// //                                 day: 'numeric',
// //                                 year: 'numeric'
// //                             })}
// //                         </Typography>
// //                     </Box>
// //                 </Box>

// //                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
// //                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
// //                     {recipe.description}
// //                 </Typography>

// //                 <Box sx={styles.recipeInfo}>
// //                     <Box sx={styles.infoItem}>
// //                         <AccessTimeIcon sx={{ fontSize: 16 }} />&nbsp;
// //                         <Typography variant="caption">{recipe.cookingTime || 25} mins</Typography>
// //                     </Box>
// //                     <Box sx={styles.infoItem}>
// //                         <GroupsIcon sx={{ fontSize: 16 }} />&nbsp;
// //                         <Typography variant="caption">{recipe.servings || 4} servings</Typography>
// //                     </Box>
// //                 </Box>

// //                 <Box sx={styles.actions}>
// //                     <Box sx={styles.iconWithText}>
// //                         <IconButton onClick={handleLike} sx={styles.iconButton}>
// //                             {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
// //                         </IconButton>
// //                         <Typography variant="caption">{likes}</Typography>
// //                     </Box>

// //                     <Box sx={styles.iconWithText}>
// //                         <IconButton onClick={() => setShowComments(!showComments)} sx={styles.iconButton}>
// //                             <ChatBubbleOutlineIcon />
// //                         </IconButton>
// //                         <Typography variant="caption">{commentCount}</Typography>
// //                     </Box>
// //                 </Box>

// //                 {showComments && <CommentSection recipeId={recipe._id} />}
// //             </CardContent>

// //             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
// //                 <DialogTitle>People who liked this recipe</DialogTitle>
// //                 <DialogContent>
// //                     {likeUsers.length > 0 ? (
// //                         <List>
// //                             {likeUsers.map((user, index) => (
// //                                 <ListItem key={index}>
// //                                     <ListItemText primary={user} />
// //                                 </ListItem>
// //                             ))}
// //                         </List>
// //                     ) : (
// //                         <Typography>No likes yet.</Typography>
// //                     )}
// //                     <Button onClick={() => setShowLikes(false)}>Close</Button>
// //                 </DialogContent>
// //             </Dialog>
// //         </Card>
// //     );
// // }

// // const styles = {
// //     card: {
// //         width: 500,
// //         margin: "30px auto 10px",
// //         borderRadius: "15px",
// //         overflow: "hidden",
// //         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
// //         backgroundColor: "#fff",
// //         display: "flex",
// //         flexDirection: "column",
// //         justifyContent: "space-between"
// //     },
// //     image: {
// //         width: "100%",
// //         height: 300,
// //         objectFit: "cover",
// //     },
// //     uploaderBox: {
// //         display: 'flex',
// //         alignItems: 'center',
// //         marginBottom: 1,
// //     },
// //     title: {
// //         fontWeight: 'bold',
// //         marginTop: 1,
// //     },
// //     recipeInfo: {
// //         display: 'flex',
// //         gap: 2,
// //         marginTop: 1,
// //         marginBottom: 1,
// //     },
// //     infoItem: {
// //         display: 'flex',
// //         alignItems: 'center',
// //         gap: 0.5,
// //     },
// //     actions: {
// //         display: 'flex',
// //         alignItems: 'center',
// //         gap: 3,
// //         marginTop: 1,
// //         marginBottom: 1,
// //         paddingLeft: 1,
// //     },
// //     iconWithText: {
// //         display: 'flex',
// //         alignItems: 'center',
// //         gap: 0.5,
// //     },
// //     iconButton: {
// //         padding: '6px',
// //     }
// // };

// // export default RecipeCard;

// // src/components/RecipeCard.js
// import React, { useState, useEffect } from 'react';
// import {
//     Card, CardContent, Typography, CardMedia, IconButton, Box,
//     Avatar, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
// } from '@mui/material';
// import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import ShareIcon from '@mui/icons-material/Share';
// import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
// import AccessTimeIcon from '@mui/icons-material/AccessTime';
// import GroupsIcon from '@mui/icons-material/Groups';
// import CommentSection from './Comments';

// function RecipeCard({ recipe, uploader }) {
//     const userId = localStorage.getItem('userId');
//     const token = localStorage.getItem('token');
//     const [likes, setLikes] = useState(recipe.likes || 0);
//     const [liked, setLiked] = useState(false);
//     const [showLikes, setShowLikes] = useState(false);
//     const [likeUsers, setLikeUsers] = useState([]);
//     const [showComments, setShowComments] = useState(false);
//     const [commentsCount, setCommentsCount] = useState(0);

//     useEffect(() => {
//         if (!userId) return;
//         const checkLikeStatus = async () => {
//             try {
//                 const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
//                 if (!response.ok) return;
//                 const data = await response.json();
//                 setLiked(data.liked);
//             } catch (error) {
//                 console.error('Error checking like status:', error);
//             }
//         };
//         checkLikeStatus();
//     }, [recipe._id, userId]);

//     useEffect(() => {
//         // Fetch comment count
//         const fetchComments = async () => {
//             try {
//                 const res = await fetch(`http://localhost:5000/api/comments/${recipe._id}`);
//                 const data = await res.json();
//                 setCommentsCount(data.length);
//             } catch (err) {
//                 console.error("Error loading comment count");
//             }
//         };
//         fetchComments();
//     }, [recipe._id]);

//     const handleLike = async () => {
//         if (!userId || !token) {
//             alert('❌ You must be logged in to like a recipe.');
//             return;
//         }

//         try {
//             const response = await fetch('http://localhost:5000/api/likes', {
//                 method: 'POST',
//                 headers: {
//                     'Content-Type': 'application/json',
//                     'Authorization': `Bearer ${token}`
//                 },
//                 body: JSON.stringify({ recipe: recipe._id, user: userId }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 setLikes(data.liked ? likes + 1 : likes - 1);
//                 setLiked(data.liked);
//             } else {
//                 alert(`❌ ${data.message}`);
//             }
//         } catch (error) {
//             alert('❌ Failed to like/unlike recipe.');
//         }
//     };

//     const handleShowLikes = async () => {
//         try {
//             const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
//             const data = await response.json();
//             setLikeUsers(data.users || []);
//             setShowLikes(true);
//         } catch (error) {
//             console.error('❌ Failed to fetch liked users:', error);
//         }
//     };

//     return (
//         <Card sx={styles.card}>
//             <CardMedia
//                 component="img"
//                 image={`http://localhost:5000${recipe.imageUrl}`}
//                 alt={recipe.title}
//                 sx={styles.image}
//                 onError={(e) => {
//                     e.target.onerror = null;
//                     e.target.src = '';
//                 }}
//             />

//             <CardContent>
//                 <Box sx={styles.uploaderBox}>
//                     <Avatar />
//                     <Box sx={{ ml: 1 }}>
//                         <Typography variant="subtitle2" fontWeight="bold">{uploader}</Typography>
//                         <Typography variant="caption" color="text.secondary">
//                             {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString('en-US', {
//                                 month: 'short',
//                                 day: 'numeric',
//                                 year: 'numeric'
//                             }) : 'Unknown Date'}
//                         </Typography>
//                     </Box>
//                 </Box>

//                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
//                 <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
//                     {recipe.description}
//                 </Typography>

//                 <Box sx={styles.recipeInfo}>
//                     <Box sx={styles.infoItem}>
//                         <AccessTimeIcon sx={{ fontSize: 16 }} />&nbsp;
//                         <Typography variant="caption">{recipe.cookingTime || 25} mins</Typography>
//                     </Box>
//                     <Box sx={styles.infoItem}>
//                         <GroupsIcon sx={{ fontSize: 16 }} />&nbsp;
//                         <Typography variant="caption">{recipe.servings || 4} servings</Typography>
//                     </Box>
//                 </Box>

//                 <Box sx={styles.actions}>
//                     <Box sx={styles.iconGroup}>
//                         <IconButton onClick={handleLike} sx={styles.icon}>
//                             {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
//                         </IconButton>
//                         <Typography variant="body2">{likes}</Typography>
//                     </Box>

//                     <Box sx={styles.iconGroup}>
//                         <IconButton onClick={handleShowLikes} sx={styles.icon}>
//                             <PeopleAltOutlinedIcon />
//                         </IconButton>
//                     </Box>

//                     <Box sx={styles.iconGroup}>
//                         <IconButton onClick={() => setShowComments(!showComments)} sx={styles.icon}>
//                             <ChatBubbleOutlineIcon />
//                         </IconButton>
//                         <Typography variant="body2">{commentsCount}</Typography>
//                     </Box>

//                     <Box sx={styles.iconGroup}>
//                         <IconButton sx={styles.icon}>
//                             <ShareIcon />
//                         </IconButton>
//                     </Box>
//                 </Box>

//                 {showComments && <CommentSection recipeId={recipe._id} />}
//             </CardContent>

//             <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
//                 <DialogTitle>People who liked this recipe</DialogTitle>
//                 <DialogContent>
//                     {likeUsers.length > 0 ? (
//                         <List>
//                             {likeUsers.map((user, index) => (
//                                 <ListItem key={index}>
//                                     <ListItemText primary={user} />
//                                 </ListItem>
//                             ))}
//                         </List>
//                     ) : (
//                         <Typography>No likes yet.</Typography>
//                     )}
//                     <Button onClick={() => setShowLikes(false)}>Close</Button>
//                 </DialogContent>
//             </Dialog>
//         </Card>
//     );
// }

// const styles = {
//     card: {
//         width: 500,
//         height: 600,
//         margin: "24px auto",
//         borderRadius: "15px",
//         overflow: "hidden",
//         boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#fff",
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "space-between"
//     },
//     image: {
//         width: "100%",
//         height: 300,
//         objectFit: "cover",
//     },
//     uploaderBox: {
//         display: "flex",
//         alignItems: "center",
//         marginBottom: 1,
//     },
//     title: {
//         fontWeight: "bold",
//         marginTop: 1,
//     },
//     recipeInfo: {
//         display: "flex",
//         gap: 2,
//         marginTop: 1,
//         marginBottom: 1,
//     },
//     infoItem: {
//         display: "flex",
//         alignItems: "center",
//         gap: 0.5,
//     },
//     actions: {
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         marginTop: 2,
//     },
//     iconGroup: {
//         display: "flex",
//         alignItems: "center",
//         gap: "4px",
//     },
//     icon: {
//         padding: 0,
//     },
// };

// export default RecipeCard;

// src/components/RecipeCard.js
import React, { useState, useEffect } from 'react';
import {
    Card, CardContent, Typography, CardMedia, IconButton, Box,
    Avatar, Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button
} from '@mui/material';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import CommentSection from './Comments';

function RecipeCard({ recipe, uploader }) {
    const userId = localStorage.getItem('userId');
    const token = localStorage.getItem('token');
    const [likes, setLikes] = useState(recipe.likes || 0);
    const [liked, setLiked] = useState(false);
    const [showLikes, setShowLikes] = useState(false);
    const [likeUsers, setLikeUsers] = useState([]);
    const [showComments, setShowComments] = useState(false);
    const [commentsCount, setCommentsCount] = useState(0);

    useEffect(() => {
        if (!userId) return;
        const checkLikeStatus = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
                if (!response.ok) return;
                const data = await response.json();
                setLiked(data.liked);
            } catch (error) {
                console.error('Error checking like status:', error);
            }
        };
        checkLikeStatus();
    }, [recipe._id, userId]);

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await fetch(`http://localhost:5000/api/comments/${recipe._id}`);
                const data = await res.json();
                setCommentsCount(data.length);
            } catch (err) {
                console.error("Error loading comment count");
            }
        };
        fetchComments();
    }, [recipe._id]);

    const handleLike = async () => {
        if (!userId || !token) {
            alert('❌ You must be logged in to like a recipe.');
            return;
        }

        try {
            const response = await fetch('http://localhost:5000/api/likes', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ recipe: recipe._id, user: userId }),
            });

            const data = await response.json();

            if (response.ok) {
                setLikes(data.liked ? likes + 1 : likes - 1);
                setLiked(data.liked);
            } else {
                alert(`❌ ${data.message}`);
            }
        } catch (error) {
            alert('❌ Failed to like/unlike recipe.');
        }
    };

    const handleShowLikes = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
            const data = await response.json();
            setLikeUsers(data.users || []);
            setShowLikes(true);
        } catch (error) {
            console.error('❌ Failed to fetch liked users:', error);
        }
    };

    return (
        <Card sx={styles.card}>
            <CardMedia
                component="img"
                image={`http://localhost:5000${recipe.imageUrl}`}
                alt={recipe.title}
                sx={styles.image}
                onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '';
                }}
            />

            <CardContent sx={{ pt: 2, pb: 1 }}>
                <Box sx={styles.uploaderBox}>
                    <Avatar />
                    <Box sx={{ ml: 1 }}>
                        <Typography variant="subtitle2" fontWeight="bold">{uploader}</Typography>
                        <Typography variant="caption" color="text.secondary">
                            {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString('en-US', {
                                month: 'short',
                                day: 'numeric',
                                year: 'numeric'
                            }) : 'Unknown Date'}
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                    {recipe.description}
                </Typography>

                <Box sx={styles.recipeInfo}>
                    <Box sx={styles.infoItem}>
                        <AccessTimeIcon sx={{ fontSize: 16 }} />&nbsp;
                        <Typography variant="caption">{recipe.cookingTime || 25} mins</Typography>
                    </Box>
                    <Box sx={styles.infoItem}>
                        <GroupsIcon sx={{ fontSize: 16 }} />&nbsp;
                        <Typography variant="caption">{recipe.servings || 4} servings</Typography>
                    </Box>
                </Box>

                <Box sx={styles.actions}>
                    <Box sx={styles.iconGroup}>
                        <IconButton onClick={handleLike} sx={styles.icon}>
                            {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                        </IconButton>
                        <Typography variant="body2">{likes}</Typography>
                    </Box>

                    <Box sx={styles.iconGroup}>
                        <IconButton onClick={handleShowLikes} sx={styles.icon}>
                            <PeopleAltOutlinedIcon />
                        </IconButton>
                    </Box>

                    <Box sx={styles.iconGroup}>
                        <IconButton onClick={() => setShowComments(!showComments)} sx={styles.icon}>
                            <ChatBubbleOutlineIcon />
                        </IconButton>
                        <Typography variant="body2">{commentsCount}</Typography>
                    </Box>

                    <Box sx={styles.iconGroup}>
                        <IconButton sx={styles.icon}>
                            <ShareIcon />
                        </IconButton>
                    </Box>
                </Box>

                {showComments && <CommentSection recipeId={recipe._id} />}
            </CardContent>

            <Dialog open={showLikes} onClose={() => setShowLikes(false)}>
                <DialogTitle>People who liked this recipe</DialogTitle>
                <DialogContent>
                    {likeUsers.length > 0 ? (
                        <List>
                            {likeUsers.map((user, index) => (
                                <ListItem key={index}>
                                    <ListItemText primary={user} />
                                </ListItem>
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

const styles = {
    card: {
        width: 500,
        margin: "24px auto",
        borderRadius: "15px",
        overflow: "hidden",
        boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between"
    },
    image: {
        width: "100%",
        height: 300,
        objectFit: "cover",
        marginBottom: 0,
    },
    uploaderBox: {
        display: "flex",
        alignItems: "center",
        marginBottom: 1,
    },
    title: {
        fontWeight: "bold",
        marginTop: 0,
    },
    recipeInfo: {
        display: "flex",
        gap: 2,
        marginTop: 1,
        marginBottom: 1,
    },
    infoItem: {
        display: "flex",
        alignItems: "center",
        gap: 0.5,
    },
    actions: {
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        marginTop: 2,
    },
    iconGroup: {
        display: "flex",
        alignItems: "center",
        gap: "4px",
    },
    icon: {
        padding: 0,
    },
};

export default RecipeCard;
