// Import
let myDir = require("./export");

myDir(process.argv[2], process.argv[3], function(err, data) {
    if(err) {
        return console.log(err);
    }
    console.log(data);
})