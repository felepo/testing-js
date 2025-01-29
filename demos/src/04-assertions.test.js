// Matchers
test('testing use for objects', () => {
  const data = { name: 'Fernando' };
  data.lastname = 'Poncio';
  // toEqual() is used to compare objects
  expect(data).toEqual({ name: 'Fernando', lastname: 'Poncio' });
});

test('testing use for null', () => {
  const data = null;
  expect(data).toBeNull();
  expect(data).toBeDefined();
  expect(data).not.toBeUndefined();
});

test('testing use for booleans', () => {
  expect(true).toEqual(true);
  expect(false).toEqual(false);
  expect(0).toBeFalsy();
  expect('').toBeFalsy();
  expect(false).toBeFalsy();
});

test('testing use for strings', () => {
  expect('Fernando').toMatch(/nan/);
  expect('Fernando').not.toMatch(/leonel/);
});

test('testing use for arrays', () => {
  const data = ['Fernando', 'Leonel', 'Poncio'];
  expect(data).toContain('Fernando');
  expect(data).not.toContain('Luis');
});
