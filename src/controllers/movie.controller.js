const Movie = require('../models/Movie');
const Genre = require('../models/Genre');

class MovieController {
  static async getAllMovies(req, res) {
    try {
      const movies = await Movie.find().populate('genre');
      res.status(200).json({ success: true, data: movies });
    } catch (error) {
      throw new Error(`Failed to fetch movies: ${error.message}`);
    }
  }

  static async getMovieById(req, res) {
    try {
      const {id} = req.params;
      const movie = await Movie.findById(id).populate('genre');
      if (!movie) return res.status(404).json({ message: 'Movie not found' });
      res.status(200).json({ success: true, data: movie });
    } catch (error) {
      throw new Error(`Failed to fetch movie: ${error.message}`);
    }
  }

  static async createMovie(req, res, ) {
    try {
      const { title, director, genre, releaseYear, rating, duration, description, price, inStock } = req.body;

      const foundGenre = await Genre.findById(genre);
      if (!foundGenre) return res.status(400).json({ message: 'Invalid genre id' });

      const movie = await Movie.create({
        title, director, genre, releaseYear, rating, duration, description, price, inStock
      });

      const populated = await movie.populate('genre');
      res.status(201).json({ success: true, data: populated });
    } catch (error) {
      throw new Error(`Failed to create movie: ${error.message}`);
    }
  }

  static async updateMovie(req, res) {
    try {
      if (req.body.genre) {
        const foundGenre = await Genre.findById(req.body.genre);
        if (!foundGenre) return res.status(400).json({ message: 'Invalid genre id' });
      }

      const updated = await Movie.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true }).populate('genre');
      if (!updated) return res.status(404).json({ message: 'Movie not found' });
      res.status(200).json({ success: true, data: updated });
    } catch (error) {
      throw new Error(`Failed to update movie: ${error.message}`);
    }
  }

  static async deleteMovie(req, res) {
    try {
      const deleted = await Movie.findByIdAndDelete(req.params.id);
      if (!deleted) return res.status(404).json({ message: 'Movie not found' });
      res.status(200).json({ success: true, data: {} });
    } catch (error) {
      throw new Error(`Failed to delete movie: ${error.message}`);
    }
  }

  static async getMoviesByGenre(req, res) {
    try {
      const movies = await Movie.find({ genre: req.params.genreId }).populate('genre');
      res.status(200).json({ success: true, data: movies });
    } catch (error) {
      throw new Error(`Failed to fetch movies by genre: ${error.message}`);
    }
  }
}

module.exports = MovieController;
