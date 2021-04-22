`use strict`;

const genres = document.querySelector(`#genre-selector`);
const drama = document.querySelectorAll(`.drama`);
const comedy = document.querySelectorAll(`.comedy`);
const scifi = document.querySelectorAll(`.sci-fi`);
const movieSelector = document.querySelector(`#movie-selector`);
const selected = document.querySelector(`#selected`);
genres.addEventListener(`change`, (event) => {
  reset(scifi);
  reset(drama);
  reset(comedy);
  resetOptions();
  if (event.target.value === `Sci-fi`) {
    remover(drama, comedy);
  } else if (event.target.value === `Drama`) {
    remover(comedy, scifi);
  } else if (event.target.value === 'Comedy') {
    remover(scifi, drama);
  }
});

function remover(fistGenre, secondGenre) {
  fistGenre.forEach((movie) => {
    movie.style.display = `none`;
  });
  secondGenre.forEach((movie) => {
    movie.style.display = `none`;
  });
}

function reset(genre) {
  genre.forEach((movie) => {
    if (movie.style.display === `none`) {
      movie.style.display = `block`;
    }
  });
}

function createElement(value, id, theClass, inner) {
  const selectorMenu = document.querySelector(`#movie-selector`);
  const element = document.createElement(`option`);
  element.setAttribute(`value`, value);
  element.setAttribute(`id`, id);
  element.setAttribute(`class`, theClass);
  element.textContent = inner;
  selectorMenu.appendChild(element);
}

function resetOptions() {
  selected.textContent = `The selected movie is: -`;
  movieSelector.value = '';
}

movieSelector.addEventListener(`click`, (event) => {
  if (event.target.value !== ``) {
    selected.textContent = `The selected movie is: ${event.target.value}`;
  } else {
    selected.textContent = `The selected movie is: -`;
  }
});
