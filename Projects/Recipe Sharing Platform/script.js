document.addEventListener('DOMContentLoaded', function () {
    const recipeForm = document.getElementById('recipe-form');
    const recipesList = document.getElementById('recipes');

    recipeForm.addEventListener('submit', function (event) {
        event.preventDefault();

        const recipeName = document.getElementById('recipe-name').value;
        const ingredients = document.getElementById('ingredients').value;
        const instructions = document.getElementById('instructions').value;

        if (recipeName && ingredients && instructions) {
            const recipeItem = document.createElement('li');
            recipeItem.innerHTML = `<h3>${recipeName}</h3><p><strong>Ingredients:</strong> ${ingredients}</p><p><strong>Instructions:</strong> ${instructions}</p>`;
            recipesList.appendChild(recipeItem);

            // Clear the form
            recipeForm.reset();
        }
    });
});
