import React from "react";

const Home = ({isHomePage}) => {
    const homeStyles = {
        backgroundImage: isHomePage ? 'url("https://res.cloudinary.com/fsa2/image/upload/v1684522228/portfolio%20site%20images/background-portfolio_xi4c3s.png")' : '',
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        }


    return (
        <div style={homeStyles}>
            <span id="home">
            <h1 id="name"> Allyson Mitchem</h1>
            <p id="title">Full Stack Web Developer </p>
            </span>
        </div>
    )

    
}

export default Home;