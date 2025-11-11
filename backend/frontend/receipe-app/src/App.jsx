import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import MyReceipes from './components/MyReceipes';
import MyFavReceipes from './components/MyFavReceipes';
import AddReceipe from './components/AddReceipe';


export default function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/myReceipes" element={<MyReceipes />} />
        <Route path="/myFavReceipes" element={<MyFavReceipes />} />
        <Route path="/addReceipe" element={<AddReceipe />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}