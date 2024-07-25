import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

const Navbar = ({showSlidebar}) => {
    return (
        <>
            
            <div className='Navbar'>
                <ul className="Navbar-left">
                    <li><Link to="/"><img src="./src/assets/Images/noalogo.jpeg" alt="" height={55}/></Link></li>
                    <li><input className="id" type="text" placeholder="    Search for Events,Movies,Plays and Standups"/></li>
                </ul>
                <ul className="Navbar-right">
                    <li><Link><p><img src="./src/assets/Images/Location.jpeg" alt="" height={30}/></p></Link></li>
                    <li><Link><div className="box"><button className="id">Sign up</button></div></Link></li>
                    
                    <li><Link><div className="Navbar-menu" 
                    onClick={()=>showSlidebar((prev)=>!prev)}>
                    <img src="./src/assets/Images/menuicon.jpeg"
                    alt="" height={37} /></div></Link></li>
                </ul>
            </div>
        </>
    )
}

export default Navbar;