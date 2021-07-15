import Project from "./Project";


export default function ProjectsStorage() {
    this.projects = [];
    this.nextProjectKey = 0;

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

ProjectsStorage.prototype.addProject = function(title) {
    this.projects.push(new Project(title, this.nextProjectKey));
    this.nextProjectKey++;
}

ProjectsStorage.prototype.removeProject = function(key) {
    let target = -1;
    for (let i = 0; i < this.projects.length; i++) {
        if (this.projects[i].key == key) {
            target = i;
            break;
        }
    }
    this.projects.splice(target, 1);
}
