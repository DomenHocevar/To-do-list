import React from "react";
import "./FormContainer.css";

export default function FormContainer(props) {


    function handleFormContainerBackgroundClick(event) {
        if (event.target.id === "formContainerBackground") {
            props.turnOffForm();
        }
    }



    return (
        <div id="formContainerBackground" onClick={handleFormContainerBackgroundClick}>
            <div id="formContainer">
                <button onClick={props.turnOffForm}>X</button>
                {props.form}
            </div>
        </div>
    );
}