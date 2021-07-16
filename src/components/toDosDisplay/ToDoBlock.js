import React from "react";
import "./ToDoBlock.css";

export default function ToDoBlock(props) {



    return (
        <div className="toDoBlock">
            <h3 className="toDoBlockTitle">{props.toDo.title}</h3>
            <label>Done: <input className="toDoBlockDoneInput" type="checkbox"/></label>
            <div>
                Date: {props.toDo.date}
            </div>
            <button className="toDoBlockDelete">Delete</button>
            <button className="toDoBlockEdit">View more / edit</button>
        </div>
    );
}