
// // // // // // // // import React, { useState } from 'react';

// // // // // // // // function CommentSection({ recipeId }) {
// // // // // // // //     const [comment, setComment] = useState('');
// // // // // // // //     const token = localStorage.getItem('token'); // 🔹 Check if user is logged in

// // // // // // // //     const handleComment = async () => {
// // // // // // // //         if (!token) {
// // // // // // // //             alert('❌ You must be logged in to comment!');
// // // // // // // //             return;
// // // // // // // //         }

// // // // // // // //         try {
// // // // // // // //             const response = await fetch(`http://localhost:5000/api/comments/${recipeId}`, {
// // // // // // // //                 method: 'POST',
// // // // // // // //                 headers: { 
// // // // // // // //                     'Authorization': `Bearer ${token}`, 
// // // // // // // //                     'Content-Type': 'application/json' 
// // // // // // // //                 },
// // // // // // // //                 body: JSON.stringify({ text: comment })
// // // // // // // //             });

// // // // // // // //             if (response.ok) {
// // // // // // // //                 setComment('');
// // // // // // // //                 alert('✅ Comment added!');
// // // // // // // //             } else {
// // // // // // // //                 const data = await response.json();
// // // // // // // //                 alert(`❌ ${data.message}`);
// // // // // // // //             }
// // // // // // // //         } catch (error) {
// // // // // // // //             alert('❌ Failed to add comment.');
// // // // // // // //         }
// // // // // // // //     };

// // // // // // // //     return (
// // // // // // // //         <div className="comment-section">
// // // // // // // //             {token ? (
// // // // // // // //                 <>
// // // // // // // //                     <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
// // // // // // // //                     <button onClick={handleComment}>Add Comment</button>
// // // // // // // //                 </>
// // // // // // // //             ) : (
// // // // // // // //                 <p>❌ You must be logged in to comment.</p>
// // // // // // // //             )}
// // // // // // // //         </div>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // export default CommentSection;

// // // // // // // import React, { useState, useEffect } from 'react';
// // // // // // // import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
// // // // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // // // import EditIcon from '@mui/icons-material/Edit';
// // // // // // // import DeleteIcon from '@mui/icons-material/Delete';
// // // // // // // import ReplyIcon from '@mui/icons-material/Reply';

// // // // // // // function CommentSection({ recipeId }) {
// // // // // // //     const [comments, setComments] = useState([]);
// // // // // // //     const [newComment, setNewComment] = useState('');
// // // // // // //     const [replyingTo, setReplyingTo] = useState(null);
// // // // // // //     const token = localStorage.getItem('token');
// // // // // // //     const userId = localStorage.getItem('userId');

// // // // // // //     useEffect(() => {
// // // // // // //         fetch(`http://localhost:5000/api/comments/${recipeId}`)
// // // // // // //             .then(res => res.json())
// // // // // // //             .then(data => setComments(data))
// // // // // // //             .catch(err => console.error("❌ Error fetching comments:", err));
// // // // // // //     }, [recipeId]);

// // // // // // //     const handleAddComment = async () => {
// // // // // // //         if (!token) {
// // // // // // //             alert("❌ You must be logged in to comment!");
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         try {
// // // // // // //             const response = await fetch(`http://localhost:5000/api/comments/${recipeId}`, {
// // // // // // //                 method: 'POST',
// // // // // // //                 headers: {
// // // // // // //                     'Authorization': `Bearer ${token}`,
// // // // // // //                     'Content-Type': 'application/json'
// // // // // // //                 },
// // // // // // //                 body: JSON.stringify({ text: newComment, parentComment: replyingTo })
// // // // // // //             });

// // // // // // //             if (response.ok) {
// // // // // // //                 const data = await response.json();
// // // // // // //                 setComments([...comments, data]);
// // // // // // //                 setNewComment('');
// // // // // // //                 setReplyingTo(null);
// // // // // // //             }
// // // // // // //         } catch (error) {
// // // // // // //             alert("❌ Failed to add comment.");
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleEditComment = async (commentId, updatedText) => {
// // // // // // //         try {
// // // // // // //             const response = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
// // // // // // //                 method: 'PUT',
// // // // // // //                 headers: {
// // // // // // //                     'Authorization': `Bearer ${token}`,
// // // // // // //                     'Content-Type': 'application/json'
// // // // // // //                 },
// // // // // // //                 body: JSON.stringify({ text: updatedText })
// // // // // // //             });

// // // // // // //             if (response.ok) {
// // // // // // //                 setComments(comments.map(comment =>
// // // // // // //                     comment._id === commentId ? { ...comment, text: updatedText } : comment
// // // // // // //                 ));
// // // // // // //             }
// // // // // // //         } catch (error) {
// // // // // // //             alert("❌ Error editing comment.");
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleDeleteComment = async (commentId) => {
// // // // // // //         if (!token) return;

// // // // // // //         if (window.confirm("Are you sure you want to delete this comment?")) {
// // // // // // //             try {
// // // // // // //                 const response = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
// // // // // // //                     method: 'DELETE',
// // // // // // //                     headers: { 'Authorization': `Bearer ${token}` }
// // // // // // //                 });

// // // // // // //                 if (response.ok) {
// // // // // // //                     setComments(comments.filter(comment => comment._id !== commentId));
// // // // // // //                 }
// // // // // // //             } catch (error) {
// // // // // // //                 alert("❌ Error deleting comment.");
// // // // // // //             }
// // // // // // //         }
// // // // // // //     };

// // // // // // //     const handleLikeComment = async (commentId) => {
// // // // // // //         try {
// // // // // // //             const response = await fetch(`http://localhost:5000/api/comments/like/${commentId}`, {
// // // // // // //                 method: 'POST',
// // // // // // //                 headers: { 'Authorization': `Bearer ${token}` }
// // // // // // //             });

// // // // // // //             if (response.ok) {
// // // // // // //                 setComments(comments.map(comment =>
// // // // // // //                     comment._id === commentId ? { ...comment, likes: (comment.likes || 0) + 1 } : comment
// // // // // // //                 ));
// // // // // // //             }
// // // // // // //         } catch (error) {
// // // // // // //             alert("❌ Error liking comment.");
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <Box sx={styles.commentSection}>
// // // // // // //             <Typography variant="h6">Comments</Typography>

// // // // // // //             {comments.length === 0 ? (
// // // // // // //                 <Typography>No comments yet. Be the first to comment! 💬</Typography>
// // // // // // //             ) : (
// // // // // // //                 comments.map(comment => (
// // // // // // //                     <Box key={comment._id} sx={styles.commentBox}>
// // // // // // //                         <Typography variant="body2">
// // // // // // //                             <strong>{comment.user.username}:</strong> {comment.text}
// // // // // // //                         </Typography>

// // // // // // //                         <Box sx={styles.actions}>
// // // // // // //                             <IconButton onClick={() => handleLikeComment(comment._id)}>
// // // // // // //                                 <FavoriteIcon color={comment.likes?.includes(userId) ? "error" : "inherit"} />
// // // // // // //                                 {comment.likes?.length || 0}
// // // // // // //                             </IconButton>

// // // // // // //                             <IconButton onClick={() => setReplyingTo(comment._id)}>
// // // // // // //                                 <ReplyIcon />
// // // // // // //                             </IconButton>

// // // // // // //                             {comment.user._id === userId && (
// // // // // // //                                 <IconButton onClick={() => {
// // // // // // //                                     const updatedText = prompt("Edit your comment:", comment.text);
// // // // // // //                                     if (updatedText) handleEditComment(comment._id, updatedText);
// // // // // // //                                 }}>
// // // // // // //                                     <EditIcon />
// // // // // // //                                 </IconButton>
// // // // // // //                             )}

// // // // // // //                             {comment.user._id === userId && (
// // // // // // //                                 <IconButton onClick={() => handleDeleteComment(comment._id)}>
// // // // // // //                                     <DeleteIcon />
// // // // // // //                                 </IconButton>
// // // // // // //                             )}
// // // // // // //                         </Box>
// // // // // // //                     </Box>
// // // // // // //                 ))
// // // // // // //             )}

// // // // // // //             <TextField
// // // // // // //                 label={replyingTo ? "Reply to comment..." : "Add a comment..."}
// // // // // // //                 value={newComment}
// // // // // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // // // // //                 fullWidth
// // // // // // //                 sx={styles.input}
// // // // // // //             />
// // // // // // //             <Button onClick={handleAddComment} variant="contained" sx={styles.button}>Post</Button>
// // // // // // //         </Box>
// // // // // // //     );
// // // // // // // }

// // // // // // // export default CommentSection;

// // // // // // // const styles = {
// // // // // // //     commentSection: { marginTop: "20px", padding: "10px", borderTop: "1px solid #ddd" },
// // // // // // //     commentBox: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" },
// // // // // // //     input: { marginTop: "10px" },
// // // // // // //     button: { marginTop: "5px", backgroundColor: "#D9773D", color: "white" },
// // // // // // //     actions: { display: "flex", alignItems: "center", gap: "8px" },
// // // // // // // };

// // // // // // import React, { useState, useEffect } from 'react';
// // // // // // import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
// // // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // // import EditIcon from '@mui/icons-material/Edit';
// // // // // // import DeleteIcon from '@mui/icons-material/Delete';
// // // // // // import ReplyIcon from '@mui/icons-material/Reply';

// // // // // // function CommentSection({ recipeId }) {
// // // // // //     const [comments, setComments] = useState([]);
// // // // // //     const [newComment, setNewComment] = useState('');
// // // // // //     const [replyingTo, setReplyingTo] = useState(null);
// // // // // //     const token = localStorage.getItem('token');
// // // // // //     const userId = localStorage.getItem('userId');

// // // // // //     // ✅ שליפת תגובות עבור המתכון
// // // // // //     useEffect(() => {
// // // // // //         fetch(`http://localhost:5000/api/comments/${recipeId}`)
// // // // // //             .then(res => res.json())
// // // // // //             .then(data => setComments(data))
// // // // // //             .catch(err => console.error("❌ Error fetching comments:", err));
// // // // // //     }, [recipeId]);

// // // // // //     // ✅ הוספת תגובה חדשה
// // // // // //     const handleAddComment = async () => {
// // // // // //         if (!token) {
// // // // // //             alert("❌ You must be logged in to comment!");
// // // // // //             return;
// // // // // //         }

// // // // // //         try {
// // // // // //             const response = await fetch(`http://localhost:5000/api/comments/${recipeId}`, {
// // // // // //                 method: 'POST',
// // // // // //                 headers: {
// // // // // //                     'Authorization': `Bearer ${token}`,
// // // // // //                     'Content-Type': 'application/json'
// // // // // //                 },
// // // // // //                 body: JSON.stringify({ text: newComment, parentComment: replyingTo })
// // // // // //             });

// // // // // //             if (response.ok) {
// // // // // //                 const data = await response.json();
// // // // // //                 setComments([...comments, data]);
// // // // // //                 setNewComment('');
// // // // // //                 setReplyingTo(null);
// // // // // //             }
// // // // // //         } catch (error) {
// // // // // //             alert("❌ Failed to add comment.");
// // // // // //         }
// // // // // //     };

// // // // // //     // ✅ מחיקת תגובה
// // // // // //     const handleDeleteComment = async (commentId) => {
// // // // // //         if (!token) return;

// // // // // //         if (window.confirm("Are you sure you want to delete this comment?")) {
// // // // // //             try {
// // // // // //                 const response = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
// // // // // //                     method: 'DELETE',
// // // // // //                     headers: { 'Authorization': `Bearer ${token}` }
// // // // // //                 });

// // // // // //                 if (response.ok) {
// // // // // //                     setComments(comments.filter(comment => comment._id !== commentId));
// // // // // //                 }
// // // // // //             } catch (error) {
// // // // // //                 alert("❌ Error deleting comment.");
// // // // // //             }
// // // // // //         }
// // // // // //     };

// // // // // //     // ✅ לייק לתגובה (פונקציה חסרה שהוספנו)
// // // // // //     const handleLikeComment = async (commentId) => {
// // // // // //         if (!token) {
// // // // // //             alert("❌ You must be logged in to like a comment!");
// // // // // //             return;
// // // // // //         }

// // // // // //         try {
// // // // // //             const response = await fetch(`http://localhost:5000/api/comments/like/${commentId}`, {
// // // // // //                 method: 'POST',
// // // // // //                 headers: { 'Authorization': `Bearer ${token}` }
// // // // // //             });

// // // // // //             if (response.ok) {
// // // // // //                 setComments(comments.map(comment =>
// // // // // //                     comment._id === commentId ? { ...comment, likes: (comment.likes || 0) + 1 } : comment
// // // // // //                 ));
// // // // // //             }
// // // // // //         } catch (error) {
// // // // // //             alert("❌ Error liking comment.");
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <Box sx={styles.commentSection}>
// // // // // //             <Typography variant="h6">Comments</Typography>

// // // // // //             {comments.length === 0 ? (
// // // // // //                 <Typography>No comments yet. Be the first to comment! <span role="img" aria-label="comments">💬</span></Typography>
// // // // // //             ) : (
// // // // // //                 comments.map(comment => (
// // // // // //                     <Box key={comment._id} sx={styles.commentBox}>
// // // // // //                         <Typography variant="body2">
// // // // // //                             <strong>{comment.user.username}:</strong> {comment.text}
// // // // // //                         </Typography>

// // // // // //                         <Box sx={styles.actions}>
// // // // // //                             {/* 🔹 לייקים */}
// // // // // //                             <IconButton onClick={() => handleLikeComment(comment._id)}>
// // // // // //                                 <FavoriteIcon color={comment.likes?.includes(userId) ? "error" : "inherit"} />
// // // // // //                                 {comment.likes?.length || 0}
// // // // // //                             </IconButton>

// // // // // //                             {/* 🔹 תגובה על תגובה */}
// // // // // //                             <IconButton onClick={() => setReplyingTo(comment._id)}>
// // // // // //                                 <ReplyIcon />
// // // // // //                             </IconButton>

// // // // // //                             {/* 🔹 מחיקת תגובה (רק עבור המשתמש שהוסיף אותה) */}
// // // // // //                             {comment.user._id === userId && (
// // // // // //                                 <IconButton onClick={() => handleDeleteComment(comment._id)}>
// // // // // //                                     <DeleteIcon />
// // // // // //                                 </IconButton>
// // // // // //                             )}
// // // // // //                         </Box>
// // // // // //                     </Box>
// // // // // //                 ))
// // // // // //             )}

// // // // // //             {/* הוספת תגובה חדשה */}
// // // // // //             <TextField
// // // // // //                 label={replyingTo ? "Reply to comment..." : "Add a comment..."}
// // // // // //                 value={newComment}
// // // // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // // // //                 fullWidth
// // // // // //                 sx={styles.input}
// // // // // //             />
// // // // // //             <Button onClick={handleAddComment} variant="contained" sx={styles.button}>Post</Button>
// // // // // //         </Box>
// // // // // //     );
// // // // // // }

// // // // // // export default CommentSection;

// // // // // // const styles = {
// // // // // //     commentSection: { marginTop: "20px", padding: "10px", borderTop: "1px solid #ddd" },
// // // // // //     commentBox: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" },
// // // // // //     input: { marginTop: "10px" },
// // // // // //     button: { marginTop: "5px", backgroundColor: "#D9773D", color: "white" },
// // // // // //     actions: { display: "flex", alignItems: "center", gap: "8px" },
// // // // // // };

// // // // // // src/components/Comments.js
// // // // // import React, { useState, useEffect } from 'react';
// // // // // import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
// // // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // // import DeleteIcon from '@mui/icons-material/Delete';
// // // // // import ReplyIcon from '@mui/icons-material/Reply';

// // // // // function CommentSection({ recipeId }) {
// // // // //     const [comments, setComments] = useState([]);
// // // // //     const [newComment, setNewComment] = useState('');
// // // // //     const [replyingTo, setReplyingTo] = useState(null);
// // // // //     const token = localStorage.getItem('token');
// // // // //     const userId = localStorage.getItem('userId');

// // // // //     useEffect(() => {
// // // // //         const fetchComments = async () => {
// // // // //             try {
// // // // //                 const res = await fetch(`http://localhost:5000/api/comments/${recipeId}`);
// // // // //                 const data = await res.json();
// // // // //                 setComments(data);
// // // // //             } catch (err) {
// // // // //                 console.error('❌ Error fetching comments:', err);
// // // // //             }
// // // // //         };
// // // // //         fetchComments();
// // // // //     }, [recipeId]);

// // // // //     const handleAddComment = async () => {
// // // // //         if (!token) {
// // // // //             alert("❌ You must be logged in to comment!");
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             const response = await fetch(`http://localhost:5000/api/comments/${recipeId}${replyingTo ? `/${replyingTo}` : ''}`, {
// // // // //                 method: 'POST',
// // // // //                 headers: {
// // // // //                     'Authorization': `Bearer ${token}`,
// // // // //                     'Content-Type': 'application/json'
// // // // //                 },
// // // // //                 body: JSON.stringify({ text: newComment })
// // // // //             });

// // // // //             if (response.ok) {
// // // // //                 const data = await response.json();
// // // // //                 setComments([...comments, data]);
// // // // //                 setNewComment('');
// // // // //                 setReplyingTo(null);
// // // // //             }
// // // // //         } catch (error) {
// // // // //             alert("❌ Failed to add comment.");
// // // // //         }
// // // // //     };

// // // // //     const handleDeleteComment = async (commentId) => {
// // // // //         if (!token) return;

// // // // //         if (window.confirm("Are you sure you want to delete this comment?")) {
// // // // //             try {
// // // // //                 const response = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
// // // // //                     method: 'DELETE',
// // // // //                     headers: { 'Authorization': `Bearer ${token}` }
// // // // //                 });

// // // // //                 if (response.ok) {
// // // // //                     setComments(comments.filter(comment => comment._id !== commentId));
// // // // //                 }
// // // // //             } catch (error) {
// // // // //                 alert("❌ Error deleting comment.");
// // // // //             }
// // // // //         }
// // // // //     };

// // // // //     const handleLikeComment = async (commentId) => {
// // // // //         if (!token) {
// // // // //             alert("❌ You must be logged in to like a comment!");
// // // // //             return;
// // // // //         }

// // // // //         try {
// // // // //             const response = await fetch(`http://localhost:5000/api/comments/like/${commentId}`, {
// // // // //                 method: 'POST',
// // // // //                 headers: { 'Authorization': `Bearer ${token}` }
// // // // //             });

// // // // //             if (response.ok) {
// // // // //                 const updated = await response.json();
// // // // //                 setComments(comments.map(comment =>
// // // // //                     comment._id === commentId ? { ...comment, likes: updated.likes } : comment
// // // // //                 ));
// // // // //             }
// // // // //         } catch (error) {
// // // // //             alert("❌ Error liking comment.");
// // // // //         }
// // // // //     };

// // // // //     return (
// // // // //         <Box sx={styles.commentSection}>
// // // // //             <Typography variant="h6">Comments</Typography>

// // // // //             {comments.length === 0 ? (
// // // // //                 <Typography>No comments yet. Be the first to comment! 💬</Typography>
// // // // //             ) : (
// // // // //                 comments.map(comment => (
// // // // //                     <Box key={comment._id} sx={styles.commentBox}>
// // // // //                         <Typography variant="body2">
// // // // //                             <strong>{comment.user?.username || 'User'}:</strong> {comment.text}
// // // // //                         </Typography>

// // // // //                         <Box sx={styles.actions}>
// // // // //                             <IconButton onClick={() => handleLikeComment(comment._id)}>
// // // // //                                 <FavoriteIcon color={comment.likes?.includes(userId) ? "error" : "inherit"} />
// // // // //                                 {comment.likes?.length || 0}
// // // // //                             </IconButton>

// // // // //                             <IconButton onClick={() => setReplyingTo(comment._id)}>
// // // // //                                 <ReplyIcon />
// // // // //                             </IconButton>

// // // // //                             {comment.user?._id === userId && (
// // // // //                                 <IconButton onClick={() => handleDeleteComment(comment._id)}>
// // // // //                                     <DeleteIcon />
// // // // //                                 </IconButton>
// // // // //                             )}
// // // // //                         </Box>
// // // // //                     </Box>
// // // // //                 ))
// // // // //             )}

// // // // //             <TextField
// // // // //                 label={replyingTo ? "Reply to comment..." : "Add a comment..."}
// // // // //                 value={newComment}
// // // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // // //                 fullWidth
// // // // //                 sx={styles.input}
// // // // //             />
// // // // //             <Button onClick={handleAddComment} variant="contained" sx={styles.button}>Post</Button>
// // // // //         </Box>
// // // // //     );
// // // // // }

// // // // // export default CommentSection;

// // // // // const styles = {
// // // // //     commentSection: { marginTop: "20px", padding: "10px", borderTop: "1px solid #ddd" },
// // // // //     commentBox: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" },
// // // // //     input: { marginTop: "10px" },
// // // // //     button: { marginTop: "5px", backgroundColor: "#D9773D", color: "white" },
// // // // //     actions: { display: "flex", alignItems: "center", gap: "8px" },
// // // // // };

// // // // // // ✅ תוקן: שימוש נכון בנתיב לשליחת תגובה כולל parentId
// // // // // // ✅ תוקן: הצגת שם משתמש או 'User' אם חסר
// // // // // // ✅ תוקן: לייק מתעדכן מהשרת

// // // // import React, { useState, useEffect } from 'react';
// // // // import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
// // // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // // import DeleteIcon from '@mui/icons-material/Delete';
// // // // import ReplyIcon from '@mui/icons-material/Reply';

// // // // function CommentSection({ recipeId }) {
// // // //     const [comments, setComments] = useState([]);
// // // //     const [newComment, setNewComment] = useState('');
// // // //     const [replyingTo, setReplyingTo] = useState(null);
// // // //     const token = localStorage.getItem('token');
// // // //     const userId = localStorage.getItem('userId');

// // // //     useEffect(() => {
// // // //         const fetchComments = async () => {
// // // //             try {
// // // //                 const res = await fetch(`http://localhost:5000/api/comments/${recipeId}`);
                
// // // //                 // ✅ תיקון: הוספנו בדיקת res.ok לפני קריאת res.json()
// // // //                 if (!res.ok) {
// // // //                     throw new Error("Failed to fetch comments");
// // // //                 }

// // // //                 const data = await res.json();
// // // //                 console.log("📥 Fetched comments:", data);
// // // //                 setComments(data);
// // // //             } catch (err) {
// // // //                 console.error('❌ Error fetching comments:', err);
// // // //             }
// // // //         };
// // // //         fetchComments();
// // // //     }, [recipeId]);

// // // //     const handleAddComment = async () => {
// // // //         if (!token) {
// // // //             alert("❌ You must be logged in to comment!");
// // // //             return;
// // // //         }

// // // //         try {
// // // //             const response = await fetch(`http://localhost:5000/api/comments/${recipeId}${replyingTo ? `/${replyingTo}` : ''}`, {
// // // //                 method: 'POST',
// // // //                 headers: {
// // // //                     'Authorization': `Bearer ${token}`,
// // // //                     'Content-Type': 'application/json'
// // // //                 },
// // // //                 body: JSON.stringify({ text: newComment })
// // // //             });

// // // //             if (response.ok) {
// // // //                 const data = await response.json();
// // // //                 setComments([...comments, data]);
// // // //                 setNewComment('');
// // // //                 setReplyingTo(null);
// // // //             }
// // // //         } catch (error) {
// // // //             alert("❌ Failed to add comment.");
// // // //         }
// // // //     };

// // // //     const handleDeleteComment = async (commentId) => {
// // // //         if (!token) return;

// // // //         if (window.confirm("Are you sure you want to delete this comment?")) {
// // // //             try {
// // // //                 const response = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
// // // //                     method: 'DELETE',
// // // //                     headers: { 'Authorization': `Bearer ${token}` }
// // // //                 });

// // // //                 if (response.ok) {
// // // //                     setComments(comments.filter(comment => comment._id !== commentId));
// // // //                 }
// // // //             } catch (error) {
// // // //                 alert("❌ Error deleting comment.");
// // // //             }
// // // //         }
// // // //     };

// // // //     const handleLikeComment = async (commentId) => {
// // // //         if (!token) {
// // // //             alert("❌ You must be logged in to like a comment!");
// // // //             return;
// // // //         }

// // // //         try {
// // // //             const response = await fetch(`http://localhost:5000/api/comments/like/${commentId}`, {
// // // //                 method: 'POST',
// // // //                 headers: { 'Authorization': `Bearer ${token}` }
// // // //             });

// // // //             if (response.ok) {
// // // //                 const updated = await response.json();
// // // //                 setComments(comments.map(comment =>
// // // //                     comment._id === commentId ? { ...comment, likes: updated.likes } : comment
// // // //                 ));
// // // //             }
// // // //         } catch (error) {
// // // //             alert("❌ Error liking comment.");
// // // //         }
// // // //     };

// // // //     return (
// // // //         <Box sx={styles.commentSection}>
// // // //             <Typography variant="h6">Comments</Typography>

// // // //             {comments.length === 0 ? (
// // // //                 <Typography>No comments yet. Be the first to comment! 💬</Typography>
// // // //             ) : (
// // // //                 comments.map(comment => (
// // // //                     <Box key={comment._id} sx={styles.commentBox}>
// // // //                         <Typography variant="body2">
// // // //                             <strong>{comment.user?.username || 'User'}:</strong> {comment.text}
// // // //                         </Typography>

// // // //                         <Box sx={styles.actions}>
// // // //                             <IconButton onClick={() => handleLikeComment(comment._id)}>
// // // //                                 <FavoriteIcon color={comment.likes?.includes(userId) ? "error" : "inherit"} />
// // // //                                 {comment.likes?.length || 0}
// // // //                             </IconButton>

// // // //                             <IconButton onClick={() => setReplyingTo(comment._id)}>
// // // //                                 <ReplyIcon />
// // // //                             </IconButton>

// // // //                             {comment.user?._id === userId && (
// // // //                                 <IconButton onClick={() => handleDeleteComment(comment._id)}>
// // // //                                     <DeleteIcon />
// // // //                                 </IconButton>
// // // //                             )}
// // // //                         </Box>
// // // //                     </Box>
// // // //                 ))
// // // //             )}

// // // //             <TextField
// // // //                 label={replyingTo ? "Reply to comment..." : "Add a comment..."}
// // // //                 value={newComment}
// // // //                 onChange={(e) => setNewComment(e.target.value)}
// // // //                 fullWidth
// // // //                 sx={styles.input}
// // // //             />
// // // //             <Button onClick={handleAddComment} variant="contained" sx={styles.button}>Post</Button>
// // // //         </Box>
// // // //     );
// // // // }

// // // // export default CommentSection;

// // // // const styles = {
// // // //     commentSection: { marginTop: "20px", padding: "10px", borderTop: "1px solid #ddd" },
// // // //     commentBox: { display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "5px" },
// // // //     input: { marginTop: "10px" },
// // // //     button: { marginTop: "5px", backgroundColor: "#D9773D", color: "white" },
// // // //     actions: { display: "flex", alignItems: "center", gap: "8px" },
// // // // };

// // // // src/components/Comments.js
// // // import React, { useState, useEffect } from 'react';
// // // import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
// // // import FavoriteIcon from '@mui/icons-material/Favorite';
// // // import DeleteIcon from '@mui/icons-material/Delete';
// // // import ReplyIcon from '@mui/icons-material/Reply';

// // // function CommentSection({ recipeId }) {
// // //     const [comments, setComments] = useState([]);
// // //     const [newComment, setNewComment] = useState('');
// // //     const [replyingTo, setReplyingTo] = useState(null);
// // //     const token = localStorage.getItem('token');
// // //     const userId = localStorage.getItem('userId');

// // //     useEffect(() => {
// // //         const fetchComments = async () => {
// // //             try {
// // //                 const res = await fetch(`http://localhost:5000/api/comments/${recipeId}`);
// // //                 const data = await res.json();
// // //                 setComments(data);
// // //             } catch (err) {
// // //                 console.error('❌ Error fetching comments:', err);
// // //             }
// // //         };
// // //         fetchComments();
// // //     }, [recipeId]);

// // //     const handleAddComment = async () => {
// // //         if (!token) {
// // //             alert("❌ You must be logged in to comment!");
// // //             return;
// // //         }

// // //         try {
// // //             const response = await fetch(`http://localhost:5000/api/comments/${recipeId}${replyingTo ? `/${replyingTo}` : ''}`, {
// // //                 method: 'POST',
// // //                 headers: {
// // //                     'Authorization': `Bearer ${token}`,
// // //                     'Content-Type': 'application/json'
// // //                 },
// // //                 body: JSON.stringify({ text: newComment })
// // //             });

// // //             if (response.ok) {
// // //                 const data = await response.json();
// // //                 setComments([...comments, data]);
// // //                 setNewComment('');
// // //                 setReplyingTo(null);
// // //             }
// // //         } catch (error) {
// // //             alert("❌ Failed to add comment.");
// // //         }
// // //     };

// // //     const handleDeleteComment = async (commentId) => {
// // //         if (!token) return;

// // //         if (window.confirm("Are you sure you want to delete this comment?")) {
// // //             try {
// // //                 const response = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
// // //                     method: 'DELETE',
// // //                     headers: { 'Authorization': `Bearer ${token}` }
// // //                 });

// // //                 if (response.ok) {
// // //                     setComments(comments.filter(comment => comment._id !== commentId));
// // //                 }
// // //             } catch (error) {
// // //                 alert("❌ Error deleting comment.");
// // //             }
// // //         }
// // //     };

// // //     const handleLikeComment = async (commentId) => {
// // //         if (!token) {
// // //             alert("❌ You must be logged in to like a comment!");
// // //             return;
// // //         }

// // //         try {
// // //             const response = await fetch(`http://localhost:5000/api/comments/like/${commentId}`, {
// // //                 method: 'POST',
// // //                 headers: { 'Authorization': `Bearer ${token}` }
// // //             });

// // //             if (response.ok) {
// // //                 const updated = await response.json();
// // //                 setComments(comments.map(comment =>
// // //                     comment._id === commentId ? { ...comment, likes: updated.likes } : comment
// // //                 ));
// // //             }
// // //         } catch (error) {
// // //             alert("❌ Error liking comment.");
// // //         }
// // //     };

// // //     return (
// // //         <Box sx={styles.commentSection}>
// // //             <Typography variant="h6" sx={styles.commentsTitle}>Comments</Typography>

// // //             {comments.length === 0 ? (
// // //                 <Typography>No comments yet. Be the first to comment! 💬</Typography>
// // //             ) : (
// // //                 comments.map(comment => (
// // //                     <Box key={comment._id} sx={styles.commentBox}>
// // //                         <Typography variant="body2">
// // //                             <strong>{comment.user?.username || 'User'}:</strong> {comment.text}
// // //                         </Typography>

// // //                         <Box sx={styles.actions}>
// // //                             <IconButton
// // //                                 onClick={() => handleLikeComment(comment._id)}
// // //                                 sx={{ ...styles.iconButton, color: comment.likes?.some(id => id.toString() === userId) ? "red" : "inherit" }}
// // //                             >
// // //                                 <FavoriteIcon fontSize="small" />
// // //                                 <Typography variant="caption" sx={{ ml: 0.5 }}>{comment.likes?.length || 0}</Typography>
// // //                             </IconButton>

// // //                             <IconButton onClick={() => setReplyingTo(comment._id)} sx={styles.iconButton}>
// // //                                 <ReplyIcon fontSize="small" />
// // //                             </IconButton>

// // //                             {comment.user?._id === userId && (
// // //                                 <IconButton onClick={() => handleDeleteComment(comment._id)} sx={styles.iconButton}>
// // //                                     <DeleteIcon fontSize="small" />
// // //                                 </IconButton>
// // //                             )}
// // //                         </Box>
// // //                     </Box>
// // //                 ))
// // //             )}

// // //             <TextField
// // //                 label={replyingTo ? "Reply to comment..." : "Add a comment..."}
// // //                 value={newComment}
// // //                 onChange={(e) => setNewComment(e.target.value)}
// // //                 fullWidth
// // //                 sx={styles.input}
// // //             />
// // //             <Button onClick={handleAddComment} variant="contained" sx={styles.button}>Post</Button>
// // //         </Box>
// // //     );
// // // }

// // // export default CommentSection;

// // // const styles = {
// // //     commentSection: {
// // //         marginTop: "20px",
// // //         paddingTop: "10px",
// // //         borderTop: "1px solid #ddd"
// // //     },
// // //     commentsTitle: {
// // //         fontWeight: "bold",
// // //         marginBottom: "10px"
// // //     },
// // //     commentBox: {
// // //         display: "flex",
// // //         justifyContent: "space-between",
// // //         alignItems: "center",
// // //         marginBottom: "10px"
// // //     },
// // //     input: {
// // //         marginTop: "10px"
// // //     },
// // //     button: {
// // //         marginTop: "8px",
// // //         backgroundColor: "#D9773D",
// // //         color: "white"
// // //     },
// // //     actions: {
// // //         display: "flex",
// // //         alignItems: "center",
// // //         gap: "8px"
// // //     },
// // //     iconButton: {
// // //         padding: "4px",
// // //         minWidth: "30px"
// // //     }
// // // };

// // import React, { useState, useEffect } from 'react';
// // import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
// // import FavoriteIcon from '@mui/icons-material/Favorite';
// // import DeleteIcon from '@mui/icons-material/Delete';
// // import ReplyIcon from '@mui/icons-material/Reply';

// // function CommentSection({ recipeId }) {
// //     const [comments, setComments] = useState([]);
// //     const [newComment, setNewComment] = useState('');
// //     const [replyingTo, setReplyingTo] = useState(null);
// //     const token = localStorage.getItem('token');
// //     const userId = localStorage.getItem('userId');

// //     useEffect(() => {
// //         const fetchComments = async () => {
// //             try {
// //                 const res = await fetch(`http://localhost:5000/api/comments/${recipeId}`);
// //                 const data = await res.json();
// //                 setComments(data);
// //             } catch (err) {
// //                 console.error('❌ Error fetching comments:', err);
// //             }
// //         };
// //         fetchComments();
// //     }, [recipeId]);

// //     const handleAddComment = async () => {
// //         if (!token) {
// //             alert("❌ You must be logged in to comment!");
// //             return;
// //         }

// //         try {
// //             const response = await fetch(`http://localhost:5000/api/comments/${recipeId}${replyingTo ? `/${replyingTo}` : ''}`, {
// //                 method: 'POST',
// //                 headers: {
// //                     'Authorization': `Bearer ${token}`,
// //                     'Content-Type': 'application/json'
// //                 },
// //                 body: JSON.stringify({ text: newComment })
// //             });

// //             if (response.ok) {
// //                 const data = await response.json();
// //                 setComments([...comments, data]);
// //                 setNewComment('');
// //                 setReplyingTo(null);
// //             }
// //         } catch (error) {
// //             alert("❌ Failed to add comment.");
// //         }
// //     };

// //     const handleDeleteComment = async (commentId) => {
// //         if (!token) return;

// //         if (window.confirm("Are you sure you want to delete this comment?")) {
// //             try {
// //                 const response = await fetch(`http://localhost:5000/api/comments/${commentId}`, {
// //                     method: 'DELETE',
// //                     headers: { 'Authorization': `Bearer ${token}` }
// //                 });

// //                 if (response.ok) {
// //                     setComments(comments.filter(comment => comment._id !== commentId));
// //                 }
// //             } catch (error) {
// //                 alert("❌ Error deleting comment.");
// //             }
// //         }
// //     };

// //     const handleLikeComment = async (commentId) => {
// //         if (!token) {
// //             alert("❌ You must be logged in to like a comment!");
// //             return;
// //         }

// //         try {
// //             const response = await fetch(`http://localhost:5000/api/comments/like/${commentId}`, {
// //                 method: 'POST',
// //                 headers: { 'Authorization': `Bearer ${token}` }
// //             });

// //             if (response.ok) {
// //                 const updated = await response.json();
// //                 setComments(comments.map(comment =>
// //                     comment._id === commentId ? { ...comment, likes: updated.likes } : comment
// //                 ));
// //             }
// //         } catch (error) {
// //             alert("❌ Error liking comment.");
// //         }
// //     };

// //     return (
// //         <Box sx={styles.commentSection}>
// //             <Typography variant="h6" sx={styles.commentsTitle}>Comments</Typography>

// //             {comments.length === 0 ? (
// //                 <Typography>No comments yet. Be the first to comment! 💬</Typography>
// //             ) : (
// //                 comments.map(comment => {
// //                     const isLiked = comment.likes?.some(id =>
// //                         id === userId || id._id === userId || id.toString() === userId
// //                     );

// //                     return (
// //                         <Box key={comment._id} sx={styles.commentBox}>
// //                             <Typography variant="body2">
// //                                 <strong>{comment.user?.username || 'User'}:</strong> {comment.text}
// //                             </Typography>

// //                             <Box sx={styles.actions}>
// //                                 <IconButton
// //                                     onClick={() => handleLikeComment(comment._id)}
// //                                     sx={{ ...styles.iconButton, color: isLiked ? "red" : "inherit" }}
// //                                 >
// //                                     <FavoriteIcon fontSize="small" />
// //                                     <Typography variant="caption" sx={{ ml: 0.5 }}>
// //                                         {comment.likes?.length || 0}
// //                                     </Typography>
// //                                 </IconButton>

// //                                 <IconButton onClick={() => setReplyingTo(comment._id)} sx={styles.iconButton}>
// //                                     <ReplyIcon fontSize="small" />
// //                                 </IconButton>

// //                                 {comment.user && comment.user._id === userId && (
// //                                     <IconButton onClick={() => handleDeleteComment(comment._id)} sx={styles.iconButton}>
// //                                         <DeleteIcon fontSize="small" />
// //                                     </IconButton>
// //                                 )}
// //                             </Box>
// //                         </Box>
// //                     );
// //                 })
// //             )}

// //             <TextField
// //                 label={replyingTo ? "Reply to comment..." : "Add a comment..."}
// //                 value={newComment}
// //                 onChange={(e) => setNewComment(e.target.value)}
// //                 fullWidth
// //                 sx={styles.input}
// //             />
// //             <Button onClick={handleAddComment} variant="contained" sx={styles.button}>Post</Button>
// //         </Box>
// //     );
// // }

// // export default CommentSection;

// // const styles = {
// //     commentSection: {
// //         marginTop: "20px",
// //         paddingTop: "10px",
// //         borderTop: "1px solid #ddd"
// //     },
// //     commentsTitle: {
// //         fontWeight: "bold",
// //         marginBottom: "10px"
// //     },
// //     commentBox: {
// //         display: "flex",
// //         justifyContent: "space-between",
// //         alignItems: "center",
// //         marginBottom: "10px"
// //     },
// //     input: {
// //         marginTop: "10px"
// //     },
// //     button: {
// //         marginTop: "8px",
// //         backgroundColor: "#D9773D",
// //         color: "white"
// //     },
// //     actions: {
// //         display: "flex",
// //         alignItems: "center",
// //         gap: "8px"
// //     },
// //     iconButton: {
// //         padding: "4px",
// //         minWidth: "30px"
// //     }
// // };

// // src/components/Comments.js
// import React, { useState, useEffect } from 'react';
// import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import DeleteIcon from '@mui/icons-material/Delete';
// import ReplyIcon from '@mui/icons-material/Reply';

// function CommentSection({ recipeId }) {
//     const [comments, setComments] = useState([]);
//     const [newComment, setNewComment] = useState('');
//     const [replyingTo, setReplyingTo] = useState(null);
//     const token = localStorage.getItem('token');
//     const userId = localStorage.getItem('userId');

//     useEffect(() => {
//         fetchComments();
//     }, [recipeId]);

//     const fetchComments = async () => {
//         try {
//             const res = await fetch(`http://localhost:5000/api/comments/${recipeId}`);
//             const data = await res.json();
//             setComments(data);
//         } catch (err) {
//             console.error('❌ Error fetching comments:', err);
//         }
//     };

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
//                 <Typography>No comments yet. Be the first to comment! 💬</Typography>
//             ) : (
//                 comments.map(comment => (
//                     <Box key={comment._id} sx={styles.commentBox}>
//                         <Typography variant="body2">
//                             <strong>{comment.user?.username || 'User'}:</strong> {comment.text}
//                         </Typography>

//                         <Box sx={styles.actions}>
//                             <IconButton
//                                 onClick={() => handleLikeComment(comment._id)}
//                                 sx={{
//                                     ...styles.iconButton,
//                                     color: comment.likes?.some(id => id.toString() === userId) ? "red" : "inherit"
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
//         borderTop: "1px solid #ddd"
//     },
//     commentsTitle: {
//         fontWeight: "bold",
//         marginBottom: "10px"
//     },
//     commentBox: {
//         display: "flex",
//         justifyContent: "space-between",
//         alignItems: "center",
//         marginBottom: "10px"
//     },
//     input: {
//         marginTop: "10px"
//     },
//     button: {
//         marginTop: "8px",
//         backgroundColor: "#D9773D",
//         color: "white"
//     },
//     actions: {
//         display: "flex",
//         alignItems: "center",
//         gap: "8px"
//     },
//     iconButton: {
//         padding: "4px",
//         minWidth: "30px"
//     }
// };


// src/components/Comments.js
import React, { useState, useEffect } from 'react';
import { Box, TextField, Button, Typography, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import DeleteIcon from '@mui/icons-material/Delete';
import ReplyIcon from '@mui/icons-material/Reply';

function CommentSection({ recipeId }) {
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');
    const [replyingTo, setReplyingTo] = useState(null);
    const token = localStorage.getItem('token');
    const userId = localStorage.getItem('userId');

    useEffect(() => {
        fetchComments();
    }, [recipeId]);

    const fetchComments = async () => {
        try {
            const res = await fetch(`http://localhost:5000/api/comments/${recipeId}`);
            const data = await res.json();
            setComments(data);
        } catch (err) {
            console.error('❌ Error fetching comments:', err);
        }
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
                const data = await response.json();
                setComments(prev => [...prev, data]);
                setNewComment('');
                setReplyingTo(null);
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
                    setComments(prev => prev.filter(c => c._id !== commentId));
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
                const data = await res.json();
                setComments(prev =>
                    prev.map(comment =>
                        comment._id === commentId ? { ...comment, likes: data.likes } : comment
                    )
                );
            }
        } catch {
            alert("❌ Error liking comment.");
        }
    };

    return (
        <Box sx={styles.commentSection}>
            <Typography variant="h6" sx={styles.commentsTitle}>Comments</Typography>

            {comments.length === 0 ? (
                <Typography>No comments yet. Be the first to comment! 💬</Typography>
            ) : (
                comments.map(comment => (
                    <Box key={comment._id} sx={styles.commentBox}>
                        <Typography variant="body2">
                            <strong>{comment.user?.username || 'User'}:</strong> {comment.text}
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
                    </Box>
                ))
            )}

            <TextField
                label={replyingTo ? "Reply to comment..." : "Add a comment..."}
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                fullWidth
                sx={styles.input}
            />
            <Button onClick={handleAddComment} variant="contained" sx={styles.button}>Post</Button>
        </Box>
    );
}

export default CommentSection;

const styles = {
    commentSection: {
        marginTop: "20px",
        paddingTop: "10px",
        borderTop: "1px solid #ddd"
    },
    commentsTitle: {
        fontWeight: "bold",
        marginBottom: "10px"
    },
    commentBox: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "10px"
    },
    input: {
        marginTop: "10px"
    },
    button: {
        marginTop: "8px",
        backgroundColor: "#ff6600",
        color: "white"
    },
    actions: {
        display: "flex",
        alignItems: "center",
        gap: "8px"
    },
    iconButton: {
    backgroundColor: "#fff",
    color: " #ff6600",
    padding: "6px",
    transition: "background-color 0.3s ease, transform 0.2s ease",
    '&:hover': {
      backgroundColor: "rgba(255, 102, 0, 0.1)",
      transform: "scale(1.05)"
    }
  },
};
