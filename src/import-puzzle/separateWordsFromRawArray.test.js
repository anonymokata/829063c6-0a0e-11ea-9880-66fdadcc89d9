const { separateWordsFromRawArray } = require("./separateWordsFromRawArray");
const { getTestRawArray } = require("./test-data/testRawArray");

console.error = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("should create array of 10 words given array of words and letters", () => {
  const wordArray = separateWordsFromRawArray(getTestRawArray());

  expect(wordArray.length).toBe(10);
  expect(wordArray[0]).toBe("ALPHA");
  expect(wordArray[wordArray.length - 1]).toBe("JULIET");
});

test("should write error message to console given raw array contains no words", () => {
  let badTestArray = [...getTestRawArray()];
  badTestArray.splice(0, 10);

  separateWordsFromRawArray(badTestArray);

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith("Puzzle is invalid. It contains no search words");
});
