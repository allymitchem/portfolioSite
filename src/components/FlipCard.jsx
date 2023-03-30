import React, {useState} from "react";

const cardInfo =[
    {
        id: 1,
        imageSrc: "https://res.cloudinary.com/fsa2/image/upload/v1670130227/Site%20Images/Logo_for_Website_1_2_xnx2hf.png",
        title: "Sheds & Dignity",
        links: [
            {text: "Deployed", url: "https://graceshopperfrontend.onrender.com"},

        ],
        description: "Sheds & Dignity is an e-commerce website selling multiple genres of books. Users can register and login to the website to view previous order history, update their information in their user account and confirm their purchase in the cart view.",
        features: [
            "Developed using the PERN stack",
            "The backend consisted of a PostgreSQL database, and an Express implemented API",
            "React.js was used to build the frontend of the website",
            "Within our group, I focused within the users aspect of the site, both backend and frontend, while also working on the admin view and overall design of the site"
        ]
    }
]
const FlipCard = () => {
    //need to create new id for each new card created so that flip works independently
    const [cards, setCards] = useState([
        {id: 1, 
        isFlipped: false,
        imageSrc: cardInfo[0].imageSrc,
        title: cardInfo[0].title,
        links: cardInfo[0].links,
        description: cardInfo[0].description,
        features: cardInfo[0].features
},
        {id: 2, isFlipped: false}
    ])
    const handleClick =(id)=> {
        const updatedCards = cards.map((card) => {
            if (card.id === id){
                return { ...card, isFlipped: !card.isFlipped}
            }
            return card
        })
        setCards(updatedCards)
    }
return (
    <div className="cardGrid">
    {cards.map((card) => (
        <div
            key={card.id}
            className={`card ${card.isFlipped ? "is-flipped" : ""}`}
            onClick={() => handleClick(card.id)}
        >
            <div id="cardFront">
                <img
                    className="siteImage"
                    src={card.imageSrc}
                />
            </div>
            <div id="cardBack">
                <h3 className="projectTitle">
                    <b>Sheds & Dignity - A Bookshop</b>
                </h3>
                <p className="roleDate">
                    <b>Collaborator | December 2022</b>
                </p>
                <div className="allLinks">
                    <a className="links" href="https://graceshopperfrontend.onrender.com">
                        Deployed
                    </a>
                    <a className="links" href="https://github.com/allymitchem/capstoneFrontEnd">
                        Front End
                    </a>
                    <a className="links" id="lastLink" href="https://github.com/allymitchem/capstoneBackEnd">
                        Back End
                    </a>
                </div>
                <p>
                    <i>Sheds & Dignity</i> is an e-commerce website selling multiple genres of books. Users can
                    register and login to the website to view previous order history, update their information in
                    their user account and confirm their purchase in the cart view.
                </p>
                <ul>
                    <li>Developed using the PERN stack</li>
                    <li>The backend consisted of a PostgreSQL database, and an Express implemented API</li>
                    <li>React.js was used to build the frontend of the website</li>
                    <li>
                        Within our group, I focused within the users aspect of the site, both backend and
                        frontend, while also working on the admin view and overall design of the site
                    </li>
                </ul>
            </div>
        </div>
    ))}
        
      
        
{/*        
        <div  
             className={`card ${cards[1].isFlipped ? "is-flipped" : ""}`} 
             onClick={() => handleClick(cards[1].id)}>
        <div id="cardFront">
           <img className="siteImage" src="https://res.cloudinary.com/fsa2/image/upload/v1680122737/portfolio%20site%20images/tictactoe_meerot.png"/>
        </div>
        <div id="cardBack">
        
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
          
          
        
        </div>
     
   </div> */}
 </div>       
)
}

export default FlipCard;