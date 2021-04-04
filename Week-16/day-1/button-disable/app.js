`use strict`;

const form = document.querySelector(`form`);
const signUp = document.querySelector(`#signup`);
const catLover = document.querySelector(`#catlover`);

form.addEventListener(`click`, () => {
  const dog = document.querySelector(`#dog`);
  const cat = document.querySelector(`#cat`);
  const viktor = document.querySelector(`#viktor`);
  const yes = document.querySelector(`#yes`);
  const no = document.querySelector(`#no`);
  if (dog.checked || cat.checked) {
    signUp.disabled = false;
  } else if (viktor.checked && no.checked) {
    catLover.disabled = false;
  } else if (yes.checked) {
    catLover.disabled = false;
  }
});

catLover.addEventListener(`click`, () => {
  alert(`Thank you, you've successfully signed up for cat facts`);
});

signUp.addEventListener(`click`, () => {
  alert(`Sigh, we still added you to the cat facts list`);
});
