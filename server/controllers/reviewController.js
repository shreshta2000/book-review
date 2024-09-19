const Review = require('../models/Review');

exports.createReview = async (req, res) => {
  const review = new Review({
    bookId: req.body.bookId,
    rating: req.body.rating,
    comment: req.body.comment,
  });

  try {
    const newReview = await review.save();
    res.status(201).json(newReview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.getReviewsByBookId = async (req, res) => {
  try {
    const reviews = await Review.find({ bookId: req.params.bookId });
    res.json(reviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};