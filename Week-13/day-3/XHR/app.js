`use strict`;

const button = document.querySelector(`#button`);
const input = document.querySelector(`#input`);
const left = document.querySelector(`#list-left`);
const right = document.querySelector(`#list-right`);
const movies = document.querySelector(`#movies`);
let character = ``;

button.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(`GET`, `https://swapi.dev/api/people/?search=${input.value}`, true);
  xhr.send();
  xhr.onload = () => {
    const response = JSON.parse(xhr.response);
    clearName();
    for (let i = 0; i < response.results.length; i++) {
      getName(response.results[i].name);
      console.log(response.results[i]);
    }
  };
};

function getName(name) {
  let searchName = document.createElement(`li`);
  searchName.setAttribute(`class`, `left`);
  searchName.textContent = name;
  left.appendChild(searchName);
}

function clearName() {
  left.textContent = ``;
}
