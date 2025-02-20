import React, { useState } from 'react';
import { TextField, Button, Container, Typography, Box } from '@mui/material';

function UploadRecipePage() {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [imageFile, setImageFile] = useState(null);
    
    const token = localStorage.getItem('token'); // 🔹 Ensure user is authenticated

    const handleFileChange = (e) => {
        setImageFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!token) { // 🔹 Prevent unauthenticated users from uploading
            alert("❌ You must be logged in to upload a recipe!");
            return;
        }

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('image', imageFile);

        try {
            const response = await fetch('http://localhost:5000/api/recipes', {
                method: 'POST',
                headers: { 'Authorization': `Bearer ${token}` }, // 🔹 Send authentication token
                body: formData
            });

            if (response.ok) {
                alert("✅ Recipe uploaded successfully!");
                setTitle('');
                setDescription('');
                setImageFile(null);
            } else {
                const data = await response.json();
                alert(`❌ Error uploading recipe: ${data.error}`);
            }
        } catch (error) {
            alert("❌ Network error.");
        }
    };

    return (
        <Container maxWidth="sm">
            <Typography variant="h4">📸 Upload a Recipe</Typography>
            <Box component="form" onSubmit={handleSubmit}>
                <TextField label="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth />
                <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required fullWidth />
                <input type="file" accept="image/*" onChange={handleFileChange} required />
                <Button type="submit" variant="contained">Upload</Button>
            </Box>
        </Container>
    );
}

export default UploadRecipePage;
