
// sign in part
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6J3iRzEyStm2TYk2LbluclZZdjx5wrzU", // Replace with your actual API key
    authDomain: "blog-d0b19.firebaseapp.com",
    projectId: "blog-d0b19",
    storageBucket: "blog-d0b19.firebasestorage.app",
    messagingSenderId: "223199572346",
    appId: "1:223199572346:web:d0bc53967660154f0026c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firestore
const db = getFirestore(app);
// Initialize auth
const auth = getAuth();
//collection reference
const colRef = collection(db, "createUser");

signInForm.addEventListener("submit", signInUser);

let message = document.getElementById("message")

async function signInUser(e) {
    e.preventDefault();
    let { email, password } = signInForm; // Use email and password fields, not username

    message.style.color = "black"
    message.textContent = "Sending user info please wait..."
    console.log("Sending user info please wait...");

    try {
        const userCredential = await signInWithEmailAndPassword(auth, email.value, password.value);
        const user = userCredential.user;

        // You can now use the user object, e.g., get the UID
        console.log("User signed in:", user.uid);

        // Redirect or perform other actions after successful sign-in
        window.location.href = "./blog.html";
        console.log(window.location.href);
        message.style.color = "black"
        message.textContent = "Sign in successful!"
        // alert("Sign in successful!");

    } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;

        if (error.message === "Firebase: Error (auth/invalid-credential).") {
            message.style.color = "red"
            message.textContent = "Sign in failed: " + "Invalid email/password."
            email.value = ""
            password.value = ""
            return
        }
        if (error.message === "Firebase: Error (auth/network-request-failed).") {
            message.style.color = "red"
            message.textContent = "Network connection is slow. please try again later"
            return
        }

        console.error("Sign in error:", errorCode, errorMessage);
        // alert("Sign in failed: " + errorMessage); 
    }
}



