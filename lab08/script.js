// Initialize recipe data structure
let recipes = [];

// Retrieve and display recipes
function displayRecipes() {
  const recipesTable = document.getElementById('recipes-table');
  recipesTable.innerHTML = '';

  // Add metadata to the table head
  const tableHead = document.createElement('thead');
  const headRow = document.createElement('tr');
  const titleHead = document.createElement('th');
  titleHead.textContent = 'Title';
  const ingredientsHead = document.createElement('th');
  ingredientsHead.textContent = 'Ingredients';
  const instructionsHead = document.createElement('th');
  instructionsHead.textContent = 'Instructions';

  headRow.appendChild(titleHead);
  headRow.appendChild(ingredientsHead);
  headRow.appendChild(instructionsHead);
  tableHead.appendChild(headRow);
  recipesTable.appendChild(tableHead);

  const tableBody = document.createElement('tbody');

  recipes.forEach((recipe, index) => {
    const row = document.createElement('tr');

    const titleCell = document.createElement('td');
    titleCell.textContent = recipe.title;

    const ingredientsCell = document.createElement('td');
    ingredientsCell.textContent = recipe.ingredients;

    const instructionsCell = document.createElement('td');
    instructionsCell.textContent = recipe.instructions;

    const actionsCell = document.createElement('td');
    const viewButton = document.createElement('button');
    viewButton.textContent = 'View';
    viewButton.addEventListener('click', () => viewRecipe(index));

    const editButton = document.createElement('button');
    editButton.textContent = 'Edit';
    editButton.addEventListener('click', () => editRecipe(index));

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.addEventListener('click', () => deleteRecipe(index));

    actionsCell.appendChild(viewButton);
    actionsCell.appendChild(editButton);
    actionsCell.appendChild(deleteButton);

    row.appendChild(titleCell);
    row.appendChild(ingredientsCell);
    row.appendChild(instructionsCell);
    row.appendChild(actionsCell);

    tableBody.appendChild(row);
  });

  recipesTable.appendChild(tableBody);
}

// Add new recipe
function addRecipe(event) {
  event.preventDefault();

  const titleInput = document.getElementById('title');
  const ingredientsInput = document.getElementById('ingredients');
  const instructionsInput = document.getElementById('instructions');
  const imageInput = document.getElementById('image');

  const recipe = {
    title: titleInput.value,
    ingredients: ingredientsInput.value,
    instructions: instructionsInput.value,
    image: imageInput.value, // For simplicity, assuming the image is stored as a URL
  };

  recipes.push(recipe);
  displayRecipes();

  // Clear form inputs
  titleInput.value = '';
  ingredientsInput.value = '';
  instructionsInput.value = '';
  imageInput.value = '';
}

// View recipe
function viewRecipe(index) {
  const recipe = recipes[index];

  // Implement the logic to display the recipe details as per your design (e.g., using a modal)

  console.log(recipe);
}

// Edit recipe
function editRecipe(index) {
  const recipe = recipes[index];

  // Implement the logic to populate the form fields with the recipe details for editing

  console.log(recipe);
}

// Delete recipe
function deleteRecipe(index) {
  recipes.splice(index, 1);
  displayRecipes();
}

// Form submit event listener
const recipeForm = document.getElementById('recipe-form');
recipeForm.addEventListener('submit', addRecipe);

// Initial display of recipes
displayRecipes();
