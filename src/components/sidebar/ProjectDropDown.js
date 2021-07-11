
import styled from "styled-components";
import {DropDownMenu, Style1, Transition2, OnHover} from "react-components-library-dropdownmenu";
import React from "react";

const Wrapper = styled.div`
    ${Style1}
    ${OnHover}
    ${Transition2}
`

export default function ProjectDropDown(props) {
    
    function getHeadingComponent(project) {
        return <button style={{cursor:"pointer"}}>{project.title}</button>;
    }

    function getChildrenComponents(project) {
        const components = [];
        project.toDos.forEach(toDo => components.push(<div key={toDo.key}>{toDo.title}</div>));
        return components;
    }

    return (
        <Wrapper>
            <DropDownMenu headingComponent={getHeadingComponent(props.project)}
            childrenComponents={getChildrenComponents(props.project)}/>
        </Wrapper>
    );
}