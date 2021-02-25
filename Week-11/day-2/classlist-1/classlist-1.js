// If the fourth p has a 'dolphin' class, replace apple's content with 'pear'
const paragraphs = document.querySelectorAll(`p`)
if(paragraphs[3].classList.contains(`dolphin`)){
    paragraphs[0].innerText = `pear`
}
console.log(paragraphs)
//       If the first p has an 'apple' class, replace cat's content with 'dog'
if(paragraphs[0].classList.contains(`apple`)){
    paragraphs[2].innerText = `dog`
}
//       Make apple red by adding a .red class
paragraphs[0].classList.add(`red`)
if(paragraphs[0].classList.contains(`red`)){
    paragraphs[0].setAttribute(`style`, `color: red`)
}
//       Make balloon less balloon-like (change its shape)
paragraphs[1].style.borderRadius = `0%`