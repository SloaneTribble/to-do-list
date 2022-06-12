import Project from './project';
import ToDo from './todo';
import {test} from './test';

let newProject = new Project("Dude", "Bro", 12, 1, "Hey");

let newToDo = new ToDo("Wake up", "Time to get up", 13, 1, "Wake!");

newProject.addToDo(newToDo);

newProject.addToDo("To do 2");

newProject.getToDos();

test(newProject);

console.log("Yes");