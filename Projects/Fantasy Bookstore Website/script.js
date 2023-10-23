// JavaScript for adding animations and interactivity
const books = document.querySelectorAll('.book');

books.forEach(book => {
    book.addEventListener('mouseover', () => {
        book.style.transform = 'scale(1.05)';
        book.style.transition = 'transform 0.3s';
    });

    book.addEventListener('mouseout', () => {
        book.style.transform = 'scale(1)';
    });
});
