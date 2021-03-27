`use strict`;

//   Create an event listener which logs the current timestamp to the console once the button is clicked.
//   When the button is clicked for the second or any other times no event listener should be called.
//   Try to solve this two different ways.
//   hint: take a look at the button attributes https://developer.mozilla.org/en-US/docs/Web/HTML/Element/button

const button = document.querySelector(`button`);
//First solution
// button.addEventListener(`click`, clicking);

// button.addEventListener(`click`, clicking);

// function clicking() {
//   console.log(new Date());
//   button.removeEventListener(`click`, clicking);
// }

// Seconc solution

// button.addEventListener(
//   'click',
//   () => {
//     console.log(new Date());
//   },
//   { once: true }
// );

// Third solution
// let timeStamp = 0;
// button.addEventListener(`click`, (event) => {
//   if (timeStamp === 0) {
//     console.log(new Date());
//     timeStamp = event.timeStamp;
//   }
// });

// Fourth Solution
button.addEventListener(`click`, (event) => {
  console.log(new Date());
  button.setAttribute(`disabled`, true);
});
