import React, { useState } from 'react';
import { Card, CardContent, Typography, CardMedia, IconButton, Box } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';

function RecipeCard({ recipe, uploader }) { // 🔹 Added `uploader` prop
    const [likes, setLikes] = useState(recipe.likes || 0);

    const handleLike = async () => {
        setLikes(likes + 1);
        await fetch(`http://localhost:5000/api/likes`, { // 🔹 Updated Like API route
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ recipe: recipe._id, user: localStorage.getItem('userId') }) // 🔹 Ensure user is authenticated
        });
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
                <Typography variant="subtitle2" sx={styles.uploader}>👨‍🍳 Uploaded by: <strong>{uploader}</strong></Typography> {/* 🔹 Added uploader info */}
            </CardContent>

            <Box sx={styles.actions}>
                <IconButton onClick={handleLike} sx={styles.icon}><FavoriteIcon /> {likes}</IconButton>
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
    uploader: { // 🔹 New style for uploader name
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
