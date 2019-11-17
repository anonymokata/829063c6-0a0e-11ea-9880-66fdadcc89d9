const { searchForWord } = require("./searchForWord");
const { getTestLetterObject } = require("../test-data/testLetterObject");

test("should find JULIET given the word is hidden in the puzzle", () => {
  const result = searchForWord("JULIET", getTestLetterObject());

  expect(JSON.stringify(result)).toBe(
    JSON.stringify([
      { x: 2, y: 1, tried: true },
      { x: 3, y: 1, tried: true },
      { x: 4, y: 1, tried: true },
      { x: 5, y: 1, tried: true },
      { x: 6, y: 1, tried: true },
      { x: 7, y: 1, tried: true },
    ])
  );
});

test("should find ALPHA given the word is hidden in the puzzle", () => {
  const result = searchForWord("ALPHA", getTestLetterObject());

  expect(JSON.stringify(result)).toBe(
    JSON.stringify([
      { x: 13, y: 13, tried: true },
      { x: 14, y: 14, tried: true },
      { x: 15, y: 15, tried: true },
      { x: 16, y: 16, tried: true },
      { x: 17, y: 17, tried: true },
    ])
  );
});
