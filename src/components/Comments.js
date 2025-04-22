// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Typography, IconButton, Avatar } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ReplyIcon from '@mui/icons-material/Reply';
// import { useCallback } from 'react';

// function CommentSection({ recipeId }) {
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState('');
//     const [replyingTo, setReplyingTo] = useState(null);
//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('userId');

//     const fetchComments = useCallback(async () => {
//         try {
//             const res = await fetch(`http://localhost:5000/api/comments/${recipeId}`);
//             const data = await res.json();
//             setComments(data);
//         } catch (err) {
//             console.error('❌ Error fetching comments:', err);
//         }
//     }, [recipeId]);

//     useEffect(() => {
//         fetchComments();
//     }, [fetchComments]);

//     const handleAddComment = async () => {
//         if (!token) return alert("❌ You must be logged in to comment!");

//         try {
//             const response = await fetch(`http://localhost:5000/api/comments/${recipeId}${replyingTo ? `/${replyingTo}` : ''}`, {
//                 method: 'POST',
//                 headers: {
//                     'Authorization': `Bearer ${token}`,
//                     'Content-Type': 'application/json'
//                 },
//                 body: JSON.stringify({ text: newComment })
//             });

//             if (response.ok) {
//                 const data = await response.json();
//                 setComments(prev => [...prev, data]);
//                 setNewComment('');
//                 setReplyingTo(null);
//             }
//         } catch {
//             alert("❌ Failed to add comment.");
//         }
//     };

//     const handleDeleteComment = async (commentId) => {
//         if (!token) return;

//         if (window.confirm("Are you sure you want to delete this comment?")) {
//             try {
//                 const res = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
//                     method: 'DELETE',
//                     headers: { 'Authorization': `Bearer ${token}` }
//                 });

//                 if (res.ok) {
//                     setComments(prev => prev.filter(c => c._id !== commentId));
//                 }
//             } catch {
//                 alert("❌ Error deleting comment.");
//             }
//         }
//     };

//     const handleLikeComment = async (commentId) => {
//         if (!token) return alert("❌ You must be logged in to like a comment!");

//         try {
//             const res = await fetch(`http://localhost:5000/api/comments/like/${commentId}`, {
//                 method: 'POST',
//                 headers: { 'Authorization': `Bearer ${token}` }
//             });

//             if (res.ok) {
//                 const data = await res.json();
//                 setComments(prev =>
//                     prev.map(comment =>
//                         comment._id === commentId ? { ...comment, likes: data.likes } : comment
//                     )
//                 );
//             }
//         } catch {
//             alert("❌ Error liking comment.");
//         }
//     };

//     return (
//         <Box sx={styles.commentSection}>
//             <Typography variant="h6" sx={styles.commentsTitle}>Comments</Typography>

//             {comments.length === 0 ? (
//                 <Typography sx={styles.noCommentsText}>
//                     No comments yet. Be the first to comment!{" "}
//                     <span role="img" aria-label="speech balloon">💬</span>
//                 </Typography>
//             ) : (
//                 comments.map(comment => (
//                     <Box key={comment._id} sx={styles.commentBox}>
//                         {/* Comment Header with Avatar and Username */}
//                         <Box sx={styles.commentHeader}>
//                             <Avatar sx={styles.avatar} src={comment.user?.profileImage || '/default-avatar.png'} alt={comment.user?.username || 'User'} />
//                             <Typography variant="body2" sx={styles.username}>
//                                 <strong>{comment.user?.username || 'User'}:</strong>
//                             </Typography>
//                         </Box>
                
//                         {/* Comment Text */}
//                         <Typography variant="body2" sx={styles.commentText}>
//                             {comment.text}
//                         </Typography>
                
//                         {/* Comment Actions */}
//                         <Box sx={styles.actions}>
//                             <IconButton
//                                 onClick={() => handleLikeComment(comment._id)}
//                                 sx={{
//                                     ...styles.iconButton,
//                                     color: comment.likes?.some(id => id.toString() === userId) ? "#ff6600" : "inherit"
//                                 }}
//                             >
//                                 <FavoriteIcon fontSize="small" />
//                                 <Typography variant="caption" sx={{ ml: 0.5 }}>{comment.likes?.length || 0}</Typography>
//                             </IconButton>
                
//                             <IconButton onClick={() => setReplyingTo(comment._id)} sx={styles.iconButton}>
//                                 <ReplyIcon fontSize="small" />
//                             </IconButton>
                
//                             {comment.user?._id === userId && (
//                                 <IconButton onClick={() => handleDeleteComment(comment._id)} sx={styles.iconButton}>
//                                     <DeleteIcon fontSize="small" />
//                                 </IconButton>
//                             )}
//                         </Box>
//                     </Box>
//                 ))
                
//             )}

//             <TextField
//                 label={replyingTo ? "Reply to comment..." : "Add a comment..."}
//                 value={newComment}
//                 onChange={(e) => setNewComment(e.target.value)}
//                 fullWidth
//                 required
//                 multiline
//                 rows={3}
//                 variant="outlined"
//                 sx={styles.input}
//             />

//             <Button onClick={handleAddComment} variant="contained" sx={styles.button}>Post</Button>
//         </Box>
//     );
// }

// export default CommentSection;

// const styles = {
//     commentSection: {
//         marginTop: "20px",
//         paddingTop: "10px",
//         borderTop: "1px solid #ddd",
//         backgroundColor: "#fafafa",
//         padding: "20px",
//         borderRadius: 4,
//     },
//     commentsTitle: {
//         fontWeight: "bold",
//         marginBottom: "15px",
//         color: "#333"
//     },
//     commentHeader: {
//         display: "flex",
//         alignItems: "center",
//         gap: "10px",
//     },
//     avatar: {
//         width: 32,
//         height: 32,
//     },
//     username: {
//         fontWeight: 500,
//         color: "#333",
//         fontSize: "14px",
//     },
//     commentBox: {
//         display: "flex",
//         flexDirection: "column",
//         gap: "10px",
//         marginBottom: "15px",
//         padding: "12px",
//         backgroundColor: "#fff",
//         borderRadius: 4,
//         boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
//     },
//     commentText: {
//         color: "#555",
//         fontSize: "14px",
//         marginTop: "5px",
//     },
//     input: {
//         marginTop: 2,
//         marginBottom: 2,
//         backgroundColor: "#f9f9f9",
//         borderRadius: 2,
//         "& .MuiInputBase-root": {
//             padding: "12px",
//             fontSize: "14px",
//             color: "#333",
//         },
//         "& .MuiOutlinedInput-root": {
//             borderColor: "#ddd",
//             "&:hover fieldset": {
//                 borderColor: "#ff8a33",
//             },
//             "&.Mui-focused fieldset": {
//                 borderColor: "#ff8a33",
//             },
//         },
//         "& .MuiInputLabel-root": {
//             fontSize: "14px",
//             color: "#888",
//         },
//         "& .MuiInputLabel-root.Mui-focused": {
//             color: "#ff8a33",
//         },
//     },
//     button: {
//         marginTop: "12px",
//         backgroundColor: "#ff6600",
//         color: "white",
//         fontSize: "14px",
//         padding: "10px 20px",
//         borderRadius: 20,
//         "&:hover": {
//             backgroundColor: "#ff5722",
//         },
//     },
//     actions: {
//         display: "flex",
//         alignItems: "center",
//         gap: "12px",
//     },
//     iconButton: {
//         backgroundColor: "#fff",
//         color: "#ff6600",
//         padding: "8px",
//         transition: "background-color 0.3s ease, transform 0.2s ease",
//         borderRadius: "50%",
//         '&:hover': {
//             backgroundColor: "rgba(255, 102, 0, 0.1)",
//             transform: "scale(1.1)"
//         }
//     },
//     noCommentsText: {
//         fontStyle: "italic",
//         color: "#666",
//         marginTop: "20px",
//     }
// };
import React, { useState, useEffect, useCallback } from 'react';
import {
  Box, TextField, Button, Typography, IconButton, Avatar
} from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';

function CommentSection({ recipeId }) {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [replyingTo, setReplyingTo] = useState(null);
  const token = localStorage.getItem('token');
  const userId = localStorage.getItem('userId');

  const getImageUrl = (url) => {
    if (!url) return '/default-user.png';
    return url.startsWith('http') ? url : `http://localhost:5000${url}`;
  };

  const fetchComments = useCallback(async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/comments/${recipeId}`);
      const data = await res.json();
      const tree = buildCommentTree(data);
      setComments(tree);
    } catch (err) {
      console.error('❌ Error fetching comments:', err);
    }
  }, [recipeId]);

  useEffect(() => {
    fetchComments();
  }, [fetchComments]);

  const buildCommentTree = (flatComments) => {
    const commentMap = {};
    flatComments.forEach((c) => (commentMap[c._id] = { ...c, replies: [] }));
    const tree = [];
    flatComments.forEach((comment) => {
        if (comment.parentComment && commentMap[comment.parentComment]) {
            commentMap[comment.parentComment].replies.push(commentMap[comment._id]);
          } else {
            tree.push(commentMap[comment._id]);
          }
          
    });
    return tree;
  };

  const handleAddComment = async () => {
    if (!token) return alert("❌ You must be logged in to comment!");
    try {
      const response = await fetch(`http://localhost:5000/api/comments/${recipeId}${replyingTo ? `/${replyingTo}` : ''}`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ text: newComment })
      });

      if (response.ok) {
        setNewComment('');
        setReplyingTo(null);
        fetchComments(); // טען מחדש את כל התגובות עם replies
      }
    } catch {
      alert("❌ Failed to add comment.");
    }
  };

  const handleDeleteComment = async (commentId) => {
    if (!token) return;
    if (window.confirm("Are you sure you want to delete this comment?")) {
      try {
        const res = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
          method: 'DELETE',
          headers: { 'Authorization': `Bearer ${token}` }
        });

        if (res.ok) {
          fetchComments();
        }
      } catch {
        alert("❌ Error deleting comment.");
      }
    }
  };

  const handleLikeComment = async (commentId) => {
    if (!token) return alert("❌ You must be logged in to like a comment!");
    try {
      const res = await fetch(`http://localhost:5000/api/comments/like/${commentId}`, {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` }
      });

      if (res.ok) {
        fetchComments();
      }
    } catch {
      alert("❌ Error liking comment.");
    }
  };

  const renderComment = (comment, level = 0) => (
    <Box key={comment._id} sx={{ ...styles.commentBox, ml: level * 4 }}>
      <Box sx={styles.commentHeader}>
        <Avatar src={getImageUrl(comment.user?.profileImage)} sx={styles.avatar} />
        <Typography variant="body2" sx={styles.username}>
          <strong>{comment.user?.username || 'User'}:</strong>
        </Typography>
      </Box>

      <Typography variant="body2" sx={styles.commentText}>
        {comment.text}
      </Typography>

      <Box sx={styles.actions}>
        <IconButton
          onClick={() => handleLikeComment(comment._id)}
          sx={{
            ...styles.iconButton,
            color: comment.likes?.some(id => id.toString() === userId) ? "#ff6600" : "inherit"
          }}
        >
          <FavoriteIcon fontSize="small" />
          <Typography variant="caption" sx={{ ml: 0.5 }}>{comment.likes?.length || 0}</Typography>
        </IconButton>

        <IconButton onClick={() => setReplyingTo(comment._id)} sx={styles.iconButton}>
          <ReplyIcon fontSize="small" />
        </IconButton>

        {comment.user?._id === userId && (
          <IconButton onClick={() => handleDeleteComment(comment._id)} sx={styles.iconButton}>
            <DeleteIcon fontSize="small" />
          </IconButton>
        )}
      </Box>

      {comment.replies && comment.replies.map(reply => renderComment(reply, level + 1))}
    </Box>
  );

  return (
    <Box sx={styles.commentSection}>
      {comments.length === 0 ? (
        <Typography sx={styles.noCommentsText}>
          No comments yet. Be the first to comment! 💬
        </Typography>
      ) : (
        comments.map(comment => renderComment(comment))
      )}

      <TextField
        label={replyingTo ? "Reply to comment..." : "Add a comment..."}
        value={newComment}
        onChange={(e) => setNewComment(e.target.value)}
        fullWidth
        required
        multiline
        rows={3}
        variant="outlined"
        sx={styles.input}
      />

      <Button onClick={handleAddComment} variant="contained" sx={styles.button}>
        Post
      </Button>
    </Box>
  );
}

export default CommentSection;

const styles = {
  commentSection: {
    marginTop: "20px",
    paddingTop: "10px",
    borderTop: "1px solid #ddd",
    backgroundColor: "#fafafa",
    padding: "20px",
    borderRadius: 4,
  },
  commentHeader: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
  },
  avatar: {
    width: 32,
    height: 32,
  },
  username: {
    fontWeight: 500,
    color: "#333",
    fontSize: "14px",
  },
  commentBox: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginBottom: "15px",
    padding: "12px",
    backgroundColor: "#fff",
    borderRadius: 4,
    boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
  },
  commentText: {
    color: "#555",
    fontSize: "14px",
  },
  input: {
    marginTop: 2,
    marginBottom: 2,
    backgroundColor: "#f9f9f9",
    borderRadius: 2,
  },
  button: {
    marginTop: "12px",
    backgroundColor: "#ff6600",
    color: "white",
    fontSize: "14px",
    padding: "10px 20px",
    borderRadius: 20,
    "&:hover": {
      backgroundColor: "#ff5722",
    },
  },
  actions: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
  },
  iconButton: {
    backgroundColor: "#fff",
    color: "#ff6600",
    padding: "8px",
    borderRadius: "50%",
    '&:hover': {
      backgroundColor: "rgba(255, 102, 0, 0.1)",
      transform: "scale(1.1)"
    }
  },
  noCommentsText: {
    fontStyle: "italic",
    color: "#666",
    marginTop: "20px",
  }
};
