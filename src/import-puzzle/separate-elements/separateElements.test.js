const { importFromTextFileToArray } = require("../import-text-file/importTextFile");
const { separateElementsFromRawPuzzleArray, elementType } = require("../separate-elements/separateElements");
const { getTestRawArray } = require("../../test-data/testRawArray");

console.error = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("should create array of 10 words given array of words and letters", () => {
  const wordArray = separateElementsFromRawPuzzleArray(elementType.WORDS, getTestRawArray());

  expect(wordArray.length).toBe(10);
  expect(wordArray[0]).toBe("ALPHA");
  expect(wordArray[wordArray.length - 1]).toBe("JULIET");
});

test("should write error message to console given raw array contains no words", () => {
  let badTestArray = [...getTestRawArray()];
  badTestArray.splice(0, 10);

  try {
    separateElementsFromRawPuzzleArray(elementType.WORDS, badTestArray);
  } catch (e) {
    console.error(e.message);
  }

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith("Puzzle is invalid. It contains no words.");
});

test("should create array of 400 letters given array of words and letters", () => {
  const letterArray = separateElementsFromRawPuzzleArray(elementType.LETTERS, getTestRawArray());

  expect(letterArray.length).toBe(400);
  expect(letterArray[0]).toBe("V");
  expect(letterArray[letterArray.length - 1]).toBe("K");
});

test("should write error message to console given raw array contains no letters", () => {
  let badTestArray = [...getTestRawArray()];
  badTestArray.length = 10;

  try {
    separateElementsFromRawPuzzleArray(elementType.LETTERS, badTestArray);
  } catch (e) {
    console.error(e.message);
  }

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith("Puzzle is invalid. It contains no letters.");
});

test("should return error message given puzzle is not square", () => {
  let badTestArray = [...getTestRawArray()];
  badTestArray.length = badTestArray.length - 3;

  try {
    separateElementsFromRawPuzzleArray(elementType.LETTERS, badTestArray);
  } catch (e) {
    console.error(e.message);
  }

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith("Puzzle is invalid. It is not square.");
});

test("should return arrays of words and letters given 'samplePuzzle.txt' file is located in puzzle-text-files directory", () => {
  const puzzleTextFile = "samplePuzzle.txt";

  const rawArray = importFromTextFileToArray(puzzleTextFile);

  const wordArray = separateElementsFromRawPuzzleArray(elementType.WORDS, rawArray);
  const letterArray = separateElementsFromRawPuzzleArray(elementType.LETTERS, rawArray);

  expect(wordArray.length).toBe(10);
  expect(wordArray[0]).toBe("ALPHA");
  expect(wordArray[wordArray.length - 1]).toBe("JULIET");

  expect(letterArray.length).toBe(400);
  expect(letterArray[0]).toBe("V");
  expect(letterArray[letterArray.length - 1]).toBe("K");
});
