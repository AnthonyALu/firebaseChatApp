// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBc-q2-J0VfqsPmmctnsdviAne_eEpVqNs",
  authDomain: "jshackathon-7e24b.firebaseapp.com",
  projectId: "jshackathon-7e24b",
  storageBucket: "jshackathon-7e24b.appspot.com",
  messagingSenderId: "624087413389",
  appId: "1:624087413389:web:daf4d93eec0ec56784a8c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const msgScreen = document.getElementById("messages"); //the <ul> that displays all the <li> msgs
const msgForm = document.getElementById("messageForm"); //the input form
const msgInput = document.getElementById("msg-input"); //the input element to write messages
const msgBtn = document.getElementById("msg-btn"); //the Send button

const db = firebase.database();
const msgRef = db.ref("/msgs"); 
//to store data in the msgs folder by creating a reference in database

let name="";
function init() {
  name = prompt("Please enter your name");
}
document.addEventListener('DOMContentLoaded', init);

msgForm.addEventListener('submit', sendMessage);

function sendMessage(e){
    e.preventDefault();
    const text = msgInput.value;
  
      if(!text.trim()) return alert('Please type a message'); //no msg submitted
      const msg = {
          name: name,
          text: text
      };
  
      msgRef.push(msg);
      msgInput.value = "";
  }