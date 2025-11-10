const errorHandler = (err, req, res, next) => {
  console.error(err);

  if (err.code === 11000) {
    const message = 'Duplicate field value entered';
    return res.status(400).json({ success: false, error: message });
  }

  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map(val => val.message);
    return res.status(400).json({ success: false, error: message });
  }

  if (err.name === 'CastError') {
    return res.status(400).json({ success: false, error: `Invalid ${err.path}: ${err.value}` });
  }

  res.status(500).json({
    success: false,
    error: err.message || 'Server Error'
  });
};

module.exports = errorHandler;
