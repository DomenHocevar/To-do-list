
import './App.css';
import React, {useState} from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Project from 'logic/Project';
import ToDo from 'logic/ToDo';
import ProjectsStorage from 'logic/ProjectsStorage';
import FormContainer from './forms/FormContainer';
import ProjectForm from './forms/projectForm/ProjectForm';

export default function App() {
  const [projectsStorage, setProjectsStorage] = useState(initProjectsStorage());
  const [showFormType, setShowFormType] = useState("");

  function initProjectsStorage() {
    const projectsStorage = ProjectsStorage();
    projectsStorage.addProject("Default");
    return projectsStorage;
  }

  function turnOnProjectForm() {
    setShowFormType("project");
  }

  function turnOffForm() {
    setShowFormType("");
  }

  function handleFormSubmit(type, attributesObject) {
    if (type == "project") {
      const projectsStorageCopy = Object.assign({}, projectsStorage);
      projectsStorageCopy.addProject(attributesObject.title);
      setProjectsStorage(projectsStorageCopy);

    } else if (type == "toDo") {

    }
  }

  return (

    <div id="content">
        {console.log(projectsStorage.projects)}
        <Header/>
        <Sidebar projects={projectsStorage.projects}
        turnOnProjectForm={turnOnProjectForm}/>
        {showFormType === "project" && <FormContainer turnOffProjectForm={turnOffForm} form={<ProjectForm onSubmit={handleFormSubmit} turnOffProjectForm={turnOffForm}/>}/>}
    </div>
  );
}


