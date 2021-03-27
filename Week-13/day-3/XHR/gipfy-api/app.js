`use strict`;

const httpRequest = new XMLHttpRequest();

httpRequest.open(
  `GET`,
  `https://api.giphy.com/v1/stickers/search?api_key=5lc4FfhpA5Mc8boyaaiMzv0weaOughqX&q=cat&limit=16&offset=0&rating=g&lang=en`,
  true
);
httpRequest.send();
httpRequest.onload = () => {
  const result = JSON.parse(httpRequest.responseText);
  for (let i = 0; i < result.data.length; i++) {
    console.log(result.data);
    image(result.data[i].images.original.url, result.data[i].images.downsized.url);
  }
};

const body = document.querySelector(`body`);

function image(url, movingGifUrl) {
  let newImage = document.createElement(`img`);
  newImage.setAttribute(`src`, url);
  let aTag = document.createElement('a');
  aTag.setAttribute('href', movingGifUrl);
  aTag.appendChild(newImage);

  body.appendChild(aTag);
}
