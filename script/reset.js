// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
// import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth, sendPasswordResetEmail } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB6J3iRzEyStm2TYk2LbluclZZdjx5wrzU",
    authDomain: "blog-d0b19.firebaseapp.com",
    projectId: "blog-d0b19",
    storageBucket: "blog-d0b19.firebasestorage.app",
    messagingSenderId: "223199572346",
    appId: "1:223199572346:web:d0bc53967660154f0026c3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize auth
const auth = getAuth()




const resetForm = document.getElementById('resetForm'); // Get your form element

resetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
            // Password reset email sent!
            alert("Password reset link sent to: " + email + "Please check your inbox (and spam folder).");
            // Optionally redirect the user or clear the form
            resetForm.reset(); // clear the form
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/invalid-email') {
                alert("Please enter a valid email address.");
            } else if (errorCode === 'auth/user-not-found') {
                alert("There is no user record corresponding to this email.");
            }
            else {
                alert("An error occurred while sending the reset email: " + errorMessage);
            }
            console.error("Error sending password reset email:", errorCode, errorMessage);
        });
});














// const resetForm = document.getElementById('resetForm');

// resetForm.addEventListener('submit', (e) => {
//     e.preventDefault();

//     const email = document.getElementById('email').value;
//     alert("Password reset link sent to: " + email);

// });