import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, List, ListItem, ListItemText } from '@mui/material';

function Comments({ recipeId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    useEffect(() => {
        fetch(`http://localhost:5000/api/comments/${recipeId}`)
            .then(res => res.json())
            .then(data => setComments(data));
    }, [recipeId]);

    const handleAddComment = async () => {
        const response = await fetch(`http://localhost:5000/api/comments/${recipeId}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ user: 'Anonymous', text: newComment })
        });

        if (response.ok) {
            const addedComment = await response.json();
            setComments([addedComment, ...comments]);
            setNewComment('');
        }
    };

    return (
        <Box sx={{ mt: 2 }}>
            <Typography variant="h6">Comments</Typography>
            <List>
                {comments.map((comment, index) => (
                    <ListItem key={index}>
                        <ListItemText primary={comment.user} secondary={comment.text} />
                    </ListItem>
                ))}
            </List>
            <TextField
                fullWidth
                label="Write a comment..."
                variant="outlined"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                sx={{ mt: 2 }}
            />
            <Button variant="contained" sx={{ mt: 1 }} onClick={handleAddComment}>Post Comment</Button>
        </Box>
    );
}

export default Comments;
