import React from "react"

const ProjectCard = () => {

    // event listener for scroll
window.addEventListener("scroll", () => {
     window.innerHeight + window.scrollY >= document.body.offsetHeight - 1000

    })


    return (
        <div class="projectContainer">
            <div class="individualProjects">
                <h1>projects</h1>
             </div>
            <div class="individualProjects">
                <h1>projects</h1>
            </div>
            <div class="individualProjects">
                <h1>projects</h1>
            </div><div class="individualProjects">
                <h1>projects</h1>
            </div><div class="individualProjects">
                <h1>projects</h1>
            </div><div class="individualProjects">
                <h1>projects</h1>
            </div><div class="individualProjects">
                <h1>projects</h1>
            </div><div class="individualProjects">
                <h1>projects</h1>
            </div>
            <div class="individualProjects">
                <h1>projects</h1>
            </div>
            <div class="individualProjects">
                <h1>projects</h1>
            </div>
            <div class="individualProjects">
                <h1>projects</h1>
            </div>

        </div>
    )
}


export default ProjectCard;