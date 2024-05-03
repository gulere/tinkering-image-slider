//image slider
//tinkering 11

const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider)

//populate first image on webbrowser
function initializeSlider(){
    if(slides.length > 0){
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index){

    if(index >= slides.length){
        slideIndex = 0;
    }

    else if(index < 0){
        slideIndex = slides.length -1;
    }
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });
    slides[slideIndex].classList.add("displaySlide");
}

//function for previous slide
function prevSlide(){
    clearInterval(intervalId);
    slideIndex--;
    showSlide(slideIndex);
}

//function for next slide
function nextSlide(){
    slideIndex++;
    showSlide(slideIndex);
}