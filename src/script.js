import buildSearchForm from './components/SearchForm.js'
import buildRecipeForm from './components/RecipeForm.js'
import displayRecipes from './components/RecipeDisplay.js'
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

// generate random recipe
const generateRandomRecipe = () => {
	const recipes = readRecipesFromLocalStorage()
	const randomIndex = Math.floor(Math.random() * recipes.length)

	const recipeToDisplay = recipes[randomIndex]
	return recipeToDisplay
}

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
	const recipeObjToDisplay = generateRandomRecipe()

	const { name, url, id } = recipeObjToDisplay

	const recipeCard = document.createElement('div')
	const recipeLink = document.createElement('a')
	const recipeName = document.createElement('h2')

	recipeCard.classList.add('recipe-card')
	recipeLink.classList.add('recipe-card-link')

	recipeLink.setAttribute('href', url)
	recipeLink.setAttribute('target', '_blank')
	recipeCard.setAttribute('id', id)

	recipeName.textContent = name

	recipeLink.appendChild(recipeName)
	recipeCard.appendChild(recipeLink)

	const recipeCardContainer = document.createElement('div')
	recipeCardContainer.classList.add('recipe-card-container')

	recipeCardContainer.appendChild(recipeCard)
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
