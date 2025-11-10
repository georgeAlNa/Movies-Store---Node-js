const Genre = require('../models/Genre');
const Movie = require('../models/Movie');

const requestLogger = (req, res, next) => {
  const now = new Date().toISOString();
  console.log(`[${now}] ${req.method} ${req.originalUrl}`);
  next();
};

const checkGenreExists = async (req, res, next) => {
  try {
    const id = req.params.id;
    const genre = await Genre.findById(id);
    if (!genre) return res.status(404).json({ message: 'Genre not found' });
    next();
  } catch (error) {
    next(error);
  }
};

const checkMovieExists = async (req, res, next) => {
  try {
    const id = req.params.id;
    const movie = await Movie.findById(id);
    if (!movie) return res.status(404).json({ message: 'Movie not found' });
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  requestLogger,
  checkGenreExists,
  checkMovieExists
};
