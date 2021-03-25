`use strict`;

//   1) Subscibe to keyup events on the global window object
//   2) Console log the event object and peek inside
//   3) Display the last pressed key's code as "Last pressed key code is: __"
const keyWatcher = document.querySelector(`h1`);

window.addEventListener(`keydown`, (event) => {
  keyWatcher.textContent = `Last pressed key code is: ${event.key}`;
  console.log(event);
});
