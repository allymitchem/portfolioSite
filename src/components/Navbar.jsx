import React from "react"
import { NavLink } from "react-router-dom";

const Navbar = () => {
    
    return (
        <div id ="navbar">
           <NavLink id="homeLink" className="current-page" to="/">
            Home
           </NavLink>
           <NavLink id ="aboutLink" className="current-page" to="/about">
            About
           </NavLink>
           <NavLink id ="portfolioLink" activeClassName="active-link" to="/portfolio">
            Portfolio
           </NavLink>
        </div>
    )

    
}

export default Navbar;