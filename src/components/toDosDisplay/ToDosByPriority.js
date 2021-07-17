import React from "react";
import ToDoBlock from "./ToDoBlock";
import "./ToDosByPriority.css";
import {compareByDate as ToDo_compareByDate} from "../../logic/ToDo";

export default function ToDosByPriority(props) {

    const content = [];
    const toDosCopy = props.toDos.slice();
    toDosCopy.sort(ToDo_compareByDate);
    

    toDosCopy.forEach(toDo => {
        if (toDo.priority == props.priority) {
            content.push(<ToDoBlock toDo={toDo} key={toDo.key} onToDoBlockDoneChange={props.onToDoBlockDoneChange}
                onToDoBlockDeleteClick={props.onToDoBlockDeleteClick} onToDoBlockEditClick={props.onToDoBlockEditClick}/>)
        }
    })
    

    return (
        <div className={"toDosByPriority"}>
            {content}
        </div>
    );
}

