`use strict`;
// - Gather 10.000 candies!
// - Clicking the ‘Create candies’ button gives you 1 candy.
// - You can buy a lollipop for 100 candies by clicking the ‘Buy lollipop’ button.
// - 10 lollipops generate 1 candy per second.
//   - Use the 🍭 emoji to display the lollipops you have
// - Display the candy producton rate in the `Candies / Second` row
// - If you press the "make candy rain" button, the candy generation should speed up 10x
const createCandies = document.querySelector(`.create-candies`);
const buyLollies = document.querySelector(`.buy-lollypops`);
const candyMachine = document.querySelector(`.candy-machine`);
const candies = document.querySelector(`.candies`);
const lollies = document.querySelector(`.lollypops`);
const speed = document.querySelector(`.speed`);

createCandies.addEventListener(`click`, function createCandy() {
  parseInt((candies.textContent += 100));
});

buyLollies.addEventListener(`click`, function buyLolly() {
  if (candies.textContent >= 100) {
    lollies.textContent += `🍭`;
    candies.textContent -= 100;
  }
  if ((lollies.textContent.length / 2) % 10 === 0) {
    speed.textContent++;
    timer();
  }
});

candyMachine.addEventListener(`click`, function candyMach() {
  speed.textContent *= 10;
  timer();
});

function timer() {
  if (speed.textContent > 0) {
    const interval = setInterval(() => {
      candies.textContent++;
      if (candies.textContent === `10000`) {
        clearInterval(interval);
      }
    }, 1000 / parseInt(speed.textContent));
  }
}
