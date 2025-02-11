// Import Firebase Modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-app.js";
import { getFirestore, collection, addDoc, serverTimestamp, getDoc, doc, onSnapshot, orderBy, query } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-firestore.js";
import { getAuth, onAuthStateChanged,signOut } from "https://www.gstatic.com/firebasejs/11.1.0/firebase-auth.js";

// Firebase Configuration
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
const auth = getAuth();
const db = getFirestore(app);

// References
const commentsCollection = collection(db, "comments");
const Comment_con = document.getElementById('Comment_con');
const commentInput = document.getElementById('commentid');
const addCommentButton = document.getElementById('addComment');
const dlsName1 = document.getElementById("dlsName1");
const dlsName2 = document.getElementById("dlsName2");
const dlsName3 = document.getElementById("dlsName3");
const dlsName4 = document.getElementById("dlsName4");



// Monitor Authentication State
onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            console.log("User Logged In:", user);
            const id = user.uid;
            const docRef = doc(db, "createUser", id); 
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
                let userName = docSnap.data().uname.toUpperCase();
                dlsName1.innerHTML = userName;
                dlsName2.innerHTML = userName;
                dlsName3.innerHTML = userName;
                dlsName4.innerHTML = userName;
                console.log("User Name:", userName);
            } else {
                console.log("No user document found in Firestore.");
            }
            
        } catch (error) {
            console.error("Error fetching user data:", error);
        }

        // Load Comments After Authentication
        displayAllComments();
    } else {
        Comment_con.innerHTML = "<h2>Please log in to see comments</h2>";
    }
});


// Add Comment Function
addCommentButton.addEventListener('click', addComment);
commentid.addEventListener('keydown',  ()=>{
    if (event.key === "Enter") {
        addComment()
        // console.log(Event);
        
    }
});

async function addComment() {
    const commentValue = commentInput.value.trim();
    const user = auth.currentUser;

    if (!user || !commentValue) {
        alert("You must be logged in and enter a comment.");
        return;
    }

    try {
        const userDoc = await getDoc(doc(db, "createUser", user.uid));
        if (!userDoc.exists()) {
            throw new Error("User data not found.");
        }

        await addDoc(commentsCollection, {
            userId: user.uid,
            comment: commentValue,
            timestamp: serverTimestamp()
        });

        commentInput.value = ""; 
    } catch (error) {
        console.error("Error adding comment:", error);
        alert("Error adding comment. Please try again.");
    }
}



// Display Comments
function displayComment(commentData) {
    const newCommentDiv = document.createElement('div');
    newCommentDiv.classList.add('datecommit');

    // Convert Firestore Timestamp
    let formattedDate = "Just now";
    if (commentData.timestamp) {
        const date = commentData.timestamp.toDate();
        formattedDate = `${date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })} at 
                         ${date.getHours() % 12 || 12}:${date.getMinutes().toString().padStart(2, '0')} 
                         ${date.getHours() >= 12 ? 'PM' : 'AM'}`;
    }

    newCommentDiv.innerHTML = `
        <p><strong>Your Comment</strong></p>
        <p><a href="#">${formattedDate}</a></p>
        <p>Your comment is awaiting moderation. This is a preview; it will be visible after approval.</p>
        <p>${commentData.comment}</p>
    `;

    Comment_con.appendChild(newCommentDiv);
}

// Display All Comments in Real Time
function displayAllComments() {
    Comment_con.innerHTML = ""; 

    const q = query(commentsCollection, orderBy("timestamp", "desc"));

    onSnapshot(q, (querySnapshot) => {
        Comment_con.innerHTML = ""; 

        querySnapshot.forEach((doc) => {
            const commentData = doc.data();
            displayComment(commentData);
        });
    });
}






//  card display
let cardArray = [
    {
        Image: "../pics/AI-thinking.jpg",
        title: "AI Dominates 2025 Cybersecurity Predictions",
        text: "Experts predict new threats, expanded attack surfaces, and the critical need for secure and responsible AI adoption as it reshapes the cybersecurity landscape. This includes addressing AI-powered attacks and ensuring data privacy in AI systems."
    },
    {
        Image: "../pics/quantum-computing-researcher.jpg",
        title: "Quantum Computing Remains Experimental Despite 2024 Advances: Forrester",
        text: "Quantum computing made significant strides in 2024, but it's yet to demonstrate a practical advantage over classical digital computers, according to Forrester. Challenges remain in error correction and building stable qubits."
    },
    {
        Image: "../pics/thinker.jpg",
        title: "7 Troubling Tech Trends of 2024",
        text: "From overhyped AI gimmicks to privacy erosion and unsustainable hardware practices, here are some of the worst tech trends of 2024. These trends highlight the need for greater scrutiny and responsible development in the tech industry."
    },
    {
        Image: "../pics/smartphone-user-perplexed.jpg",
        title: "Apple, Samsung Users Unimpressed by AI on Their Phones: Survey",
        text: "While artificial intelligence has energized the marketing departments of smartphone makers like Apple and Samsung, it isn't generating much enthusiasm among users, a recent survey reveals. Many find current AI features gimmicky and not essential."
    },
    {
        Image: "../pics/best-in-tech-2024.jpg",
        title: "Standout Tech Products of 2024",
        text: "Many amazing products launched this year, and we’ll cover some of them. One product stood out well above the res..."
    },


    {
        Image: "../pics/intel-new-york-giants.jpg",
        title: "Is Intel the Tech Industry Equivalent of the 2024 New York Giants?",
        text: "These two industry titans are struggling through severe scrutiny and poor performance. Both were once at the top of thei..."
    },
    {
        Image: "../pics/quantum-computing.jpg",
        title: "Google’s Willow Chip Has Quantum Developers Weeping With Joy",
        text: "Willow performed a computation in under five minutes that would take one of today’s fastest supercomputers 10 septillion years -..."
    },
    {
        Image: "../pics/job-search-smartphone.jpg",
        title: "Job Seekers Targeted by Scammers in Mobile Phishing Campaign",
        text: "The campaign discovered by Zimperium zLabs targets Android mobile phones and aims to distribute a variant of the Antidot bankin..."
    },
    {
        Image: "../pics/holiday-gifts.jpg",
        title: "5 Tech Gifts To Brighten Their Holidays",
        text: "Rob Enderle's curated list of standout tech gifts that are sure to impress includes innovative gadgets for every budget, fro..."
    },
    {
        Image: "../pics/IT-team.jpg",
        title: "AI Dominates 2025 Cybersecurity Predictions",
        text: "Experts predict new threats, expanded attack surfaces, and the critical need for secure and responsible AI adoption as it reshapes the cybersecurity landscape. This includes addressing AI-powered attacks and ensuring data privacy in AI systems."
    },
]


//  carousel part
const carouselInner = document.getElementById('carouselInner');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

let currentIndex = 0;


//sign-out part
let signOutUserAccount = document.getElementById('signOutUserAccount')
let signOutUserAccount2 = document.getElementById('signOutUserAccount2')
signOutUserAccount.addEventListener("click", signOutUser)
signOutUserAccount2.addEventListener("click", signOutUser)

async function signOutUser() {
    try {
        await signOut(auth);
        alert("Sign out successful");
        window.location.href = "../index.html"
    } catch (error) {
        console.log(error);
    }
}
let intervalId;


// Dynamically add items to carousel
cardArray.forEach((carousel) => {
    const { Image, title } = carousel;
    carouselInner.innerHTML += `
    <div class="carousel-item"><img src="${Image}" alt="AI"><h2>${title}</h2></div>
  `;
});


// Wait for the DOM to update before calculating item width
setTimeout(() => {
    const carouselItems = document.querySelectorAll('.carousel-item');
    const itemWidth = carouselItems[0].offsetWidth + 20;

    function updateCarousel() {
        carouselInner.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    function startCarousel() {
        intervalId = setInterval(() => {
            currentIndex++;
            if (currentIndex >= carouselItems.length) {
                currentIndex = 0;
            }
            updateCarousel();
        }, 10000);
    }

    function stopCarousel() {
        clearInterval(intervalId);
    }

    nextButton.addEventListener('click', () => {
        stopCarousel();
        currentIndex++;
        if (currentIndex >= carouselItems.length) {
            currentIndex = 0;
        }
        updateCarousel();
        startCarousel();
    });

    prevButton.addEventListener('click', () => {
        stopCarousel();
        currentIndex--;
        if (currentIndex < 0) {
            currentIndex = carouselItems.length - 1;
        }
        updateCarousel();
        startCarousel();
    });

    carouselInner.addEventListener('mouseenter', stopCarousel);
    carouselInner.addEventListener('mouseleave', startCarousel);

    startCarousel();
    updateCarousel();
}, 100); 





// Scroll stories
document.addEventListener("DOMContentLoaded", function () {
    document.querySelectorAll(".story-list-container").forEach(container => {
        const storyList = container.querySelector(".story-list");
        const leftButton = container.parentElement.querySelector(".leftIcon");
        const rightButton = container.parentElement.querySelector(".rightIcon");

        if (storyList && leftButton && rightButton) {
            // Scroll stories to the left
            rightButton.addEventListener("click", function () {
                storyList.scrollBy({ left: -350, behavior: "smooth" });
            });

            // Scroll stories to the right
            leftButton.addEventListener("click", function () {
                storyList.scrollBy({ left: 350, behavior: "smooth" });
            });
        }
    });
});
