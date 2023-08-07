import buildSearchForm from './components/SearchForm.js'
import buildRecipeForm from './components/RecipeForm.js'
import { displayRecipes } from './components/RecipeDisplay.js'
import generateRandomRecipe from './utils/generateRandomRecipe.js'
import addHeading from './utils/addHeading.js'
import createRandomRecipeCard from './components/RandomRecipeCard.js'
import { readRecipesFromLocalStorage } from './utils/localStorage.js'

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

const displaySearch = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}
	addHeading('Search')
	buildSearchForm()
	displayRecipes()
}

const displayGenerateRandom = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}

	addHeading('Get Random Recipe')
	const recipeObjToDisplay = generateRandomRecipe()

	const { name, url, id } = recipeObjToDisplay
	const recipeCardContainer = createRandomRecipeCard(name, url, id)

	mainDisplay.appendChild(recipeCardContainer)
}

const displayAdd = () => {
	if (mainDisplay.children.length > 0) {
		mainDisplay.innerHTML = ''
	}
	addHeading('Add New Recipe')
	buildRecipeForm()
}

document.addEventListener('DOMContentLoaded', displaySearch)
