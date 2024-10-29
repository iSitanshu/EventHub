import React from 'react'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'
import { Outlet } from 'react-router'
function Layout() {
  return (
    <>
        <Outlet />
        <Footer />
    </>
  )
}

export default Layout