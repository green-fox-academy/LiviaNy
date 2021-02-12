`use strict`;

// Create a method that decrypts duplicated-chars.txt
// Decryption is the process reversing an encryption, i.e. the process
// which converts encrypted data into its original form.
const fs = require(`fs`);

function decrypter(fileName: string): void {
  try {
    let fileToDecrypt = fs.readFileSync(fileName, `utf-8`);
    fileToDecrypt.split(` `);
    console.log(fileToDecrypt);
  } catch (e) {
    console.log(`No such file.`);
  }
}

decrypter(`duplicated-chars.txt`);
