import React, { useState } from "react";
import "./ProjectForm.css";
import "../buttonStyles.css";

export default function ProjectForm(props) {
    const [projectNameInput, setProjectNameInput] = useState("");

    function handleChange(event) {
        setProjectNameInput(event.target.value);
    }

    function handleSubmit(event) {
        event.preventDefault();

        if (projectNameInput === "") {
            alert("Project name should not be left empty!");
            return;
        }

        const attributesObject = {
            title: projectNameInput
        }
        props.onSubmit("project", attributesObject);
        props.turnOffProjectForm();
    }

    return (
        <form id ="projectForm" onSubmit={handleSubmit}>
            <h3>
                Create a project:
            </h3>
            <label htmlFor="projectNameInput">Project name: <input id="projectNameInput" type="text" onChange={(event) => handleChange(event)}/></label>
            <input type="submit" value="Submit" className="submitButton"/>
        </form>
    );
}