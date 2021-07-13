
import './App.css';
import React, {useState} from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Project from 'logic/Project';
import ToDo from 'logic/ToDo';
import ProjectsStorage from 'logic/ProjectsStorage';
import FormContainer from './forms/FormContainer';
import ProjectForm from './forms/projectForm/ProjectForm';
import ToDosSection from './toDosDisplay/ToDosSection';

export default function App() {
  const [projectsStorage, setProjectsStorage] = useState(initProjectsStorage());
  const [showFormType, setShowFormType] = useState("");
  const [showProject, setShowProject] = useState(null);
  if (projectsStorage.projects.length != 0) {
    if (showProject === null) {
      setShowProject(projectsStorage.projects[0]);
    }
  } else {
    setShowProject(null);
  }

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

  function handleProjectClick(project) {
    setShowProject(project);
  }


  let showProjectKey = null;
  if (showProject != null) showProjectKey = showProject.key;
  return (

    <div id="content">
        {console.log(projectsStorage.projects)}
        <Header/>
        <div id="sidebarAndToDosSection">
          <Sidebar projects={projectsStorage.projects}
          turnOnProjectForm={turnOnProjectForm}
          onProjectClick={handleProjectClick}
          showProjectKey={showProjectKey}/>
          <ToDosSection project={showProject}/>
        </div>
        {showFormType === "project" && <FormContainer turnOffProjectForm={turnOffForm} form={<ProjectForm onSubmit={handleFormSubmit} turnOffProjectForm={turnOffForm}/>}/>}
    </div>
  );
}


