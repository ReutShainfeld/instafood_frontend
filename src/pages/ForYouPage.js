// import React, { useEffect, useState } from "react";
// import RecipeCard from "../components/RecipeCard";

// function ForYouPage() {
//     const [recipes, setRecipes] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const token = localStorage.getItem('token');



//     useEffect(() => {
//         if (!token) {
//             setError("User not logged in");
//             setLoading(false);
//             return;
//         }

//         fetch("http://localhost:5000/api/recipes/for-you", {
//             headers: { Authorization: `Bearer ${token}` }
//         })
//             .then((res) => res.json())
//             .then((data) => {
//                 setRecipes(data);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, [token]);

//     return (
//         <div>
//             <h1>✨ Recipes Just For You</h1>

//             {loading && <p>Loading personalized recommendations... ⏳</p>}
//             {error && <p style={{ color: "red" }}>❌ {error}</p>}

//             {/* <div className="recipe-list">
//                 {recipes.length > 0 ? (
//                     recipes.map((recipe) => (
//                         <RecipeCard key={recipe._id} recipe={recipe} uploader={recipe.user?.username || "Anonymous"} />
//                     ))
//                 ) : (
//                     !loading && <p>No recommendations yet. 🌟</p>
//                 )}
//             </div> */}
//             <div style={{
//   display: "grid",
//   gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
//   gap: "20px",
//   padding: "20px"
// }}>
//   {recipes.length > 0 ? (
//     recipes.map((recipe) => (
//       <RecipeCard key={recipe._id} recipe={recipe} uploader={recipe.user?.username || "Anonymous"} />
//     ))
//   ) : (
//     !loading && <p>No recommendations yet. Start searching to see suggestions! 🌟</p>
//   )}
// </div>

//         </div>
//     );
// }

// export default ForYouPage;
import React, { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

function ForYouPage() {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const token = localStorage.getItem('token');

  useEffect(() => {
    if (!token) {
      setError("User not logged in");
      setLoading(false);
      return;
    }

    fetch("http://localhost:5000/api/recipes/for-you", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((res) => res.json())
      .then((data) => {
        setRecipes(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, [token]);

  return (
    <div>
      <h1>✨ Recipes Just For You</h1>

      {loading && <p>Loading personalized recommendations... ⏳</p>}
      {error && <p style={{ color: "red" }}>❌ {error}</p>}

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
        gap: "20px",
        padding: "20px"
      }}>
        {recipes.length > 0 ? (
          recipes.map((recipe) => (
            <RecipeCard
              key={recipe._id}
              recipe={recipe}
              imageOnly={true} // ✅ only show the image
            />
          ))
        ) : (
          !loading && <p>No recommendations yet. Start searching to see suggestions! 🌟</p>
        )}
      </div>
    </div>
  );
}

export default ForYouPage;

