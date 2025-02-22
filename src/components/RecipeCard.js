// import React, { useState } from 'react';
// import { Card, CardContent, Typography, CardMedia, IconButton, Box } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import ShareIcon from '@mui/icons-material/Share';

// function RecipeCard({ recipe, uploader }) { // 🔹 Added `uploader` prop
//     const [likes, setLikes] = useState(recipe.likes || 0);

//     // const handleLike = async () => {
//     //     setLikes(likes + 1);
//     //     await fetch(`http://localhost:5000/api/likes`, { // 🔹 Updated Like API route
//     //         method: 'POST',
//     //         headers: { 'Content-Type': 'application/json' },
//     //         body: JSON.stringify({ recipe: recipe._id, user: localStorage.getItem('userId') }) 
//     //         // 🔹 Ensure user is authenticated
//     //     });
//     // };
//     const [liked, setLiked] = useState(false);

//     const handleLike = async () => {
//         const method = liked ? 'DELETE' : 'POST';
//         setLikes(liked ? likes - 1 : likes + 1);
//         setLiked(!liked);
    
//         await fetch(`http://localhost:5000/api/likes`, {
//             method: method,
//             headers: { 'Content-Type': 'application/json' },
//             body: JSON.stringify({ recipe: recipe._id, user: localStorage.getItem('userId') })
//         });
//     };
    
//     return (
//         <Card sx={styles.card}>
//             <CardContent sx={styles.header}>
//                 <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
//             </CardContent>

//             <CardMedia 
//                 component="img"
//                 image={`http://localhost:5000${recipe.imageUrl}`}
//                 alt={recipe.title}
//                 sx={styles.image}
//                 onError={(e) => { e.target.src = "https://via.placeholder.com/400x250"; }} 
//             />

//             <CardContent>
//                 <Typography variant="body2" sx={styles.description}>{recipe.description}</Typography>
//                 <Typography variant="subtitle2" sx={styles.uploader}>👨‍🍳 Uploaded by: <strong>{uploader}</strong></Typography> {/* 🔹 Added uploader info */}
//             </CardContent>

//             <Box sx={styles.actions}>
//                 <IconButton onClick={handleLike} sx={styles.icon}><FavoriteIcon /> {likes}</IconButton>
//                 <IconButton sx={styles.icon}><ChatBubbleOutlineIcon /> Comments</IconButton>
//                 <IconButton sx={styles.icon}><ShareIcon /> Share</IconButton>
//             </Box>
//         </Card>
//     );
    
// }

// const styles = {
//     card: {
//         maxWidth: 450,
//         margin: "20px auto",
//         borderRadius: "15px",
//         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
//         backgroundColor: "#fff",
//     },
//     header: {
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//         paddingBottom: "0",
//     },
//     title: {
//         fontWeight: "bold",
//         color: "#3E3E3E",
//     },
//     image: {
//         width: "100%",
//         height: "250px",
//         objectFit: "cover",
//     },
//     description: {
//         color: "#5A5A5A",
//         textAlign: "center",
//     },
//     uploader: { // 🔹 New style for uploader name
//         color: "#8a4b30",
//         textAlign: "center",
//         marginTop: "8px",
//     },
//     actions: {
//         display: "flex",
//         justifyContent: "space-around",
//         padding: "10px",
//     },
//     icon: {
//         color: "#D9773D",
//     },
// };



// export default RecipeCard;
import React, { useState, useEffect } from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

function RecipeCard({ recipe, uploader }) {
    const userId = localStorage.getItem('userId');
    const [likes, setLikes] = useState(recipe.likes || 0);
    const [liked, setLiked] = useState(false);

    // Check if the user already liked the recipe
    useEffect(() => {
        const checkLikeStatus = async () => {
            const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
            const data = await response.json();
            setLiked(data.liked);
        };
        checkLikeStatus();
    }, [recipe._id, userId]);

    const handleLike = async () => {
        if (liked) {
            setLikes(likes - 1);
            setLiked(false);
            await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`, { method: 'DELETE' });
        } else {
            setLikes(likes + 1);
            setLiked(true);
            await fetch(`http://localhost:5000/api/likes`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ recipe: recipe._id, user: userId }),
            });
        }
    };

    return (
        <Card sx={styles.card}>
            <CardContent sx={styles.header}>
                <Typography variant="h6" sx={styles.title}>{recipe.title}</Typography>
            </CardContent>

            <CardMedia
                component="img"
                image={`http://localhost:5000${recipe.imageUrl}`}
                alt={recipe.title}
                sx={styles.image}
                onError={(e) => { e.target.src = "https://via.placeholder.com/400x250"; }}
            />

            <CardContent>
                <Typography variant="body2" sx={styles.description}>{recipe.description}</Typography>
                <Typography variant="subtitle2" sx={styles.uploader}>👨‍🍳 Uploaded by: <strong>{uploader}</strong></Typography>
            </CardContent>

            <Box sx={styles.actions}>
                <IconButton onClick={handleLike} sx={styles.icon} color={liked ? 'error' : 'default'}>
                    <FavoriteIcon /> {likes}
                </IconButton>
                <IconButton sx={styles.icon}><ChatBubbleOutlineIcon /> Comments</IconButton>
                <IconButton sx={styles.icon}><ShareIcon /> Share</IconButton>
            </Box>
        </Card>
    );
}

const styles = {
    card: {
        maxWidth: 450,
        margin: "20px auto",
        borderRadius: "15px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
    },
    header: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        paddingBottom: "0",
    },
    title: {
        fontWeight: "bold",
        color: "#3E3E3E",
    },
    image: {
        width: "100%",
        height: "250px",
        objectFit: "cover",
    },
    description: {
        color: "#5A5A5A",
        textAlign: "center",
    },
    uploader: {
        color: "#8a4b30",
        textAlign: "center",
        marginTop: "8px",
    },
    actions: {
        display: "flex",
        justifyContent: "space-around",
        padding: "10px",
    },
    icon: {
        color: "#D9773D",
    },
};

export default RecipeCard;
