// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-app.js";
import { getFirestore, collection, doc, setDoc } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-firestore.js";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/11.2.0/firebase-auth.js";

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
// Initialize Firestore
const db = getFirestore(app);
// Initialize auth
const auth = getAuth()
//collection reference
const colRef = collection(db, "createUser")




function validateCheckbox() {
    const robotCheckbox = document.getElementById("robot");

    if (!robotCheckbox.checked) {
        alert("Please confirm that you are not a robot.");
        return false;
    }
    return true;
}




signUpForm.addEventListener("submit", createUserAccount)

async function createUserAccount(e) {
    e.preventDefault()
    if (!validateCheckbox()) {
        return
    }
    let { firstName, lastName, email, remail, uname, password, rpassword, title, companySize, annualSales, businessType } = signUpForm
    let details = {
        firstName: firstName.value,
        lastName: lastName.value,
        email: email.value,
        remails: remail.value,
        uname: uname.value,
        passwords: password.value,
        rpasswords: rpassword.value,
        title: title.value,
        companySize: companySize.value,
        annualSales: annualSales.value,
        businessType: businessType.value
    }
    let {passwords,rpasswords,remails,...detail } = details
    const res = await createUserWithEmailAndPassword(auth, details.email, details.passwords);

    const docRef = doc(colRef, res.user.uid);
    await setDoc(docRef, detail);
    alert("User Account created Successfully")
    window.location.href = "../blog.html"
}



//sending user info, please wait...
// Invalid Captcha!