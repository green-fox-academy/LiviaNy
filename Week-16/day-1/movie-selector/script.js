`use strict`;

const genres = document.querySelector(`#genre-selector`);
const drama = document.querySelectorAll(`.drama`);
const comedy = document.querySelectorAll(`.comedy`);
const scifi = document.querySelectorAll(`.sci-fi`);
const movieSelector = document.querySelector(`#movie-selector`);

genres.addEventListener(`click`, (event) => {
  if (event.target.value === `Sci-fi`) {
    drama.forEach((movie) => {
      movie.remove();
    });
    comedy.forEach((movie) => {
      movie.remove();
    });
  } else if (event.target.value === `Drama`) {
    comedy.forEach((movie) => {
      movie.remove();
    });
    scifi.forEach((movie) => {
      movie.remove();
    });
  } else if (event.target.value === 'Comedy') {
    scifi.forEach((movie) => {
      movie.remove();
    });
    drama.forEach((movie) => {
      movie.remove();
    });
  }
});

function remover(fistGenre, secondGenre) {
  fistGenre.forEach((movie) => {
    movie.remove();
  });
  secondGenre.forEach((movie) => {
    movie.remove();
  });
}

movieSelector.addEventListener(`click`, (event) => {
  const selected = document.querySelector(`#selected`);
  selected.textContent = `The selected movie is: ${event.target.value}`;
});
