// src/pages/AdvancedSearchPage.js
import React, { useState, useEffect } from "react";
import {
  Box, Typography, InputBase, IconButton, Paper, Divider, Chip, Tabs, Tab
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import ClearIcon from "@mui/icons-material/Clear";
import RecipeCard from "../components/RecipeCard";

function AdvancedSearchPage() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [results, setResults] = useState([]);
  const [searchHistory, setSearchHistory] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");

  useEffect(() => {
    fetchRecipes();
    loadHistory();
  }, []);

  useEffect(() => {
    performSearch();
  }, [query, activeCategory]);

  const fetchRecipes = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/recipes");
      const data = await res.json();
      setRecipes(data);
    } catch (err) {
      console.error("❌ Failed to fetch recipes", err);
    }
  };

  const performSearch = () => {
    const lower = query.toLowerCase();
    let filtered = recipes.filter(r =>
      r.title?.toLowerCase().includes(lower) ||
      r.description?.toLowerCase().includes(lower) ||
      r.ingredients?.some(ing => ing.toLowerCase().includes(lower)) ||
      r.tags?.some(tag => tag.toLowerCase().includes(lower)) ||
      r.category?.toLowerCase().includes(lower)
    );

    if (activeCategory !== "All") {
      filtered = filtered.filter(r => r.category === activeCategory);
    }

    setResults(filtered);

    if (query.length > 1) {
      const history = [query, ...searchHistory.filter(term => term !== query)].slice(0, 10);
      setSearchHistory(history);
      localStorage.setItem("searchHistory", JSON.stringify(history));
    }
  };

  const loadHistory = () => {
    const saved = localStorage.getItem("searchHistory");
    if (saved) setSearchHistory(JSON.parse(saved));
  };

  const clearHistory = () => {
    setSearchHistory([]);
    localStorage.removeItem("searchHistory");
  };

  const handleQuery = (e) => setQuery(e.target.value);

  const categories = ["All", "Breakfast", "Lunch", "Dinner", "Dessert", "Drinks"];

  return (
    <Box sx={{ maxWidth: 900, mx: "auto", px: 2, py: 4 }}>
      <Paper sx={{ p: 1.5, display: "flex", alignItems: "center", mb: 2 }}>
        <SearchIcon sx={{ mr: 1 }} />
        <InputBase
          placeholder="Search recipes, ingredients..."
          value={query}
          onChange={handleQuery}
          sx={{ flex: 1 }}
        />
        {query && (
          <IconButton onClick={() => setQuery("")}>
            <ClearIcon />
          </IconButton>
        )}
      </Paper>

      <Typography fontWeight="bold" sx={{ mb: 1 }}>Filter by Category:</Typography>
      <Tabs
        value={activeCategory}
        onChange={(e, val) => setActiveCategory(val)}
        sx={{ mb: 3 }}
        textColor="primary"
        indicatorColor="primary"
      >
        {categories.map(cat => (
          <Tab key={cat} label={cat} value={cat} />
        ))}
      </Tabs>

      {query === "" && searchHistory.length > 0 && (
        <Box sx={{ mb: 4 }}>
          <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
            <Typography fontWeight="bold">Recent Searches</Typography>
            <IconButton onClick={clearHistory} size="small">
              <ClearIcon fontSize="small" />
            </IconButton>
          </Box>
          <Box sx={{ display: "flex", gap: 1, flexWrap: "wrap" }}>
            {searchHistory.map((term, i) => (
              <Chip
                key={i}
                label={term}
                onClick={() => setQuery(term)}
                variant="outlined"
                color="primary"
              />
            ))}
          </Box>
        </Box>
      )}

      <Typography variant="body2" align="center" sx={{ color: "gray", mt: 2 }}>
        {query ? `Results for "${query}" (${results.length})` : "Start typing to search..."}
      </Typography>

      <Divider sx={{ mb: 2 }} />

      {results.length === 0 && query && (
        <Typography color="text.secondary">No recipes found.</Typography>
      )}

      {results.map(recipe => (
        <RecipeCard
          key={recipe._id}
          recipe={recipe}
          uploader={recipe.user?.username || "Unknown"}
        />
      ))}
    </Box>
  );
}

export default AdvancedSearchPage;
