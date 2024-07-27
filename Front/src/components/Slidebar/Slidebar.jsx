import React from 'react';
import { Link } from 'react-router-dom';
import './Slidebar.css';

const Slidebar = ({ showSlidebar, setShowSlidebar }) => {
    return (
        <div className={`slidebar-main ${showSlidebar ? "active" : ""}`}>
            <ul className="side-left">
                <li><Link to="/explore">Explore</Link></li>
                <li><Link to="/standup">StandUp</Link></li>
                <li><Link to="/movies">Movies</Link></li>
                <li><Link to="/plays">Plays</Link></li>
                <li><Link to="/about">About Us</Link></li>
            </ul>
            <div className="side-right" onClick={() => setShowSlidebar(false)}>
                <img src="./src/assets/Images/cross.jpeg" alt="Close" height={50} className="cross-icon" />
            </div>

        </div>
    );
};

export default Slidebar;
