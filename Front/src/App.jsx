import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router';
import Slidebar from './components/Slidebar/Slidebar';
import LoginPopup from './components/LoginPopup/LoginPopup'


function App() {
  const [showSlidebar,setShowSlidebar] = useState(false)
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {showSlidebar && <Slidebar setShowSlidebar={setShowSlidebar}/>}
      <Navbar setShowSlidebar={setShowSlidebar} setShowLogin={setShowLogin} />
      {/* <Routes>
        <Router path="/about" element={<About/>}/>
      </Routes> */}
    </>
  )
}

export default App
