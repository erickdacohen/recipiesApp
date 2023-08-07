const filterRecipes = (searchText, recipes) => {
	return recipes.filter((recipe) =>
		recipe.name.toLowerCase().includes(searchText)
	)
}

export default filterRecipes
