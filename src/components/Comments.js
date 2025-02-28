
import React, { useState } from 'react';

function CommentSection({ recipeId }) {
    const [comment, setComment] = useState('');
    const token = localStorage.getItem('token'); // 🔹 Check if user is logged in

    const handleComment = async () => {
        if (!token) {
            alert('❌ You must be logged in to comment!');
            return;
        }

        try {
            const response = await fetch(`http://localhost:5000/api/comments/${recipeId}`, {
                method: 'POST',
                headers: { 
                    'Authorization': `Bearer ${token}`, 
                    'Content-Type': 'application/json' 
                },
                body: JSON.stringify({ text: comment })
            });

            if (response.ok) {
                setComment('');
                alert('✅ Comment added!');
            } else {
                const data = await response.json();
                alert(`❌ ${data.message}`);
            }
        } catch (error) {
            alert('❌ Failed to add comment.');
        }
    };

    return (
        <div className="comment-section">
            {token ? (
                <>
                    <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
                    <button onClick={handleComment}>Add Comment</button>
                </>
            ) : (
                <p>❌ You must be logged in to comment.</p>
            )}
        </div>
    );
}

export default CommentSection;
