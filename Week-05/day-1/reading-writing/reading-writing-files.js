let fs = require(`fs`);

fs.readFile(`readMe.txt`, `utf8`, function(err, data){
    fs.writeFile(`writeMe2.txt`, data);
});
