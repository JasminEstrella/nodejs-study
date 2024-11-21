const fs = require("fs"); // filesystem


// Write in a file
// fs.writeFile('message.txt', "Hello from NodeJS!!!", (err) => {
//     if (err) throw err;
//     console.log("The file has been saved!");
// } )


// Read in a file
fs.readFile('message.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
}); 