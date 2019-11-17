const { addNextPair } = require("./addNextPair");
const { getTestLetterObject } = require("../test-data/testLetterObject");

test("should add next pair to the searchPath given the searchWord is JULIET and the search path contains the correct first letter pair", () => {
  const searchPath = [{ x: 2, y: 1, tried: true }];

  const result = addNextPair("JULIET", searchPath, getTestLetterObject());

  expect(JSON.stringify(result)).toBe(
    JSON.stringify([
      { x: 2, y: 1, tried: true },
      { x: 3, y: 1, tried: true },
    ])
  );
});

test("should not add next pair to the searchPath given the searchWord is JULIET and the search path contains the incorrect first letter pair", () => {
  const searchPath = [{ x: 17, y: 8, tried: true }];

  const result = addNextPair("JULIET", searchPath, getTestLetterObject());

  expect(JSON.stringify(result)).toBe(JSON.stringify([{ x: 17, y: 8, tried: true }]));
});

test("should add next pair to the searchPath given the search word is ALPHA and the search path contains the correct first letter pair", () => {
  const searchPath = [{ x: 13, y: 13, tried: true }];

  const result = addNextPair("ALPHA", searchPath, getTestLetterObject());

  expect(JSON.stringify(result)).toBe(
    JSON.stringify([
      { x: 13, y: 13, tried: true },
      { x: 14, y: 14, tried: true },
    ])
  );
});
