import React from "react";
import "./ToDoBlock.css";

export default function ToDoBlock(props) {



    return (
        <div className="toDoBlock">
            <h3 className="toDoBlockTitle">{props.toDo.title}</h3>
            <label>Done: <input className="toDoBlockDoneInput" type="checkbox" checked={props.toDo.done}
            onChange={(event) => props.onToDoBlockDoneChange(event, props.toDo)}/></label>
            <div className="toDoBlockDateDiv">
                Date: {props.toDo.date}
            </div>
            <button className="toDoBlockDelete" onClick={() => props.onToDoBlockDeleteClick(props.toDo)}>Delete</button>
            <button className="toDoBlockEdit" onClick={() => props.onToDoBlockEditClick(props.toDo)}>View more / edit</button>
        </div>
    );
}