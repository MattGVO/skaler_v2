import React, { useState } from 'react'
import Login from '../Login/Login';

function Header () {
    const [showLogin,toggleLogin] = useState(false)
    
    return (
        <div className="Header">
            <h1>SKALER</h1>
            <button style={showLogin? {background: "orange", borderColor: "orange"} : null} onClick={() => toggleLogin(!showLogin)}>Login</button>
            <Login showLogin={showLogin}/>
        </div>
    );
}

export default Header;