import { displayProjects } from "./display-projects";
import { db } from "./firebase-init";
import { setDoc, getDoc, doc } from "firebase/firestore";

// retrieve data from firestore

const docRef = doc(db, "projects", "all");
const docSnap = await getDoc(docRef);

let currentProjects = docSnap.data().currentProjects;

// Sort projects based on date

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

async function editToDo(index, toDo) {
  let projectToDos = currentProjects[index].toDos;

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  console.log(toDo);

  projectToDos[toDo].title = title;
  projectToDos[toDo].description = description;
  projectToDos[toDo].dueDate = dueDate;
  projectToDos[toDo].priority = priority;

  currentProjects[index].toDos = projectToDos;

  await setDoc(doc(db, "projects", "all"), { currentProjects });

  //  await displayProjects();
  // window.location.reload();

  return;
}

export { editToDo };
