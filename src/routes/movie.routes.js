const express = require('express');
const router = express.Router();
const MovieController = require('../controllers/movie.controller');
const { checkMovieExists } = require('../middlewares/validationMiddleware');

router.get('/', MovieController.getAllMovies);

router.get('/:id', MovieController.getMovieById);

router.post('/', MovieController.createMovie);

router.put('/:id', checkMovieExists, MovieController.updateMovie);

router.delete('/:id', checkMovieExists, MovieController.deleteMovie);

router.get('/genre/:genreId', MovieController.getMoviesByGenre);

module.exports = router;
