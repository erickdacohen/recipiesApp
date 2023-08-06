import { readRecipesFromLocalStorage } from '../utils/localStorage.js'

const displayRecipes = () => {
	const mainDisplay = document.getElementById('main-display-container')

	const recipes = readRecipesFromLocalStorage()
	if (!recipes) {
		const noRecipesDisplay = document.createElement('section')
		const noRecipesDisplayH2 = document.createElement('h2')

		noRecipesDisplayH2.textContent = 'No recipes to display'

		noRecipesDisplay.classList.add('no-recipes-to-display')

		noRecipesDisplay.appendChild(noRecipesDisplayH2)
		mainDisplay.appendChild(noRecipesDisplay)
	} else {
		// CONTINUE HERE
		recipes.forEach((recipe) => {
			const { name, url } = recipe
			const recipeCard = document.createElement()
		})
	}
}

export default displayRecipes
