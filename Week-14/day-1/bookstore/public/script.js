`use strict`;

const url = `localhost:8080`;

const xhr = new XMLHttpRequest();
xhr.onload = () => {
  const titles = JSON.parse(xhr.response);
  console.log(titles);
  addBookTitles(titles.book_name);
};
xhr.open(`GET`, `${url}/titles`, true);
xhr.send();

function addBookTitles(bookTitles) {
  const tbody = document.querySelector(`tbody`);
  books.forEach((element) => {
    const tr = document.createElement(`tr`);
    tbody.appendChild(tr);
    const title = document.createElement(`th`);
    title.setAttribute(`class`, `title`);
    title.textContent = element;
    tr.appendChild(title);
  });
}
