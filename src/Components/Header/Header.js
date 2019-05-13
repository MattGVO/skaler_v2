import React, {} from 'react'
import Login from '../Login/Login';

function Header () {
    
    return (
        <div className="Header">
            <h1>SKALER</h1>
            <button>Login</button>
            <Login/>
        </div>
    );
}

export default Header;