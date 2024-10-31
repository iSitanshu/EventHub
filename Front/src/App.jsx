import React, { useState } from 'react';
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router';
import usemovieshowing from './Hooks/movieshowing';
import Slidebar from './components/Slidebar/Slidebar';
import LoginPopup from './components/LoginPopup/LoginPopup'
import MainPage from './components/MainPage/MainPage';
import Layout from './components/Layout/Layout';
import Detail_Movies from './Pages/Detail_Movies';
import Location from './Extras/Location';

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
          <Route path='/Movies' element={<Detail_Movies />}/>
        </Route>
      </Routes>
      <Location/>
    </>
  )
}

export default App
