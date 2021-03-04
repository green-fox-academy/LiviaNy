// Each list item should have its category as a class and its content as text content. -->
const planetData = [
  {
    category: 'inhabited',
    content: 'Foxes',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Whales and Rabbits',
    asteroid: true,
  },
  {
    category: 'uninhabited',
    content: 'Baobabs and Roses',
    asteroid: true,
  },
  {
    category: 'inhabited',
    content: 'Giant monsters',
    asteroid: false,
  },
  {
    category: 'inhabited',
    content: 'Sheep',
    asteroid: true,
  },
];

// Remove the king from the list.
const content = document.querySelector(`ul.asteroids`);
const king = document.querySelector(`li`);

content.removeChild(king);
// Fill the list based on the following list of objects.
    for(let i = 0; i < planetData.length; i++){
        let newElement = document.createElement(`li`);
        let textContent = document.createTextNode(planetData[i].content);
        content.appendChild(newElement);
        newElement.classList.add(`category`);
        newElement.category = planetData[i].category;
        newElement.appendChild(textContent);
    }
// Only add the asteroids to the list.
for(let i = 0; i < planetData.length; i++){
if(planetData[i].asteroid){
    let newElement = document.createElement(`li`);
        let textContent = document.createTextNode(planetData[i].content);
        content.appendChild(newElement);
        newElement.classList.add(`category`);
        newElement.category = planetData[i].category;
        newElement.appendChild(textContent);
    }
}
