import './style.css';

// Initial page load function
import {homeMaker} from './home';

import {newProject} from './project-form';

// Project object
import Project from './project';
// To-do object
import ToDo from './todo';

document.body.appendChild(homeMaker());

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



let newProjectButton = document.querySelector('.new-project-button');
newProjectButton.addEventListener('click', newProject);




let project1 = new Project("Dude", "Bro", 12, 1, "Hey");

let newToDo = new ToDo("Wake up", "Time to get up", 13, 1, "Wake!");

project1.addToDo(newToDo);

project1.addToDo("To do 2");


currentProjects.push(project1);

// Accessing individual todos from a given project

// console.log(currentProjects[0].toDos[1]);

// localStorage.setObj(key, currentProjects);



