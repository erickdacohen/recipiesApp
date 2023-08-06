// build search and search functionality
const buildSearchForm = () => {
	const mainDisplay = document.getElementById('main-display-container')
	const form = document.createElement('form')
	const recipeURLInput = document.createElement('input')
	recipeURLInput.classList.add('search-form-text-input')

	form.appendChild(recipeURLInput)
	mainDisplay.appendChild(form)
}

export default buildSearchForm
