import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar.js';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Cart from './pages/Cart/Cart.js';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.js';
import Footer from './components/Footer/Footer.js';
import AppDownload from './components/AppDownload/AppDownload.js';
import LoginPopup from './components/LoginPopup/LoginPopup.js';

function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />} {/* Pass setShowLogin here */}
      <div className="app">
        <Navbar setShowLogin={setShowLogin}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/order' element={<PlaceOrder />} />
        </Routes>
         </div>
      <AppDownload />
      <Footer />
    </> 
  );
}

export default App;
