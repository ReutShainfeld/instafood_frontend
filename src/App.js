// // import React from "react";
// // import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// // import Navbar from "./components/Navbar";
// // import HomePage from "./pages/HomePage";
// // import ProfilePage from "./pages/ProfilePage";
// // import UploadRecipePage from "./pages/UploadRecipePage";
// // import RegisterPage from "./pages/RegisterPage";
// // import LoginPage from "./pages/LoginPage";

// // function App() {
// //     return (
// //         <Router>
// //             <Navbar />
// //             <Routes>
// //                 <Route path="/" element={<HomePage />} />
// //                 <Route path="/profile" element={<ProfilePage />} />

// //                 <Route path="/register" element={<RegisterPage />} />
// //                 <Route path="/login" element={<LoginPage />} />
// //             </Routes>
// //         </Router>
// //     );
// // }

// // export default App;

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ProfilePage from "./pages/ProfilePage";
// import UploadRecipePage from "./pages/UploadRecipePage";
// import ForYouPage from "./pages/ForYouPage"; // ✅ ייבוא עמוד פוריו
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import Navbar from "./components/Navbar";
// import React from 'react';


// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/profile" element={<ProfilePage />} />
//                 <Route path="/upload" element={<UploadRecipePage />} />
//                 <Route path="/for-you" element={<ForYouPage />} /> {/* ✅ הוספת עמוד פוריו */}
//                 <Route path="/register" element={<RegisterPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UploadRecipePage from "./pages/UploadRecipePage";
import ForYouPage from "./pages/ForYouPage"; // ✅ עמוד פור יו
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import RecipePage from "./pages/RecipePage"; // ✅ עמוד מתכון בודד
import React from 'react';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/profile" element={<ProfilePage />} />
                <Route path="/upload" element={<UploadRecipePage />} />
                <Route path="/for-you" element={<ForYouPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/recipe/:id" element={<RecipePage />} /> {/* ✅ דף מתכון */}
            </Routes>
        </Router>
    );
}

export default App;
