`use strict`;

const url = `localhost:3000`;

const xhr = new XMLHttpRequest();
xhr.open(`GET`, `${url}/titles`, true);
xhr.onload = () => {
  const titles = JSON.parse(xhr.response);
  console.log(titles);
};
xhr.send();
