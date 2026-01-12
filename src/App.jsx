import { useState } from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import Stock from './pages/Stock.jsx'
import Contact from './pages/Contact.jsx'
import Help from './pages/Help.jsx'

function App() {
  return (
       <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stock" element={<Stock />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />
      </Routes>
    </BrowserRouter>

  
  )
}

export default App
