const { calculateDirection, searchDirection } = require("./searchDirection");

test("should return horizontal given first two letters of searchPath are in horizontal alignment in samplePuzzle", () => {
  const searchPath = [
    { x: 2, y: 1 },
    { x: 3, y: 1 },
  ];

  const result = calculateDirection(searchPath[0], searchPath[1]);

  expect(result).toEqual(searchDirection.HORIZONTAL);
});

test("should return horizontal reverse given first two letters of searchPath are in reverse horizontal alignment in samplePuzzle", () => {
  const searchPath = [
    { x: 3, y: 1 },
    { x: 2, y: 1 },
  ];

  const result = calculateDirection(searchPath[0], searchPath[1]);

  expect(result).toEqual(searchDirection.HORIZONTAL_REVERSE);
});

test("should return vertical given first two letters of searchPath are in vertical alignment in samplePuzzle", () => {
  const searchPath = [
    { x: 2, y: 1 },
    { x: 2, y: 2 },
  ];

  const result = calculateDirection(searchPath[0], searchPath[1]);

  expect(result).toEqual(searchDirection.VERTICAL);
});

test("should return vertical reverse given first two letters of searchPath are in reverse vertical alignment in samplePuzzle", () => {
  const searchPath = [
    { x: 2, y: 1 },
    { x: 2, y: 0 },
  ];

  const result = calculateDirection(searchPath[0], searchPath[1]);

  expect(result).toEqual(searchDirection.VERTICAL_REVERSE);
});

test("should return diagonal up given first two letters of searchPath are in diagonal alignment from lower left to upper right in samplePuzzle", () => {
  const searchPath = [
    { x: 2, y: 1 },
    { x: 3, y: 0 },
  ];

  const result = calculateDirection(searchPath[0], searchPath[1]);

  expect(result).toEqual(searchDirection.DIAGONAL_UP);
});

test("should return diagonal up reverse given first two letters of searchPath are in reverse diagonal alignment from upper right to lower left in samplePuzzle", () => {
  const searchPath = [
    { x: 2, y: 1 },
    { x: 1, y: 2 },
  ];

  const result = calculateDirection(searchPath[0], searchPath[1]);

  expect(result).toEqual(searchDirection.DIAGONAL_UP_REVERSE);
});

test("should return diagonal down given first two letters of searchPath are in diagonal alignment from upper left to lower right in samplePuzzle", () => {
  const searchPath = [
    { x: 2, y: 1 },
    { x: 3, y: 2 },
  ];

  const result = calculateDirection(searchPath[0], searchPath[1]);

  expect(result).toEqual(searchDirection.DIAGONAL_DOWN);
});

test("should return diagonal down reverse given first two letters of searchPath are in diagonal alignment from lower right to upper right in samplePuzzle", () => {
  const searchPath = [
    { x: 2, y: 1 },
    { x: 1, y: 0 },
  ];

  const result = calculateDirection(searchPath[0], searchPath[1]);

  expect(result).toEqual(searchDirection.DIAGONAL_DOWN_REVERSE);
});
