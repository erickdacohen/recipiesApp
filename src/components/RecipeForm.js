import { addNewRecipeToLocalStorage } from '../utils/localStorage.js'

const buildRecipeForm = () => {
	const mainDisplay = document.getElementById('main-display-container')
	const newRecipieForm = document.createElement('form')
	const recipeNameInput = document.createElement('input')
	const recipeURLInput = document.createElement('input')
	const addButton = document.createElement('button')

	newRecipieForm.classList.add('new-recipe-form')
	recipeNameInput.classList.add('new-recipe-form-input')
	recipeURLInput.classList.add('new-recipe-form-input')
	addButton.classList.add('new-recipe-add-btn')

	recipeNameInput.setAttribute('id', 'name-input')
	recipeURLInput.setAttribute('id', 'url-input')

	addButton.textContent = 'Add Recipe'
	recipeNameInput.placeholder = 'Recipe Name'
	recipeURLInput.placeholder = 'URL to recipe'

	newRecipieForm.appendChild(recipeNameInput)
	newRecipieForm.appendChild(recipeURLInput)
	mainDisplay.appendChild(newRecipieForm)
	mainDisplay.appendChild(addButton)

	addButton.addEventListener('click', addNewRecipeToLocalStorage)
}

export default buildRecipeForm
