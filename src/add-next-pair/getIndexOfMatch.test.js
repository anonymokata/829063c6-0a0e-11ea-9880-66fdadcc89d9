const { getIndexOfMatch } = require("./addNextPair");
const { getTestLetterObject } = require("../test-data/testLetterObject");

const testLetterObject = getTestLetterObject();

test("should return five given candidate pair matches fifth element of M in letterObject", () => {
  const candidatePair = { x: 6, y: 7 };
  const mPairs = testLetterObject["M"];

  const result = getIndexOfMatch(candidatePair, mPairs);

  expect(result).toBe(5);
});

test("should return negative one given candidate pair does not match any element of M in letterObject", () => {
  const candidatePair = { x: 1, y: 1 };
  const mPairs = testLetterObject["M"];

  const result = getIndexOfMatch(candidatePair, mPairs);

  expect(result).toBe(-1);
});
