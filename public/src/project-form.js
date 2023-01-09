import {form} from './form';

function newProject(){
    document.body.appendChild(form('project', "N/A"));
}

export {newProject};