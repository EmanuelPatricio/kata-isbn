const IsbnValidator = require('./isbnValidator');

test('CP_Empty', () => {
  expect(IsbnValidator("")).toBe("Empty values not allowed");
})

test('CP_10', () => {
  expect(IsbnValidator("0-7167-0344-0")).toBe(true);
})

test('CP_13', () => {
  expect(IsbnValidator("978-0-7167-0344-0")).toBe(true);
})
