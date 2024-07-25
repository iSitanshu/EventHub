import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Header from "../Header/Header";

const Navbar = ({ setShowSlidebar }) => {
    return (
        <><div className='Navbar'>
            <ul className="Navbar-left">
                <li><Link to="/"><img src="./src/assets/Images/noalogo.jpeg" alt="" height={55} /></Link></li>
                <li><input className="id" type="text" placeholder="   Search for Events,Movies,Plays and Standups" /></li>
            </ul>
            <ul className="Navbar-right">
                <li><Link><p><img src="./src/assets/Images/Location.jpeg" alt="" height={30} /></p></Link></li>
                <li><Link><div className="box"><button className="id">Sign up</button></div></Link></li>

                <li><div className="Navbar-menu" >
                    <img src="./src/assets/Images/menuicon.jpeg"
                        onClick={() => setShowSlidebar(true)}
                        alt="" height={37} /></div></li>
            </ul>
        </div>
        <Header />
        </>
    )
}

export default Navbar;