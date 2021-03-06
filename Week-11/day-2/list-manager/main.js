// 1, Build up the necessary structure with JavaScript (try to use semantically correct elements)
// 2, Achive the same design by css
// 3, Try not to use css classes
// 4, Add some functionality to the buttons
//     - If "Up" is clicked the selection should move up by one
//     - If "Down" is clicked the selection should move down by one
//     - If "X" is clicked the selected item should be removed and the first item should be selected
//     - If ">" is clicked the selected item should be moved to the right side and the first item on the left side should be selected
// 5, Check all the edge cases, no error should be printed to the console
const elements = [
  {
    id: `bread`,
    onclicked: false,
    p: null,
  },
  {
    id: `milk`,
    onclicked: false,
    p: null,
  },
  {
    id: `orange`,
    onclicked: false,
    p: null,
  },
  {
    id: `tomato`,
    onclicked: false,
    p: null,
  },
];

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
for (let i = 0; i < elements.length; i++) {
  const element = document.createElement(`p`);
  element.setAttribute(`id`, elements[i].id);
  element.innerText = elements[i].id;
  leftBox.appendChild(element);
}
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
for (let i = 0; i < elements.length; i++) {
  const boxContent = document.createElement(`p`);
  boxContent.innerText = elements[i].p;
  rightBox.appendChild(boxContent);
}

const leftBoxElements = document.querySelectorAll(`#left-box p`);
leftBoxElements.forEach((element) => {
  element.onclick = () => {
    if (!element.onclicked) {
      element.onclicked = true;
    } else {
      element.onclicked = false;
    }
    if (element.onclicked) {
      element.style.backgroundColor = `grey`;
    } else {
      element.style.backgroundColor = null;
    }
  };
});

x.onclick = () => {
  leftBoxElements.forEach((element) => {
    if (element.onclicked) {
      element.onclicked = false;
    }
    if (element.onclicked) {
      element.style.backgroundColor = `grey`;
    } else {
      element.style.backgroundColor = null;
    }
  });
};

angleBracket.onclick = () => {
  leftBoxElements.forEach((element) => {
    if (element.onclicked) {
      element.remove();
    }
    //     if (element.onclicked) {
    //       element.style.backgroundColor = `grey`;
    //     } else {
    //       element.style.backgroundColor = null;
    //     }
  });
};
