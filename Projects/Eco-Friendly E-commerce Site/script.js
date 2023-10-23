const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartItems = document.querySelector('.cart-items');

addToCartButtons.forEach(button => {
    button.addEventListener('click', () => {
        const product = button.parentElement;
        const productName = product.querySelector('h3').textContent;
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        cartItem.textContent = productName;
        cartItems.appendChild(cartItem);
    });
});
