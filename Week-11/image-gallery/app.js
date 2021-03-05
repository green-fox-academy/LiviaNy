const pictures = [
  {
    title: 'Fuck You`re Grammar',
    description: `Úgy gondolom, hogz a kollektiv tudattalan gyáva módon darála le a marketing kasztot!`,
    URL: './pic/1.jpeg',
  },
  {
    title: `Eat shit.`,
    description: `There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. `,
    URL: './pic/2.jpeg',
  },
  {
    title: 'You`re a cunt.',
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    URL: './pic/3.jpeg',
  },
  {
    title: `Make the world a better place, jump off this cliff.`,
    description: `Voltaképpen nem hiszem, hogy a coca-cola a baloldalból gyártja le a troll kurzus tőkéjét.`,
    URL: './pic/4.jpeg',
  },
  {
    title: `Almost 2 million people die from diarrhea each year.`,
    description: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.`,
    URL: './pic/5.jpeg',
  },
  {
    title: `All of your friends wish you were dead.`,
    description: `A dolog úgy áll, hogy a lakosság zöme rettenetes lelke gátlástalanul tort ül a polgárháborús uszitáson.`,
    URL: './pic/6.jpeg',
  },
  {
    title: `We learn to swim...`,
    description: `Ne legyen kétségünk afelől, hogy a kapitaliymus neuritikus tudattalanjának Joe Biden syabadsága képezi a fedezetét.`,
    URL: './pic/7.jpeg',
  },
];

const mainPicture = document.querySelector(`#main-picture`);
const greatPicture = document.createElement(`img`);
greatPicture.setAttribute(`id`, `greatPicture`);
greatPicture.setAttribute(`src`, pictures[0].URL);
const greatTitle = document.createElement(`p`);
const greatDescription = document.createElement(`p`);
greatTitle.setAttribute(`id`, `great-title`);
greatDescription.setAttribute(`id`, `great-description`);
greatTitle.innerText = pictures[0].title;
greatDescription.innerText = pictures[0].description;
const greatTitleDiv = document.createElement(`div`);
const greatDescriptionDiv = document.createElement(`div`);
greatTitleDiv.setAttribute(`id`, `great-title-div`);
greatDescriptionDiv.setAttribute(`id`, `great-description-div`);
const mainPictureBox = document.createElement(`div`);
mainPictureBox.setAttribute(`id`, `great-picture-box`);
const titleDescriptionDiv = document.createElement(`div`);
titleDescriptionDiv.setAttribute(`id`, `title-description-div`);
titleDescriptionDiv.appendChild(greatTitle);
titleDescriptionDiv.appendChild(greatDescription);
mainPictureBox.appendChild(greatPicture);
mainPictureBox.appendChild(titleDescriptionDiv);
mainPicture.appendChild(mainPictureBox);

const slider = document.querySelector(`#slider`);
function start() {
  for (let i = 0; i < pictures.length; i++) {
    const icon = document.createElement(`div`);
    icon.setAttribute(`id`, `icon-id${i}`);
    icon.setAttribute(`class`, `icon`);
    const iconPicture = document.createElement(`img`);
    iconPicture.setAttribute(`src`, pictures[i].URL);
    iconPicture.setAttribute(`id`, `icon-picture${i}`);
    icon.appendChild(iconPicture);
    slider.appendChild(icon);
  }
}
start();
let counter = 0;
const rightArrow = document.querySelector(`#right-arrow`);
const leftArrow = document.querySelector(`#left-arrow`);
rightArrow.onclick = () => {
  if (counter >= pictures.length - 1) {
    counter = 0;
  }
  counter++;
  greatPicture.setAttribute(`src`, pictures[counter].URL);
  greatTitle.innerText = pictures[counter].title;
  greatDescription.innerText = pictures[counter].description;
};
leftArrow.onclick = () => {
  if (counter === 0) {
    counter = pictures.length;
  }
  counter--;
  greatPicture.setAttribute(`src`, pictures[counter].URL);
  greatTitle.innerText = pictures[counter].title;
  greatDescription.innerText = pictures[counter].description;
};
