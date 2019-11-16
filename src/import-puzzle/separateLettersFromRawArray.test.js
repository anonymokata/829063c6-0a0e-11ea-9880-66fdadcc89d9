const { separateLettersFromRawArray } = require("./separateLettersFromRawArray");
const { getTestRawArray } = require("./test-data/testRawArray");

console.error = jest.fn();

afterEach(() => {
  jest.clearAllMocks();
});

test("should create array of 400 letters given array of words and letters", () => {
  const letterArray = separateLettersFromRawArray(getTestRawArray());

  expect(letterArray.length).toBe(400);
  expect(letterArray[0]).toBe("V");
  expect(letterArray[letterArray.length - 1]).toBe("K");
});

test("should write error message to console given raw array contains no letters", () => {
  let badTestArray = [...getTestRawArray()];
  badTestArray.length = 10;

  separateLettersFromRawArray(badTestArray);

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith("Puzzle is invalid. It contains no letters");
});

test("should return error message given puzzle is not square", () => {
  let badTestArray = [...getTestRawArray()];
  badTestArray.length = badTestArray.length - 3;

  separateLettersFromRawArray(badTestArray);

  expect(console.error).toHaveBeenCalledTimes(1);
  expect(console.error).toHaveBeenCalledWith("Puzzle is invalid. It is not square.");
});
