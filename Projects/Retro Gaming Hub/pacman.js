const canvas = document.getElementById('game-canvas');
const context = canvas.getContext('2d');

const pacMan = {
    x: 50,
    y: 50,
    radius: 20,
    mouthOpen: 0.2,
    speed: 2 * Math.PI / 180, // 2 degrees per frame
};

function drawPacMan() {
    context.clearRect(0, 0, canvas.width, canvas.height);

    context.beginPath();
    context.arc(pacMan.x, pacMan.y, pacMan.radius, pacMan.mouthOpen, (2 - pacMan.mouthOpen) * Math.PI);
    context.lineTo(pacMan.x, pacMan.y);
    context.fillStyle = 'yellow';
    context.fill();
    context.closePath();

    pacMan.mouthOpen += pacMan.speed;
    if (pacMan.mouthOpen > 1.2 || pacMan.mouthOpen < 0.2) {
        pacMan.speed *= -1;
    }

    requestAnimationFrame(drawPacMan);
}

drawPacMan();
