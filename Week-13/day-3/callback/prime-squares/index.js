`use strict`;

const section = document.querySelector(`section`);
for (i = 0; i < 100; i++) {
  let divElement = document.createElement(`div`);
  divElement.innerText = i + 1;
  section.appendChild(divElement);
}
console.log(section);
