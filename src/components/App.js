
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
import ToDoForm from './forms/toDoForm/ToDoForm';
import _ from 'lodash';

export default function App() {
  const [projectsStorage, setProjectsStorage] = useState(initProjectsStorage());
  const [showFormType, setShowFormType] = useState("");
  const [showProject, setShowProject] = useState(null);
  const [editedToDo, setEditedToDo] = useState(null);
  if (projectsStorage.projects.length != 0) {
    if (showProject === null) {
      setShowProject(projectsStorage.projects[0]);
    }
  } else {
    setShowProject(null);
  }

  function initProjectsStorage() {
    const projectsStorage = new ProjectsStorage();
    projectsStorage.addProject("Default");
    
    return projectsStorage;
  }

  function turnOnProjectForm() {
    setShowFormType("project");
  }

  function turnOnToDoForm() {
    setShowFormType("toDo");
  }

  function turnOffForm() {
    setShowFormType("");
  }

  

  function handleProjectFormSubmit(attributesObject) {
    const projectsStorageCopy = _.cloneDeep(projectsStorage);
    projectsStorageCopy.addProject(attributesObject.title);
    setProjectsStorage(projectsStorageCopy);
    setShowProject(projectsStorageCopy.projects[projectsStorageCopy.projects.length - 1]);
  }

  function handleToDoFormSubmit(attributesObject) {
    if (!editedToDo) {
      handleAddToDoFormSubmit(attributesObject);
    } else {
      handleEditToDoFormSubmit(attributesObject);
    }
  }

  function handleAddToDoFormSubmit(attributesObject) {
    const projectsStorageCopy = _.cloneDeep(projectsStorage);
    let showProjectCopy = projectsStorageCopy.projects[0];
    projectsStorageCopy.projects.forEach(project => {
      if (project.key === showProject.key) showProjectCopy = project;
    })

    

    const toDo = ToDo();
    Object.keys(attributesObject).forEach(function(key) {
      toDo[key] = attributesObject[key];
    });
    showProjectCopy.addToDo(toDo);

    setProjectsStorage(projectsStorageCopy);
    setShowProject(showProjectCopy);
  }

  function handleEditToDoFormSubmit(attributesObject) {

  }

  function handleProjectClick(project) {
    setShowProject(project);
  }

  function handleAddToDoClick() {
    setEditedToDo(null);
    turnOnToDoForm();
  }

  function handleEditToDoClick(project) {
    setEditedToDo(project);
    turnOnToDoForm();
  }



  return (

    <div id="content">
        {console.log(projectsStorage.projects)}
        <Header/>
        <div id="sidebarAndToDosSection">
          <Sidebar projects={projectsStorage.projects}
          turnOnProjectForm={turnOnProjectForm}
          onProjectClick={handleProjectClick}
          showProject={showProject}/>
          <ToDosSection project={showProject}
          onAddToDoClick={handleAddToDoClick}/>
        </div>
        {showFormType === "project" && <FormContainer turnOffForm={turnOffForm} form={<ProjectForm onSubmit={handleProjectFormSubmit} turnOffProjectForm={turnOffForm}/>}/>}
        {showFormType === "toDo" && <FormContainer turnOffForm={turnOffForm} form={<ToDoForm onSubmit={handleToDoFormSubmit} turnOffToDoForm={turnOffForm}
        editedToDo={editedToDo}/>}/>}
    </div>
  );
}


