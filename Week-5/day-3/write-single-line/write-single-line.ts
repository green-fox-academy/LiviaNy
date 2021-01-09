import { fileURLToPath } from "url";

`use strict`;
// Write a function that is able to manipulate a file
// By writing your name into it as a single line
// The file should be named "my-file.txt"
// In case the program is unable to write the file,
// It should print the following error message: "Unable to write file: my-file.txt"

let fs = require(`fs`);

function fileWriter(content: string) {
    try {
        fs.writeFileSync(`my-file.txt`, content);
    }
    catch {
        console.log(`Unable to write file: my-file.txt`);
    }
}

fileWriter(`Livia Nyitrai`);
