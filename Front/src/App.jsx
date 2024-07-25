import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes } from 'react-router';
import Slidebar from './components/Slidebar/Slidebar';


function App() {
  const [showSlidebar,setShowSlidebar] = useState(false)
  
  return (
    <>
      {showSlidebar && <Slidebar setShowSlidebar={setShowSlidebar}/>}
      <Navbar setShowSlidebar={setShowSlidebar} />
      {/* <Routes>
        <Router path="/about" element={<About/>}/>
      </Routes> */}
    </>
  )
}

export default App
