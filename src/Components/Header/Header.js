import React, { useState } from "react";
import Login from "../Login/Login";
import { connect } from "react-redux";
import axios from 'axios'
import { updateUser } from "../../ducks/reducer";

function Header({ userId, email, updateUser }) {
  const [showLogin, toggleLogin] = useState(false);
  console.log("userId, email:", userId, email);

  return (
    <div className="Header">
      <h1>SKALER</h1>
      {userId ? (
        <button onClick={ async()=>{
            console.log('run')
            await axios.delete('/auth/logout')
            updateUser({id: null, email:""})
        }}>
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

export default connect(mapStateToProps,{updateUser})(Header);
