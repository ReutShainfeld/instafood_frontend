// import React, { useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import {
//   Box, Typography, IconButton, Divider
// } from "@mui/material";
// import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
// import RecipeCard from "../components/RecipeCard";


// function SearchResultsPage() {
//   const { type, value } = useParams();
//   const [results, setResults] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const fetchFiltered = async () => {
//       try {
//         const res = await fetch("http://localhost:5000/api/recipes");
//         const data = await res.json();

//         const filtered = data.filter((r) => {
//           if (type === "tag") return r.tags?.includes(value);
//           if (type === "category") return r.category === value;
//           if (type === "difficulty") return r.difficulty === value;

//           if (type === "query") {
//             const lower = value.toLowerCase();
//             return (
//               r.title?.toLowerCase().includes(lower) ||
//               r.description?.toLowerCase().includes(lower) ||
//               r.tags?.some((tag) => tag.toLowerCase().includes(lower)) ||
//               r.ingredients?.some((ing) => ing.toLowerCase().includes(lower)) ||
//               r.category?.toLowerCase().includes(lower) ||
//               r.difficulty?.toLowerCase().includes(lower)
//             );
//           }

//           return false;
//         });

//         setResults(filtered);
//       } catch (err) {
//         console.error("❌ Failed to fetch filtered results", err);
//       }
//     };

//     fetchFiltered();
//   }, [type, value]);

//   return (
//     <Box sx={styles.container}>
//       <Box sx={{ position: "relative" }}>
//         <IconButton onClick={() => navigate(-1)} sx={styles.backBtn}>
//           <ArrowForwardIosIcon />
//         </IconButton>
//       </Box>

//       <Typography variant="h5" fontWeight="bold" sx={{ mt: 1 }}>
//         תוצאות עבור <span style={{ color: "#ff6600" }}>{value}</span>
//       </Typography>

//       <Divider sx={{ my: 2 }} />

//       {results.length === 0 ? (
//         <Typography>לא נמצאו תוצאות.</Typography>
//       ) : (
//         results.map((recipe) => (
//           <RecipeCard
//             key={recipe._id}
//             recipe={recipe}
//             uploader={recipe.user?.username || "Unknown"}
//           />
//         ))
//       )}
//     </Box>
//   );
// }

// export default SearchResultsPage;

// const styles = {
//   container: {
//     maxWidth: 900,
//     margin: "auto",
//     padding: 2,
//   },
//   backBtn: {
//     position: "absolute",
//     top: 12,
//     right: 12,
//     backgroundColor: "#fff",
//     "&:hover": {
//       backgroundColor: "#f0f0f0",
//     },
//   },
// };
import React, { useEffect, useState } from 'react';
import {
  Box,
  Typography,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Grid
} from '@mui/material';
import RecipeCard from '../components/RecipeCard';

function SearchResultsPage() {
  const [results, setResults] = useState([]);
  const [category, setCategory] = useState('');

  useEffect(() => {
    const query = new URLSearchParams(window.location.search);
    const searchTerm = query.get('q');

    fetch(`http://localhost:5000/api/recipes/search?q=${searchTerm}`)
      .then(res => res.json())
      .then(data => {
        setResults(data || []);
      })
      .catch(err => {
        console.error("Search failed", err);
        setResults([]);
      });
  }, []);

  const filteredResults = category
    ? results.filter(recipe => recipe.tags?.includes(category))
    : results;

  return (
    <Box sx={{ maxWidth: 1000, mx: 'auto', mt: 4, px: 2 }}>
      <Typography variant="h5" fontWeight="bold" gutterBottom>
        תוצאות חיפוש
      </Typography>

      <Box sx={{ mb: 4 }}>
        <FormControl variant="standard" sx={{ minWidth: 180 }}>
          <InputLabel>קטגוריה</InputLabel>
          <Select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            disableUnderline
            inputProps={{ disableUnderline: true }}
          >
            <MenuItem value="">הכל</MenuItem>
            <MenuItem value="בשרי">בשרי</MenuItem>
            <MenuItem value="צמחוני">צמחוני</MenuItem>
            <MenuItem value="טבעוני">טבעוני</MenuItem>
            <MenuItem value="אחר">אחר</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {filteredResults.length === 0 ? (
        <Typography sx={{ textAlign: "center", mt: 4, fontWeight: 'bold', color: 'gray' }}>
          😕 לא נמצאו מתכונים התואמים לחיפוש שלך
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
