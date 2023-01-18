// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, getDoc, doc } from "firebase/firestore";

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
const db = getFirestore(app);

// if db is empty, initialize db to have an empty array and theme set to light

const docRef = doc(db, "projects", "all");
const docSnap = await getDoc(docRef);

const themeRef = doc(db, "theme", "theme");
const themeSnap = await getDoc(themeRef);

let currentProjects = [];
let theme = "light";

if (!docSnap.exists()) {
  await setDoc(doc(db, "projects", "all"), { currentProjects });
}

if (!themeSnap.exists()) {
  await setDoc(doc(db, "theme", "theme"), { theme });
}

export { app, db };
