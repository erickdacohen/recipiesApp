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

const addNewRecipe = () => {
	const newRecipieForm = document.createElement('form')
	const recipeNameInput = document.createElement('input')

	recipeNameInput.classList.add('new-recipe-form-input')
	recipeNameInput

	newRecipieForm.appendChild(recipeNameInput)

	mainDisplay.appendChild(newRecipieForm)
}

const generateRandomRecipe = () => {}

// Display each option
const displaySearch = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}

	const heading = document.createElement('h1')
	heading.classList.add('display-section-heading')
	heading.innerText = 'Search'
	mainDisplay.appendChild(heading)

	buildSearchForm()
	// TODO add search functionality
}

const displayGenerateRandom = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}

	const heading = document.createElement('h1')
	heading.classList.add('display-section-heading')
	heading.innerText = 'Get Random recipe'
	mainDisplay.appendChild(heading)

	generateRandomRecipe()
}

const displayAdd = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}

	const heading = document.createElement('h1')
	heading.classList.add('display-section-heading')
	heading.innerText = 'Add new recipe'

	mainDisplay.appendChild(heading)
	addNewRecipe()
}

// Always start with Search
// displaySearch()
