document.addEventListener('DOMContentLoaded', function () {
    const changeColorButton = document.getElementById('changeColorButton');

    changeColorButton.addEventListener('click', function () {
        const colors = ['#FF5733', '#33FF57', '#5733FF', '#33FFFF', '#FF33FF'];
        const randomColor = colors[Math.floor(Math.random() * colors.length)];

        document.body.style.backgroundColor = randomColor;
    });
});
