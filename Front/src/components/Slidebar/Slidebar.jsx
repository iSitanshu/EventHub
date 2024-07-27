import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Slidebar.css';

const Slidebar = () => {
    const [showSlidebar , setShowSlidebar] = useState(false); // Changed to boolean

    return (
        <>
            <div className={`slidebar-main ${showSlidebar ? "active" : ""}`}>
                <ul className="side-left">
                    <li><Link>Explore</Link></li>
                    <li><Link>StandUp</Link></li>
                    <li><Link>Movies</Link></li>
                    <li><Link>Plays</Link></li>
                    <li><Link>About us</Link></li>
                </ul>
                <div className="side-right" onClick={() => setShowSlidebar(false)}>
                    <img src="./src/assets/Images/cross.jpeg" alt="" height={50} className="cross-icon" />
                </div>
            </div>
        </>
    );
};

export default Slidebar;
