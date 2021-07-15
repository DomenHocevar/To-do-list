import React, { useState } from "react";
import "./ProjectForm.css";
import "../buttonStyles.css";

export default function ProjectForm(props) {
    const [projectTitleInput, setProjectTitleInput] = useState("");

    function handleChange(event) {
        setProjectTitleInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        const attributesObject = {
            title: projectTitleInput
        }
        props.onSubmit(attributesObject);
        props.turnOffProjectForm();
    }

    return (
        <form id ="projectForm" onSubmit={handleSubmit}>
            <h3>
                Create a project:
            </h3>
            <label htmlFor="projectTitleInput">Project title: <input id="projectTitleInput" type="text" onChange={(event) => handleChange(event)}
            value={projectTitleInput} required/></label>
            <input type="submit" value="Submit" className="submitButton"/>
        </form>
    );
}