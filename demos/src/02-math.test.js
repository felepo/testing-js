const { sum, multiply, divide, average } = require('./02-math');

test('adds 1 + 3 should be 4', () => {
  const rta =  sum(1, 3);
  expect(rta).toBe(4);
});

test('the multiply 1 * 4 should be 4', () => {
  const rta = multiply(1, 4);
  expect(rta).toBe(4);
});

test('the divide tests', () => {
  const rta = divide(6, 3);
  expect(rta).toBe(2);
  const rta2 =  divide(5, 2);
  expect(rta2).toBe(2.5);
});

test('should divide for zero', () => {
  const rta = divide(6, 0);
  expect(rta).toBeNull();
  const rta2 = divide(5, 0);
  expect(rta2).toBeNull();
});

test('the average 1, 2, 3, 4, 5 should be 3', () => {
  const rta = average(1, 2, 3, 4, 5);
  expect(rta).toBe(3);
});

// The function should handle different unexpected params type
test('the average 1, "a", 3, 4, 5 should be 3.25', () => {
  const rta = average(1, "a", 3, 4, 5);
  expect(rta).toBe(3.25);
});
