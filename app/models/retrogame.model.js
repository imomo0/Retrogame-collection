let mongoose = require('mongoose');
const Scema = mongoose.Schema;
const game = new Scema({
//    _id: {type: Number},
    title: {type: String},
    genre: {type: String},
    realeas_date: {type: String}
});

module.exports = mongoose.model('Game', game);