const url = 'http://api.icndb.com/jokes/random';
const button = document.querySelector('button');

// const myAsincAjax = (url) => {
//   return new Promise((resolve, reject) => {
//     const xhr = new XMLHttpRequest();
//     xhr.open('GET', url);
//     xhr.onload = () => resolve(xhr.response);
//     xhr.onerror = () => reject(xhr.statusText);
//     xhr.send();
//   });
// };

// myAsincAjax(url).then((response) => {
//   const result = JSON.parse(response);
//   console.log(result.value.joke);
//   createJoke(result.value.joke);
// });

const fetchJoke = () => {
  clearJoke();
  fetch(url)
    .then((response) => response.json())
    .then((myResponse) => createJoke(myResponse.value.joke))
    .catch((error) => {
      console.log(error.message);
    });
};

function createJoke(joke) {
  const content = document.querySelector('#content');
  const jokeText = document.createElement(`h2`);
  jokeText.textContent = joke;
  content.appendChild(jokeText);
}

function clearJoke() {
  const joke = document.querySelector('#content');
  joke.textContent = '';
}

button.addEventListener(`click`, fetchJoke);
