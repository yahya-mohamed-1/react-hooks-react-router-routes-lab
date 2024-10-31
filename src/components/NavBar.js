import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return <div className="navbar">{
    /*{code here}*/}
    <NavLink  to="/home">Home</NavLink>
    {/* movies */}
    <NavLink to="/movies">Movies</NavLink>
    {/* directors */}
    <NavLink to="/directors">Directors</NavLink>
    {/* actors */}
    <NavLink to="/actors">Actors</NavLink>
    </div>;
}

export default NavBar;
