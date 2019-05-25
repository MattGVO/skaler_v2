import React, { useState } from "react";
import { loginReg } from "../../Utils/auth";
import { connect } from "react-redux";
import { updateUser } from "../../ducks/reducer";

function Login({ showLogin, updateUser, toggleLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, getError] = useState("");

  return (
    <div
      style={!showLogin ? { opacity: 0, visibility: "hidden" } : { opacity: 1 }}
      className="Login"
    >
      <div className="Inputs">
        <p>EMAIL:</p>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} />
        <p>PASSWORD:</p>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
        {error ? (
          <p style={{ color: "orangered" }}>{error}</p>
        ) : (
          <div style={{ height: "16px" }} />
        )}
      </div>
      <div className="Buttons">
        <button
          className="Register-Button"
          onClick={() =>
            loginReg(
              "register",
              email,
              password,
              getError,
              updateUser,
              toggleLogin,
              setEmail,
              setPassword
            )
          }
        >
          Register
        </button>
        <button
          className="Login-Button"
          onClick={() =>
            loginReg(
              "login",
              email,
              password,
              getError,
              updateUser,
              toggleLogin,
              setEmail,
              setPassword
            )
          }
        >
          Login
        </button>
      </div>
    </div>
  );
}

export default connect(
  null,
  { updateUser }
)(Login);
