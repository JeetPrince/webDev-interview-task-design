// Variables

// Event Listener
loadEventListeners();

function loadEventListeners() {
    // Once the site has loaded
    document.addEventListener('DOMContentLoaded', appInit);
}

// Functions
function appInit() {
    window.addEventListener('scroll', (e) => {
        const navBar = document.querySelector('.navbar');
        navBar.classList.toggle('sticky', window.scrollY > 0);
   });

}