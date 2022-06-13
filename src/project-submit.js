import Project from './project';

function projectSubmit(){
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const dueDate = document.getElementById("due-date").value;
    const priority = document.getElementById("priority").value;

    const newProject = new Project(title, description, dueDate, priority);

    return newProject;
}

export {projectSubmit};