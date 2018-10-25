module.exports = (app) => {
    const games = require('../controllers/retrogame.controller.js');

    // Creat a new game
    app.post('/games', games.create);

    /// GET COMMANDS ----------------------
    // Retrive all games
    app.get('/games', games.findAll);

    // Retrive game by ID
    app.get('/games/:id', games.findOneById)

    // Retrive games by console
    app.get('/platform/:platform', games.findByPlatform)

    /// PUT COMMANDS ----------------------
    // Update one game by ID
    app.put('/games/:id', games.update);

    /// DELETE COMMANDS -------------------
    // Delete a game
    app.delete('/games/:id', games.delete);
}