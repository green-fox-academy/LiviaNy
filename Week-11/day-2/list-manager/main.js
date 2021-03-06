// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console

const body = document.querySelector(`body`);

const container = document.createElement(`div`);
container.setAttribute(`id`, `container`);
body.appendChild(container);
const leftBox = document.createElement(`div`);
leftBox.setAttribute(`id`, `left-box`);
container.appendChild(leftBox);
const midBox = document.createElement(`div`);
midBox.setAttribute(`id`, `mid-box`);
container.appendChild(midBox);
const rightBox = document.createElement(`div`);
rightBox.setAttribute(`id`, `right-box`);
container.appendChild(rightBox);
const bread = document.createElement(`p`);
bread.setAttribute(`id`, `bread`);
bread.innerText = `bread`;
leftBox.appendChild(bread);
const milk = document.createElement(`p`);
milk.setAttribute(`id`, `milk`);
milk.innerText = `milk`;
leftBox.appendChild(milk);
const orange = document.createElement(`p`);
orange.setAttribute(`id`, `orange`);
orange.innerText = `orange`;
leftBox.appendChild(orange);
const tomato = document.createElement(`p`);
tomato.setAttribute(`id`, `tomato`);
tomato.innerText = `tomato`;
leftBox.appendChild(tomato);
const up = document.createElement(`button`);
up.innerText = `Up`;
midBox.appendChild(up);
const angleBracket = document.createElement(`button`);
angleBracket.innerText = `>`;
midBox.appendChild(angleBracket);
const x = document.createElement(`button`);
x.innerText = `X`;
midBox.appendChild(x);
const down = document.createElement(`button`);
down.innerText = `Down`;
midBox.appendChild(down);
const firstBox = document.createElement(`p`);
rightBox.appendChild(firstBox);
const secondBox = document.createElement(`p`);
rightBox.appendChild(secondBox);
const thirdBox = document.createElement(`p`);
rightBox.appendChild(thirdBox);
const fourthBox = document.createElement(`p`);
rightBox.appendChild(fourthBox);
