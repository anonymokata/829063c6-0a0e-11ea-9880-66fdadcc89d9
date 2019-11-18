const { displaySolution } = require("./displaySolution");

console.log = jest.fn();
console.error = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("should display solution given file name smallPuzzle.txt", () => {
  displaySolution("smallPuzzle.txt");

  expect(console.log).toBeCalledWith(`\nART: (2,0),(1,1),(0,2)\nRAT: (0,0),(0,1),(0,2)\nTAR: (0,2),(0,1),(0,0)`);
});

test("should display nothing given file name missingPuzzle.txt", () => {
  displaySolution("missingPuzzle.txt");

  expect(console.log).toBeCalledTimes(0);
});
