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

  export const getSingleReview = async (req, res) => {
    try {
      const { id } = req.params;
      const review = await Review.findById(id);
      if (review) {
        return res.json(review);
      }
      res.status(404).json({ message: "Not found! Use Valid ID" });
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

  export const createComment = async (req, res) => {
    const { id } = req.params;
    const { user, content } = req.body;
    try {
      const review = await Review.findById(id);
  
      if (!review) {
        return res.status(404).json({ message: 'Review not found' });
      }
  
      review.comments.push({ user, content });
      await review.save();
  
      res.status(201).json(review);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Server error' });
    }
  };