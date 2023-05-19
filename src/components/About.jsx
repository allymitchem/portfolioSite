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
            <p id="aboutMeTextBox">
            I am a web developer currently living in Utah, but I was born and raised in Southern California, where I received my Bachelor of Science in biology at California State Polytechnic University, Pomona. Immediately after graduating, I was relocated to a tiny town in the middle of Texas, far away from the environments I was familiar with. This presented challenges using my biology degree outside of the medical field. 
            </p>
            <p id="aboutMeTextBox">
            As a military spouse, being able to maintain career skills that transcend geographical boundaries is extremely important. This has allowed me to acquire a sense of adaptability with my working life. After gaining six years of experience as a medical coder, I was compelled to embark on a new career that ignited my desire to problem solve, alongside creativity. 
            </p>
            <p id="aboutMeTextBox">
            Now, as a recent graduate of the Full-Stack Web Development cohort from Utah State University powered through Fullstack Academy, I am excited to begin my tech journey and expand my skills learning various programming languages. 
            </p>
            <p id="aboutMeTextBox">
            When I am not immersed in coding, you can often me spending time with my little family. Gardening, gaming, reading, and spending time with my exceedingly spoiled cats are just a few things that help bring balance to the force.
            </p>

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