import '../sass/app.scss';

/* -------------------- header ----------------------------- */

const header = document.querySelector('header');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', (e)=>{
    header.classList.toggle('clicked')
});