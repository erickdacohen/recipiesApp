import Recipe from './components/Recipe.js'

// Get top nav buttons
const searchRecipiesButtons = document.querySelectorAll('.header-list-item')
searchRecipiesButtons.forEach((button) => {
	button.addEventListener('click', (e) => {
		const choice = e.target.id
		choice === 'header-search'
			? displaySearch()
			: choice === 'header-generate'
			? displayGenerateRandom()
			: choice === 'header-add'
			? displayAdd()
			: null
	})
})

// get main display area
const mainDisplay = document.getElementById('main-display-container')

// build search and search functionality
const buildSearchForm = () => {
	const form = document.createElement('form')
	const recipeURLInput = document.createElement('input')
	recipeURLInput.classList.add('search-form-text-input')

	form.appendChild(recipeURLInput)
	mainDisplay.appendChild(form)
}

// Build form to add recipe
const buildRecipeForm = () => {
	const newRecipieForm = document.createElement('form')
	const recipeNameInput = document.createElement('input')
	const recipeURLInput = document.createElement('input')
	const addButton = document.createElement('button')

	newRecipieForm.classList.add('new-recipe-form')
	recipeNameInput.classList.add('new-recipe-form-input')
	recipeURLInput.classList.add('new-recipe-form-input')
	addButton.classList.add('new-recipe-add-btn')

	addButton.textContent = 'Add Recipe'
	recipeNameInput.placeholder = 'Recipe Name'
	recipeURLInput.placeholder = 'URL to recipe'

	newRecipieForm.appendChild(recipeNameInput)
	newRecipieForm.appendChild(recipeURLInput)
	mainDisplay.appendChild(newRecipieForm)
	mainDisplay.appendChild(addButton)
}

const generateRandomRecipe = () => {}

// Display each option
const addHeading = (headingText) => {
	const heading = document.createElement('h1')
	heading.classList.add('display-section-heading')
	heading.innerText = headingText
	mainDisplay.appendChild(heading)
}

const displaySearch = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}
	addHeading('Search')
	buildSearchForm()
	// TODO add search functionality
}

const displayGenerateRandom = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}

	addHeading('Get Random Recipe')
	generateRandomRecipe()
}

const displayAdd = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}
	addHeading('Add New Recipe')
	buildRecipeForm()
}
