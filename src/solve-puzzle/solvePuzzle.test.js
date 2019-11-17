const { solvePuzzle } = require("./solvePuzzle");
const { getTestSolution } = require("../test-data/testSolution");
const { getExampleStarTrekSolution } = require("../test-data/exampleStarTrekSolution");

console.log = jest.fn();
console.error = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("should solve puzzle given text file is in puzzle-text-files directory", () => {
  const puzzleTextFile = "samplePuzzle.txt";

  const result = solvePuzzle(puzzleTextFile);

  expect(result).toBe(getTestSolution());
});

test("should solve example Star Trek puzzle given text file is in puzzle-text-files directory", () => {
  const puzzleTextFile = "exampleStarTrekPuzzle.txt";

  const result = solvePuzzle(puzzleTextFile);

  expect(result).toBe(getExampleStarTrekSolution());
});

test("should write error to console given no matching fileName exists in puzzle-text-files directory", () => {
  const puzzleTextFile = "missingPuzzleData.txt";

  solvePuzzle(puzzleTextFile);

  //should log unsuccessful loading of puzzle
  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith(`${puzzleTextFile} not found in puzzle-text-files directory.`);
});

test("should write error to console given text file is empty", () => {
  const puzzleTextFile = "emptyPuzzle.txt";

  solvePuzzle(puzzleTextFile);

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith(`Puzzle is invalid. It contains no letters.`);
});

test("should write error to console given text file contains no words", () => {
  const puzzleTextFile = "wordlessPuzzle.txt";

  solvePuzzle(puzzleTextFile);

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith(`Puzzle is invalid. It contains no words.`);
});

test("should write error to console given text file contains no letters", () => {
  const puzzleTextFile = "letterlessPuzzle.txt";

  solvePuzzle(puzzleTextFile);

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith(`Puzzle is invalid. It contains no letters.`);
});

test("should include note about a word not found in puzzle given text file contains a word not in the puzzle", () => {
  const puzzleTextFile = "missingWordPuzzle.txt";

  const result = solvePuzzle(puzzleTextFile);

  expect(result.includes("ZULU not found in puzzle.")).toBe(true);
});
