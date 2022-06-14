import { add, hoursToSeconds } from "date-fns";
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
        project.id = i + 1;

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


        const toDos = document.createElement('button');
        toDos.classList.add('to-do-display');
        toDos.id = i + 1;
        toDos.innerText = "View to-dos";

        const toDoList = displayToDos(i);

        toDos.addEventListener('click', function(){
            project.appendChild(toDoList);
            project.appendChild(hideToDos);
        });

        const hideToDos = document.createElement('button');
        hideToDos.innerText = "Hide to-dos";
        hideToDos.classList.add('to-do-display');
        hideToDos.addEventListener('click', function(){
            project.removeChild(toDoList);
            project.removeChild(hideToDos);
        });


        const addToDo = document.createElement('button');
        addToDo.classList.add('add-to-do-button');
        addToDo.innerText = 'Add to-do';
        addToDo.addEventListener('click', function(){
            project.appendChild(form('todo', i));
        });


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

function displayToDos(index){

    let currentProjects = localStorage.getObj(key) || [];

    let project = currentProjects[index];
    let projectToDos = project.toDos;
    
    const toDoList = document.createElement('div');
    toDoList.classList.add('to-do-list');

    for (const toDo in projectToDos){

        const singleToDo = document.createElement('div');
        singleToDo.classList.add('to-do');

        const title = document.createElement('div');
        title.innerText = "Task: " + projectToDos[toDo].title;

        const description = document.createElement('div');
        description.innerText = "Description: " + projectToDos[toDo].description;

        const dueDate = document.createElement('div');
        dueDate.innerText = "Due date: " + projectToDos[toDo].dueDate;

        const priority = document.createElement('div');
        priority.innerText = "Priority: " + projectToDos[toDo].priority;

        singleToDo.appendChild(title);
        singleToDo.appendChild(description);
        singleToDo.appendChild(dueDate);
        singleToDo.appendChild(priority);

        toDoList.appendChild(singleToDo);
    }

    return toDoList;
}

function remove(index){
    let currentProjects = localStorage.getObj(key) || [];

    currentProjects.splice(index, 1);
    localStorage.setObj(key, currentProjects);
    window.location.reload();
}


export {displayProjects};