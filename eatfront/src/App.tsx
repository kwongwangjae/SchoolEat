import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import NotFound from "./components/header/NotFound";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import MembershipPage from "./pages/MembershipPage";
import ReviewPage from "./pages/ReviewPage";
import CategoryPage2 from "./pages/CategoryPage2";
import CategoryPage3 from "./pages/CategoryPage3";

function App() {
  return (
    <div className="Font">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/Rice" element={<CategoryPage />} />
          <Route path="/Noodle" element={<CategoryPage2 />} />
          <Route path="/Dessert" element={<CategoryPage3 />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="//Review/:menuId" element={<ReviewPage />} />
          <Route path="/Membership" element={<MembershipPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
