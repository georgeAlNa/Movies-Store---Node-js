const Genre = require('../models/Genre');

class GenreController {
  static async getAllGenres(req, res) {
    try {
      const genres = await Genre.find();
      res.status(200).json({ success: true, data: genres });
    } catch (error) {
      throw new Error(`Failed to fetch genres: ${error.message}`);
    }
  }

  static async getGenreById(req, res) {
    try {
      const genre = await Genre.findById(req.params.id);
      if (!genre) return res.status(404).json({ message: 'Genre not found' });
      res.status(200).json({ success: true, data: genre });
    } catch (error) {
      throw new Error(`Failed to fetch genre: ${error.message}`);
    }
  }

  static async createGenre(req, res) {
    try {
      const { name, description } = req.body;
      const genre = await Genre.create({ name, description });
      res.status(201).json({ success: true, data: genre });
    } catch (error) {
      throw new Error(`Failed to create genre: ${error.message}`);
    }
  }

  static async updateGenre(req, res) {
    try {
      const {id} = req.params;
      const {name, description} = req.body;
      const genre = await Genre.findById(id);

      if (!genre) {
        return res.status(404).json({
          success: false,
          data: null,
        })
      };
      
      const updated = await Genre.findByIdAndUpdate(id, {name, description}, { new: true});
      res.status(201).json({
          success: true,
          data: updated
        });
    } catch (error) {
      throw new Error(`Failed to update genre: ${error.message}`);
    }
  }

  static async deleteGenre(req, res) {
    try {
      const {id} = req.params;
      const genre = await Genre.findById(id);
      if(!genre){
        return res.status(404).json({
          success: false,
          data: null,
        })
      };
      const deleted = await Genre.findByIdAndDelete(id);
      res.status(200).json({
          success: true,
          data: deleted,
        });
    } catch (error) {
      throw new Error(`Failed to delete genre: ${error.message}`);
    }
  }
}

module.exports = GenreController;
