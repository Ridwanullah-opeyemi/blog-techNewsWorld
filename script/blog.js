






//  card display
let cardArray = [
    {
        Image: "./pics/AI-thinking.jpg",
        title: "AI Dominates 2025 Cybersecurity Predictions",
        text: "Experts predict new threats, expanded attack surfaces, and the critical need for secure and responsible AI adoption as it reshapes the cybersecurity landscape. This includes addressing AI-powered attacks and ensuring data privacy in AI systems."
    },
    {
        Image: "./pics/quantum-computing-researcher.jpg",
        title: "Quantum Computing Remains Experimental Despite 2024 Advances: Forrester",
        text: "Quantum computing made significant strides in 2024, but it's yet to demonstrate a practical advantage over classical digital computers, according to Forrester. Challenges remain in error correction and building stable qubits."
    },
    {
        Image: "./pics/thinker.jpg",
        title: "7 Troubling Tech Trends of 2024",
        text: "From overhyped AI gimmicks to privacy erosion and unsustainable hardware practices, here are some of the worst tech trends of 2024. These trends highlight the need for greater scrutiny and responsible development in the tech industry."
    },
    {
        Image: "./pics/smartphone-user-perplexed.jpg",
        title: "Apple, Samsung Users Unimpressed by AI on Their Phones: Survey",
        text: "While artificial intelligence has energized the marketing departments of smartphone makers like Apple and Samsung, it isn't generating much enthusiasm among users, a recent survey reveals. Many find current AI features gimmicky and not essential."
    },
    {
        Image: "./pics/best-in-tech-2024.jpg",
        title: "Standout Tech Products of 2024",
        text: "Many amazing products launched this year, and we’ll cover some of them. One product stood out well above the res..."
    },


    {
        Image: "./pics/intel-new-york-giants.jpg",
        title: "Is Intel the Tech Industry Equivalent of the 2024 New York Giants?",
        text: "These two industry titans are struggling through severe scrutiny and poor performance. Both were once at the top of thei..."
    },
    {
        Image: "./pics/quantum-computing.jpg",
        title: "Google’s Willow Chip Has Quantum Developers Weeping With Joy",
        text: "Willow performed a computation in under five minutes that would take one of today’s fastest supercomputers 10 septillion years -..."
    },
    {
        Image: "./pics/job-search-smartphone.jpg",
        title: "Job Seekers Targeted by Scammers in Mobile Phishing Campaign",
        text: "The campaign discovered by Zimperium zLabs targets Android mobile phones and aims to distribute a variant of the Antidot bankin..."
    },
    {
        Image: "./pics/holiday-gifts.jpg",
        title: "5 Tech Gifts To Brighten Their Holidays",
        text: "Rob Enderle's curated list of standout tech gifts that are sure to impress includes innovative gadgets for every budget, fro..."
    },
    {
        Image: "./pics/IT-team.jpg",
        title: "AI Dominates 2025 Cybersecurity Predictions",
        text: "Experts predict new threats, expanded attack surfaces, and the critical need for secure and responsible AI adoption as it reshapes the cybersecurity landscape. This includes addressing AI-powered attacks and ensuring data privacy in AI systems."
    },
]

cardArray.forEach((card) => {
    let { Image, title, text } = card
    // console.log(Image);
    cardContainer.innerHTML += `
             <div class="news-card">
                <div class="card-img">
                    <img src="${Image} " width="100%" height="90%" alt="">
                </div>
                <div class="card-text">
                    <h2>${title}</h2>
                    <p>${text}</p>
                </div>
            </div>
    `
})















const newsData = {
    mainNews: {
        image: "./pics/computer-shopping.jpg",
        title: "Biden Bashed Over AI Diffusion Policy",
        text: "An eleventh-hour move by the Biden Administration to regulate how American AI technology is shared with the world is coming under fire from the nation's tech sector..."
    },
    sideNews: [
        { image: "./pics/wildfire-firefighter.jpg", title: "Building Back a Better Los Angeles With Fire-Resistant Homes", text: "For decades, Los Angeles has had some of the strongest building codes for earthquakes and localized fires, but large-scale fire events are new to the region and appear to be..." },
        { image: "./pics/holiday-gifts.jpg", title: "5 Tech Gifts To Brighten Their Holidays", text: "Rob Enderle's curated list of standout tech gifts that are sure to impress includes innovative gadgets for every budget, fro..." },
        { image: "./pics/IT-team.jpg", title: "AI Dominates 2025 Cybersecurity Predictions", text: "Experts predict new threats, expanded attack surfaces, and the critical need for secure and responsible AI adoption as it reshapes the cybersecurity landscape. This includes addressing AI-powered attacks and ensuring data privacy in AI systems." },
        { image: "./pics/computer-shopping.jpg", title: "Biden Bashed Over AI Diffusion Policy", text: "Move by the Biden Administration to regulate how American AI technology is shared with the world is coming under fire from the nation's tech sector..." },
        { image: "./pics/job-search-smartphone.jpg", title: "Job Seekers Targeted by Scammers in Mobile Phishing Campaign", text: "The campaign discovered by Zimperium zLabs targets Android mobile phones and aims to distribute a variant of the Antidot bankin..." }
    ]
};

const mainNewsImage = document.getElementById("main-news-image");
const mainNewsTitle = document.getElementById("main-news-title");
const mainNewsText = document.getElementById("main-news-text");
const sideNewsContainer = document.getElementById("side-news-container");

// Populate Side News
newsData.sideNews.forEach((newsItem, index) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("news-item");
    itemDiv.dataset.index = index;

    const img = document.createElement("img");
    img.src = newsItem.image;
    img.alt = "News Image";

    const p = document.createElement("p");
    p.textContent = newsItem.title;

    itemDiv.appendChild(img);
    itemDiv.appendChild(p);
    sideNewsContainer.appendChild(itemDiv);
});

const sideNewsItems = document.querySelectorAll(".news-item");
let currentNewsIndex = 0;

function updateMainNewsSequentially() {
    // Remove the active class from all side news items
    sideNewsItems.forEach(item => item.classList.remove("active"));

    // Update the main news display
    const currentNews = newsData.sideNews[currentNewsIndex];
    mainNewsImage.src = currentNews.image;
    mainNewsTitle.textContent = currentNews.title;
    mainNewsText.textContent = currentNews.text;

    // Highlight the current news item
    sideNewsItems[currentNewsIndex].classList.add("active");

    // Move to the next news item
    currentNewsIndex = (currentNewsIndex + 1) % newsData.sideNews.length;
}

// Auto-update the main news every 3 seconds
setInterval(updateMainNewsSequentially, 5000);

function showResults() {
    let selectedOption = document.querySelector('input[name="poll"]:checked');
    let resultsDiv = document.getElementById("results");

    if (selectedOption) {
        resultsDiv.textContent = "You selected: " + selectedOption.value;
        resultsDiv.style.display = "block";
    } else {
        alert("Please select an option before voting.");
    }
}

// Initialize the first main news display
updateMainNewsSequentially();

















//  carousel part
const carouselInner = document.getElementById('carouselInner');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let currentIndex = 0;
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
}, 100); // Delay to allow DOM updates



































