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

exports.findByPlatform = (req, res) => {
    Game.find({platform: req.params.platform},(err, games)=>{
        if(err) return res.status(100).send({message: "No games :("});
        res.status(200).send(games);
    });
};

exports.findOneById = (req,res) => {
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
    Game.findOneAndUpdate({_id: req.params.id}, {$set: req.body}, {new: true}, (err, data) => {
        if(err) return res.status(404).send({message: "Error: " + err.message});
        res.status(200).send({status: "Updated", object: data});
    })
};

exports.delete = (req,res) => {
    Game.findOneAndDelete({_id: req.params.id}, (err, data) => {
        if(err) return res.status(404).send({message: "Could not find record"});
        res.status(200).send({status: "Deleted", object: data});
    });
};
