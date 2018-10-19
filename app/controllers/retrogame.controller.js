const Game = require('../models/retrogame.model.js');

exports.create = (req,res) => {
    console.log(req.body);
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
    Game.find((err, games)=>{
        if(err) return res.status(100).send({message: "No games :("});
        res.status(200).send(games);
    });
};

exports.findOne = (req,res) => {
    Game.findById(req.params.id)
    .then(game => {
        if(!game) return res.status(404).send({message: "Found no game with id: " + req.params.id});
        res.send(game);
    })
    .catch(err => {
        res.status(400).send({message: "Error: " + err.message});
    })
};

exports.update = (req,res) => {
    res.status(200).send({message: "update called"});
};

exports.delete = (req,res) => {
    res.status(200).send({message: "delete called"});
};