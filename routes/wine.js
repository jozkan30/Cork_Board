const express = require('express');
const router = express.Router();
const Wine = require('../models/Wine');


router.get('/', async (req, res) => {
  try {
    const wines = await Wine.find();
    res.json(wines);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});


router.post('/', async (req, res) => {
  const wine = new Wine({
    name: req.body.name,
    varietal: req.body.varietal,
    vintage: req.body.vintage,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  });

  try {
    const newWine = await wine.save();
    res.status(201).json(newWine);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
