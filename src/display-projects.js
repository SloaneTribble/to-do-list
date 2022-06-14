import { add, hoursToSeconds } from "date-fns";
import ToDo from './todo';
import {form} from './form';

Storage.prototype.setObj = function(key, obj) {
    return this.setItem(key, JSON.stringify(obj))
}
Storage.prototype.getObj = function(key) {
    return JSON.parse(this.getItem(key))
}

const key = "projects";

// If currentProjects is null, assign an empty array

function displayProjects(){

    let currentProjects = localStorage.getObj(key) || [];

    const projectContainer = document.querySelector(".project-container");

    // Clear the current display to prevent repetition (?)
    projectContainer.innerHTML = '';


    for(let i = 0; i < currentProjects.length; i++) {


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

        // Priority should affect border color

        const priority = document.createElement('div');
        priority.id = i + 1;
        priority.innerText = "Priority: " + currentProjects[i].priority;

        // Need to iterate through to dos, and make sure to allow each one to be crossed off
        // or deleted

        const toDos = document.createElement('div');
        toDos.id = i + 1;
        let toDoTitle = (currentProjects[i].toDos.length > 0)? currentProjects[i].toDos[0].title: "None";
        toDos.textContent = "To dos: " + toDoTitle;

        const addToDo = document.createElement('button');
        addToDo.classList.add('add-to-do-button');
        addToDo.innerText = 'Add to-do';
        addToDo.addEventListener('click', function(){
            project.appendChild(form('todo', i));
        })


        const removeProject = document.createElement('button');
        removeProject.classList.add('remove-project-button');
        removeProject.innerText = 'Remove project';
        removeProject.addEventListener('click', function(){
            remove(i);
        });


        project.appendChild(title);
        project.appendChild(description);
        project.appendChild(dueDate);
        project.appendChild(priority);
        project.appendChild(toDos);
        project.appendChild(addToDo);
        project.appendChild(removeProject);

        projectContainer.appendChild(project);
    }
}

function remove(index){
    let currentProjects = localStorage.getObj(key) || [];

    currentProjects.splice(index, 1);
    localStorage.setObj(key, currentProjects);
    window.location.reload();
}


export {displayProjects};