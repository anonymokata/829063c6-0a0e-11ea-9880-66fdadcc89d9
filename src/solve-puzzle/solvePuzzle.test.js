const { solvePuzzle } = require("./solvePuzzle");
const { getTestLetterObject } = require("../test-data/testLetterObject");
const { getTestSolution } = require("../test-data/testSolution");
const { importFromTextFileToArray } = require("../import-puzzle/import-text-file/importTextFile");
const { separateElementsFromRawPuzzleArray, elementType } = require("../import-puzzle/separate-elements/separateElements");
const { buildLetterObject } = require("../import-puzzle/build-letter-object/buildLetterObject");

test("should solve puzzle by finding all words given searchWords array and letterObject", () => {
  const searchWords = ["ALPHA", "BRAVO", "CHARLIE", "DELTA", "ECHO", "FOXTROT", "GOLF", "HOTEL", "INDIA", "JULIET"];

  const letterObject = getTestLetterObject();

  const result = solvePuzzle(searchWords, letterObject);

  expect(result).toBe(getTestSolution());
});

test("should solve puzzle given text file is in puzzle-text-files directory", () => {
  const puzzleTextFile = "samplePuzzle.txt";

  const rawArray = importFromTextFileToArray(puzzleTextFile);
  const letterArray = separateElementsFromRawPuzzleArray(elementType.LETTERS, rawArray);
  const letterObject = buildLetterObject(letterArray);

  const wordArray = separateElementsFromRawPuzzleArray(elementType.WORDS, rawArray);

  const result = solvePuzzle(wordArray, letterObject);

  expect(result).toBe(getTestSolution());
});
