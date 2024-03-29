import React from "react"
import github from './github.png'
import link from './linkIcon.png'

const ProjectCard = () => {



    return (
        <div class="projectContainer">

<div class="individualProjects">
                <span class="imageContainer">
                    <img src="https://res.cloudinary.com/fsa2/image/upload/v1686774916/portfolio%20site%20images/Screen_Shot_2023-06-14_at_2.26.57_PM_osnobd.png" alt="FlexboxGuide"/>
                </span>
                <h2 class="titles" >Flexbox Guide</h2>
                <h3 class="roles">Developer | June 2023</h3>
                <p class="descriptions">Flexbox Guide is a visual guide for CSS flexbox using cute little plants.</p>
                <div class="projectLinks">
                <a  href="https://github.com/allymitchem/flexboxGuide" target ="_blank">
                <img class="projectGH" src={github} alt="github"/>
                </a>
                <a  href="https://flexbox-guide-tau.vercel.app/" target ="_blank">
                <img class="projectLink" src={link} alt="link"/>
                </a>

                </div>
             </div>


            <div class="individualProjects">
                <span class="imageContainer">
                    <img src="https://res.cloudinary.com/fsa2/image/upload/v1685736779/portfolio%20site%20images/Screen_Shot_2023-06-02_at_1.46.38_PM_mxic0d.png" alt="PictureInPicture"/>
                </span>
                <h2 class="titles" >Picture in Picture</h2>
                <h3 class="roles">Developer | May 2023</h3>
                <p class="descriptions">Picture in Picture enables users to view another window or tab in a smaller viewing window through screen capture from the Screen Capture API. This allows the user to multitask without compromising their entire screen.</p>
                <div class="projectLinks">
                <a  href="https://github.com/allymitchem/pictureInPicture" target ="_blank">
                <img class="projectGH" src={github} alt="github"/>
                </a>
                <a  href="https://allymitchem.github.io/pictureInPicture/" target ="_blank">
                <img class="projectLink" src={link} alt="link"/>
                </a>

                </div>
             </div>

            <div class="individualProjects">
                <span class="imageContainer">
                    <img src="https://res.cloudinary.com/fsa2/image/upload/v1684448158/portfolio%20site%20images/Screen_Shot_2023-05-18_at_4.14.07_PM_esytkn.png" alt="InfiniteScroll"/>
                </span>
                <h2 class="titles" >Unsplash API - Infinite Scroll</h2>
                <h3 class="roles">Developer | May 2023</h3>
                <p class="descriptions">The Unsplash API - Infinite Scroll application allows users to scroll infinitely through randomly generated images. At the initial loading of the site, a custom loading icon appears until the images are ready.</p>
                <div class="projectLinks">
                <a  href="https://github.com/allymitchem/infiniteScroll" target ="_blank">
                <img class="projectGH" src={github} alt="github"/>
                </a>
                <a  href="https://allymitchem.github.io/infiniteScroll/" target ="_blank">
                <img class="projectLink" src={link} alt="link"/>
                </a>

                </div>
             </div>


            <div class="individualProjects">
                <span class="imageContainer">
                    <img src="https://res.cloudinary.com/fsa2/image/upload/v1684447120/portfolio%20site%20images/Screen_Shot_2023-05-18_at_3.58.17_PM_w2z2b3.png" alt="QuoteGenerator"/>
                </span>
                <h2 class="titles" >Quote Generator</h2>
                <h3 class="roles">Developer | May 2023</h3>
                <p class="descriptions">This quote generating app was made with HTML, CSS, and JavaScript. Fetch calls are made to an API to retrieve quotes. User capability includes generating new quotes and tweeting the displayed quote through Twitter integration.</p>
                <div class="projectLinks">
                <a  href="https://github.com/allymitchem/quoteGenerator" target ="_blank">
                <img class="projectGH" src={github} alt="github"/>
                </a>
                <a  href="https://allymitchem.github.io/quoteGenerator/" target ="_blank">
                <img class="projectLink" src={link} alt="link"/>
                </a>
                </div>
             </div>

            <div class="individualProjects">
                <span class="imageContainer">
                    <img src="https://res.cloudinary.com/fsa2/image/upload/v1684446400/portfolio%20site%20images/Screen_Shot_2023-05-18_at_3.46.00_PM_npjyyw.png" alt="Sheds&Dignity"/>
                </span>
                <h2 class="titles" >Sheds & Dignity - A Bookshop</h2>
                <h3 class="roles">Collaborator | December 2022</h3>
                <p class="descriptions">Sheds & Dignity is an e-commerce website selling multiple genres of books. Users can register and login to the website to view previous order history, update their information in their user account and confirm their purchase in the cart view.</p>
                <span class="projectLinks">
                <a  href="https://github.com/allymitchem/capstoneFrontEnd" target ="_blank">
                <img class="projectGH" src={github} alt="github"/>
                </a>
                </span>
             </div>
            
             
            
        </div>
    )
}


export default ProjectCard;