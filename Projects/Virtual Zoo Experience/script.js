// script.js

const animalCards = document.querySelectorAll('.animal-card');
const feedButton = document.getElementById('feed-button');

animalCards.forEach(card => {
    card.addEventListener('click', () => {
        alert(`You're now exploring the ${card.querySelector('h3').textContent} enclosure!`);
    });
});

feedButton.addEventListener('click', () => {
    alert('You just fed the animals! Thanks for taking care of them.');
});
