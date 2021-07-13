
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
`

const WrapperHiglightedComponent = styled(Wrapper)`
    &&& .dropDownMenu > :nth-child(1) {
        color: yellow;
    }
`



export default function ProjectDropDown(props) {
    
    function handleProjectClick() {
        props.onProjectClick(props.project);
    }

    function getHeadingComponent(project) {
        return <button onClick={handleProjectClick}>
            {project.title}
        </button>;
    }

    function getChildrenComponents(project) {
        const components = [];
        project.toDos.forEach(toDo => components.push(<div key={toDo.key}>{toDo.title}</div>));
        return components;
    }

    const InnerContent = (
        <DropDownMenu headingComponent={getHeadingComponent(props.project)}
            childrenComponents={getChildrenComponents(props.project)}/>
    );

    console.log(props.shouldHighlight);
    if (props.shouldHighlight) {
        return (
            <WrapperHiglightedComponent>
                {InnerContent}
            </WrapperHiglightedComponent>
        );
    }

    return (
        <Wrapper>
            {InnerContent}
        </Wrapper>
    );
}