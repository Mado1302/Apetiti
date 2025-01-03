// const slides = document.querySelector('.slides');
// const slide = document.querySelectorAll('.slide');
// const prev = document.querySelector('.prev');
// const next = document.querySelector('.next');
// let index = 0;


// function showSlide(i) {
//     index = (i + slide.length) % slide.length;
//     console.log(index)
//     slides.style.transform = `translateX(${-index * 100}%)`;
// }

// prev.addEventListener('click', () => showSlide(index - 1));
// next.addEventListener('click', () => showSlide(index + 1));

const sliderContiner = document.getElementsByClassName('slideContainer')[0];
console.log(sliderContiner)
const slides = sliderContiner.children;
console.log(slides)
const prev = document.getElementById('leftArrow').children[0].children[0];
const next = document.getElementById('rightArrow').children[0].children[0];


function showSlide(i) {
    for (let slide of slides) {
        slide.classList.remove('active');
    }
    slides[i].classList.add('active');
}
