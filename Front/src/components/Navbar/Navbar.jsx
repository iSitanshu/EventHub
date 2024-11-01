import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"
import { image1, Location } from "../../../public/Images/assets";
import UserContext from "../../context/UserContext";


const Navbar = ({ setShowSlidebar, setShowLogin, setDisplayLocationTab }) => {
    const {updatelocation} = useContext(UserContext)
    const [inputinplaceholder, setInputinPlaceHolder] = useState("")

    const {setCheckfordisplayLocation} = useContext(UserContext)
    const {checkfordisplaylocation} = useContext(UserContext)

    const check = () => {
        const pointer = !checkfordisplaylocation
        setCheckfordisplayLocation(pointer)
        setDisplayLocationTab(pointer)
    }

    const handleEvent = (e) => {
        setCheckfordisplayLocation(e.target.value)
    }

    return (
        <><div className='Navbar'>
            <ul className=" Navbar-left">
                <li><Link to="/"><img src={image1} alt="" height={65} /></Link></li>
                <li>
                    <input className="id" 
                    type="text" 
                    placeholder="   Search for Events,Movies,Plays and Standups" 
                    value={inputinplaceholder}
                    onChange={handleEvent}
                    />
                </li>
            </ul>
            <ul className="Navbar-right">
                <h1 className="mx-6 text-2xl font-semibold">{updatelocation}</h1>
                <li>
                    <Link>
                        <p>
                            <img src={Location} className="h-8"  onClick={check} alt="" height={30} />
                        </p>
                    </Link>
                </li>
                <li>
                    <Link>
                        <div className="box"><button className="id"
                        onClick={() => setShowLogin(true)}>Sign up</button></div>
                    </Link>
                </li>
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
        </>
    )
}

export default Navbar;