Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

// If currentProjects is null, assign an empty array
let currentProjects = localStorage.getObj(key) || [];

function displayProjects(){

    for(let i = 0; i < currentProjects.length; i++) {

        const projectContainer = document.querySelector(".project-container");

        const project = document.createElement('div');
        project.classList.add('project-cell');

        const title = document.createElement('div');
        title.id = i + 1;
        title.innerText = "Title: " + currentProjects[i].title;

        const description = document.createElement('div');
        description.id = i + 1;
        description.innerText = "Description: " + currentProjects[i].description;

        const dueDate = document.createElement('div');
        dueDate.id = i + 1;
        dueDate.innerText = "Due date: " + currentProjects[i].dueDate;

        const priority = document.createElement('div');
        priority.id = i + 1;
        priority.innerText = "Priority: " + currentProjects[i].priority;

        project.appendChild(title);
        project.appendChild(description);
        project.appendChild(dueDate);
        project.appendChild(priority);

        projectContainer.appendChild(project);
    }
}

export {displayProjects};