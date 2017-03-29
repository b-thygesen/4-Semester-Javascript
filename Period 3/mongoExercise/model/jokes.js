var connection = require('../db/db');
var db = connection.get();

exports.allJokes = function(db, callback) {
  // Get the documents collection
  var collection = db.collection('documents');
  // Find some documents
  collection.find({}).toArray(function(err, docs) {
    assert.equal(err, null);
    console.log("Found the following records");
    console.log(docs)
    callback(docs);
  });
}

/*
exports.findJoke = 	function(id,callback){..};
exports.addJoke = 	function(jokeToAdd,callback) { .. };
exports.editJoke = 	function(jokeToEdit,callback) { .. };
exports.deleteJoke = 	function(id,callback){ .. };
exports.randomJoke = 	function randomJoke(callback){..};
*/