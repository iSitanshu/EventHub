import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./LoginPopup.css";

const LoginPopup = ({setShowLogin}) => {
    const [currState, setCurrState] = useState("Sign Up");

    return (
        <div className='login-popup'>
            <form className="login-popup-container">
                <div className="login-popup-title">
                    <h2>{currState}</h2>
                    <img onClick={() => setShowLogin(false)} src="./src/assets/Images/logo.gif" height={50} alt="Close" />
                </div>
                <div className="login-popup-inputs">
                    {currState === "Login" ? null : <input type="text" placeholder='Your name' required />}
                    <input type="email" placeholder='Your Email' required />
                    <input type="password" placeholder='Enter the Password' required />
                </div>
                <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>
                <div className="login-popup-condition">
                    <input type="checkbox" required />
                    <p>By continuing, I agree to the terms of use & privacy policy.</p>
                </div>
                {currState === "Login" ? 
                <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p> : 
                <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>}
            </form>
        </div>
    );
}

export default LoginPopup;
