const mongoose = require('mongoose');

const currentYear = new Date().getFullYear();

const MovieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Movie title is required'],
    trim: true
  },
  director: {
    type: String,
    required: [true, 'Director is required'],
    trim: true
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Genre',
    required: [true, 'Genre is required']
  },
  releaseYear: {
    type: Number,
    validate: {
      validator: function(v) {
        return v >= 1888 && v <= currentYear + 1;
      },
      message: props => `${props.value} is not a valid release year`
    }
  },
  rating: {
    type: Number,
    min: [0, 'Rating must be >= 0'],
    max: [10, 'Rating must be <= 10']
  },
  duration: {
    type: Number 
  },
  description: {
    type: String,
    trim: true
  },
  price: {
    type: Number,
    required: [true, 'Price is required']
  },
  inStock: {
    type: Boolean,
    default: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Movie', MovieSchema);
