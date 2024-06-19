  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyBxggp0fybIfBWZ9cFN2BKYF6RFA8rrILY",
    authDomain: "playground-5011e.firebaseapp.com",
    databaseURL: "https://playground-5011e-default-rtdb.firebaseio.com",
    projectId: "playground-5011e",
    storageBucket: "playground-5011e.appspot.com",
    messagingSenderId: "865280258926",
    appId: "1:865280258926:web:41ff691eb1e88467f9c77f"
  };

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

// script.js
document.querySelector('.mobile-menu-icon').addEventListener('click', () => {
    document.querySelector('.main-nav ul').classList.toggle('active');
});
