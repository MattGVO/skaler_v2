import React from "react";

function Logo() {
  return (
    <div className="Logo">
      <svg>
        <g>
          <rect x="0" y="0" width="200" height="100" fill="red"/>
          <circle style={{marginTop: "25px"}} cx="50" cy="50" r="40" stroke="black" stroke-width="3" fill="green"/>
        </g>
      </svg>
    </div>
  );
}

export default Logo;
