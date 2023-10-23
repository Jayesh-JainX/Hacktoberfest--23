// JavaScript to add interactivity

// Example: Changing background color on click
const articles = document.querySelectorAll('.article');
articles.forEach((article, index) => {
    article.addEventListener('click', () => {
        const colors = ['#FF6B6B', '#6BFF6B', '#6B6BFF'];
        article.style.backgroundColor = colors[index % 3];
    });
});
