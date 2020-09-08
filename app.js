// Scroll reveal
window.sr = ScrollReveal();

sr.reveal('.animate-top', {
    origin: 'top',
    duration: 1000,
    distance: '10rem',
    delay: 600
});

sr.reveal('.animate-left', {
    origin: 'left',
    duration: 1000,
    distance: '10rem',
    delay: 600
});

sr.reveal('.animate-right', {
    origin: 'right',
    duration: 1000,
    distance: '10rem',
    delay: 600
});

sr.reveal('.animate-left-bar', {
    origin: 'left',
    duration: 3000,
    distance: '10rem',
    delay: 1000
});

sr.reveal('.animate-bottom', {
    origin: 'bottom',
    duration: 1000,
    distance: '10rem',
    delay: 600
});

// Select element function
const selectElement = function (element) {
    return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle')
let navItem = document.querySelectorAll('.nav-item')
let body = selectElement('body');

menuToggler.addEventListener('click', function(){
    body.classList.toggle('open');
});

navItem.forEach(item => {
    item.addEventListener('click', function(){
    body.classList.toggle('open');
})});
