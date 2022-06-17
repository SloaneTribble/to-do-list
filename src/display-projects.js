import { add, hoursToSeconds } from "date-fns";

// This module displays what projects are kept in local storage.
// displayProjects() is frequently called to ensure that the user 
// is only able to see data that is currently being stored

import {form} from './form';
import {edit} from './edit';

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

    // Clear the current display to prevent repetition
    projectContainer.innerHTML = '';


    for(let i = 0; i < currentProjects.length; i++) {


        const project = document.createElement('div');
        project.classList.add('project-cell');
        project.id = i;

        const projectDetails = document.createElement('div');
        projectDetails.classList.add('project-details');
        projectDetails.id = i;

        const title = document.createElement('div');
        title.innerText = "Title: " + currentProjects[i].title;

        const description = document.createElement('div');
        description.classList.add('project-description');
        description.innerText = "Description: " + currentProjects[i].description;

        const dueDate = document.createElement('div');
        dueDate.innerText = "Due date: " + currentProjects[i].dueDate;

        // Priority should affect div color

        const priority = document.createElement('div');
        priority.innerText = "Priority: " + currentProjects[i].priority;
        let priorityColor;
        switch(currentProjects[i].priority){
            case 'high': priorityColor = 'high-priority';
            priority.style.fontWeight = "bold";
            break;

            case 'medium': priorityColor = 'medium-priority';
            break;

            case 'low': priorityColor = 'low-priority';
            break;
        }
        project.classList.add(priorityColor);

        const toDoButtonContainer = document.createElement('div');
        toDoButtonContainer.classList.add('to-do-button-container');

        const toDos = document.createElement('button');
        toDos.classList.add('to-do-display');
        toDos.innerText = "View To-dos";

        toDoButtonContainer.appendChild(toDos);

        const toDoList = displayToDos(i);

        toDos.addEventListener('click', function(){

        // Keep track of which tabs are open/closed on refresh
            currentProjects[i].isActive = true;
            localStorage.setObj(key, currentProjects);

            project.appendChild(toDoList);
            toDoButtonContainer.removeChild(toDos);
            toDoButtonContainer.appendChild(hideToDos);
        });
        

        const hideToDos = document.createElement('button');
        hideToDos.innerText = "Hide To-dos";
        hideToDos.classList.add('to-do-display');
        hideToDos.addEventListener('click', function(){
        
        // Keep track of which tabs are open/closed on refresh
            currentProjects[i].isActive = false;
            localStorage.setObj(key, currentProjects);

            project.removeChild(toDoList);
            toDoButtonContainer.removeChild(hideToDos);
            toDoButtonContainer.appendChild(toDos);
        });

        

        const addToDo = document.createElement('button');
        addToDo.classList.add('add-to-do-button');
        addToDo.innerText = 'Add To-do';
        addToDo.addEventListener('click', function(){
            const formContainer = document.querySelector('.form-container');
            if(document.body.contains(formContainer)){return;}
            project.appendChild(form('todo', i));
        });

        const editProject = document.createElement('button');
        editProject.classList.add('edit-project-button');
        editProject.innerText = 'Edit Project';
        editProject.id = i;


        const removeProject = document.createElement('button');
        removeProject.classList.add('remove-project-button');
        removeProject.innerText = 'Remove Project';
        removeProject.addEventListener('click', function(){
            remove(i);
        });


        projectDetails.appendChild(title);
        projectDetails.appendChild(description);
        projectDetails.appendChild(dueDate);
        projectDetails.appendChild(priority);
        projectDetails.appendChild(toDoButtonContainer);
        projectDetails.appendChild(addToDo);
        projectDetails.appendChild(editProject);
        projectDetails.appendChild(removeProject);

        project.appendChild(projectDetails);
        

        projectContainer.appendChild(project);

        if(currentProjects[i].isActive){
            toDos.click();
        }
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
        singleToDo.id = toDo;

        let toDoIndex = toDo;

        const title = document.createElement('div');
        title.innerText = "Task: " + projectToDos[toDo].title;

        const description = document.createElement('div');
        description.innerText = "Description: " + projectToDos[toDo].description;

        const dueDate = document.createElement('div');
        dueDate.innerText = "Due date: " + projectToDos[toDo].dueDate;

        const priority = document.createElement('div');
        priority.innerText = "Priority: " + projectToDos[toDo].priority;

        const removeToDo = document.createElement('button');
        removeToDo.classList.add("remove-to-do-button");
        removeToDo.innerText = "Remove";
        removeToDo.addEventListener('click', function(){
            removeIndividual(toDo, projectToDos, currentProjects);
            window.location.reload();
        }, false);

        const editToDo = document.createElement('button');
        editToDo.classList.add('edit-to-do-button');
        editToDo.innerText = "Edit";
        editToDo.addEventListener('click', function(e){
            document.body.appendChild(edit(
                "to-do",
                index,
                projectToDos[toDo].title,
                projectToDos[toDo].description,
                projectToDos[toDo].dueDate,
                projectToDos[toDo].priority,
                toDoIndex
                ));
        });

        const toDoHeader = document.createElement('div');
        toDoHeader.classList.add('to-do-header');

        

        toDoHeader.appendChild(title);
        toDoHeader.appendChild(dueDate);
        toDoHeader.appendChild(priority);
        toDoHeader.appendChild(editToDo);
        toDoHeader.appendChild(removeToDo);
        singleToDo.appendChild(toDoHeader);
        singleToDo.appendChild(description);
        
        toDoList.appendChild(singleToDo);
    }

    return toDoList;
}

function removeIndividual(e, projectToDos, currentProjects){
    console.log(e);
    projectToDos.splice(e, 1);
    localStorage.setObj(key, currentProjects);
}

function remove(index){
    let currentProjects = localStorage.getObj(key) || [];

    currentProjects.splice(index, 1);
    localStorage.setObj(key, currentProjects);
    window.location.reload();
}


export {displayProjects, removeIndividual};