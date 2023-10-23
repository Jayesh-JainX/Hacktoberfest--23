const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

const mario = {
    x: 50,
    y: 50,
    width: 40,
    height: 60,
};

const marioImage = new Image();
marioImage.src = 'mario.png'; // Include the image file

function drawMario() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.drawImage(marioImage, mario.x, mario.y, mario.width, mario.height);
}

marioImage.onload = function () {
    drawMario();
};
