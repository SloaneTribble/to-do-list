import {form} from './form';

function newProject(){
    const pageContainer = document.querySelector('.page-container');
    pageContainer.appendChild(form('project', "N/A"));
}

export {newProject};