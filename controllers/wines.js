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