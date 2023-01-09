import "./style.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDUhLxf7edV_ryys8daufxo_u7ZHilPvvk",
  authDomain: "to-do-list-bope.firebaseapp.com",
  projectId: "to-do-list-bope",
  storageBucket: "to-do-list-bope.appspot.com",
  messagingSenderId: "250756257730",
  appId: "1:250756257730:web:6181e2a6396e970685a85b",
  measurementId: "G-VBQ8W1DLJ5",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initial page load functions

import { setTheme } from "./theme";

import { homeMaker } from "./home";

import { displayProjects } from "./display-projects";

import { newProject } from "./project-form";

import { edit } from "./edit";

// Before loading page, check to see if user has set a theme

let currentTheme = localStorage.getObj("theme");

console.log(currentTheme);

if (currentTheme === null) {
  localStorage.setObj("theme", "light");
}

document.body.appendChild(homeMaker());

displayProjects();

Storage.prototype.setObj = function (key, obj) {
  return this.setItem(key, JSON.stringify(obj));
};
Storage.prototype.getObj = function (key) {
  return JSON.parse(this.getItem(key));
};

const key = "projects";

let currentProjects = localStorage.getObj(key) || [];

// Button for creating a new project

const newProjectButton = document.querySelector(".new-project-button");
newProjectButton.addEventListener("click", function () {
  // Prevents user from opening multiple forms
  const formContainer = document.querySelector(".form-container");
  if (document.body.contains(formContainer)) {
    return;
  }

  newProject();
  newProjectButton.disabled = true;
});

const editProjectButtons = document.querySelectorAll(".edit-project-button");

editProjectButtons.forEach((button) => {
  button.addEventListener("click", () => {
    localStorage.setObj(key, currentProjects);

    const formContainer = document.querySelector(".form-container");

    if (document.body.contains(formContainer)) {
      return;
    }

    let type = "project";
    let index = button.id;
    let title = currentProjects[index].title;
    let description = currentProjects[index].description;
    let dueDate = currentProjects[index].dueDate;
    let priority = currentProjects[index].priority;

    document.body.appendChild(
      edit(type, index, title, description, dueDate, priority)
    );
  });
});

document.querySelector(".theme-toggle").addEventListener("click", setTheme);
