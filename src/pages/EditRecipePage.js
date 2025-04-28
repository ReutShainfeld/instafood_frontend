// import React, { useEffect, useState } from "react";
// import { useNavigate, useParams } from "react-router-dom";
// import {
//   Box,
//   Button,
//   Card,
//   CardContent,
//   Container,
//   TextField,
//   Typography,
//   Snackbar,
//   Alert,
//   CircularProgress,
// } from "@mui/material";

// function EditRecipePage() {
//   const { id } = useParams();
//   const navigate = useNavigate();
//   const token = localStorage.getItem("token");

//   const [recipe, setRecipe] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   useEffect(() => {
//     const fetchRecipe = async () => {
//       try {
//         const res = await fetch(`http://localhost:5000/api/recipes/${id}`);
//         if (!res.ok) throw new Error('Failed to fetch recipe');
//         const data = await res.json();
//         setRecipe(data);
//       } catch (err) {
//         console.error(err);
//         setSnackbar({ open: true, message: 'Error loading recipe', severity: 'error' });
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchRecipe();
//   }, [id]);

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

//   const handleSave = async () => {
//     try {
//       const res = await fetch(`http://localhost:5000/api/recipes/${id}`, {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`,
//         },
//         body: JSON.stringify({
//           title: recipe.title,
//           description: recipe.description,
//           cookingTime: recipe.cookingTime,
//           servings: recipe.servings,
//           difficulty: recipe.difficulty,
//           category: recipe.category,
//           ingredients: recipe.ingredients,
//           instructions: recipe.instructions,
//           tags: recipe.tags,
//           location: recipe.location || '',
//         }),
//       });

//       if (!res.ok) throw new Error('Failed to update recipe');

//       setSnackbar({ open: true, message: 'Recipe updated!', severity: 'success' });
//       setTimeout(() => navigate(`/recipe/${id}`), 1500);
//     } catch (err) {
//       console.error(err);
//       setSnackbar({ open: true, message: 'Error saving changes', severity: 'error' });
//     }
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   if (loading) {
//     return (
//       <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
//         <CircularProgress />
//       </Box>
//     );
//   }

//   if (!recipe) return <Typography align="center">Recipe not found</Typography>;

//   return (
//     <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', py: 5 }}>
//       <Container maxWidth="sm">
//         <Card sx={{ p: 3, boxShadow: 3 }}>
//           <CardContent>
//             <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#ff6600', textAlign: 'center' }}>
//               Edit Recipe
//             </Typography>

//             <TextField
//               label="Title"
//               name="title"
//               value={recipe.title}
//               onChange={handleChange}
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="Description"
//               name="description"
//               value={recipe.description}
//               onChange={handleChange}
//               fullWidth
//               multiline
//               rows={3}
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="Cooking Time (minutes)"
//               name="cookingTime"
//               type="number"
//               value={recipe.cookingTime}
//               onChange={handleChange}
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="Servings"
//               name="servings"
//               type="number"
//               value={recipe.servings}
//               onChange={handleChange}
//               fullWidth
//               sx={{ mb: 2 }}
//             />
//             <TextField
//               label="Location (optional)"
//               name="location"
//               value={recipe.location || ''}
//               onChange={handleChange}
//               fullWidth
//               sx={{ mb: 2 }}
//             />

//             <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>Ingredients</Typography>
//             {recipe.ingredients.map((ing, i) => (
//               <Box key={i} sx={{ display: 'flex', gap: 1, my: 1 }}>
//                 <TextField
//                   fullWidth
//                   label={`Ingredient ${i + 1}`}
//                   value={ing}
//                   onChange={(e) => handleListChange(i, e.target.value, 'ingredients')}
//                 />
//                 <Button onClick={() => removeField(i, 'ingredients')} variant="outlined" color="error">
//                   Remove
//                 </Button>
//               </Box>
//             ))}
//             <Button onClick={() => addField('ingredients')} variant="outlined" sx={{ mt: 1 }}>
//               Add Ingredient
//             </Button>

//             <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>Instructions</Typography>
//             {recipe.instructions.map((step, i) => (
//               <Box key={i} sx={{ display: 'flex', gap: 1, my: 1 }}>
//                 <TextField
//                   fullWidth
//                   label={`Step ${i + 1}`}
//                   value={step}
//                   onChange={(e) => handleListChange(i, e.target.value, 'instructions')}
//                 />
//                 <Button onClick={() => removeField(i, 'instructions')} variant="outlined" color="error">
//                   Remove
//                 </Button>
//               </Box>
//             ))}
//             <Button onClick={() => addField('instructions')} variant="outlined" sx={{ mt: 1 }}>
//               Add Step
//             </Button>

//             <Button
//               onClick={handleSave}
//               variant="contained"
//               fullWidth
//               sx={{ backgroundColor: '#ff6600', mt: 3, fontWeight: 'bold', '&:hover': { backgroundColor: '#e65c00' } }}
//             >
//               Save Changes
//             </Button>
//           </CardContent>
//         </Card>

//         <Snackbar
//           open={snackbar.open}
//           autoHideDuration={4000}
//           onClose={handleCloseSnackbar}
//           anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//         >
//           <Alert
//             onClose={handleCloseSnackbar}
//             severity={snackbar.severity}
//             variant="outlined"
//             sx={{
//               bgcolor: '#fff',
//               color: snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f',
//               border: `1px solid ${snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f'}`,
//               fontWeight: 'bold',
//             }}
//           >
//             {snackbar.message}
//           </Alert>
//         </Snackbar>

//       </Container>
//     </Box>
//   );
// }

// export default EditRecipePage;

import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
  Snackbar,
  Alert,
  CircularProgress,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function EditRecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [recipe, setRecipe] = useState(null);
  const [newMediaFiles, setNewMediaFiles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

  useEffect(() => {
    const fetchRecipe = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/recipes/${id}`);
        if (!res.ok) throw new Error('Failed to fetch recipe');
        const data = await res.json();
        setRecipe(data);
      } catch (err) {
        console.error(err);
        setSnackbar({ open: true, message: 'Error loading recipe', severity: 'error' });
      } finally {
        setLoading(false);
      }
    };
    fetchRecipe();
  }, [id]);

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

  const handleAddMedia = (e) => {
    const files = Array.from(e.target.files);
    setNewMediaFiles((prev) => [...prev, ...files]);
  };

  const handleRemoveMedia = (index, isExisting) => {
    if (isExisting) {
      const updated = recipe.media.filter((_, i) => i !== index);
      setRecipe({ ...recipe, media: updated });
    } else {
      setNewMediaFiles((prev) => prev.filter((_, i) => i !== index));
    }
  };

  const handleSave = async () => {
    try {
      const formData = new FormData();
      formData.append("title", recipe.title);
      formData.append("description", recipe.description);
      formData.append("cookingTime", recipe.cookingTime);
      formData.append("servings", recipe.servings);
      formData.append("difficulty", recipe.difficulty);
      formData.append("category", recipe.category);
      formData.append("location", recipe.location || "");
      formData.append("ingredients", JSON.stringify(recipe.ingredients));
      formData.append("instructions", JSON.stringify(recipe.instructions));
      formData.append("tags", JSON.stringify(recipe.tags));
      formData.append("existingMedia", JSON.stringify(recipe.media));
      newMediaFiles.forEach(file => formData.append("newMedia", file));


      const res = await fetch(`http://localhost:5000/api/recipes/${id}`, {
        method: 'PUT',
        headers: { Authorization: `Bearer ${token}` },
        body: formData
      });

      if (!res.ok) throw new Error('Failed to update recipe');

      setSnackbar({ open: true, message: 'Recipe updated!', severity: 'success' });
      setTimeout(() => navigate(`/recipe/${id}`), 1500);
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: 'Error saving changes', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => setSnackbar({ ...snackbar, open: false });

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (!recipe) return <Typography align="center">Recipe not found</Typography>;

  return (
    <Box sx={{ backgroundColor: '#fafafa', minHeight: '100vh', py: 5 }}>
      <Container maxWidth="sm">
        <Card sx={{ p: 3, boxShadow: 3 }}>
          <CardContent>
            <Typography variant="h5" fontWeight="bold" gutterBottom sx={{ color: '#ff6600', textAlign: 'center' }}>
              Edit Recipe
            </Typography>

            <TextField label="Title" name="title" value={recipe.title} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
            <TextField label="Description" name="description" value={recipe.description} onChange={handleChange} fullWidth multiline rows={3} sx={{ mb: 2 }} />
            <TextField label="Cooking Time (minutes)" name="cookingTime" type="number" value={recipe.cookingTime} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
            <TextField label="Servings" name="servings" type="number" value={recipe.servings} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
            <TextField label="Location (optional)" name="location" value={recipe.location || ''} onChange={handleChange} fullWidth sx={{ mb: 2 }} />

            <Box sx={{ my: 2 }}>
              <Typography fontWeight="bold">Existing Media:</Typography>
              {recipe.media.length === 0 && <Typography>No media</Typography>}
              {recipe.media.map((url, i) => (
                <Box key={i} sx={{ position: 'relative', mt: 1 }}>
                  {url.endsWith('.mp4') ? (
                    <video src={url} style={{ width: '100%', borderRadius: 8 }} controls />
                  ) : (
                    <img src={url} alt="media" style={{ width: '100%', borderRadius: 8 }} />
                  )}
                  <IconButton onClick={() => handleRemoveMedia(i, true)} size="small" sx={{ position: 'absolute', top: 5, right: 5, bgcolor: 'white' }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
            </Box>

            <Box sx={{ my: 2 }}>
              <Typography fontWeight="bold">New Media:</Typography>
              {newMediaFiles.map((file, i) => (
                <Box key={i} sx={{ position: 'relative', mt: 1 }}>
                  {file.type.startsWith('video') ? (
                    <video src={URL.createObjectURL(file)} style={{ width: '100%', borderRadius: 8 }} controls />
                  ) : (
                    <img src={URL.createObjectURL(file)} alt="preview" style={{ width: '100%', borderRadius: 8 }} />
                  )}
                  <IconButton onClick={() => handleRemoveMedia(i, false)} size="small" sx={{ position: 'absolute', top: 5, right: 5, bgcolor: 'white' }}>
                    <DeleteIcon fontSize="small" />
                  </IconButton>
                </Box>
              ))}
              <Button variant="outlined" component="label" fullWidth sx={{ mt: 2 }}>
                Add More Media
                <input hidden accept="image/*,video/*" multiple type="file" onChange={handleAddMedia} />
              </Button>
            </Box>

            <Button onClick={handleSave} variant="contained" fullWidth sx={{ backgroundColor: '#ff6600', mt: 3, fontWeight: 'bold', '&:hover': { backgroundColor: '#e65c00' } }}>
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Snackbar open={snackbar.open} autoHideDuration={4000} onClose={handleCloseSnackbar} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Alert onClose={handleCloseSnackbar} severity={snackbar.severity} variant="outlined" sx={{ bgcolor: '#fff', color: snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f', border: `1px solid ${snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f'}`, fontWeight: 'bold' }}>
            {snackbar.message}
          </Alert>
        </Snackbar>
      </Container>
    </Box>
  );
}

export default EditRecipePage;
