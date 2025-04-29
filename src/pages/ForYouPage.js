import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";
import {
  Box, Typography, Grid, Container, Snackbar, Alert,
  Dialog, DialogTitle, DialogActions, Button
} from "@mui/material";

import PageLoading from "../components/PageLoading";
import { useNavigate } from "react-router-dom";

function ForYouPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [showLoginAlert, setShowLoginAlert] = useState(false);

  useEffect(() => {
    if (!token) {
      // Show login alert and then redirect after a delay
      setShowLoginAlert(true);
      setTimeout(() => {
        navigate('/');
      }, 2000); // Redirect after 2 seconds
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

  if (loading && token) return <PageLoading />;

  return (
    <>
      {/* Login Alert - Outside the main Box to ensure it shows regardless of loading state */}
      <Dialog
        open={showLoginAlert}
        onClose={() => setShowLoginAlert(false)}
        PaperProps={{ sx: { borderRadius: 4, p: 2, textAlign: 'center' } }}
      >
        <DialogTitle sx={{ fontSize: "18px", fontWeight: "bold" }}>
          You need to login first to access this page
        </DialogTitle>
        <DialogActions sx={{ justifyContent: "center" }}>
          <Button
            variant="contained"
            sx={{ bgcolor: "#ff6600", color: "white", fontWeight: "bold", borderRadius: 2 }}
            onClick={() => setShowLoginAlert(false)}
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>

      <Box sx={styles.background}>
        <Box sx={styles.overlay}>
          <Container maxWidth="lg" sx={{ py: 4 }}>
            <Typography
              variant="h3"
              color="black"
              align="center"
              gutterBottom
              sx={{ fontWeight: "bold", mb: 4 }}
            >
              ✨ For You
            </Typography>

            {error && (
              <Typography variant="body1" color="error" align="center">
                ❌ {error}
              </Typography>
            )}

            {!loading && !error && recipes.length === 0 && (
              <Typography variant="body1" align="center">
                No recommendations yet. Start searching to see suggestions! ✨
              </Typography>
            )}

            <Grid container spacing={2} justifyContent="center">
              {recipes.map((recipe) => (
                <Grid item key={recipe._id} xs={12} sm={6} md={3}>
                  <RecipeCard recipe={recipe} imageOnly={true} />
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </Box>
    </>
  );
}

export default ForYouPage;

const styles = {
  background: {
    backgroundImage: 'url("/background.jpg")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  overlay: {
    backgroundColor: "rgba(255, 255, 255, 0.9)",
    width: "100%",
    minHeight: "100vh",
    paddingTop: "20px",
    paddingBottom: "20px",
  },
};
