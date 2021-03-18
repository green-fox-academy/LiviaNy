`use strict`;
// Create a timeout that will set the display to "Bomb exploded" in 10 seconds
// If you click on the button set the display to "Bomb defused" and stop the timeout
// Extra: create an interval which will update the remaining seconds in the display
const timer = document.querySelector(`.display`);
const bomb = document.querySelector(`button`);

bomb.addEventListener(`click`, defuser);
function defuser() {
  timer.textContent = `Bomb defused`;
  clearInterval(timeCounter);
}

const timeCounter = setInterval(() => {
  let counter = parseInt(timer.innerHTML);
  timer.textContent = counter - 1;
  if (counter === 1) {
    bomb.textContent = `Bomb exploded.`;
    clearInterval(timeCounter);
  }
}, 1000);
