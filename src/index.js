import Project from './project';

let newProject = new Project("Dude", "Bro", 12, 1, "Hey");

newProject.addToDo("To do1");

newProject.addToDo("To do 2");

newProject.getToDos();

console.log("Yes");