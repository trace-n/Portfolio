const menuButton = document.querySelector(".menu-button");
const menuCloseButton = document.querySelector(".menu-close-button");
const mobileNav = document.querySelector(".mobile-nav");
const container = document.body;
const toggleButton = document.getElementById("toggle-button");
var lightMode;
var storedLightModeSetting = localStorage.getItem ("storeLightMode");

// console.log("tog on page load",toggleButton)
// console.log("light mode on page load should be empty", lightMode);
// const element = document.body;
// console.log("stored ligsht mode")
// console.log("stored var init getitem",storedLightModeSetting);
// initialise the day/night between pages

//init the page if dark mode has been sent
if (storedLightModeSetting == "dark") {
//     console.log("light mode change on page init", storedLightModeSetting);
//     container.setAttribute('data-theme', 'default'); 
// } else {
    // console.log("dark mode change on page init", storedLightModeSetting);    
    // init the page theme to dark if stored var 
    container.setAttribute('data-theme', 'dark'); 
    // init the toggle switch to dark mode
    toggleButton.checked = true;

    // toggleButton.setAttribute('class', 'checked');
    // console.log(container);
    // console.log("tog on init",toggleButton)
    // toggleButton.classList.toggle("checked");
}



// Menu navigation bar toggle the svg menu icon and drop down menu for mobile
menuButton.addEventListener("click",() => {
    mobileNav.classList.toggle("display-none");
    menuButton.classList.toggle("display-none");
    menuCloseButton.classList.toggle("display-none");
})

//on close for menu bar nav icon
menuCloseButton.addEventListener("click",() => {
    mobileNav.classList.toggle("display-none");
    menuButton.classList.toggle("display-none");
    menuCloseButton.classList.toggle("display-none");
})

// menuButton.addEventListener('change', (event) => {
//     menuButton.src = "icon-cancel.svg";
// });

// Toggle day/night mode 
toggleButton.addEventListener('change', (event) => {    
    event.target.checked ? container.setAttribute('data-theme', 'dark'): container.setAttribute('data-theme', 'default'); 
    //update lightMode to true or false and store in memory
    event.target.checked ? lightMode="dark" : lightMode="light"; 
    localStorage.setItem ("storeLightMode", lightMode);
    // console.log("tog but",toggleButton)
        // console.log("toggle lightmode ",lightMode);
});



// var container = document.getElementsByClassName('container')[0];
// var mobileNavA = document.getElementsByClassName('mobile-nav-a')[0];
// var inputBtn = document.querySelector(".submit-btn");


// document.getElementById('toggler').addEventListener('change', (event) => {
//   console.log(toggler)
//   console.log(mobileNavA)
//   console.log(container)
//   event.target.checked ? container.setAttribute('data-theme', 'dark'): container.setAttribute('data-theme', 'default'); //container.removeAttribute('data-theme');
//   event.target.checked ? mobileNavA.setAttribute('data-theme', 'light'): mobileNavA.removeAttribute('data-theme');
//   event.target.checked ? inputBtn.setAttribute('data-theme', 'light'): inputBtn.removeAttribute('data-theme');
// });