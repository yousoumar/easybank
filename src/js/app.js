import '../sass/app.scss';

/* -------------------- header ----------------------------- */

const header = document.querySelector('header');
const nav = document.querySelector('header nav');
const hamburger = document.querySelector('.hamburger');
hamburger.addEventListener('click', (e)=>{
    header.classList.toggle('clicked');
});
nav.addEventListener('click', (e)=>{
  header.classList.add('clicked');
});

/* -------------------- IntersectionObserver && loader ----------------------------- */
const options = {
    root: null,
    rootMargin: '0px',
    threshold: .3
  }
  
  window.addEventListener('load', ()=>{
    setTimeout(()=>{
      document.body.classList.add("loaded");
      const observer = new IntersectionObserver(handleIntersect, options);
      document.querySelectorAll('.will-be-revealed').forEach((r)=>{observer.observe(r)});
    },1000);
  });
  
  
  function handleIntersect(entries, observer){
    entries.forEach(function(entry){
      if (entry.isIntersecting){
        entry.target.classList.add('will-be-revealed-revealed'); 
        observer.unobserve(entry.target);
      }
      
    });
  }