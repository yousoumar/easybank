!function(){"use strict";var e=document.querySelector("header");document.querySelector(".hamburger").addEventListener("click",(function(t){e.classList.toggle("clicked")}));var t={root:null,rootMargin:"0px",threshold:.3};function r(e,t){e.forEach((function(e){e.isIntersecting&&(e.target.classList.add("will-be-revealed-revealed"),t.unobserve(e.target))}))}window.addEventListener("load",(function(){setTimeout((function(){document.body.classList.add("loaded");var e=new IntersectionObserver(r,t);document.querySelectorAll(".will-be-revealed").forEach((function(t){e.observe(t)}))}),1e3)}))}();