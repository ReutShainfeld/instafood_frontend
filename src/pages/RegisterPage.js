import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box,
  Button,
  Container,
  TextField,
  Typography,
  IconButton,
  InputAdornment,
  Grid,
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

function RegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
  });

  const [showPassword, setShowPassword] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('fullName', data.fullName);
        alert('✅ Registration successful!');
        navigate('/profile');
      } else {
        alert(`❌ Registration failed: ${data.message}`);
      }
    } catch (error) {
      console.error('❌ Error:', error);
      alert('❌ Failed to connect to server.');
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  return (
    <Grid container sx={{ minHeight: '100vh' }}>
      {/* Left Panel */}
      <Grid
        item
        xs={12}
        md={5}
        sx={{
          backgroundColor: '#fff',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          px: 4,
          py: 8,
        }}
      >
        <Box
          sx={{
            maxWidth: 440,
            textAlign: 'center',
          }}
        >
          <a href="/" style={{ display: 'inline-block', marginBottom: 24 }}>
            <img
              src="/instaFood_small_logo.png"
              alt="instaFood Logo"
              width={80}
              style={{
                borderRadius: 12,
                border: '2px solid #ff6600',
                padding: 6,
                backgroundColor: '#fff',
              }}
            />
          </a>

          <Typography
            variant="h4"
            fontWeight="bold"
            gutterBottom
            sx={{ color: '#ff6600', mb: 1 }}
          >
            Create an instaFood Account
          </Typography>

          <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
            Save your favorite dishes, discover new recipes, and get organized with ease.
          </Typography>

          <img
            src="/auth.png"
            alt="Illustration"
            style={{ width: '100%', display: 'block' }}
          />
        </Box>

      </Grid>

      {/* Right Panel */}
      <Grid
        item
        xs={12}
        md={7}
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#fafafa',
          p: 4,
        }}
      >
        <Container maxWidth="sm">
          <Typography variant="h5" fontWeight="bold" gutterBottom>
            Register your account
          </Typography>
          <Typography variant="body2" sx={{ mb: 3 }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#ff6600', textDecoration: 'none', fontWeight: 'bold' }}>
              Sign in
            </Link>
          </Typography>

          <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
            <TextField
              label="Username"
              name="username"
              fullWidth
              required
              value={formData.username}
              onChange={handleChange}
            />
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="First Name"
                  name="firstName"
                  fullWidth
                  required
                  value={formData.firstName}
                  onChange={handleChange}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Last Name"
                  name="lastName"
                  fullWidth
                  required
                  value={formData.lastName}
                  onChange={handleChange}
                />
              </Grid>
            </Grid>
            <TextField
              label="Email Address"
              name="email"
              type="email"
              fullWidth
              required
              value={formData.email}
              onChange={handleChange}
            />
            <TextField
              label="Phone Number"
              name="phone"
              fullWidth
              required
              value={formData.phone}
              onChange={handleChange}
            />
            <TextField
              label="Password"
              name="password"
              type={showPassword ? 'text' : 'password'}
              fullWidth
              required
              value={formData.password}
              onChange={handleChange}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleTogglePassword} edge="end">
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />

            <Button
              type="submit"
              variant="contained"
              size="large"
              fullWidth
              sx={{ fontWeight: 'bold', bgcolor: '#ff6600', '&:hover': { bgcolor: '#e65c00' } }}
            >
              Create account
            </Button>
          </Box>
        </Container>
      </Grid>
    </Grid>
  );
}

export default RegisterPage;
