// Add an item that says 'The Green Fox' to the asteroid list.

const asteroidList = document.querySelector(`ul.asteroids`)
const newAsteroid = document.createElement(`li`)

newAsteroid.textContent = `The Green Fox`
asteroidList.appendChild(newAsteroid)

// Add an item that says 'The Lamplighter' to the asteroid list.
// Add a heading saying 'I can add elements to the DOM!' to the .container.
// Add an image, any image, to the container.