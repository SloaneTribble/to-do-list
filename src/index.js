import './style.css';

// Initial page load function
import {homeMaker} from './home';

import {displayProjects} from './display-projects';

import {newProject} from './project-form';



document.body.appendChild(homeMaker());

displayProjects();


// Button for creating a new project


const newProjectButton = document.querySelector('.new-project-button');
newProjectButton.addEventListener('click', function(){
    newProject();
    newProjectButton.disabled = true;});




