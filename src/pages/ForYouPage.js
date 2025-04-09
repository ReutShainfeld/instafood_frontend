import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import { Box, Typography, Grid } from "@mui/material";
import PageLoading from "../components/PageLoading";

function ForYouPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    fetch("http://localhost:5000/api/recipes/for-you", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [token]);

  if (loading) {
    return (<PageLoading />);
  }

  return (
    <Box sx={styles.background}>
      <Box sx={styles.overlay}>
        <Box sx={{ padding: { xs: "16px", sm: "32px" }, textAlign: "center" }}>
          <Typography variant="h4" color="primary" gutterBottom>
            <span role="img" aria-label="sparkles">
              ✨
            </span>{" "}
            Personalized For You
          </Typography>

          {error && (
            <Typography variant="body1" color="error" sx={styles.errorText}>
              <span role="img" aria-label="cross mark">❌</span> {error}
            </Typography>
          )}

          {!loading && !error && recipes.length === 0 && (
            <Typography variant="body1" sx={{ marginTop: 2 }}>
              No recommendations yet. Start searching to see suggestions!{" "}
              <span role="img" aria-label="glowing star">
                🌟
              </span>
            </Typography>
          )}

          <Grid
            container
            spacing={6}
            sx={{
              marginTop: 4,
              justifyContent: "center",
            }}
          >
            {recipes.length > 0 &&
              recipes.map((recipe) => (
                <Grid item key={recipe._id} xs={12} sm={6} md={4} lg={3}>
                  <RecipeCard recipe={recipe} imageOnly={true} />
                </Grid>
              ))}
          </Grid>
        </Box>
      </Box>
    </Box>

  );
}

export default ForYouPage;

const styles = {
  background: {
    backgroundImage: 'url("/background.jpg")',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    width: '100%',
    minHeight: '100vh',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
}