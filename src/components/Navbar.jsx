import React from "react";

export default function Navbar({ usersinfo,setsearch }) {
  return (
    <div>
      <section className="navbar">
        <div className="container">
          <img className="logo" alt="" src="assets/logo.svg" />

          {usersinfo.map((e) => (
            <div className="location">
              <span className="city"> {e.city}</span>
              <span className="state">{e.state}, {e.country}</span>
            </div>
          ))}

          <div className="navbar-options">
            <div className="navbar-option">
              <span className="material-icons"> person_outline</span> Sign In
            </div>
            <div className="navbar-option">
              <span className="material-icons">shopping_bag</span> Cart
            </div>
            <div className="navbar-option">
              <span className="material-icons">support</span> Help
            </div>
            <div className="navbar-option">
              <input type="text" onChange={(e)=>setsearch(e.target.value)}/>
              <span className="material-icons">search</span> Search
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
