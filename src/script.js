import AddRecipe from './components/AddRecipe.js'

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

const displaySearch = () => {
	mainDisplay.textContent = 'Search'
}

const displayGenerateRandom = () => {
	mainDisplay.textContent = 'Generate Random'
}

const displayAdd = () => {
	mainDisplay.textContent = 'Add Recipe'
}

// Always start with Search
displaySearch()

const addRecipe = new AddRecipe()
