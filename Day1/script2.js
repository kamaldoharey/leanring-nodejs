const fs = require('fs');


fs.readFile('Day1/example.txt', 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});