import React from "react";

const Portfolio = () => {
    return (
        <div id ="portfolio">
            <div class = "card">
             <img></img>
              <div class="cardContainer">
                <h3 class="projectTitle"><b>Sheds & Dignity - A Bookshop</b></h3>
                <p class="roleDate"><b>Collaborator | December 2022</b></p>
                <a href="https://graceshopperfrontend.onrender.com">Deployed</a>
                <a href="https://github.com/allymitchem/capstoneFrontEnd">Front End</a>
                <a href="https://github.com/allymitchem/capstoneBackEnd">Back End</a>
<p>An e-commerce website selling multiple genres of books. Users can register and login to the website to view previous order history, update their information in their user account and confirm their purchase in the cart view.</p>
<ul>
    <li>Developed using the PERN stack</li>
    <li>The backend consisted of a PostgreSQL database, and an Express implemented API</li>
    <li>React.js was used to build the frontend of the website</li>
    <li>Within our group, I focused within the users aspect of the site, both backend and frontend, while
also working on the admin view and overall design of the site</li>
</ul>

              </div>
            </div>
        </div>
    )

    
}

export default Portfolio;