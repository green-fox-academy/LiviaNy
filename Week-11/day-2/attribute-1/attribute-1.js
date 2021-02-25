// Write the image's url to the console.
const image = document.querySelector(`img`)
console.log(image)
//       Replace the image with a picture of your favorite animal.
image.setAttribute(`src` , `https://safety4sea.com/wp-content/uploads/2016/11/green-mamba.jpg`)
//       Make the link point to the Green Fox Academy website.
const link = document.querySelector(`a`)
link.setAttribute(`href`, `https://www.greenfoxacademy.com/`)
//       Disable the second button.
const secondButton = document.querySelector(`.this-one`)
secondButton.setAttribute(`disabled`, true)
//       Replace its text with 'Don't click me!'.

