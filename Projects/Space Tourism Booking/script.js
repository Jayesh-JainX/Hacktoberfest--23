// Add JavaScript for interactivity and functionality here

// Example:
document.getElementById('book-now').addEventListener('click', function() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const package = document.getElementById('package').value;

    // Send booking data to the server or perform other actions
    console.log(`Booking for ${name} (${email}) for the ${package} package.`);
    alert('Booking successful!');
});
