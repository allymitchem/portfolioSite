import React, {useState} from "react";

const FlipCard = () => {
    const [isFlipped, setIsFlipped] = useState(false)
    const handleClick =()=> {
        setIsFlipped(!isFlipped)
    }
return (
    <div className={`card ${isFlipped ? "is-flipped" : ""}`} onClick={handleClick}>
        <div id="cardFront">
           <img className="siteImage" src="https://res.cloudinary.com/fsa2/image/upload/v1670130227/Site%20Images/Logo_for_Website_1_2_xnx2hf.png"/>
        </div>
        <div id="cardBack">
        <div className="cardContainer">
          <h3 className="projectTitle">
            <b>Sheds & Dignity - A Bookshop</b>
          </h3>
          <p className="roleDate">
            <b>Collaborator | December 2022</b>
          </p>
          <div className="allLinks">
            <a className="links" href="https://graceshopperfrontend.onrender.com">Deployed</a>
            <a className="links" href="https://github.com/allymitchem/capstoneFrontEnd">
            Front End
            </a>
          < a className="links" id="lastLink" href="https://github.com/allymitchem/capstoneBackEnd">Back End</a>
          </div>
          <p>
            <i>Sheds & Dignity</i> is an e-commerce website selling multiple genres of books. Users can
            register and login to the website to view previous order history,
            update their information in their user account and confirm their
            purchase in the cart view.
          </p>
          <ul>
            <li>Developed using the PERN stack</li>
            <li>
              The backend consisted of a PostgreSQL database, and an Express
              implemented API
            </li>
            <li>React.js was used to build the frontend of the website</li>
            <li>
              Within our group, I focused within the users aspect of the site,
              both backend and frontend, while also working on the admin view
              and overall design of the site
            </li>
          </ul>
        </div>
        </div>
        {/* <div id="cardFront">
           <img className="siteImage" src=""/>
        </div>
        <div id="cardBack">
        <div className="cardContainer">
          <h3 className="projectTitle">
            <b></b>
          </h3>
          <p className="roleDate">
            <b>Collaborator | December 2022</b>
          </p>
          <div className="allLinks">
            <a className="links" href="">Deployed</a>
            <a className="links" href="">
            Front End
            </a>
          < a className="links" id="lastLink" href="">Back End</a>
          </div>
          <p>
            <i></i> 
          </p>
          <ul>
            <li></li>
            <li>
  
            </li>
            <li></li>
            <li>

            </li>
          </ul>
        </div>
        </div> */}
    </div>
)
}

export default FlipCard;