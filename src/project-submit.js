// This module contains a function for pushing a new project to the 
// currentProjects array and locally storing that array

// Each time currentProjects is updated, displayProjects() is called
// to ensure that the user sees all of the projects in storage

import Project from './project';
import {displayProjects} from './display-projects';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";


let currentProjects = localStorage.getObj(key) || [];
currentProjects.sort(function compare(a, b) {
        let dateA = new Date(a.dueDate);
        let dateB = new Date(b.dueDate);
        return dateA - dateB;
    });

localStorage.setObj(key, currentProjects); 

function projectSubmit(){

    // If currentProjects is null, assign an empty array
    let currentProjects = localStorage.getObj(key) || [];
    
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    const newProject = new Project(title, description, dueDate, priority);
    currentProjects.push(newProject);

    localStorage.setObj(key, currentProjects);  
    displayProjects();
    window.location.reload();

    return newProject;
}

export {projectSubmit};