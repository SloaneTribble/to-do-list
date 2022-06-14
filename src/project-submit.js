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
    displayProjects();

    return newProject;
}

export {projectSubmit};