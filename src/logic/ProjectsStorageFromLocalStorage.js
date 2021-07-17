import Project from "./Project";
import ProjectFromLocalStorage from "./ProjectFromLocalStorage";


export default function ProjectsStorageFromLocalStorage(localStorageCopy) {
    this.projects = generateProjects();
    this.nextProjectKey = localStorageCopy.nextProjectKey;

    function generateProjects() {
        const projects = [];
        localStorageCopy.projects.forEach(project => {
            projects.push(new ProjectFromLocalStorage(project));
        })
        return projects;
    }

    function addProject(title) {
        this.projects.push(new Project(title, this.nextProjectKey));
        this.nextProjectKey++;
    }

    function removeProject(key) {
        let target = -1;
        for (let i = 0; i < this.projects.length; i++) {
            if (this.projects[i].key == key) {
                target = i;
                break;
            }
        }
        this.projects.splice(target, 1);
    }

}

ProjectsStorageFromLocalStorage.prototype.addProject = function(title) {
    this.projects.push(new Project(title, this.nextProjectKey));
    this.nextProjectKey++;
}

ProjectsStorageFromLocalStorage.prototype.removeProject = function(key) {
    let target = -1;
    for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].key == key) {
            target = i;
            break;
        }
    }
    this.projects.splice(target, 1);
}