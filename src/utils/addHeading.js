const mainDisplay = document.getElementById('main-display-container')
const addHeading = (headingText) => {
	const heading = document.createElement('h1')
	heading.classList.add('display-section-heading')
	heading.innerText = headingText
	mainDisplay.appendChild(heading)
}

export default addHeading
