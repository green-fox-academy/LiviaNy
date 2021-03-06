// At the beginning, add (append) ten stars to random coordinates via JavaScript. You'll have to create an element with class 'star' and set it an inline style. The left and top coordinates should be in % or vw/vh units so that the stars move if the window size changes.
// On click anywhere on section.world, add a star beneath the cursor.
// On random interval, a star should fall. That means you should pick a random star on random interval and give it fallen class, until all stars are fallen.
// Make trees grow on click!
// 💪 Add a rule that a new star cannot be added within 50px radius of any other.
// 💪 Move moon around by dragging it with mouse.

const world = document.querySelector(`section.world`);

function createRandomStars() {
  for (let i = 0; i < 10; i++) {
    let randomNumber = Math.floor(Math.random() * 50) + 10;
    const star = document.createElement(`div`);
    star.setAttribute(`class`, `star`);
    star.setAttribute(`style`, `left: ${randomNumber}vw; top: ${randomNumber}vh`);
    world.appendChild(star);
  }
}

createRandomStars();
