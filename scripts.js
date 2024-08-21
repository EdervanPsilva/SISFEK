

document.addEventListener('DOMContentLoaded', () => {
    showItem(currentIndex);
});


let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const slideInterval = 4000; // 4 segundos

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Troca automática de slides
setInterval(nextSlide, slideInterval);

// Inicia o carrossel com o primeiro item
showSlide(currentSlide);
