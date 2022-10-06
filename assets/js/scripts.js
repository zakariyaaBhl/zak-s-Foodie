'use strict';

/**
 *      Variables
 */
const header = document.querySelector('[data-header]');
const backTopBtn = document.querySelector('[data-backTopBtn]');

const navbar = document.querySelector('[data-navbar]');
const navTogglers = document.querySelectorAll('[data-nav-toggler]');
const overlay = document.querySelector('[data-overlay]');
const navLinks = document.querySelectorAll('[data-nav-link]');

const searchContainer = document.querySelector('[data-search-container]');
const searchContainerTogglers = document.querySelectorAll('[data-search-toggler]');



/**
 *      Active Header at the time of scrolling
 */

window.addEventListener('scroll', ()=>{
    if (window.scrollY >= 100) {
        header.classList.add('active');
        backTopBtn.classList.add('active');
    } else {
        header.classList.remove('active');
        backTopBtn.classList.remove('active');
    }
});

/**
 *      Navbar Toggle
 */

navTogglers.forEach((navToggler)=>{
    navToggler.addEventListener('click', ()=>{
        navbar.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.classList.toggle('active');
    });
});

navLinks.forEach((navLink)=>{
    navLink.addEventListener('click', ()=>{
        navbar.classList.remove('active');
        overlay.classList.remove('active');
    });
});

/**
 *      sEARCH cONTAINER tOGGLE
 */

searchContainerTogglers.forEach((btn)=>{
    btn.addEventListener('click', ()=>{
        searchContainer.classList.toggle('active');
        document.body.classList.toggle('active');
    });
});