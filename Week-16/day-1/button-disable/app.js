`use strict`;

const form = document.querySelector(`form`);
const signUp = document.querySelector(`#signup`);
const catLover = document.querySelector(`#catlover`);
const dog = document.querySelector(`#dog`);
const cat = document.querySelector(`#cat`);
const viktor = document.querySelector(`#viktor`);
const yes = document.querySelector(`#yes`);
const no = document.querySelector(`#no`);

form.addEventListener(`change`, () => {
  disableButtons();
  if (dog.checked || cat.checked) {
    signUp.disabled = false;
    if (yes.checked) {
      catLover.disabled = false;
    }
  } else if (viktor.checked && no.checked) {
    signUp.disabled = false;
  } else if (yes.checked) {
    catLover.disabled = false;
  }
});

function disableButtons() {
  signUp.disabled = true;
  catLover.disabled = true;
}

catLover.addEventListener(`click`, () => {
  alert(`Thank you, you've successfully signed up for cat facts`);
});

signUp.addEventListener(`click`, (event) => {
  if (viktor.checked && no.checked) {
    alert(`Sigh, we still added you to the cat facts list`);
  } else {
    alert(`Thank you, you've successfully signed up for cat facts`);
  }
});
