// Navbar.js – גרסה מלאה כולל תמונת פרופיל ליד שם המשתמש
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  IconButton,
  Box,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  Container,
  Avatar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SearchIcon from '@mui/icons-material/Search';
import HideOnScroll from '../components/HideOnScroll'; // או הנתיב שבו שמרת


function Navbar() {
  const navigate = useNavigate();
  const isMobile = useMediaQuery('(max-width:768px)');
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const userName = localStorage.getItem('fullName');
  // const profileImage = localStorage.getItem('profileImage');
  const [profileImage, setProfileImage] = React.useState(localStorage.getItem('profileImage') || null);

// מוודא שה־Navbar יתעדכן אם משהו משתנה ב־localStorage
useEffect(() => {
  const interval = setInterval(() => {
    const updatedImage = localStorage.getItem('profileImage');
    setProfileImage(updatedImage);
  }, 500); // בודק פעמיים בשנייה

  return () => clearInterval(interval);
}, []);


  const handleLogout = () => {
    localStorage.removeItem('fullName');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    localStorage.removeItem('profileImage');
    navigate('/login');
  };

  const handleSearchClick = () => {
    navigate('/search');
  };

  const toggleDrawer = (open) => () => {
    setDrawerOpen(open);
  };

  const drawerList = (
    <Box sx={{ width: 250 }} role="presentation" onClick={toggleDrawer(false)}>
      <List>
        <ListItem button component={Link} to="/">
          <ListItemIcon><HomeIcon /></ListItemIcon>
          <ListItemText primary="Home" />
        </ListItem>
        <ListItem button onClick={handleSearchClick}>
          <ListItemIcon><SearchIcon /></ListItemIcon>
          <ListItemText primary="Search" />
        </ListItem>
        <ListItem button component={Link} to="/for-you">
          <ListItemIcon><StarIcon /></ListItemIcon>
          <ListItemText primary="For You" />
        </ListItem>
        <ListItem button component={Link} to="/upload">
          <ListItemIcon><AddCircleIcon /></ListItemIcon>
          <ListItemText primary="Upload Recipe" />
        </ListItem>
        <Divider />
        {userName ? (
          <>
            <ListItem button component={Link} to="/profile">
              <ListItemIcon>
                <Avatar src={profileImage || "/default-user.png"} sx={{ width: 28, height: 28 }} />
              </ListItemIcon>
              <ListItemText primary={userName} />
            </ListItem>
            <ListItem button onClick={handleLogout}>
              <ListItemIcon><LogoutIcon /></ListItemIcon>
              <ListItemText primary="Logout" />
            </ListItem>
          </>
        ) : (
          <>
            <ListItem button component={Link} to="/login">
              <ListItemIcon><LoginIcon /></ListItemIcon>
              <ListItemText primary="Login" />
            </ListItem>
            <ListItem button component={Link} to="/register">
              <ListItemIcon><HowToRegIcon /></ListItemIcon>
              <ListItemText primary="Register" />
            </ListItem>
          </>
        )}
      </List>
    </Box>
  );

  return (
    <HideOnScroll>
    <AppBar position="sticky" color="default" sx={{ zIndex: 1201, top: 0, paddingY: "10px", borderBottom: '1px solid #eee', boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)' }}>
      <Container>
        <Toolbar sx={{ justifyContent: 'space-between', px: 2, minHeight: 100 }}>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="/instaFood_logo.png"
              alt="InstaFood logo"
              style={{ width: 48, height: 48, marginRight: 12, borderRadius: '25%', border: "2px solid #ff6600", objectFit: 'cover' }}
            />
            <Typography
              variant="h6"
              component={Link}
              to="/"
              sx={{ textDecoration: 'none', color: '#ff6600', fontWeight: 'bold' }}
            >
              InstaFood
            </Typography>
          </Box>

          {/* Desktop buttons */}
          {!isMobile ? (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
              <Link to="/search" style={linkStyle}>
                <SearchIcon fontSize="large" sx={{ mr: 1 }} />
                Search
              </Link>
              <Link to="/" style={linkStyle}>
                Home
              </Link>
              <Link to="/for-you" style={linkStyle}>
                For You
              </Link>
              <Link to="/upload" style={linkStyle}>
                Upload
              </Link>

              {userName ? (
                <>
                  <Link to="/profile" style={linkStyle}>
                    {/* <Avatar src={profileImage || "/default-user.png"} sx={{ width: 28, height: 28, mr: 1 }} /> */}
                    <Avatar
                    src={
                      profileImage?.startsWith('/uploads')
                        ? `http://localhost:5000${profileImage}`
                        : profileImage || "/default-user.png"
                    }
                    sx={{ width: 28, height: 28, mr: 1 }}
                  />
                    {userName}
                  </Link>
                  <Box component="span" onClick={handleLogout} sx={linkStyle} style={{ cursor: 'pointer' }}>
                    <LogoutIcon fontSize="large" sx={{ mr: 1 }} />
                    Logout
                  </Box>
                </>
              ) : (
                <>
                  <Link to="/login" style={linkStyle}>
                    <LoginIcon fontSize="large" sx={{ mr: 1 }} />
                    Login
                  </Link>
                  <Link to="/register" style={linkStyle}>
                    <HowToRegIcon fontSize="large" sx={{ mr: 1 }} />
                    Register
                  </Link>
                </>
              )}
            </Box>
          ) : (
            <>
              <IconButton edge="end" color="inherit" onClick={toggleDrawer(true)}>
                <MenuIcon />
              </IconButton>
              <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
                {drawerList}
              </Drawer>
            </>
          )}
        </Toolbar>
      </Container>
    </AppBar>
    </HideOnScroll>
  );
}

export default Navbar;

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
  textDecoration: 'none',
  color: '#333',
  fontWeight: 500,
  fontSize: '0.95rem',
  padding: '6px 12px',
  borderRadius: '8px',
  transition: 'background-color 0.2s ease',
  '&:hover': {
    backgroundColor: 'rgba(255, 102, 0, 0.08)',
    color: '#ff6600',
  },
  '&:active': {
    backgroundColor: 'rgba(255, 102, 0, 0.16)',
  }
};


