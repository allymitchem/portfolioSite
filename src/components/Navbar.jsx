import React from "react"
import { useNavigate, Navlink, NavLink } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate
    return (
        <div id ="navbar">
           <NavLink id="homeLink" to="/">
            Home
           </NavLink>
           <NavLink id ="aboutLink" to="/about">
            About
           </NavLink>
           <NavLink id ="portfolioLink" to="/portfolio">
            Portfolio
           </NavLink>
        </div>
    )

    
}

export default Navbar;