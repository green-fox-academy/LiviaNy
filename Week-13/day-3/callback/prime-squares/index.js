`use strict`;
// generate 100 divs to the <section> element and add index numbers to it as the element's textContent
const section = document.querySelector(`section`);
for (i = 2; i <= 100; i++) {
  let divElement = document.createElement(`div`);
  divElement.innerText = i;
  section.appendChild(divElement);
}

// Create a function that adds a 'not-prime' class to a div if it's not a prime and 'prime' if it is
const divArray = document.querySelectorAll(`div`);

function isPrime(div) {
  const number = parseInt(div.innerText);
  if (number === 1) {
    return div.setAttribute(`class`, `not-prime`);
  } else if (number === 2) {
    return div.setAttribute(`class`, `prime`);
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return div.setAttribute(`class`, `prime`);
    }
  }
  return div.setAttribute(`class`, `not-prime`);
}

// Create a timer that keeps calling the prime validator function until it reaches the last element
// the timer should fire every 100ms
// the timer should stop when there are no more elements left to be colored

let index = 0;
let interval = setInterval(() => {
  isPrime(divArray[index]);
  index++;
  if (index >= divArray.length) {
    clearInterval(interval);
  }
}, 1000);
