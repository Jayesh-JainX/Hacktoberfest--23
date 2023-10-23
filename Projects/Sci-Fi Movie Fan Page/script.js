document.addEventListener('DOMContentLoaded', function () {
    // Get all watch buttons
    const watchButtons = document.querySelectorAll('.watch-button');

    // Function to handle the watch button click
    function handleWatchButtonClick() {
        alert('Enjoy watching the movie!');
    }

    // Add a click event listener to each watch button
    watchButtons.forEach(button => {
        button.addEventListener('click', handleWatchButtonClick);
    });
});
