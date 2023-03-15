import React from "react";
import {Navbar, Portfolio, Home, About, Footer} from './'
import {Route, Routes} from "react-router-dom"


const Main = () => {
  // const myStyle = {
  //   backgroundImage: "url('https://res.cloudinary.com/fsa2/image/upload/v1678901609/portfolio%20site%20images/pexels-elijah-o_donnell-3473569_sdtafo.jpg')",
  //   height:'100%',
  //   backgroundSize: 'cover',
  //   backgroundRepeat:'no-repeat',

  
  // }
  return (
  

    
    <div id="main" >
      <Navbar/>
      <Routes>
        <Route path="about" 
               element ={
                <About/> 
               }
        />
        <Route path="portfolio"
               element ={
                <Portfolio/>
               }
        />
        <Route path="/"
              element ={
                <Home/>
              }
         />       
      </Routes>
      <Footer id ="footer"/>
  </div>
  );
};

export default Main;
