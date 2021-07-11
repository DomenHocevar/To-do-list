import Project from "./Project";


export default function ProjectsStorage() {
    const projects = [];
    let nextProjectKey = 0;

    function addProject(title) {
        projects.push(Project(title, nextProjectKey));
        nextProjectKey++;
    }

    function removeProject(key) {
        let target = -1;
        for (let i = 0; i < projects.length; i++) {
            if (projects[i].key == key) {
                target = i;
                break;
            }
        }
        projects.splice(target, 1);
    }

    return {projects, addProject, removeProject};
}