import React from "react";

export default function Filter({ updateby,currentfilter, filtertext }) {
  return (
    <div className="container restaurants">
      <h1>50 restaurants</h1>
      <div className="restaurant-options">
        {Object.entries(filtertext).map(([key, value]) => (
          <div onClick={() => updateby(key)} className={`restaurant-option ${currentfilter==key?"underline":""}`
        }>{value}</div>
        ))}
      </div>
    </div>
  );
}
