`use strict`;

let httpRequest = new XMLHttpRequest();

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

let body = document.getElementsByTagName(`body`)[0];

function image(URL, embedUrl) {
  let newImage = document.createElement(`img`);
  newImage.setAttribute(`src`, URL);
  let aTag = document.createElement('a');
  aTag.setAttribute('href', embedUrl);
  aTag.appendChild(newImage);

  body.appendChild(aTag);
}
