`use strict`;
// Write a function that copies the contents of a file into another
// It should take the filenames as parameters
// It should return a boolean that shows if the copy was successful
const fs = require(`fs`);

function copyFile(fileName: string): boolean {
  try {
    let fileToCopy = fs.readFileSync(fileName, `utf-8`);
    fs.writeFileSync(`newFile.txt`, fileToCopy);
    return true;
  } catch (err) {
    return false;
  }
}

console.log(copyFile(`copyMe.txt`));
