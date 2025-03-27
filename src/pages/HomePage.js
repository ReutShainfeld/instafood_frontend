// // // // // // import React, { useEffect, useState } from 'react';
// // // // // // import RecipeCard from '../components/RecipeCard';

// // // // // // function HomePage() {
// // // // // //     const [recipes, setRecipes] = useState([]);
// // // // // //     const [loading, setLoading] = useState(true); // ✅ ספינר בזמן טעינה
// // // // // //     const [error, setError] = useState(null); // ✅ טיפול בשגיאות

// // // // // //     useEffect(() => {
// // // // // //         fetch('http://localhost:5000/api/recipes')
// // // // // //             .then(res => {
// // // // // //                 if (!res.ok) {
// // // // // //                     throw new Error('Failed to fetch recipes');
// // // // // //                 }
// // // // // //                 return res.json();
// // // // // //             })
// // // // // //             .then(data => {
// // // // // //                 setRecipes(data);
// // // // // //                 setLoading(false);
// // // // // //             })
// // // // // //             .catch(err => {
// // // // // //                 setError(err.message);
// // // // // //                 setLoading(false);
// // // // // //             });
// // // // // //     }, []);

// // // // // //     return (
// // // // // //         <div>
// // // // // //             <h1>
// // // // // //                 <span role="img" aria-label="book">📖</span> Sharing Recipes
// // // // // //             </h1>

// // // // // //             {loading && (
// // // // // //                 <p>Loading recipes... <span role="img" aria-label="hourglass">⏳</span></p>
// // // // // //             )}
// // // // // //             {error && (
// // // // // //                 <p style={{ color: 'red' }}>
// // // // // //                     <span role="img" aria-label="error">❌</span> {error}
// // // // // //                 </p>
// // // // // //             )}

// // // // // //             <div className="recipe-list">
// // // // // //                 {recipes.length > 0 ? (
// // // // // //                     recipes.map(recipe => (
// // // // // //                         <RecipeCard 
// // // // // //                             key={recipe._id} 
// // // // // //                             recipe={recipe} 
// // // // // //                             uploader={recipe.user?.username || "Anonymous"} // 🔹 Show uploader's name
// // // // // //                         />
// // // // // //                     ))
// // // // // //                 ) : (
// // // // // //                     !loading && <p>No recipes found. Be the first to share one! 🍽️</p>
// // // // // //                 )}
// // // // // //             </div>
// // // // // //         </div>
// // // // // //     );
// // // // // // }

// // // // // // export default HomePage;

// // // // // import React, { useEffect, useState } from 'react';
// // // // // import RecipeCard from '../components/RecipeCard';

// // // // // function HomePage() {
// // // // //     const [recipes, setRecipes] = useState([]);
// // // // //     const [loading, setLoading] = useState(true);
// // // // //     const [error, setError] = useState(null);

// // // // //     useEffect(() => {
// // // // //         fetch('http://localhost:5000/api/recipes')
// // // // //             .then(res => res.json())
// // // // //             .then(data => {
// // // // //                 setRecipes(data);
// // // // //                 setLoading(false);
// // // // //             })
// // // // //             .catch(err => {
// // // // //                 setError(err.message);
// // // // //                 setLoading(false);
// // // // //             });
// // // // //     }, []);

// // // // //     return (
// // // // //         <div>
// // // // //             <h1>📖 Sharing Recipes</h1>

// // // // //             {loading && <p>Loading recipes... ⏳</p>}
// // // // //             {error && <p style={{ color: 'red' }}><span role="img" aria-label="error">❌</span> </p>}

// // // // //             <div className="recipe-list">
// // // // //                 {recipes.length > 0 ? (
// // // // //                     recipes.map(recipe => (
// // // // //                         <RecipeCard key={recipe._id} recipe={recipe} uploader={recipe.user?.username || "Anonymous"} />
// // // // //                     ))
// // // // //                 ) : (
// // // // //                     !loading && <p>No recipes found. Be the first to share one! 🍽️</p>
// // // // //                 )}
// // // // //             </div>
// // // // //         </div>
// // // // //     );
// // // // // }

// // // // // export default HomePage;

// // // // import React, { useEffect, useState } from 'react';
// // // // import RecipeCard from '../components/RecipeCard';

// // // // function HomePage() {
// // // //     const [recipes, setRecipes] = useState([]);
// // // //     const [loading, setLoading] = useState(true);
// // // //     const [error, setError] = useState(null);

// // // //     useEffect(() => {
// // // //         fetch('http://localhost:5000/api/recipes')
// // // //             .then(res => {
// // // //                 if (!res.ok) {
// // // //                     throw new Error('Failed to fetch recipes');
// // // //                 }
// // // //                 return res.json();
// // // //             })
// // // //             .then(data => {
// // // //                 setRecipes(data);
// // // //                 setLoading(false);
// // // //             })
// // // //             .catch(err => {
// // // //                 setError(err.message);
// // // //                 setLoading(false);
// // // //             });
// // // //     }, []);

// // // //     return (
// // // //         <div style={{ padding: '20px' }}>
// // // //             <h1>📖 Sharing Recipes</h1>

// // // //             {loading && <p>Loading recipes... ⏳</p>}
// // // //             {error && <p style={{ color: 'red' }}>❌ {error}</p>}

// // // //             <div className="recipe-list">
// // // //                 {recipes.length > 0 ? (
// // // //                     recipes.map(recipe => (
// // // //                         <RecipeCard
// // // //                             key={recipe._id}
// // // //                             recipe={recipe}
// // // //                             uploader={recipe.user?.username || "Anonymous"}
// // // //                         />
// // // //                     ))
// // // //                 ) : (
// // // //                     !loading && <p>No recipes found. Be the first to share one! 🍽️</p>
// // // //                 )}
// // // //             </div>
// // // //         </div>
// // // //     );
// // // // }

// // // // export default HomePage;

// // // import React, { useEffect, useState } from 'react';
// // // import RecipeCard from '../components/RecipeCard';
// // // import { Container, Typography, CircularProgress, Box } from '@mui/material';

// // // function HomePage() {
// // //     const [recipes, setRecipes] = useState([]);
// // //     const [loading, setLoading] = useState(true);
// // //     const [error, setError] = useState(null);

// // //     useEffect(() => {
// // //         fetch('http://localhost:5000/api/recipes')
// // //             .then(res => res.json())
// // //             .then(data => {
// // //                 setRecipes(data);
// // //                 setLoading(false);
// // //             })
// // //             .catch(err => {
// // //                 setError(err.message);
// // //                 setLoading(false);
// // //             });
// // //     }, []);

// // //     return (
// // //         <Container maxWidth="sm" sx={{ mt: 4 }}>
// // //             <Typography variant="h4" align="center" gutterBottom fontWeight="bold">
// // //                 🍽️ Recipe Feed
// // //             </Typography>

// // //             {loading && (
// // //                 <Box display="flex" justifyContent="center" mt={4}>
// // //                     <CircularProgress />
// // //                 </Box>
// // //             )}
// // //             {error && (
// // //                 <Typography color="error" align="center">
// // //                     ❌ {error}
// // //                 </Typography>
// // //             )}

// // //             <Box display="flex" flexDirection="column" gap={4}>
// // //                 {recipes.length > 0 ? (
// // //                     recipes.map(recipe => (
// // //                         <RecipeCard
// // //                             key={recipe._id}
// // //                             recipe={recipe}
// // //                             uploader={recipe.user?.username || "Anonymous"}
// // //                         />
// // //                     ))
// // //                 ) : (
// // //                     !loading && (
// // //                         <Typography align="center">
// // //                             No recipes found. Be the first to share one! 🍲
// // //                         </Typography>
// // //                     )
// // //                 )}
// // //             </Box>
// // //         </Container>
// // //     );
// // // }

// // // export default HomePage;

// // // src/pages/HomePage.js
// // import React, { useEffect, useState } from 'react';
// // import RecipeCard from '../components/RecipeCard';
// // import { Container, CircularProgress, Typography, Box } from '@mui/material';

// // function HomePage() {
// //     const [recipes, setRecipes] = useState([]);
// //     const [loading, setLoading] = useState(true);
// //     const [error, setError] = useState(null);

// //     useEffect(() => {
// //         fetch('http://localhost:5000/api/recipes')
// //             .then(res => res.json())
// //             .then(data => {
// //                 setRecipes(data);
// //                 setLoading(false);
// //             })
// //             .catch(err => {
// //                 setError(err.message);
// //                 setLoading(false);
// //             });
// //     }, []);

// //     return (
// //         <Container maxWidth="md" sx={{ mt: 2, mb: 4 }}>
// //             {loading && (
// //                 <Box display="flex" justifyContent="center" mt={6}>
// //                     <CircularProgress />
// //                 </Box>
// //             )}

// //             {error && (
// //                 <Typography color="error" align="center" mt={4}>
// //                     ❌ {error}
// //                 </Typography>
// //             )}

// //             <Box display="flex" flexDirection="column" gap={6}>
// //                 {recipes.length > 0 ? (
// //                     recipes.map(recipe => (
// //                         <RecipeCard
// //                             key={recipe._id}
// //                             recipe={recipe}
// //                             uploader={recipe.user?.username || "Anonymous"}
// //                         />
// //                     ))
// //                 ) : (
// //                     !loading && (
// //                         <Typography align="center" mt={4}>
// //                             No recipes found. Be the first to share one! 🍽️
// //                         </Typography>
// //                     )
// //                 )}
// //             </Box>
// //         </Container>
// //     );
// // }

// // export default HomePage;

// import React, { useEffect, useState } from 'react';
// import RecipeCard from '../components/RecipeCard';
// import {
//   Container,
//   CircularProgress,
//   Typography,
//   Box,
//   Grid,
// } from '@mui/material';

// function HomePage() {
//   const [recipes, setRecipes] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:5000/api/recipes')
//       .then((res) => res.json())
//       .then((data) => {
//         setRecipes(data);
//         setLoading(false);
//       })
//       .catch((err) => {
//         setError(err.message);
//         setLoading(false);
//       });
//   }, []);

//   return (
//     <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
//       {loading && (
//         <Box display="flex" justifyContent="center" mt={6}>
//           <CircularProgress />
//         </Box>
//       )}

//       {error && (
//         <Typography color="error" align="center" mt={4}>
//           ❌ {error}
//         </Typography>
//       )}

//       <Grid container direction="column" spacing={3}>
//         {recipes.length > 0 ? (
//           recipes.map((recipe) => (
//             <Grid item key={recipe._id}>
//               <RecipeCard
//                 recipe={recipe}
//                 uploader={recipe.user?.username || 'Anonymous'}
//               />
//             </Grid>
//           ))
//         ) : (
//           !loading && (
//             <Typography align="center" mt={4}>
//               No recipes found. Be the first to share one! 🍽️
//             </Typography>
//           )
//         )}
//       </Grid>
//     </Container>
//   );
// }

// export default HomePage;


import React, { useEffect, useState } from 'react';
import RecipeCard from '../components/RecipeCard';
import {
  Container,
  CircularProgress,
  Typography,
  Box,
  Grid,
} from '@mui/material';


function HomePage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/api/recipes')
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
      {loading && (
        <Box display="flex" justifyContent="center" mt={6}>
          <CircularProgress />
        </Box>
      )}

      {error && (
        <Typography color="error" align="center" mt={4}>
          ❌ {error}
        </Typography>
      )}

      <Grid container direction="column" spacing={3}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <Grid item key={recipe._id}>
              <RecipeCard
                recipe={recipe}
                uploader={recipe.user?.username || 'Anonymous'}
              />
            </Grid>
          ))
        ) : (
          !loading && (
            <Typography align="center" mt={4}>
              No recipes found. Be the first to share one! 🍽️
            </Typography>
          )
        )}
      </Grid>
    </Container>
  );
}

export default HomePage;
