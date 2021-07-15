import React from "react";
import "./ToDosSection.css";

export default function ToDosSection(props) {


    return (
        <section id="toDosSection">
            <h2>
                {props.project.title}
                <button onClick={props.onAddToDoClick}>
                    Add a ToDo
                </button>
            </h2>
        </section>
    );
}