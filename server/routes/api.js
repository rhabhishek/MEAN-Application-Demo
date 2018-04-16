const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const Song = require('../../src/app/schema/song');

const uri = 'mongodb://rhabhishek:pwd123@ds014368.mlab.com:14368/mean-application-demo';
mongoose.connect(uri);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

router.get('/songs', function (req, res) {

  Song.find({}, function (err, result) {
    res.status(200).json(result);
  });
});


router.get('/songs/:id', function (req, res) {
  var id = req.params.id;
  // console.log('in rest '+id);
  Song.findOne({"_id": id}, function (err, result) {
    res.status(200).json(result);
  });
});

router.post('/songs', function (req, res) {
  var song = new Song(req.body);
  // console.log("in api"+song)
  song.save(function (err) {
    if (err) throw err;
    res.json({"Message": "Song Added."});
  });
});


router.delete('/songs/:id', function (req, res) {
  var id = req.params.id;
  // console.log('in rest '+id);
  Song.deleteOne({"_id": id}, function (err) {
    if (err) throw err;
    res.json({"Message": "Song deleted."});
  });
});


router.patch('/songs/:id', function (req, res) {
  var id = req.params.id;
  var newdata = req.body;
  // console.log("in api " + newdata);
  Song.updateOne({"_id": id}, {$set: newdata}, function (err) {
    if (err) throw err;
    res.json({"Message": "Song updated."});
  });
});


module.exports = router;
