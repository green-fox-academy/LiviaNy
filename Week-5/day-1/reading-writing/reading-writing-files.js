let fs = require(`fs`);

let readMe = fs.readFileSync(`readme.txt`, `utf8`);
console.log(readMe);