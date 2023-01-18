// Storage.prototype.setObj = function (key, obj) {
//   return this.setItem(key, JSON.stringify(obj));
// };
// Storage.prototype.getObj = function (key) {
//   return JSON.parse(this.getItem(key));
// };

// const theme = "theme";

import { db } from "./firebase-init";
import { setDoc, getDoc, doc } from "firebase/firestore";

// retrieve data from firestore

const docRef = doc(db, "projects", "all");
const themeRef = doc(db, "theme", "theme");
const themeSnap = await getDoc(themeRef);
const docSnap = await getDoc(docRef);

let currentProjects = docSnap.data().currentProjects;
let fireTheme = themeSnap.data().theme;

async function setTheme() {
  const root = document.documentElement;
  const newTheme = root.classList.contains("dark") ? "light" : "dark";

  root.className = newTheme;

  await setDoc(doc(db, "theme", "theme"), { newTheme });

  // localStorage.setObj(theme, newTheme);

  window.location.reload();
}

export { setTheme };
