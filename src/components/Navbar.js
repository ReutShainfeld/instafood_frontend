
// // // src/components/Navbar.js
// // import React from 'react';
// // import { Link, useNavigate } from 'react-router-dom';
// // import { AppBar, Toolbar, Typography, IconButton, Box, Button } from '@mui/material';
// // import HomeIcon from '@mui/icons-material/Home';
// // import StarIcon from '@mui/icons-material/Star';
// // import AddCircleIcon from '@mui/icons-material/AddCircle';
// // import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// // import LoginIcon from '@mui/icons-material/Login';
// // import LogoutIcon from '@mui/icons-material/Logout';
// // import HowToRegIcon from '@mui/icons-material/HowToReg';

// // function Navbar() {
// //     const navigate = useNavigate();
// //     const userName = localStorage.getItem('fullName');

// //     const handleLogout = () => {
// //         localStorage.removeItem('fullName');
// //         localStorage.removeItem('userId');
// //         localStorage.removeItem('token');
// //         navigate('/login');
// //     };

// //     return (
// //         <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #eee' }}>
// //             <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
// //                 {/* לוגו בצד שמאל */}
// //                 <Typography variant="h6" component={Link} to="/" sx={{ textDecoration: 'none', color: '#ff6600', fontWeight: 'bold' }}>
// //                     InstaFood
// //                 </Typography>

// //                 {/* אייקונים בצד ימין */}
// //                 <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
// //                     <IconButton component={Link} to="/" color="inherit" title="Home">
// //                         <HomeIcon />
// //                     </IconButton>
// //                     <IconButton component={Link} to="/for-you" color="inherit" title="For You">
// //                         <StarIcon />
// //                     </IconButton>
// //                     <IconButton component={Link} to="/upload" color="inherit" title="Upload Recipe">
// //                         <AddCircleIcon />
// //                     </IconButton>

// //                     {userName ? (
// //                         <>
// //                             <IconButton component={Link} to="/profile" color="inherit" title={userName}>
// //                                 <AccountCircleIcon />
// //                             </IconButton>
// //                             <IconButton onClick={handleLogout} color="inherit" title="Logout">
// //                                 <LogoutIcon />
// //                             </IconButton>
// //                         </>
// //                     ) : (
// //                         <>
// //                             <IconButton component={Link} to="/login" color="inherit" title="Login">
// //                                 <LoginIcon />
// //                             </IconButton>
// //                             <IconButton component={Link} to="/register" color="inherit" title="Register">
// //                                 <HowToRegIcon />
// //                             </IconButton>
// //                         </>
// //                     )}
// //                 </Box>
// //             </Toolbar>
// //         </AppBar>
// //     );
// // }

// // export default Navbar;

// // src/components/Navbar.js
// import React, { useState, useEffect } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import {
//   AppBar, Toolbar, Typography, IconButton, Box, InputBase, Paper, List, ListItem, ListItemButton, ListItemText
// } from '@mui/material';
// import HomeIcon from '@mui/icons-material/Home';
// import StarIcon from '@mui/icons-material/Star';
// import AddCircleIcon from '@mui/icons-material/AddCircle';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import LoginIcon from '@mui/icons-material/Login';
// import LogoutIcon from '@mui/icons-material/Logout';
// import HowToRegIcon from '@mui/icons-material/HowToReg';
// import SearchIcon from '@mui/icons-material/Search';

// function Navbar() {
//   const navigate = useNavigate();
//   const userName = localStorage.getItem('fullName');
//   const [showSearch, setShowSearch] = useState(false);
//   const [query, setQuery] = useState('');
//   const [results, setResults] = useState([]);

//   const handleLogout = () => {
//     localStorage.removeItem('fullName');
//     localStorage.removeItem('userId');
//     localStorage.removeItem('token');
//     navigate('/login');
//   };

//   useEffect(() => {
//     const fetchResults = async () => {
//       if (!query.trim()) {
//         setResults([]);
//         return;
//       }

//       try {
//         const res = await fetch('http://localhost:5000/api/recipes');
//         const data = await res.json();
//         const filtered = data.filter(recipe =>
//           recipe.title?.toLowerCase().includes(query.toLowerCase()) ||
//           recipe.description?.toLowerCase().includes(query.toLowerCase())
//         );
//         setResults(filtered.slice(0, 5)); // רק 5 תוצאות ראשונות
//       } catch (err) {
//         console.error('Search failed', err);
//       }
//     };

//     fetchResults();
//   }, [query]);

//   const handleKeyPress = (e) => {
//     if (e.key === 'Enter' && query.trim()) {
//       navigate(`/search/query/${query}`);
//       setShowSearch(false);
//       setQuery('');
//       setResults([]);
//     }
//   };

//   const handleResultClick = (id) => {
//     navigate(`/recipe/${id}`);
//     setShowSearch(false);
//     setQuery('');
//     setResults([]);
//   };

//   return (
//     <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #eee' }}>
//       <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
//         <Typography
//           variant="h6"
//           component={Link}
//           to="/"
//           sx={{ textDecoration: 'none', color: '#ff6600', fontWeight: 'bold' }}
//         >
//           InstaFood
//         </Typography>

//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
//           <IconButton onClick={() => setShowSearch(!showSearch)} color="inherit" title="Search">
//             <SearchIcon />
//           </IconButton>

//           {showSearch && (
//             <Box sx={{ position: 'relative' }}>
//               <Paper
//                 sx={{
//                   display: 'flex',
//                   alignItems: 'center',
//                   px: 1,
//                   py: 0.5,
//                   width: 200,
//                   borderRadius: 2,
//                 }}
//               >
//                 <InputBase
//                   placeholder="Search..."
//                   value={query}
//                   onChange={(e) => setQuery(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                   sx={{ width: '100%' }}
//                   autoFocus
//                 />
//               </Paper>
//               {results.length > 0 && (
//                 <Paper
//                   sx={{
//                     position: 'absolute',
//                     top: '100%',
//                     left: 0,
//                     width: '100%',
//                     zIndex: 10,
//                     mt: 1
//                   }}
//                 >
//                   <List>
//                     {results.map((recipe) => (
//                       <ListItem disablePadding key={recipe._id}>
//                         <ListItemButton onClick={() => handleResultClick(recipe._id)}>
//                           <ListItemText primary={recipe.title} />
//                         </ListItemButton>
//                       </ListItem>
//                     ))}
//                   </List>
//                 </Paper>
//               )}
//             </Box>
//           )}

//           <IconButton component={Link} to="/" color="inherit" title="Home">
//             <HomeIcon />
//           </IconButton>
//           <IconButton component={Link} to="/for-you" color="inherit" title="For You">
//             <StarIcon />
//           </IconButton>
//           <IconButton component={Link} to="/upload" color="inherit" title="Upload Recipe">
//             <AddCircleIcon />
//           </IconButton>

//           {userName ? (
//             <>
//               <IconButton component={Link} to="/profile" color="inherit" title={userName}>
//                 <AccountCircleIcon />
//               </IconButton>
//               <IconButton onClick={handleLogout} color="inherit" title="Logout">
//                 <LogoutIcon />
//               </IconButton>
//             </>
//           ) : (
//             <>
//               <IconButton component={Link} to="/login" color="inherit" title="Login">
//                 <LoginIcon />
//               </IconButton>
//               <IconButton component={Link} to="/register" color="inherit" title="Register">
//                 <HowToRegIcon />
//               </IconButton>
//             </>
//           )}
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

// src/components/Navbar.js
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  AppBar, Toolbar, Typography, IconButton, Box
} from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import StarIcon from '@mui/icons-material/Star';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import SearchIcon from '@mui/icons-material/Search';

function Navbar() {
  const navigate = useNavigate();
  const userName = localStorage.getItem('fullName');

  const handleLogout = () => {
    localStorage.removeItem('fullName');
    localStorage.removeItem('userId');
    localStorage.removeItem('token');
    navigate('/login');
  };

  const handleSearchClick = () => {
    navigate('/search'); // 🔍 ניתוב לעמוד חיפוש ייעודי
  };

  return (
    <AppBar position="static" color="default" sx={{ boxShadow: 'none', borderBottom: '1px solid #eee' }}>
      <Toolbar sx={{ justifyContent: 'space-between', px: 2 }}>
        {/* לוגו בצד שמאל */}
        <Typography
          variant="h6"
          component={Link}
          to="/"
          sx={{ textDecoration: 'none', color: '#ff6600', fontWeight: 'bold' }}
        >
          InstaFood
        </Typography>

        {/* אייקונים בצד ימין */}
        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
          <IconButton onClick={handleSearchClick} color="inherit" title="Search">
            <SearchIcon />
          </IconButton>
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
