const { searchForWord } = require("./searchForWord");
const { getTestLetterObject } = require("../test-data/testLetterObject");

test("should find JULIET given the word is hidden in the puzzle", () => {
  const result = searchForWord("JULIET", getTestLetterObject());

  expect(result).toBe("JULIET: (2,1),(3,1),(4,1),(5,1),(6,1),(7,1)");
});

test("should find ALPHA given the word is hidden in the puzzle", () => {
  const result = searchForWord("ALPHA", getTestLetterObject());

  expect(result).toBe("ALPHA: (13,13),(14,14),(15,15),(16,16),(17,17)");
});
