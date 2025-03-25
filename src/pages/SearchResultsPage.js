// src/pages/SearchResultsPage.js
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  Box, Typography, IconButton, Divider
} from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import RecipeCard from "../components/RecipeCard";

function SearchResultsPage() {
  const { type, value } = useParams();
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchFiltered = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/recipes");
        const data = await res.json();

        const filtered = data.filter((r) => {
          if (type === "tag") return r.tags?.includes(value);
          if (type === "category") return r.category === value;
          if (type === "difficulty") return r.difficulty === value;
          return false;
        });

        setResults(filtered);
      } catch (err) {
        console.error("❌ Failed to fetch filtered results", err);
      }
    };

    fetchFiltered();
  }, [type, value]);

  return (
    <Box sx={styles.container}>
      <Box sx={{ position: "relative" }}>
        <IconButton onClick={() => navigate(-1)} sx={styles.backBtn}>
          <ArrowForwardIosIcon />
        </IconButton>
      </Box>

      <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
        תוצאות עבור <span style={{ color: "#ff6600" }}>{value}</span>
      </Typography>

      <Divider sx={{ my: 2 }} />

      {results.length === 0 ? (
        <Typography>לא נמצאו תוצאות.</Typography>
      ) : (
        results.map((recipe) => (
          <RecipeCard
            key={recipe._id}
            recipe={recipe}
            uploader={recipe.user?.username || "Unknown"}
          />
        ))
      )}
    </Box>
  );
}

export default SearchResultsPage;

const styles = {
  container: {
    maxWidth: 900,
    margin: "auto",
    padding: 2,
  },
  backBtn: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "#fff",
    "&:hover": {
      backgroundColor: "#f0f0f0",
    },
  },
};
