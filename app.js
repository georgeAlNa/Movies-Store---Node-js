require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');

const genreRoutes = require('./src/routes/genre.routes');
const movieRoutes = require('./src/routes/movie.routes');
const { requestLogger } = require('./src/middlewares/validationMiddleware');
const errorHandler = require('./src/middlewares/errorHandler');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGODB_URI;

app.use(express.json());
app.use(morgan('dev'));
app.use(requestLogger);

app.use('/api/v1/genres', genreRoutes);
app.use('/api/v1/movies', movieRoutes);

app.use((req, res, next) => {
  res.status(404).json({ success: false, message: 'Route not found' });
});

app.use(errorHandler);

mongoose.connect(MONGODB_URI)
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch(err => {
    console.error('Failed to connect to MongoDB', err);
    process.exit(1);
  });
