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
} from "@mui/material";

function EditRecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const [recipe, setRecipe] = useState(null);
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

  const handleSave = async () => {
    try {
      const res = await fetch(`http://localhost:5000/api/recipes/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title: recipe.title,
          description: recipe.description,
          cookingTime: recipe.cookingTime,
          servings: recipe.servings,
          difficulty: recipe.difficulty,
          category: recipe.category,
          ingredients: recipe.ingredients,
          instructions: recipe.instructions,
          tags: recipe.tags,
          location: recipe.location || '',
        }),
      });

      if (!res.ok) throw new Error('Failed to update recipe');

      setSnackbar({ open: true, message: 'Recipe updated!', severity: 'success' });
      setTimeout(() => navigate(`/recipe/${id}`), 1500);
    } catch (err) {
      console.error(err);
      setSnackbar({ open: true, message: 'Error saving changes', severity: 'error' });
    }
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

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

            <TextField
              label="Title"
              name="title"
              value={recipe.title}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Description"
              name="description"
              value={recipe.description}
              onChange={handleChange}
              fullWidth
              multiline
              rows={3}
              sx={{ mb: 2 }}
            />
            <TextField
              label="Cooking Time (minutes)"
              name="cookingTime"
              type="number"
              value={recipe.cookingTime}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Servings"
              name="servings"
              type="number"
              value={recipe.servings}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />
            <TextField
              label="Location (optional)"
              name="location"
              value={recipe.location || ''}
              onChange={handleChange}
              fullWidth
              sx={{ mb: 2 }}
            />

            <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>Ingredients</Typography>
            {recipe.ingredients.map((ing, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 1, my: 1 }}>
                <TextField
                  fullWidth
                  label={`Ingredient ${i + 1}`}
                  value={ing}
                  onChange={(e) => handleListChange(i, e.target.value, 'ingredients')}
                />
                <Button onClick={() => removeField(i, 'ingredients')} variant="outlined" color="error">
                  Remove
                </Button>
              </Box>
            ))}
            <Button onClick={() => addField('ingredients')} variant="outlined" sx={{ mt: 1 }}>
              Add Ingredient
            </Button>

            <Typography variant="h6" sx={{ mt: 3, fontWeight: 'bold' }}>Instructions</Typography>
            {recipe.instructions.map((step, i) => (
              <Box key={i} sx={{ display: 'flex', gap: 1, my: 1 }}>
                <TextField
                  fullWidth
                  label={`Step ${i + 1}`}
                  value={step}
                  onChange={(e) => handleListChange(i, e.target.value, 'instructions')}
                />
                <Button onClick={() => removeField(i, 'instructions')} variant="outlined" color="error">
                  Remove
                </Button>
              </Box>
            ))}
            <Button onClick={() => addField('instructions')} variant="outlined" sx={{ mt: 1 }}>
              Add Step
            </Button>

            <Button
              onClick={handleSave}
              variant="contained"
              fullWidth
              sx={{ backgroundColor: '#ff6600', mt: 3, fontWeight: 'bold', '&:hover': { backgroundColor: '#e65c00' } }}
            >
              Save Changes
            </Button>
          </CardContent>
        </Card>

        <Snackbar
          open={snackbar.open}
          autoHideDuration={4000}
          onClose={handleCloseSnackbar}
          anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        >
          <Alert
            onClose={handleCloseSnackbar}
            severity={snackbar.severity}
            variant="outlined"
            sx={{
              bgcolor: '#fff',
              color: snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f',
              border: `1px solid ${snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f'}`,
              fontWeight: 'bold',
            }}
          >
            {snackbar.message}
          </Alert>
        </Snackbar>

      </Container>
    </Box>
  );
}

export default EditRecipePage;
