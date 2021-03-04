// Add an item that says 'The Green Fox' to the asteroid list.

const asteroidList = document.querySelector(`ul.asteroids`)
const newAsteroid = document.createElement(`li`)

newAsteroid.textContent = `The Green Fox`
asteroidList.appendChild(newAsteroid)

// Add an item that says 'The Lamplighter' to the asteroid list.
const lamplighter = document.createElement(`li`)
lamplighter.textContent = `The Lamplighter`
asteroidList.appendChild(lamplighter)
// Add a heading saying 'I can add elements to the DOM!' to the .container.
const content = document.querySelector(`.container`)
const newContent = document.createElement(`h2`)

newContent.textContent=`I can add elements to the DOM!`
content.appendChild(newContent)
// Add an image, any image, to the container.