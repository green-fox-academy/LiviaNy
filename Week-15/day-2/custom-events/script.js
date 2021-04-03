// <!--
// In JavaScript you can define your own custom events. Try it!
// In the main.js you can see that if the left-side-click event is dispatched on the div then it will change its background-color.
// Also if the right-side-click is dispatched the background will change again.
// Define these two events.
//  - If the div's left side (0-200px) is clicked then dipatch the proper event
//  - If the div's right side (200px-400px) is clicked then dipatch the proper event
//  - Work in the provided main.js file.
// -->

'use strict';

const myDiv = document.querySelector('div');

myDiv.addEventListener('left-side-click', (ev) => {
  ev.target.style.backgroundColor = 'yellow';
});

myDiv.addEventListener('right-side-click', (ev) => {
  ev.target.style.backgroundColor = 'blue';
});

function leftClick(isLeft) {
  if (isLeft === true) {
    const leftEvent = new CustomEvent(`left-side-click`, {
      detail: {
        isLeft: true,
      },
    });
    myDiv.dispatchEvent(leftEvent);
  } else {
    const rightEvent = new CustomEvent(`right-side-click`, {
      detail: {
        isLeft: false,
      },
    });
    myDiv.dispatchEvent(rightEvent);
  }
}

document.addEventListener(`click`, (event) => {
  if (event.clientX < 200) {
    leftClick(true);
  } else {
    return leftClick(false);
  }
});
