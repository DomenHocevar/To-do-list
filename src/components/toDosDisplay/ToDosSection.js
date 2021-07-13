import React from "react";
import "./ToDosSection.css";

export default function ToDosSection(props) {


    return (
        <section id="toDosSection">
            <h2>
                {props.project.title}
            </h2>
        </section>
    );
}