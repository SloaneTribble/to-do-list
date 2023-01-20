// This module contains a function for pushing a new project to the
// currentProjects array and locally storing that array

// Each time currentProjects is updated, displayProjects() is called
// to ensure that the user sees all of the projects in storage

import Project from "./project";
import { db } from "./firebase-init";
import { setDoc, getDoc, doc } from "firebase/firestore";

// retrieve data from firestore

const docRef = doc(db, "projects", "all");
const docSnap = await getDoc(docRef);

if (docSnap.exists()) {
  console.log("Document data:", docSnap.data().currentProjects);
} else {
  console.log("No data");
}

// if no projects have been added, the database will be empty and
// there won't be a name corresponding to an empty array

let currentProjects = docSnap.data().currentProjects;

if (currentProjects.length > 1) {
  currentProjects.sort(function compare(a, b) {
    let dateA = new Date(a.dueDate);
    let dateB = new Date(b.dueDate);
    return dateA - dateB;
  });

  for (let project in currentProjects) {
    let currentToDos = currentProjects[project].toDos;
    currentToDos.sort(function compare(a, b) {
      let dateA = new Date(a.dueDate);
      let dateB = new Date(b.dueDate);
      return dateA - dateB;
    });
  }
}

console.log("About to call setdoc with:", currentProjects);
await setDoc(doc(db, "projects", "all"), { currentProjects });

async function projectSubmit() {
  // USING GLOBALLY DEFINED PROJECTS

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  const newProject = new Project(title, description, dueDate, priority, false);
  currentProjects.push(newProject);

  console.log("About to call setDoc with:", currentProjects);

  // Transform array of custom objects into array of pure JS objects
  currentProjects = currentProjects.map((obj) => {
    return Object.assign({}, obj);
  });
  await setDoc(doc(db, "projects", "all"), { currentProjects });

  window.location.reload();

  return newProject;
}

export { projectSubmit };
