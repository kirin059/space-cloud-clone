'use strict';

// main slider

let slides = document.querySelectorAll('.slides li');
let next = document.getElementsByClassName('next');
let prev = document.getElementsByClassName('prev');
let slideIndex = 1;

showSlides();

function showSlides() {

    for (let i = 0; i < slides.length; i++) {
        //console.log(slides)
        slides[i].style.display = "none";
    }
    slideIndex++;

    // slides 전체 돌고 난 뒤, slideIndex가 전체 slide길이보다 커지면, 그 다음은 다시 1로 돌아감
    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 4 seconds
}

next.addEventListener('click', (e) => {
    console.log(e)
    showSlides(slideIndex + 1);
    //clearInterval(showSlides);
    //setTimeout(showSlides, 4000);
});

prev.addEventListener('click', (e) => {
    //console.log(e)
    showSlides(slideIndex - 1);
    //clearInterval(showSlides);
    //setTimeout(showSlides, 4000);
});



// recommend slider

let slide = document.querySelectorAll('.img_box');
let nextBtn = document.querySelector('nextBtn');
let prevBtn = document.querySelector('prevBtn');

handleSlide()

function handleSlide() {
    for (let i = 0; i < slide.length; i++) {
        //console.log(slides)
        slides[i].style.display = "none";
    }
    slideIndex += 3;

    if (slideIndex > slides.length) {
        slideIndex = 1
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 3000); // Change image every 4 seconds
}
}
