import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import MainPage from "./pages/MainPage";
import NotFound from "./components/header/NotFound";
import CategoryPage from "./pages/CategoryPage";
import LoginPage from "./pages/LoginPage";
import MembershipPage from "./pages/MembershipPage";

function App() {
  return (
    <div className="Font">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<NotFound />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/Rice" element={<CategoryPage />} />
          <Route path="/Login" element={<LoginPage />} />
          <Route path="/Membership" element={<MembershipPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
