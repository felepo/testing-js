const BooksService = require('./books.service');

// Faker
const fakeBooks = [
  {
    id: '1',
    title: 'The Lord of the Rings',
  },
  {
    id: '2',
    title: 'The Hobbit',
  },
  {
    id: '3',
    title: 'The Silmarillion',
  },
  {
    id: '4',
    title: 'Unfinished Tales',
  },
  {
    id: '5',
    title: 'The Children of Húrin',
  },
];

// Stub
const MongoLibStub = {
  getAll: () => [...fakeBooks],
  create: () => {},
};

// Mock
jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks method', () => {
    test('Should return a list of books', async () => {
      // Arrange
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(5);
    });
  });
});
