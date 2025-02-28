
import React, { useState, useEffect } from 'react';
import { 
    Card, CardContent, Typography, CardMedia, IconButton, Box, 
    Dialog, DialogTitle, DialogContent, List, ListItem, ListItemText, Button 
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import ShareIcon from '@mui/icons-material/Share';
import PeopleIcon from '@mui/icons-material/People';

function RecipeCard({ recipe, uploader }) {
    const userId = localStorage.getItem('userId'); // Check if user is logged in
    const token = localStorage.getItem('token'); // Get auth token
    const [likes, setLikes] = useState(recipe.likes || 0);
    const [liked, setLiked] = useState(false);
    const [showLikes, setShowLikes] = useState(false);
    const [likeUsers, setLikeUsers] = useState([]);

    // Check if the user already liked the recipe
    useEffect(() => {
        if (!userId) return;
        const checkLikeStatus = async () => {
            try {
                const response = await fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`);
                const data = await response.json();
                setLiked(data.liked);
            } catch (error) {
                console.error('Error checking like status:', error);
            }
        };
        checkLikeStatus();
    }, [recipe._id, userId]);

    // Handle Like/Unlike Button Click
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

    // Fetch Users Who Liked This Recipe
    const handleShowLikes = async () => {
        try {
            const response = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
            const data = await response.json();
            setLikeUsers(data.users);
            setShowLikes(true);
        } catch (error) {
            console.error('❌ Failed to fetch liked users:', error);
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
                {/* Like Button */}
                <IconButton onClick={handleLike} sx={styles.icon}>
                    <FavoriteIcon sx={{ color: liked ? 'pink' : 'transparent', stroke: 'black', strokeWidth: 2 }} /> {likes}
                </IconButton>

                {/* View Likes Button */}
                <IconButton onClick={handleShowLikes} sx={styles.icon}>
                    <PeopleIcon /> View Likes
                </IconButton>

                <IconButton sx={styles.icon}><ChatBubbleOutlineIcon /> Comments</IconButton>
                <IconButton sx={styles.icon}><ShareIcon /> Share</IconButton>
            </Box>

            {/* Modal to Display Users Who Liked the Recipe */}
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
        maxWidth: 500,
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
        justifyContent: "space-between",
        padding: "15px",
    },
    icon: {
        fontSize: "24px",
        padding: "12px",
    }
};

export default RecipeCard;


