import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import MainPage from './pages/MainPage'
import NotFound from './components/header/NotFound'

function App() {
  return (
    <div className="Font">
      <BrowserRouter>
        <Routes>
        <Route path="/*" element={<NotFound />} />
        <Route path="/" element={<MainPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
} 

export default App