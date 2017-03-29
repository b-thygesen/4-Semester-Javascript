const path = require("path");
let fs = require("fs");

const pathToFile = process.argv[2];
const ext = "." + process.argv[3];




let dirSearcher = function(pathToDir, ext, callback) {
    fs.readdir(pathToFile, function(err, data){
    if(err){
        return callback(err);
    }
    var extension = "." + ext;
    filtered = data.filter((file)=> path.extname(file) === extension);
    callback(null, filtered.join("\n"));
})
}
module.exports = dirSearcher;

// .join konverterer array "filter" til en enkelt string.