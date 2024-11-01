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
import Location from './Extras/Location/Location';
import UserContextProvider from './context/UserContextProvider.jsx'

function App() {
  const [showSlidebar,setShowSlidebar] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [displaylocationtab, setDisplayLocationTab] = useState(false);

  return (
    <UserContextProvider>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      {showSlidebar && <Slidebar showSlidebar={showSlidebar} setShowSlidebar={setShowSlidebar} />}
      {true && <Location setDisplayLocationTab={setDisplayLocationTab} />}
      <Navbar setShowSlidebar={setShowSlidebar} setShowLogin={setShowLogin} setDisplayLocationTab={setDisplayLocationTab} />
      
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<MainPage />}/>
          <Route path='/Movies' element={<Detail_Movies />}/>
        </Route>
      </Routes>
    </UserContextProvider>
  )
}

export default App
