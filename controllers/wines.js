import Review from "../models/Wine_model.js"

export const getReviews = async (req, res) => {
    try {
      const review = await Review.find();
      res.json(review);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };

  export const createReview = async (req, res) => {
    try {
      const review = new Review(req.body);
      await review.save();
      res.status(201).json(review);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: error.message });
    }
  };