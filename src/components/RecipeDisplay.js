import { readRecipesFromLocalStorage } from '../utils/localStorage.js'

const displayRecipes = () => {
	const mainDisplay = document.getElementById('main-display-container')
	const recipeCardContainer = document.createElement('div')
	recipeCardContainer.classList.add('recipe-card-container')

	const recipes = readRecipesFromLocalStorage()
	if (!recipes) {
		const noRecipesDisplay = document.createElement('section')
		const noRecipesDisplayH2 = document.createElement('h2')

		noRecipesDisplayH2.textContent = 'No recipes to display'

		noRecipesDisplay.classList.add('no-recipes-to-display')

		noRecipesDisplay.appendChild(noRecipesDisplayH2)
		mainDisplay.appendChild(noRecipesDisplay)
	} else {
		JSON.parse(recipes).forEach((recipe) => {
			const { name, url } = recipe

			const recipeCard = document.createElement('a')
			const recipeName = document.createElement('h2')

			recipeCard.setAttribute('href', url)
			recipeCard.setAttribute('target', '_blank')
			recipeCard.classList.add('recipe-card')

			recipeName.textContent = name

			recipeCard.appendChild(recipeName)

			recipeCardContainer.appendChild(recipeCard)
			mainDisplay.appendChild(recipeCardContainer)
		})
	}
}

export default displayRecipes
