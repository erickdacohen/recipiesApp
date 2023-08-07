import { readRecipesFromLocalStorage } from './localStorage.js'

const generateRandomRecipe = () => {
	const recipes = readRecipesFromLocalStorage()
	const randomIndex = Math.floor(Math.random() * recipes.length)

	const recipeToDisplay = recipes[randomIndex]
	return recipeToDisplay
}

export default generateRandomRecipe
