`use strict`;

//   On the click of the button,
//   Count the items in the list
//   And display the result in the result element.

const button = document.querySelector(`button`);

function countList() {
  const list = document.querySelectorAll(`li`);
  const result = document.querySelector(`.result`);
  result.textContent = list.length;
}

button.addEventListener(`click`, countList);
