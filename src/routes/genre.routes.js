const express = require('express');
const router = express.Router();
const GenreController = require('../controllers/genre.controller');
const { checkGenreExists } = require('../middlewares/validationMiddleware');

router.get('/', GenreController.getAllGenres);

router.get('/:id', GenreController.getGenreById);

router.post('/', GenreController.createGenre);

router.put('/:id', checkGenreExists, GenreController.updateGenre);

router.delete('/:id', checkGenreExists, GenreController.deleteGenre);

module.exports = router;
