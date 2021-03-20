`use strict`;

const button = document.querySelector(`#button`);
const input = document.querySelector(`#input`);
const list = document.querySelector(`#list`);

button.onclick = () => {
  const xhr = new XMLHttpRequest();
  xhr.open(`GET`, `https://swapi.dev/api/people/?search=${search.value}`, true);
  xhr.onload = () => {
    const data = JSON.parse(xhr.responseText);
  };
  xhr.send();
};
