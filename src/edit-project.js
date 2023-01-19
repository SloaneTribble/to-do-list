import { db } from "./firebase-init";
import { setDoc, getDoc, doc } from "firebase/firestore";

// retrieve data from firestore

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

// // Sort projects based on date

// let currentProjects = localStorage.getObj(key) || [];

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

// localStorage.setObj(key, currentProjects);

async function editProject(index) {
  // USING GLOBALLY ASSIGNED PROJECTS VARIABLE
  // If currentProjects is null, assign an empty array
  // let currentProjects = localStorage.getObj(key) || [];

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  currentProjects[index].title = title;
  currentProjects[index].description = description;
  currentProjects[index].dueDate = dueDate;
  currentProjects[index].priority = priority;

  await setDoc(doc(db, "projects", "all"), { currentProjects });

  // localStorage.setObj(key, currentProjects);
  window.location.reload();

  return;
}

export { editProject };
