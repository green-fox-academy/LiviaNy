`use strict`;

// Create a simple HTML document with one button. If the user clicks the button it should wait 2 seconds and it should show a text under the button: 2 seconds ellapsed
const button = document.querySelector(`button`);
const body = document.querySelector(`body`);

button.addEventListener(`click`, createText);

function createText() {
  setTimeout(() => {
    const h1 = document.createElement(`h1`);
    h1.textContent = `2 seconds ellapsed`;
    body.appendChild(h1);
  }, 2000);
}
