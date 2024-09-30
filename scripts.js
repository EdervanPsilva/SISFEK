

document.addEventListener('DOMContentLoaded', () => {
    showItem(currentIndex);
});

// Fechar menu quando clicar na tela
document.addEventListener('click', function (event) {
    var menuToggle = document.getElementById('menu-toggle');
    var menuContainer = document.querySelector('.menu-container');

    // Verifica se o clique foi fora do menu
    if (menuToggle.checked && !menuContainer.contains(event.target)) {
        menuToggle.checked = false;
    }

});

//Carosel

let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

document.querySelector('.next').addEventListener('click', () => {
    moveToNextItem();
});

document.querySelector('.prev').addEventListener('click', () => {
    moveToPrevItem();
});

function moveToNextItem() {
    if (currentIndex < totalItems - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateCarousel();
}

function moveToPrevItem() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalItems - 1;
    }
    updateCarousel();
}

function updateCarousel() {
    const carousel = document.querySelector('.carousel');
    carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Deslizar no mobile
let startX, currentX;

document.querySelector('.carousel-container').addEventListener('touchstart', (e) => {
    startX = e.touches[0].clientX;
});

document.querySelector('.carousel-container').addEventListener('touchmove', (e) => {
    currentX = e.touches[0].clientX;
});

document.querySelector('.carousel-container').addEventListener('touchend', () => {
    const diff = startX - currentX;
    if (diff > 50) {
        moveToNextItem(); // Deslizar para a esquerda
    } else if (diff < -50) {
        moveToPrevItem(); // Deslizar para a direita
    }
});

// Mudança automática a cada 5 segundos
setInterval(() => {
    moveToNextItem();
}, 5000);
