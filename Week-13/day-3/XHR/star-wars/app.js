`use strict`;

const button = document.querySelector(`#button`);
const input = document.querySelector(`#input`);
const left = document.querySelector(`#list-left`);
const right = document.querySelector(`#list-right`);
const movies = document.querySelector(`#movies`);
const moviesObject = {};

const httpRequest = new XMLHttpRequest();
httpRequest.open(`GET`, `https://swapi.dev/api/films/`, true);
httpRequest.send();
httpRequest.onload = () => {
  const response = JSON.parse(httpRequest.response);
  response.results.forEach((movie) => {
    if (!moviesObject[movie]) {
      moviesObject[movie.title] = movie.url;
    }
  });
};

button.onclick = () => {
  const httpRequest2 = new XMLHttpRequest();
  httpRequest2.open(`GET`, `https://swapi.dev/api/people/?search=${input.value}`, true);
  httpRequest2.send();
  httpRequest2.onload = () => {
    const characters = JSON.parse(httpRequest2.response).results;
    clearName();
    getName(characters);
    const leftNames = document.querySelectorAll(`.left`);
    for (let j = 0; j < leftNames.length; j++) {
      leftNames[j].onclick = () => {
        clearFilms();
        let films = characters[j].films;
        for (const [key, value] of Object.entries(moviesObject)) {
          films.filter((m) => {
            if (value === m) {
              getFilms(key);
            }
          });
        }
      };
    }
  };
};

function getFilms(movie) {
  const foundMovie = document.createElement(`li`);
  foundMovie.setAttribute(`class`, `right`);
  foundMovie.textContent = movie;
  right.appendChild(foundMovie);
}

function getName(names) {
  names.forEach((name) => {
    let searchName = document.createElement(`li`);
    searchName.setAttribute(`class`, `left`);
    searchName.textContent = name.name;
    left.appendChild(searchName);
  });
}

function clearName() {
  left.textContent = ``;
}

function clearFilms() {
  right.textContent = ``;
}
