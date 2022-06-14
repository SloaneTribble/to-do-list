import './style.css';

// Initial page load function
import {homeMaker} from './home';

import {displayProjects} from './display-projects';

import {newProject} from './project-form';

// Project object
import Project from './project';
// To-do object
import ToDo from './todo';

document.body.appendChild(homeMaker());

displayProjects();

// Extend default storage-objects to handle arrays and objects

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

// If currentProjects is null, assign an empty array
let currentProjects = localStorage.getObj(key) || [];

localStorage.setObj(key, currentProjects);  


// Button for creating a new project

let newProjectButton = document.querySelector('.new-project-button');
newProjectButton.addEventListener('click', newProject);



// Accessing individual todos from a given project





