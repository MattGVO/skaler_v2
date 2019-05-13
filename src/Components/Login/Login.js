import React from 'react';

function Login () {
    return (
        <div className="Login">
            <div className="Inputs">
                <p>EMAIL:</p>
                <input type="email"/>
                <p>PASSWORD:</p>
                <input type="email"/>
            </div>
            <div className="Buttons">
                <button className="Register-Button">Register</button>
                <button className="Login-Button">Login</button>
            </div>
        </div>
    );
}

export default Login;