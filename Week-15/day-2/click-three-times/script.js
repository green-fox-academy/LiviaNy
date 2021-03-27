`use strict`;

// Create a simple HTML document with one button.
// If the user clicks the button 3 times, and 5 seconds is already elapsed since the page is loaded, a text should appear under the button:
// 5 seconds elapsed and clicked 3 times
// If the user starts clicking before the first 5 seconds, nothing should be printed

const button = document.querySelector(`button`);
const body = document.querySelector(`body`);
let counter = 0;
let timer = 0;

let timing = setInterval(() => {
  timer++;
  console.log(timer);
  if (timer === 5) {
    clearTimeout(timing);
  }
}, 1000);

button.addEventListener(`click`, () => {
  counter++;
  if (counter > 2 && timer === 5) {
    createText();
  }
});

function createText() {
  const h1 = document.createElement(`h1`);
  h1.textContent = `5 seconds elapsed and clicked 3 times`;
  body.appendChild(h1);
}
