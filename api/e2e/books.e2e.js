const mockGetAll = jest.fn(); // This is added to the first line because hoisting issues
const request = require('supertest');
const createApp = require('../src/app');
const { generateManyBooks } = require('../src/fakes/book.fake');

jest.mock('../src/lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockGetAll,
  create: () => {},
})));

describe('Test for books endpoint', () => {
  let app = null;
  let server = null;
  beforeAll(() => {
    app = createApp();
    server = app.listen(3001);
  });

  afterAll(async () => {
    await server.close();
  });

  describe('Test for [GET] /api/v1/books', () => {
    test('Should return an array of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(3);
      mockGetAll.mockResolvedValue(fakeBooks);
      // Act
      const response = await request(app).get('/api/v1/books');
      console.log(response.body);
      // Assert
      expect(response.statusCode).toEqual(200);
      expect(response.body.length).toEqual(fakeBooks.length);
    });
  });
});
