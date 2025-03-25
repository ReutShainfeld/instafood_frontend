

// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import HomePage from "./pages/HomePage";
// import ProfilePage from "./pages/ProfilePage";
// import UploadRecipePage from "./pages/UploadRecipePage";
// import ForYouPage from "./pages/ForYouPage"; // ✅ עמוד פור יו
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import Navbar from "./components/Navbar";
// import RecipePage from "./pages/RecipePage"; // ✅ עמוד מתכון בודד
// import React from 'react';

// function App() {
//     return (
//         <Router>
//             <Navbar />
//             <Routes>
//                 <Route path="/" element={<HomePage />} />
//                 <Route path="/profile" element={<ProfilePage />} />
//                 <Route path="/upload" element={<UploadRecipePage />} />
//                 <Route path="/for-you" element={<ForYouPage />} />
//                 <Route path="/register" element={<RegisterPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/recipe/:id" element={<RecipePage />} /> {/* ✅ דף מתכון */}
//             </Routes>
//         </Router>
//     );
// }

// export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UploadRecipePage from "./pages/UploadRecipePage";
import ForYouPage from "./pages/ForYouPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import Navbar from "./components/Navbar";
import RecipePage from "./pages/RecipePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AdvancedSearchPage from "./pages/AdvancedSearchPage";

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
                <Route path="/recipe/:id" element={<RecipePage />} />
                <Route path="/search/:type/:value" element={<SearchResultsPage />} /> 
                <Route path="/search/query/:query" element={<SearchResultsPage />} />
                <Route path="/search" element={<AdvancedSearchPage />} />
            </Routes>
        </Router>
    );
}

export default App;
