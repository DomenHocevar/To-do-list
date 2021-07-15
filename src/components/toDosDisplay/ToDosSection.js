import React from "react";
import ToDosByPriority from "./ToDosByPriority";
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
            <div id="toDosContainer">
                <ToDosByPriority/>
                <ToDosByPriority/>
                <ToDosByPriority/>
            </div>
        </section>
    );
}