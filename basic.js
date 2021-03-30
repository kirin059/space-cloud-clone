'use strict';

// nav - drop down

const navBtn = document.querySelector('.fa-bars');
const navWrapper = document.querySelector('.scroll_wrap');
const closeBtn = document.querySelector('.fa-arrow-right');

navBtn.addEventListener('click', () => {
    navWrapper.classList.add('active_nav')
})

closeBtn.addEventListener('click', () => {
    navWrapper.classList.remove('active_nav')
})

