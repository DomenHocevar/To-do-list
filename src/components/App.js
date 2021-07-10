
import './App.css';
import React, {useState} from 'react';
import Header from './header/Header';
import Sidebar from './sidebar/Sidebar';
import Project from 'logic/Project';
import ToDo from 'logic/ToDo';

export default function App() {
  const [projects, setProjects] = useState(getProjects());

  function getProjects() {
    const projects = [];
    projects.push(Project("Ababd", 0));
    projects[0].addToDo(ToDo());
    projects[0].toDos[0].title ="lmao";
    projects.push(Project("Efdsfds", 1));
    projects[1].addToDo(ToDo());
    projects[1].toDos[0].title ="heh";
    projects[1].addToDo(ToDo());
    projects[1].toDos[1].title ="ojj";
    console.log(projects);
    return projects;
  }

  return (
    <div id="content">
        <Header/>
        <Sidebar projects={projects}/>
    </div>
  );
}


