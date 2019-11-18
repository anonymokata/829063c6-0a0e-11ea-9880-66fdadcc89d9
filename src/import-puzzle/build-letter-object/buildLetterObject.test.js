const _ = require("lodash");
const { buildLetterObject, buildCoordinatePair } = require("./buildLetterObject");
const { importFromTextFileToArray } = require("../import-text-file/importTextFile");
const { separateElementsFromRawPuzzleArray, elementType } = require("../separate-elements/separateElements");
const { getTestLetterArray } = require("../../test-data/testLetterArray");

test("should return object with letter, x-coordinate, and y-coordinate given index and array", () => {
  const testLetterArray = ["A", "Q", "T", "D", "J", "M", "R", "E", "F"];
  const expectedCoordinatePair = { letter: "J", x: 1, y: 1, tried: false };

  const coordinatePair = buildCoordinatePair("J", 4, testLetterArray);

  expect(_.isEqual(coordinatePair, expectedCoordinatePair)).toBe(true);
});

test("should return object of coordinate pairs by letter given letter array", () => {
  const letterObject = buildLetterObject(getTestLetterArray());

  expect(Object.values(letterObject).length).toBe(26);
  expect(letterObject["J"].length).toBe(9);
  expect(letterObject["J"][2]).toEqual({ x: 17, y: 8, tried: false });
  expect(letterObject["C"].length).toBe(22);
  expect(letterObject["C"][14]).toEqual({ x: 19, y: 11, tried: false });
});

test("should return letterObject given text file is in puzzle-text-files directory", () => {
  const puzzleTextFile = "natoAlphabetPuzzle.txt";

  const rawArray = importFromTextFileToArray(puzzleTextFile);

  const letterArray = separateElementsFromRawPuzzleArray(elementType.LETTERS, rawArray);

  const letterObject = buildLetterObject(letterArray);

  expect(Object.values(letterObject).length).toBe(26);
  expect(letterObject["J"].length).toBe(9);
  expect(letterObject["J"][2]).toEqual({ x: 17, y: 8, tried: false });
  expect(letterObject["C"].length).toBe(22);
  expect(letterObject["C"][14]).toEqual({ x: 19, y: 11, tried: false });
});
