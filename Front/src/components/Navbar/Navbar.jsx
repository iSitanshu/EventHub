import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import Header from "../Header/Header";
import PopularEvents from "../PopularEvents/PopularEvents";
import Explore from "../Explore/Explore";
import Footer from "../Footer/Footer";
import Standup from "../Standup/Standup";
import NowShowing from "../NowShowing/NowShowing";
import Play from "../Play/Play"
import OtherEvent from "../OtherEvents/OtherEvents"
import Temp from "../Change/Temp"
import { image1 } from "../../../public/Images/assets";

const Navbar = ({ setShowSlidebar, setShowLogin }) => {

    return (
        <><div className='Navbar'>
            <ul className="Navbar-left">
                <li><Link to="/"><img src={image1} alt="" height={65} /></Link></li>
                <li><input className="id" type="text" placeholder="   Search for Events,Movies,Plays and Standups" /></li>
            </ul>
            <ul className="Navbar-right">
                <li><Link><p><img src="./src/assets/Images/Location.jpeg" alt="" height={30} /></p></Link></li>
                <li><Link><div className="box"><button className="id"
                    onClick={() => setShowLogin(true)}>Sign up</button></div></Link></li>

                <li><div className="Navbar-menu" >
                    <img
                        src="./src/assets/Images/menuicon.jpeg"
                        onClick={() => setShowSlidebar(true)}
                        alt=""
                        height={37}
                    />
                </div></li>
            </ul>
        </div>
            <Header />
            <PopularEvents />
            <NowShowing />
            <Play />
            <Explore />
            <Standup />
            <OtherEvent />
            <Footer />
        </>
    )
}

export default Navbar;