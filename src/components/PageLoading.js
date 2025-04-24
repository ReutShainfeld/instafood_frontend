// import React from "react";
// import {
//   Box,
//   Typography,
//   CircularProgress,
// } from "@mui/material";

// const PageLoading = () => {
//   return (
//     <Box
//       sx={{
//         position: "fixed",
//         top: 0,
//         left: 0,
//         width: "100vw",
//         height: "100vh",
//         backgroundImage: 'url("/background.jpg")',
//         backgroundColor: "#fff8dc", // soft yellow
//         zIndex: 1300,
//         display: "flex",
//         flexDirection: "column",
//         justifyContent: "center",
//         alignItems: "center",
//       }}

//     >
//             {/* 🔹 Blurred and darkened background image */}
//       <Box
//         sx={{
//           position: "absolute",
//           width: "100%",
//           height: "100%",
//           backgroundImage: 'url("/background.jpg")',
//           backgroundSize: "cover",
//           backgroundPosition: "center",
//           filter: "blur(10px) brightness(0.6)", // blur + dim
//           zIndex: 1,
//         }}
//       />

//       {/* 🔹 Foreground content */}/
//       <Box
//         component="img"
//         src="/instaFood_logo.png"
//         alt="InstaFood Logo"
//         sx={{
//           width: 80,
//           height: 80,
//           mb: 3,
//           borderRadius: '50%',
//           objectFit: 'cover',
//           border: "2px solid #ff6600",
//         }}
//       />

//       <CircularProgress
//         size={50}
//         sx={{ color: '#ff6600' }}
//       />


//       <Typography
//         variant="subtitle1"
//         sx={{
//           mt: 2,
//           color: "text.secondary",
//           display: "flex",
//           alignItems: "center",
//           fontWeight: 500,
//         }}
//       >
//         <span role="img" aria-label="hourglass" style={{ marginRight: 8 }}>
//           ⏳
//         </span>
//         Loading, please wait...
//       </Typography>

//     </Box>
//   );
// };

// export default PageLoading;
import React from "react";
import { Box, Typography, CircularProgress } from "@mui/material";

const PageLoading = () => {
  return (
    <Box sx={styles.background}>
      {/* White translucent overlay */}
      <Box sx={styles.overlay}>
        <Box sx={styles.content}>
          <Box
            component="img"
            src="/instaFood_logo.png"
            alt="InstaFood Logo"
            sx={styles.logo}
          />

          <CircularProgress size={52} sx={{ color: "#ff6600" }} />

          <Typography
            variant="subtitle1"
            sx={styles.text}
          >
            <span role="img" aria-label="hourglass" style={{ marginRight: 8 }}>
              ⏳
            </span>
            Loading, please wait...
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default PageLoading;

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
    backgroundColor: 'rgba(255, 255, 255, 0.85)',
    width: '100%',
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 90,
    height: 90,
    mb: 3,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '2px solid #ff6600',
    boxShadow: '0 0 10px rgba(0,0,0,0.2)',
  },
  text: {
    mt: 2,
    fontWeight: 500,
    color: '#333',
    fontSize: '1.1rem',
  },
};
