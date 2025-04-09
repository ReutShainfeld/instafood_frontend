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
  const [showComments, setShowComments] = useState(false); // Local state for each card
  const [commentsCount, setCommentsCount] = useState(0);

  const truncateText = (text, maxLength) => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + '...';
    }
    return text;
  };

  useEffect(() => {
    if (!userId || imageOnly) return;
    fetch(`http://localhost:5000/api/likes/${recipe._id}/${userId}`)
      .then(res => res.json())
      .then(data => setLiked(data.liked))
      .catch(() => { });
  }, [recipe._id, userId, imageOnly]);

  useEffect(() => {
    if (imageOnly) return;
    fetch(`http://localhost:5000/api/comments/${recipe._id}`)
      .then(res => res.json())
      .then(data => setCommentsCount(data.length))
      .catch(() => { });
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
    } catch { }
  };

  const handleShowLikes = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/likes/users/${recipe._id}`);
      const data = await res.json();
      setLikeUsers(data.users || []);
      setShowLikes(true);
    } catch { }
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
    <Card sx={{ ...styles.card, height: showComments ? 'auto' : '100%' }}>
      <CardMedia
        component="img"
        image={getImageUrl(recipe.imageUrl)}
        alt={recipe.title}
        sx={styles.image}
        onClick={() => navigate(`/recipe/${recipe._id}`)}
        onError={(e) => { e.target.src = '/default-image.png'; }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent sx={{ flexGrow: 1 }}>
          <Typography
            variant="h6"
            sx={{ ...styles.title, cursor: "pointer" }}
            onClick={() => navigate(`/recipe/${recipe._id}`)}
          >
            {recipe.title}
          </Typography>
          {
            recipe.description && (
              <Typography
                variant="body2"
                color="text.secondary"
                sx={{
                  mb: 1,
                  maxHeight: "none",
                  overflow: "hidden",
                  lineClamp: "none",
                  textOverflow: 'ellipsis',
                  display: '-webkit-box',
                  WebkitBoxOrient: 'vertical',
                }}
              >
                {truncateText(recipe.description, 50)}
              </Typography>
            )
          }
          <Box sx={styles.userRow}>
            <Avatar sx={{ width: 24, height: 24 }} />
            <Typography variant="caption" fontWeight="medium" sx={{ ml: 1 }}>
              {uploader}
            </Typography>
            <Typography variant="caption" color="text.secondary" sx={{ ml: 'auto' }}>
              {recipe.createdAt ? new Date(recipe.createdAt).toLocaleDateString() : 'Unknown Date'}
            </Typography>
          </Box>

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
          {
            recipe.cookingTime && recipe.servings && (
              <Box sx={styles.recipeInfo}>
                <Box sx={styles.infoItem}>
                  <AccessTimeIcon sx={styles.infoIcon} />
                  <Typography variant="caption">{recipe.cookingTime} min</Typography>
                </Box>
                <Box sx={styles.infoItem}>
                  <GroupsIcon sx={styles.infoIcon} />
                  <Typography variant="caption">{recipe.servings} servings</Typography>
                </Box>
              </Box>
            )
          }

        </CardContent>

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
      </Box>

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
    maxWidth: 450,
    height: '100%',
    margin: "auto",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0px 4px 15px rgba(0, 0, 0, 0.08)",
    backgroundColor: "#fff",
    display: 'flex',
    flexDirection: 'column',
    padding: "15px",
  },
  image: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "15px"
  },
  imageOnly: {
    width: "100%",
    height: 200,
    objectFit: "cover",
    cursor: "pointer",
    borderRadius: "15px",
    transition: "transform 0.2s ease",
    '&:hover': {
      transform: "scale(1.03)"
    }
  },
  userRow: {
    display: 'flex',
    alignItems: 'center',
    mb: 1,
  },
  title: {
    fontWeight: 600,
    cursor: 'pointer',
    mb: 0.5,
  },
  recipeInfo: {
    display: "flex",
    gap: 2,
    marginTop: 1,
    marginBottom: 1
  },
  infoItem: {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: '#6b7280',
  },
  infoIcon: {
    fontSize: 16,
    color: '#6b7280',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '12px 16px',
    borderTop: '1px solid #eee',
    backgroundColor: '#fff',
    marginTop: 'auto', // Positions actions at the bottom
  },
  iconGroup: {
    display: "flex",
    alignItems: "center",
    gap: "4px"
  },
  iconButton: {
    color: "#ff6600",
    padding: '4px',
  },
  iconSvg: {
    fontSize: 20
  },
  tagsBox: {
    display: 'flex',
    gap: 1,
    flexWrap: 'wrap',
    mb: 1,
  },
  tag: {
    backgroundColor: "#f2f2f2",
    color: "#ff8a33",
    borderRadius: "12px",
    padding: "2px 8px",
    fontWeight: "bold",
    fontSize: "0.75rem",
    cursor: "pointer"
  }
};
