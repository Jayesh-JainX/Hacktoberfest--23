// Handle the "Add to Cart" button click
const buyButtons = document.querySelectorAll('.buy-button');
buyButtons.forEach(button => {
    button.addEventListener('click', () => {
        alert('Product added to cart!'); // You can replace this with your cart logic
    });
});
