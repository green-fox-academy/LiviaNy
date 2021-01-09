// Write a function that takes a filename as string,
// then returns the number of lines the file contains.
// It should return zero if it can't open the file, and
// should not raise any error.

let fs = require(`fs`);

function lineCount(fileName: string) {
    try {
        let readFileString = fs.readFileSync(fileName, `utf-8`).toString();
        let readFileCount = readFileString.split(`\r\n`).length;
        return console.log(readFileCount);
    }
    catch {
        console.log(`zero`);
    }
}

lineCount(`mey-file.txt`);