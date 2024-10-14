
function moveCard() {
    const card = document.getElementById('cardprincipal');

    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    card.style.position = 'absolute';
    card.style.left = `${randomX}px`;
    card.style.top = `${randomY}px`;
}

document.getElementById('sim').addEventListener('click', function() {
    window.location.href = '/pages/page.html';
});