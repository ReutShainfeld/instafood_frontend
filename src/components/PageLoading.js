import React from "react";
import {
  Box,
  Typography,
  CircularProgress,
} from "@mui/material";

const PageLoading = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#fff8dc", // soft yellow
        zIndex: 1300,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Box
        component="img"
        src="/instaFood_logo.png"
        alt="InstaFood Logo"
        sx={{
          width: 80,
          height: 80,
          mb: 3,
          borderRadius: '50%',
          objectFit: 'cover',
          border: "2px solid #ff6600",
        }}
      />

      <CircularProgress
        size={50}
        sx={{ color: '#ff6600' }}
      />


      <Typography
        variant="subtitle1"
        sx={{
          mt: 2,
          color: "text.secondary",
          display: "flex",
          alignItems: "center",
          fontWeight: 500,
        }}
      >
        <span role="img" aria-label="hourglass" style={{ marginRight: 8 }}>
          ⏳
        </span>
        Loading, please wait...
      </Typography>

    </Box>
  );
};

export default PageLoading;
