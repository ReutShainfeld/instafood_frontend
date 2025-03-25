

// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import {
//   TextField, Button, IconButton, InputLabel, MenuItem,
//   FormControl, Select, Autocomplete
// } from "@mui/material";
// import { AddCircle, RemoveCircle, CloudUpload } from "@mui/icons-material";
// import '../styles/authPages.css';

// function UploadRecipePage() {
//   const navigate = useNavigate();
//   const [isUploading, setIsUploading] = useState(false);
//   const [recipe, setRecipe] = useState({
//     title: "",
//     description: "",
//     cookingTime: "",
//     servings: "",
//     difficulty: "",
//     category: "",
//     ingredients: [""],
//     instructions: [""],
//     tags: [] // ✅ תגיות
//   });
//   const [image, setImage] = useState(null);
//   const [previewUrl, setPreviewUrl] = useState(null);

//   const tagOptions = [
//     "בשרי", "חלבי", "פרווה", "ילדים", "טבעוני",
//     "צמחוני", "מתוק", "תוספת", "עיקרית", "חגים", "שבת"
//   ];

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       setPreviewUrl(URL.createObjectURL(file));
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setRecipe((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleListChange = (index, value, field) => {
//     const updated = [...recipe[field]];
//     updated[index] = value;
//     setRecipe({ ...recipe, [field]: updated });
//   };

//   const addField = (field) => {
//     setRecipe({ ...recipe, [field]: [...recipe[field], ""] });
//   };

//   const removeField = (index, field) => {
//     const updated = recipe[field].filter((_, i) => i !== index);
//     setRecipe({ ...recipe, [field]: updated });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     const token = localStorage.getItem("token");
//     if (!token) return alert("Login required.");
//     if (!image) return alert("Please upload an image.");

//     try {
//       setIsUploading(true);
//       const formData = new FormData();
//       formData.append("title", recipe.title);
//       formData.append("description", recipe.description);
//       formData.append("cooking_time", recipe.cookingTime);
//       formData.append("servings", recipe.servings);
//       formData.append("difficulty", recipe.difficulty);
//       formData.append("category", recipe.category);
//       formData.append("tags", JSON.stringify(recipe.tags));
//       formData.append("image", image);
//       formData.append("ingredients", JSON.stringify(recipe.ingredients));
//       formData.append("instructions", JSON.stringify(recipe.instructions));
      

//       const res = await fetch("http://localhost:5000/api/recipes", {
//         method: "POST",
//         headers: { Authorization: `Bearer ${token}` },
//         body: formData,
//       });

//       if (!res.ok) {
//         const errorData = await res.json();
//         console.error("Upload failed:", errorData);
//         alert("Error uploading recipe.");
//         return;
//       }

//       alert("Recipe uploaded!");
//       navigate("/");
//     } catch (err) {
//       console.error("Upload error:", err);
//       alert("Upload failed.");
//     } finally {
//       setIsUploading(false);
//     }
//   };

//   return (
//     <div style={styles.container}>
//       <img src="/instaFood_logo.png" alt="InstaFood Logo" style={styles.logo} />
//       <h2 style={styles.title}>Upload New Recipe</h2>
//       <form onSubmit={handleSubmit} style={styles.form}>
//         <div style={styles.imageUpload}>
//           <input
//             type="file"
//             accept="image/*"
//             onChange={handleImageChange}
//             style={{ display: "none" }}
//             id="image-upload"
//           />
//           <label htmlFor="image-upload" style={styles.uploadBox}>
//             {previewUrl ? (
//               <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
//             ) : (
//               <>
//                 <CloudUpload style={{ fontSize: 40 }} />
//                 <p>Click to upload recipe image</p>
//               </>
//             )}
//           </label>
//         </div>

//         <TextField
//           name="title"
//           label="Recipe Title *"
//           value={recipe.title}
//           onChange={handleChange}
//           fullWidth required
//           sx={styles.input}
//         />

//         <TextField
//           name="description"
//           label="Description *"
//           value={recipe.description}
//           onChange={handleChange}
//           fullWidth required
//           multiline rows={3}
//           sx={styles.input}
//         />

//         <div style={styles.row}>
//           <TextField
//             name="cookingTime"
//             label="Cooking Time (minutes) *"
//             type="number"
//             value={recipe.cookingTime}
//             onChange={handleChange}
//             fullWidth required
//             inputProps={{ min: 0 }}
//             sx={styles.input}
//           />
//           <TextField
//             name="servings"
//             label="Servings *"
//             type="number"
//             value={recipe.servings}
//             onChange={handleChange}
//             fullWidth required
//             inputProps={{ min: 0 }}
//             sx={styles.input}
//           />
//         </div>

//         <div style={styles.row}>
//           <FormControl fullWidth variant="outlined" sx={styles.input}>
//             <InputLabel>Difficulty</InputLabel>
//             <Select
//               labelId="difficulty-label"
//               label="Difficulty"
//               name="difficulty"
//               value={recipe.difficulty}
//               onChange={handleChange}
//               required
//             >
//               <MenuItem value="Easy">Easy</MenuItem>
//               <MenuItem value="Medium">Medium</MenuItem>
//               <MenuItem value="Hard">Hard</MenuItem>
//             </Select>
//           </FormControl>

//           <FormControl fullWidth variant="outlined" sx={styles.input}>
//             <InputLabel>Category</InputLabel>
//             <Select
//               labelId="category-label"
//               label="Category"
//               name="category"
//               value={recipe.category}
//               onChange={handleChange}
//               required
//             >
//               <MenuItem value="Breakfast">Breakfast</MenuItem>
//               <MenuItem value="Lunch">Lunch</MenuItem>
//               <MenuItem value="Dinner">Dinner</MenuItem>
//               <MenuItem value="Dessert">Dessert</MenuItem>
//             </Select>
//           </FormControl>
//         </div>

//         {/* ✅ שדה תגיות חדש */}
//         <Autocomplete
//           multiple
//           freeSolo
//           options={tagOptions}
//           value={recipe.tags}
//           onChange={(e, newValue) =>
//             setRecipe({ ...recipe, tags: newValue })
//           }
//           renderInput={(params) => (
//             <TextField
//               {...params}
//               variant="outlined"
//               label="Tags (optional)"
//               placeholder="Add tags"
//               sx={styles.input}
//             />
//           )}
//         />

//         {recipe.ingredients.map((ing, i) => (
//           <div key={i} style={styles.row}>
//             <TextField
//               fullWidth
//               label={`Ingredient ${i + 1}`}
//               value={ing}
//               onChange={(e) => handleListChange(i, e.target.value, "ingredients")}
//               sx={styles.input}
//             />
//             <IconButton onClick={() => removeField(i, "ingredients")} variant="contained" >
//               <RemoveCircle />
//             </IconButton>
//           </div>
//         ))}
//         <Button onClick={() => addField("ingredients")} startIcon={<AddCircle />} variant="outlined" color="inherit">
//           Add Ingredient
//         </Button>

//         {recipe.instructions.map((step, i) => (
//           <div key={i} style={styles.row}>
//             <TextField
//               fullWidth
//               label={`Step ${i + 1}`}
//               value={step}
//               onChange={(e) => handleListChange(i, e.target.value, "instructions")}
//               sx={styles.input}
//             />
//             <IconButton onClick={() => removeField(i, "instructions")} variant="contained" >
//               <RemoveCircle />
//             </IconButton>
//           </div>
//         ))}
//         <Button onClick={() => addField("instructions")} startIcon={<AddCircle />} variant="outlined" color="inherit">
//           Add Step
//         </Button>

//         <Button
//           type="submit"
//           variant="contained"
//           fullWidth
//           disabled={isUploading}
//           sx={styles.button}
//         >
//           {isUploading ? "Uploading..." : "Share Recipe"}
//         </Button>
//       </form>
//     </div>
//   );
// }

// export default UploadRecipePage;

// const styles = {
//   container: {
//     maxWidth: "520px",
//     margin: "0 auto",
//     padding: "30px",
//     textAlign: "center"
//   },
//   logo: {
//     width: "80px",
//     height: "80px",
//     objectFit: "cover",
//     borderRadius: "16px",
//     boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
//     border: "2px solid #ff6600",
//     marginBottom: "12px"
//   },
//   title: {
//     fontWeight: "bold",
//     fontSize: "24px",
//     marginBottom: "20px",
//     color: "#ff6600",
//     fontFamily: "'Roboto', sans-serif"
//   },
//   form: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "15px"
//   },
//   row: {
//     display: "flex",
//     gap: "10px",
//     alignItems: "center"
//   },
//   input: {
//     borderRadius: "8px"
//   },
//   button: {
//     backgroundColor: "#ff6600",
//     color: "white",
//     fontWeight: "bold",
//     borderRadius: "8px",
//     "&:hover": {
//       backgroundColor: "#e05500"
//     }
//   },
//   imageUpload: {
//     textAlign: "center"
//   },
//   uploadBox: {
//     border: "2px dashed gray",
//     borderRadius: "8px",
//     padding: "16px",
//     cursor: "pointer",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     justifyContent: "center",
//     width: "100%",
//     textAlign: "center",
//     boxSizing: "border-box"
//   },
//   imagePreview: {
//     width: "100%",
//     maxHeight: 200,
//     objectFit: "cover",
//     borderRadius: "10px"
//   }
// };

// src/pages/UploadRecipePage.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  TextField, Button, IconButton, InputLabel, MenuItem,
  FormControl, Select, Autocomplete
} from "@mui/material";
import { AddCircle, RemoveCircle, CloudUpload } from "@mui/icons-material";
import '../styles/authPages.css';

function UploadRecipePage() {
  const navigate = useNavigate();
  const [isUploading, setIsUploading] = useState(false);
  const [recipe, setRecipe] = useState({
    title: "",
    description: "",
    cookingTime: "",
    servings: "",
    difficulty: "",
    category: "",
    ingredients: [""],
    instructions: [""],
    tags: []
  });
  const [image, setImage] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const tagOptions = [
    "בשרי", "חלבי", "פרווה", "ילדים", "טבעוני",
    "צמחוני", "מתוק", "תוספת", "עיקרית", "חגים", "שבת"
  ];

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setPreviewUrl(URL.createObjectURL(file));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe((prev) => ({ ...prev, [name]: value }));
  };

  const handleListChange = (index, value, field) => {
    const updated = [...recipe[field]];
    updated[index] = value;
    setRecipe({ ...recipe, [field]: updated });
  };

  const addField = (field) => {
    setRecipe({ ...recipe, [field]: [...recipe[field], ""] });
  };

  const removeField = (index, field) => {
    const updated = recipe[field].filter((_, i) => i !== index);
    setRecipe({ ...recipe, [field]: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!token) return alert("Login required.");
    if (!image) return alert("Please upload an image.");

    try {
      setIsUploading(true);
      const formData = new FormData();
      formData.append("title", recipe.title);
      formData.append("description", recipe.description);
      formData.append("cooking_time", recipe.cookingTime);
      formData.append("servings", recipe.servings);
      formData.append("difficulty", recipe.difficulty);
      formData.append("category", recipe.category);
      formData.append("tags", JSON.stringify(recipe.tags));
      formData.append("image", image);
      formData.append("ingredients", JSON.stringify(recipe.ingredients));
      formData.append("instructions", JSON.stringify(recipe.instructions));

      const res = await fetch("http://localhost:5000/api/recipes", {
        method: "POST",
        headers: { Authorization: `Bearer ${token}` },
        body: formData,
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Upload failed:", errorData);
        alert("Error uploading recipe.");
        return;
      }

      alert("Recipe uploaded!");
      navigate("/");
    } catch (err) {
      console.error("Upload error:", err);
      alert("Upload failed.");
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div style={styles.container}>
      <img src="/instaFood_logo.png" alt="InstaFood Logo" style={styles.logo} />
      <h2 style={styles.title}>Upload New Recipe</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.imageUpload}>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            style={{ display: "none" }}
            id="image-upload"
          />
          <label htmlFor="image-upload" style={styles.uploadBox}>
            {previewUrl ? (
              <img src={previewUrl} alt="Preview" style={styles.imagePreview} />
            ) : (
              <>
                <CloudUpload style={{ fontSize: 40 }} />
                <p>Click to upload recipe image</p>
              </>
            )}
          </label>
        </div>

        <TextField
          name="title"
          label="Recipe Title *"
          value={recipe.title}
          onChange={handleChange}
          fullWidth required
          sx={styles.input}
        />

        <TextField
          name="description"
          label="Description *"
          value={recipe.description}
          onChange={handleChange}
          fullWidth required
          multiline rows={3}
          sx={styles.input}
        />

        <div style={styles.row}>
          <TextField
            name="cookingTime"
            label="Cooking Time (minutes) *"
            type="number"
            value={recipe.cookingTime}
            onChange={handleChange}
            fullWidth required
            inputProps={{ min: 0 }}
            sx={styles.input}
          />
          <TextField
            name="servings"
            label="Servings *"
            type="number"
            value={recipe.servings}
            onChange={handleChange}
            fullWidth required
            inputProps={{ min: 0 }}
            sx={styles.input}
          />
        </div>

        <div style={styles.row}>
          <FormControl fullWidth variant="outlined" sx={styles.input}>
            <InputLabel>Difficulty</InputLabel>
            <Select
              label="Difficulty"
              name="difficulty"
              value={recipe.difficulty}
              onChange={handleChange}
              required
            >
              <MenuItem value="Easy">Easy</MenuItem>
              <MenuItem value="Medium">Medium</MenuItem>
              <MenuItem value="Hard">Hard</MenuItem>
            </Select>
          </FormControl>

          <FormControl fullWidth variant="outlined" sx={styles.input}>
            <InputLabel>Category</InputLabel>
            <Select
              label="Category"
              name="category"
              value={recipe.category}
              onChange={handleChange}
              required
            >
              <MenuItem value="Breakfast">Breakfast</MenuItem>
              <MenuItem value="Lunch">Lunch</MenuItem>
              <MenuItem value="Dinner">Dinner</MenuItem>
              <MenuItem value="Dessert">Dessert</MenuItem>
              <MenuItem value="Drinks">Drinks</MenuItem> {/* ✅ חדש */}
            </Select>
          </FormControl>
        </div>

        <Autocomplete
          multiple
          freeSolo
          options={tagOptions}
          value={recipe.tags}
          onChange={(e, newValue) =>
            setRecipe({ ...recipe, tags: newValue })
          }
          renderInput={(params) => (
            <TextField
              {...params}
              variant="outlined"
              label="Tags (optional)"
              placeholder="Add tags"
              sx={styles.input}
            />
          )}
        />

        {recipe.ingredients.map((ing, i) => (
          <div key={i} style={styles.row}>
            <TextField
              fullWidth
              label={`Ingredient ${i + 1}`}
              value={ing}
              onChange={(e) => handleListChange(i, e.target.value, "ingredients")}
              sx={styles.input}
            />
            <IconButton onClick={() => removeField(i, "ingredients")}>
              <RemoveCircle />
            </IconButton>
          </div>
        ))}
        <Button onClick={() => addField("ingredients")} startIcon={<AddCircle />} variant="outlined" color="inherit">
          Add Ingredient
        </Button>

        {recipe.instructions.map((step, i) => (
          <div key={i} style={styles.row}>
            <TextField
              fullWidth
              label={`Step ${i + 1}`}
              value={step}
              onChange={(e) => handleListChange(i, e.target.value, "instructions")}
              sx={styles.input}
            />
            <IconButton onClick={() => removeField(i, "instructions")}>
              <RemoveCircle />
            </IconButton>
          </div>
        ))}
        <Button onClick={() => addField("instructions")} startIcon={<AddCircle />} variant="outlined" color="inherit">
          Add Step
        </Button>

        <Button
          type="submit"
          variant="contained"
          fullWidth
          disabled={isUploading}
          sx={styles.button}
        >
          {isUploading ? "Uploading..." : "Share Recipe"}
        </Button>
      </form>
    </div>
  );
}

export default UploadRecipePage;

const styles = {
  container: {
    maxWidth: "520px",
    margin: "0 auto",
    padding: "30px",
    textAlign: "center"
  },
  logo: {
    width: "80px",
    height: "80px",
    objectFit: "cover",
    borderRadius: "16px",
    boxShadow: "0 2px 8px rgba(0, 0, 0, 0.15)",
    border: "2px solid #ff6600",
    marginBottom: "12px"
  },
  title: {
    fontWeight: "bold",
    fontSize: "24px",
    marginBottom: "20px",
    color: "#ff6600",
    fontFamily: "'Roboto', sans-serif"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "15px"
  },
  row: {
    display: "flex",
    gap: "10px",
    alignItems: "center"
  },
  input: {
    borderRadius: "8px"
  },
  button: {
    backgroundColor: "#ff6600",
    color: "white",
    fontWeight: "bold",
    borderRadius: "8px",
    "&:hover": {
      backgroundColor: "#e05500"
    }
  },
  imageUpload: {
    textAlign: "center"
  },
  uploadBox: {
    border: "2px dashed gray",
    borderRadius: "8px",
    padding: "16px",
    cursor: "pointer",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    textAlign: "center",
    boxSizing: "border-box"
  },
  imagePreview: {
    width: "100%",
    maxHeight: 200,
    objectFit: "cover",
    borderRadius: "10px"
  }
};
