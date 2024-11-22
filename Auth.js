 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyCz2E3Mvf1_SrauZ_2iqpeM02X8eZE6ARc",
   authDomain: "proyecto-final-57670.firebaseapp.com",
   projectId: "proyecto-final-57670",
   storageBucket: "proyecto-final-57670.firebasestorage.app",
   messagingSenderId: "401963368177",
   appId: "1:401963368177:web:e01503a84b8091eeab3350"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);


const button = document.getElementById("btn")

button.addEventListener("click", register)

function register(){
const email = document.getElementById("email").value
const password = document.getElementById("password").value


const auth = firebase.auth()
const database = firebase.database()

auth.createUserWithEmailAndPassword(email, password)
.then(function(){
 var user = auth.currentUser

 var database_ref = database.ref()

 var user_data = {
    email: email,
    last_login: Date.now
}

database_ref.child("user/" + user.uid).set(user_data)
})
.catch(function(error) {
 var error_code = error_code
 var error_message = error.message

alert(error_message)
})

}



/* button.addEventListener("click", (event) => {
    event.preventDefault();
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value

    const auth = getAuth()
    const database = getFirestore()

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential)=>{
        const user = userCredential.user;
        const userData = {
            email: email,
            password: password
        };
        alert("Cuenta Creada")

    })

}) */