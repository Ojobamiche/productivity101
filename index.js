 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "",
    authDomain: "playground-5011e.firebaseapp.com",
    databaseURL: "",
    projectId: "playground-5011e",
    storageBucket: ".appspot.com",
    messagingSenderId: "865280258926",
    appId: ""
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// script.js
document.querySelector('.mobile-menu-icon').addEventListener('click', () => {
    document.querySelector('.main-nav ul').classList.toggle('active');
});
