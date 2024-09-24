

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