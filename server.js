const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Review = require('./models/review');

const app = express();
const port = 3000;

app.use(bodyParser.json());


mongoose.connect('mongodb://localhost:27017/wine-reviews', { useNewUrlParser: true });
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));
db.once('open', () => {
  console.log('Connected to MongoDB');
});
