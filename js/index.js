// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBK7k-wW0Uu5BRQpw9cbhAvr1IysiWnoBk",
  authDomain: "nasawer-f727b.firebaseapp.com",
  projectId: "nasawer-f727b",
  storageBucket: "nasawer-f727b.appspot.com",
  messagingSenderId: "665132480415",
  appId: "1:665132480415:web:2b9929b6cba1450b29efaa",
  measurementId: "G-G13G4TW28S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


// __________________________________ //


let menuToggle = document.querySelector('.toggle');
let navigation = document.querySelector('.navigation')
menuToggle.onclick = function(){
  menuToggle.classList.toggle('active');
  navigation.classList.toggle('active');
}

// add active class in selected list item
let list = document.querySelectorAll('.list');
for (let i = 0; i < list.length; i++) {
  list[i].onclick = function() {
    let j = 0;
    while(j < list.length) {
      list[j++].className = 'list';
    }
    list[i].className = 'list active';
  }
}
