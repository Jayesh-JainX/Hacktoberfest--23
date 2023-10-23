
const header = document.querySelector('header');

header.addEventListener('mouseover', () => {
    header.style.animation = 'headerAnimation 10s linear infinite alternate';
});

const images = document.querySelectorAll('.image');

images.forEach((image) => {
    image.addEventListener('click', () => {
        image.classList.toggle('zoomed');
    });
});
