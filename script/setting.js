// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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
const auth = getAuth(app);
// Initialize Firestore
const db = getFirestore();


const firstNameInput = document.getElementById('first-name');
const lastNameInput = document.getElementById('last-name');
const emailInput = document.getElementById('email');
const remailInput = document.getElementById('remail');
const unameInput = document.getElementById('uname');
const passwordInput = document.getElementById('password');
const rpasswordInput = document.getElementById('rpassword');
const settingsForm = document.getElementById('updatesec'); // Your form

onAuthStateChanged(auth, async (user) => {
    if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        try {
            const userDocRef = doc(db, "createUser", uid);

            const userDocSnapshot = await getDoc(userDocRef);
            console.log(userDocSnapshot);

            if (userDocSnapshot.exists()) {
                const userData = userDocSnapshot.data();
                // Populate the form fields
                firstNameInput.value = userData.firstName || ''; // Use empty string as default
                lastNameInput.value = userData.lastName || '';
                emailInput.value = userData.email || '';
                remailInput.value = userData.email || '';
                unameInput.value = userData.uname || '';
                // Don't pre-fill password fields for security reasons

                // Set the heading with username
                const heading = document.getElementById('dlsName1');
                const heading2 = document.getElementById('dlsName2');
                const heading3 = document.getElementById('useName');
                if (heading || heading2 || heading3) {
                    heading.textContent = `${userData.uname}`;
                    heading2.textContent = `${userData.uname}`;
                    heading3.textContent = `Settings for ${userData.uname}`;
                }
            } else {
                console.log("No such document!");
                alert("User data not found in Firestore.");
            }
        } catch (error) {
            console.error("Error getting user data:", error);
            alert("An error occurred retrieving your settings.");
        }
    } else {
        // User is signed out
        console.log("User is signed out");
        // Redirect to login page or handle as needed
        window.location.href = "../index.html"
    }
});

// Add event listener for form submission (for updating data)
settingsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const user = auth.currentUser;
    if (user) {
        try {
            const userDocRef = doc(db, "VDS", user.uid);
            await setDoc(userDocRef, {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                email: emailInput.value,
                username: unameInput.value,
                // Add other fields as needed
            }, { merge: true }); // Use merge to update existing fields
            alert("Settings updated successfully!");
        } catch (error) {
            console.error("Error updating settings:", error);
            alert("An error occurred updating your settings.");
        }
    } else {
        alert("No user is currently signed in.");
    }
});






let signOutUserAccount = document.getElementById('signOutUserAccount')
let signOutUserAccount2 = document.getElementById('signOutUserAccount2')
signOutUserAccount.addEventListener("click", signOutUser)
signOutUserAccount2.addEventListener("click", signOutUser)

async function signOutUser() {
    try {
        await signOut(auth);  // Attempt to sign out the user from Firebase authentication
        alert("Sign out successful"); // Show a success message when sign-out is successful
        window.location.href = "../index.html"
    } catch (error) {
        console.log(error); // Log any errors that occur during sign-out
    }
}