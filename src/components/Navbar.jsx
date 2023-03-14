import React from "react"
import { useNavigate, Navlink } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate
    return (
        <div id ="navbar">
            <h2> I am navbar</h2>
        </div>
    )

    
}

export default Navbar;