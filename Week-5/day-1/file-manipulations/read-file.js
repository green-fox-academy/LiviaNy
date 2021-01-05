const fs = require(`fs`);
let fileName = `my-file.txt`;

try {
    let fileContent = fs.readFileSync(fileName, `utf-8`);
    console.log(fileContent);
}
catch {
    console.log(`UNable to read file: ${fileName}`);
}