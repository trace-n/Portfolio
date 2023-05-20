const menuButton = document.querySelector(".menu-button");
const menuCloseButton = document.querySelector(".menu-close-button");
const mobileNav = document.querySelector(".mobile-nav");
const container = document.body;
const toggleButton = document.getElementById("toggle-button");
var lightMode;
var storedLightModeSetting = localStorage.getItem ("storeLightMode");

// initialise the day/night between pages

//init the page if dark mode has been set between navigating to different pages

if (storedLightModeSetting == "dark") {
    // set the theme to dark for page
    container.setAttribute('data-theme', 'dark'); 
     // init the toggle switch to dark mode
     toggleButton.checked = true;
}

// Menu navigation bar toggle the svg menu icon and drop down menu for mobile
menuButton.addEventListener("click",() => {
    mobileNav.classList.toggle("display-none");
    menuButton.classList.toggle("display-none");
    menuCloseButton.classList.toggle("display-none");
})

//on close for mobile menu bar nav icon
menuCloseButton.addEventListener("click",() => {
    mobileNav.classList.toggle("display-none");
    menuButton.classList.toggle("display-none");
    menuCloseButton.classList.toggle("display-none");
})

// Toggle day/night mode on change event
toggleButton.addEventListener('change', (event) => {    

    event.target.checked ? container.setAttribute('data-theme', 'dark'): container.setAttribute('data-theme', 'default'); 

    //update lightMode to true or false and store in memory variable for navigation between pages
    event.target.checked ? lightMode="dark" : lightMode="light"; 
    localStorage.setItem ("storeLightMode", lightMode);
 
});


 