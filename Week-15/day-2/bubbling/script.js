`use strict`;

//   Here is an image inspector, but the buttons are not implemented yet, that will
//   be your task!
//    - the nav buttons (up, down, left, right) move the background by 10px
//    - the zoom buttons increase/decrease the image by 20%
//    - attach only two event listeners to the nav element
//      - one for navigation
//      - one for zooming

const buttons = document.querySelector('nav');
const image = document.querySelector(`.img-inspector`);

let positionX = 0;
let positionY = 0;
let zoom = 200;
buttons.addEventListener(`click`, (event) => {
  const direction = event.target.dataset.direction;
  if (direction === `up`) {
    image.style.backgroundPositionY = `${(positionY -= 10)}px`;
  } else if (direction === `down`) {
    image.style.backgroundPositionY = `${(positionY += 10)}px`;
  } else if (direction === `left`) {
    image.style.backgroundPositionX = `${(positionX -= 10)}px`;
  } else if (direction === `right`) {
    image.style.backgroundPositionX = `${(positionX += 10)}px`;
  } else if (direction === `in`) {
    image.style.backgroundSize = `${(zoom += 20)}%`;
  } else if (direction === `out`) {
    image.style.backgroundSize = `${(zoom -= 20)}%`;
  }
});
