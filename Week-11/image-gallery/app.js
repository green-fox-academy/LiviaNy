const pictures = [
    {
      title: `pic1`,
      description: `Lorem ipsum...`,
      URL: "./pic/1.jpeg",
    },
    {
        title: `pic2`,
      description: `Lorem ipsum...`,
      URL: "./pic/2.jpeg",
    },
    {
        title: `pic3`,
      description: `Lorem ipsum...`,
      URL: "./pic/3.jpeg",
    },
    {
        title: `pic4`,
      description: `Lorem ipsum...`,
      URL: "./pic/4.jpeg",
    },
    {
        title: `pic5`,
        description: `Lorem ipsum...`,
        URL: "./pic/5.jpeg",
    },
    {
        title: `pic6`,
        description: `Lorem ipsum...`,
        URL: "./pic/6.jpeg",
    },
    {
        title: `pic7`,
        description: `Lorem ipsum...`,
        URL: "./pic/7.jpeg",
    },
  ]

  const mainPicture = document.querySelector(`#main-picture`)
  const greatPicture = document.createElement(`img`)
  greatPicture.setAttribute(`id`, `greatPicture`)
  greatPicture.setAttribute(`src`, pictures[0].URL)
  const greatTitle = document.createElement(`p`)
  const greatDescription = document.createElement(`p`)
  greatTitle.setAttribute(`id`, `great-title`)
  greatDescription.setAttribute(`id`, `great-description`)
    greatTitle.innerText = pictures[0].title
    greatDescription.innerText = pictures[0].description
    const greatTitleDiv = document.createElement(`div`)
    const greatDescriptionDiv = document.createElement(`div`)
    greatTitleDiv.setAttribute(`id`, `great-title-div`)
    greatDescriptionDiv.setAttribute(`id`, `great-description-div`)
    const mainPictureBox = document.createElement(`div`)
    mainPictureBox.setAttribute(`id`, `great-picture-box`)
    const titleDescriptionDiv = document.createElement(`div`)
    titleDescriptionDiv.setAttribute(`id`, `title-description-div`)
    titleDescriptionDiv.appendChild(greatTitle)
    titleDescriptionDiv.appendChild(greatDescription)
    mainPictureBox.appendChild(greatPicture)
    mainPictureBox.appendChild(titleDescriptionDiv)
    mainPicture.appendChild(mainPictureBox)
    
    const slider = document.querySelector(`#slider`)
    function start(){
    for(let i=0; i<pictures.length;i++){
        const icon = document.createElement(`div`)
        icon.setAttribute(`id`, `icon-id${i}`)
        icon.setAttribute(`class`, `icon`)
        const iconPicture = document.createElement(`img`)
        iconPicture.setAttribute(`src`, pictures[i].URL)
        iconPicture.setAttribute(`id`, `icon-picture${i}`)
        icon.appendChild(iconPicture)
        slider.appendChild(icon)
    }
}
start()
    let counter = 0
    const rightArrow = document.querySelector(`#right-arrow`)
    const leftArrow = document.querySelector(`#left-arrow`)
    rightArrow.onclick = () => {
        if(counter >= pictures.length - 1){
            counter = 0
        }
        counter++
        greatPicture.setAttribute(`src`, pictures[counter].URL)
    }
    leftArrow.onclick = () => {
        if(counter === 0){
            counter = pictures.length
        }
        counter--
        greatPicture.setAttribute(`src`, pictures[counter].URL)
    }
