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












// submenu part 
// const onComputing = document.getElementById('onComputing');
// const ComputingOver = document.getElementById('ComputingOver');
// const InternetOver = document.getElementById('InternetOver');
// const InAdvertising = document.getElementById('InAdvertising');
// const SiteMapOver = document.getElementById('SiteMapOver');
// const NewslettersOver = document.getElementById('NewslettersOver');
// const TechnologyOver = document.getElementById('TechnologyOver');
// const MostPopularOver = document.getElementById('MostPopularOver');
// const TechBlogOver = document.getElementById('TechBlogOver');
// const SecurityOver = document.getElementById('SecurityOver');
// const ReviewsOver = document.getElementById('ReviewsOver');
// const ITOver = document.getElementById('ITOver');
// const MobileOver = document.getElementById('MobileOver');
// const onInternet = document.getElementById('onInternet');
// const onIT = document.getElementById('onIT');
// const onMobile = document.getElementById('onMobile');
// const onReviews = document.getElementById('onReviews');
// const onSecurity = document.getElementById('onSecurity');
// const onTechBlog = document.getElementById('onTechBlog');
// const onTechnology = document.getElementById('onTechnology');
// const onMostPopular = document.getElementById('onMostPopular');
// const onSiteMap = document.getElementById('onSiteMap');
// const onNewsletters = document.getElementById('onNewsletters');
// const onAdvertising = document.getElementById('onAdvertising');



// onComputing.addEventListener('mouseover', () => {
//     ComputingOver.style.display = 'block';
// });
// onInternet.addEventListener('mouseover', () => {
//     InternetOver.style.display = 'block';
// })
// onIT.addEventListener('mouseover', () => {
//     ITOver.style.display = 'block';
// })
// onMobile.addEventListener('mouseover', () => {
//     MobileOver.style.display = 'block';
// })
// onReviews.addEventListener('mouseover', () => {
//     ReviewsOver.style.display = 'block';
// })
// onSecurity.addEventListener('mouseover', () => {
//     SecurityOver.style.display = 'block';
// })
// onTechBlog.addEventListener('mouseover', () => {
//     TechBlogOver.style.display = 'block';
// })
// onTechnology.addEventListener('mouseover', () => {
//     TechnologyOver.style.display = 'block';
// })
// onMostPopular.addEventListener('mouseover', () => {
//     MostPopularOver.style.display = 'block';
// })
// onNewsletters.addEventListener('mouseover', () => {
//     NewslettersOver.style.display = 'block';
// })
// onAdvertising.addEventListener('mouseover', () => {
//     AdvertisingOver.style.display = 'block';
// })
// onSiteMap.addEventListener('mouseover', () => {
//     SiteMapOver.style.display = 'block';
// })









// onInternet.addEventListener('mouseout', () => {
//     InternetOver.style.display = 'none  ';
// })
// onComputing.addEventListener('mouseout', () => {
//     ComputingOver.style.display = 'none';
// });