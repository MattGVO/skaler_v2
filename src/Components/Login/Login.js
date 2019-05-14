import React, { useState } from 'react';
import { loginReg } from '../../utils'



function Login ({showLogin}) {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, getError] = useState("")
    
    return (
        <div style={!showLogin? {opacity: 0, visibility: "hidden"} : {opacity: 1} } className="Login">
            <div className="Inputs">
                <p>EMAIL:</p>
                <input type="email" onChange={e => setEmail(e.target.value)}/>
                <p>PASSWORD:</p>
                <input type="password" onChange={e => setPassword(e.target.value)}/>
                {error? <p style={{color: "orangered"}}>{error}</p> : <div style={{height:"16px"}} />}
            </div>
            <div className="Buttons">
                <button className="Register-Button" onClick={() => loginReg('register',email,password,getError)}>Register</button>
                <button className="Login-Button" onClick={() => loginReg('login',email,password,getError)}>Login</button>
            </div>
        </div>
    );
}

export default Login;