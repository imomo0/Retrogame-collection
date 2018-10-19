const Game = require('../models/retrogame.model.js');

exports.create = (req,res) => {
    const game = new Game(req.body);
    game.save()
    .then(data => {
        return res.send(data);
    })
    .catch(err => {
        res.status(400).send("Error: " + err.message);
    })
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