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
      mockSpyGetAll.mockResolvedValue(fakeBooks);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books.length).toEqual(5);
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
      expect(mockSpyGetAll).toHaveBeenCalledWith('books', {});
    });

    test('Should return a specific book', async () => {
      // Arrange
      mockSpyGetAll.mockResolvedValue([
        {
          id: '1',
          title: 'The Lord of the Rings',
        },
      ]);
      // Act
      const books = await service.getBooks({});
      console.log(books);
      // Assert
      expect(books[0].title).toEqual('The Hobbit');
      expect(mockSpyGetAll).toHaveBeenCalled();
      expect(mockSpyGetAll).toHaveBeenCalledTimes(1);
    });
  });
});
