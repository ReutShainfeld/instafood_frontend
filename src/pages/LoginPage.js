// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   Snackbar,
//   Alert,
//   IconButton,
//   InputAdornment,
//   Grid,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';
// import { auth, googleProvider } from "../firebase";
// import { signInWithPopup } from "firebase/auth";


// function LoginPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: '', password: '' });
//   const [showPassword, setShowPassword] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleCloseSnackbar = () => {
//     setSnackbar({ ...snackbar, open: false });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userId', data.userId);
//         localStorage.setItem('fullName', data.fullName);
//         localStorage.setItem('profileImage', data.profileImage || '');
//         setSnackbar({ open: true, message: 'Login successful! Redirecting...', severity: 'success' });
//         setTimeout(() => navigate('/profile'), 1500);
//       } else {
//         setSnackbar({ open: true, message: `Incorrect email or password: ${data.message}`, severity: 'error' });
//       }
//     } catch (error) {
//       setSnackbar({ open: true, message: 'Failed to connect to server.', severity: 'error' });
//     }
//   };

//   const loginWithGoogle = async () => {
//     try {
//       const result = await signInWithPopup(auth, googleProvider);
//       const user = result.user;
  
//       const fullName = user.displayName || '';
//       const email = user.email || '';
//       const profileImage = user.photoURL || '';
  
//       const [firstName, lastName] = fullName.split(' ');
  
//       // ננסה להתחבר קודם
//       const response = await fetch('http://localhost:5000/api/auth/google-login', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({ email }),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         // התחברות קיימת
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userId', data.userId);
//         localStorage.setItem('fullName', data.fullName);
//         localStorage.setItem('profileImage', data.profileImage || '');
  
//         setSnackbar({ open: true, message: 'Login with Google successful! Redirecting...', severity: 'success' });
//         setTimeout(() => navigate('/profile'), 1500);
//       } else if (response.status === 404) {
//         // יוזר לא קיים - נרשום אותו
//         await registerGoogleUser(email, firstName, lastName, profileImage, user);
//       } else {
//         throw new Error('Unknown error during Google login');
//       }
//     } catch (error) {
//       console.error('Google login error:', error);
//       setSnackbar({ open: true, message: 'Google sign-in failed', severity: 'error' });
//     }
//   };

//   const registerGoogleUser = async (email, firstName, lastName, profileImage, user) => {
//     try {
//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify({
//           username: email.split('@')[0], 
//           firstName: firstName || 'First',
//           lastName: lastName || 'Last',
//           email,
//           password: user.uid,
//           phone: `google-${user.uid}`,
//           profileImage,
//         }),
//       });
  
//       const data = await response.json();
  
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userId', data.userId);
//         localStorage.setItem('fullName', data.fullName);
//         localStorage.setItem('profileImage', data.profileImage || '');
  
//         setSnackbar({ open: true, message: 'Registered with Google! Redirecting...', severity: 'success' });
//         setTimeout(() => navigate('/profile'), 1500);
//       } else {
//         setSnackbar({ open: true, message: `Registration failed: ${data.message}`, severity: 'error' });
//       }
//     } catch (error) {
//       console.error('Registration error:', error);
//       setSnackbar({ open: true, message: 'Registration failed', severity: 'error' });
//     }
//   };
  
//   return (
//     <Grid container sx={{ minHeight: '100vh' }}>
//       {/* Left Panel */}
//       <Grid
//         item
//         xs={12}
//         md={5}
//         sx={{
//           backgroundColor: '#fff',
//           display: 'flex',
//           flexDirection: 'column',
//           justifyContent: 'center',
//           alignItems: 'center',
//           px: 4,
//           py: 8,
//         }}
//       >
//         <Box sx={{ maxWidth: 420, textAlign: 'center' }}>
//           <img src="/instaFood_small_logo.png" alt="instaFood Logo" width={50} style={{ marginBottom: 20 }} />
//           <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#ff6600' }}>
//             Welcome to instaFood
//           </Typography>
//           <Typography variant="body1" color="text.secondary">
//             Save recipes, explore tastes, and organize your cooking life—all in one place.
//           </Typography>
//           <img src="/auth.png" alt="Illustration" style={{ width: '100%', margin: '40px 0' }} />
//         </Box>
//       </Grid>

//       {/* Right Panel */}
//       <Grid
//         item
//         xs={12}
//         md={7}
//         sx={{
//           display: 'flex',
//           alignItems: 'center',
//           justifyContent: 'center',
//           backgroundColor: '#fafafa',
//           p: 4,
//         }}
//       >
//         <Container maxWidth="sm">
//           <Typography variant="h5" fontWeight="bold" gutterBottom>
//             Sign in to your account
//           </Typography>
//           <Typography variant="body2" sx={{ mb: 3 }}>
//             Don’t have an account?{' '}
//             <Link to="/register" style={{ color: '#ff6600', textDecoration: 'none', fontWeight: 'bold' }}>
//               Get started with instaFood
//             </Link>
//           </Typography>

//           <Button
//             variant="contained"
//             size="large"
//             fullWidth
//             onClick={loginWithGoogle}
//             sx={{ fontWeight: 'bold', bgcolor: '#4285F4', '&:hover': { bgcolor: '#357ae8' }, mb: 2 }}
//           >
//             Sign in with Google
//           </Button>


//           <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <TextField
//               label="Email Address"
//               name="email"
//               type="email"
//               fullWidth
//               required
//               variant="outlined"
//               value={formData.email}
//               onChange={handleChange}
//             />
//             <TextField
//               label="Password"
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               required
//               fullWidth
//               variant="outlined"
//               value={formData.password}
//               onChange={handleChange}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={handleTogglePassword} edge="end">
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 ),
//               }}
//             />
  
//            <Box textAlign="right">
//               <Link
//                 to="/forgot-password"
//                 style={{ color: '#ff6600', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold' }}
//               >
//                 Forgot Password?
//               </Link>
//             </Box>
//             <Button
//               type="submit"
//               variant="contained"
//               size="large"
//               fullWidth
//               sx={{ fontWeight: 'bold', bgcolor: '#ff6600', '&:hover': { bgcolor: '#e65c00' } }}
//             >
//               Sign in
//             </Button>
//           </Box>
//         </Container>
//       </Grid>

//       <Snackbar
//         open={snackbar.open}
//         autoHideDuration={4000}
//         onClose={handleCloseSnackbar}
//         anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
//       >
//         <Alert
//           onClose={handleCloseSnackbar}
//           severity={snackbar.severity}
//           variant="outlined"
//           sx={{
//             bgcolor: '#fff',
//             color: snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f',
//             border: `1px solid ${snackbar.severity === 'success' ? '#2e7d32' : '#d32f2f'}`,
//             fontWeight: 'bold',
//           }}
//         >
//           {snackbar.message}
//         </Alert>
//       </Snackbar>
//     </Grid>
//   );
// }

// export default LoginPage;
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
  Avatar,
  Dialog
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { auth, googleProvider } from "../firebase";
import { signInWithPopup } from "firebase/auth";

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);
  const [popup, setPopup] = useState({ open: false, message: '', requireOk: false });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };

  const handleClosePopup = () => {
    setPopup({ ...popup, open: false });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('fullName', data.fullName);
        localStorage.setItem('profileImage', data.profileImage || '');
        setPopup({ open: true, message: 'Login successful! Redirecting...', requireOk: false });
        setTimeout(() => navigate('/profile'), 2000);
      } else {
        setPopup({ open: true, message: `Incorrect email or password: ${data.message}`, requireOk: true });
      }
    } catch (error) {
      setPopup({ open: true, message: 'Failed to connect to server.', requireOk: true });
    }
  };

  const loginWithGoogle = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
  
      const fullName = user.displayName || '';
      const email = user.email || '';
      const profileImage = user.photoURL || '';
  
      const [firstName, lastName] = fullName.split(' ');
  
      const response = await fetch('http://localhost:5000/api/auth/google-login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });
  
      const data = await response.json();
  
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('fullName', data.fullName);
        localStorage.setItem('profileImage', data.profileImage || '');
  
        setPopup({ open: true, message: 'Login with Google successful! Redirecting...', requireOk: false });
        setTimeout(() => navigate('/profile'), 2000);
      } else if (response.status === 404) {
        await registerGoogleUser(email, firstName, lastName, profileImage, user);
      } else {
        throw new Error('Unknown error during Google login');
      }
    } catch (error) {
      console.error('Google login error:', error);
      setPopup({ open: true, message: 'Google sign-in failed', requireOk: true });
    }
  };

  const registerGoogleUser = async (email, firstName, lastName, profileImage, user) => {
    try {
      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          username: email.split('@')[0],
          firstName: firstName || 'First',
          lastName: lastName || 'Last',
          email,
          password: user.uid,
          phone: `google-${user.uid}`,
          profileImage,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('fullName', data.fullName);
        localStorage.setItem('profileImage', data.profileImage || '');
  
        setPopup({ open: true, message: 'Login successful!', requireOk: false });
        setTimeout(() => navigate('/profile'), 9000);
      } else {
        setPopup({ open: true, message: `Registration failed: ${data.message}`, requireOk: true });
      }
    } catch (error) {
      console.error('Registration error:', error);
      setPopup({ open: true, message: 'Registration failed', requireOk: true });
    }
  };

  return (
    <>
      <Dialog
        open={popup.open}
        onClose={popup.requireOk ? undefined : handleClosePopup}
        BackdropProps={{ style: { backdropFilter: 'blur(4px)' } }}
        PaperProps={{
          sx: {
            borderRadius: '16px',
            padding: '24px',
            backgroundColor: '#f5f5f5',
            minWidth: '320px',
            textAlign: 'center'
          }
        }}
      >
        <Typography variant="h6" sx={{ color: "#555", fontWeight: "bold", mb: 2 }}>
          {popup.message}
        </Typography>
        {popup.requireOk && (
          <Button
            onClick={handleClosePopup}
            variant="contained"
            sx={{
              backgroundColor: "#ff6600",
              color: "white",
              borderRadius: "8px",
              fontWeight: "bold",
              px: 4,
              py: 1.5,
              mt: 2,
              '&:hover': { backgroundColor: "#e05500" }
            }}
          >
            OK
          </Button>
        )}
      </Dialog>

      <Grid container sx={{ minHeight: '100vh' }}>
        <Grid item xs={12} md={5} sx={{ backgroundColor: '#fff', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', px: 4, py: 8 }}>
          <Box sx={{ maxWidth: 420, textAlign: 'center' }}>
            <img src="/instaFood_small_logo.png" alt="instaFood Logo" width={50} style={{ marginBottom: 20 }} />
            <Typography variant="h4" fontWeight="bold" gutterBottom sx={{ color: '#ff6600' }}>
              Welcome to instaFood
            </Typography>
            <Typography variant="body1" color="text.secondary">
              Save recipes, explore tastes, and organize your cooking life—all in one place.
            </Typography>
            <img src="/auth.png" alt="Illustration" style={{ width: '100%', margin: '40px 0' }} />
          </Box>
        </Grid>

        <Grid item xs={12} md={7} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#fafafa', p: 4 }}>
          <Container maxWidth="sm">
            <Typography variant="h5" fontWeight="bold" gutterBottom>
              Sign in to your account
            </Typography>
            <Typography variant="body2" sx={{ mb: 3 }}>
              Don’t have an account?{' '}
              <Link to="/register" style={{ color: '#ff6600', textDecoration: 'none', fontWeight: 'bold' }}>
                Get started with instaFood
              </Link>
            </Typography>

            <Button
              variant="contained"
              size="large"
              fullWidth
              onClick={loginWithGoogle}
              sx={{ fontWeight: 'bold', bgcolor: '#4285F4', '&:hover': { bgcolor: '#357ae8' }, mb: 2 }}
            >
              Sign in with Google
            </Button>

            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                fullWidth
                required
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
              />
              <TextField
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                fullWidth
                variant="outlined"
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
              <Box textAlign="right">
                <Link
                  to="/forgot-password"
                  style={{ color: '#ff6600', fontSize: '0.9rem', textDecoration: 'none', fontWeight: 'bold' }}
                >
                  Forgot Password?
                </Link>
              </Box>
              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{ fontWeight: 'bold', bgcolor: '#ff6600', '&:hover': { bgcolor: '#e65c00' } }}
              >
                Sign in
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default LoginPage;
