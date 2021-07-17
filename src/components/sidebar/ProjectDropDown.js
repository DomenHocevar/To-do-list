
import styled from "styled-components";
import {DropDownMenu, Style1, Transition2, OnHover} from "react-components-library-dropdownmenu";
import React from "react";


const Wrapper = styled.div`
    ${Style1}
    ${OnHover}
    ${Transition2}
    

    &&& button {
        cursor: pointer;
    }

    &&& .dropDownMenu > :nth-child(1) {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
    }

    &&&&& .dropDownMenu > :nth-child(1) .projectDeleteButton{
        margin-right: 10px;
        background-color: rgb(247, 71, 71);
        width: fit-content;
        color:white;
        padding: 2px;
    }
`

const WrapperHiglightedComponent = styled(Wrapper)`
    &&& .dropDownMenu > :nth-child(1) {
        color: yellow;
        background-color: rgb(45, 101, 138);
    }
`


const WrapperDefaultProjectHeadingComponent = styled.div`
    &&& .dropDownMenu > :nth-child(1) {
        display: initial;
    }
`



export default function ProjectDropDown(props) {
    
    function handleProjectClick(event) {
        if (event.target.className === "projectDeleteButton") return;
        props.onProjectClick(props.project);
    }

    function getHeadingComponent(project) {
        return  (
                <button onClick={handleProjectClick}>
                    { project.key != 0 &&
                    <div className="projectDeleteButton" onClick = {() => props.onProjectDeleteClick(project)}>
                        delete
                    </div>
                    }  
                    {project.title}
                </button>
            
        );
    }

    function getChildrenComponents(project) {
        const components = [];
        project.toDos.forEach(toDo => components.push(<div key={toDo.key}>{toDo.title}</div>));
        return components;
    }

    let innerContent = (
        <DropDownMenu headingComponent={getHeadingComponent(props.project)}
            childrenComponents={getChildrenComponents(props.project)}/>
    );

    if (props.project.key === 0) {
        innerContent = <WrapperDefaultProjectHeadingComponent> {innerContent} </WrapperDefaultProjectHeadingComponent>;
    }

    if (props.shouldHighlight) {
        return (
            <WrapperHiglightedComponent>
                {innerContent}
            </WrapperHiglightedComponent>
        );
    }

    return (
        <Wrapper>
            {innerContent}
        </Wrapper>
    );
}