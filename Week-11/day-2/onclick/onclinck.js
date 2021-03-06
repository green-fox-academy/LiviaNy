// Turn the party on and off by clicking the button. (the whole page)
const button = document.querySelector(`button`);
const body = document.querySelector(`body`);

button.onclick = () => {
  if (button.innerText === `Party`) {
    body.setAttribute(`class`, `party`);
    button.innerText = `Party Off`;
  } else {
    body.setAttribute(`class`, ``);
    button.innerText = `Party`;
  }
};
