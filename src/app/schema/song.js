var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var songSchema = mongoose.Schema({
  decade: String,
  artist: String,
  title: String,
  weeksAtOne: Number
});

module.exports = mongoose.model('Song', songSchema);

