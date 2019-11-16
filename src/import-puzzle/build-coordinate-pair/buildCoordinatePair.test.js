const _ = require("lodash");
const { buildCoordinatePair } = require("./buildCoordinatePair");

test("should return object with letter, x-coordinate, and y-coordinate given index and array", () => {
  const testLetterArray = ["A", "Q", "T", "D", "J", "M", "R", "E", "F"];
  const expectedCoordinatePair = { letter: "J", x: 1, y: 1, tried: false };

  const coordinatePair = buildCoordinatePair("J", 4, testLetterArray);

  expect(_.isEqual(coordinatePair, expectedCoordinatePair)).toBe(true);
});
