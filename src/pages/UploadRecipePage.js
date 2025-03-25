
// // // // // // // // import React, { useState } from 'react';
// // // // // // // // import { TextField, Button, Container, Typography, Box, DialogTitle, DialogContent, IconButton } from '@mui/material';
// // // // // // // // import CloseIcon from '@mui/icons-material/Close';

// // // // // // // // function UploadRecipePage({ open, onClose, onRecipeUpload }) {
// // // // // // // //     const [title, setTitle] = useState('');
// // // // // // // //     const [description, setDescription] = useState('');
// // // // // // // //     const [imageFile, setImageFile] = useState(null);
// // // // // // // //     const [loading, setLoading] = useState(false);
// // // // // // // //     const token = localStorage.getItem('token'); // 🔹 Ensure user is authenticated

// // // // // // // //     const handleFileChange = (e) => {
// // // // // // // //         setImageFile(e.target.files[0]);
// // // // // // // //     };

// // // // // // // // const handleSubmit = async (e) => {
// // // // // // // //     e.preventDefault();
// // // // // // // //     setLoading(true);

// // // // // // // //     if (!token) {
// // // // // // // //         alert("❌ You must be logged in to upload a recipe!");
// // // // // // // //         setLoading(false);
// // // // // // // //         return;
// // // // // // // //     }

// // // // // // // //     const formData = new FormData();
// // // // // // // //     formData.append('title', title);
// // // // // // // //     formData.append('description', description);
// // // // // // // //     formData.append('image', imageFile);

// // // // // // // //     try {
// // // // // // // //         const response = await fetch('http://localhost:5000/api/recipes', {
// // // // // // // //             method: 'POST',
// // // // // // // //             headers: { 'Authorization': `Bearer ${token}` }, // ✅ Ensure the token is sent
// // // // // // // //             body: formData
// // // // // // // //         });

// // // // // // // //         if (response.ok) {
// // // // // // // //             const newRecipe = await response.json();
// // // // // // // //             alert("✅ Recipe uploaded successfully!");
// // // // // // // //             onRecipeUpload(newRecipe);
// // // // // // // //             onClose();
// // // // // // // //         } else {
// // // // // // // //             const data = await response.json();
// // // // // // // //             alert(`❌ Error uploading recipe: ${data.error}`);
// // // // // // // //         }
// // // // // // // //     } catch (error) {
// // // // // // // //         alert("❌ Network error.");
// // // // // // // //     } finally {
// // // // // // // //         setLoading(false);
// // // // // // // //     }
// // // // // // // // };

// // // // // // // //     return (
// // // // // // // //         <Container maxWidth="sm">
// // // // // // // //             <Box sx={styles.popupContainer}>
// // // // // // // //                 {/* 🔹 Title with "X" Button */}
// // // // // // // //                 <DialogTitle sx={styles.popupTitle}>
// // // // // // // //                     📸 Upload a Recipe
// // // // // // // //                     <IconButton onClick={onClose} sx={styles.closeButton}>
// // // // // // // //                         <CloseIcon />
// // // // // // // //                     </IconButton>
// // // // // // // //                 </DialogTitle>

// // // // // // // //                 <DialogContent>
// // // // // // // //                     <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
// // // // // // // //                         <TextField label="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth />
// // // // // // // //                         <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required fullWidth />
// // // // // // // //                         <input type="file" accept="image/*" onChange={handleFileChange} required />
// // // // // // // //                         <Button type="submit" variant="contained" sx={styles.uploadButton} fullWidth disabled={loading}>
// // // // // // // //                             {loading ? "Uploading..." : "Upload"}
// // // // // // // //                         </Button>
// // // // // // // //                     </Box>
// // // // // // // //                 </DialogContent>
// // // // // // // //             </Box>
// // // // // // // //         </Container>
// // // // // // // //     );
// // // // // // // // }

// // // // // // // // const styles = {
// // // // // // // //     popupContainer: {
// // // // // // // //         width: '500px',
// // // // // // // //         padding: '20px',
// // // // // // // //         borderRadius: '12px'
// // // // // // // //     },
// // // // // // // //     popupTitle: {
// // // // // // // //         fontSize: '20px',
// // // // // // // //         fontWeight: 'bold',
// // // // // // // //         textAlign: 'center',
// // // // // // // //         display: 'flex',
// // // // // // // //         justifyContent: 'space-between',
// // // // // // // //         alignItems: 'center'
// // // // // // // //     },
// // // // // // // //     closeButton: {
// // // // // // // //         position: 'absolute',
// // // // // // // //         right: 10,
// // // // // // // //         top: 10
// // // // // // // //     },
// // // // // // // //     form: {
// // // // // // // //         display: 'flex',
// // // // // // // //         flexDirection: 'column',
// // // // // // // //         gap: '15px',
// // // // // // // //         padding: '10px'
// // // // // // // //     },
// // // // // // // //     uploadButton: {
// // // // // // // //         backgroundColor: '#ff6f61',
// // // // // // // //         '&:hover': {
// // // // // // // //             backgroundColor: '#e65c50'
// // // // // // // //         }
// // // // // // // //     }
// // // // // // // // };

// // // // // // // // export default UploadRecipePage;

// // // // // // // import React, { useState } from 'react';
// // // // // // // import { TextField, Button, Container, Typography, Box, DialogTitle, DialogContent, IconButton } from '@mui/material';
// // // // // // // import CloseIcon from '@mui/icons-material/Close';

// // // // // // // function UploadRecipePage({ open, onClose, onRecipeUpload }) {
// // // // // // //     const [title, setTitle] = useState('');
// // // // // // //     const [description, setDescription] = useState('');
// // // // // // //     const [imageFile, setImageFile] = useState(null);
// // // // // // //     const [loading, setLoading] = useState(false);
// // // // // // //     const token = localStorage.getItem('token');

// // // // // // //     const handleFileChange = (e) => {
// // // // // // //         setImageFile(e.target.files[0]);
// // // // // // //     };

// // // // // // //     const handleSubmit = async (e) => {
// // // // // // //         e.preventDefault();
// // // // // // //         setLoading(true);

// // // // // // //         if (!token) {
// // // // // // //             alert("❌ You must be logged in to upload a recipe!");
// // // // // // //             setLoading(false);
// // // // // // //             return;
// // // // // // //         }

// // // // // // //         const formData = new FormData();
// // // // // // //         formData.append('title', title);
// // // // // // //         formData.append('description', description);
// // // // // // //         formData.append('image', imageFile);

// // // // // // //         try {
// // // // // // //             const response = await fetch('http://localhost:5000/api/recipes', {
// // // // // // //                 method: 'POST',
// // // // // // //                 headers: { 'Authorization': `Bearer ${token}` }, 
// // // // // // //                 body: formData
// // // // // // //             });

// // // // // // //             const responseData = await response.json();
// // // // // // //             if (!response.ok) {
// // // // // // //                 throw new Error(responseData.error || "❌ Error uploading recipe");
// // // // // // //             }

// // // // // // //             alert("✅ Recipe uploaded successfully!");
// // // // // // //             onRecipeUpload(responseData);
// // // // // // //             onClose();
// // // // // // //         } catch (error) {
// // // // // // //             console.error("Upload Error:", error.message);
// // // // // // //             alert(error.message);
// // // // // // //         } finally {
// // // // // // //             setLoading(false);
// // // // // // //         }
// // // // // // //     };

// // // // // // //     return (
// // // // // // //         <Container maxWidth="sm">
// // // // // // //             <Box sx={styles.popupContainer}>
// // // // // // //                 {/* 🔹 Title with "X" Button */}
// // // // // // //                 <DialogTitle sx={styles.popupTitle}>
// // // // // // //                     📸 Upload a Recipe
// // // // // // //                     <IconButton onClick={onClose} sx={styles.closeButton}>
// // // // // // //                         <CloseIcon />
// // // // // // //                     </IconButton>
// // // // // // //                 </DialogTitle>

// // // // // // //                 <DialogContent>
// // // // // // //                     <Box component="form" onSubmit={handleSubmit} sx={styles.form}>
// // // // // // //                         <TextField label="Recipe Title" value={title} onChange={(e) => setTitle(e.target.value)} required fullWidth />
// // // // // // //                         <TextField label="Description" value={description} onChange={(e) => setDescription(e.target.value)} required fullWidth />
// // // // // // //                         <input type="file" accept="image/*" onChange={handleFileChange} required />
// // // // // // //                         <Button type="submit" variant="contained" sx={styles.uploadButton} fullWidth disabled={loading}>
// // // // // // //                             {loading ? "Uploading..." : "Upload"}
// // // // // // //                         </Button>
// // // // // // //                     </Box>
// // // // // // //                 </DialogContent>
// // // // // // //             </Box>
// // // // // // //         </Container>
// // // // // // //     );
// // // // // // // }

// // // // // // // const styles = {
// // // // // // //     popupContainer: {
// // // // // // //         width: '500px',
// // // // // // //         padding: '20px',
// // // // // // //         borderRadius: '12px'
// // // // // // //     },
// // // // // // //     popupTitle: {
// // // // // // //         fontSize: '20px',
// // // // // // //         fontWeight: 'bold',
// // // // // // //         textAlign: 'center',
// // // // // // //         display: 'flex',
// // // // // // //         justifyContent: 'space-between',
// // // // // // //         alignItems: 'center'
// // // // // // //     },
// // // // // // //     closeButton: {
// // // // // // //         position: 'absolute',
// // // // // // //         right: 10,
// // // // // // //         top: 10
// // // // // // //     },
// // // // // // //     form: {
// // // // // // //         display: 'flex',
// // // // // // //         flexDirection: 'column',
// // // // // // //         gap: '15px',
// // // // // // //         padding: '10px'
// // // // // // //     },
// // // // // // //     uploadButton: {
// // // // // // //         backgroundColor: '#ff6f61',
// // // // // // //         '&:hover': {
// // // // // // //             backgroundColor: '#e65c50'
// // // // // // //         }
// // // // // // //     }
// // // // // // // };

// // // // // // // export default UploadRecipePage;

// // // // // // import React, { useState } from 'react';

// // // // // // function UploadRecipePage() {
// // // // // //     const [title, setTitle] = useState('');
// // // // // //     const [description, setDescription] = useState('');
// // // // // //     const [image, setImage] = useState(null);
// // // // // //     const token = localStorage.getItem('token');

// // // // // //     const handleSubmit = async (e) => {
// // // // // //         e.preventDefault();
// // // // // //         const formData = new FormData();
// // // // // //         formData.append('title', title);
// // // // // //         formData.append('description', description);
// // // // // //         formData.append('image', image);

// // // // // //         const response = await fetch('http://localhost:5000/api/recipes', {
// // // // // //             method: 'POST',
// // // // // //             headers: { 'Authorization': `Bearer ${token}` },
// // // // // //             body: formData
// // // // // //         });

// // // // // //         if (response.ok) {
// // // // // //             alert("Recipe uploaded successfully!");
// // // // // //         } else {
// // // // // //             alert("Failed to upload recipe.");
// // // // // //         }
// // // // // //     };

// // // // // //     return (
// // // // // //         <div style={styles.container}>
// // // // // //             <h2>Upload New Recipe</h2>
// // // // // //             <form onSubmit={handleSubmit} style={styles.form}>
// // // // // //                 <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} required />
// // // // // //                 <textarea placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} required />
// // // // // //                 <input type="file" onChange={(e) => setImage(e.target.files[0])} required />
// // // // // //                 <button type="submit">Upload</button>
// // // // // //             </form>
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // const styles = {
// // // // // //     container: { maxWidth: "500px", margin: "0 auto", padding: "20px" },
// // // // // //     form: { display: "flex", flexDirection: "column", gap: "10px" },
// // // // // // };

// // // // // // export default UploadRecipePage;

// // // // // import React, { useState } from "react";
// // // // // import { useNavigate } from "react-router-dom";
// // // // // import { Button, TextField, MenuItem, Select, FormControl, InputLabel, IconButton } from "@mui/material";
// // // // // import { CloudUpload, AddCircle, RemoveCircle } from "@mui/icons-material";

// // // // // function UploadRecipePage() {
// // // // //     const navigate = useNavigate();
// // // // //     const [isUploading, setIsUploading] = useState(false);
// // // // //     const [recipe, setRecipe] = useState({
// // // // //         title: "",
// // // // //         description: "",
// // // // //         ingredients: [""],
// // // // //         instructions: [""],
// // // // //         cookingTime: 30,
// // // // //         difficulty: "Medium",
// // // // //         category: "Dinner",
// // // // //         servings: 4
// // // // //     });
// // // // //     const [image, setImage] = useState(null);
// // // // //     const [previewUrl, setPreviewUrl] = useState(null);

// // // // //     const handleImageChange = (e) => {
// // // // //         const file = e.target.files[0];
// // // // //         if (file) {
// // // // //             setImage(file);
// // // // //             setPreviewUrl(URL.createObjectURL(file));
// // // // //         }
// // // // //     };

// // // // //     const handleIngredientChange = (index, value) => {
// // // // //         const newIngredients = [...recipe.ingredients];
// // // // //         newIngredients[index] = value;
// // // // //         setRecipe({ ...recipe, ingredients: newIngredients });
// // // // //     };

// // // // //     const handleInstructionChange = (index, value) => {
// // // // //         const newInstructions = [...recipe.instructions];
// // // // //         newInstructions[index] = value;
// // // // //         setRecipe({ ...recipe, instructions: newInstructions });
// // // // //     };

// // // // //     const addIngredient = () => {
// // // // //         setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
// // // // //     };

// // // // //     const removeIngredient = (index) => {
// // // // //         const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
// // // // //         setRecipe({ ...recipe, ingredients: newIngredients });
// // // // //     };

// // // // //     const addInstruction = () => {
// // // // //         setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] });
// // // // //     };

// // // // //     const removeInstruction = (index) => {
// // // // //         const newInstructions = recipe.instructions.filter((_, i) => i !== index);
// // // // //         setRecipe({ ...recipe, instructions: newInstructions });
// // // // //     };

// // // // //     const handleSubmit = async (e) => {
// // // // //         e.preventDefault();
// // // // //         if (!image) return;

// // // // //         setIsUploading(true);
// // // // //         try {
// // // // //             const formData = new FormData();
// // // // //             formData.append("title", recipe.title);
// // // // //             formData.append("description", recipe.description);
// // // // //             formData.append("cookingTime", recipe.cookingTime);
// // // // //             formData.append("difficulty", recipe.difficulty);
// // // // //             formData.append("category", recipe.category);
// // // // //             formData.append("servings", recipe.servings);
// // // // //             formData.append("ingredients", JSON.stringify(recipe.ingredients));
// // // // //             formData.append("instructions", JSON.stringify(recipe.instructions));
// // // // //             formData.append("image", image);

// // // // //             // const response = await fetch("http://localhost:5000/api/recipes", {
// // // // //             //     method: "POST",
// // // // //             //     body: formData
// // // // //             // });

// // // // //             const token = localStorage.getItem("token");

// // // // //             const response = await fetch("http://localhost:5000/api/recipes", {
// // // // //                 method: "POST",
// // // // //                 headers: {
// // // // //                     "Authorization": `Bearer ${token}`,
// // // // //                 },
// // // // //                 body: formData,
// // // // //             });


// // // // //             if (response.ok) {
// // // // //                 navigate("/");
// // // // //             } else {
// // // // //                 console.error("Error uploading recipe:", await response.json());
// // // // //             }
// // // // //         } catch (error) {
// // // // //             console.error("Error:", error);
// // // // //         }
// // // // //         setIsUploading(false);
// // // // //     };

// // // // //     return (
// // // // //         <div style={styles.container}>
// // // // //             <h2 style={styles.title}>Upload New Recipe</h2>
// // // // //             <form onSubmit={handleSubmit} style={styles.form}>
// // // // //                 {/* Image Upload */}
// // // // //                 <div style={styles.imageUpload}>
// // // // //                     <input
// // // // //                         type="file"
// // // // //                         accept="image/*"
// // // // //                         onChange={handleImageChange}
// // // // //                         style={{ display: "none" }}
// // // // //                         id="image-upload"
// // // // //                     />
// // // // //                     <label htmlFor="image-upload" style={styles.uploadBox}>
// // // // //                         {previewUrl ? (
// // // // //                             <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
// // // // //                         ) : (
// // // // //                             <>
// // // // //                                 <CloudUpload style={{ fontSize: 50, color: "gray" }} />
// // // // //                                 <p>Click to upload recipe image</p>
// // // // //                             </>
// // // // //                         )}
// // // // //                     </label>
// // // // //                 </div>

// // // // //                 {/* Recipe Title */}
// // // // //                 <TextField
// // // // //                     label="Recipe Title"
// // // // //                     value={recipe.title}
// // // // //                     onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
// // // // //                     fullWidth
// // // // //                     required
// // // // //                 />

// // // // //                 {/* Description */}
// // // // //                 <TextField
// // // // //                     label="Description"
// // // // //                     multiline
// // // // //                     rows={3}
// // // // //                     value={recipe.description}
// // // // //                     onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
// // // // //                     fullWidth
// // // // //                     required
// // // // //                 />

// // // // //                 {/* Cooking Time & Servings */}
// // // // //                 <div style={styles.row}>
// // // // //                     <TextField
// // // // //                         label="Cooking Time (minutes)"
// // // // //                         type="number"
// // // // //                         value={recipe.cookingTime}
// // // // //                         onChange={(e) => setRecipe({ ...recipe, cookingTime: e.target.value })}
// // // // //                         required
// // // // //                     />
// // // // //                     <TextField
// // // // //                         label="Servings"
// // // // //                         type="number"
// // // // //                         value={recipe.servings}
// // // // //                         onChange={(e) => setRecipe({ ...recipe, servings: e.target.value })}
// // // // //                         required
// // // // //                     />
// // // // //                 </div>

// // // // //                 {/* Difficulty & Category */}
// // // // //                 <div style={styles.row}>
// // // // //                     <FormControl fullWidth>
// // // // //                         <InputLabel>Difficulty</InputLabel>
// // // // //                         <Select
// // // // //                             value={recipe.difficulty}
// // // // //                             onChange={(e) => setRecipe({ ...recipe, difficulty: e.target.value })}
// // // // //                         >
// // // // //                             <MenuItem value="Easy">Easy</MenuItem>
// // // // //                             <MenuItem value="Medium">Medium</MenuItem>
// // // // //                             <MenuItem value="Hard">Hard</MenuItem>
// // // // //                         </Select>
// // // // //                     </FormControl>
// // // // //                     <FormControl fullWidth>
// // // // //                         <InputLabel>Category</InputLabel>
// // // // //                         <Select
// // // // //                             value={recipe.category}
// // // // //                             onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
// // // // //                         >
// // // // //                             <MenuItem value="Breakfast">Breakfast</MenuItem>
// // // // //                             <MenuItem value="Lunch">Lunch</MenuItem>
// // // // //                             <MenuItem value="Dinner">Dinner</MenuItem>
// // // // //                             <MenuItem value="Dessert">Dessert</MenuItem>
// // // // //                         </Select>
// // // // //                     </FormControl>
// // // // //                 </div>

// // // // //                 {/* Ingredients */}
// // // // //                 {recipe.ingredients.map((ingredient, index) => (
// // // // //                     <div key={index} style={styles.row}>
// // // // //                         <TextField
// // // // //                             label={`Ingredient ${index + 1}`}
// // // // //                             value={ingredient}
// // // // //                             onChange={(e) => handleIngredientChange(index, e.target.value)}
// // // // //                             fullWidth
// // // // //                         />
// // // // //                         <IconButton onClick={() => removeIngredient(index)}>
// // // // //                             <RemoveCircle />
// // // // //                         </IconButton>
// // // // //                     </div>
// // // // //                 ))}
// // // // //                 <Button onClick={addIngredient} startIcon={<AddCircle />} variant="outlined">
// // // // //                     Add Ingredient
// // // // //                 </Button>

// // // // //                 {/* Instructions */}
// // // // //                 {recipe.instructions.map((instruction, index) => (
// // // // //                     <div key={index} style={styles.row}>
// // // // //                         <TextField
// // // // //                             label={`Step ${index + 1}`}
// // // // //                             value={instruction}
// // // // //                             onChange={(e) => handleInstructionChange(index, e.target.value)}
// // // // //                             fullWidth
// // // // //                         />
// // // // //                         <IconButton onClick={() => removeInstruction(index)}>
// // // // //                             <RemoveCircle />
// // // // //                         </IconButton>
// // // // //                     </div>
// // // // //                 ))}
// // // // //                 <Button onClick={addInstruction} startIcon={<AddCircle />} variant="outlined">
// // // // //                     Add Step
// // // // //                 </Button>

// // // // //                 {/* Submit Button */}
// // // // //                 <Button type="submit" variant="contained" color="primary" fullWidth disabled={isUploading}>
// // // // //                     {isUploading ? "Uploading..." : "Share Recipe"}
// // // // //                 </Button>
// // // // //             </form>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default UploadRecipePage;

// // // // // const styles = {
// // // // //     container: { maxWidth: "500px", margin: "0 auto", padding: "20px" },
// // // // //     title: { textAlign: "center", marginBottom: "20px" },
// // // // //     form: { display: "flex", flexDirection: "column", gap: "15px" },
// // // // //     row: { display: "flex", gap: "10px", alignItems: "center" },
// // // // //     imageUpload: { textAlign: "center" },
// // // // //     uploadBox: { border: "2px dashed gray", padding: "20px", cursor: "pointer", display: "inline-block" },
// // // // //     imagePreview: { width: "100%", height: "auto", borderRadius: "10px" }
// // // // // };

// // // // import React, { useState } from "react";
// // // // import { useNavigate } from "react-router-dom";
// // // // import {
// // // //   Button,
// // // //   TextField,
// // // //   MenuItem,
// // // //   Select,
// // // //   FormControl,
// // // //   InputLabel,
// // // //   IconButton
// // // // } from "@mui/material";
// // // // import { CloudUpload, AddCircle, RemoveCircle } from "@mui/icons-material";

// // // // function UploadRecipePage() {
// // // //   const navigate = useNavigate();
// // // //   const [isUploading, setIsUploading] = useState(false);
// // // //   const [recipe, setRecipe] = useState({
// // // //     title: "",
// // // //     description: "",
// // // //     ingredients: [""],
// // // //     instructions: [""],
// // // //     cookingTime: 30,
// // // //     difficulty: "Medium",
// // // //     category: "Dinner",
// // // //     servings: 4
// // // //   });
// // // //   const [image, setImage] = useState(null);
// // // //   const [previewUrl, setPreviewUrl] = useState(null);

// // // //   const handleImageChange = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (file) {
// // // //       setImage(file);
// // // //       setPreviewUrl(URL.createObjectURL(file));
// // // //     }
// // // //   };

// // // //   const handleIngredientChange = (index, value) => {
// // // //     const newIngredients = [...recipe.ingredients];
// // // //     newIngredients[index] = value;
// // // //     setRecipe({ ...recipe, ingredients: newIngredients });
// // // //   };

// // // //   const handleInstructionChange = (index, value) => {
// // // //     const newInstructions = [...recipe.instructions];
// // // //     newInstructions[index] = value;
// // // //     setRecipe({ ...recipe, instructions: newInstructions });
// // // //   };

// // // //   const addIngredient = () => {
// // // //     setRecipe({ ...recipe, ingredients: [...recipe.ingredients, ""] });
// // // //   };

// // // //   const removeIngredient = (index) => {
// // // //     const newIngredients = recipe.ingredients.filter((_, i) => i !== index);
// // // //     setRecipe({ ...recipe, ingredients: newIngredients });
// // // //   };

// // // //   const addInstruction = () => {
// // // //     setRecipe({ ...recipe, instructions: [...recipe.instructions, ""] });
// // // //   };

// // // //   const removeInstruction = (index) => {
// // // //     const newInstructions = recipe.instructions.filter((_, i) => i !== index);
// // // //     setRecipe({ ...recipe, instructions: newInstructions });
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();

// // // //     const token = localStorage.getItem("token");
// // // //     if (!token) {
// // // //       alert("You must be logged in to upload a recipe.");
// // // //       return;
// // // //     }

// // // //     if (!image) {
// // // //       alert("Please upload an image for your recipe.");
// // // //       return;
// // // //     }

// // // //     try {
// // // //       setIsUploading(true);

// // // //       const formData = new FormData();
// // // //       formData.append("title", recipe.title);
// // // //       formData.append("description", recipe.description);
// // // //       formData.append("cooking_time", recipe.cookingTime); // ✅ cookingTime!
// // // //       formData.append("servings", recipe.servings);
// // // //       formData.append("difficulty", recipe.difficulty);
// // // //       formData.append("category", recipe.category);
// // // //       formData.append("image", image);
// // // //       formData.append("ingredients", JSON.stringify(recipe.ingredients));
// // // //       formData.append("instructions", JSON.stringify(recipe.instructions));

// // // //       const response = await fetch("http://localhost:5000/api/recipes", {
// // // //         method: "POST",
// // // //         headers: {
// // // //           Authorization: `Bearer ${token}`
// // // //         },
// // // //         body: formData
// // // //       });

// // // //       if (!response.ok) {
// // // //         const errorData = await response.json();
// // // //         console.error("Server error:", errorData);
// // // //         alert("Error uploading recipe. Please try again.");
// // // //         return;
// // // //       }

// // // //       alert("Recipe uploaded successfully!");
// // // //       navigate("/");
// // // //     } catch (error) {
// // // //       console.error("Upload error:", error);
// // // //       alert("There was an error uploading the recipe.");
// // // //     } finally {
// // // //       setIsUploading(false);
// // // //     }
// // // //   };

// // // //   return (
// // // //     <div style={styles.container}>
// // // //       <h2 style={styles.title}>Upload New Recipe</h2>
// // // //       <form onSubmit={handleSubmit} style={styles.form}>
// // // //         {/* Image Upload */}
// // // //         <div style={styles.imageUpload}>
// // // //           <input
// // // //             type="file"
// // // //             accept="image/*"
// // // //             onChange={handleImageChange}
// // // //             style={{ display: "none" }}
// // // //             id="image-upload"
// // // //           />
// // // //           <label htmlFor="image-upload" style={styles.uploadBox}>
// // // //             {previewUrl ? (
// // // //               <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
// // // //             ) : (
// // // //               <>
// // // //                 <CloudUpload style={{ fontSize: 50, color: "gray" }} />
// // // //                 <p>Click to upload recipe image</p>
// // // //               </>
// // // //             )}
// // // //           </label>
// // // //         </div>

// // // //         {/* Title */}
// // // //         <TextField
// // // //           label="Recipe Title"
// // // //           value={recipe.title}
// // // //           onChange={(e) => setRecipe({ ...recipe, title: e.target.value })}
// // // //           fullWidth
// // // //           required
// // // //         />

// // // //         {/* Description */}
// // // //         <TextField
// // // //           label="Description"
// // // //           multiline
// // // //           rows={3}
// // // //           value={recipe.description}
// // // //           onChange={(e) => setRecipe({ ...recipe, description: e.target.value })}
// // // //           fullWidth
// // // //           required
// // // //         />

// // // //         {/* Cooking Time & Servings */}
// // // //         <div style={styles.row}>
// // // //           <TextField
// // // //             label="Cooking Time (minutes)"
// // // //             type="number"
// // // //             value={recipe.cookingTime}
// // // //             onChange={(e) => setRecipe({ ...recipe, cookingTime: e.target.value })}
// // // //             required
// // // //           />
// // // //           <TextField
// // // //             label="Servings"
// // // //             type="number"
// // // //             value={recipe.servings}
// // // //             onChange={(e) => setRecipe({ ...recipe, servings: e.target.value })}
// // // //             required
// // // //           />
// // // //         </div>

// // // //         {/* Difficulty & Category */}
// // // //         <div style={styles.row}>
// // // //           <FormControl fullWidth>
// // // //             <InputLabel>Difficulty</InputLabel>
// // // //             <Select
// // // //               value={recipe.difficulty}
// // // //               onChange={(e) => setRecipe({ ...recipe, difficulty: e.target.value })}
// // // //             >
// // // //               <MenuItem value="Easy">Easy</MenuItem>
// // // //               <MenuItem value="Medium">Medium</MenuItem>
// // // //               <MenuItem value="Hard">Hard</MenuItem>
// // // //             </Select>
// // // //           </FormControl>
// // // //           <FormControl fullWidth>
// // // //             <InputLabel>Category</InputLabel>
// // // //             <Select
// // // //               value={recipe.category}
// // // //               onChange={(e) => setRecipe({ ...recipe, category: e.target.value })}
// // // //             >
// // // //               <MenuItem value="Breakfast">Breakfast</MenuItem>
// // // //               <MenuItem value="Lunch">Lunch</MenuItem>
// // // //               <MenuItem value="Dinner">Dinner</MenuItem>
// // // //               <MenuItem value="Dessert">Dessert</MenuItem>
// // // //             </Select>
// // // //           </FormControl>
// // // //         </div>

// // // //         {/* Ingredients */}
// // // //         {recipe.ingredients.map((ingredient, index) => (
// // // //           <div key={index} style={styles.row}>
// // // //             <TextField
// // // //               label={`Ingredient ${index + 1}`}
// // // //               value={ingredient}
// // // //               onChange={(e) => handleIngredientChange(index, e.target.value)}
// // // //               fullWidth
// // // //             />
// // // //             <IconButton onClick={() => removeIngredient(index)}>
// // // //               <RemoveCircle />
// // // //             </IconButton>
// // // //           </div>
// // // //         ))}
// // // //         <Button onClick={addIngredient} startIcon={<AddCircle />} variant="outlined">
// // // //           Add Ingredient
// // // //         </Button>

// // // //         {/* Instructions */}
// // // //         {recipe.instructions.map((instruction, index) => (
// // // //           <div key={index} style={styles.row}>
// // // //             <TextField
// // // //               label={`Step ${index + 1}`}
// // // //               value={instruction}
// // // //               onChange={(e) => handleInstructionChange(index, e.target.value)}
// // // //               fullWidth
// // // //             />
// // // //             <IconButton onClick={() => removeInstruction(index)}>
// // // //               <RemoveCircle />
// // // //             </IconButton>
// // // //           </div>
// // // //         ))}
// // // //         <Button onClick={addInstruction} startIcon={<AddCircle />} variant="outlined">
// // // //           Add Step
// // // //         </Button>

// // // //         {/* Submit */}
// // // //         <Button type="submit" variant="contained" color="primary" fullWidth disabled={isUploading}>
// // // //           {isUploading ? "Uploading..." : "Share Recipe"}
// // // //         </Button>
// // // //       </form>
// // // //     </div>
// // // //   );
// // // // }

// // // // export default UploadRecipePage;

// // // // const styles = {
// // // //   container: { maxWidth: "500px", margin: "0 auto", padding: "20px" },
// // // //   title: { textAlign: "center", marginBottom: "20px" },
// // // //   form: { display: "flex", flexDirection: "column", gap: "15px" },
// // // //   row: { display: "flex", gap: "10px", alignItems: "center" },
// // // //   imageUpload: { textAlign: "center" },
// // // //   uploadBox: {
// // // //     border: "2px dashed gray",
// // // //     padding: "20px",
// // // //     cursor: "pointer",
// // // //     display: "inline-block"
// // // //   },
// // // //   imagePreview: { width: "100%", height: "auto", borderRadius: "10px" }
// // // // };

// // // import React, { useState } from "react";
// // // import { useNavigate } from "react-router-dom";
// // // import {
// // //   TextField, Button, IconButton, InputLabel, MenuItem,
// // //   FormControl, Select
// // // } from "@mui/material";
// // // import { AddCircle, RemoveCircle, CloudUpload } from "@mui/icons-material";

// // // function UploadRecipePage() {
// // //   const navigate = useNavigate();
// // //   const [isUploading, setIsUploading] = useState(false);
// // //   const [recipe, setRecipe] = useState({
// // //     title: "",
// // //     description: "",
// // //     cookingTime: "",
// // //     servings: "",
// // //     difficulty: "",
// // //     category: "",
// // //     ingredients: [""],
// // //     instructions: [""],
// // //   });
// // //   const [image, setImage] = useState(null);
// // //   const [previewUrl, setPreviewUrl] = useState(null);

// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       setImage(file);
// // //       setPreviewUrl(URL.createObjectURL(file));
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setRecipe((prev) => ({ ...prev, [name]: value }));
// // //   };

// // //   const handleListChange = (index, value, field) => {
// // //     const updated = [...recipe[field]];
// // //     updated[index] = value;
// // //     setRecipe({ ...recipe, [field]: updated });
// // //   };

// // //   const addField = (field) => {
// // //     setRecipe({ ...recipe, [field]: [...recipe[field], ""] });
// // //   };

// // //   const removeField = (index, field) => {
// // //     const updated = recipe[field].filter((_, i) => i !== index);
// // //     setRecipe({ ...recipe, [field]: updated });
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();

// // //     const token = localStorage.getItem("token");
// // //     if (!token) return alert("Login required.");

// // //     if (!image) return alert("Please upload an image.");

// // //     try {
// // //       setIsUploading(true);
// // //       const formData = new FormData();
// // //       formData.append("title", recipe.title);
// // //       formData.append("description", recipe.description);
// // //       formData.append("cooking_time", recipe.cookingTime);
// // //       formData.append("servings", recipe.servings);
// // //       formData.append("difficulty", recipe.difficulty);
// // //       formData.append("category", recipe.category);
// // //       formData.append("image", image);
// // //       formData.append("ingredients", JSON.stringify(recipe.ingredients));
// // //       formData.append("instructions", JSON.stringify(recipe.instructions));

// // //       const res = await fetch("http://localhost:5000/api/recipes", {
// // //         method: "POST",
// // //         headers: { Authorization: `Bearer ${token}` },
// // //         body: formData,
// // //       });

// // //       if (!res.ok) {
// // //         const errorData = await res.json();
// // //         console.error("Upload failed:", errorData);
// // //         alert("Error uploading recipe.");
// // //         return;
// // //       }

// // //       alert("Recipe uploaded!");
// // //       navigate("/");
// // //     } catch (err) {
// // //       console.error("Upload error:", err);
// // //       alert("Upload failed.");
// // //     } finally {
// // //       setIsUploading(false);
// // //     }
// // //   };

// // //   return (
// // //     <div style={styles.container}>
// // //       <h2 style={styles.title}>Upload New Recipe</h2>
// // //       <form onSubmit={handleSubmit} style={styles.form}>
// // //         <div style={styles.imageUpload}>
// // //           <input
// // //             type="file"
// // //             accept="image/*"
// // //             onChange={handleImageChange}
// // //             style={{ display: "none" }}
// // //             id="image-upload"
// // //           />
// // //           <label htmlFor="image-upload" style={styles.uploadBox}>
// // //             {previewUrl ? (
// // //               <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
// // //             ) : (
// // //               <>
// // //                 <CloudUpload style={{ fontSize: 40 }} />
// // //                 <p>Click to upload recipe image</p>
// // //               </>
// // //             )}
// // //           </label>
// // //         </div>

// // //         <TextField
// // //           name="title"
// // //           label="Recipe Title *"
// // //           value={recipe.title}
// // //           onChange={handleChange}
// // //           fullWidth required
// // //         />

// // //         <TextField
// // //           name="description"
// // //           label="Description *"
// // //           value={recipe.description}
// // //           onChange={handleChange}
// // //           fullWidth required
// // //           multiline rows={3}
// // //         />

// // //         <div style={styles.row}>
// // //         <FormControl fullWidth>
// // //           <TextField
// // //             name="cookingTime"
// // //             label="Cooking Time (minutes) *"
// // //             type="number"
// // //             value={recipe.cookingTime}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //           </FormControl>

// // //           <FormControl fullWidth>
// // //           <TextField
// // //             name="servings"
// // //             label="Servings *"
// // //             type="number"
// // //             value={recipe.servings}
// // //             onChange={handleChange}
// // //             required
// // //           />
// // //           </FormControl>
// // //         </div>

// // //         <div style={styles.row}>
// // //           <FormControl fullWidth>
// // //             <InputLabel>Difficulty</InputLabel>
// // //             <Select
// // //               name="difficulty"
// // //               value={recipe.difficulty}
// // //               onChange={handleChange}
// // //             >
// // //               <MenuItem value="Easy">Easy</MenuItem>
// // //               <MenuItem value="Medium">Medium</MenuItem>
// // //               <MenuItem value="Hard">Hard</MenuItem>
// // //             </Select>
// // //           </FormControl>

// // //           <FormControl fullWidth>
// // //             <InputLabel>Category</InputLabel>
// // //             <Select
// // //               name="category"
// // //               value={recipe.category}
// // //               onChange={handleChange}
// // //             >
// // //               <MenuItem value="Breakfast">Breakfast</MenuItem>
// // //               <MenuItem value="Lunch">Lunch</MenuItem>
// // //               <MenuItem value="Dinner">Dinner</MenuItem>
// // //               <MenuItem value="Dessert">Dessert</MenuItem>
// // //             </Select>
// // //           </FormControl>
// // //         </div>

// // //         {recipe.ingredients.map((ing, i) => (
// // //           <div key={i} style={styles.row}>
// // //             <TextField
// // //               fullWidth
// // //               label={`Ingredient ${i + 1}`}
// // //               value={ing}
// // //               onChange={(e) => handleListChange(i, e.target.value, "ingredients")}
// // //             />
// // //             <IconButton onClick={() => removeField(i, "ingredients")}>
// // //               <RemoveCircle />
// // //             </IconButton>
// // //           </div>
// // //         ))}
// // //         <Button onClick={() => addField("ingredients")} startIcon={<AddCircle />} variant="outlined">
// // //           Add Ingredient
// // //         </Button>

// // //         {recipe.instructions.map((step, i) => (
// // //           <div key={i} style={styles.row}>
// // //             <TextField
// // //               fullWidth
// // //               label={`Step ${i + 1}`}
// // //               value={step}
// // //               onChange={(e) => handleListChange(i, e.target.value, "instructions")}
// // //             />
// // //             <IconButton onClick={() => removeField(i, "instructions")}>
// // //               <RemoveCircle />
// // //             </IconButton>
// // //           </div>
// // //         ))}
// // //         <Button onClick={() => addField("instructions")} startIcon={<AddCircle />} variant="outlined">
// // //           Add Step
// // //         </Button>

// // //         <Button
// // //           type="submit"
// // //           variant="contained"
// // //           fullWidth
// // //           disabled={isUploading}
// // //         >
// // //           {isUploading ? "Uploading..." : "Share Recipe"}
// // //         </Button>
// // //       </form>
// // //     </div>
// // //   );
// // // }

// // // export default UploadRecipePage;

// // // const styles = {
// // //   container: { maxWidth: "500px", margin: "0 auto", padding: "20px" },
// // //   title: { textAlign: "center", marginBottom: "20px", color: "#a82265" },
// // //   form: { display: "flex", flexDirection: "column", gap: "15px" },
// // //   row: { display: "flex", alignItems: "center", gap: "10px" },
// // //   imageUpload: { textAlign: "center" },
// // //   uploadBox: {
// // //   border: "2px dashed gray",
// // //   borderRadius: "8px",
// // //   padding: "16px",
// // //   cursor: "pointer",
// // //   display: "flex",          // 📌 חשוב לשים display: flex
// // //   flexDirection: "column",  // מאפשר שהאייקון והטקסט יוצגו אחד מעל השני
// // //   alignItems: "center",
// // //   justifyContent: "center",
// // //   width: "100%",            // 📌 שווה לרוחב של TextField
// // //   textAlign: "center",
// // //   boxSizing: "border-box",  // 📌 חשוב לוודא שה-padding לא יחרוג מהרוחב
// // // },
// // //   imagePreview: {
// // //     width: "100%",
// // //     maxHeight: 200,
// // //     objectFit: "cover",
// // //     borderRadius: "10px",
// // //   },
// // // };

// // // src/pages/UploadRecipePage.js
// // import React, { useState } from "react";
// // import { useNavigate } from "react-router-dom";
// // import {
// //   TextField, Button, IconButton, InputLabel, MenuItem,
// //   FormControl, Select
// // } from "@mui/material";
// // import { AddCircle, RemoveCircle, CloudUpload } from "@mui/icons-material";
// // import '../styles/authPages.css';

// // function UploadRecipePage() {
// //   const navigate = useNavigate();
// //   const [isUploading, setIsUploading] = useState(false);
// //   const [recipe, setRecipe] = useState({
// //     title: "",
// //     description: "",
// //     cookingTime: "",
// //     servings: "",
// //     difficulty: "",
// //     category: "",
// //     ingredients: [""],
// //     instructions: [""],
// //   });
// //   const [image, setImage] = useState(null);
// //   const [previewUrl, setPreviewUrl] = useState(null);

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setImage(file);
// //       setPreviewUrl(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setRecipe((prev) => ({ ...prev, [name]: value }));
// //   };

// //   const handleListChange = (index, value, field) => {
// //     const updated = [...recipe[field]];
// //     updated[index] = value;
// //     setRecipe({ ...recipe, [field]: updated });
// //   };

// //   const addField = (field) => {
// //     setRecipe({ ...recipe, [field]: [...recipe[field], ""] });
// //   };

// //   const removeField = (index, field) => {
// //     const updated = recipe[field].filter((_, i) => i !== index);
// //     setRecipe({ ...recipe, [field]: updated });
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();

// //     const token = localStorage.getItem("token");
// //     if (!token) return alert("Login required.");

// //     if (!image) return alert("Please upload an image.");

// //     try {
// //       setIsUploading(true);
// //       const formData = new FormData();
// //       formData.append("title", recipe.title);
// //       formData.append("description", recipe.description);
// //       formData.append("cooking_time", recipe.cookingTime);
// //       formData.append("servings", recipe.servings);
// //       formData.append("difficulty", recipe.difficulty);
// //       formData.append("category", recipe.category);
// //       formData.append("image", image);
// //       formData.append("ingredients", JSON.stringify(recipe.ingredients));
// //       formData.append("instructions", JSON.stringify(recipe.instructions));

// //       const res = await fetch("http://localhost:5000/api/recipes", {
// //         method: "POST",
// //         headers: { Authorization: `Bearer ${token}` },
// //         body: formData,
// //       });

// //       if (!res.ok) {
// //         const errorData = await res.json();
// //         console.error("Upload failed:", errorData);
// //         alert("Error uploading recipe.");
// //         return;
// //       }

// //       alert("Recipe uploaded!");
// //       navigate("/");
// //     } catch (err) {
// //       console.error("Upload error:", err);
// //       alert("Upload failed.");
// //     } finally {
// //       setIsUploading(false);
// //     }
// //   };

// //   return (
// //     <div style={styles.container}>
// //       <img src="/instaFood_logo.png" alt="InstaFood Logo" style={styles.logo} />
// //       <h2 style={styles.title}>Upload New Recipe</h2>
// //       <form onSubmit={handleSubmit} style={styles.form}>
// //         <div style={styles.imageUpload}>
// //           <input
// //             type="file"
// //             accept="image/*"
// //             onChange={handleImageChange}
// //             style={{ display: "none" }}
// //             id="image-upload"
// //           />
// //           <label htmlFor="image-upload" style={styles.uploadBox}>
// //             {previewUrl ? (
// //               <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
// //             ) : (
// //               <>
// //                 <CloudUpload style={{ fontSize: 40 }} />
// //                 <p>Click to upload recipe image</p>
// //               </>
// //             )}
// //           </label>
// //         </div>

// //         <TextField
// //           name="title"
// //           label="Recipe Title *"
// //           value={recipe.title}
// //           onChange={handleChange}
// //           fullWidth required
// //           sx={styles.input}
// //         />

// //         <TextField
// //           name="description"
// //           label="Description *"
// //           value={recipe.description}
// //           onChange={handleChange}
// //           fullWidth required
// //           multiline rows={3}
// //           sx={styles.input}
// //         />

// //         <div style={styles.row}>
// //           <TextField
// //             name="cookingTime"
// //             label="Cooking Time (minutes) *"
// //             type="number"
// //             value={recipe.cookingTime}
// //             onChange={handleChange}
// //             fullWidth required
// //             sx={styles.input}
// //           />
// //           <TextField
// //             name="servings"
// //             label="Servings *"
// //             type="number"
// //             value={recipe.servings}
// //             onChange={handleChange}
// //             fullWidth required
// //             sx={styles.input}
// //           />
// //         </div>

// //         <div style={styles.row}>
// //           <FormControl fullWidth sx={styles.input}>
// //             <InputLabel>Difficulty</InputLabel>
// //             <Select
// //               name="difficulty"
// //               value={recipe.difficulty}
// //               onChange={handleChange}
// //               required
// //             >
// //               <MenuItem value="Easy">Easy</MenuItem>
// //               <MenuItem value="Medium">Medium</MenuItem>
// //               <MenuItem value="Hard">Hard</MenuItem>
// //             </Select>
// //           </FormControl>

// //           <FormControl fullWidth sx={styles.input}>
// //             <InputLabel>Category</InputLabel>
// //             <Select
// //               name="category"
// //               value={recipe.category}
// //               onChange={handleChange}
// //               required
// //             >
// //               <MenuItem value="Breakfast">Breakfast</MenuItem>
// //               <MenuItem value="Lunch">Lunch</MenuItem>
// //               <MenuItem value="Dinner">Dinner</MenuItem>
// //               <MenuItem value="Dessert">Dessert</MenuItem>
// //             </Select>
// //           </FormControl>
// //         </div>

// //         {recipe.ingredients.map((ing, i) => (
// //           <div key={i} style={styles.row}>
// //             <TextField
// //               fullWidth
// //               label={`Ingredient ${i + 1}`}
// //               value={ing}
// //               onChange={(e) => handleListChange(i, e.target.value, "ingredients")}
// //               sx={styles.input}
// //             />
// //             <IconButton onClick={() => removeField(i, "ingredients")}>
// //               <RemoveCircle />
// //             </IconButton>
// //           </div>
// //         ))}
// //         <Button onClick={() => addField("ingredients")} startIcon={<AddCircle />} variant="outlined" sx={styles.button}>
// //           Add Ingredient
// //         </Button>

// //         {recipe.instructions.map((step, i) => (
// //           <div key={i} style={styles.row}>
// //             <TextField
// //               fullWidth
// //               label={`Step ${i + 1}`}
// //               value={step}
// //               onChange={(e) => handleListChange(i, e.target.value, "instructions")}
// //               sx={styles.input}
// //             />
// //             <IconButton onClick={() => removeField(i, "instructions")}>
// //               <RemoveCircle />
// //             </IconButton>
// //           </div>
// //         ))}
// //         <Button onClick={() => addField("instructions")} startIcon={<AddCircle />} variant="outlined" sx={styles.button}>
// //           Add Step
// //         </Button>

// //         <Button
// //           type="submit"
// //           variant="contained"
// //           fullWidth
// //           disabled={isUploading}
// //           sx={styles.button}
// //         >
// //           {isUploading ? "Uploading..." : "Share Recipe"}
// //         </Button>
// //       </form>
// //     </div>
// //   );
// // }

// // export default UploadRecipePage;

// // const styles = {
// //   container: {
// //     maxWidth: "520px",
// //     margin: "0 auto",
// //     padding: "30px",
// //     textAlign: "center"
// //   },
// //   logo: {
// //     width: "80px",
// //     height: "80px",
// //     objectFit: "cover",
// //     borderRadius: "16px",
// //     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
// //     border: "2px solid #ff6600",
// //     marginBottom: "12px"
// //   },
// //   title: {
// //     fontWeight: "bold",
// //     fontSize: "24px",
// //     marginBottom: "20px",
// //     color: "#ff6600",
// //     fontFamily: "'Roboto', sans-serif"
// //   },
// //   form: {
// //     display: "flex",
// //     flexDirection: "column",
// //     gap: "15px"
// //   },
// //   row: {
// //     display: "flex",
// //     gap: "10px",
// //     alignItems: "center"
// //   },
// //   input: {
// //     borderRadius: "8px"
// //   },
// //   button: {
// //     backgroundColor: "#ff6600",
// //     color: "white",
// //     fontWeight: "bold",
// //     borderRadius: "8px",
// //     "&:hover": {
// //       backgroundColor: "#e05500"
// //     }
// //   },
// //   imageUpload: {
// //     textAlign: "center"
// //   },
// //   uploadBox: {
// //     border: "2px dashed gray",
// //     borderRadius: "8px",
// //     padding: "16px",
// //     cursor: "pointer",
// //     display: "flex",
// //     flexDirection: "column",
// //     alignItems: "center",
// //     justifyContent: "center",
// //     width: "100%",
// //     textAlign: "center",
// //     boxSizing: "border-box"
// //   },
// //   imagePreview: {
// //     width: "100%",
// //     maxHeight: 200,
// //     objectFit: "cover",
// //     borderRadius: "10px"
// //   }
// // };


// // src/pages/UploadRecipePage.js
// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   TextField, Button, IconButton, InputLabel, MenuItem,
//   FormControl, Select
// } from "@mui/material";
// import { AddCircle, RemoveCircle, CloudUpload } from "@mui/icons-material";
// import '../styles/authPages.css';

// function UploadRecipePage() {
//   const navigate = useNavigate();
//   const [isUploading, setIsUploading] = useState(false);
//   const [recipe, setRecipe] = useState({
//     title: "",
//     description: "",
//     cookingTime: "",
//     servings: "",
//     difficulty: "",
//     category: "",
//     ingredients: [""],
//     instructions: [""],
//   });
//   const [image, setImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipe((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleListChange = (index, value, field) => {
//     const updated = [...recipe[field]];
//     updated[index] = value;
//     setRecipe({ ...recipe, [field]: updated });
//   };

//   const addField = (field) => {
//     setRecipe({ ...recipe, [field]: [...recipe[field], ""] });
//   };

//   const removeField = (index, field) => {
//     const updated = recipe[field].filter((_, i) => i !== index);
//     setRecipe({ ...recipe, [field]: updated });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     if (!token) return alert("Login required.");

//     if (!image) return alert("Please upload an image.");

//     try {
//       setIsUploading(true);
//       const formData = new FormData();
//       formData.append("title", recipe.title);
//       formData.append("description", recipe.description);
//       formData.append("cooking_time", recipe.cookingTime);
//       formData.append("servings", recipe.servings);
//       formData.append("difficulty", recipe.difficulty);
//       formData.append("category", recipe.category);
//       formData.append("image", image);
//       formData.append("ingredients", JSON.stringify(recipe.ingredients));
//       formData.append("instructions", JSON.stringify(recipe.instructions));

//       const res = await fetch("http://localhost:5000/api/recipes", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error("Upload failed:", errorData);
//         alert("Error uploading recipe.");
//         return;
//       }

//       alert("Recipe uploaded!");
//       navigate("/");
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Upload failed.");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <img src="/instaFood_logo.png" alt="InstaFood Logo" style={styles.logo} />
//       <h2 style={styles.title}>Upload New Recipe</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.imageUpload}>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             style={{ display: "none" }}
//             id="image-upload"
//           />
//           <label htmlFor="image-upload" style={styles.uploadBox}>
//             {previewUrl ? (
//               <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
//             ) : (
//               <>
//                 <CloudUpload style={{ fontSize: 40 }} />
//                 <p>Click to upload recipe image</p>
//               </>
//             )}
//           </label>
//         </div>

//         <TextField
//           name="title"
//           label="Recipe Title *"
//           value={recipe.title}
//           onChange={handleChange}
//           fullWidth required
//           sx={styles.input}
//         />

//         <TextField
//           name="description"
//           label="Description *"
//           value={recipe.description}
//           onChange={handleChange}
//           fullWidth required
//           multiline rows={3}
//           sx={styles.input}
//         />

//         <div style={styles.row}>
//           <TextField
//             name="cookingTime"
//             label="Cooking Time (minutes) *"
//             type="number"
//             value={recipe.cookingTime}
//             onChange={handleChange}
//             fullWidth required
//             inputProps={{ min: 0 }}
//             sx={styles.input}
//           />
//           <TextField
//             name="servings"
//             label="Servings *"
//             type="number"
//             value={recipe.servings}
//             onChange={handleChange}
//             fullWidth required
//             inputProps={{ min: 0 }}
//             sx={styles.input}
//           />
//         </div>

//         <div style={styles.row}>
//           <FormControl fullWidth variant="outlined" sx={styles.input}>
//             <InputLabel>Difficulty</InputLabel>
//             <Select
//             labelId="difficulty-label"
//             label="Difficulty"
//               name="difficulty"
//               value={recipe.difficulty}
//               onChange={handleChange}
//               required
//             >
//               <MenuItem value="Easy">Easy</MenuItem>
//               <MenuItem value="Medium">Medium</MenuItem>
//               <MenuItem value="Hard">Hard</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl fullWidth variant="outlined" sx={styles.input}>
//             <InputLabel>Category</InputLabel>
//             <Select
//             labelId="category-label"
//             label="Category"
//               name="category"
//               value={recipe.category}
//               onChange={handleChange}
//               required
//             >
//               <MenuItem value="Breakfast">Breakfast</MenuItem>
//               <MenuItem value="Lunch">Lunch</MenuItem>
//               <MenuItem value="Dinner">Dinner</MenuItem>
//               <MenuItem value="Dessert">Dessert</MenuItem>
//             </Select>
//           </FormControl>
//         </div>

//         {recipe.ingredients.map((ing, i) => (
//           <div key={i} style={styles.row}>
//             <TextField
//               fullWidth
//               label={`Ingredient ${i + 1}`}
//               value={ing}
//               onChange={(e) => handleListChange(i, e.target.value, "ingredients")}
//               sx={styles.input}
//             />
//             <IconButton onClick={() => removeField(i, "ingredients")} variant="contained" sx={styles.button}>
//               <RemoveCircle />
//             </IconButton>
//           </div>
//         ))}
//         <Button onClick={() => addField("ingredients")} startIcon={<AddCircle />} variant="contained" sx={styles.button}>
//           Add Ingredient
//         </Button>

//         {recipe.instructions.map((step, i) => (
//           <div key={i} style={styles.row}>
//             <TextField
//               fullWidth
//               label={`Step ${i + 1}`}
//               value={step}
//               onChange={(e) => handleListChange(i, e.target.value, "instructions")}
//               sx={styles.input}
//             />
//             <IconButton onClick={() => removeField(i, "instructions")} variant="contained" sx={styles.button}>
//               <RemoveCircle />
//             </IconButton>
//           </div>
//         ))}
//         <Button onClick={() => addField("instructions")} startIcon={<AddCircle />} variant="contained" sx={styles.button}>
//           Add Step
//         </Button>

//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           disabled={isUploading}
//           sx={styles.button}
//         >
//           {isUploading ? "Uploading..." : "Share Recipe"}
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default UploadRecipePage;

// const styles = {
//   container: {
//     maxWidth: "520px",
//     margin: "0 auto",
//     padding: "30px",
//     textAlign: "center"
//   },
//   logo: {
//     width: "80px",
//     height: "80px",
//     objectFit: "cover",
//     borderRadius: "16px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//     border: "2px solid #ff6600",
//     marginBottom: "12px"
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: "24px",
//     marginBottom: "20px",
//     color: "#ff6600",
//     fontFamily: "'Roboto', sans-serif"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px"
//   },
//   row: {
//     display: "flex",
//     gap: "10px",
//     alignItems: "center"
//   },
//   input: {
//     borderRadius: "8px"
//   },
//   button: {
//     backgroundColor: "#ff6600",
//     color: "white",
//     fontWeight: "bold",
//     borderRadius: "8px",
//     "&:hover": {
//       backgroundColor: "#e05500"
//     }
//   },
//   imageUpload: {
//     textAlign: "center"
//   },
//   uploadBox: {
//     border: "2px dashed gray",
//     borderRadius: "8px",
//     padding: "16px",
//     cursor: "pointer",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     textAlign: "center",
//     boxSizing: "border-box"
//   },
//   imagePreview: {
//     width: "100%",
//     maxHeight: 200,
//     objectFit: "cover",
//     borderRadius: "10px"
//   }
// };

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField, Button, IconButton, InputLabel, MenuItem,
  FormControl, Select, Autocomplete
} from "@mui/material";
import { AddCircle, RemoveCircle, CloudUpload } from "@mui/icons-material";
import '../styles/authPages.css';

function UploadRecipePage() {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    cookingTime: "",
    servings: "",
    difficulty: "",
    category: "",
    ingredients: [""],
    instructions: [""],
    tags: [] // ✅ תגיות
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const tagOptions = [
    "בשרי", "חלבי", "פרווה", "ילדים", "טבעוני",
    "צמחוני", "מתוק", "תוספת", "עיקרית", "חגים", "שבת"
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleListChange = (index, value, field) => {
    const updated = [...recipe[field]];
    updated[index] = value;
    setRecipe({ ...recipe, [field]: updated });
  };

  const addField = (field) => {
    setRecipe({ ...recipe, [field]: [...recipe[field], ""] });
  };

  const removeField = (index, field) => {
    const updated = recipe[field].filter((_, i) => i !== index);
    setRecipe({ ...recipe, [field]: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return alert("Login required.");
    if (!image) return alert("Please upload an image.");

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("title", recipe.title);
      formData.append("description", recipe.description);
      formData.append("cooking_time", recipe.cookingTime);
      formData.append("servings", recipe.servings);
      formData.append("difficulty", recipe.difficulty);
      formData.append("category", recipe.category);
      formData.append("tags", JSON.stringify(recipe.tags));
      formData.append("image", image);
      formData.append("ingredients", JSON.stringify(recipe.ingredients));
      formData.append("instructions", JSON.stringify(recipe.instructions));
      

      const res = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Upload failed:", errorData);
        alert("Error uploading recipe.");
        return;
      }

      alert("Recipe uploaded!");
      navigate("/");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={styles.container}>
      <img src="/instaFood_logo.png" alt="InstaFood Logo" style={styles.logo} />
      <h2 style={styles.title}>Upload New Recipe</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.imageUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="image-upload"
          />
          <label htmlFor="image-upload" style={styles.uploadBox}>
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
            ) : (
              <>
                <CloudUpload style={{ fontSize: 40 }} />
                <p>Click to upload recipe image</p>
              </>
            )}
          </label>
        </div>

        <TextField
          name="title"
          label="Recipe Title *"
          value={recipe.title}
          onChange={handleChange}
          fullWidth required
          sx={styles.input}
        />

        <TextField
          name="description"
          label="Description *"
          value={recipe.description}
          onChange={handleChange}
          fullWidth required
          multiline rows={3}
          sx={styles.input}
        />

        <div style={styles.row}>
          <TextField
            name="cookingTime"
            label="Cooking Time (minutes) *"
            type="number"
            value={recipe.cookingTime}
            onChange={handleChange}
            fullWidth required
            inputProps={{ min: 0 }}
            sx={styles.input}
          />
          <TextField
            name="servings"
            label="Servings *"
            type="number"
            value={recipe.servings}
            onChange={handleChange}
            fullWidth required
            inputProps={{ min: 0 }}
            sx={styles.input}
          />
        </div>

        <div style={styles.row}>
          <FormControl fullWidth variant="outlined" sx={styles.input}>
            <InputLabel>Difficulty</InputLabel>
            <Select
              labelId="difficulty-label"
              label="Difficulty"
              name="difficulty"
              value={recipe.difficulty}
              onChange={handleChange}
              required
            >
              <MenuItem value="Easy">Easy</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={styles.input}>
            <InputLabel>Category</InputLabel>
            <Select
              labelId="category-label"
              label="Category"
              name="category"
              value={recipe.category}
              onChange={handleChange}
              required
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
              <MenuItem value="Dessert">Dessert</MenuItem>
            </Select>
          </FormControl>
        </div>

        {/* ✅ שדה תגיות חדש */}
        <Autocomplete
          multiple
          freeSolo
          options={tagOptions}
          value={recipe.tags}
          onChange={(e, newValue) =>
            setRecipe({ ...recipe, tags: newValue })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Tags (optional)"
              placeholder="Add tags"
              sx={styles.input}
            />
          )}
        />

        {recipe.ingredients.map((ing, i) => (
          <div key={i} style={styles.row}>
            <TextField
              fullWidth
              label={`Ingredient ${i + 1}`}
              value={ing}
              onChange={(e) => handleListChange(i, e.target.value, "ingredients")}
              sx={styles.input}
            />
            <IconButton onClick={() => removeField(i, "ingredients")} variant="contained" >
              <RemoveCircle />
            </IconButton>
          </div>
        ))}
        <Button onClick={() => addField("ingredients")} startIcon={<AddCircle />} variant="outlined" color="inherit">
          Add Ingredient
        </Button>

        {recipe.instructions.map((step, i) => (
          <div key={i} style={styles.row}>
            <TextField
              fullWidth
              label={`Step ${i + 1}`}
              value={step}
              onChange={(e) => handleListChange(i, e.target.value, "instructions")}
              sx={styles.input}
            />
            <IconButton onClick={() => removeField(i, "instructions")} variant="contained" >
              <RemoveCircle />
            </IconButton>
          </div>
        ))}
        <Button onClick={() => addField("instructions")} startIcon={<AddCircle />} variant="outlined" color="inherit">
          Add Step
        </Button>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isUploading}
          sx={styles.button}
        >
          {isUploading ? "Uploading..." : "Share Recipe"}
        </Button>
      </form>
    </div>
  );
}

export default UploadRecipePage;

const styles = {
  container: {
    maxWidth: "520px",
    margin: "0 auto",
    padding: "30px",
    textAlign: "center"
  },
  logo: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    border: "2px solid #ff6600",
    marginBottom: "12px"
  },
  title: {
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#ff6600",
    fontFamily: "'Roboto', sans-serif"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  row: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  input: {
    borderRadius: "8px"
  },
  button: {
    backgroundColor: "#ff6600",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#e05500"
    }
  },
  imageUpload: {
    textAlign: "center"
  },
  uploadBox: {
    border: "2px dashed gray",
    borderRadius: "8px",
    padding: "16px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    boxSizing: "border-box"
  },
  imagePreview: {
    width: "100%",
    maxHeight: 200,
    objectFit: "cover",
    borderRadius: "10px"
  }
};
