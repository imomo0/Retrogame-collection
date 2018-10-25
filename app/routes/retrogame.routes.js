module.exports = (app) => {
    const games = require('../controllers/retrogame.controller.js');

    // Creat a new game
    app.post('/games', games.create);

    // Retrive all games
    app.get('/games', games.findAll);

    // Retrive one game by ID
    app.get('/games/:id', games.findOneById)
    app.get('/games/Console/:console', games.findByConsole)

    // Update one game by ID
    app.put('/games/:id', games.update);

    // Delete a game
    app.delete('/games/:id', games.delete);
}