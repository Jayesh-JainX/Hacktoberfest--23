// script.js
const photos = document.querySelectorAll('.photo');
const slider = document.createElement('div');
slider.classList.add('image-slider');

photos.forEach((photo, index) => {
    const thumbnail = document.createElement('img');
    thumbnail.src = photo.querySelector('img').src;
    thumbnail.alt = photo.querySelector('img').alt;
    thumbnail.addEventListener('click', () => {
        setActivePhoto(index);
    });
    slider.appendChild(thumbnail);
});

function setActivePhoto(index) {
    photos.forEach((photo, photoIndex) => {
        if (photoIndex === index) {
            photo.style.display = 'block';
        } else {
            photo.style.display = 'none';
        }
    });
}

setActivePhoto(0);

document.querySelector('main').appendChild(slider);
