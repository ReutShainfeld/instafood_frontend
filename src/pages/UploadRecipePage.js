
// import React, { useState } from 'react';
// import { TextField, Button, Container, Typography, Box, DialogTitle, DialogContent, IconButton } from '@mui/material';
// import CloseIcon from '@mui/icons-material/Close';

// function UploadRecipePage({ open, onClose, onRecipeUpload }) {
//     const [title, setTitle] = useState('');
//     const [description, setDescription] = useState('');
//     const [imageFile, setImageFile] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const token = localStorage.getItem('token'); // 🔹 Ensure user is authenticated

//     const handleFileChange = (e) => {
//         setImageFile(e.target.files[0]);
//     };

// const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);

//     if (!token) {
//         alert("❌ You must be logged in to upload a recipe!");
//         setLoading(false);
//         return;
//     }

//     const formData = new FormData();
//     formData.append('title', title);
//     formData.append('description', description);
//     formData.append('image', imageFile);

//     try {
//         const response = await fetch('http://localhost:5000/api/recipes', {
//             method: 'POST',
//             headers: { 'Authorization': `Bearer ${token}` }, // ✅ Ensure the token is sent
//             body: formData
//         });

//         if (response.ok) {
//             const newRecipe = await response.json();
//             alert("✅ Recipe uploaded successfully!");
//             onRecipeUpload(newRecipe);
//             onClose();
//         } else {
//             const data = await response.json();
//             alert(`❌ Error uploading recipe: ${data.error}`);
//         }
//     } catch (error) {
//         alert("❌ Network error.");
//     } finally {
//         setLoading(false);
//     }
// };

//     return (
//         <Container maxWidth="sm">
//             <Box sx={styles.popupContainer}>
//                 {/* 🔹 Title with "X" Button */}
//                 <DialogTitle sx={styles.popupTitle}>
//                     📸 Upload a Recipe
//                     <IconButton onClick={onClose} sx={styles.closeButton}>
//                         <CloseIcon />
//                     </IconButton>
//                 </DialogTitle>

//                 <DialogContent>
//                     <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
//                         <TextField label="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth />
//                         <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required fullWidth />
//                         <input type="file" accept="image/*" onChange={handleFileChange} required />
//                         <Button type="submit" variant="contained" sx={styles.uploadButton} fullWidth disabled={loading}>
//                             {loading ? "Uploading..." : "Upload"}
//                         </Button>
//                     </Box>
//                 </DialogContent>
//             </Box>
//         </Container>
//     );
// }

// const styles = {
//     popupContainer: {
//         width: '500px',
//         padding: '20px',
//         borderRadius: '12px'
//     },
//     popupTitle: {
//         fontSize: '20px',
//         fontWeight: 'bold',
//         textAlign: 'center',
//         display: 'flex',
//         justifyContent: 'space-between',
//         alignItems: 'center'
//     },
//     closeButton: {
//         position: 'absolute',
//         right: 10,
//         top: 10
//     },
//     form: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '15px',
//         padding: '10px'
//     },
//     uploadButton: {
//         backgroundColor: '#ff6f61',
//         '&:hover': {
//             backgroundColor: '#e65c50'
//         }
//     }
// };

// export default UploadRecipePage;

import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box, DialogTitle, DialogContent, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

function UploadRecipePage({ open, onClose, onRecipeUpload }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const token = localStorage.getItem('token');

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        if (!token) {
            alert("❌ You must be logged in to upload a recipe!");
            setLoading(false);
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', imageFile);

        try {
            const response = await fetch('http://localhost:5000/api/recipes', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }, 
                body: formData
            });

            const responseData = await response.json();
            if (!response.ok) {
                throw new Error(responseData.error || "❌ Error uploading recipe");
            }

            alert("✅ Recipe uploaded successfully!");
            onRecipeUpload(responseData);
            onClose();
        } catch (error) {
            console.error("Upload Error:", error.message);
            alert(error.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <Container maxWidth="sm">
            <Box sx={styles.popupContainer}>
                {/* 🔹 Title with "X" Button */}
                <DialogTitle sx={styles.popupTitle}>
                    📸 Upload a Recipe
                    <IconButton onClick={onClose} sx={styles.closeButton}>
                        <CloseIcon />
                    </IconButton>
                </DialogTitle>

                <DialogContent>
                    <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
                        <TextField label="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth />
                        <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required fullWidth />
                        <input type="file" accept="image/*" onChange={handleFileChange} required />
                        <Button type="submit" variant="contained" sx={styles.uploadButton} fullWidth disabled={loading}>
                            {loading ? "Uploading..." : "Upload"}
                        </Button>
                    </Box>
                </DialogContent>
            </Box>
        </Container>
    );
}

const styles = {
    popupContainer: {
        width: '500px',
        padding: '20px',
        borderRadius: '12px'
    },
    popupTitle: {
        fontSize: '20px',
        fontWeight: 'bold',
        textAlign: 'center',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    closeButton: {
        position: 'absolute',
        right: 10,
        top: 10
    },
    form: {
        display: 'flex',
        flexDirection: 'column',
        gap: '15px',
        padding: '10px'
    },
    uploadButton: {
        backgroundColor: '#ff6f61',
        '&:hover': {
            backgroundColor: '#e65c50'
        }
    }
};

export default UploadRecipePage;
