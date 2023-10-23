document.addEventListener("DOMContentLoaded", function() {
    const canvas = document.getElementById('art-canvas');
    const generateButton = document.getElementById('generate-button');
    
    generateButton.addEventListener('click', generateArt);

    function generateArt() {
        const context = canvas.getContext('2d');
        context.clearRect(0, 0, canvas.width, canvas.height);
        animateArt(context);
    }

    function animateArt(context) {
        const colors = ['#FF5733', '#FFC300', '#3386FF', '#33FFA8'];
        const size = 20;
        const speed = 2;

        let x = canvas.width / 2;
        let y = canvas.height / 2;

        function draw() {
            context.fillStyle = colors[Math.floor(Math.random() * colors.length)];
            context.beginPath();
            context.arc(x, y, size, 0, 2 * Math.PI);
            context.fill();

            x += Math.random() * 2 * speed - speed;
            y += Math.random() * 2 * speed - speed;

            if (x < 0) x = 0;
            if (x > canvas.width) x = canvas.width;
            if (y < 0) y = 0;
            if (y > canvas.height) y = canvas.height;
        }

        function animate() {
            draw();
            requestAnimationFrame(animate);
        }

        animate();
    }
});
