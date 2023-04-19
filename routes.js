const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");

const app = express();
const port = 3000;

app.use(bodyParser.json());

const upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "uploads/");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-${file.originalname}`);
    },
  }),
});

app.post("/reviews", upload.single("image"), (req, res) => {
  const newReview = new Review({
    title: req.body.title,
    description: req.body.description,
    rating: req.body.rating,
    image: req.file.path,
  });

  newReview.save((err, review) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(201).json(review);
    }
  });
});

app.get("/reviews", (req, res) => {
  Review.find({}, (err, reviews) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(reviews);
    }
  });
});

app.get("/reviews/:id", (req, res) => {
  Review.findById(req.params.id, (err, review) => {
    if (err) {
      res.status(400).json({ error: err.message });
    } else {
      res.status(200).json(review);
    }
  });
});
