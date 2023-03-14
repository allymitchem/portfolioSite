import React from "react";
import {Navbar, Portfolio, Home, About} from './'
import {Route, Routes} from "react-router-dom"


const Main = () => {
  return (
    <div id="main">
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
  </div>
  );
};

export default Main;
