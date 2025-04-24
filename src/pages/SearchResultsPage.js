import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid,
  CircularProgress
} from '@mui/material';
import RecipeCard from '../components/RecipeCard';

function SearchResultsPage() {
  const [results, setResults] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [loading, setLoading] = useState(true);
  const { type, value } = useParams(); // Added useParams to capture route params
  const location = useLocation();

  useEffect(() => {
    // Set loading state at the beginning of data fetching
    setLoading(true);
    
    // Handle both URL formats: /search/tag/:value and /search?q=term
    const query = new URLSearchParams(location.search);
    const searchTerm = query.get('q');

    if (type === 'tag' && value) {
      // Handle tag search from URL path /search/tag/:value
      fetch('http://localhost:5000/api/recipes')
        .then(res => res.json())
        .then(data => {
          const filtered = data.filter(recipe => 
            recipe.tags?.some(tag => tag.toLowerCase() === value.toLowerCase())
          );
          setResults(filtered || []);
          
          // Extract unique categories from the filtered results
          const uniqueCategories = [...new Set(filtered.map(recipe => recipe.category).filter(Boolean))];
          setCategories(uniqueCategories);
          
          setLoading(false);
        })
        .catch(err => {
          console.error("Search failed", err);
          setResults([]);
          setCategories([]);
          setLoading(false);
        });
    } else if (searchTerm) {
      // Handle regular search from query param /search?q=term
      fetch(`http://localhost:5000/api/recipes/search?q=${searchTerm}`)
        .then(res => res.json())
        .then(data => {
          setResults(data || []);
          
          // Extract unique categories from the search results
          const uniqueCategories = [...new Set(data.map(recipe => recipe.category).filter(Boolean))];
          setCategories(uniqueCategories);
          
          setLoading(false);
        })
        .catch(err => {
          console.error("Search failed", err);
          setResults([]);
          setCategories([]);
          setLoading(false);
        });
    } else {
      // No search parameters, exit loading state
      setLoading(false);
      setCategories([]);
    }
  }, [type, value, location.search]);

  const filteredResults = selectedCategory
    ? results.filter(recipe => recipe.category === selectedCategory)
    : results;

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        {type === 'tag' ? `Results for tag: #${value}` : 'Search Results'}
        {selectedCategory && ` • Category: ${selectedCategory}`}
      </Typography>

      <Box sx={{ mb: 4 }}>
        <FormControl variant="standard" sx={{ minWidth: 180 }}>
          <InputLabel>Filter by Category</InputLabel>
          <Select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            disableUnderline
            inputProps={{ disableUnderline: true }}
          >
            <MenuItem value="">All Categories</MenuItem>
            {categories.length > 0 ? (
              categories.map(cat => (
                <MenuItem key={cat} value={cat}>{cat}</MenuItem>
              ))
            ) : (
              <>
                <MenuItem value="Breakfast">Breakfast</MenuItem>
                <MenuItem value="Lunch">Lunch</MenuItem>
                <MenuItem value="Dinner">Dinner</MenuItem>
                <MenuItem value="Dessert">Dessert</MenuItem>
                <MenuItem value="Drinks">Drinks</MenuItem>
              </>
            )}
          </Select>
        </FormControl>
      </Box>

      {loading ? (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '300px' }}>
          <CircularProgress color="warning" />
          <Typography variant="body1" color="text.secondary" sx={{ ml: 2 }}>
            Searching recipes...
          </Typography>
        </Box>
      ) : filteredResults.length === 0 ? (
        <Typography sx={{ textAlign: "center", mt: 4, fontWeight: 'bold', color: 'gray' }}>
          😕 No recipes found matching your search
        </Typography>
      ) : (
        <Grid container spacing={3}>
          {filteredResults.map((recipe) => (
            <Grid item xs={12} sm={6} md={4} key={recipe._id}>
              <RecipeCard
                recipe={recipe}
                uploader={recipe.user?.username || "Unknown"}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}

export default SearchResultsPage;
