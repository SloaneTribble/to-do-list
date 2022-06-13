function newProject(){
    const projectContainer = document.querySelector('.project-container');
    projectContainer.appendChild(projectForm());
}

function projectForm(){
    const form = document.createElement("form");
    form.classList.add('project-form');
    form.setAttribute('onSubmit', 'return doForm()');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute('for', 'title');
    titleLabel.innerText = "Title: ";

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Title');
    title.setAttribute('id', 'title');

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute('for', 'description');
    descriptionLabel.innerText = "Description: ";

    const description = document.createElement('input');
    description.setAttribute('type', 'text');
    description.setAttribute('name', 'description');
    description.setAttribute('placeholder', 'Description (<200 characters)');
    description.setAttribute('maxlength', '199');
    description.setAttribute('id', 'description');

    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute('for', 'due-date');
    dueDateLabel.innerText = "Due date: ";

    const dueDate = document.createElement('input');
    dueDate.setAttribute('type', 'date');
    dueDate.setAttribute('name', 'due-date');
    dueDate.setAttribute('id', 'due-date');

    
    form.appendChild(titleLabel);
    form.appendChild(title);

    form.appendChild(descriptionLabel);
    form.appendChild(description);

    form.appendChild(dueDateLabel);
    form.appendChild(dueDate);

    return form;
}

export {newProject};