import Recipe from './components/Recipe.js'
import buildSearchForm from './components/SearchForm.js'
import buildRecipeForm from './components/RecipeForm.js'
import displayRecipes from './components/RecipeDisplay.js'
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

// generate random recipe
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

	displayRecipes()
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

document.addEventListener('DOMContentLoaded', displaySearch)
