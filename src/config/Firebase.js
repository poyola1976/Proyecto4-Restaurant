// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyBMNBopgiUuUolMeoduq2yC7h_eJVzrfUk",
//   authDomain: "restaurant-c9-3e049.firebaseapp.com",
//   projectId: "restaurant-c9-3e049",
//   storageBucket: "restaurant-c9-3e049.appspot.com",
//   messagingSenderId: "317944363435",
//   appId: "1:317944363435:web:8d9eb84f9afdba27673aee"
// };

const firebaseConfig = {
  apiKey: "AIzaSyCsxiSJx48IuekYgFenHk-xl7LdH6y5AcA",
  authDomain: "restaurant-92614.firebaseapp.com",
  projectId: "restaurant-92614",
  storageBucket: "restaurant-92614.appspot.com",
  messagingSenderId: "66408003520",
  appId: "1:66408003520:web:54f9e1aa109731cc97fa25"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Servicios que estoy ocupando

export const db = getFirestore(app);