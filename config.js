import firebase from 'firebase';

// adicione SDK do Firebase
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGMbJ7PdM1WHM3VJE0eUZkMcHNXi7_GAI",
  authDomain: "vap1-26f24.firebaseapp.com",
  projectId: "vap1-26f24",
  storageBucket: "vap1-26f24.appspot.com",
  messagingSenderId: "896357967190",
  appId: "1:896357967190:web:898aa3b83644da088d62f7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();