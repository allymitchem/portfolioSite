import React from "react";
import email from './email.png'
import linkedin from './linkedin.png'
import github from './github.png'

const Footer = () => {
    return (
        <div id="footer">
            
            <a href="mailto:allysonmitchem@gmail.com" target ="_blank">
                <img id="footerIcons" src={email} alt="email"/>
            </a>
            <a href="https://www.linkedin.com/in/allysonmitchem/" target ="_blank">
                <img  id="footerIcons" src={linkedin} alt="linkedIn"/>
            </a>
            <a href="https://github.com/allymitchem" target ="_blank">
                <img id="footerIcons" src={github} alt="github"/>
            </a>

      
        </div>
    )
}

export default Footer;