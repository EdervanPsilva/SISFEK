let currentIndex = 0;
const items = document.querySelectorAll('.carousel-item');
const totalItems = items.length;

function showItem(index) {
    items.forEach((item, i) => {
        item.style.transform = `translateX(-${index * 100}%)`;
        item.classList.remove('show');
    });
    items[index].classList.add('show');
}

function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems;
    showItem(currentIndex);
}

setInterval(nextItem, 5000);

document.addEventListener('DOMContentLoaded', () => {
    showItem(currentIndex);
});
