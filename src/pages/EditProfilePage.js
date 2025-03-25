// // // // // // // // src/pages/EditProfilePage.js
// // // // // // // import React, { useEffect, useState } from 'react';
// // // // // // // import {
// // // // // // //   TextField, Button, Avatar, Box, Typography, IconButton, InputAdornment
// // // // // // // } from '@mui/material';
// // // // // // // import { Visibility, VisibilityOff } from '@mui/icons-material';
// // // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // // function EditProfilePage() {
// // // // // // //   const [user, setUser] = useState(null);
// // // // // // //   const [form, setForm] = useState({
// // // // // // //     firstName: '',
// // // // // // //     lastName: '',
// // // // // // //     phone: '',
// // // // // // //     profileImage: null
// // // // // // //   });
// // // // // // //   const [previewUrl, setPreviewUrl] = useState(null);
// // // // // // //   const [passwordConfirmed, setPasswordConfirmed] = useState(false);
// // // // // // //   const [currentPassword, setCurrentPassword] = useState('');
// // // // // // //   const [newPassword, setNewPassword] = useState('');
// // // // // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // // //   const navigate = useNavigate();
// // // // // // //   const token = localStorage.getItem('token');

// // // // // // //   useEffect(() => {
// // // // // // //     const fetchUser = async () => {
// // // // // // //       try {
// // // // // // //         const res = await fetch('http://localhost:5000/api/users/me', {
// // // // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // // // //         });
// // // // // // //         const data = await res.json();
// // // // // // //         setUser(data);
// // // // // // //         setForm({
// // // // // // //           firstName: data.firstName || '',
// // // // // // //           lastName: data.lastName || '',
// // // // // // //           phone: data.phone || '',
// // // // // // //           profileImage: null
// // // // // // //         });
// // // // // // //         setPreviewUrl(data.profileImage || null);
// // // // // // //       } catch (err) {
// // // // // // //         console.error('Failed to fetch user', err);
// // // // // // //       }
// // // // // // //     };
// // // // // // //     fetchUser();
// // // // // // //   }, [token]);

// // // // // // //   const handleImageChange = (e) => {
// // // // // // //     const file = e.target.files[0];
// // // // // // //     if (file) {
// // // // // // //       setForm({ ...form, profileImage: file });
// // // // // // //       setPreviewUrl(URL.createObjectURL(file));
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleChange = (e) => {
// // // // // // //     const { name, value } = e.target;
// // // // // // //     setForm({ ...form, [name]: value });
// // // // // // //   };

// // // // // // //   const handleVerifyPassword = async () => {
// // // // // // //     try {
// // // // // // //       const res = await fetch('http://localhost:5000/api/users/verify-password', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //           Authorization: `Bearer ${token}`
// // // // // // //         },
// // // // // // //         body: JSON.stringify({ password: currentPassword })
// // // // // // //       });
// // // // // // //       const data = await res.json();
// // // // // // //       if (res.ok) {
// // // // // // //         setPasswordConfirmed(true);
// // // // // // //         alert('Password verified successfully ✅');
// // // // // // //       } else {
// // // // // // //         alert(data.message || 'Incorrect password ❌');
// // // // // // //       }
// // // // // // //     } catch (err) {
// // // // // // //       console.error('Password verification error:', err);
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handleSubmit = async (e) => {
// // // // // // //     e.preventDefault();
// // // // // // //     try {
// // // // // // //       const formData = new FormData();
// // // // // // //       formData.append('firstName', form.firstName);
// // // // // // //       formData.append('lastName', form.lastName);
// // // // // // //       formData.append('phone', form.phone);
// // // // // // //       if (form.profileImage) {
// // // // // // //         formData.append('image', form.profileImage);
// // // // // // //       }

// // // // // // //       const uploadRes = await fetch('http://localhost:5000/api/upload?folder=profile_pictures', {
// // // // // // //         method: 'POST',
// // // // // // //         headers: { Authorization: `Bearer ${token}` },
// // // // // // //         body: formData,
// // // // // // //       });
// // // // // // //       const uploadData = await uploadRes.json();

// // // // // // //       const profileUpdate = {
// // // // // // //         firstName: form.firstName,
// // // // // // //         lastName: form.lastName,
// // // // // // //         phone: form.phone,
// // // // // // //         profileImage: uploadData.imageUrl || user.profileImage
// // // // // // //       };

// // // // // // //       const res = await fetch('http://localhost:5000/api/users/edit', {
// // // // // // //         method: 'PUT',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //           Authorization: `Bearer ${token}`
// // // // // // //         },
// // // // // // //         body: JSON.stringify(profileUpdate)
// // // // // // //       });

// // // // // // //       if (!res.ok) throw new Error('Failed to update profile');
// // // // // // //       alert('Profile updated!');
// // // // // // //       navigate('/profile');
// // // // // // //     } catch (err) {
// // // // // // //       console.error(err);
// // // // // // //       alert('Error updating profile ❌');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   const handlePasswordChange = async () => {
// // // // // // //     if (newPassword !== confirmPassword) {
// // // // // // //       return alert("Passwords don't match ❌");
// // // // // // //     }
// // // // // // //     try {
// // // // // // //       const res = await fetch('http://localhost:5000/api/users/change-password', {
// // // // // // //         method: 'PUT',
// // // // // // //         headers: {
// // // // // // //           'Content-Type': 'application/json',
// // // // // // //           Authorization: `Bearer ${token}`
// // // // // // //         },
// // // // // // //         body: JSON.stringify({ password: newPassword })
// // // // // // //       });
// // // // // // //       if (!res.ok) throw new Error();
// // // // // // //       alert('Password changed successfully ✅');
// // // // // // //       setCurrentPassword('');
// // // // // // //       setNewPassword('');
// // // // // // //       setConfirmPassword('');
// // // // // // //       setPasswordConfirmed(false);
// // // // // // //     } catch {
// // // // // // //       alert('Failed to change password ❌');
// // // // // // //     }
// // // // // // //   };

// // // // // // //   return (
// // // // // // //     <Box sx={{ maxWidth: 480, mx: 'auto', p: 2 }}>
// // // // // // //       <Typography variant="h5" fontWeight="bold" mb={2}>Edit Profile</Typography>
// // // // // // //       <form onSubmit={handleSubmit}>
// // // // // // //         <Box sx={{ textAlign: 'center', mb: 2 }}>
// // // // // // //           <input
// // // // // // //             type="file"
// // // // // // //             accept="image/*"
// // // // // // //             onChange={handleImageChange}
// // // // // // //             id="profile-img"
// // // // // // //             hidden
// // // // // // //           />
// // // // // // //           <label htmlFor="profile-img" style={{ cursor: 'pointer', display: 'inline-block' }}>
// // // // // // //             <Avatar
// // // // // // //               src={previewUrl}
// // // // // // //               alt="Profile"
// // // // // // //               sx={{ width: 96, height: 96, mx: 'auto', mb: 1 }}
// // // // // // //             />
// // // // // // //             <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
// // // // // // //               Click to change profile picture
// // // // // // //             </Typography>
// // // // // // //           </label>
// // // // // // //         </Box>
// // // // // // //         <TextField
// // // // // // //           name="firstName"
// // // // // // //           label="First Name"
// // // // // // //           value={form.firstName}
// // // // // // //           onChange={handleChange}
// // // // // // //           fullWidth sx={{ mb: 2 }}
// // // // // // //         />
// // // // // // //         <TextField
// // // // // // //           name="lastName"
// // // // // // //           label="Last Name"
// // // // // // //           value={form.lastName}
// // // // // // //           onChange={handleChange}
// // // // // // //           fullWidth sx={{ mb: 2 }}
// // // // // // //         />
// // // // // // //         <TextField
// // // // // // //           name="phone"
// // // // // // //           label="Phone"
// // // // // // //           value={form.phone}
// // // // // // //           onChange={handleChange}
// // // // // // //           fullWidth sx={{ mb: 3 }}
// // // // // // //         />
// // // // // // //         <Button type="submit" variant="contained" fullWidth sx={{ mb: 2 }}>
// // // // // // //           Save Changes
// // // // // // //         </Button>
// // // // // // //       </form>

// // // // // // //       <Box mt={4}>
// // // // // // //         <Typography variant="h6" mb={1}>Change Password</Typography>
// // // // // // //         {!passwordConfirmed ? (
// // // // // // //           <Box>
// // // // // // //             <TextField
// // // // // // //               label="Current Password"
// // // // // // //               type={showPassword ? 'text' : 'password'}
// // // // // // //               value={currentPassword}
// // // // // // //               onChange={(e) => setCurrentPassword(e.target.value)}
// // // // // // //               fullWidth
// // // // // // //               sx={{ mb: 2 }}
// // // // // // //               InputProps={{
// // // // // // //                 endAdornment: (
// // // // // // //                   <InputAdornment position="end">
// // // // // // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // // // // // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // // // // // //                     </IconButton>
// // // // // // //                   </InputAdornment>
// // // // // // //                 )
// // // // // // //               }}
// // // // // // //             />
// // // // // // //             <Button variant="outlined" fullWidth onClick={handleVerifyPassword}>
// // // // // // //               Verify Password
// // // // // // //             </Button>
// // // // // // //           </Box>
// // // // // // //         ) : (
// // // // // // //           <Box>
// // // // // // //             <TextField
// // // // // // //               label="New Password"
// // // // // // //               type="password"
// // // // // // //               value={newPassword}
// // // // // // //               onChange={(e) => setNewPassword(e.target.value)}
// // // // // // //               fullWidth sx={{ mb: 2 }}
// // // // // // //             />
// // // // // // //             <TextField
// // // // // // //               label="Confirm Password"
// // // // // // //               type="password"
// // // // // // //               value={confirmPassword}
// // // // // // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // // // // // //               fullWidth sx={{ mb: 2 }}
// // // // // // //             />
// // // // // // //             <Button variant="contained" fullWidth onClick={handlePasswordChange}>
// // // // // // //               Change Password
// // // // // // //             </Button>
// // // // // // //           </Box>
// // // // // // //         )}
// // // // // // //       </Box>
// // // // // // //     </Box>
// // // // // // //   );
// // // // // // // }

// // // // // // // export default EditProfilePage;

// // // // // // // src/pages/EditProfilePage.js
// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import {
// // // // // //   TextField, Button, Avatar, Box, Typography, IconButton, InputAdornment
// // // // // // } from '@mui/material';
// // // // // // import { Visibility, VisibilityOff } from '@mui/icons-material';
// // // // // // import { useNavigate } from 'react-router-dom';

// // // // // // function EditProfilePage() {
// // // // // //   const [user, setUser] = useState(null);
// // // // // //   const [form, setForm] = useState({
// // // // // //     firstName: '',
// // // // // //     lastName: '',
// // // // // //     phone: '',
// // // // // //     profileImage: null
// // // // // //   });
// // // // // //   const [previewUrl, setPreviewUrl] = useState(null);
// // // // // //   const [passwordConfirmed, setPasswordConfirmed] = useState(false);
// // // // // //   const [currentPassword, setCurrentPassword] = useState('');
// // // // // //   const [newPassword, setNewPassword] = useState('');
// // // // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // // //   const navigate = useNavigate();
// // // // // //   const token = localStorage.getItem('token');

// // // // // //   useEffect(() => {
// // // // // //     const fetchUser = async () => {
// // // // // //       try {
// // // // // //         const res = await fetch('http://localhost:5000/api/users/me', {
// // // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // // //         });
// // // // // //         const data = await res.json();
// // // // // //         setUser(data);
// // // // // //         setForm({
// // // // // //           firstName: data.firstName || '',
// // // // // //           lastName: data.lastName || '',
// // // // // //           phone: data.phone || '',
// // // // // //           profileImage: null
// // // // // //         });
// // // // // //         setPreviewUrl(data.profileImage || null);
// // // // // //       } catch (err) {
// // // // // //         console.error('Failed to fetch user', err);
// // // // // //       }
// // // // // //     };
// // // // // //     fetchUser();
// // // // // //   }, [token]);

// // // // // //   const handleImageChange = (e) => {
// // // // // //     const file = e.target.files[0];
// // // // // //     if (file) {
// // // // // //       setForm({ ...form, profileImage: file });
// // // // // //       setPreviewUrl(URL.createObjectURL(file));
// // // // // //     }
// // // // // //   };

// // // // // //   const handleChange = (e) => {
// // // // // //     const { name, value } = e.target;
// // // // // //     setForm({ ...form, [name]: value });
// // // // // //   };

// // // // // //   const handleVerifyPassword = async () => {
// // // // // //     try {
// // // // // //       const res = await fetch('http://localhost:5000/api/users/verify-password', {
// // // // // //         method: 'POST',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //           Authorization: `Bearer ${token}`
// // // // // //         },
// // // // // //         body: JSON.stringify({ password: currentPassword })
// // // // // //       });
// // // // // //       const data = await res.json();
// // // // // //       if (res.ok) {
// // // // // //         setPasswordConfirmed(true);
// // // // // //         alert('Password verified successfully ✅');
// // // // // //       } else {
// // // // // //         alert(data.message || 'Incorrect password ❌');
// // // // // //       }
// // // // // //     } catch (err) {
// // // // // //       console.error('Password verification error:', err);
// // // // // //     }
// // // // // //   };

// // // // // //   const handleSubmit = async (e) => {
// // // // // //     e.preventDefault();
// // // // // //     try {
// // // // // //       let imageUrl = user.profileImage;
// // // // // //       if (form.profileImage) {
// // // // // //         const formData = new FormData();
// // // // // //         formData.append('image', form.profileImage);
// // // // // //         const uploadRes = await fetch('http://localhost:5000/api/upload?folder=profile_pictures', {
// // // // // //           method: 'POST',
// // // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // // //           body: formData,
// // // // // //         });
// // // // // //         const uploadData = await uploadRes.json();
// // // // // //         imageUrl = uploadData.imageUrl;
// // // // // //       }

// // // // // //       const profileUpdate = {
// // // // // //         firstName: form.firstName,
// // // // // //         lastName: form.lastName,
// // // // // //         phone: form.phone,
// // // // // //         profileImage: imageUrl
// // // // // //       };

// // // // // //       const res = await fetch('http://localhost:5000/api/users/edit', {
// // // // // //         method: 'PUT',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //           Authorization: `Bearer ${token}`
// // // // // //         },
// // // // // //         body: JSON.stringify(profileUpdate)
// // // // // //       });

// // // // // //       if (!res.ok) throw new Error('Failed to update profile');
// // // // // //       alert('Profile updated!');
// // // // // //       navigate('/profile');
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       alert('Error updating profile ❌');
// // // // // //     }
// // // // // //   };

// // // // // //   const handlePasswordChange = async () => {
// // // // // //     if (newPassword !== confirmPassword) {
// // // // // //       return alert("Passwords don't match ❌");
// // // // // //     }
// // // // // //     try {
// // // // // //       const res = await fetch('http://localhost:5000/api/users/change-password', {
// // // // // //         method: 'PUT',
// // // // // //         headers: {
// // // // // //           'Content-Type': 'application/json',
// // // // // //           Authorization: `Bearer ${token}`
// // // // // //         },
// // // // // //         body: JSON.stringify({ password: newPassword })
// // // // // //       });
// // // // // //       const data = await res.json();
// // // // // //       if (!res.ok) throw new Error(data.message);
// // // // // //       alert('Password changed successfully ✅');
// // // // // //       setCurrentPassword('');
// // // // // //       setNewPassword('');
// // // // // //       setConfirmPassword('');
// // // // // //       setPasswordConfirmed(false);
// // // // // //     } catch (err) {
// // // // // //       console.error(err);
// // // // // //       alert('Failed to change password ❌');
// // // // // //     }
// // // // // //   };

// // // // // //   return (
// // // // // //     <Box sx={{ maxWidth: 480, mx: 'auto', p: 2 }}>
// // // // // //       <Typography variant="h5" fontWeight="bold" mb={2} sx={{ color: '#ff6600' }}>
// // // // // //         Edit Profile
// // // // // //       </Typography>
// // // // // //       <form onSubmit={handleSubmit}>
// // // // // //         <Box sx={{ textAlign: 'center', mb: 2 }}>
// // // // // //           <input
// // // // // //             type="file"
// // // // // //             accept="image/*"
// // // // // //             onChange={handleImageChange}
// // // // // //             id="profile-img"
// // // // // //             hidden
// // // // // //           />
// // // // // //           <label htmlFor="profile-img" style={{ cursor: 'pointer', display: 'inline-block' }}>
// // // // // //             <Avatar
// // // // // //               src={previewUrl}
// // // // // //               alt="Profile"
// // // // // //               sx={{ width: 96, height: 96, mx: 'auto', mb: 1 }}
// // // // // //             />
// // // // // //             <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
// // // // // //               Click to change profile picture
// // // // // //             </Typography>
// // // // // //           </label>
// // // // // //         </Box>
// // // // // //         <TextField name="firstName" label="First Name" value={form.firstName}
// // // // // //           onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// // // // // //         <TextField name="lastName" label="Last Name" value={form.lastName}
// // // // // //           onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// // // // // //         <TextField name="phone" label="Phone" value={form.phone}
// // // // // //           onChange={handleChange} fullWidth sx={{ mb: 3 }} />
// // // // // //         <Button type="submit" variant="contained" fullWidth sx={{
// // // // // //           mb: 2,
// // // // // //           backgroundColor: '#ff6600',
// // // // // //           '&:hover': { backgroundColor: '#e65c00' }
// // // // // //         }}>
// // // // // //           Save Changes
// // // // // //         </Button>
// // // // // //       </form>

// // // // // //       <Box mt={4}>
// // // // // //         <Typography variant="h6" mb={1} sx={{ color: '#ff6600' }}>
// // // // // //           Change Password
// // // // // //         </Typography>
// // // // // //         {!passwordConfirmed ? (
// // // // // //           <Box>
// // // // // //             <TextField
// // // // // //               label="Current Password"
// // // // // //               type={showPassword ? 'text' : 'password'}
// // // // // //               value={currentPassword}
// // // // // //               onChange={(e) => setCurrentPassword(e.target.value)}
// // // // // //               fullWidth
// // // // // //               sx={{ mb: 2 }}
// // // // // //               InputProps={{
// // // // // //                 endAdornment: (
// // // // // //                   <InputAdornment position="end">
// // // // // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // // // // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // // // // //                     </IconButton>
// // // // // //                   </InputAdornment>
// // // // // //                 )
// // // // // //               }}
// // // // // //             />
// // // // // //             <Button variant="outlined" fullWidth
// // // // // //               onClick={handleVerifyPassword}
// // // // // //               sx={{
// // // // // //                 color: '#ff6600',
// // // // // //                 borderColor: '#ff6600',
// // // // // //                 '&:hover': {
// // // // // //                   backgroundColor: 'rgba(255, 102, 0, 0.1)',
// // // // // //                   borderColor: '#e65c00'
// // // // // //                 }
// // // // // //               }}>
// // // // // //               Verify Password
// // // // // //             </Button>
// // // // // //           </Box>
// // // // // //         ) : (
// // // // // //           <Box>
// // // // // //             <TextField label="New Password" type="password"
// // // // // //               value={newPassword} onChange={(e) => setNewPassword(e.target.value)}
// // // // // //               fullWidth sx={{ mb: 2 }} />
// // // // // //             <TextField label="Confirm Password" type="password"
// // // // // //               value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)}
// // // // // //               fullWidth sx={{ mb: 2 }} />
// // // // // //             <Button variant="contained" fullWidth
// // // // // //               onClick={handlePasswordChange}
// // // // // //               sx={{
// // // // // //                 backgroundColor: '#ff6600',
// // // // // //                 '&:hover': { backgroundColor: '#e65c00' }
// // // // // //               }}>
// // // // // //               Change Password
// // // // // //             </Button>
// // // // // //           </Box>
// // // // // //         )}
// // // // // //       </Box>
// // // // // //     </Box>
// // // // // //   );
// // // // // // }

// // // // // // export default EditProfilePage;


// // // // // // ✅ src/pages/EditProfilePage.js (updated)
// // // // // import React, { useEffect, useState } from 'react';
// // // // // import {
// // // // //   TextField, Button, Avatar, Box, Typography, IconButton, InputAdornment, Snackbar, Alert
// // // // // } from '@mui/material';
// // // // // import { Visibility, VisibilityOff, ArrowBack } from '@mui/icons-material';
// // // // // import { useNavigate } from 'react-router-dom';

// // // // // function EditProfilePage() {
// // // // //   const [user, setUser] = useState(null);
// // // // //   const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', profileImage: null });
// // // // //   const [previewUrl, setPreviewUrl] = useState(null);
// // // // //   const [passwordConfirmed, setPasswordConfirmed] = useState(false);
// // // // //   const [currentPassword, setCurrentPassword] = useState('');
// // // // //   const [newPassword, setNewPassword] = useState('');
// // // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // // //   const [showPassword, setShowPassword] = useState(false);
// // // // //   const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });
// // // // //   const navigate = useNavigate();
// // // // //   const token = localStorage.getItem('token');

// // // // //   useEffect(() => {
// // // // //     const fetchUser = async () => {
// // // // //       const res = await fetch('http://localhost:5000/api/users/me', {
// // // // //         headers: { Authorization: `Bearer ${token}` },
// // // // //       });
// // // // //       const data = await res.json();
// // // // //       setUser(data);
// // // // //       setForm({ firstName: data.firstName || '', lastName: data.lastName || '', phone: data.phone || '', profileImage: null });
// // // // //       setPreviewUrl(data.profileImage || null);
// // // // //     };
// // // // //     fetchUser();
// // // // //   }, [token]);

// // // // //   const handleImageChange = (e) => {
// // // // //     const file = e.target.files[0];
// // // // //     if (file) {
// // // // //       setForm({ ...form, profileImage: file });
// // // // //       setPreviewUrl(URL.createObjectURL(file));
// // // // //     }
// // // // //   };

// // // // //   const handleChange = (e) => {
// // // // //     const { name, value } = e.target;
// // // // //     setForm({ ...form, [name]: value });
// // // // //   };

// // // // //   const handleVerifyPassword = async () => {
// // // // //     const res = await fetch('http://localhost:5000/api/users/verify-password', {
// // // // //       method: 'POST',
// // // // //       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// // // // //       body: JSON.stringify({ password: currentPassword })
// // // // //     });
// // // // //     const data = await res.json();
// // // // //     if (res.ok) {
// // // // //       setPasswordConfirmed(true);
// // // // //       setSnack({ open: true, message: 'Password verified ✅', severity: 'success' });
// // // // //     } else {
// // // // //       setSnack({ open: true, message: data.message || 'Incorrect password ❌', severity: 'error' });
// // // // //     }
// // // // //   };

// // // // //   const handleSubmit = async (e) => {
// // // // //     e.preventDefault();
// // // // //     try {
// // // // //       let profileImageUrl = user.profileImage;
// // // // //       if (form.profileImage) {
// // // // //         const formData = new FormData();
// // // // //         formData.append('image', form.profileImage);
// // // // //         const uploadRes = await fetch('http://localhost:5000/api/upload?folder=profile_pictures', {
// // // // //           method: 'POST',
// // // // //           headers: { Authorization: `Bearer ${token}` },
// // // // //           body: formData,
// // // // //         });
// // // // //         const uploadData = await uploadRes.json();
// // // // //         profileImageUrl = uploadData.imageUrl;
// // // // //       }

// // // // //       const res = await fetch('http://localhost:5000/api/users/edit', {
// // // // //         method: 'PUT',
// // // // //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// // // // //         body: JSON.stringify({ ...form, profileImage: profileImageUrl })
// // // // //       });

// // // // //       if (!res.ok) throw new Error();
// // // // //       setSnack({ open: true, message: 'Profile updated successfully ✅', severity: 'success' });
// // // // //       navigate('/profile');
// // // // //     } catch {
// // // // //       setSnack({ open: true, message: 'Failed to update profile ❌', severity: 'error' });
// // // // //     }
// // // // //   };

// // // // //   const handlePasswordChange = async () => {
// // // // //     if (newPassword.length < 6) return setSnack({ open: true, message: 'Password must be at least 6 characters ❌', severity: 'error' });
// // // // //     if (newPassword !== confirmPassword) return setSnack({ open: true, message: "Passwords don't match ❌", severity: 'error' });

// // // // //     try {
// // // // //       const res = await fetch('http://localhost:5000/api/users/change-password', {
// // // // //         method: 'PUT',
// // // // //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// // // // //         body: JSON.stringify({ password: newPassword })
// // // // //       });
// // // // //       if (!res.ok) throw new Error();
// // // // //       setSnack({ open: true, message: 'Password changed successfully ✅', severity: 'success' });
// // // // //       setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); setPasswordConfirmed(false);
// // // // //     } catch {
// // // // //       setSnack({ open: true, message: 'Failed to change password ❌', severity: 'error' });
// // // // //     }
// // // // //   };

// // // // //   return (
// // // // //     <Box sx={{ maxWidth: 480, mx: 'auto', p: 2 }}>
// // // // //       <IconButton onClick={() => navigate(-1)}><ArrowBack /></IconButton>
// // // // //       <Typography variant="h5" fontWeight="bold" mb={2}>Edit Profile</Typography>
// // // // //       <form onSubmit={handleSubmit}>
// // // // //         <Box sx={{ textAlign: 'center', mb: 2 }}>
// // // // //           <input type="file" accept="image/*" onChange={handleImageChange} id="profile-img" hidden />
// // // // //           <label htmlFor="profile-img" style={{ cursor: 'pointer' }}>
// // // // //             <Avatar src={previewUrl} sx={{ width: 96, height: 96, mx: 'auto', mb: 1 }} />
// // // // //             <Typography variant="caption" sx={{ textDecoration: 'underline' }}>Click to change profile picture</Typography>
// // // // //           </label>
// // // // //         </Box>
// // // // //         <TextField name="firstName" label="First Name" value={form.firstName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// // // // //         <TextField name="lastName" label="Last Name" value={form.lastName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// // // // //         <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} fullWidth sx={{ mb: 3 }} />
// // // // //         <Button type="submit" variant="contained" fullWidth sx={{ mb: 2, backgroundColor: '#ff6600' }}>
// // // // //           Save Changes
// // // // //         </Button>
// // // // //       </form>

// // // // //       <Box mt={4}>
// // // // //         <Typography variant="h6" mb={1}>Change Password</Typography>
// // // // //         {!passwordConfirmed ? (
// // // // //           <>
// // // // //             <TextField
// // // // //               label="Current Password"
// // // // //               type={showPassword ? 'text' : 'password'}
// // // // //               value={currentPassword}
// // // // //               onChange={(e) => setCurrentPassword(e.target.value)}
// // // // //               fullWidth sx={{ mb: 2 }}
// // // // //               InputProps={{
// // // // //                 endAdornment: (
// // // // //                   <InputAdornment position="end">
// // // // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // // // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // // // //                     </IconButton>
// // // // //                   </InputAdornment>
// // // // //                 )
// // // // //               }}
// // // // //             />
// // // // //             <Button variant="outlined" fullWidth onClick={handleVerifyPassword} sx={{ color: '#ff6600', borderColor: '#ff6600' }}>
// // // // //               Verify Password
// // // // //             </Button>
// // // // //           </>
// // // // //         ) : (
// // // // //           <>
// // // // //             <TextField
// // // // //               label="New Password"
// // // // //               type={showPassword ? 'text' : 'password'}
// // // // //               value={newPassword}
// // // // //               onChange={(e) => setNewPassword(e.target.value)}
// // // // //               fullWidth sx={{ mb: 1 }}
// // // // //               InputProps={{
// // // // //                 endAdornment: (
// // // // //                   <InputAdornment position="end">
// // // // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // // // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // // // //                     </IconButton>
// // // // //                   </InputAdornment>
// // // // //                 )
// // // // //               }}
// // // // //             />
// // // // //             <Typography variant="caption" color="textSecondary" sx={{ mb: 1, display: 'block' }}>
// // // // //               Password must be at least 6 characters
// // // // //             </Typography>
// // // // //             <TextField
// // // // //               label="Confirm Password"
// // // // //               type={showPassword ? 'text' : 'password'}
// // // // //               value={confirmPassword}
// // // // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // // // //               fullWidth sx={{ mb: 2 }}
// // // // //             />
// // // // //             <Button variant="contained" fullWidth onClick={handlePasswordChange} sx={{ backgroundColor: '#ff6600' }}>
// // // // //               Change Password
// // // // //             </Button>
// // // // //           </>
// // // // //         )}
// // // // //       </Box>

// // // // //       <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack({ ...snack, open: false })}>
// // // // //         <Alert severity={snack.severity} sx={{ width: '100%' }}>{snack.message}</Alert>
// // // // //       </Snackbar>
// // // // //     </Box>
// // // // //   );
// // // // // }

// // // // // export default EditProfilePage;


// // // // // ✅ src/pages/EditProfilePage.js (updated)
// // // // import React, { useEffect, useState } from 'react';
// // // // import {
// // // //   TextField, Button, Avatar, Box, Typography, IconButton, InputAdornment, Snackbar, Alert
// // // // } from '@mui/material';
// // // // import { Visibility, VisibilityOff, ArrowBack } from '@mui/icons-material';
// // // // import { useNavigate } from 'react-router-dom';

// // // // function EditProfilePage() {
// // // //   const [user, setUser] = useState(null);
// // // //   const [form, setForm] = useState({ firstName: '', lastName: '', phone: '', profileImage: null });
// // // //   const [previewUrl, setPreviewUrl] = useState(null);
// // // //   const [passwordConfirmed, setPasswordConfirmed] = useState(false);
// // // //   const [currentPassword, setCurrentPassword] = useState('');
// // // //   const [newPassword, setNewPassword] = useState('');
// // // //   const [confirmPassword, setConfirmPassword] = useState('');
// // // //   const [showPassword, setShowPassword] = useState(false);
// // // //   const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });
// // // //   const navigate = useNavigate();
// // // //   const token = localStorage.getItem('token');

// // // //   useEffect(() => {
// // // //     const fetchUser = async () => {
// // // //       const res = await fetch('http://localhost:5000/api/users/me', {
// // // //         headers: { Authorization: `Bearer ${token}` },
// // // //       });
// // // //       const data = await res.json();
// // // //       setUser(data);
// // // //       setForm({ firstName: data.firstName || '', lastName: data.lastName || '', phone: data.phone || '', profileImage: null });
// // // //       setPreviewUrl(data.profileImage || null);
// // // //     };
// // // //     fetchUser();
// // // //   }, [token]);

// // // //   const handleImageChange = (e) => {
// // // //     const file = e.target.files[0];
// // // //     if (file) {
// // // //       setForm({ ...form, profileImage: file });
// // // //       setPreviewUrl(URL.createObjectURL(file));
// // // //     }
// // // //   };

// // // //   const handleChange = (e) => {
// // // //     const { name, value } = e.target;
// // // //     setForm({ ...form, [name]: value });
// // // //   };

// // // //   const handleVerifyPassword = async () => {
// // // //     const res = await fetch('http://localhost:5000/api/users/verify-password', {
// // // //       method: 'POST',
// // // //       headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// // // //       body: JSON.stringify({ password: currentPassword })
// // // //     });
// // // //     const data = await res.json();
// // // //     if (res.ok) {
// // // //       setPasswordConfirmed(true);
// // // //       setSnack({ open: true, message: 'Password verified ✅', severity: 'success' });
// // // //     } else {
// // // //       setSnack({ open: true, message: data.message || 'Incorrect password ❌', severity: 'error' });
// // // //     }
// // // //   };

// // // //   const handleSubmit = async (e) => {
// // // //     e.preventDefault();
// // // //     try {
// // // //       let profileImageUrl = user.profileImage;
// // // //       if (form.profileImage) {
// // // //         const formData = new FormData();
// // // //         formData.append('image', form.profileImage);
// // // //         const uploadRes = await fetch('http://localhost:5000/api/upload?folder=profile_pictures', {
// // // //           method: 'POST',
// // // //           headers: { Authorization: `Bearer ${token}` },
// // // //           body: formData,
// // // //         });
// // // //         const uploadData = await uploadRes.json();
// // // //         profileImageUrl = uploadData.imageUrl;
// // // //       }

// // // //       const res = await fetch('http://localhost:5000/api/users/edit', {
// // // //         method: 'PUT',
// // // //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// // // //         body: JSON.stringify({ ...form, profileImage: profileImageUrl })
// // // //       });

// // // //       if (!res.ok) throw new Error();
// // // //       setSnack({ open: true, message: 'Profile updated successfully ✅', severity: 'success' });
// // // //       navigate('/profile');
// // // //     } catch {
// // // //       setSnack({ open: true, message: 'Failed to update profile ❌', severity: 'error' });
// // // //     }
// // // //   };

// // // //   const handlePasswordChange = async () => {
// // // //     if (newPassword.length < 6) return setSnack({ open: true, message: 'Password must be at least 6 characters ❌', severity: 'error' });
// // // //     if (newPassword !== confirmPassword) return setSnack({ open: true, message: "Passwords don't match ❌", severity: 'error' });

// // // //     try {
// // // //       const res = await fetch('http://localhost:5000/api/users/change-password', {
// // // //         method: 'PUT',
// // // //         headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` },
// // // //         body: JSON.stringify({ password: newPassword })
// // // //       });
// // // //       if (!res.ok) throw new Error();
// // // //       setSnack({ open: true, message: 'Password changed successfully ✅', severity: 'success' });
// // // //       setCurrentPassword(''); setNewPassword(''); setConfirmPassword(''); setPasswordConfirmed(false);
// // // //     } catch {
// // // //       setSnack({ open: true, message: 'Failed to change password ❌', severity: 'error' });
// // // //     }
// // // //   };

// // // //   return (
// // // //     <Box sx={{ maxWidth: 480, mx: 'auto', p: 2 }}>
// // // //       <IconButton onClick={() => navigate(-1)}><ArrowBack /></IconButton>
// // // //       <Typography variant="h5" fontWeight="bold" mb={2}>Edit Profile</Typography>
// // // //       <form onSubmit={handleSubmit}>
// // // //         <Box sx={{ textAlign: 'center', mb: 2 }}>
// // // //           <input type="file" accept="image/*" onChange={handleImageChange} id="profile-img" hidden />
// // // //           <label htmlFor="profile-img" style={{ cursor: 'pointer' }}>
// // // //             <Avatar src={previewUrl} sx={{ width: 96, height: 96, mx: 'auto', mb: 1 }} />
// // // //             <Typography variant="caption" sx={{ textDecoration: 'underline' }}>Click to change profile picture</Typography>
// // // //           </label>
// // // //         </Box>
// // // //         <TextField name="firstName" label="First Name" value={form.firstName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// // // //         <TextField name="lastName" label="Last Name" value={form.lastName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// // // //         <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} fullWidth sx={{ mb: 3 }} />
// // // //         <Button type="submit" variant="contained" fullWidth sx={{ mb: 2, backgroundColor: '#ff6600' }}>
// // // //           Save Changes
// // // //         </Button>
// // // //       </form>

// // // //       <Box mt={4}>
// // // //         <Typography variant="h6" mb={1}>Change Password</Typography>
// // // //         {!passwordConfirmed ? (
// // // //           <>
// // // //             <TextField
// // // //               label="Current Password"
// // // //               type={showPassword ? 'text' : 'password'}
// // // //               value={currentPassword}
// // // //               onChange={(e) => setCurrentPassword(e.target.value)}
// // // //               fullWidth sx={{ mb: 2 }}
// // // //               InputProps={{
// // // //                 endAdornment: (
// // // //                   <InputAdornment position="end">
// // // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // // //                     </IconButton>
// // // //                   </InputAdornment>
// // // //                 )
// // // //               }}
// // // //             />
// // // //             <Button variant="outlined" fullWidth onClick={handleVerifyPassword} sx={{ color: '#ff6600', borderColor: '#ff6600' }}>
// // // //               Verify Password
// // // //             </Button>
// // // //           </>
// // // //         ) : (
// // // //           <>
// // // //             <TextField
// // // //               label="New Password"
// // // //               type={showPassword ? 'text' : 'password'}
// // // //               value={newPassword}
// // // //               onChange={(e) => setNewPassword(e.target.value)}
// // // //               fullWidth sx={{ mb: 1 }}
// // // //               InputProps={{
// // // //                 endAdornment: (
// // // //                   <InputAdornment position="end">
// // // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // // //                     </IconButton>
// // // //                   </InputAdornment>
// // // //                 )
// // // //               }}
// // // //             />
// // // //             <Typography variant="caption" color="textSecondary" sx={{ mb: 1, display: 'block' }}>
// // // //               Password must be at least 6 characters
// // // //             </Typography>
// // // //             <TextField
// // // //               label="Confirm Password"
// // // //               type={showPassword ? 'text' : 'password'}
// // // //               value={confirmPassword}
// // // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // // //               fullWidth sx={{ mb: 2 }}
// // // //             />
// // // //             <Button variant="contained" fullWidth onClick={handlePasswordChange} sx={{ backgroundColor: '#ff6600' }}>
// // // //               Change Password
// // // //             </Button>
// // // //           </>
// // // //         )}
// // // //       </Box>

// // // //       <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack({ ...snack, open: false })}>
// // // //         <Alert severity={snack.severity} sx={{ width: '100%' }}>{snack.message}</Alert>
// // // //       </Snackbar>
// // // //     </Box>
// // // //   );
// // // // }

// // // // export default EditProfilePage;

// // // import React, { useEffect, useState } from 'react';
// // // import {
// // //   TextField, Button, Avatar, Box, Typography, IconButton,
// // //   InputAdornment, Snackbar, Alert
// // // } from '@mui/material';
// // // import { Visibility, VisibilityOff, ArrowBackIos } from '@mui/icons-material';
// // // import { useNavigate } from 'react-router-dom';

// // // function EditProfilePage() {
// // //   const [user, setUser] = useState(null);
// // //   const [form, setForm] = useState({
// // //     firstName: '',
// // //     lastName: '',
// // //     phone: '',
// // //     profileImage: null
// // //   });
// // //   const [previewUrl, setPreviewUrl] = useState(null);
// // //   const [passwordConfirmed, setPasswordConfirmed] = useState(false);
// // //   const [currentPassword, setCurrentPassword] = useState('');
// // //   const [newPassword, setNewPassword] = useState('');
// // //   const [confirmPassword, setConfirmPassword] = useState('');
// // //   const [showPassword, setShowPassword] = useState(false);
// // //   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'success' });
// // //   const navigate = useNavigate();
// // //   const token = localStorage.getItem('token');

// // //   useEffect(() => {
// // //     const fetchUser = async () => {
// // //       try {
// // //         const res = await fetch('http://localhost:5000/api/users/me', {
// // //           headers: { Authorization: `Bearer ${token}` },
// // //         });
// // //         const data = await res.json();
// // //         setUser(data);
// // //         setForm({
// // //           firstName: data.firstName || '',
// // //           lastName: data.lastName || '',
// // //           phone: data.phone || '',
// // //           profileImage: null
// // //         });
// // //         setPreviewUrl(data.profileImage || null);
// // //       } catch (err) {
// // //         console.error('Failed to fetch user', err);
// // //       }
// // //     };
// // //     fetchUser();
// // //   }, [token]);

// // //   const handleImageChange = (e) => {
// // //     const file = e.target.files[0];
// // //     if (file) {
// // //       setForm({ ...form, profileImage: file });
// // //       setPreviewUrl(URL.createObjectURL(file));
// // //     }
// // //   };

// // //   const handleChange = (e) => {
// // //     const { name, value } = e.target;
// // //     setForm({ ...form, [name]: value });
// // //   };

// // //   const handleVerifyPassword = async () => {
// // //     try {
// // //       const res = await fetch('http://localhost:5000/api/users/verify-password', {
// // //         method: 'POST',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           Authorization: `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ password: currentPassword })
// // //       });
// // //       const data = await res.json();
// // //       if (res.ok) {
// // //         setPasswordConfirmed(true);
// // //         setSnackbar({ open: true, message: 'Password verified successfully ✅', severity: 'success' });
// // //       } else {
// // //         setSnackbar({ open: true, message: data.message || 'Incorrect password ❌', severity: 'error' });
// // //       }
// // //     } catch (err) {
// // //       console.error('Password verification error:', err);
// // //     }
// // //   };

// // //   const handleSubmit = async (e) => {
// // //     e.preventDefault();
// // //     try {
// // //       let imageUrl = user.profileImage;

// // //       if (form.profileImage) {
// // //         const formData = new FormData();
// // //         formData.append('image', form.profileImage);
// // //         const uploadRes = await fetch('http://localhost:5000/api/upload?folder=profile_pictures', {
// // //           method: 'POST',
// // //           headers: { Authorization: `Bearer ${token}` },
// // //           body: formData,
// // //         });
// // //         const uploadData = await uploadRes.json();
// // //         imageUrl = uploadData.imageUrl;
// // //       }

// // //       const profileUpdate = {
// // //         firstName: form.firstName,
// // //         lastName: form.lastName,
// // //         phone: form.phone,
// // //         profileImage: imageUrl
// // //       };

// // //       const res = await fetch('http://localhost:5000/api/users/edit', {
// // //         method: 'PUT',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           Authorization: `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify(profileUpdate)
// // //       });

// // //       if (!res.ok) throw new Error('Failed to update profile');
// // //       setSnackbar({ open: true, message: 'Profile updated successfully ✅', severity: 'success' });
// // //       setTimeout(() => navigate('/profile'), 1500);
// // //     } catch (err) {
// // //       console.error(err);
// // //       setSnackbar({ open: true, message: 'Error updating profile ❌', severity: 'error' });
// // //     }
// // //   };

// // //   const handlePasswordChange = async () => {
// // //     if (newPassword !== confirmPassword) {
// // //       return setSnackbar({ open: true, message: "Passwords don't match ❌", severity: 'error' });
// // //     }

// // //     try {
// // //       const res = await fetch('http://localhost:5000/api/users/change-password', {
// // //         method: 'PUT',
// // //         headers: {
// // //           'Content-Type': 'application/json',
// // //           Authorization: `Bearer ${token}`
// // //         },
// // //         body: JSON.stringify({ password: newPassword })
// // //       });

// // //       if (!res.ok) {
// // //         const data = await res.json();
// // //         return setSnackbar({ open: true, message: data.message || 'Error changing password ❌', severity: 'error' });
// // //       }

// // //       setSnackbar({ open: true, message: 'Password changed successfully ✅', severity: 'success' });
// // //       setCurrentPassword('');
// // //       setNewPassword('');
// // //       setConfirmPassword('');
// // //       setPasswordConfirmed(false);
// // //     } catch {
// // //       setSnackbar({ open: true, message: 'Failed to change password ❌', severity: 'error' });
// // //     }
// // //   };

// // //   return (
// // //     <Box sx={{ maxWidth: 480, mx: 'auto', p: 2 }}>
// // //       <IconButton onClick={() => navigate('/profile')} sx={{ position: 'absolute', right: 16, top: 16 }}>
// // //         <ArrowBackIos sx={{ transform: 'rotate(180deg)', color: '#ff6600' }} />
// // //       </IconButton>

// // //       <Typography
// // //         variant="h5"
// // //         fontWeight="bold"
// // //         align="center"
// // //         sx={{ color: '#ff6600', fontFamily: 'inherit', mb: 2 }}
// // //       >
// // //         Edit Profile
// // //       </Typography>

// // //       <form onSubmit={handleSubmit}>
// // //         <Box sx={{ textAlign: 'center', mb: 2 }}>
// // //           <input type="file" accept="image/*" onChange={handleImageChange} id="profile-img" hidden />
// // //           <label htmlFor="profile-img" style={{ cursor: 'pointer', display: 'inline-block' }}>
// // //             <Avatar
// // //               src={previewUrl}
// // //               alt="Profile"
// // //               sx={{ width: 96, height: 96, mx: 'auto', mb: 1 }}
// // //             />
// // //             <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
// // //               Click to change profile picture
// // //             </Typography>
// // //           </label>
// // //         </Box>

// // //         <TextField name="firstName" label="First Name" value={form.firstName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// // //         <TextField name="lastName" label="Last Name" value={form.lastName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// // //         <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} fullWidth sx={{ mb: 3 }} />

// // //         <Button
// // //           type="submit"
// // //           variant="contained"
// // //           fullWidth
// // //           sx={{ mb: 2, backgroundColor: '#ff6600', '&:hover': { backgroundColor: '#e65c00' } }}
// // //         >
// // //           Save Changes
// // //         </Button>
// // //       </form>

// // //       <Box mt={4}>
// // //         <Typography variant="h6" mb={1}>Change Password</Typography>

// // //         {!passwordConfirmed ? (
// // //           <Box>
// // //             <TextField
// // //               label="Current Password"
// // //               type={showPassword ? 'text' : 'password'}
// // //               value={currentPassword}
// // //               onChange={(e) => setCurrentPassword(e.target.value)}
// // //               fullWidth sx={{ mb: 2 }}
// // //               InputProps={{
// // //                 endAdornment: (
// // //                   <InputAdornment position="end">
// // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // //                     </IconButton>
// // //                   </InputAdornment>
// // //                 )
// // //               }}
// // //             />
// // //             <Button
// // //               variant="outlined"
// // //               fullWidth
// // //               onClick={handleVerifyPassword}
// // //               sx={{ color: '#ff6600', borderColor: '#ff6600' }}
// // //             >
// // //               Verify Password
// // //             </Button>
// // //           </Box>
// // //         ) : (
// // //           <Box>
// // //             <TextField
// // //               label="New Password"
// // //               type={showPassword ? 'text' : 'password'}
// // //               value={newPassword}
// // //               onChange={(e) => setNewPassword(e.target.value)}
// // //               fullWidth sx={{ mb: 1 }}
// // //               InputProps={{
// // //                 endAdornment: (
// // //                   <InputAdornment position="end">
// // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // //                     </IconButton>
// // //                   </InputAdornment>
// // //                 )
// // //               }}
// // //             />
// // //             <Typography variant="caption" color="gray" sx={{ mb: 2, display: 'block', ml: 1 }}>
// // //               Password must be at least 6 characters
// // //             </Typography>
// // //             <TextField
// // //               label="Confirm Password"
// // //               type={showPassword ? 'text' : 'password'}
// // //               value={confirmPassword}
// // //               onChange={(e) => setConfirmPassword(e.target.value)}
// // //               fullWidth sx={{ mb: 2 }}
// // //               InputProps={{
// // //                 endAdornment: (
// // //                   <InputAdornment position="end">
// // //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// // //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// // //                     </IconButton>
// // //                   </InputAdornment>
// // //                 )
// // //               }}
// // //             />
// // //             <Button
// // //               variant="contained"
// // //               fullWidth
// // //               onClick={handlePasswordChange}
// // //               sx={{ backgroundColor: '#ff6600', '&:hover': { backgroundColor: '#e65c00' } }}
// // //             >
// // //               Change Password
// // //             </Button>
// // //           </Box>
// // //         )}
// // //       </Box>

// // //       <Snackbar
// // //         open={snackbar.open}
// // //         autoHideDuration={2500}
// // //         onClose={() => setSnackbar({ ...snackbar, open: false })}
// // //         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
// // //       >
// // //         <Alert onClose={() => setSnackbar({ ...snackbar, open: false })} severity={snackbar.severity} sx={{ width: '100%' }}>
// // //           {snackbar.message}
// // //         </Alert>
// // //       </Snackbar>
// // //     </Box>
// // //   );
// // // }

// // // export default EditProfilePage;


// // // src/pages/EditProfilePage.js
// // import React, { useEffect, useState } from 'react';
// // import {
// //   TextField, Button, Avatar, Box, Typography, IconButton, InputAdornment, Snackbar, Alert
// // } from '@mui/material';
// // import { Visibility, VisibilityOff } from '@mui/icons-material';
// // import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
// // import { useNavigate } from 'react-router-dom';

// // function EditProfilePage() {
// //   const [user, setUser] = useState(null);
// //   const [form, setForm] = useState({
// //     firstName: '',
// //     lastName: '',
// //     phone: '',
// //     profileImage: null
// //   });
// //   const [previewUrl, setPreviewUrl] = useState(null);
// //   const [passwordConfirmed, setPasswordConfirmed] = useState(false);
// //   const [currentPassword, setCurrentPassword] = useState('');
// //   const [newPassword, setNewPassword] = useState('');
// //   const [confirmPassword, setConfirmPassword] = useState('');
// //   const [showPassword, setShowPassword] = useState(false);
// //   const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });
// //   const navigate = useNavigate();
// //   const token = localStorage.getItem('token');

// //   useEffect(() => {
// //     const fetchUser = async () => {
// //       try {
// //         const res = await fetch('http://localhost:5000/api/users/me', {
// //           headers: { Authorization: `Bearer ${token}` },
// //         });
// //         const data = await res.json();
// //         setUser(data);
// //         setForm({
// //           firstName: data.firstName || '',
// //           lastName: data.lastName || '',
// //           phone: data.phone || '',
// //           profileImage: null
// //         });
// //         setPreviewUrl(data.profileImage || null);
// //       } catch (err) {
// //         console.error('Failed to fetch user', err);
// //       }
// //     };
// //     fetchUser();
// //   }, [token]);

// //   const handleImageChange = (e) => {
// //     const file = e.target.files[0];
// //     if (file) {
// //       setForm({ ...form, profileImage: file });
// //       setPreviewUrl(URL.createObjectURL(file));
// //     }
// //   };

// //   const handleChange = (e) => {
// //     const { name, value } = e.target;
// //     setForm({ ...form, [name]: value });
// //   };

// //   const handleVerifyPassword = async () => {
// //     try {
// //       const res = await fetch('http://localhost:5000/api/users/verify-password', {
// //         method: 'POST',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}`
// //         },
// //         body: JSON.stringify({ password: currentPassword })
// //       });
// //       const data = await res.json();
// //       if (res.ok) {
// //         setPasswordConfirmed(true);
// //         setSnack({ open: true, message: 'Password verified ✅', severity: 'success' });
// //       } else {
// //         setSnack({ open: true, message: data.message || 'Incorrect password ❌', severity: 'error' });
// //       }
// //     } catch (err) {
// //       console.error('Password verification error:', err);
// //     }
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       let imageUrl = user.profileImage;
// //       if (form.profileImage) {
// //         const formData = new FormData();
// //         formData.append('image', form.profileImage);

// //         const uploadRes = await fetch('http://localhost:5000/api/users/upload-profile', {
// //           method: 'POST',
// //           headers: { Authorization: `Bearer ${token}` },
// //           body: formData,
// //         });
// //         const uploadData = await uploadRes.json();
// //         imageUrl = uploadData.imageUrl || user.profileImage;
// //       }

// //       const profileUpdate = {
// //         firstName: form.firstName,
// //         lastName: form.lastName,
// //         phone: form.phone,
// //         profileImage: imageUrl
// //       };

// //       const res = await fetch('http://localhost:5000/api/users/edit', {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}`
// //         },
// //         body: JSON.stringify(profileUpdate)
// //       });

// //       if (!res.ok) throw new Error('Failed to update profile');
// //       setSnack({ open: true, message: 'Profile updated ✅', severity: 'success' });
// //       setTimeout(() => navigate('/profile'), 1500);
// //     } catch (err) {
// //       console.error(err);
// //       setSnack({ open: true, message: 'Error updating profile ❌', severity: 'error' });
// //     }
// //   };

// //   const handlePasswordChange = async () => {
// //     if (newPassword.length < 6) {
// //       return setSnack({ open: true, message: 'Password must be at least 6 characters', severity: 'warning' });
// //     }
// //     if (newPassword !== confirmPassword) {
// //       return setSnack({ open: true, message: "Passwords don't match ❌", severity: 'error' });
// //     }
// //     try {
// //       const res = await fetch('http://localhost:5000/api/users/change-password', {
// //         method: 'PUT',
// //         headers: {
// //           'Content-Type': 'application/json',
// //           Authorization: `Bearer ${token}`
// //         },
// //         body: JSON.stringify({ password: newPassword })
// //       });
// //       if (!res.ok) throw new Error();
// //       setSnack({ open: true, message: 'Password changed successfully ✅', severity: 'success' });
// //       setCurrentPassword('');
// //       setNewPassword('');
// //       setConfirmPassword('');
// //       setPasswordConfirmed(false);
// //     } catch {
// //       setSnack({ open: true, message: 'Failed to change password ❌', severity: 'error' });
// //     }
// //   };

// //   return (
// //     <Box sx={{ maxWidth: 480, mx: 'auto', p: 2 }}>
// //       <Box sx={{ position: 'relative', mb: 2 }}>
// //         <IconButton
// //           onClick={() => navigate(-1)}
// //           sx={{
// //             position: 'absolute',
// //             right: 0,
// //             top: 0,
// //             backgroundColor: 'white',
// //             borderRadius: '50%',
// //             '&:hover': {
// //               backgroundColor: '#ffe5d1'
// //             },
// //             boxShadow: 1
// //           }}
// //         >
// //           <ArrowBackIosNewIcon sx={{ color: '#555' }} />
// //         </IconButton>
// //         <Typography
// //           variant="h5"
// //           fontWeight="bold"
// //           align="center"
// //           sx={{ color: '#ff6600', fontFamily: "'Roboto', sans-serif" }}
// //         >
// //           Edit Profile
// //         </Typography>
// //       </Box>

// //       <form onSubmit={handleSubmit}>
// //         <Box sx={{ textAlign: 'center', mb: 2 }}>
// //           <input type="file" accept="image/*" onChange={handleImageChange} id="profile-img" hidden />
// //           <label htmlFor="profile-img" style={{ cursor: 'pointer', display: 'inline-block' }}>
// //             <Avatar src={previewUrl} alt="Profile" sx={{ width: 96, height: 96, mx: 'auto', mb: 1 }} />
// //             <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
// //               Click to change profile picture
// //             </Typography>
// //           </label>
// //         </Box>
// //         <TextField name="firstName" label="First Name" value={form.firstName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// //         <TextField name="lastName" label="Last Name" value={form.lastName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
// //         <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} fullWidth sx={{ mb: 3 }} />
// //         <Button type="submit" variant="contained" fullWidth sx={{ mb: 2, backgroundColor: '#ff6600', '&:hover': { backgroundColor: '#e65c00' } }}>
// //           Save Changes
// //         </Button>
// //       </form>

// //       <Box mt={4}>
// //         <Typography variant="h6" mb={1}>Change Password</Typography>
// //         {!passwordConfirmed ? (
// //           <Box>
// //             <TextField
// //               label="Current Password"
// //               type={showPassword ? 'text' : 'password'}
// //               value={currentPassword}
// //               onChange={(e) => setCurrentPassword(e.target.value)}
// //               fullWidth
// //               sx={{ mb: 2 }}
// //               InputProps={{
// //                 endAdornment: (
// //                   <InputAdornment position="end">
// //                     <IconButton onClick={() => setShowPassword(!showPassword)}>
// //                       {showPassword ? <VisibilityOff /> : <Visibility />}
// //                     </IconButton>
// //                   </InputAdornment>
// //                 )
// //               }}
// //             />
// //             <Button variant="outlined" fullWidth onClick={handleVerifyPassword}>
// //               Verify Password
// //             </Button>
// //           </Box>
// //         ) : (
// //           <Box>
// //             <TextField
// //               label="New Password"
// //               type="password"
// //               value={newPassword}
// //               onChange={(e) => setNewPassword(e.target.value)}
// //               fullWidth sx={{ mb: 1 }}
// //             />
// //             <Typography variant="caption" sx={{ ml: 1, mb: 1, display: 'block', color: 'gray' }}>
// //               Password must be at least 6 characters
// //             </Typography>
// //             <TextField
// //               label="Confirm Password"
// //               type="password"
// //               value={confirmPassword}
// //               onChange={(e) => setConfirmPassword(e.target.value)}
// //               fullWidth sx={{ mb: 2 }}
// //             />
// //             <Button variant="contained" fullWidth onClick={handlePasswordChange} sx={{ backgroundColor: '#ff6600', '&:hover': { backgroundColor: '#e65c00' } }}>
// //               Change Password
// //             </Button>
// //           </Box>
// //         )}
// //       </Box>

// //       <Snackbar open={snack.open} autoHideDuration={3000} onClose={() => setSnack({ ...snack, open: false })}>
// //         <Alert severity={snack.severity} sx={{ width: '100%' }}>{snack.message}</Alert>
// //       </Snackbar>
// //     </Box>
// //   );
// // }

// // export default EditProfilePage;

// // src/pages/EditProfilePage.js
// import React, { useEffect, useState } from 'react';
// import {
//   TextField, Button, Avatar, Box, Typography, IconButton, InputAdornment, Snackbar
// } from '@mui/material';
// import { Visibility, VisibilityOff, ArrowBack } from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// function EditProfilePage() {
//   const [user, setUser] = useState(null);
//   const [form, setForm] = useState({
//     firstName: '',
//     lastName: '',
//     phone: '',
//     profileImage: null
//   });
//   const [previewUrl, setPreviewUrl] = useState(null);
//   const [passwordConfirmed, setPasswordConfirmed] = useState(false);
//   const [currentPassword, setCurrentPassword] = useState('');
//   const [newPassword, setNewPassword] = useState('');
//   const [confirmPassword, setConfirmPassword] = useState('');
//   const [showPassword, setShowPassword] = useState(false);
//   const [snackbar, setSnackbar] = useState({ open: false, message: '', severity: 'info' });

//   const navigate = useNavigate();
//   const token = localStorage.getItem('token');

//   const showSnackbar = (message, severity = 'info') => {
//     setSnackbar({ open: true, message, severity });
//   };

//   useEffect(() => {
//     const fetchUser = async () => {
//       try {
//         const res = await fetch('http://localhost:5000/api/users/me', {
//           headers: { Authorization: `Bearer ${token}` },
//         });
//         const data = await res.json();
//         setUser(data);
//         setForm({
//           firstName: data.firstName || '',
//           lastName: data.lastName || '',
//           phone: data.phone || '',
//           profileImage: null
//         });
//         setPreviewUrl(data.profileImage || null);
//       } catch (err) {
//         console.error('Failed to fetch user', err);
//       }
//     };
//     fetchUser();
//   }, [token]);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setForm({ ...form, profileImage: file });
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm({ ...form, [name]: value });
//   };

//   const handleVerifyPassword = async () => {
//     try {
//       const res = await fetch('http://localhost:5000/api/users/verify-password', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ password: currentPassword })
//       });
//       const data = await res.json();
//       if (res.ok) {
//         setPasswordConfirmed(true);
//         showSnackbar('Password verified ✅', 'success');
//       } else {
//         showSnackbar(data.message || 'Incorrect password ❌', 'error');
//       }
//     } catch (err) {
//       console.error('Password verification error:', err);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const formData = new FormData();
//       formData.append('firstName', form.firstName);
//       formData.append('lastName', form.lastName);
//       formData.append('phone', form.phone);
//       if (form.profileImage) {
//         formData.append('image', form.profileImage);
//       }

//       const uploadRes = await fetch('http://localhost:5000/api/upload?folder=profile_pictures', {
//         method: 'POST',
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });
//       const uploadData = await uploadRes.json();

//       const profileUpdate = {
//         firstName: form.firstName,
//         lastName: form.lastName,
//         phone: form.phone,
//         profileImage: uploadData.imageUrl || user.profileImage
//       };

//       const res = await fetch('http://localhost:5000/api/users/edit', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify(profileUpdate)
//       });

//       if (!res.ok) throw new Error('Failed to update profile');
//       showSnackbar('Profile updated ✅', 'success');
//       setTimeout(() => navigate('/profile'), 1500);
//     } catch (err) {
//       console.error(err);
//       showSnackbar('Error updating profile ❌', 'error');
//     }
//   };

//   const handlePasswordChange = async () => {
//     if (newPassword.length < 6) return showSnackbar("Password must be at least 6 characters ❌", 'error');
//     if (newPassword !== confirmPassword) {
//       return showSnackbar("Passwords don't match ❌", 'error');
//     }
//     try {
//       const res = await fetch('http://localhost:5000/api/users/change-password', {
//         method: 'PUT',
//         headers: {
//           'Content-Type': 'application/json',
//           Authorization: `Bearer ${token}`
//         },
//         body: JSON.stringify({ password: newPassword })
//       });
//       if (!res.ok) throw new Error();
//       showSnackbar('Password changed successfully ✅', 'success');
//       setCurrentPassword('');
//       setNewPassword('');
//       setConfirmPassword('');
//       setPasswordConfirmed(false);
//     } catch {
//       showSnackbar('Failed to change password ❌', 'error');
//     }
//   };

//   return (
//     <Box sx={{ maxWidth: 480, mx: 'auto', p: 2, position: 'relative' }}>
//       <IconButton
//         onClick={() => navigate(-1)}
//         sx={{
//           position: 'absolute',
//           right: 0,
//           top: 16,
//           backgroundColor: '#fff',
//           borderRadius: '50%',
//           border: '1px solid #ddd',
//           color: 'gray',
//           '&:hover': {
//             backgroundColor: '#ffe5d0',
//           }
//         }}
//       >
//         <ArrowBack sx={{ transform: 'rotate(180deg)' }} />
//       </IconButton>

//       <Typography variant="h5" fontWeight="bold" mb={2} align="center" color="#ff6600">
//         Edit Profile
//       </Typography>

//       <form onSubmit={handleSubmit}>
//         <Box sx={{ textAlign: 'center', mb: 2 }}>
//           <input type="file" accept="image/*" onChange={handleImageChange} id="profile-img" hidden />
//           <label htmlFor="profile-img" style={{ cursor: 'pointer', display: 'inline-block' }}>
//             <Avatar src={previewUrl} alt="Profile" sx={{ width: 96, height: 96, mx: 'auto', mb: 1 }} />
//             <Typography variant="caption" sx={{ textDecoration: 'underline' }}>
//               Click to change profile picture
//             </Typography>
//           </label>
//         </Box>
//         <TextField
//           name="firstName"
//           label="First Name"
//           value={form.firstName}
//           onChange={handleChange}
//           fullWidth sx={{ mb: 2 }}
//         />
//         <TextField
//           name="lastName"
//           label="Last Name"
//           value={form.lastName}
//           onChange={handleChange}
//           fullWidth sx={{ mb: 2 }}
//         />
//         <TextField
//           name="phone"
//           label="Phone"
//           value={form.phone}
//           onChange={handleChange}
//           fullWidth sx={{ mb: 3 }}
//         />
//         <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#ff6600', '&:hover': { backgroundColor: '#e65c00' }, mb: 2 }}>
//           Save Changes
//         </Button>
//       </form>

//       <Box mt={4}>
//         <Typography variant="h6" mb={1}>Change Password</Typography>
//         {!passwordConfirmed ? (
//           <Box>
//             <TextField
//               label="Current Password"
//               type={showPassword ? 'text' : 'password'}
//               value={currentPassword}
//               onChange={(e) => setCurrentPassword(e.target.value)}
//               fullWidth
//               sx={{ mb: 2 }}
//               InputProps={{
//                 endAdornment: (
//                   <InputAdornment position="end">
//                     <IconButton onClick={() => setShowPassword(!showPassword)}>
//                       {showPassword ? <VisibilityOff /> : <Visibility />}
//                     </IconButton>
//                   </InputAdornment>
//                 )
//               }}
//             />
//             <Button
//               variant="outlined"
//               fullWidth
//               onClick={handleVerifyPassword}
//               sx={{
//                 color: '#ff6600',
//                 borderColor: '#ff6600',
//                 '&:hover': { backgroundColor: '#ffe5d0', borderColor: '#ff6600' }
//               }}
//             >
//               Verify Password
//             </Button>
//           </Box>
//         ) : (
//           <Box>
//             <TextField
//               label="New Password"
//               type="password"
//               value={newPassword}
//               onChange={(e) => setNewPassword(e.target.value)}
//               fullWidth sx={{ mb: 1 }}
//               helperText="Password must be at least 6 characters"
//             />
//             <TextField
//               label="Confirm Password"
//               type="password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//               fullWidth sx={{ mb: 2 }}
//             />
//             <Button
//               variant="contained"
//               fullWidth
//               onClick={handlePasswordChange}
//               sx={{ backgroundColor: '#ff6600', '&:hover': { backgroundColor: '#e65c00' } }}
//             >
//               Change Password
//             </Button>
//           </Box>
//         )}
//       </Box>

//       <Snackbar
//         open={snackbar.open}
//         onClose={() => setSnackbar({ ...snackbar, open: false })}
//         message={snackbar.message}
//         autoHideDuration={3000}
//         anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
//       />
//     </Box>
//   );
// }

// export default EditProfilePage;

// src/pages/EditProfilePage.js
import React, { useEffect, useState } from 'react';
import {
  TextField, Button, Avatar, Box, Typography, IconButton, InputAdornment, Snackbar, Alert
} from '@mui/material';
import { Visibility, VisibilityOff, ArrowBackIosNew } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

function EditProfilePage() {
  const [user, setUser] = useState(null);
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    phone: '',
    profileImage: null
  });
  const [previewUrl, setPreviewUrl] = useState(null);
  const [passwordConfirmed, setPasswordConfirmed] = useState(false);
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [snack, setSnack] = useState({ open: false, message: '', severity: 'success' });

  const navigate = useNavigate();
  const token = localStorage.getItem('token');

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/users/me', {
          headers: { Authorization: `Bearer ${token}` },
        });
        const data = await res.json();
        setUser(data);
        setForm({
          firstName: data.firstName || '',
          lastName: data.lastName || '',
          phone: data.phone || '',
          profileImage: null
        });
        setPreviewUrl(data.profileImage || null);
      } catch (err) {
        console.error('Failed to fetch user', err);
      }
    };
    fetchUser();
  }, [token]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, profileImage: file });
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleVerifyPassword = async () => {
    try {
      const res = await fetch('http://localhost:5000/api/users/verify-password', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ password: currentPassword })
      });
      const data = await res.json();
      if (res.ok) {
        setPasswordConfirmed(true);
        showSnackbar('Password verified successfully ✅', 'success');
      } else {
        showSnackbar(data.message || 'Incorrect password ❌', 'error');
      }
    } catch (err) {
      showSnackbar('Server error during password verification ❌', 'error');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append('firstName', form.firstName);
      formData.append('lastName', form.lastName);
      formData.append('phone', form.phone);
      if (form.profileImage) {
        formData.append('image', form.profileImage);
      }

      const uploadRes = await fetch('http://localhost:5000/api/upload?folder=profile_pictures', {
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });
      const uploadData = await uploadRes.json();

      const profileUpdate = {
        firstName: form.firstName,
        lastName: form.lastName,
        phone: form.phone,
        profileImage: uploadData.imageUrl || user.profileImage
      };

      const res = await fetch('http://localhost:5000/api/users/edit', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(profileUpdate)
      });

      if (!res.ok) throw new Error();
      showSnackbar('Profile updated successfully ✅', 'success');
      setTimeout(() => navigate('/profile'), 1000);
    } catch {
      showSnackbar('Error updating profile ❌', 'error');
    }
  };

  const handlePasswordChange = async () => {
    if (newPassword.length < 6) {
      return showSnackbar('Password must be at least 6 characters ❌', 'error');
    }
    if (newPassword !== confirmPassword) {
      return showSnackbar("Passwords don't match ❌", 'error');
    }
    try {
      const res = await fetch('http://localhost:5000/api/users/change-password', {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify({ password: newPassword })
      });
      if (!res.ok) throw new Error();
      showSnackbar('Password changed successfully ✅', 'success');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
      setPasswordConfirmed(false);
    } catch {
      showSnackbar('Failed to change password ❌', 'error');
    }
  };

  const showSnackbar = (message, severity) => {
    setSnack({ open: true, message, severity });
  };

  return (
    <Box sx={{ maxWidth: 500, mx: 'auto', p: 2, textAlign: 'center', position: 'relative' }}>
      {/* חץ אחורה בצד ימין למעלה */}
      <IconButton
        onClick={() => navigate('/profile')}
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          backgroundColor: 'white',
          borderRadius: '50%',
          boxShadow: 2,
          '&:hover': {
            backgroundColor: '#ffe3d2',
          }
        }}
      >
        <ArrowBackIosNew sx={{ transform: 'rotate(180deg)', color: '#666' }} />
      </IconButton>

      <Typography variant="h5" fontWeight="bold" mb={2} color="#ff6600">
        Edit Profile
      </Typography>

      <form onSubmit={handleSubmit}>
        <Box sx={{ mb: 3 }}>
          <input type="file" accept="image/*" onChange={handleImageChange} id="profile-img" hidden />
          <label htmlFor="profile-img" style={{ cursor: 'pointer' }}>
            <Avatar src={previewUrl} sx={{ width: 100, height: 100, mx: 'auto', mb: 1 }} />
            <Typography variant="caption" color="primary">
              Click to change profile picture
            </Typography>
          </label>
        </Box>

        <TextField name="firstName" label="First Name" value={form.firstName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField name="lastName" label="Last Name" value={form.lastName} onChange={handleChange} fullWidth sx={{ mb: 2 }} />
        <TextField name="phone" label="Phone" value={form.phone} onChange={handleChange} fullWidth sx={{ mb: 3 }} />

        <Button type="submit" variant="contained" fullWidth sx={{ backgroundColor: '#ff6600', '&:hover': { backgroundColor: '#e65c00' }, mb: 4 }}>
          Save Changes
        </Button>
      </form>

      <Box>
        <Typography variant="h6" mb={2}>Change Password</Typography>

        {!passwordConfirmed ? (
          <>
            <TextField
              label="Current Password"
              type={showPassword ? 'text' : 'password'}
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              fullWidth
              sx={{ mb: 2 }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                )
              }}
            />
            <Button
              variant="contained"
              fullWidth
              onClick={handleVerifyPassword}
              sx={{
                backgroundColor: '#ff6600',
                color: '#fff',
                '&:hover': { backgroundColor: '#e65c00' }
              }}
            >
              Verify Password
            </Button>
          </>
        ) : (
          <>
            <TextField
            label="New Password (min. 6 characters)"
            type={showPassword ? 'text' : 'password'}
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                )
            }}
            />

            <TextField
            label="Confirm Password"
            type={showPassword ? 'text' : 'password'}
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            fullWidth
            sx={{ mb: 2 }}
            InputProps={{
                endAdornment: (
                <InputAdornment position="end">
                    <IconButton onClick={() => setShowPassword(!showPassword)}>
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                )
            }}
            />

            <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
                variant="contained"
                fullWidth
                onClick={() => {
                    setPasswordConfirmed(false);
                    setCurrentPassword('');
                }}
                sx={{
                    backgroundColor: '#ff6600',
                    color: '#fff',
                    '&:hover': {
                    backgroundColor: '#e65c00'
                    }
                }}
            >
            Cancel
            </Button>


              <Button
                variant="contained"
                fullWidth
                onClick={handlePasswordChange}
                sx={{
                  backgroundColor: '#ff6600',
                  '&:hover': { backgroundColor: '#e65c00' }
                }}
              >
                Change Password
              </Button>
            </Box>
          </>
        )}
      </Box>

      <Snackbar
        open={snack.open}
        autoHideDuration={3000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert
          severity={snack.severity}
          sx={{ width: '100%', fontFamily: 'inherit' }}
          onClose={() => setSnack({ ...snack, open: false })}
        >
          {snack.message}
        </Alert>
      </Snackbar>
    </Box>
  );
}

export default EditProfilePage;
