`use strict`;

const xhr = new XMLHttpRequest();
const search = [`apollo-11`, `moonlanding`];
const APIKey = `9aTlaTvCOnymsWVdCnCGPAZwvGmBpfFk`;
xhr.open(
  `GET`,
  `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${search[0]}&q=${search[1]}&api-key=${APIKey}`,
  true
);
xhr.send();
xhr.onload = () => {
  const result = JSON.parse(xhr.response);
  console.log(result);
  for (let i = 0; i < 3; i++) {
    createStory(
      result.response.docs[i].headline.main,
      result.response.docs[i].snippet,
      result.response.docs[i].pub_date
    );
  }
};

function createStory(headline, snippet, date) {
  const content = document.querySelector(`#content`);
  let newUl = document.createElement(`ul`);
  content.appendChild(newUl);
  let newHeadline = document.createElement(`li`);
  newHeadline.setAttribute(`class`, `headline`);
  newHeadline.innerText = headline;
  newUl.appendChild(newHeadline);
  let newSnippet = document.createElement(`li`);
  newSnippet.setAttribute(`class`, `snippet`);
  newSnippet.innerText = snippet;
  newUl.appendChild(newSnippet);
  let newDate = document.createElement(`li`);
  newDate.setAttribute(`class`, `date`);
  newDate.innerText = date;
  newDate.textContent = new Date(date).toLocaleDateString(`hu`);
  newUl.appendChild(newDate);
}
