import './style.css';

// Initial page load functions

import {setTheme} from './theme';

import {homeMaker} from './home';

import {displayProjects} from './display-projects';

import {newProject} from './project-form';

import {edit} from './edit';



document.body.appendChild(homeMaker());



displayProjects();

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

let currentProjects = localStorage.getObj(key) || [];


// Button for creating a new project


const newProjectButton = document.querySelector('.new-project-button');
newProjectButton.addEventListener('click', function(){
    const formContainer = document.querySelector('.form-container');
    if(document.body.contains(formContainer)){return;}
    newProject();
    newProjectButton.disabled = true;});

const editProjectButtons = document.querySelectorAll('.edit-project-button');


editProjectButtons.forEach((button) => {
    button.addEventListener('click', ()=> {

        localStorage.setObj(key, currentProjects);

        const formContainer = document.querySelector('.form-container');

        if(document.body.contains(formContainer)){return;}


        let type = "project";
        let index = button.id;
        let title = currentProjects[index].title;
        let description = currentProjects[index].description;
        let dueDate = currentProjects[index].dueDate;
        let priority = currentProjects[index].priority;

        document.body.appendChild(edit(type, index, title, description, dueDate, priority));

        
    
    });
});



document.querySelector('.theme-toggle').addEventListener('click', setTheme);






