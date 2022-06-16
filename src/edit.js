// This file contains very similar code to form.js except that it takes
// different arguments and performs some different activities

import {toDoSubmit} from './todo-submit';
import {editProject} from './edit-project';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

let currentProjects = localStorage.getObj(key) || [];

function edit(type, index, currentTitle, currentDescription, currentDueDate){

    const form = document.createElement("form");
    form.classList.add('project-form');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerText = "To-do";

    const title = document.createElement('input');
    title.type = 'text';
    title.name = 'title';
    title.placeholder = 'Title';
    title.id = 'title';
    title.defaultValue = currentTitle;

    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = 'description';
    descriptionLabel.innerText = "Description: ";

    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';
    description.placeholder = 'Description (<200 characters)';
    description.maxlength = '199';
    description.id = 'description';
    description.defaultValue = currentDescription;

    const dueDateLabel = document.createElement('label');
    dueDateLabel.for= 'due-date';
    dueDateLabel.innerText = "Due date: ";

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'due-date';
    dueDate.id = 'due-date';
    dueDate.defaultValue = currentDueDate;

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority: ';
    priorityLabel.htmlFor = 'priority';

    let priorities = ['low', 'medium', 'high'];

    const select = document.createElement('select');
    select.name = 'priority';
    select.id = 'priority';

    for (const priority of priorities){
        let option = document.createElement('option');
        option.value = priority;
        option.text = priority.charAt(0).toUpperCase() + priority.slice(1);
        select.appendChild(option);
    }

    function handleForm(event) { event.preventDefault(); } 
    form.addEventListener('submit', handleForm);

    const submit = document.createElement('button');
    submit.classList.add('submit');
    submit.type = 'submit';
    submit.innerText = "Submit";
    form.addEventListener('submit', function(){
        
        if(type === 'to-do') {toDoSubmit(index)
        } else if(type === 'project'){
            editProject(index);
            return
        };
        form.reset();
    });
    
    
    form.appendChild(titleLabel);
    form.appendChild(title);

    form.appendChild(descriptionLabel);
    form.appendChild(description);

    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);

    form.appendChild(priorityLabel);
    form.appendChild(select);

    form.appendChild(submit);

    function handleForm(event) {event.preventDefault();}
    form.addEventListener('submit', handleForm);
    

    return form;
}


export{edit};