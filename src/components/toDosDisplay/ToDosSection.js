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
                <ToDosByPriority toDos={props.project.toDos} priority={3} onToDoBlockDoneChange={props.onToDoBlockDoneChange}
                onToDoBlockDeleteClick={props.onToDoBlockDeleteClick} onToDoBlockEditClick={props.onToDoBlockEditClick}/>
                <ToDosByPriority toDos={props.project.toDos} priority={2} onToDoBlockDoneChange={props.onToDoBlockDoneChange}
                onToDoBlockDeleteClick={props.onToDoBlockDeleteClick} onToDoBlockEditClick={props.onToDoBlockEditClick}/>
                <ToDosByPriority toDos={props.project.toDos} priority={1} onToDoBlockDoneChange={props.onToDoBlockDoneChange}
                onToDoBlockDeleteClick={props.onToDoBlockDeleteClick} onToDoBlockEditClick={props.onToDoBlockEditClick}/>
            </div>
        </section>
    );
}