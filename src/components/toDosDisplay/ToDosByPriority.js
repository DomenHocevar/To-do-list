import React from "react";
import ToDoBlock from "./ToDoBlock";
import "./ToDosByPriority.css";
import {compareByDate as ToDo_compareByDate} from "../../logic/ToDo";

export default function ToDosByPriority(props) {

    const content = [];
    const toDosCopy = props.toDos.slice();
    if (props.priority == 3) console.log(toDosCopy);
    toDosCopy.sort(ToDo_compareByDate);
    if (props.priority == 3) console.log(toDosCopy);

    toDosCopy.forEach(toDo => {
        console.log(toDo.priority)
        if (toDo.priority == props.priority) {
            content.push(<ToDoBlock toDo={toDo} key={toDo.key}/>)
        }
    })
    

    return (
        <div className={"toDosByPriority"}>
            {content}
        </div>
    );
}

