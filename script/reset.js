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




const resetForm = document.getElementById('resetForm');
const errMSG = document.getElementById('errMSG');

resetForm.addEventListener('submit', (e) => {
    e.preventDefault();
    errMSG.style.color = "black"
    errMSG.textContent = "Sending user info please wait...  "
    const email = document.getElementById('email').value;

    sendPasswordResetEmail(auth, email)
        .then(() => {
    errMSG.style.color = "black"
            errMSG.textContent = "Password reset link sent to: " + email + "Please check your inbox (and spam folder)."
            // alert("Password reset link sent to: " + email + "Please check your inbox (and spam folder).");
            resetForm.reset(); // clear the form
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;

            if (errorCode === 'auth/invalid-email') {
    errMSG.style.color = "red"
    errMSG.textContent = "Please enter a valid email address."
                // alert("Please enter a valid email address.");
            } else if (errorCode === 'auth/user-not-found') {
    errMSG.style.color = "red"
    errMSG.textContent = "There is no user record corresponding to this email."
                // alert("There is no user record corresponding to this email.");
            }
            else {
    errMSG.style.color = "red"
    errMSG.textContent = "An error occurred while sending the mail: " + "Unstable network"
                // alert("An error occurred while sending the reset email: " + errorMessage);
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










let signOutUserAccount = document.getElementById('signOutUserAccount')
signOutUserAccount.addEventListener("click", signOutUser)

async function signOutUser() {
    try {
        await signOut(auth);  // Attempt to sign out the user from Firebase authentication
        alert("Sign out successful"); // Show a success message when sign-out is successful
        window.location.href = "./index.html"
    } catch (error) {
        console.log(error); // Log any errors that occur during sign-out
    }
}