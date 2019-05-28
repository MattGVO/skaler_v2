import React, { useState, useEffect } from "react";
import Login from "../Login/Login";
import { connect } from "react-redux";
import axios from "axios";
import { updateUser } from "../../ducks/reducer";
import Logo from "../../LightLogo.svg";

function Header({ userId, updateUser }) {
  const [showLogin, toggleLogin] = useState(false);

  useEffect(() => {
    const user = async () => {
      let res = await axios.get("/api/user-info");
      updateUser(res.data);
    };
    user();
  });

  return (
    <div className="Header">
      <div style={{display: "flex", alignItems: "center"}}>
        <h1>SKALER</h1>
        <img src={Logo} style={{height: "1.75rem"}}/>
      </div>
      {userId ? (
        <button
          onClick={async () => {
            await axios.delete("/auth/logout");
            updateUser({ userId: null, email: "" });
          }}
        >
          Logout
        </button>
      ) : (
        <button
          style={
            showLogin ? { background: "orange", borderColor: "orange" } : null
          }
          onClick={() => toggleLogin(!showLogin)}
        >
          Login
        </button>
      )}
      <Login showLogin={showLogin} toggleLogin={toggleLogin} />
    </div>
  );
}

function mapStateToProps(store) {
  return store;
}

export default connect(
  mapStateToProps,
  { updateUser }
)(Header);
