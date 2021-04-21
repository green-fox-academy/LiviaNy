`use strit`;

// Create a method that decrypts reversed-order.txt
let fs = require(`fs`);
function decryptReversedOrder(fileName: string): void {
  try {
    let fileToReverse = fs.readFileSync(fileName, `utf-8`);
    let arrayToReverse: string = fileToReverse.split(`\n`).reverse().join(`\n`);
    fs.writeFileSync(fileName, arrayToReverse);
  } catch (e) {
    console.log(`Cant write file`);
  }
}

decryptReversedOrder(`reversed-order.txt`);
