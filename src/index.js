import "./style.css";

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

// Firebase related

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7V9tyZYedQU-BPuAI7n0tOvmT9y49KWU",
  authDomain: "to-do-list-bdf1f.firebaseapp.com",
  projectId: "to-do-list-bdf1f",
  storageBucket: "to-do-list-bdf1f.appspot.com",
  messagingSenderId: "524590508156",
  appId: "1:524590508156:web:cd061bad4a570a6bb1c1f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

import {
  getAuth,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  query,
  orderBy,
  limit,
  onSnapshot,
  setDoc,
  updateDoc,
  doc,
  serverTimestamp,
} from "firebase/firestore";

// Signs-in User.
async function signIn() {
  // Sign in Firebase using popup auth and Google as the identity provider.
  var provider = new GoogleAuthProvider();
  await signInWithPopup(getAuth(), provider);
}

const signInButton = document.querySelector(".sign-in-button");

signInButton.addEventListener("click", signIn);

// Signs-out of Friendly Chat.
function signOutUser() {
  // Sign out of Firebase.

  console.log("sign");
  signOut(getAuth());
}

const signOutButton = document.querySelector(".sign-out-button");
signOutButton.addEventListener("click", signOutUser);

// Returns the signed-in user's profile Pic URL.
function getProfilePicUrl() {
  return getAuth().currentUser.photoURL || "/images/profile_placeholder.png";
}

// Returns the signed-in user's display name.
function getUserName() {
  return getAuth().currentUser.displayName;
}

const userNameElement = document.querySelector(".user-name");
const userPicElement = document.querySelector(".user-pic");

// Adds a size to Google Profile pics URLs.
function addSizeToGoogleProfilePic(url) {
  if (url.indexOf("googleusercontent.com") !== -1 && url.indexOf("?") === -1) {
    return url + "?sz=150";
  }
  return url;
}

// Triggers when the auth state change for instance when the user signs-in or signs-out.
function authStateObserver(user) {
  if (user) {
    console.log("User");
    // User is signed in!
    // Get the signed-in user's profile pic and name.
    let profilePicUrl = getProfilePicUrl();
    let userName = getUserName();

    // Set the user's profile pic and name.
    userPicElement.style.backgroundImage =
      "url(" + addSizeToGoogleProfilePic(profilePicUrl) + ")";
    userNameElement.textContent = userName;

    // Show user's profile and sign-out button.
    userNameElement.removeAttribute("hidden");
    userPicElement.removeAttribute("hidden");
    signOutButton.removeAttribute("hidden");

    // Hide sign-in button.
    signInButton.setAttribute("hidden", "true");
  } else {
    // User is signed out!
    // Hide user's profile and sign-out button.
    userNameElement.setAttribute("hidden", "true");
    userPicElement.setAttribute("hidden", "true");
    signOutButton.setAttribute("hidden", "true");

    // Show sign-in button.
    signInButton.removeAttribute("hidden");
  }
}

// Initialize firebase auth
function initFirebaseAuth() {
  // Listen to auth state changes.  onAuthStateChanged and getAuth are library functions
  onAuthStateChanged(getAuth(), authStateObserver);
}

initFirebaseAuth();

// END Firebase related
