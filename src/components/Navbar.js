// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';

// // function Navbar() {
// //     const navigate = useNavigate();
// //     const userName = localStorage.getItem('fullName');

// //     const handleLogout = () => {
// //         localStorage.removeItem('fullName');
// //         localStorage.removeItem('userId');
// //         navigate('/login'); // 🔹 ניווט במקום window.location.href
// //     };

// //     return (
// //         <nav style={styles.navbar}>
// //             <Link to="/" style={styles.link}>
// //                 <span role="img" aria-label="home">🏠</span> Home
// //             </Link>
 

// //             {userName ? (
// //                 <>
// //                     <Link to="/profile" style={styles.link}>
// //                         <span role="img" aria-label="profile">👤</span> {userName}
// //                     </Link>
// //                     <button onClick={handleLogout} style={styles.logoutButton}>
// //                         <span role="img" aria-label="logout">🚪</span> Logout
// //                     </button>
// //                 </>
// //             ) : (
// //                 <>
// //                     <Link to="/login" style={styles.link}>
// //                         <span role="img" aria-label="login">🔑</span> Login
// //                     </Link>
// //                     <Link to="/register" style={styles.link}>
// //                         <span role="img" aria-label="register">📝</span> Register
// //                     </Link>
// //                 </>
// //             )}
// //         </nav>
// //     );
// // }

// // const styles = {
// //     navbar: {
// //         display: 'flex',
// //         justifyContent: 'center',
// //         alignItems: 'center',
// //         gap: '20px',
// //         background: 'linear-gradient(to right,rgb(149, 13, 67), #d9773d)',
// //         padding: '15px 30px',
// //         boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
// //     },
// //     link: {
// //         color: 'white',
// //         textDecoration: 'none',
// //         fontSize: '18px',
// //         fontWeight: 'bold',
// //         padding: '10px 15px',
// //         borderRadius: '5px',
// //         transition: 'all 0.3s ease-in-out',
// //     },
// //     logoutButton: {
// //         background: '#ff4d4d',
// //         color: 'white',
// //         border: 'none',
// //         padding: '10px 15px',
// //         fontSize: '16px',
// //         fontWeight: 'bold',
// //         borderRadius: '5px',
// //         cursor: 'pointer',
// //         transition: 'all 0.3s ease-in-out',
// //     },
// // };

// // export default Navbar;

// import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';

// function Navbar() {
//     const navigate = useNavigate();
//     const userName = localStorage.getItem('fullName');

//     const handleLogout = () => {
//         localStorage.removeItem('fullName');
//         localStorage.removeItem('userId');
//         localStorage.removeItem('token'); // ✅ הסרת הטוקן מהאחסון
//         navigate('/login'); // ✅ ניווט בצורה דינמית
//     };

//     return (
//         <nav style={styles.navbar}>
//             <Link to="/" style={styles.link}>
//                 🏠 Home
//             </Link>
//             <Link to="/for-you" style={styles.link}>
//                 🌟 For You
//             </Link>
//             <Link to="/upload" style={styles.link}>
//                 📤 Upload Recipe
//             </Link>

//             {userName ? (
//                 <>
//                     <Link to="/profile" style={styles.link}>
//                         👤 {userName}
//                     </Link>
//                     <button onClick={handleLogout} style={styles.logoutButton}>
//                         🚪 Logout
//                     </button>
//                 </>
//             ) : (
//                 <>
//                     <Link to="/login" style={styles.link}>
//                         🔑 Login
//                     </Link>
//                     <Link to="/register" style={styles.link}>
//                         📝 Register
//                     </Link>
//                 </>
//             )}
//         </nav>
//     );
// }

// const styles = {
//     navbar: {
//         display: "flex",
//         justifyContent: "space-around",
//         alignItems: "center",
//         padding: "10px",
//         backgroundColor: "#ff8c00",
//         color: "white",
//         fontSize: "18px",
//     },
//     link: {
//         textDecoration: "none",
//         color: "white",
//         fontWeight: "bold",
//         padding: "8px",
//     },
//     logoutButton: {
//         backgroundColor: "transparent",
//         border: "none",
//         color: "white",
//         fontWeight: "bold",
//         cursor: "pointer",
//         padding: "8px",
//     }
// };

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';

function Navbar() {
    const navigate = useNavigate();
    const userName = localStorage.getItem('fullName');

    const handleLogout = () => {
        localStorage.removeItem('fullName');
        localStorage.removeItem('userId');
        localStorage.removeItem('token');
        navigate('/login');
    };

    return (
        <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #eee' }}>
            <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
                {/* לוגו בצד שמאל */}
                <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: '#ff6600', fontWeight: 'bold' }}>
                    InstaFood
                </Typography>

                {/* אייקונים בצד ימין */}
                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                    <IconButton component={Link} to="/" color="inherit" title="Home">
                        <HomeIcon />
                    </IconButton>
                    <IconButton component={Link} to="/for-you" color="inherit" title="For You">
                        <StarIcon />
                    </IconButton>
                    <IconButton component={Link} to="/upload" color="inherit" title="Upload Recipe">
                        <AddCircleIcon />
                    </IconButton>

                    {userName ? (
                        <>
                            <IconButton component={Link} to="/profile" color="inherit" title={userName}>
                                <AccountCircleIcon />
                            </IconButton>
                            <IconButton onClick={handleLogout} color="inherit" title="Logout">
                                <LogoutIcon />
                            </IconButton>
                        </>
                    ) : (
                        <>
                            <IconButton component={Link} to="/login" color="inherit" title="Login">
                                <LoginIcon />
                            </IconButton>
                            <IconButton component={Link} to="/register" color="inherit" title="Register">
                                <HowToRegIcon />
                            </IconButton>
                        </>
                    )}
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Navbar;
