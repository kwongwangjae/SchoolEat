import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import NotFound from './components/header/NotFound'
import CategoryPage from './pages/CategoryPage'

function App() {
  return (
    <div className="Font">
      <BrowserRouter>
        <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/Rice" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
} 

export default App