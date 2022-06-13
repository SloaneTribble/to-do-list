function newProject(){
    const projectContainer = document.querySelector('.project-container');
    projectContainer.appendChild(projectForm());
}

function projectForm(){
    const form = document.createElement("form");
    form.classList.add('project-form');
    form.setAttribute('onSubmit', 'return doForm()');

    const title = document.createElement('input');
    title.setAttribute('type', 'text');
    title.setAttribute('name', 'title');
    title.setAttribute('placeholder', 'Title');

    form.appendChild(title);

    return form;
}

export {newProject};