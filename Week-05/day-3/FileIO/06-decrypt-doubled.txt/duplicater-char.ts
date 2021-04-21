`use strict`;

// Create a method that decrypts duplicated-chars.txt
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
const fs = require(`fs`);

function decrypter(fileName: string): void {
  try {
    let fileToDecrypt = fs.readFileSync(fileName, `utf-8`);
    let splittedFile = fileToDecrypt.split(``);
    let cryptedText: string[] = [];
    for (let i: number = 0; i < splittedFile.length; i++) {
      if (splittedFile[i] !== splittedFile[i + 1]) {
        cryptedText.push(splittedFile[i]);
      }
    }
    splittedFile = cryptedText.join(``);
    fs.writeFileSync(`duplicated-chars.txt`, splittedFile);
  } catch (e) {
    console.log(`No such file.`);
  }
}

decrypter(`duplicated-chars.txt`);
