let mongoose = require('mongoose');
const Scema = mongoose.Schema;
const game = new Scema({
    title: {type: String},
    genre: {type: String},
    release_date: {type: String}
});

module.exports = mongoose.model('Game', game);