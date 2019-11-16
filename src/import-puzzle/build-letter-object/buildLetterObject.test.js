const { buildLetterObject } = require("./buildLetterObject");
const { getTestLetterArray } = require("../test-data/testLetterArray");

test("should return object of coordinate pairs by letter given letter array", () => {
  const letterObject = buildLetterObject(getTestLetterArray());

  expect(Object.values(letterObject).length).toBe(26);
  expect(letterObject["J"].length).toBe(9);
  expect(letterObject["J"][2]).toEqual({ x: 17, y: 8, tried: false });
  expect(letterObject["C"].length).toBe(22);
  expect(letterObject["C"][14]).toEqual({ x: 19, y: 11, tried: false });
});
