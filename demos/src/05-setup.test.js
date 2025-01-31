describe('Set', () => {
  // This will run before all tests
  beforeAll(() => {
    console.log('Before all');
    // we can setup some service here, for example a database connection
  });

  // This will run after all tests
  afterAll(() => {
    console.log('After all');
    // we can stop all services here, for example the database connection
  });

  // This will run before each test
  beforeEach(() => {
    console.log('Before each case test');
    // we can reset the database here or do some other setup for each test
  });

  // This will run after each testW
  afterEach(() => {
    console.log('After each case test');
    // we can clean up the database here or do some other cleanup for each test
  });

  test('Case 1', () => {
    console.log('Case 1');
    expect(1 + 1).toBe(2);
  });

  test('Case 2', () => {
    console.log('Case 2');
    expect(2 + 2).toBe(4);
  });

  describe('Nested', () => {
    // This will run before all tests in the nested describe but not in the parent
    beforeAll(() => {
      console.log('Before all of the nested');
    });

    beforeEach(() => {
      console.log('Before each case test - Nested');
    });

    afterEach(() => {
      console.log('After each case test - Nested');
    });

    test('Case 3', () => {
      console.log('Case 3');
      expect(3 + 3).toBe(6);
    });

    test('Case 4', () => {
      console.log('Case 4');
      expect(4 + 4).toBe(8);
    });
  });
});
