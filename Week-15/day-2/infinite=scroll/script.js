const body = document.querySelector(`body`);
let random = Math.floor(Math.random() * 10) + 1;
let scrollThreshold = 300;

function randomColor() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  return 'rgb(' + r + ',' + g + ',' + b + ')';
}

function addRandomSection(number) {
  for (let i = 0; i < number; i++) {
    let newDiv = document.createElement(`div`);
    newDiv.setAttribute(`class`, `section`);
    newDiv.style.background = randomColor();
    body.appendChild(newDiv);
  }
}

function addRandomSectionBefore(number) {
  for (let i = 0; i < number; i++) {
    let newDiv = document.createElement(`div`);
    newDiv.setAttribute(`class`, `section`);
    newDiv.style.background = randomColor();
    body.insertBefore(newDiv, body.childNodes[0]);
  }
}

window.onload = () => {
  addRandomSection(random);
};

window.addEventListener(`scroll`, () => {
  let lastPosition = window.scrollY;
  let windowHeight = document.querySelectorAll(`.section`).length * 200 - window.innerHeight;
  if (windowHeight - scrollThreshold <= lastPosition) {
    addRandomSection(10);
  }
  if (scrollThreshold >= lastPosition) {
    addRandomSectionBefore(10);
  }
});
