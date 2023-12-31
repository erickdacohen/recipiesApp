import Recipe from '../components/Recipe.js'
import makeTitleCase from './makeTitleCase.js'

const readRecipesFromLocalStorage = () => {
	if (localStorage.getItem('recipes') === null) {
		return
	} else {
		return JSON.parse(localStorage.getItem('recipes'))
	}
}

let recipes = readRecipesFromLocalStorage()

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
		recipesLocalStorage.push(recipe)
		localStorage.setItem('recipes', JSON.stringify(recipesLocalStorage))
	}

	alert('Recipe added!')
	// clear the fields
	document.querySelector('#name-input').value = ''
	document.querySelector('#url-input').value = ''
	recipes = readRecipesFromLocalStorage()

	return
}

const deleteRecipeFromLocalStorage = (recipeId) => {
	const recipesLocalStorage = readRecipesFromLocalStorage()
	const filteredItems = recipesLocalStorage.filter(
		(recipe) => recipe.id !== Number(recipeId)
	)

	localStorage.setItem('recipes', JSON.stringify(filteredItems))
	recipes = readRecipesFromLocalStorage()
	return
}

export {
	recipes,
	readRecipesFromLocalStorage,
	addNewRecipeToLocalStorage,
	deleteRecipeFromLocalStorage,
}
