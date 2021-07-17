import React from "react";
import ProjectDropDown from "./ProjectDropDown";
import "./Sidebar.css";

export default function Sidebar(props) {
    
    function handleProjectClick(project) {
        props.onProjectClick(project);
    }

    function getProjectComponents(projects) {
        return projects.map(project => {
            return (
            <ProjectDropDown project={project} key={project.key} onProjectClick={handleProjectClick}
            shouldHighlight={props.showProject === project}
                onProjectDeleteClick={props.onProjectDeleteClick}
            />);
        });
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