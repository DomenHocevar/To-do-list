import React, { useState } from "react";
import "./ToDoForm.css";
import "../buttonStyles.css"

export default function ToDoForm(props) {
    const [toDoTitleInput, setToDoTitleInput] = useState((props.editedToDo) ? props.editedToDo.title : "");
    const [priorityInput, setPriorityInput] = useState((props.editedToDo) ? props.editedToDo.priority : "3");
    const [descriptionInput, setDescriptionInput] = useState((props.editedToDo) ? props.editedToDo.description : "");
    const [dateInput, setDateInput] = useState((props.editedToDo) ? props.editedToDo.date : "");
    const [doneInput, setDoneInput] = useState((props.editedToDo) ? props.editedToDo.done : false);

    function handleTitleChange(event) {
        setToDoTitleInput(event.target.value);
    }
    function handlePriorityChange(event) {
        setPriorityInput(event.target.value);
    }
    function handleDescriptionChange(event) {
        setDescriptionInput(event.target.value);
    }

    function handleDateChange(event) {
        setDateInput(event.target.value);
    }

    function handleDoneChange(event) {
        setDoneInput(event.target.checked);
    }


    
    function handleSubmit(event) {
        event.preventDefault();

        const attributesObject = {
            title: toDoTitleInput,
            priority: priorityInput,
            description: descriptionInput,
            date: dateInput, 
            done: doneInput
        }

        props.onSubmit(attributesObject);
        props.turnOffToDoForm();
    } 

    console.log(toDoTitleInput);
    return (
        <form id ="toDoForm" onSubmit={(event) => handleSubmit(event)}>
            <h3>
                ToDo properties:
            </h3>

            <label htmlFor="toDoTitleInput">ToDo title: <input id="toDoTitleInput" type="text" onChange={(event) => handleTitleChange(event)}
            value={toDoTitleInput}/></label>

            <label htmlFor="priorityInput">Priority: <input id="priorityInput" type="number" onChange={(event) => handlePriorityChange(event)}
            value={priorityInput}
            min="1" max="3"/></label>

            <label htmlFor="descriptionInput" className="putTextAtTopOfInputLabel"><span>Description:</span> <textarea id="descriptionInput" onChange={(event) => handleDescriptionChange(event)}
            value={descriptionInput}/></label>

            <label htmlFor="dateInput">Date: <input id="dateInput" type="date" onChange={(event) => handleDateChange(event)}
            value={dateInput}/></label>

            <label htmlFor="doneInput" className="putTextAtTopOfInputLabel"> <span>Done: </span> <input id="doneInput" type="checkbox" onChange={(event) => handleDoneChange(event)}
            checked={doneInput}/></label>

            <input type="submit" value="Submit" className="submitButton"/>
        </form>
    );
}