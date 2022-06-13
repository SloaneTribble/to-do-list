import Project from './project';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

// If currentProjects is null, assign an empty array
let currentProjects = localStorage.getObj(key) || [];


function projectSubmit(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    const newProject = new Project(title, description, dueDate, priority);
    currentProjects.push(newProject);

    localStorage.setObj(key, currentProjects);  


    return newProject;
}

export {projectSubmit};