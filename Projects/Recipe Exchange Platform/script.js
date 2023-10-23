document.addEventListener("DOMContentLoaded", function() {
    const recipeForm = document.getElementById("recipe-form");
    const recipeList = document.getElementById("recipe-list");

    recipeForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const recipeName = document.getElementById("recipe-name").value;
        const ingredients = document.getElementById("ingredients").value;
        const instructions = document.getElementById("instructions").value;

        const recipeCard = createRecipeCard(recipeName, ingredients, instructions);
        recipeList.appendChild(recipeCard);

        // Clear form fields
        recipeForm.reset();
    });

    function createRecipeCard(name, ingredients, instructions) {
        const recipeCard = document.createElement("div");
        recipeCard.className = "recipe-card";

        const nameHeader = document.createElement("h3");
        nameHeader.textContent = name;

        const ingredientsPara = document.createElement("p");
        ingredientsPara.textContent = "Ingredients: " + ingredients;

        const instructionsPara = document.createElement("p");
        instructionsPara.textContent = "Instructions: " + instructions;

        recipeCard.appendChild(nameHeader);
        recipeCard.appendChild(ingredientsPara);
        recipeCard.appendChild(instructionsPara);

        return recipeCard;
    }
});
