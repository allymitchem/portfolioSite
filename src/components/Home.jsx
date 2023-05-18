import React from "react";

const Home = ({isHomePage}) => {
    const homeStyles = {
        backgroundImage: isHomePage ? 'url("https://res.cloudinary.com/fsa2/image/upload/v1678901603/portfolio%20site%20images/pexels-elias-tigiser-2757549_ngaadk.jpg")' : '',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh"
        }


    return (
        <div  style={homeStyles}>
            <span id="home">
            <h1 id="name"> Allyson Mitchem</h1>
            <p id="title">Full Stack Web Developer </p>
            </span>
        </div>
    )

    
}

export default Home;