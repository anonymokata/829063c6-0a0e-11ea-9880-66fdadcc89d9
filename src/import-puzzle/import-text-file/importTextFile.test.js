const { importFromTextFileToArray } = require("./importTextFile");

console.log = jest.fn();
console.error = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("should import contents of natoAlphabetPuzzle.txt into array given file is located in puzzle-text-files directory", () => {
  const puzzleTextFile = "natoAlphabetPuzzle.txt";

  const rawPuzzleArray = importFromTextFileToArray(puzzleTextFile);

  //array should contain ten words and a grid of 20 X 20 letters, i.e. 410 elements
  expect(rawPuzzleArray.length).toBe(410);

  //array elements should range from "ALPHA" to "K"
  expect(rawPuzzleArray[0]).toBe("ALPHA");
  expect(rawPuzzleArray[rawPuzzleArray.length - 1]).toBe("K");
});

test("should write error to console given no matching fileName exists in puzzle-text-files directory", () => {
  const puzzleTextFile = "missingPuzzleData.txt";

  try {
    importFromTextFileToArray(puzzleTextFile);
  } catch (e) {
    console.error(e.message);
  }

  //should log unsuccessful loading of puzzle
  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith(`${puzzleTextFile} not found in puzzle-text-files directory.`);
});
