const createRandomRecipeCard = (name, url, id) => {
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

	return recipeCardContainer
}

export default createRandomRecipeCard
