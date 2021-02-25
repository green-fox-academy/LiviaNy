// 1)  Append every paragraph with the last one's content.
const paragraphs = document.querySelectorAll(`p`)
console.log(paragraphs)
const appender = document.querySelector(`p.animals`)
paragraphs.forEach(p => {
    if (p !== appender){
        p.innerText = p.innerText + ` ` + appender.innerText
    }
});
//     2)  Do the same again, but you should keep the cat strong.