import React from "react"
import { useNavigate, Navlink, NavLink } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate
    return (
        <div id ="navbar">
           <NavLink id="home" to="/">
            Home
           </NavLink>
           <NavLink id ="about" to="/about">
            About
           </NavLink>
           <NavLink id ="portfolio" to="/portfolio">
            Portfolio
           </NavLink>
        </div>
    )

    
}

export default Navbar;