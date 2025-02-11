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



backUp.addEventListener('click',()=>{
    window.scrollTo({top: 0,behavior: 'smooth'})
})





// menu part
const menuIcon = document.getElementById('menuIcon');
const fullScreenMenu = document.getElementById('fullScreenMenu');
const closeMenu = document.getElementById('closeMenu');

menuIcon.addEventListener('click', () => {
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























// Check if the screen is small
const isSmallScreen = window.matchMedia("(max-width: 768px)").matches;

// Menu Items Array
const menuItems = [
    { button: 'onComputing', menu: 'ComputingOver' },
    { button: 'onInternet', menu: 'InternetOver' },
    { button: 'onIT', menu: 'ITOver' },
    { button: 'onMobile', menu: 'MobileOver' },
    { button: 'onSecurity', menu: 'SecurityOver' },
    { button: 'onTechnology', menu: 'TechnologyOver' },
    { button: 'onNewsletters', menu: 'NewslettersOver' }
];

// Function to hide all menus
function hideAllMenus() {
    menuItems.forEach(item => {
        document.getElementById(item.menu).style.display = 'none';
    });
}

// Show first menu (Computing) on page load
document.addEventListener('DOMContentLoaded', () => {
    hideAllMenus(); // Hide all first
    document.getElementById('ComputingOver').style.display = 'block'; // Show first submenu
});

// Add Event Listeners
menuItems.forEach(item => {
    const button = document.getElementById(item.button);
    const menu = document.getElementById(item.menu);

    if (isSmallScreen) {
        // On small screens, simply hide all submenus
        menu.style.display = 'none'; // Ensure the submenu is hidden by default

        // Disable hover or click functionality for mobile
        button.addEventListener('click', () => {
            // Do nothing or simply add some feedback if needed (e.g., alert)
        });
        document.addEventListener('DOMContentLoaded', () => {
            hideAllMenus(); // Hide all first
            document.getElementById('ComputingOver').style.display = 'none'; // Show first submenu
        });
    } else {
        // Hover behavior for larger screens
        button.addEventListener('mouseenter', () => {
            hideAllMenus();
            menu.style.display = 'block';
        });

        menu.addEventListener('mouseenter', () => {
            menu.style.display = 'block';
        });

        menu.addEventListener('mouseleave', () => {
            menu.style.display = 'block';
        });
    }
});
