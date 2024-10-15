
function moveCard() {
    const card = document.getElementById('cardprincipal');

    const randomX = Math.floor(Math.random() * window.innerWidth);
    const randomY = Math.floor(Math.random() * window.innerHeight);

    card.style.position = 'absolute';
    card.style.left = `${randomX}px`;
    card.style.top = `${randomY}px`;
}

document.getElementById('sim').addEventListener('click', function () {
    window.location.href = '/pages/page.html';
});

const textoo = "Este é um exemplo de texto que aparece com um delay, como se estivesse sendo digitado.";
const saindo = document.getElementById('texto');
let index = 0;



function typeText() {
    if (index < text.length) {



        texto.textContent += text.charAt(index);
        index++;
        setTimeout(typeText, 1);


    }
}

typeText();