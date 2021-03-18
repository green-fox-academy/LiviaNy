// Create a function that updates the background-image of the <body> element
// The image value should be https://loremflickr.com/g/1280/800/hungary/
// Make sure every time you refresh the image, you add a cachebuster. WTF is a cachebuster?
// Create a timer function that refreshes the background every 5 seconds
const body = document.querySelector('body');

setInterval(() => {
  let buster = Math.random() * 10000000000000000;
  body.style.backgroundImage = `url('https://loremflickr.com/g/1280/800/hungary/?${buster}')`;
}, 5000);
