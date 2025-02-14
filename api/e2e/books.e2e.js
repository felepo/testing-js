const request = require('supertest');
const { MongoClient } = require('mongodb');

const createApp = require('../src/app');
const { config } = require('../src/config');

const DB_NAME = config.dbName;
const MONGO_URI = config.dbUrl;

describe('Test for books endpoint', () => {
  let app = null;
  let server = null;
  let database = null;

  beforeAll(async () => {
    app = createApp();
    server = app.listen(3003);
    const client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    await client.connect();
    database = client.db(DB_NAME);
  });

  afterAll(async () => {
    database.dropDatabase();
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('Should return an array of books', async () => {
      // Arrange
      const books = database.collection('books');
      const seedData = await books.insertMany([
        {
          title: 'Test Book',
          year: 2021,
          author: 'Test Author',
        },
        {
          title: 'Test Book2',
          year: 2021,
          author: 'Test Author',
        },
      ]);
      console.log(seedData);
      // Act
      const response = await request(app).get('/api/v1/books');
      console.log(response.body);
      // Assert
      expect(response.statusCode).toEqual(200);
      expect(response.body.length).toEqual(seedData.insertedCount);
    });
  });
});
