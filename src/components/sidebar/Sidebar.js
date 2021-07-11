import React from "react";
import ProjectDropDown from "./ProjectDropDown";
import "./Sidebar.css";

export default function Sidebar(props) {
    
    function getProjectComponents(projects) {
        console.log(projects);
        return projects.map(project => <ProjectDropDown project={project} key={project.key}></ProjectDropDown>)
    }

    return (
        <section id="sidebarSection">
            <h2>
                Projects: <button onClick={props.turnOnProjectForm}>+</button>
            </h2>
            {getProjectComponents(props.projects)}
        </section>
    );
}