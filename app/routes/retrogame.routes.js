module.exports = (app) => {
    const games = require('../controllers/retrogame.controller.js');

    // Creat a new game
    app.post('/games', games.create);

    // Retrive all games
    app.get('/games', games.findAll);

    // Retrive game by ID
    app.get('/games/:id', games.findOneById)

    // Retrive games by console
    app.get('/consoles/:console', games.findByConsole)

    // Update one game by ID
    app.put('/games/:id', games.update);

    // Delete a game
    app.delete('/games/:id', games.delete);
}