const BooksService = require('./books.service');
const { generateManyBooks, generateOneBook } = require('../fakes/book.fake');

// Faker
// THIS IS REPLACED FOR THE FAKER BOOKS
// const fakeBooks = [
//   {
//     id: '1',
//     title: 'The Lord of the Rings',
//   },
// ];

// Stub
// THIS IS USED WITH FAKE DATA
// const MongoLibStub = {
//   getAll: () => [...fakeBooks],
//   create: () => {},
// };

// THIS IS USED WITH SPIES
const mockSpyGetAll = jest.fn();

// WE DON'T USE THIS BECAUSE WE NEED TO USE MOCKS IN ANOTHER FILE
// const MongoLibStub = {
//   getAll: mockSpyGetAll,
//   create: () => {},
// };

// Mock
// THIS IS THE SAME AS THE STUB BUT WE USE MOCKS IN ANOTHER FILE
// jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => MongoLibStub));

jest.mock('../lib/mongo.lib', () => jest.fn().mockImplementation(() => ({
  getAll: mockSpyGetAll,
  create: () => {},
})));

describe('Test for BooksService', () => {
  let service;

  beforeEach(() => {
    service = new BooksService();
    jest.clearAllMocks();
  });

  describe('Test for getBooks method', () => {
    test('Should return a list of books', async () => {
      // Arrange
      const fakeBooks = generateManyBooks(20);
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(fakeBooks.length);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return a specific book', async () => {
      // Arrange
      const fakeBook = generateOneBook();
      mockSpyGetAll.mockResolvedValue(fakeBook);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books).not.toBeFalsy();
      expect(books).not.toBeUndefined();
      expect(books.title).toEqual(fakeBook.title);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
