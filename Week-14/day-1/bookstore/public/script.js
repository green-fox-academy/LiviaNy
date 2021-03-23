`use strict`;

const url = `http://localhost:3000`;
let params = window.location.search.substr(1);

const xhr = new XMLHttpRequest();
xhr.onload = () => {
  const titles = JSON.parse(xhr.response);
  addBookTitles(titles);
};
xhr.open(`GET`, `${url}/books?${params}`, true);
xhr.send();

function addBookTitles(bookInfo) {
  const tbody = document.querySelector(`tbody`);
  bookInfo.forEach((element) => {
    const tr = document.createElement(`tr`);
    tbody.appendChild(tr);
    const title = document.createElement(`th`);
    title.setAttribute(`class`, `title`);
    title.textContent = element.book_name;
    tr.appendChild(title);
    const author = document.createElement(`th`);
    author.setAttribute(`class`, `author`);
    author.textContent = element.aut_name;
    tr.appendChild(author);
    const category = document.createElement(`th`);
    category.setAttribute(`class`, `category`);
    category.textContent = element.cate_descrip;
    tr.appendChild(category);
    const publisher = document.createElement(`th`);
    publisher.setAttribute(`class`, `publisher`);
    publisher.textContent = element.pub_name;
    tr.appendChild(publisher);
    const price = document.createElement(`th`);
    price.setAttribute(`class`, `price`);
    price.textContent = element.book_price;
    tr.appendChild(price);
  });
}
