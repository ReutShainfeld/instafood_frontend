

// // // // import React, { useState } from 'react';
// // // // import { useNavigate } from 'react-router-dom';

// // // // function LoginPage() {
// // // //     const navigate = useNavigate();
// // // //     const [formData, setFormData] = useState({ email: '', password: '' });

// // // //     const handleChange = (e) => {
// // // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // // //     };

// // // //     const handleSubmit = async (e) => {
// // // //         e.preventDefault();
// // // //         try {
// // // //             console.log(`🔍 Sending login request for: ${formData.email}`);
            
// // // //             const response = await fetch('http://localhost:5000/api/auth/login', {
// // // //                 method: 'POST',
// // // //                 headers: { 'Content-Type': 'application/json' },
// // // //                 body: JSON.stringify(formData),
// // // //             });

// // // //             const data = await response.json();

// // // //             if (response.ok) {
// // // //                 console.log("✅ Login successful!", data);

// // // //                 localStorage.setItem('token', data.token);
// // // //                 localStorage.setItem('userId', data.userId);
// // // //                 localStorage.setItem('fullName', data.fullName);
                
// // // //                 alert('✅ Login successful!');
// // // //                 navigate('/profile');
// // // //             } else {
// // // //                 console.error("❌ Login failed:", data.message);
// // // //                 alert(`❌ Login failed: ${data.message}`);
// // // //             }
// // // //         } catch (error) {
// // // //             console.error('❌ Error:', error);
// // // //             alert('❌ Failed to connect to server.');
// // // //         }
// // // //     };

// // // //     return (
// // // //         <div style={styles.container}>
// // // //             <h2>
// // // //                 <span role="img" aria-label="login">🔑</span> Login
// // // //             </h2>
// // // //             <form onSubmit={handleSubmit} style={styles.form}>
// // // //                 <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
// // // //                 <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required />
// // // //                 <button type="submit">Login</button>
// // // //             </form>
// // // //         </div>
// // // //     );
// // // // }

// // // // const styles = {
// // // //     container: { 
// // // //         textAlign: 'center', 
// // // //         padding: '50px', 
// // // //         display: 'flex', 
// // // //         flexDirection: 'column', 
// // // //         alignItems: 'center',
// // // //         justifyContent: 'center',
// // // //         height: '100vh'
// // // //     },
// // // //     form: { 
// // // //         display: 'flex', 
// // // //         flexDirection: 'column', 
// // // //         maxWidth: '350px', 
// // // //         width: '100%',
// // // //         gap: '12px', 
// // // //         background: '#fff', 
// // // //         padding: '25px', 
// // // //         borderRadius: '12px', 
// // // //         boxShadow: '0px 6px 12px rgba(0, 0, 0, 0.15)' 
// // // //     },
// // // //     input: { 
// // // //         padding: '12px', 
// // // //         fontSize: '16px', 
// // // //         borderRadius: '5px', 
// // // //         border: '1px solid #ccc' 
// // // //     },
// // // //     button: { 
// // // //         padding: '12px', 
// // // //         fontSize: '18px', 
// // // //         background: '#ff6f61', 
// // // //         color: 'white', 
// // // //         border: 'none', 
// // // //         borderRadius: '5px', 
// // // //         cursor: 'pointer' 
// // // //     }
// // // // };

// // // // export default LoginPage;

// // // import React, { useState } from 'react';
// // // import { useNavigate, Link } from 'react-router-dom';
// // // import { TextField, Button, Box, Typography, Paper } from '@mui/material';

// // // function LoginPage() {
// // //     const navigate = useNavigate();
// // //     const [formData, setFormData] = useState({ email: '', password: '' });

// // //     const handleChange = (e) => {
// // //         setFormData({ ...formData, [e.target.name]: e.target.value });
// // //     };

// // //     const handleSubmit = async (e) => {
// // //         e.preventDefault();
// // //         try {
// // //             const response = await fetch('http://localhost:5000/api/auth/login', {
// // //                 method: 'POST',
// // //                 headers: { 'Content-Type': 'application/json' },
// // //                 body: JSON.stringify(formData),
// // //             });
// // //             const data = await response.json();

// // //             if (response.ok) {
// // //                 localStorage.setItem('token', data.token);
// // //                 localStorage.setItem('userId', data.userId);
// // //                 localStorage.setItem('fullName', data.fullName);
// // //                 alert('✅ Login successful!');
// // //                 navigate('/profile');
// // //             } else {
// // //                 alert(`❌ Login failed: ${data.message}`);
// // //             }
// // //         } catch (error) {
// // //             alert('❌ Failed to connect to server.');
// // //         }
// // //     };

// // //     return (
// // //         <Box sx={styles.wrapper}>
// // //             <Paper elevation={3} sx={styles.formBox}>
// // //                 <Typography variant="h5" sx={styles.title}>🔑 Login</Typography>
// // //                 <form onSubmit={handleSubmit}>
// // //                     <TextField
// // //                         fullWidth
// // //                         name="email"
// // //                         label="Email"
// // //                         value={formData.email}
// // //                         onChange={handleChange}
// // //                         margin="normal"
// // //                         required
// // //                     />
// // //                     <TextField
// // //                         fullWidth
// // //                         type="password"
// // //                         name="password"
// // //                         label="Password"
// // //                         value={formData.password}
// // //                         onChange={handleChange}
// // //                         margin="normal"
// // //                         required
// // //                     />
// // //                     <Button type="submit" fullWidth variant="contained" sx={styles.button}>
// // //                         Login
// // //                     </Button>
// // //                 </form>
// // //                 <Typography sx={styles.linkText}>
// // //                     Don't have an account? <Link to="/register" style={styles.link}>Register</Link>
// // //                 </Typography>
// // //             </Paper>
// // //         </Box>
// // //     );
// // // }

// // // const styles = {
// // //     wrapper: {
// // //         display: 'flex',
// // //         justifyContent: 'center',
// // //         alignItems: 'center',
// // //         height: '100vh',
// // //         background: '#fff9f5'
// // //     },
// // //     formBox: {
// // //         padding: '40px',
// // //         width: '100%',
// // //         maxWidth: '400px',
// // //         borderRadius: '16px',
// // //     },
// // //     title: {
// // //         textAlign: 'center',
// // //         marginBottom: 2,
// // //         fontWeight: 'bold',
// // //         color: '#d9773d'
// // //     },
// // //     button: {
// // //         backgroundColor: '#d9773d',
// // //         color: 'white',
// // //         marginTop: 2,
// // //         '&:hover': { backgroundColor: '#c0652f' }
// // //     },
// // //     linkText: {
// // //         marginTop: '16px',
// // //         textAlign: 'center'
// // //     },
// // //     link: {
// // //         color: '#d9773d',
// // //         textDecoration: 'none',
// // //         fontWeight: 'bold'
// // //     }
// // // };

// // // export default LoginPage;

// // // src/pages/LoginPage.js
// // import React, { useState } from 'react';
// // import { useNavigate, Link } from 'react-router-dom';
// // import { Box, Typography, TextField, Button, Paper } from '@mui/material';
// // import '../styles/authPages.css';

// // function LoginPage() {
// //     const navigate = useNavigate();
// //     const [formData, setFormData] = useState({ email: '', password: '' });

// //     const handleChange = (e) => {
// //         setFormData({ ...formData, [e.target.name]: e.target.value });
// //     };

// //     const handleSubmit = async (e) => {
// //         e.preventDefault();
// //         try {
// //             const response = await fetch('http://localhost:5000/api/auth/login', {
// //                 method: 'POST',
// //                 headers: { 'Content-Type': 'application/json' },
// //                 body: JSON.stringify(formData),
// //             });

// //             const data = await response.json();
// //             if (response.ok) {
// //                 localStorage.setItem('token', data.token);
// //                 localStorage.setItem('userId', data.userId);
// //                 localStorage.setItem('fullName', data.fullName);
// //                 alert('✅ Login successful!');
// //                 navigate('/profile');
// //             } else {
// //                 alert(`❌ Login failed: ${data.message}`);
// //             }
// //         } catch (error) {
// //             alert('❌ Failed to connect to server.');
// //         }
// //     };

// //     return (
// //         <Box sx={styles.container}>
// //             <img src="/instaFood_logo.png" alt="InstaFood Logo" style={styles.logo} />
// //             <Paper elevation={3} sx={styles.card}>
// //                 <Typography variant="h6" sx={styles.title}>InstaFood Login</Typography>
// //                 <form onSubmit={handleSubmit} style={styles.form}>
// //                     <TextField
// //                         label="Email"
// //                         name="email"
// //                         type="email"
// //                         value={formData.email}
// //                         onChange={handleChange}
// //                         required
// //                         fullWidth
// //                         sx={styles.input}
// //                     />
// //                     <TextField
// //                         label="Password"
// //                         name="password"
// //                         type="password"
// //                         value={formData.password}
// //                         onChange={handleChange}
// //                         required
// //                         fullWidth
// //                         sx={styles.input}
// //                     />
// //                     <Button type="submit" variant="contained" fullWidth sx={styles.button}>
// //                         Login
// //                     </Button>
// //                 </form>
// //                 <Typography variant="body2" sx={styles.linkText}>
// //                     Don't have an account? <Link to="/register">Register here</Link>
// //                 </Typography>
// //             </Paper>
// //         </Box>
// //     );
// // }

// // const styles = {
// //     container: {
// //         display: 'flex',
// //         flexDirection: 'column',
// //         alignItems: 'center',
// //         padding: '40px',
// //         backgroundColor: '#fafafa',
// //         minHeight: '100vh',
// //     },
// //     logo: {
// //         height: 100,
// //         marginBottom: 16, 
// //         width: '80px',
// //         height: '80px',
// //         objectFit: 'cover',
// //         borderRadius: '16px', // או אפילו '50%' כדי שיהיה עיגול מושלם
// //         marginBottom: '10px',
// //         boxShadow: '0 2px 8px rgba(0, 0, 0, 0.15)',
// //         border: '2px solid #ff6600',
// //     },
// //     card: {
// //         width: '100%',
// //         maxWidth: 400,
// //         padding: 4,
// //         borderRadius: 4,
// //         textAlign: 'center',
// //     },
// //     title: {
// //         fontWeight: 'bold',
// //         color: '#ff6600',
// //         mb: 2,
// //     },
// //     form: {
// //         display: 'flex',
// //         flexDirection: 'column',
// //         gap: 2,
// //     },
// //     input: {
// //         '& .MuiOutlinedInput-root': {
// //             borderRadius: 3,
// //         }
// //     },
// //     button: {
// //         backgroundColor: '#ff6600',
// //         color: '#fff',
// //         fontWeight: 'bold',
// //         '&:hover': {
// //             backgroundColor: '#e65c00',
// //         },
// //     },
// //     linkText: {
// //         marginTop: 2,
// //     }
// // };

// // export default LoginPage;

// import React, { useState } from 'react';
// import { useNavigate, Link } from 'react-router-dom';
// import '../styles/authPages.css';

// function LoginPage() {
//   const navigate = useNavigate();
//   const [formData, setFormData] = useState({ email: '', password: '' });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
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
//         alert('✅ Login successful!');
//         navigate('/profile');
//       } else {
//         alert(`❌ Login failed: ${data.message}`);
//       }
//     } catch (error) {
//       alert('❌ Failed to connect to server.');
//     }
//   };

//   return (
//     <div className="auth-page-container">
//       <img src="/instaFood_logo.png" alt="InstaFood Logo" className="auth-logo" />
//       <h2 className="auth-title">InstaFood Login</h2>

//       <form onSubmit={handleSubmit} className="auth-form-box">
//         <input
//           type="email"
//           name="email"
//           placeholder="Email *"
//           value={formData.email}
//           onChange={handleChange}
//           required
//         />
//         <input
//           type="password"
//           name="password"
//           placeholder="Password *"
//           value={formData.password}
//           onChange={handleChange}
//           required
//         />
//         <button type="submit">Login</button>
//       </form>

//       <p className="auth-link">
//         Don't have an account?{' '}
//         <Link to="/register" style={{ color: '#ff6600', textDecoration: 'underline' }}>
//           Register here
//         </Link>
//       </p>
//     </div>
//   );
// }

// export default LoginPage;


import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import '../styles/authPages.css';

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        alert('✅ Login successful!');
        navigate('/profile');
      } else {
        alert(`❌ Login failed: ${data.message}`);
      }
    } catch (error) {
      alert('❌ Failed to connect to server.');
    }
  };

  return (
    <div className="auth-page-container">
      <img src="/instaFood_logo.png" alt="InstaFood Logo" className="auth-logo" />
      <h2 className="auth-title">InstaFood Login</h2>

      <form onSubmit={handleSubmit} className="auth-form-box">
        <input
          type="email"
          name="email"
          placeholder="Email *"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password *"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <button type="submit">Login</button>
      </form>

      <p className="auth-link">
        Don't have an account?{' '}
        <Link to="/register" style={{ color: '#ff6600', textDecoration: 'underline' }}>
          Register here
        </Link>
      </p>
    </div>
  );
}

export default LoginPage;
