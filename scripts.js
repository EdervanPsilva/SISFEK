

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

// Adiciona funcionalidade de swipe para celular
let touchStartX = 0;
let touchEndX = 0;

document.querySelector('.carousel-container').addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.querySelector('.carousel-container').addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleGesture();
});

function handleGesture() {
    if (touchEndX < touchStartX - 50) {
        nextSlide(); // deslizar para a esquerda
    }
    if (touchEndX > touchStartX + 50) {
        prevSlide(); // deslizar para a direita
    }
}



// Fechar menu quando clicar na tela
document.addEventListener('click', function (event) {
    var menuToggle = document.getElementById('menu-toggle');
    var menuContainer = document.querySelector('.menu-container');

    // Verifica se o clique foi fora do menu
    if (menuToggle.checked && !menuContainer.contains(event.target)) {
        menuToggle.checked = false;
    }

});