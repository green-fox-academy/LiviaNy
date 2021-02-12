`use strict`;

// Create a method that decrypts reversed-lines.txt

let fs = require(`fs`);

function reversing(fileName: string): void {
  try {
    let fileToReverse = fs.readFileSync(fileName, `utf-8`);

    let arraytoreverse: string[] = fileToReverse.split(`\n`);
    let reservedText: string[] = [];
    for (let i: number = 0; i < arraytoreverse.length; i++) {
      reservedText.push(arraytoreverse[i].split(``).reverse().join(``));
    }
    let textToRewrite: string = reservedText.join(`\n`);
    fs.writeFileSync(`reversed-lines.txt`, textToRewrite);
  } catch (e) {
    console.log(`no file to read`);
  }
}

reversing(`reversed-lines.txt`);
