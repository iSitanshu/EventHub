import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router';
import usemovieshowing from './Hooks/movieshowing';
import Slidebar from './components/Slidebar/Slidebar';
import LoginPopup from './components/LoginPopup/LoginPopup'
import MainPage from './components/MainPage/MainPage';
import Detail from './components/Detail/Detail';
import Layout from './components/Layout/Layout';


function App() {
  const [showSlidebar,setShowSlidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  
  return (
    <>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {showSlidebar && <Slidebar showSlidebar={showSlidebar} setShowSlidebar={setShowSlidebar} />}
      <Navbar setShowSlidebar={setShowSlidebar} setShowLogin={setShowLogin} />
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path='/standup/:id' element={<Detail/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
