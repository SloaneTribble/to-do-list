function homeMaker(){
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');

    pageContainer.appendChild(headerMaker());
    pageContainer.appendChild(projectContainerMaker());

    return pageContainer;
}

function headerMaker(){
    const header = document.createElement('div');
    header.classList.add('header');

    const title = document.createElement('div');
    title.classList.add('title');
    title.innerText = 'To-do List';

    header.appendChild(title);

    const newProjectButton = document.createElement('button');
    newProjectButton.classList.add('new-project-button');
    newProjectButton.innerText = "New Project";

    header.appendChild(newProjectButton);

    return header;
}

function projectContainerMaker(){
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    return projectContainer;
}

export {homeMaker};