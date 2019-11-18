const { addNextPair } = require("./addNextPair");
const { getTestLetterObject } = require("../test-data/testLetterObject");

test("should add pairs to the searchPath recursively given the searchWord is JULIET and the search path contains the correct first letter pair", () => {
  const searchPath = [{ x: 2, y: 1, tried: true }];

  const result = addNextPair("JULIET", searchPath, getTestLetterObject());

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

test("should remove the pair from the searchPath given the searchWord is JULIET and the search path contains the incorrect first letter pair", () => {
  const searchPath = [{ x: 17, y: 8, tried: true }];

  const result = addNextPair("JULIET", searchPath, getTestLetterObject());

  expect(JSON.stringify(result)).toBe(JSON.stringify([]));
});

test("should add pairs to the searchPath recursively given the searchWord is ALPHA and the search path contains the correct first letter pair", () => {
  const searchPath = [{ x: 13, y: 13, tried: true }];

  const result = addNextPair("ALPHA", searchPath, getTestLetterObject());

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
