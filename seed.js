import mongoose from 'mongoose'
import connection from './connection.js'
import data from './data.json' assert { type: 'json' }
import {Review} from './Wine.js'

const reviews = [
    {
      title: 'Delicious wine',
      description: 'This is the best wine I have ever tasted.',
      rating: 5,
      image: 'https://example.com/image.jpg',
    }]

    async function seed() {
        await Review.deleteMany({});
        await Review.insertMany(reviews);
        console.log('Database seeded!');
        mongoose.disconnect();
      }
      
      seed();