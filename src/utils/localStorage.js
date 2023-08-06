import Recipe from '../components/Recipe.js'
import makeTitleCase from './makeTitleCase.js'
import displayRecipes from '../components/RecipeDisplay.js'

const readRecipesFromLocalStorage = () => {
	if (localStorage.getItem('recipes') === null) {
		return
	} else {
		return localStorage.getItem('recipes')
	}
}

const addNewRecipeToLocalStorage = () => {
	// grab values from inputs
	const name = makeTitleCase(document.querySelector('#name-input').value)
	const url = document.querySelector('#url-input').value
	const id = Date.now()
	const recipe = new Recipe(id, name, url)

	let recipesLocalStorage = readRecipesFromLocalStorage()
	if (recipesLocalStorage === undefined || recipesLocalStorage.length === 0) {
		recipesLocalStorage = []
		recipesLocalStorage.push(recipe)
		localStorage.setItem('recipes', JSON.stringify(recipesLocalStorage))
	} else {
		recipesLocalStorage = JSON.parse(recipesLocalStorage)
		recipesLocalStorage.push(recipe)
		localStorage.setItem('recipes', JSON.stringify(recipesLocalStorage))
	}

	alert('Recipe added!')
	// clear the fields
	document.querySelector('#name-input').value = ''
	document.querySelector('#url-input').value = ''
	return recipe
}

const deleteRecipeFromLocalStorage = (recipeId) => {
	const recipesLocalStorage = JSON.parse(readRecipesFromLocalStorage())
	const filteredItems = recipesLocalStorage.filter(
		(recipe) => recipe.id !== Number(recipeId)
	)

	localStorage.setItem('recipes', JSON.stringify(filteredItems))
	return
}

export {
	readRecipesFromLocalStorage,
	addNewRecipeToLocalStorage,
	deleteRecipeFromLocalStorage,
}
