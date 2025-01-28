// header part
let lastScrollTop = 0;

let headHide = document.getElementById('headHide')
let header2 = document.getElementById('header2')
let line = document.getElementById('line')
let backUp = document.getElementById('backUp')
window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        headHide.style.display = 'block'
        // header2.style.display = 'none'
        header2.classList.add('headervisible');
        backUp.style.display = 'block'
        line.style.display = 'block'
    } else {
        headHide.style.display = 'none'
        // header2.style.display = 'block'
        header2.classList.remove('headervisible');
        backUp.style.display = 'none'
        line.style.display = 'none'
    }
});








// menu part
const menuIcon = document.getElementById('menuIcon');
const fullScreenMenu = document.getElementById('fullScreenMenu');
const closeMenu = document.getElementById('closeMenu');

menuIcon.addEventListener('click', () => {
    // alert('hello')
    fullScreenMenu.classList.add('show');
});

closeMenu.addEventListener('click', () => {
    fullScreenMenu.classList.remove('show');
});

















// date 
function formatDateTime() {
    const now = new Date();
    
    // Get date components
    const options = { month: 'long', day: 'numeric', year: 'numeric' }; // Format: "January 16, 2025"
    const datePart = now.toLocaleDateString('en-US', options);

    // Get time components
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12; // Convert to 12-hour format
    
    const timePart = `${hours.toString().padStart(2, '0')}:${minutes}:${seconds} ${ampm}`;

    // Combine date and time
    const formattedDateTime = `${datePart} ${timePart}`;
    document.getElementById('dateTime').textContent = formattedDateTime;
}

// Update every second
setInterval(formatDateTime, 1000);
formatDateTime(); // Call once to set initial value













// sign in part
signInForm.addEventListener("submit", signInUser)
async function signInUser(e) {
    e.preventDefault()
    let { username, password } = signInForm;
    let uInfo = {
        name: username.value,
        password: password.value
    }
    console.log(uInfo);

}