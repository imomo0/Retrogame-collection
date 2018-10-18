const Game = require('../models/retrogame.model.js');

exports.create = (req,res) => {
    const game = new Game(req.body);
    game.save()
    .then(game => {
        res.json('Game added');
    })
    .catch(err => {
        res.status(400).send("unable to add game");
    })
    res.status(200).send({message: "Create called"});
};

exports.findAll = (req, res) => {
    res.status(200).send({message: "findAll called"});
};

exports.findOne = (req,res) => {
    res.status(200).send({message: "findOne called"});
};

exports.update = (req,res) => {
    res.status(200).send({message: "update called"});
};

exports.delete = (req,res) => {
    res.status(200).send({message: "delete called"});
};