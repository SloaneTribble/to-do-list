import { db } from "./firebase-init";
import { setDoc, getDoc, doc } from "firebase/firestore";

// retrieve data from firestore

const docRef = doc(db, "projects", "all");
const docSnap = await getDoc(docRef);

let currentProjects = docSnap.data().currentProjects;

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

async function editProject(index) {
  // USING GLOBALLY ASSIGNED PROJECTS VARIABLE

  const title = document.getElementById("title").value;
  const description = document.getElementById("description").value;
  const dueDate = document.getElementById("due-date").value;
  const priority = document.getElementById("priority").value;

  currentProjects[index].title = title;
  currentProjects[index].description = description;
  currentProjects[index].dueDate = dueDate;
  currentProjects[index].priority = priority;

  await setDoc(doc(db, "projects", "all"), { currentProjects });

  window.location.reload();

  return;
}

export { editProject };
