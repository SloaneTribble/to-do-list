import {projectSubmit} from './project-submit';


function newProject(){
    const projectContainer = document.querySelector('.project-container');
    projectContainer.appendChild(projectForm());
}

function projectForm(){
    const form = document.createElement("form");
    form.classList.add('project-form');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerText = "Title: ";

    const title = document.createElement('input');
    title.type = 'text';
    title.name = 'title';
    title.placeholder = 'Title';
    title.id = 'title';
    title.required = true;

    const descriptionLabel = document.createElement('label');
    descriptionLabel.for = 'description';
    descriptionLabel.innerText = "Description: ";

    const description = document.createElement('input');
    description.type = 'text';
    description.name = 'description';
    description.placeholder = 'Description (<200 characters)';
    description.maxlength = '199';
    description.id = 'description';
    description.required = true;

    const dueDateLabel = document.createElement('label');
    dueDateLabel.for= 'due-date';
    dueDateLabel.innerText = "Due date: ";

    const dueDate = document.createElement('input');
    dueDate.type = 'date';
    dueDate.name = 'due-date';
    dueDate.id = 'due-date';
    dueDate.required = true;

    const priorityLabel = document.createElement('label');
    priorityLabel.innerText = 'Priority: ';
    priorityLabel.htmlFor = 'priority';

    let priorities = ['low', 'high'];

    const select = document.createElement('select');
    select.name = 'priority';
    select.id = 'priority';
    select.required = true;

    for (const priority of priorities){
        let option = document.createElement('option');
        option.value = priority;
        option.text = priority.charAt(0).toUpperCase() + priority.slice(1);
        select.appendChild(option);
    }

    const submit = document.createElement('button');
    submit.classList.add('project-submit');
    submit.innerText = "Submit";
    submit.onclick = projectSubmit;
    

    
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

export {newProject};