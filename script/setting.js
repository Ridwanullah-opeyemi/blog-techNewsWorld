// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, doc, getDoc,setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
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


// Function to validate input fields using regex
function validateInputs() {
    const nameRegex = /^[a-zA-Z]+$/; // Only letters allowed
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Basic email validation
    const unameRegex = /^[a-zA-Z0-9_]{3,15}$/; // Username: 3-15 chars, letters, numbers, and underscore
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/; // Minimum 6 characters, at least one letter and one number

    // Validate First Name & Last Name
    if (!nameRegex.test(firstNameInput.value)) {
        alert("First name must contain only letters.");
        return false;
    }
    if (!nameRegex.test(lastNameInput.value)) {
        alert("Last name must contain only letters.");
        return false;
    }

    // Validate Email
    if (!emailRegex.test(emailInput.value)) {
        alert("Invalid email format.");
        return false;
    }

    // Validate Username
    if (!unameRegex.test(unameInput.value)) {
        alert("Username must be 3-15 characters and contain only letters, numbers, and underscores.");
        return false;
    }

    // Validate Password & Confirm Password
    if (!passwordRegex.test(passwordInput.value)) {
        alert("Password must be at least 6 characters long and contain at least one letter and one number.");
        return false;
    }
    if (passwordInput.value !== rpasswordInput.value) {
        alert("Passwords do not match.");
        return false;
    }

    return true; // Return true if all validations pass
}



// Add event listener for form submission (for updating data)
settingsForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!validateInputs()) {
        return
    }

    const user = auth.currentUser;
    if (user) {
        try {
            const userDocRef = doc(db, "createUser", user.uid);
            await setDoc(userDocRef, {
                firstName: firstNameInput.value,
                lastName: lastNameInput.value,
                email: emailInput.value,
                uname: unameInput.value,
                // Add other fields as needed
            }, { merge: true }); // Use merge to update existing fields
            alert("Settings updated successfully!");
            location.reload();
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