import { readRecipesFromLocalStorage } from '../utils/localStorage.js'
import { deleteRecipeFromLocalStorage } from '../utils/localStorage.js'
import filterRecipes from '../utils/filterRecipes.js'
import { recipes } from '../utils/localStorage.js'
const mainDisplay = document.getElementById('main-display-container')
const recipeCardContainer = document.createElement('div')
// const recipes = readRecipesFromLocalStorage()
recipeCardContainer.classList.add('recipe-card-container')

const makeRecipeCards = (recipes) => {
	// remove previous items
	recipeCardContainer.innerHTML = ''

	recipes.forEach((recipe) => {
		const { name, url, id } = recipe

		const recipeCard = document.createElement('div')
		const recipeLink = document.createElement('a')
		const recipeName = document.createElement('h2')
		const deleteBtn = document.createElement('h4')

		recipeCard.classList.add('recipe-card')
		deleteBtn.classList.add('recipe-card-delete-btn')
		recipeLink.classList.add('recipe-card-link')

		recipeLink.setAttribute('href', url)
		recipeLink.setAttribute('target', '_blank')
		recipeCard.setAttribute('id', id)

		deleteBtn.textContent = 'X'
		recipeName.textContent = name

		recipeCard.appendChild(deleteBtn)
		recipeLink.appendChild(recipeName)
		recipeCard.appendChild(recipeLink)

		recipeCardContainer.appendChild(recipeCard)
		mainDisplay.appendChild(recipeCardContainer)

		deleteBtn.addEventListener('click', (e) => {
			deleteRecipeFromLocalStorage(e.target.parentNode.id)
			deleteRecipeFromDOM(e.target.parentNode.id)
		})
	})
}

const displayModal = () => {
	const noRecipesDisplay = document.createElement('section')
	const noRecipesDisplayH2 = document.createElement('h2')

	noRecipesDisplayH2.textContent = 'No recipes to display'

	noRecipesDisplay.classList.add('no-recipes-to-display')

	noRecipesDisplay.appendChild(noRecipesDisplayH2)
	mainDisplay.appendChild(noRecipesDisplay)
}

const displayRecipes = () => {
	// clear the recipeCardContainer
	recipeCardContainer.innerHTML = ''

	makeRecipeCards(recipes)
	if (!recipes || recipes.length === 0) {
		displayModal()
	} else {
		const searchInput = document.querySelector('.search-form-text-input')
		searchInput.addEventListener('keyup', (e) => {
			makeRecipeCards(filterRecipes(e.target.value.toLowerCase(), recipes))
		})
	}
}

const deleteRecipeFromDOM = (id) => {
	const childToRemove = document.getElementById(id)
	recipeCardContainer.removeChild(childToRemove)

	if (recipeCardContainer.childNodes.length === 0) displayModal()
}

export { displayRecipes, makeRecipeCards }
