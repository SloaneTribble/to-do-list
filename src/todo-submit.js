// This module contains a function for pushing a new todo to the
// a given project in the currentProjects array and then locally storing that array

// Each time currentProjects is updated, displayProjects() is called
// to ensure that the user sees all of the projects in storage
import { displayProjects } from "./display-projects";

import ToDo from "./todo";
import { db } from "./firebase-init";
import { setDoc, getDoc, doc } from "firebase/firestore";

const docRef = doc(db, "projects", "all");
const docSnap = await getDoc(docRef);
let currentProjects = docSnap.data().currentProjects;

// Storage.prototype.setObj = function (key, obj) {
//   return this.setItem(key, JSON.stringify(obj));
// };
// Storage.prototype.getObj = function (key) {
//   return JSON.parse(this.getItem(key));
// };

// const key = "projects";

async function toDoSubmit(index) {
  // If currentProjects is null, assign an empty array
  // Check for the latest info whenever this function is called

  let project = currentProjects[index];

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  let toDo = new ToDo(title, description, dueDate, priority);

  toDo = Object.assign({}, toDo);

  project.toDos.push(toDo);

  // localStorage.setObj(key, currentProjects);

  // Transform array of custom objects into array of pure JS objects
  currentProjects = currentProjects.map((obj) => {
    return Object.assign({}, obj);
  });
  await setDoc(doc(db, "projects", "all"), { currentProjects });

  window.location.reload();

  return toDo;
}

export { toDoSubmit };
