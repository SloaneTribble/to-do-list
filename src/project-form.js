import {form} from './form';

function newProject(){
    const projectContainer = document.querySelector('.project-container');
    projectContainer.appendChild(form('project'));
}

export {newProject};