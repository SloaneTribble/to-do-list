// This module contains a function for pushing a new todo to the 
// a given project in the currentProjects array and then locally storing that array

// Each time currentProjects is updated, displayProjects() is called
// to ensure that the user sees all of the projects in storage

import ToDo from './todo';
import {displayProjects} from './display-projects';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";




function toDoSubmit(index){

    // If currentProjects is null, assign an empty array
    // Check for the latest info whenever this function is called
    let currentProjects = localStorage.getObj(key) || [];

    let project = currentProjects[index];

    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    const toDo = new ToDo(title, description, dueDate, priority);
    project.toDos.push(toDo);

    localStorage.setObj(key, currentProjects);  
    displayProjects();

    window.location.reload();

    return toDo;
}

export {toDoSubmit};