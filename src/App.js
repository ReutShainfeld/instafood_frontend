import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilePage";
import UploadRecipePage from "./pages/UploadRecipePage";
import ForYouPage from "./pages/ForYouPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import RecipePage from "./pages/RecipePage";
import SearchResultsPage from "./pages/SearchResultsPage";
import AdvancedSearchPage from "./pages/AdvancedSearchPage";
import EditProfilePage from './pages/EditProfilePage';
import Layout from './components/Layout';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/upload" element={<UploadRecipePage />} />
          <Route path="/for-you" element={<ForYouPage />} />
          <Route path="/recipe/:id" element={<RecipePage />} />
          <Route path="/search/:type/:value" element={<SearchResultsPage />} />
          <Route path="/search/query/:query" element={<SearchResultsPage />} />
          <Route path="/search" element={<AdvancedSearchPage />} />
          <Route path="/edit-profile" element={<EditProfilePage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
