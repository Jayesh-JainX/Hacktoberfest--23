
const artworks = document.querySelectorAll('.artwork');

artworks.forEach(artwork => {
    artwork.addEventListener('click', () => {
        artwork.classList.add('vr-effect');
        artwork.style.animation = 'vr-animation 1s ease-in-out';
        setTimeout(() => {
            artwork.style.animation = '';
            artwork.classList.remove('vr-effect');
        }, 1000);
    });
});
