import connection from './connection.js'
import Review from './models/Wine_model.js'

const reviews = [
    {
      title: 'Delicious wine',
      description: 'This is the best wine I have ever tasted.',
      rating: 5,
      image: 'https://example.com/image.jpg',
    }]

    const insertData = async () => {
        await connection.dropDatabase();
        await Review.create(reviews)
        await connection.close();
    }
    
    insertData();