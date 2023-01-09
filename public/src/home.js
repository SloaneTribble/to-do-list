function homeMaker(){
    const pageContainer = document.createElement('div');
    pageContainer.classList.add('page-container');

    pageContainer.appendChild(headerMaker());
    pageContainer.appendChild(projectContainerMaker());

    pageContainer.appendChild(footerMaker());

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

    const toggleThemeButton = document.createElement('button');
    toggleThemeButton.className = 'theme-toggle';
    toggleThemeButton.innerText = 'Toggle Theme';

    header.appendChild(toggleThemeButton);

    return header;
}

function projectContainerMaker(){
    const projectContainer = document.createElement('div');
    projectContainer.classList.add('project-container');

    return projectContainer;
}

function footerMaker(){
    const footer = document.createElement('div');
    footer.classList.add('footer');
    let a = document.createElement('a');

    let link = document.createTextNode('Sloane Tribble');

    a.appendChild(link);

    a.title = 'Sloane Tribble';

    a.href = 'https://github.com/SloaneTribble';

    footer.appendChild(a);

    return footer;
}

export {homeMaker};