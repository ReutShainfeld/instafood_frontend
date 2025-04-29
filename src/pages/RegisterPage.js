// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   IconButton,
//   InputAdornment,
//   Grid,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// function RegisterPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleImageChange = (e) => {
//     setImageFile(e.target.files[0]);
//   };

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const body = new FormData();
//       Object.entries(formData).forEach(([key, val]) => body.append(key, val));
//       if (imageFile) body.append('profileImage', imageFile);

//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         body,
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userId', data.userId);
//         localStorage.setItem('fullName', data.fullName);
//         localStorage.setItem('profileImage', data.profileImage || '');
//         navigate('/profile');
//       } else {
//         alert(`❌ Registration failed: ${data.message}`);
//       }
//     } catch (error) {
//       alert('❌ Failed to connect to server.');
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
//         <Box sx={{ maxWidth: 440, textAlign: 'center' }}>
//           <a href="/" style={{ display: 'inline-block', marginBottom: 24 }}>
//             <img
//               src="/instaFood_small_logo.png"
//               alt="instaFood Logo"
//               width={80}
//               style={{
//                 borderRadius: 12,
//                 border: '2px solid #ff6600',
//                 padding: 6,
//                 backgroundColor: '#fff',
//               }}
//             />
//           </a>
//           <Typography variant="h4" fontWeight="bold" sx={{ color: '#ff6600', mb: 1 }}>
//             Create an instaFood Account
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//             Save your favorite dishes, discover new recipes, and get organized with ease.
//           </Typography>
//           <img src="/auth.png" alt="Illustration" style={{ width: '100%' }} />
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
//             Register your account
//           </Typography>
//           <Typography variant="body2" sx={{ mb: 3 }}>
//             Already have an account?{' '}
//             <Link to="/login" style={{ color: '#ff6600', fontWeight: 'bold' }}>
//               Sign in
//             </Link>
//           </Typography>

//           <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <TextField label="Username" name="username" required fullWidth value={formData.username} onChange={handleChange} />
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField label="First Name" name="firstName" required fullWidth value={formData.firstName} onChange={handleChange} />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField label="Last Name" name="lastName" required fullWidth value={formData.lastName} onChange={handleChange} />
//               </Grid>
//             </Grid>
//             <TextField label="Email Address" name="email" type="email" required fullWidth value={formData.email} onChange={handleChange} />
//             <TextField label="Phone Number" name="phone" required fullWidth value={formData.phone} onChange={handleChange} />
//             <TextField
//               label="Password"
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               required
//               fullWidth
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

//             {/* 👇 הוספת תמונה 👇 */}
//             <Box>
//               <Typography variant="body2" fontWeight="bold">
//                 Profile Image (optional):
//               </Typography>
//               <input type="file" accept="image/*" onChange={handleImageChange} />
//             </Box>

//             <Button
//               type="submit"
//               variant="contained"
//               size="large"
//               fullWidth
//               sx={{ fontWeight: 'bold', bgcolor: '#ff6600', '&:hover': { bgcolor: '#e65c00' } }}
//             >
//               Create account
//             </Button>
//           </Box>
//         </Container>
//       </Grid>
//     </Grid>
//   );
// }

// export default RegisterPage;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import {
//   Box,
//   Button,
//   Container,
//   TextField,
//   Typography,
//   IconButton,
//   InputAdornment,
//   Grid,
//   Avatar,
// } from '@mui/material';
// import { Visibility, VisibilityOff } from '@mui/icons-material';

// function RegisterPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({
//     username: '',
//     firstName: '',
//     lastName: '',
//     email: '',
//     phone: '',
//     password: '',
//   });

//   const [errors, setErrors] = useState({
//     email: '',
//     phone: '',
//     password: ''
//   });

//   const [imageFile, setImageFile] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [showPassword, setShowPassword] = useState(false);

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
    
//     // Validate email
//     if (name === 'email' && value.trim() !== '') {
//       const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//       if (!emailRegex.test(value)) {
//         setErrors(prev => ({ ...prev, email: 'Please enter a valid email address' }));
//       } else {
//         setErrors(prev => ({ ...prev, email: '' }));
//       }
//     }
    
//     // Validate phone
//     if (name === 'phone' && value.trim() !== '') {
//       const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{9,10}$/;
//       if (!phoneRegex.test(value)) {
//         setErrors(prev => ({ ...prev, phone: 'Please enter a valid phone number' }));
//       } else {
//         setErrors(prev => ({ ...prev, phone: '' }));
//       }
//     }
    
//     // Validate password
//     if (name === 'password') {
//       if (value.length < 6) {
//         setErrors(prev => ({ ...prev, password: 'Password must be at least 6 characters long' }));
//       } else {
//         setErrors(prev => ({ ...prev, password: '' }));
//       }
//     }
//   };

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImageFile(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleTogglePassword = () => {
//     setShowPassword((prev) => !prev);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
    
//     // Validate form before submission
//     let isValid = true;
//     const newErrors = { email: '', phone: '', password: '' };
    
//     // Email validation
//     const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
//     if (!emailRegex.test(formData.email)) {
//       newErrors.email = 'Please enter a valid email address';
//       isValid = false;
//     }
    
//     // Phone validation
//     const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{9,10}$/;
//     if (!phoneRegex.test(formData.phone)) {
//       newErrors.phone = 'Please enter a valid phone number';
//       isValid = false;
//     }
    
//     // Password validation
//     if (formData.password.length < 6) {
//       newErrors.password = 'Password must be at least 6 characters long';
//       isValid = false;
//     }
    
//     setErrors(newErrors);
    
//     if (!isValid) return;
    
//     try {
//       const body = new FormData();
//       Object.entries(formData).forEach(([key, val]) => body.append(key, val));
//       if (imageFile) body.append('profileImage', imageFile);

//       const response = await fetch('http://localhost:5000/api/auth/register', {
//         method: 'POST',
//         body,
//       });

//       const data = await response.json();
//       if (response.ok) {
//         localStorage.setItem('token', data.token);
//         localStorage.setItem('userId', data.userId);
//         localStorage.setItem('fullName', data.fullName);
//         localStorage.setItem('profileImage', data.profileImage || '');
//         navigate('/profile');
//       } else {
//         alert(`❌ Registration failed: ${data.message}`);
//       }
//     } catch (error) {
//       alert('❌ Failed to connect to server.');
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
//         <Box sx={{ maxWidth: 440, textAlign: 'center' }}>
//           <a href="/" style={{ display: 'inline-block', marginBottom: 24 }}>
//             <img
//               src="/instaFood_small_logo.png"
//               alt="instaFood Logo"
//               width={80}
//               style={{
//                 borderRadius: 12,
//                 border: '2px solid #ff6600',
//                 padding: 6,
//                 backgroundColor: '#fff',
//               }}
//             />
//           </a>
//           <Typography variant="h4" fontWeight="bold" sx={{ color: '#ff6600', mb: 1 }}>
//             Create an instaFood Account
//           </Typography>
//           <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
//             Save your favorite dishes, discover new recipes, and get organized with ease.
//           </Typography>
//           <img src="/auth.png" alt="Illustration" style={{ width: '100%' }} />
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
//             Register your account
//           </Typography>
//           <Typography variant="body2" sx={{ mb: 3 }}>
//             Already have an account?{' '}
//             <Link to="/login" style={{ color: '#ff6600', fontWeight: 'bold' }}>
//               Sign in
//             </Link>
//           </Typography>

//           <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
//             <TextField 
//               label="Username" 
//               name="username" 
//               required 
//               fullWidth 
//               value={formData.username} 
//               onChange={handleChange} 
//             />
//             <Grid container spacing={2}>
//               <Grid item xs={12} sm={6}>
//                 <TextField 
//                   label="First Name" 
//                   name="firstName" 
//                   required 
//                   fullWidth 
//                   value={formData.firstName} 
//                   onChange={handleChange} 
//                 />
//               </Grid>
//               <Grid item xs={12} sm={6}>
//                 <TextField 
//                   label="Last Name" 
//                   name="lastName" 
//                   required 
//                   fullWidth 
//                   value={formData.lastName} 
//                   onChange={handleChange} 
//                 />
//               </Grid>
//             </Grid>
//             <TextField 
//               label="Email Address" 
//               name="email" 
//               type="email" 
//               required 
//               fullWidth 
//               value={formData.email} 
//               onChange={handleChange}
//               error={!!errors.email}
//               helperText={errors.email}
//             />
//             <TextField 
//               label="Phone Number" 
//               name="phone" 
//               required 
//               fullWidth 
//               value={formData.phone} 
//               onChange={handleChange}
//               error={!!errors.phone}
//               helperText={errors.phone}
//             />
//             <TextField
//               label="Password"
//               name="password"
//               type={showPassword ? 'text' : 'password'}
//               required
//               fullWidth
//               value={formData.password}
//               onChange={handleChange}
//               error={!!errors.password}
//               helperText={errors.password}
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

//             {/* Profile Image Selection with Preview */}
//             <Box sx={{ textAlign: 'center', mt: 1 }}>
//               <input
//                 accept="image/*"
//                 id="profile-image-upload"
//                 type="file"
//                 onChange={handleImageChange}
//                 hidden
//               />
//               <label htmlFor="profile-image-upload">
//                 <Box sx={{ cursor: 'pointer' }}>
//                   <Avatar
//                     src={previewUrl || "/default-user.png"}
//                     sx={{ width: 90, height: 90, margin: 'auto', border: '2px solid #ff6600' }}
//                   />
//                   <Typography variant="caption" color="primary">
//                     Click to select profile picture
//                   </Typography>
//                 </Box>
//               </label>
//             </Box>

//             <Button
//               type="submit"
//               variant="contained"
//               size="large"
//               fullWidth
//               sx={{ fontWeight: 'bold', bgcolor: '#ff6600', '&:hover': { bgcolor: '#e65c00' } }}
//             >
//               Create account
//             </Button>
//           </Box>
//         </Container>
//       </Grid>
//     </Grid>
//   );
// }

// export default RegisterPage;
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import {
  Box, Button, Container, TextField, Typography,
  IconButton, InputAdornment, Grid, Avatar, Dialog
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

  const [errors, setErrors] = useState({
    email: '',
    phone: '',
    password: ''
  });

  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [popup, setPopup] = useState({ open: false, message: '', requireOk: false });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    if (name === 'email' && value.trim() !== '') {
      const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      setErrors(prev => ({ ...prev, email: !emailRegex.test(value) ? 'Please enter a valid email address' : '' }));
    }
    if (name === 'phone' && value.trim() !== '') {
      const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{9,10}$/;
      setErrors(prev => ({ ...prev, phone: !phoneRegex.test(value) ? 'Please enter a valid phone number' : '' }));
    }
    if (name === 'password') {
      setErrors(prev => ({ ...prev, password: value.length < 6 ? 'Password must be at least 6 characters long' : '' }));
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleTogglePassword = () => {
    setShowPassword((prev) => !prev);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValid = true;
    const newErrors = { email: '', phone: '', password: '' };

    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
      isValid = false;
    }
    const phoneRegex = /^(\+\d{1,3}[- ]?)?\d{9,10}$/;
    if (!phoneRegex.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
      isValid = false;
    }
    if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters long';
      isValid = false;
    }

    setErrors(newErrors);

    if (!isValid) return;

    try {
      const body = new FormData();
      Object.entries(formData).forEach(([key, val]) => body.append(key, val));
      if (imageFile) body.append('profileImage', imageFile);

      const response = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        body,
      });

      const data = await response.json();
      if (response.ok) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('userId', data.userId);
        localStorage.setItem('fullName', data.fullName);
        localStorage.setItem('profileImage', data.profileImage || '');
        setPopup({ open: true, message: 'Registered successfully!', requireOk: false });
        setTimeout(() => navigate('/profile'), 2000);
      } else {
        setPopup({ open: true, message: data.message, requireOk: true });
      }
    } catch (error) {
      setPopup({ open: true, message: 'Failed to connect to server.', requireOk: true });
    }
  };

  const handleClosePopup = () => {
    setPopup({ ...popup, open: false });
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
          <Box sx={{ maxWidth: 440, textAlign: 'center' }}>
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
            <Typography variant="h4" fontWeight="bold" sx={{ color: '#ff6600', mb: 1 }}>
              Create an instaFood Account
            </Typography>
            <Typography variant="body1" color="text.secondary" sx={{ mb: 3 }}>
              Save your favorite dishes, discover new recipes, and get organized with ease.
            </Typography>
            <img src="/auth.png" alt="Illustration" style={{ width: '100%' }} />
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
              <Link to="/login" style={{ color: '#ff6600', fontWeight: 'bold' }}>
                Sign in
              </Link>
            </Typography>

            <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              <TextField
                label="Username"
                name="username"
                required
                fullWidth
                value={formData.username}
                onChange={handleChange}
              />
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="First Name"
                    name="firstName"
                    required
                    fullWidth
                    value={formData.firstName}
                    onChange={handleChange}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Last Name"
                    name="lastName"
                    required
                    fullWidth
                    value={formData.lastName}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <TextField
                label="Email Address"
                name="email"
                type="email"
                required
                fullWidth
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Phone Number"
                name="phone"
                required
                fullWidth
                value={formData.phone}
                onChange={handleChange}
                error={!!errors.phone}
                helperText={errors.phone}
              />
              <TextField
                label="Password"
                name="password"
                type={showPassword ? 'text' : 'password'}
                required
                fullWidth
                value={formData.password}
                onChange={handleChange}
                error={!!errors.password}
                helperText={errors.password}
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

              <Box sx={{ textAlign: 'center', mt: 1 }}>
                <input accept="image/*" id="profile-image-upload" type="file" onChange={handleImageChange} hidden />
                <label htmlFor="profile-image-upload">
                  <Box sx={{ cursor: 'pointer' }}>
                    <Avatar
                      src={previewUrl || "/default-user.png"}
                      sx={{ width: 90, height: 90, margin: 'auto', border: '2px solid #ff6600' }}
                    />
                    <Typography variant="caption" color="primary">
                      Click to select profile picture
                    </Typography>
                  </Box>
                </label>
              </Box>

              <Button
                type="submit"
                variant="contained"
                size="large"
                fullWidth
                sx={{
                  fontWeight: 'bold',
                  bgcolor: '#ff6600',
                  '&:hover': { bgcolor: '#e65c00' }
                }}
              >
                Create account
              </Button>
            </Box>
          </Container>
        </Grid>
      </Grid>
    </>
  );
}

export default RegisterPage;
