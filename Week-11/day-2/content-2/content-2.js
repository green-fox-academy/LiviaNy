// 1) replace the list items' content with items from this list:
//       ['apple', 'banana', 'cat', 'dog']

const items = document.querySelectorAll(`li`)
const newItems = [`apple`, `banana`, `cat`, `dog`]
for (let i = 0; i < items.length; i++){
    items[i].innerText = newItems[i]
}

//2) change the <ul> element's background color to 'limegreen'
const limegreen = document.querySelector(`ul`)

limegreen.style.backgroundColor = `limegreen`
//         - use css class to change the color instead of the style property

limegreen.setAttribute(`style`, `background-color: lightgreen`)
