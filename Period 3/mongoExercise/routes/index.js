var express = require('express');
var router = express.Router();
var connection = require('../db/db');
var db = connection.get();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/alljokes', function(req, res, next) {
    console.log(req.body);
    db.joke.find({}, function(err, docs){
        if (err) return err;
        console.log(docs);
        res.send(docs);
    });
});

module.exports = router;
