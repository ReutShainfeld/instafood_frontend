import React, { useEffect, useState } from 'react';
import {
  Avatar,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
} from '@mui/material';
import { useParams } from 'react-router-dom';
import PageLoading from '../components/PageLoading';
import RecipeCard from '../components/RecipeCard';

function PublicProfilePage() {
  const { userId } = useParams();
  const [user, setUser] = useState(null);
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');

    const fetchUser = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to load user');
        const data = await res.json();
        setUser(data);
      } catch (err) {
        console.error(err);
      }
    };

    const fetchUserRecipes = async () => {
      try {
        const res = await fetch(`http://localhost:5000/api/recipes/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        if (!res.ok) throw new Error('Failed to load recipes');
        const data = await res.json();
        setRecipes(data);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
    fetchUserRecipes();
  }, [userId]);

  if (loading || !user) return <PageLoading />;

  return (
    <Box sx={styles.background}>
      <Box sx={styles.overlay}>
        <Box sx={{ maxWidth: 1100, margin: 'auto', p: 2 }}>
          <Card sx={{ mb: 3, padding: 3, borderRadius: 2 }}>
            <CardContent>
              <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                <Avatar
                  src={user.profileImage?.startsWith('/uploads') ? `http://localhost:5000${user.profileImage}` : user.profileImage}
                  alt="Profile"
                  sx={{ width: 100, height: 100, border: '3px solid #ff6600' }}
                />
                <Typography variant="h5" fontWeight="bold" color="primary">
                  {user.firstName} {user.lastName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {user.email}
                </Typography>
              </Box>
            </CardContent>
          </Card>

          <Typography variant="h6" fontWeight="bold" mb={2}>Recipes by {user.firstName}</Typography>

          <Grid container spacing={2}>
            {recipes.length > 0 ? (
              recipes.map((r) => (
                <Grid item xs={12} sm={6} md={6} key={r._id} sx={{ padding: 3 }}>
                  <RecipeCard recipe={r} uploader={user.username || user.email} />
                </Grid>
              ))
            ) : (
              <Typography align="center" mt={2}>No recipes yet.</Typography>
            )}
          </Grid>
        </Box>
      </Box>
    </Box>
  );
}

export default PublicProfilePage;

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
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    width: '100%',
    minHeight: '100vh',
    paddingTop: '30px',
    paddingBottom: '30px',
  },
};
