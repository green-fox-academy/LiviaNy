`use strict`;

const button = document.querySelector(`#button`);
const input = document.querySelector(`#input`);
const left = document.querySelector(`#list-left`);
const right = document.querySelector(`#list-right`);
const movies = document.querySelector(`#movies`);

button.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(`GET`, `https://swapi.dev/api/people/?search=${input.value}`, true);
  xhr.send();
  xhr.onload = () => {
    const URL = [];
    const response = JSON.parse(xhr.response);
    clearName();
    for (let i = 0; i < response.results.length; i++) {
      getName(response.results[i].name);
      URL.push(response.results[i].films);
    }
    const names = document.querySelectorAll(`.left`);
    names.forEach((element) => {
      for (let j = 0; j < URL.length; j++) {
        for (let k = 0; k < URL[j].length; k++) {
          element.onclick = () => {
            const xhr2 = new XMLHttpRequest();
            xhr2.open(`GET`, URL[j][k], true);
            xhr2.onload = () => {
              const response2 = JSON.parse(xhr2.response);
              getFilms(response2.title);
            };
            xhr2.send();
          };
        }
      }
    });
  };
};

function getFilms(data) {
  let searchFilm = document.createElement(`li`);
  searchFilm.setAttribute(`class`, `right`);
  searchFilm.textContent = data;
  right.appendChild(searchFilm);
}

function getName(name) {
  let searchName = document.createElement(`li`);
  searchName.setAttribute(`class`, `left`);
  searchName.textContent = name;
  left.appendChild(searchName);
}

function clearName() {
  left.textContent = ``;
}
