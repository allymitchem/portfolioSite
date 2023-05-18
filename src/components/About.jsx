import React from "react";

import cplusplus from './cplusplus.png';
import htmlJSCSS from './htmlJSCSS.png';
import nodeJS from './nodeJS.png';
import react from './react.png';
import postgreSQL from './postgreSQL.png';

// testtt
const About = () => {
    return (
        <div id ="about" >
            <div  >
            <h2> About Me</h2>
            <p id="aboutMeTextBox">Cat ipsum dolor sit amet, hey! you there, with the hands and i show my fluffy belly but it's a trap! if you pet it i will tear up your hand and eat prawns daintily with a claw then lick paws clean wash down prawns with a lap of carnation milk then retire to the warmest spot on the couch to claw at the fabric before taking a catnap scream for no reason at 4 am. Kitty poochy stand in doorway, unwilling to chose whether to  </p>
            </div>
            <div id="langIcons">
                
                <img id="logoIcons" src={htmlJSCSS} alt="HTML, JS, and CSS"/>
                <img id="logoIcons" src={nodeJS} alt="node.js"/>
                <img id="logoIcons" src={postgreSQL} alt="postgreSQL"/>
                <img id="logoIcons" src={react} alt="react"/>
                <img id="logoIcons" src={cplusplus} alt="c++"/>
            </div>
        </div>
    )

    
}

export default About;